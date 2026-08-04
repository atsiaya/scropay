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
