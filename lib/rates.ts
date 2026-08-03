import { Network, RateQuote } from "./types";

const BASE_RATE_KES_PER_USDT = 132.4;

/**
 * Placeholder rate source. Swap this for a real feed (e.g. an aggregator of
 * Binance P2P, a licensed VASP quote, or your own liquidity desk) before
 * going live — see README "Wiring up a real rate feed".
 */
export function getMockRate(network: Network = "CELO"): RateQuote {
  const now = Date.now();
  // deterministic-ish drift so repeated calls in the same 20s window agree
  const window = Math.floor(now / 20000);
  const jitter = (Math.sin(window) * 0.6).toFixed(2);
  const rate = Number((BASE_RATE_KES_PER_USDT + Number(jitter)).toFixed(2));

  return {
    fiat: "KES",
    asset: "USDT",
    network,
    rate,
    feeAsset: 0,
    updatedAt: now,
    ttlSeconds: 20,
  };
}

export function fiatToAsset(fiatAmount: number, rate: number): number {
  if (!rate) return 0;
  return Number((fiatAmount / rate).toFixed(6));
}

export function assetToFiat(assetAmount: number, rate: number): number {
  return Number((assetAmount * rate).toFixed(2));
}
