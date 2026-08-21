import { NextRequest, NextResponse } from "next/server";
import { markAwaitingVerification } from "@/lib/orders";
import { sendOwnerNotification, renderDetailsTable } from "@/lib/email";
import { formatMsisdn } from "@/lib/phone";
import { formatFiat, formatAsset } from "@/lib/format";

/**
 * "I have already paid" hits this. It does NOT verify anything on-chain —
 * it just records that the user claims to have sent the funds, so support
 * or an automated indexer has a queue to work from. Before this is real:
 * wire an on-chain watcher (a webhook from Alchemy/Moralis/QuickNode
 * "address activity" on the treasury address, or your own indexer) that
 * matches an incoming transfer to this order — by amount + timing at
 * minimum, or a unique per-order address if you want it exact — and only
 * then trigger the actual M-Pesa payout (Daraja B2C API).
 */
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const order = markAwaitingVerification(id);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Notify you the moment a user claims to have paid — this is the
  // trigger for the manual/automated verification step described above,
  // so it needs to reach you even before that step exists.
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
      ["Created", new Date(order.createdAt).toLocaleString()],
      ["Expires", new Date(order.expiresAt).toLocaleString()],
    ])
  );

  return NextResponse.json(order);
}
