import { SellOrder, Network } from "./types";
import { getTreasuryAddress } from "./treasury";

/**
 * A Map on a module-level variable. This works for local dev and for a
 * single warm serverless instance, but Vercel can and will route
 * consecutive requests to different instances — so this will lose orders
 * unpredictably in production. Before this handles real money, swap this
 * for a real store: Vercel KV / Upstash Redis (fast, simple, a good fit
 * for "pending order, short TTL") or a Postgres table if you also want it
 * queryable for reconciliation later. The function signatures below are
 * the whole surface area you'd need to keep — swap the implementation,
 * not the callers.
 */
const orders = new Map<string, SellOrder>();

const ORDER_TTL_MS = 15 * 60 * 1000; // 15 minutes to complete the deposit

function generateOrderId(): string {
  return `ord_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function createSellOrder(input: {
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
}): SellOrder {
  const now = Date.now();
  const order: SellOrder = {
    id: generateOrderId(),
    direction: "sell",
    asset: input.asset,
    network: input.network,
    assetAmount: input.assetAmount,
    fiatAmount: input.fiatAmount,
    mpesaNumber: input.mpesaNumber,
    depositAddress: getTreasuryAddress(input.network),
    status: "pending_deposit",
    createdAt: now,
    expiresAt: now + ORDER_TTL_MS,
  };
  orders.set(order.id, order);
  return order;
}

export function getSellOrder(id: string): SellOrder | undefined {
  const order = orders.get(id);
  if (!order) return undefined;
  if (order.status === "pending_deposit" && Date.now() > order.expiresAt) {
    order.status = "expired";
  }
  return order;
}

export function markAwaitingVerification(id: string): SellOrder | undefined {
  const order = orders.get(id);
  if (!order) return undefined;
  if (order.status === "pending_deposit") {
    order.status = "awaiting_verification";
  }
  return order;
}
