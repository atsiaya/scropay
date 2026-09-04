export type RampDirection = "buy" | "sell";

export type FiatCode = "KES";

export type Network = "CELO" | "POLYGON" | "TRON" | "BASE";

export interface AssetOption {
  symbol: "USDT" | "USDC";
  networks: Network[];
}

export interface RateQuote {
  fiat: FiatCode;
  asset: string;
  network: Network;
  /** the raw reference price from the market data source, fiat per 1 asset unit */
  marketRate: number;
  /** marketRate with the buy-side margin applied — what a buyer pays per unit */
  buyRate: number;
  /** marketRate with the sell-side margin applied — what a seller receives per unit */
  sellRate: number;
  /** margin applied to each side, in basis points (40 = 0.40%) */
  marginBps: number;
  feeAsset: number;
  updatedAt: number;
  ttlSeconds: number;
  /** "live" if it came from the market data API, "fallback" if that call failed */
  source: "live" | "fallback";
}

export interface QuoteRequest {
  direction: RampDirection;
  fiat: FiatCode;
  asset: string;
  network: Network;
  /** the amount the user typed, in whichever side they edited */
  amount: number;
  amountSide: "fiat" | "asset";
}

export interface WalletOption {
  id: string;
  name: string;
  description: string;
}

export type OrderStatus =
  | "pending_deposit"
  | "awaiting_verification"
  | "confirmed"
  | "expired";

export interface SellOrder {
  id: string;
  direction: "sell";
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
  email: string | null;
  depositAddress: string;
  status: OrderStatus;
  /** the agent responsible for receiving this deposit and paying out —
   *  null when the network fell back to the static treasury address
   *  instead of an agent match (see lib/orders.ts's createSellOrder) */
  assignedAgentId: string | null;
  assignedAgentName: string | null;
  assignedAgentEmail: string | null;
  createdAt: number;
  expiresAt: number;
}

export type BuyOrderStatus = "pending_payment" | "paid" | "failed" | "expired";

export interface BuyOrder {
  id: string;
  direction: "buy";
  asset: string;
  network: Network;
  assetAmount: number;
  fiatAmount: number;
  mpesaNumber: string;
  email: string | null;
  /** M-Pesa receipt/reference returned by KopoKopo after a successful payment. */
  mpesaReference: string | null;
  /** Payer name supplied by KopoKopo when it is available. */
  payerName: string | null;
  walletAddress: string;
  status: BuyOrderStatus;
  /** the Kopokopo incoming_payment resource URL, returned in the Location
   *  header when we initiate the STK push — this is what we poll for the
   *  authoritative status, never the webhook body alone. */
  kopokopoResourceUrl: string | null;
  /** Kopokopo's decline reason, when a status check found one — see
   *  lib/kopokopo.ts's getStkPushStatus for how (and how unreliably)
   *  this gets extracted. */
  failureReason: string | null;
  createdAt: number;
  expiresAt: number;
}

/**
 * A P2P merchant, not a ramp customer — signs in via /agent/sign-in,
 * receives USDT on their own Celo address, and pays out KES to sell-flow
 * customers assigned to them. Stored in Firestore's `agents` collection,
 * doc id = Firebase Auth uid.
 *
 * fullName/idNumber are self-reported at profile-completion time — there
 * is no independent verification of an agent's identity (unlike ramp
 * customers, who go through Didit). Worth knowing before treating
 * `idNumber` as a verified KYC field anywhere downstream.
 */
export interface AgentProfile {
  uid: string;
  email: string;
  fullName: string | null;
  celoAddress: string | null;
  idNumber: string | null;
  online: boolean;
  lastOnlineAt: number | null;
  /** last time a sell order was routed to this agent — used to spread
   *  assignments across online agents (see lib/agents.ts's findAvailableAgent) */
  lastAssignedAt: number | null;
}
