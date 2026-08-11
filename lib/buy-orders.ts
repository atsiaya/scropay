import { BuyOrder, Network } from "./types";
import { logTransaction } from "./firebase";
import { sendOwnerNotification, renderDetailsTable } from "./email";
import { formatAsset, formatFiat } from "./format";
import { formatMsisdn } from "./phone";

/**
 * Called from both the webhook and the GET status-poll endpoint — both
 * paths flip a buy order to "paid" and need the same follow-up (log +
 * notify), so this is the one place that follow-up is written. See the
 * webhook's header comment for the known double-fire race between the
 * two callers; harmless beyond a possible duplicate email for now.
 */
export async function notifyBuyOrderPaid(order: BuyOrder): Promise<void> {
  await logTransaction(order);
  await sendOwnerNotification(
    `Buy order paid — KES ${formatFiat(order.fiatAmount)} → ${formatAsset(order.assetAmount)} USDT`,
    renderDetailsTable([
      ["Order ID", order.id],
      ["Status", "Paid — USDT not yet dispatched"],
      ["Fiat paid", `KES ${formatFiat(order.fiatAmount)}`],
      ["Asset to send", `${formatAsset(order.assetAmount)} ${order.asset}`],
      ["Network", order.network],
      ["Destination wallet", order.walletAddress],
      ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
      ["Email", order.email ?? "—"],
      ["Created", new Date(order.createdAt).toLocaleString()],
    ])
  );
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

export function setBuyOrderStatus(id: string, status: BuyOrder["status"]): BuyOrder | undefined {
  const order = buyOrders.get(id);
  if (!order) return undefined;
  order.status = status;
  return order;
}

/** All orders still worth polling — used by the webhook handler, which
 *  treats the webhook ping as a trigger to re-check these rather than
 *  trusting the webhook body (see lib/kopokopo.ts's header comment). */
export function getPendingBuyOrders(): BuyOrder[] {
  return Array.from(buyOrders.values()).filter((o) => o.status === "pending_payment");
}
