import { NextRequest, NextResponse } from "next/server";
import { getSellOrder, markAwaitingVerification, finalizeSellOrderClaim } from "@/lib/orders";

export const dynamic = "force-dynamic";

/**
 * "I have already paid" hits this. It does NOT verify anything on-chain
 * — it just records that the user claims to have sent the funds, so the
 * assigned agent (see lib/orders.ts's finalizeSellOrderClaim) has a
 * queue to work from. Before this is real: wire an on-chain watcher (a
 * webhook from Alchemy/Moralis/QuickNode "address activity" on each
 * agent's Celo address, or your own indexer) that matches an incoming
 * transfer to this order automatically, rather than relying on an
 * agent's own dashboard click.
 */
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const claimed = await markAwaitingVerification(id);
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
  const existing = await getSellOrder(id);
  if (!existing) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
  return NextResponse.json(existing);
}
