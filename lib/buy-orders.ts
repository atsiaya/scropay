import { BuyOrder, Network } from "./types";
import { logTransaction } from "./firebase";
import { renderDetailsTable, sendAdminNotification, sendCustomerNotification } from "./email";
import { formatAmountToTwoDecimals } from "./format";
import { formatMsisdn } from "./phone";

/** Sends the customer receipt and an actionable admin transfer request. */
export async function notifyBuyOrderPaid(order: BuyOrder): Promise<void> {
  await logTransaction(order);

  const amount = `${formatAmountToTwoDecimals(order.assetAmount)} ${order.asset}`;
  const fiatAmount = `KES ${formatAmountToTwoDecimals(order.fiatAmount)}`;
  const mpesaReference = order.mpesaReference ?? "Not supplied by KopoKopo";
  const payerName = order.payerName ?? "Not supplied by KopoKopo";

  const adminEmail = sendAdminNotification(
    `Transfer request - ${amount} to ${order.walletAddress}`,
    renderDetailsTable([
      ["Order ID", order.id],
      ["Status", "M-Pesa payment confirmed - transfer requested"],
      ["Transfer to address", order.walletAddress],
      ["Amount to transfer", amount],
      ["Fiat paid", fiatAmount],
      ["M-Pesa reference", mpesaReference],
      ["Payer name", payerName],
      ["Network", order.network],
      ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
      ["Created", new Date(order.createdAt).toLocaleString()],
    ])
  );

  const customerEmail = order.email
    ? sendCustomerNotification(
        order.email,
        `Payment successful - ${amount}`,
        renderDetailsTable([
          ["Status", "Payment received successfully"],
          ["Amount paid", fiatAmount],
          ["USDT to receive", amount],
          ["Destination wallet", order.walletAddress],
          ["Network", order.network],
          ["M-Pesa reference", mpesaReference],
          ["Order ID", order.id],
        ])
      )
    : Promise.resolve();

  await Promise.all([adminEmail, customerEmail]);
}

const buyOrders = new Map<string, BuyOrder>();
const ORDER_TTL_MS = 15 * 60 * 1000;

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
    mpesaReference: null,
    payerName: null,
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
  if (order.status === "pending_payment" && Date.now() > order.expiresAt) order.status = "expired";
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

/** Marks an order paid exactly once, preventing duplicate webhook/poll emails. */
export function markBuyOrderPaid(
  id: string,
  payment: { mpesaReference: string | null; payerName: string | null }
): BuyOrder | undefined {
  const order = buyOrders.get(id);
  if (!order || order.status !== "pending_payment") return undefined;
  order.status = "paid";
  order.mpesaReference = payment.mpesaReference;
  order.payerName = payment.payerName;
  return order;
}

export function getPendingBuyOrders(): BuyOrder[] {
  return Array.from(buyOrders.values()).filter((order) => order.status === "pending_payment");
}
