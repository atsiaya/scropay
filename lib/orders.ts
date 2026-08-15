import { SellOrder, Network } from "./types";
import { getTreasuryAddress } from "./treasury";
import { logTransaction } from "./firebase";
import { sendOwnerNotification, sendUserEmail, renderDetailsTable } from "./email";
import { formatAsset, formatFiat } from "./format";
import { formatMsisdn } from "./phone";

/**
 * A Map on a module-level variable. This works for local dev and for a
 * single warm serverless instance, but Vercel can and will route
 * consecutive requests to different instances — so this will lose orders
 * unpredictably in production. Before this handles real money, swap this
 * for a real store: Vercel KV / Upstash Redis (fast, simple, a good fit
 * for "pending order, short TTL") or a Postgres table if you also want it
 * queryable for reconciliation later. The function signatures below are
 * the whole surface area you'd need to keep — swap the implementation,
 * not the callers.
 */
const orders = new Map<string, SellOrder>();

const ORDER_TTL_MS = 15 * 60 * 1000; // 15 minutes to complete the deposit

function generateOrderId(): string {
  return `ord_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function createSellOrder(input: {
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
  email: string | null;
}): SellOrder {
  const now = Date.now();
  const order: SellOrder = {
    id: generateOrderId(),
    direction: "sell",
    asset: input.asset,
    network: input.network,
    assetAmount: input.assetAmount,
    fiatAmount: input.fiatAmount,
    mpesaNumber: input.mpesaNumber,
    email: input.email,
    depositAddress: getTreasuryAddress(input.network),
    status: "pending_deposit",
    createdAt: now,
    expiresAt: now + ORDER_TTL_MS,
  };
  orders.set(order.id, order);
  return order;
}

export function getSellOrder(id: string): SellOrder | undefined {
  const order = orders.get(id);
  if (!order) return undefined;
  if (order.status === "pending_deposit" && Date.now() > order.expiresAt) {
    order.status = "expired";
  }
  return order;
}

export function markAwaitingVerification(id: string): SellOrder | undefined {
  const order = orders.get(id);
  if (!order) return undefined;
  if (order.status === "pending_deposit") {
    order.status = "awaiting_verification";
  }
  return order;
}

/**
 * Same shape as lib/buy-orders.ts's finalizeBuyOrder: log the full order
 * to Firestore, notify you, and email the customer if they gave one —
 * called once, right when "I have already paid" flips the order to
 * awaiting_verification. Sell doesn't have a clean paid/failed binary
 * the way Kopokopo gives buy orders — this is a claim, not a confirmed
 * outcome — so the copy below is written as "we're checking," not "it's
 * done." If you build the on-chain watcher described in the deposit
 * step's comments, that's the point to call this again (or a sibling
 * function) once the deposit is actually confirmed on-chain.
 */
export async function finalizeSellOrderClaim(order: SellOrder): Promise<void> {
  await logTransaction(order);

  await sendOwnerNotification(
    `Sell order awaiting verification — ${formatAsset(order.assetAmount)} USDT`,
    renderDetailsTable([
      ["Order ID", order.id],
      ["Status", "Awaiting verification"],
      ["Asset sent (claimed)", `${formatAsset(order.assetAmount)} ${order.asset}`],
      ["Network", order.network],
      ["Deposit address", order.depositAddress],
      ["Payout amount", `KES ${formatFiat(order.fiatAmount)}`],
      ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
      ["Email", order.email ?? "—"],
      ["Created", new Date(order.createdAt).toLocaleString()],
      ["Expires", new Date(order.expiresAt).toLocaleString()],
    ])
  );

  if (order.email) {
    await sendUserEmail(
      order.email,
      "We're verifying your USDT sale",
      `<p>We've received your confirmation that you sent USDT — we're checking for it now.</p>
       ${renderDetailsTable([
         ["Order ID", order.id],
         ["Amount", `${formatAsset(order.assetAmount)} ${order.asset} (${order.network})`],
         ["You'll receive", `KES ${formatFiat(order.fiatAmount)}`],
         ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
       ])}
       <p>Once confirmed, we'll send the KES above to that M-Pesa number.</p>`
    );
  }
}
