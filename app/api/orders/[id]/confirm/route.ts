import { NextRequest, NextResponse } from "next/server";
import { getSellOrder, markAwaitingVerification, finalizeSellOrderClaim } from "@/lib/orders";

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

  const claimed = markAwaitingVerification(id);
  if (claimed) {
    // This request is the one that actually made the transition — log
    // + notify exactly once.
    await finalizeSellOrderClaim(claimed);
    return NextResponse.json(claimed);
  }

  // markAwaitingVerification returns undefined for two different
  // reasons — a genuinely missing order, or one that's already past
  // pending_deposit (a double click, a retried request). Those need
  // different responses: the first is a real error, the second should
  // look like success to the client, just without re-notifying anyone.
  const existing = getSellOrder(id);
  if (!existing) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
  return NextResponse.json(existing);
}