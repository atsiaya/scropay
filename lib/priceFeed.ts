/**
 * Market price source for the reference rate.
 *
 * Two legs, because CoinGecko's `vs_currencies` list does NOT include KES
 * (it covers USD, EUR, NGN, ZAR and ~40 others, but not KES) — check
 * https://api.coingecko.com/api/v3/simple/supported_vs_currencies yourself
 * before assuming a fiat pair is available:
 *
 *   1. USDT → USD, from CoinGecko. Free, keyless public endpoint works for
 *      prototyping; set COINGECKO_API_KEY (a free Demo key) for a stable
 *      30 req/min instead of the shared ~5-15 req/min on the public tier.
 *      CoinMarketCap was the other common choice here, but its free tier
 *      requires a key from the very first call and covers fewer endpoints.
 *      Circle's APIs are for issuing/redeeming USDC, not third-party market
 *      prices, so they don't fit this job at all.
 *
 *   2. USD → KES, from the fawazahmed0/currency-api project
 *      (github.com/fawazahmed0/currency-api). It's fully open source (MIT),
 *      needs no API key, has no rate limit (served off a CDN, updated
 *      daily), and covers 200+ currencies including KES — a better fit
 *      here than a metered forex API for a rate that only needs daily
 *      granularity. Two independent CDN hosts are tried in case one is
 *      down.
 *
 * USDT/KES = (USDT/USD) × (USD/KES). Either leg failing falls back to the
 * last-known-good constant below rather than breaking the buy flow.
 */

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

const CURRENCY_API_HOSTS = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
  "https://latest.currency-api.pages.dev/v1/currencies",
];

const ASSET_IDS: Record<string, string> = {
  USDT: "tether",
  USDC: "usd-coin",
};

async function fetchJson(url: string, timeoutMs = 4000, headers?: Record<string, string>) {
  const res = await fetch(url, {
    headers,
    cache: "no-store", // this is a live reference price — never serve stale
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`${res.status} from ${url}`);
  return res.json();
}

async function fetchAssetUsdPrice(asset: string): Promise<number | null> {
  const id = ASSET_IDS[asset];
  if (!id) return null;

  const headers: Record<string, string> = { accept: "application/json" };
  if (process.env.COINGECKO_API_KEY) {
    headers["x-cg-demo-api-key"] = process.env.COINGECKO_API_KEY;
  }

  try {
    const data = await fetchJson(
      `${COINGECKO_BASE}/simple/price?ids=${id}&vs_currencies=usd`,
      4000,
      headers
    );
    const price = data?.[id]?.usd;
    return typeof price === "number" ? price : null;
  } catch {
    return null;
  }
}

async function fetchUsdToKes(): Promise<number | null> {
  for (const host of CURRENCY_API_HOSTS) {
    try {
      const data = await fetchJson(`${host}/usd.json`);
      const rate = data?.usd?.kes;
      if (typeof rate === "number") return rate;
    } catch {
      // try the next host
    }
  }
  return null;
}

/**
 * Returns the live fiat-per-asset rate, or null if either leg couldn't be
 * fetched (the caller decides what to do — typically fall back to
 * getFallbackRate()).
 */
export async function fetchMarketRate(
  asset: string,
  fiat: string
): Promise<number | null> {
  if (fiat.toUpperCase() !== "KES") return null; // only wired for KES today

  const [assetUsd, usdKes] = await Promise.all([
    fetchAssetUsdPrice(asset),
    fetchUsdToKes(),
  ]);

  if (assetUsd === null || usdKes === null) return null;
  return assetUsd * usdKes;
}

/** Last-known-good fallback so an outage on either leg never blocks a quote. */
export function getFallbackRate(): number {
  return 132.4; // approximate KES/USDT — for production, persist the last
  // successful live rate (KV, DB, even a file) and read it here instead of
  // a hardcoded number, so the fallback stays roughly accurate over time.
}
