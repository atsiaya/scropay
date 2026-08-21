import { NextRequest, NextResponse } from "next/server";
import { markAwaitingVerification, finalizeSellOrderClaim } from "@/lib/orders";

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

  // Logs to Firestore, notifies you, and emails the customer if they gave
  // one — same treatment as lib/buy-orders.ts's finalizeBuyOrder, just
  // named differently since this is a claim awaiting verification, not a
  // confirmed final outcome. See its own comments for the distinction.
  await finalizeSellOrderClaim(order);

  return NextResponse.json(order);
}
