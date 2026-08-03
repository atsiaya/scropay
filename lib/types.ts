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
  /** fiat units per 1 unit of asset */
  rate: number;
  feeAsset: number;
  updatedAt: number;
  ttlSeconds: number;
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
