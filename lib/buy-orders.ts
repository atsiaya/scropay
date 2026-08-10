import { BuyOrder, Network } from "./types";

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
