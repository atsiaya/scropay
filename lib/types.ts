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
