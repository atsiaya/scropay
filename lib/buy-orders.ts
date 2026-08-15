import { BuyOrder, Network } from "./types";
import { logTransaction } from "./firebase";
import { sendOwnerNotification, sendUserEmail, renderDetailsTable } from "./email";
import { formatAsset, formatFiat } from "./format";
import { formatMsisdn } from "./phone";

/**
 * The single place a buy order's outcome gets finalized — called from
 * both the webhook and the GET status-poll endpoint once either sees a
 * non-pending status. Runs the same three steps regardless of whether
 * the order ended up paid or failed:
 *
 *   1. Log the full order to Firestore — every outcome, not just paid
 *      ones, so failed attempts are just as queryable for support/
 *      pattern-spotting as completed ones.
 *   2. Notify you (always — a failed order is as worth knowing about as
 *      a paid one, especially if failures start clustering).
 *   3. Email the customer, if they gave one — different copy for paid
 *      vs failed, since "your money is safe, nothing happened" and
 *      "your USDT is on its way" are different messages to send.
 *
 * See the webhook's header comment for the known double-fire race
 * between its caller and the GET endpoint's; harmless beyond a possible
 * duplicate Firestore write / duplicate emails for now.
 */
export async function finalizeBuyOrder(order: BuyOrder): Promise<void> {
  await logTransaction(order);

  const paid = order.status === "paid";

  await sendOwnerNotification(
    paid
      ? `Buy order paid — KES ${formatFiat(order.fiatAmount)} → ${formatAsset(order.assetAmount)} USDT`
      : `Buy order failed — KES ${formatFiat(order.fiatAmount)}`,
    renderDetailsTable([
      ["Order ID", order.id],
      ["Status", paid ? "Paid — USDT not yet dispatched" : "Failed"],
      ...(paid
        ? []
        : ([["Reason (from Kopokopo)", order.failureReason ?? "not provided — check the Kopokopo dashboard"]] as [string, string][])),
      ["Fiat amount", `KES ${formatFiat(order.fiatAmount)}`],
      ["Asset amount", `${formatAsset(order.assetAmount)} ${order.asset}`],
      ["Network", order.network],
      ["Destination wallet", order.walletAddress],
      ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
      ["Email", order.email ?? "—"],
      ["Created", new Date(order.createdAt).toLocaleString()],
    ])
  );

  if (order.email) {
    await sendUserEmail(
      order.email,
      paid ? "Your USDT purchase is confirmed" : "We couldn't complete your USDT purchase",
      paid
        ? `<p>Thanks — we've received your payment.</p>
           ${renderDetailsTable([
             ["Order ID", order.id],
             ["Paid", `KES ${formatFiat(order.fiatAmount)}`],
             ["Receiving", `${formatAsset(order.assetAmount)} ${order.asset} (${order.network})`],
             ["Wallet", order.walletAddress],
           ])}
           <p>Your USDT is on its way to that wallet.</p>`
        : `<p>Your M-Pesa payment didn't go through, so no USDT was sent — no charge was made.</p>
           ${renderDetailsTable([
             ["Order ID", order.id],
             ["Amount", `KES ${formatFiat(order.fiatAmount)}`],
             ...(order.failureReason ? ([["Reason", order.failureReason]] as [string, string][]) : []),
           ])}
           <p>Feel free to try again.</p>`
    );
  }
}

/**
 * Same caveat as lib/orders.ts: a Map on a module-level variable works
 * for local dev and a single warm serverless instance, but not reliably
 * across Vercel's instances. Move to Redis/KV or Postgres before this
 * handles real money — keep the same four functions as the surface area.
 */
const buyOrders = new Map<string, BuyOrder>();

const ORDER_TTL_MS = 15 * 60 * 1000; // 15 minutes to complete the M-Pesa payment

function generateOrderId(): string {
  return `buy_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function createBuyOrder(input: {
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
  email: string | null;
  walletAddress: string;
}): BuyOrder {
  const now = Date.now();
  const order: BuyOrder = {
    id: generateOrderId(),
    direction: "buy",
    asset: input.asset,
    network: input.network,
    assetAmount: input.assetAmount,
    fiatAmount: input.fiatAmount,
    mpesaNumber: input.mpesaNumber,
    email: input.email,
    walletAddress: input.walletAddress,
    status: "pending_payment",
    kopokopoResourceUrl: null,
    failureReason: null,
    createdAt: now,
    expiresAt: now + ORDER_TTL_MS,
  };
  buyOrders.set(order.id, order);
  return order;
}

export function getBuyOrder(id: string): BuyOrder | undefined {
  const order = buyOrders.get(id);
  if (!order) return undefined;
  if (order.status === "pending_payment" && Date.now() > order.expiresAt) {
    order.status = "expired";
  }
  return order;
}

export function attachKopokopoResource(id: string, resourceUrl: string): void {
  const order = buyOrders.get(id);
  if (order) order.kopokopoResourceUrl = resourceUrl;
}

export function setBuyOrderStatus(
  id: string,
  status: BuyOrder["status"],
  failureReason?: string | null
): BuyOrder | undefined {
  const order = buyOrders.get(id);
  if (!order) return undefined;
  order.status = status;
  if (failureReason !== undefined) order.failureReason = failureReason;
  return order;
}

/** All orders still worth polling — used by the webhook handler, which
 *  treats the webhook ping as a trigger to re-check these rather than
 *  trusting the webhook body (see lib/kopokopo.ts's header comment). */
export function getPendingBuyOrders(): BuyOrder[] {
  return Array.from(buyOrders.values()).filter((o) => o.status === "pending_payment");
}
