import { NextResponse } from "next/server";
import {
  getPendingBuyOrders,
  setBuyOrderStatus,
  getBuyOrder,
  notifyBuyOrderPaid,
} from "@/lib/buy-orders";
import { getStkPushStatus } from "@/lib/kopokopo";

/**
 * Kopokopo's webhook payload shape is one of the least consistently
 * documented parts of their API — rather than parse it and risk trusting
 * a field that turns out to mean something else, this handler treats any
 * POST here purely as "something changed, go check." It re-fetches every
 * currently-pending buy order's status directly from Kopokopo (with our
 * own access token) and only acts on what that authoritative call says.
 * Slightly wasteful if you have many concurrent pending orders, but
 * correct regardless of what Kopokopo actually sent in the body — and
 * pending orders are short-lived (15 min TTL) so the set stays small.
 *
 * Known gap: this and the GET status endpoint below can race — if both
 * fire around the same moment for the same order, both could observe
 * "still pending" and duplicate the Firestore write / owner email. Fine
 * for a demo; add a proper lock (or move the whole check into a single
 * DB transaction) once this is on a real store.
 */
export async function POST() {
  const pending = getPendingBuyOrders();

  await Promise.all(
    pending.map(async (order) => {
      try {
        if (!order.kopokopoResourceUrl) return;
        const status = await getStkPushStatus(order.kopokopoResourceUrl);
        if (status === "pending") return;

        const finalStatus = status === "success" ? "paid" : "failed";
        setBuyOrderStatus(order.id, finalStatus);

        // "paid" here means the KES leg is confirmed — it does NOT mean
        // USDT has actually moved. Dispatching the on-chain transfer to
        // order.walletAddress is a separate, unbuilt step that needs real
        // custody/signing infrastructure (see README's custody notes on
        // the sell side for the same gap in reverse). For now, a "paid"
        // order is a signal for you to fulfil it, not proof it's done.
        if (finalStatus === "paid") {
          const updated = getBuyOrder(order.id);
          if (updated) await notifyBuyOrderPaid(updated);
        }
      } catch (err) {
        // One order's processing failing must never take down the whole
        // webhook response (or the other orders in this same batch).
        console.error(`Webhook processing failed for order ${order.id}:`, err);
      }
    })
  );

  // Always 2xx quickly regardless of what we found — Kopokopo doesn't
  // need our internal reconciliation result, just an ack.
  return new NextResponse("ok");
}
