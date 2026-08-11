import { NextRequest, NextResponse } from "next/server";
import {
  createBuyOrder,
  attachKopokopoResource,
  getBuyOrder,
  setBuyOrderStatus,
  notifyBuyOrderPaid,
} from "@/lib/buy-orders";
import { initiateStkPush, getStkPushStatus } from "@/lib/kopokopo";
import { normalizeMsisdn } from "@/lib/phone";
import { Network } from "@/lib/types";
import { MIN_BUY_FIAT_KES } from "@/lib/limits";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { asset, network, assetAmount, fiatAmount, mpesaNumber, email, walletAddress } = body as {
    asset?: string;
    network?: Network;
    assetAmount?: number;
    fiatAmount?: number;
    mpesaNumber?: string;
    email?: string;
    walletAddress?: string;
  };

  // Re-check everything server-side, same principle as /api/orders (sell
  // side) — the UI's limits and formats are for a good experience, not
  // enforcement.
  const msisdn = normalizeMsisdn(mpesaNumber ?? "");
  if (!msisdn) {
    return NextResponse.json(
      { error: "Enter a valid M-Pesa number, e.g. 07XXXXXXXX" },
      { status: 400 }
    );
  }
  if (typeof fiatAmount !== "number" || fiatAmount < MIN_BUY_FIAT_KES) {
    return NextResponse.json({ error: "Amount is below the minimum" }, { status: 400 });
  }
  if (!asset || !network || typeof assetAmount !== "number" || !walletAddress) {
    return NextResponse.json({ error: "Missing order fields" }, { status: 400 });
  }

  const order = createBuyOrder({
    asset,
    network,
    assetAmount,
    fiatAmount,
    mpesaNumber: msisdn,
    email: email?.trim() || null,
    walletAddress,
  });

  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const { resourceUrl } = await initiateStkPush({
      phoneNumber: `+${msisdn}`,
      amountKes: fiatAmount,
      reference: order.id,
      callbackUrl: `${appUrl}/api/webhooks/kopokopo`,
      email: email?.trim() || undefined,
    });
    attachKopokopoResource(order.id, resourceUrl);

    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Payment request failed" },
      { status: 502 }
    );
  }
}

export async function GET(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get("id");
  if (!orderId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const order = getBuyOrder(orderId);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Don't rely solely on the webhook having fired — poll Kopokopo
  // directly here too. The webhook is a nice-to-have for fast updates in
  // production; the frontend polling this endpoint is what actually
  // guarantees the "waiting for confirmation" screen resolves, even in a
  // dev setup with no public webhook URL configured at all.
  if (order.status === "pending_payment" && order.kopokopoResourceUrl) {
    const status = await getStkPushStatus(order.kopokopoResourceUrl);
    if (status !== "pending") {
      const finalStatus = status === "success" ? "paid" : "failed";
      setBuyOrderStatus(orderId, finalStatus);
      if (finalStatus === "paid") {
        const updated = getBuyOrder(orderId)!;
        await notifyBuyOrderPaid(updated);
      }
    }
  }

  return NextResponse.json(getBuyOrder(orderId));
}
