import { SellOrder, Network } from "./types";
import { getTreasuryAddress } from "./treasury";
import { logTransaction } from "./firebase";
import { sendOwnerNotification, sendCustomerNotification, renderDetailsTable } from "./email";
import { formatAsset, formatFiat } from "./format";
import { formatMsisdn } from "./phone";

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
  email: string | null;
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
    email: input.email,
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

/**
 * Only flips pending_deposit -> awaiting_verification, and only returns
 * the order when THIS call is the one that made that transition. A
 * second call for an order that's already past pending_deposit (a
 * double "I have already paid" click, a retried request after a slow
 * response) returns undefined here — same idempotency shape as
 * lib/buy-orders.ts's markBuyOrderPaid/markBuyOrderFailed. The route
 * handler is what decides what a "no-op, already handled" response
 * looks like to the client — this function's job is just to guarantee
 * finalizeSellOrderClaim only ever runs once per order.
 */
export function markAwaitingVerification(id: string): SellOrder | undefined {
  const order = orders.get(id);
  if (!order || order.status !== "pending_deposit") return undefined;
  order.status = "awaiting_verification";
  return order;
}

/**
 * Same shape as lib/buy-orders.ts's notifyBuyOrderPaid/Failed: log the
 * full order to Firestore, notify you, and email the customer if they
 * gave one — called once, right when "I have already paid" flips the
 * order to awaiting_verification. Sell doesn't have a clean paid/failed
 * binary the way Kopokopo gives buy orders — this is a claim, not a
 * confirmed outcome — so the admin email is framed as a conditional
 * action ("once you've verified the deposit, pay out") rather than an
 * immediate instruction, since paying out before confirming the USDT
 * actually arrived is the exact mistake this wording is meant to avoid.
 * If you build the on-chain watcher described in the deposit step's
 * comments, that's the point to add a real "confirmed" outcome and a
 * sibling function that fires once that's automatic instead of manual.
 */
export async function finalizeSellOrderClaim(order: SellOrder): Promise<void> {
  await logTransaction(order);

  const assetAmount = `${formatAsset(order.assetAmount)} ${order.asset}`;
  const fiatAmount = `KES ${formatFiat(order.fiatAmount)}`;

  const adminEmail = sendOwnerNotification(
    `Verify deposit, then pay out - ${fiatAmount} to ${formatMsisdn(order.mpesaNumber)}`,
    renderDetailsTable([
      ["Order ID", order.id],
      ["Status", "Awaiting verification — do not pay out yet"],
      ["Action", `Check ${order.depositAddress} on ${order.network} for ${assetAmount}. Once confirmed, send ${fiatAmount} to ${formatMsisdn(order.mpesaNumber)}.`],
      ["Asset claimed sent", assetAmount],
      ["Network", order.network],
      ["Deposit address", order.depositAddress],
      ["Payout amount", fiatAmount],
      ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
      ["Email", order.email ?? "—"],
      ["Created", new Date(order.createdAt).toLocaleString()],
      ["Expires", new Date(order.expiresAt).toLocaleString()],
    ])
  );

  const customerEmail = order.email
    ? sendCustomerNotification(
        order.email,
        "We're verifying your USDT sale",
        renderDetailsTable([
          ["Status", "We're checking for your USDT — this isn't instant"],
          ["Amount", assetAmount],
          ["Network", order.network],
          ["You'll receive", fiatAmount],
          ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
          ["Order ID", order.id],
        ])
      )
    : Promise.resolve();

  await Promise.all([adminEmail, customerEmail]);
}