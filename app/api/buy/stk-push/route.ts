import { NextRequest, NextResponse } from "next/server";
import {
  attachKopokopoResource,
  createBuyOrder,
  getBuyOrder,
  markBuyOrderPaid,
  notifyBuyOrderPaid,
  setBuyOrderStatus,
} from "@/lib/buy-orders";
import { getStkPushPayment, initiateStkPush } from "@/lib/kopokopo";
import { MIN_BUY_FIAT_KES } from "@/lib/limits";
import { normalizeMsisdn } from "@/lib/phone";
import { Network } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  const { asset, network, assetAmount, fiatAmount, mpesaNumber, email, walletAddress } = body as {
    asset?: string; network?: Network; assetAmount?: number; fiatAmount?: number;
    mpesaNumber?: string; email?: string; walletAddress?: string;
  };
  const msisdn = normalizeMsisdn(mpesaNumber ?? "");
  if (!msisdn) return NextResponse.json({ error: "Enter a valid M-Pesa number, e.g. 07XXXXXXXX" }, { status: 400 });
  if (typeof fiatAmount !== "number" || fiatAmount < MIN_BUY_FIAT_KES) {
    return NextResponse.json({ error: "Amount is below the minimum" }, { status: 400 });
  }
  if (!asset || !network || typeof assetAmount !== "number" || !walletAddress) {
    return NextResponse.json({ error: "Missing order fields" }, { status: 400 });
  }
  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required for your payment receipt" }, { status: 400 });
  }

  const order = createBuyOrder({
    asset, network, assetAmount, fiatAmount, mpesaNumber: msisdn,
    email: email.trim(), walletAddress,
  });
  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const { resourceUrl } = await initiateStkPush({
      phoneNumber: `+${msisdn}`, amountKes: fiatAmount, reference: order.id,
      callbackUrl: `${appUrl}/api/webhooks/kopokopo`, email: email.trim(),
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
  if (!orderId) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const order = getBuyOrder(orderId);
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

  if (order.status === "pending_payment" && order.kopokopoResourceUrl) {
    const payment = await getStkPushPayment(order.kopokopoResourceUrl);
    if (payment.status === "success") {
      const updated = markBuyOrderPaid(order.id, payment);
      if (updated) await notifyBuyOrderPaid(updated);
    } else if (payment.status === "failed") {
      setBuyOrderStatus(order.id, "failed");
    }
  }
  return NextResponse.json(getBuyOrder(orderId));
}
