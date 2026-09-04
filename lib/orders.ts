import { getFirestore } from "firebase-admin/firestore";
import { SellOrder, Network } from "./types";
import { getAdminAuth } from "./firebase-admin";
import { findAvailableAgent } from "./agents";
import { getTreasuryAddress } from "./treasury";
import { logTransaction } from "./firebase";
import { sendOwnerNotification, sendCustomerNotification, renderDetailsTable } from "./email";
import { formatAsset, formatFiat } from "./format";
import { formatMsisdn } from "./phone";

/**
 * Sell orders live in Firestore now, not an in-memory Map — a real
 * requirement, not a nice-to-have, once the agent dashboard needs to
 * query "orders assigned to me" from a completely different request
 * than the one that created the order. An in-memory Map on one
 * serverless instance is invisible to every other instance; Firestore is
 * the one thing every request can actually see.
 */
const COLLECTION = "sellOrders";
const ORDER_TTL_MS = 15 * 60 * 1000; // 15 minutes to complete the deposit

function ensureInit(): void {
  getAdminAuth();
}

function generateOrderId(): string {
  return `ord_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export async function createSellOrder(input: {
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
  email: string | null;
}): Promise<SellOrder | { error: "no_agents_available" }> {
  ensureInit();

  let depositAddress: string;
  let assignedAgentId: string | null = null;
  let assignedAgentName: string | null = null;
  let assignedAgentEmail: string | null = null;

  // Only Celo has agent-sourced liquidity right now — agent profiles
  // only collect a Celo receiving address. Every other network still
  // falls back to the static treasury address instead of an agent
  // match; extend AgentProfile with per-network addresses if you want
  // agents to cover Polygon/Base too.
  if (input.network === "CELO") {
    const agent = await findAvailableAgent();
    if (!agent) return { error: "no_agents_available" };
    depositAddress = agent.celoAddress;
    assignedAgentId = agent.uid;
    assignedAgentName = agent.fullName;
    assignedAgentEmail = agent.email;
  } else {
    depositAddress = getTreasuryAddress(input.network);
  }

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
    depositAddress,
    assignedAgentId,
    assignedAgentName,
    assignedAgentEmail,
    status: "pending_deposit",
    createdAt: now,
    expiresAt: now + ORDER_TTL_MS,
  };

  await getFirestore().collection(COLLECTION).doc(order.id).set(order);
  return order;
}

export async function getSellOrder(id: string): Promise<SellOrder | undefined> {
  ensureInit();
  const ref = getFirestore().collection(COLLECTION).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return undefined;

  const order = doc.data() as SellOrder;
  if (order.status === "pending_deposit" && Date.now() > order.expiresAt) {
    order.status = "expired";
    await ref.set({ status: "expired" }, { merge: true });
  }
  return order;
}

/**
 * Only flips pending_deposit -> awaiting_verification, and only returns
 * the order when THIS call is the one that made that transition — same
 * idempotency shape as lib/buy-orders.ts's markBuyOrderPaid: a second
 * call for an order that's already past pending_deposit (a double "I
 * have already paid" click) returns undefined, so finalizeSellOrderClaim
 * below only ever runs once per order.
 */
export async function markAwaitingVerification(id: string): Promise<SellOrder | undefined> {
  ensureInit();
  const ref = getFirestore().collection(COLLECTION).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return undefined;

  const order = doc.data() as SellOrder;
  if (order.status !== "pending_deposit") return undefined;

  await ref.set({ status: "awaiting_verification" }, { merge: true });
  return { ...order, status: "awaiting_verification" };
}

/**
 * Called by the assigned agent from their dashboard once they've
 * verified the USDT arrived at their own Celo address and sent the
 * M-Pesa payout. Same trust model as before this feature existed — just
 * attributed to a specific person now instead of "the admin"
 * generically. There's still no automated on-chain check behind this
 * click; that's the same unbuilt gap noted throughout this project's
 * comments, just narrower in scope now (one agent's word, not
 * anyone's).
 */
export async function markOrderPaidByAgent(
  id: string,
  agentUid: string
): Promise<SellOrder | { error: "not_found" | "not_assigned_to_you" | "already_final" }> {
  ensureInit();
  const ref = getFirestore().collection(COLLECTION).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { error: "not_found" };

  const order = doc.data() as SellOrder;
  if (order.assignedAgentId !== agentUid) return { error: "not_assigned_to_you" };
  if (order.status === "confirmed") return { error: "already_final" };

  const updated: SellOrder = { ...order, status: "confirmed" };
  await ref.set({ status: "confirmed" }, { merge: true });
  await logTransaction(updated);

  if (updated.email) {
    await sendCustomerNotification(
      updated.email,
      "Your KES payout is on its way",
      renderDetailsTable([
        ["Order ID", updated.id],
        ["Amount", `KES ${formatFiat(updated.fiatAmount)}`],
        ["M-Pesa number", formatMsisdn(updated.mpesaNumber)],
      ])
    );
  }

  return updated;
}

/**
 * All orders currently assigned to this agent, most recent first. This
 * query needs a Firestore composite index (assignedAgentId ==, orderBy
 * createdAt) — the first time it actually runs, Firestore will throw an
 * error containing a direct link to create that index in the console.
 * It only needs creating once per project, not per deploy.
 */
export async function getAgentSellOrders(agentUid: string): Promise<SellOrder[]> {
  ensureInit();
  const snapshot = await getFirestore()
    .collection(COLLECTION)
    .where("assignedAgentId", "==", agentUid)
    .orderBy("createdAt", "desc")
    .limit(50)
    .get();
  return snapshot.docs.map((d) => d.data() as SellOrder);
}

/**
 * Logs to Firestore, notifies the platform admin (oversight) AND the
 * specific assigned agent (who's actually responsible for acting on
 * this one) — different audiences, both worth reaching. Sell doesn't
 * have a clean paid/failed binary the way Kopokopo gives buy orders —
 * this is a claim, not a confirmed outcome — so every message here is
 * framed as "go verify, then act," not "it's done."
 */
export async function finalizeSellOrderClaim(order: SellOrder): Promise<void> {
  const assetAmount = `${formatAsset(order.assetAmount)} ${order.asset}`;
  const fiatAmount = `KES ${formatFiat(order.fiatAmount)}`;
  const actionLine = order.assignedAgentId
    ? `Check ${order.depositAddress} on ${order.network} for ${assetAmount}. Once confirmed, send ${fiatAmount} to ${formatMsisdn(order.mpesaNumber)}, then mark it paid from your dashboard.`
    : `Check ${order.depositAddress} on ${order.network} for ${assetAmount}. Once confirmed, send ${fiatAmount} to ${formatMsisdn(order.mpesaNumber)}.`;

  const rows: [string, string][] = [
    ["Order ID", order.id],
    ["Status", "Awaiting verification — do not pay out yet"],
    ["Action", actionLine],
    ["Asset claimed sent", assetAmount],
    ["Network", order.network],
    ["Deposit address", order.depositAddress],
    ["Payout amount", fiatAmount],
    ["M-Pesa number", formatMsisdn(order.mpesaNumber)],
    ["Assigned agent", order.assignedAgentName ?? "— (treasury address, not agent-sourced)"],
    ["Email", order.email ?? "—"],
    ["Created", new Date(order.createdAt).toLocaleString()],
    ["Expires", new Date(order.expiresAt).toLocaleString()],
  ];

  const adminEmail = sendOwnerNotification(
    `Sell order awaiting verification — ${fiatAmount} via ${order.assignedAgentName ?? "treasury"}`,
    renderDetailsTable(rows)
  );

  const agentEmail = order.assignedAgentEmail
    ? sendCustomerNotification(
        order.assignedAgentEmail,
        `Verify deposit, then pay out - ${fiatAmount}`,
        renderDetailsTable(rows)
      )
    : Promise.resolve();

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
          ["Processed by", order.assignedAgentName ?? "our team"],
        ])
      )
    : Promise.resolve();

  await Promise.all([adminEmail, agentEmail, customerEmail]);
}
