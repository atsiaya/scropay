import { Network, RateQuote } from "./types";
import { fetchMarketRate, getFallbackRate } from "./priceFeed";

/**
 * The spread. 40 bps = 0.4% on each side, i.e. a buyer pays ~0.4% above the
 * market rate and a seller receives ~0.4% below it — about 0.8% round-trip
 * margin, in line with what P2P/ramp apps typically charge. Tune this per
 * corridor/volume; it's the one number that turns "quote" into "profit."
 */
const MARGIN_BPS = 60;

export async function getQuote(network: Network = "CELO"): Promise<RateQuote> {
  const now = Date.now();
  const live = await fetchMarketRate("USDT", "KES");
  const marketRate = live ?? getFallbackRate();

  const margin = MARGIN_BPS / 10000;
  const buyRate = Number((marketRate * (1 + margin)).toFixed(2));
  const sellRate = Number((marketRate * (1 - margin)).toFixed(2));

  return {
    fiat: "KES",
    asset: "USDT",
    network,
    marketRate: Number(marketRate.toFixed(2)),
    buyRate,
    sellRate,
    marginBps: MARGIN_BPS,
    feeAsset: 0,
    updatedAt: now,
    ttlSeconds: 20,
    source: live !== null ? "live" : "fallback",
  };
}

export function fiatToAsset(fiatAmount: number, rate: number): number {
  if (!rate) return 0;
  return Number((fiatAmount / rate).toFixed(6));
}

export function assetToFiat(assetAmount: number, rate: number): number {
  return Number((assetAmount * rate).toFixed(2));
}
