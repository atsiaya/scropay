import { NextResponse } from "next/server";
import {
  getPendingBuyOrders,
  markBuyOrderPaid,
  notifyBuyOrderPaid,
  setBuyOrderStatus,
} from "@/lib/buy-orders";
import { getStkPushPayment } from "@/lib/kopokopo";

/** KopoKopo webhooks trigger a fresh authenticated check of each pending order. */
export async function POST() {
  await Promise.all(
    getPendingBuyOrders().map(async (order) => {
      try {
        if (!order.kopokopoResourceUrl) return;
        const payment = await getStkPushPayment(order.kopokopoResourceUrl);
        if (payment.status === "success") {
          const updated = markBuyOrderPaid(order.id, payment);
          if (updated) await notifyBuyOrderPaid(updated);
        } else if (payment.status === "failed") {
          setBuyOrderStatus(order.id, "failed");
        }
      } catch (err) {
        console.error(`Webhook processing failed for order ${order.id}:`, err);
      }
    })
  );
  return new NextResponse("ok");
}
