import { NextResponse } from "next/server";
import {
  getPendingBuyOrders,
  markBuyOrderFailed,
  markBuyOrderPaid,
  notifyBuyOrderFailed,
  notifyBuyOrderPaid,
} from "@/lib/buy-orders";
import { getStkPushPayment } from "@/lib/kopokopo";

export const dynamic = "force-dynamic";

/** KopoKopo webhooks trigger a fresh authenticated check of each pending order. */
export async function POST() {
  await Promise.all(
    getPendingBuyOrders().map(async (order) => {
      try {
        if (!order.kopokopoResourceUrl) return;
        const payment = await getStkPushPayment(order.kopokopoResourceUrl);
        if (payment.status === "success") {
          // markBuyOrderPaid only flips status if it's still
          // pending_payment, so this racing with the GET status
          // endpoint's own check can't double-notify for the same order.
          const updated = markBuyOrderPaid(order.id, payment);
          if (updated) await notifyBuyOrderPaid(updated);
        } else if (payment.status === "failed") {
          // Same fix as app/api/buy/stk-push/route.ts's GET handler:
          // this used to be setBuyOrderStatus(order.id, "failed") with
          // no reason and no notify call — every failed buy order was
          // silent, on both this path and the polling path.
          const updated = markBuyOrderFailed(order.id, payment.reason);
          if (updated) await notifyBuyOrderFailed(updated);
        }
      } catch (err) {
        console.error(`Webhook processing failed for order ${order.id}:`, err);
      }
    })
  );
  return new NextResponse("ok");
}