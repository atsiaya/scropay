import { NextResponse } from "next/server";
import { getQuote } from "@/lib/rates";
import { normalizeMsisdn } from "@/lib/phone";
import { MIN_BUY_FIAT_KES, MAX_BUY_FIAT_KES } from "@/lib/limits";
import { initiateStkPush, getStkPushPayment } from "@/lib/kopokopo";
import {
  createBuyOrder,
  getBuyOrder,
  attachKopokopoResource,
  markBuyOrderPaid,
  setBuyOrderStatus,
  getPendingBuyOrders,
  notifyBuyOrderPaid,
} from "@/lib/buy-orders";
import type { Network } from "@/lib/types";

export const dynamic = "force-dynamic";

/**
 * SECURITY MODEL: the browser is untrusted. The only client values that
 * influence an order are fiatAmount (validated + bounded), network (allowlist),
 * walletAddress (format-checked), mpesaNumber and email (normalised). The
 * asset is always USDT and assetAmount is ALWAYS recomputed here from the
 * live server-side quote — whatever the client sends for it is ignored.
 * Unknown fields are dropped.
 */

const ALLOWED_NETWORKS: readonly Network[] = ["CELO", "POLYGON", "BASE"];
const EVM_ADDRESS = /^0x[a-fA-F0-9]{40}$/;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const ASSET = "USDT";

// --- tiny in-memory abuse guard (per warm instance; swap for Redis/KV at scale)
const hits = new Map<string, number[]>();
function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > max;
}

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(`ip:${ip}`, 8, 10 * 60 * 1000)) {
    return bad("Too many attempts. Please wait a few minutes and try again.", 429);
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return bad("Invalid request.");
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return bad("Invalid request.");
  const body = raw as Record<string, unknown>;

  // ---- asset: fixed. Reject anything else instead of silently accepting it.
  if (body.asset !== undefined && String(body.asset).toUpperCase() !== ASSET) {
    return bad("Unsupported asset.");
  }

  // ---- network: strict allowlist
  const network = String(body.network ?? "").toUpperCase() as Network;
  if (!ALLOWED_NETWORKS.includes(network)) return bad("Unsupported network.");

  // ---- wallet: must be a well-formed EVM address (all allowed networks are EVM)
  const walletAddress = typeof body.walletAddress === "string" ? body.walletAddress.trim() : "";
  if (!EVM_ADDRESS.test(walletAddress)) return bad("Invalid wallet address.");

  // ---- fiat amount: finite whole-number KES inside the no-KYC window
  const fiatAmount = typeof body.fiatAmount === "number" ? body.fiatAmount : Number(body.fiatAmount);
  if (!Number.isFinite(fiatAmount) || !Number.isInteger(fiatAmount)) {
    return bad("Amount must be a whole number of KES.");
  }
  if (fiatAmount < MIN_BUY_FIAT_KES) return bad(`Minimum purchase is KES ${MIN_BUY_FIAT_KES}.`);
  if (fiatAmount > MAX_BUY_FIAT_KES) {
    return bad(`Maximum purchase is KES ${MAX_BUY_FIAT_KES} without verification.`);
  }

  // ---- phone + email
  const msisdn = typeof body.mpesaNumber === "string" ? normalizeMsisdn(body.mpesaNumber) : null;
  if (!msisdn) return bad("Enter a valid M-Pesa number, e.g. 0712345678.");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) return bad("Enter a valid email address.");

  // ---- per-phone throttle + one live prompt at a time
  if (rateLimited(`msisdn:${msisdn}`, 4, 10 * 60 * 1000)) {
    return bad("Too many attempts for this number. Please wait a few minutes.", 429);
  }
  const alreadyPending = getPendingBuyOrders().some(
    (o) => o.mpesaNumber === msisdn && Date.now() < o.expiresAt
  );
  if (alreadyPending) {
    return bad("You already have a payment in progress. Complete it or wait a minute to retry.", 409);
  }

  // ---- price: derived server-side, never from the client
  let buyRate: number;
  try {
    const quote = (await getQuote(network)) as { buyRate?: number };
    buyRate = Number(quote.buyRate);
  } catch (err) {
    console.error("stk-push: quote failed", err);
    return bad("Couldn't fetch a live rate. Please try again.", 503);
  }
  if (!Number.isFinite(buyRate) || buyRate <= 0) {
    return bad("Rate unavailable. Please try again.", 503);
  }
  const assetAmount = Number((fiatAmount / buyRate).toFixed(6));
  if (!(assetAmount > 0)) return bad("Amount too small.");

  const order = createBuyOrder({
    asset: ASSET,
    network,
    assetAmount,
    fiatAmount,
    mpesaNumber: msisdn,
    email,
    walletAddress,
  });

  try {
    const base = (process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/$/, "");
    const { resourceUrl } = await initiateStkPush({
      phoneNumber: msisdn,
      amountKes: order.fiatAmount, // from the order, not the request
      reference: order.id,
      callbackUrl: `${base}/api/webhooks/kopokopo`,
      email,
    });
    attachKopokopoResource(order.id, resourceUrl);
  } catch (err) {
    console.error("stk-push: initiate failed", err);
    setBuyOrderStatus(order.id, "failed", "Could not send the M-Pesa prompt.");
    return bad("Couldn't send the M-Pesa prompt. Please try again.", 502);
  }

  // Return the authoritative numbers so the UI shows what will really be charged.
  return NextResponse.json({
    orderId: order.id,
    fiatAmount: order.fiatAmount,
    assetAmount: order.assetAmount,
    network: order.network,
    walletAddress: order.walletAddress,
  });
}

/** Poll endpoint: confirms with Kopokopo directly, never trusts the client. */
export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return bad("Missing id.");

  let order = getBuyOrder(id);
  if (!order) return bad("Order not found.", 404);

  if (order.status === "pending_payment" && order.kopokopoResourceUrl) {
    const payment = await getStkPushPayment(order.kopokopoResourceUrl);
    if (payment.status === "success") {
      const paid = markBuyOrderPaid(order.id, {
        mpesaReference: payment.mpesaReference,
        payerName: payment.payerName,
      });
      if (paid) {
        try {
          await notifyBuyOrderPaid(paid);
        } catch (err) {
          console.error("stk-push: notify failed", err);
        }
        order = paid;
      }
    } else if (payment.status === "failed") {
      setBuyOrderStatus(order.id, "failed", "Payment was not completed.");
      order = getBuyOrder(id) ?? order;
    }
  }

  // Expose only what the UI needs.
  return NextResponse.json({
    id: order.id,
    status: order.status,
    fiatAmount: order.fiatAmount,
    assetAmount: order.assetAmount,
    network: order.network,
  });
}
