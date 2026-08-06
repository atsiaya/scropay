module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/scropay/lib/priceFeed.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchMarketRate",
    ()=>fetchMarketRate,
    "getFallbackRate",
    ()=>getFallbackRate
]);
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
 */ const COINGECKO_BASE = "https://api.coingecko.com/api/v3";
const CURRENCY_API_HOSTS = [
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
    "https://latest.currency-api.pages.dev/v1/currencies"
];
const ASSET_IDS = {
    USDT: "tether",
    USDC: "usd-coin"
};
async function fetchJson(url, timeoutMs = 4000, headers) {
    const res = await fetch(url, {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(timeoutMs)
    });
    if (!res.ok) throw new Error(`${res.status} from ${url}`);
    return res.json();
}
async function fetchAssetUsdPrice(asset) {
    const id = ASSET_IDS[asset];
    if (!id) return null;
    const headers = {
        accept: "application/json"
    };
    if (process.env.COINGECKO_API_KEY) {
        headers["x-cg-demo-api-key"] = process.env.COINGECKO_API_KEY;
    }
    try {
        const data = await fetchJson(`${COINGECKO_BASE}/simple/price?ids=${id}&vs_currencies=usd`, 4000, headers);
        const price = data?.[id]?.usd;
        return typeof price === "number" ? price : null;
    } catch  {
        return null;
    }
}
async function fetchUsdToKes() {
    for (const host of CURRENCY_API_HOSTS){
        try {
            const data = await fetchJson(`${host}/usd.json`);
            const rate = data?.usd?.kes;
            if (typeof rate === "number") return rate;
        } catch  {
        // try the next host
        }
    }
    return null;
}
async function fetchMarketRate(asset, fiat) {
    if (fiat.toUpperCase() !== "KES") return null; // only wired for KES today
    const [assetUsd, usdKes] = await Promise.all([
        fetchAssetUsdPrice(asset),
        fetchUsdToKes()
    ]);
    if (assetUsd === null || usdKes === null) return null;
    return assetUsd * usdKes;
}
function getFallbackRate() {
    return 132.4; // approximate KES/USDT — for production, persist the last
// successful live rate (KV, DB, even a file) and read it here instead of
// a hardcoded number, so the fallback stays roughly accurate over time.
}
}),
"[project]/Desktop/scropay/lib/rates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assetToFiat",
    ()=>assetToFiat,
    "fiatToAsset",
    ()=>fiatToAsset,
    "getQuote",
    ()=>getQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/priceFeed.ts [app-route] (ecmascript)");
;
/**
 * The spread. 40 bps = 0.4% on each side, i.e. a buyer pays ~0.4% above the
 * market rate and a seller receives ~0.4% below it — about 0.8% round-trip
 * margin, in line with what P2P/ramp apps typically charge. Tune this per
 * corridor/volume; it's the one number that turns "quote" into "profit."
 */ const MARGIN_BPS = 40;
async function getQuote(network = "CELO") {
    const now = Date.now();
    const live = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchMarketRate"])("USDT", "KES");
    const marketRate = live ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFallbackRate"])();
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
        source: live !== null ? "live" : "fallback"
    };
}
function fiatToAsset(fiatAmount, rate) {
    if (!rate) return 0;
    return Number((fiatAmount / rate).toFixed(6));
}
function assetToFiat(assetAmount, rate) {
    return Number((assetAmount * rate).toFixed(2));
}
}),
"[project]/Desktop/scropay/app/api/rate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/rates.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    const network = req.nextUrl.searchParams.get("network") || "CELO";
    const quote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQuote"])(network);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(quote);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01jkefp._.js.map