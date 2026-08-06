(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/scropay/lib/priceFeed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchMarketRate",
    ()=>fetchMarketRate,
    "getFallbackRate",
    ()=>getFallbackRate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.COINGECKO_API_KEY) {
        headers["x-cg-demo-api-key"] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.COINGECKO_API_KEY;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/scropay/lib/rates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assetToFiat",
    ()=>assetToFiat,
    "fiatToAsset",
    ()=>fiatToAsset,
    "getQuote",
    ()=>getQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/priceFeed.ts [app-client] (ecmascript)");
;
/**
 * The spread. 40 bps = 0.4% on each side, i.e. a buyer pays ~0.4% above the
 * market rate and a seller receives ~0.4% below it — about 0.8% round-trip
 * margin, in line with what P2P/ramp apps typically charge. Tune this per
 * corridor/volume; it's the one number that turns "quote" into "profit."
 */ const MARGIN_BPS = 40;
async function getQuote(network = "CELO") {
    const now = Date.now();
    const live = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMarketRate"])("USDT", "KES");
    const marketRate = live ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFallbackRate"])();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/scropay/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAsset",
    ()=>formatAsset,
    "formatFiat",
    ()=>formatFiat,
    "timeLeft",
    ()=>timeLeft
]);
function formatFiat(n) {
    return n.toLocaleString("en-KE", {
        maximumFractionDigits: 0
    });
}
function formatAsset(n) {
    if (n === 0) return "0";
    return n.toLocaleString("en-KE", {
        maximumFractionDigits: 6
    });
}
function timeLeft(updatedAt, ttlSeconds) {
    const elapsed = (Date.now() - updatedAt) / 1000;
    return Math.max(0, Math.round(ttlSeconds - elapsed));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/scropay/components/LedgerStrip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LedgerStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LedgerStrip({ quote, direction }) {
    _s();
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const displayRate = quote ? direction === "buy" ? quote.buyRate : quote.sellRate : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LedgerStrip.useEffect": ()=>{
            if (!quote) return;
            const id = setInterval({
                "LedgerStrip.useEffect.id": ()=>{
                    setSecondsLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLeft"])(quote.updatedAt, quote.ttlSeconds));
                }
            }["LedgerStrip.useEffect.id"], 1000);
            return ({
                "LedgerStrip.useEffect": ()=>clearInterval(id)
            })["LedgerStrip.useEffect"];
        }
    }["LedgerStrip.useEffect"], [
        quote
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grain flex items-center justify-between rounded-t-2xl bg-[var(--color-moss-deep)] px-5 py-3 text-[var(--color-paper)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2 font-mono text-xs tracking-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-paper)]/60",
                        children: "1 USDT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-paper)]/40",
                        children: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rate-refresh text-sm font-medium",
                        children: displayRate ? `KES ${displayRate.toFixed(2)}` : "—"
                    }, displayRate, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    quote?.source === "fallback" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-ochre)]/80",
                        title: "Live price feed unavailable — showing the last known rate",
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-paper)]/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-1.5 w-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ochre)] opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-ochre)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    "next tick ",
                    secondsLeft,
                    "s"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(LedgerStrip, "8O5LDcwQWB58/bTH+b5LnaI6fqo=");
_c = LedgerStrip;
var _c;
__turbopack_context__.k.register(_c, "LedgerStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/scropay/components/RampCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RampCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/rates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$components$2f$LedgerStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/components/LedgerStrip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MIN_FIAT = 100;
const MAX_FIAT = 150000;
function RampCard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("buy");
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fiatAmount, setFiatAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2500);
    const [editingSide, setEditingSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("fiat");
    const [assetAmount, setAssetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RampCard.useEffect": ()=>{
            let mounted = true;
            async function poll() {
                try {
                    const res = await fetch("/api/rate?network=CELO", {
                        cache: "no-store"
                    });
                    const data = await res.json();
                    if (mounted) setQuote(data);
                } catch  {
                    if (mounted) setError("Couldn't refresh the rate. Retrying…");
                }
            }
            poll();
            const id = setInterval(poll, 20000);
            return ({
                "RampCard.useEffect": ()=>{
                    mounted = false;
                    clearInterval(id);
                }
            })["RampCard.useEffect"];
        }
    }["RampCard.useEffect"], []);
    const activeRate = quote ? direction === "buy" ? quote.buyRate : quote.sellRate : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RampCard.useEffect": ()=>{
            if (!activeRate) return;
            if (editingSide === "fiat") {
                setAssetAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fiatToAsset"])(fiatAmount, activeRate));
            } else {
                setFiatAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assetToFiat"])(assetAmount, activeRate));
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RampCard.useEffect"], [
        activeRate
    ]);
    const payLabel = direction === "buy" ? "You pay" : "You send";
    const receiveLabel = direction === "buy" ? "You receive" : "You get";
    const validationError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RampCard.useMemo[validationError]": ()=>{
            if (fiatAmount < MIN_FIAT) return `Minimum is KES ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFiat"])(MIN_FIAT)}`;
            if (fiatAmount > MAX_FIAT) return `Maximum is KES ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFiat"])(MAX_FIAT)}`;
            return null;
        }
    }["RampCard.useMemo[validationError]"], [
        fiatAmount
    ]);
    function handleFiatChange(value) {
        const n = Number(value.replace(/[^0-9.]/g, ""));
        setEditingSide("fiat");
        setFiatAmount(n);
        if (activeRate) setAssetAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fiatToAsset"])(n, activeRate));
    }
    function handleAssetChange(value) {
        const n = Number(value.replace(/[^0-9.]/g, ""));
        setEditingSide("asset");
        setAssetAmount(n);
        if (activeRate) setFiatAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assetToFiat"])(n, activeRate));
    }
    function handleContinue() {
        if (validationError || !quote) return;
        const params = new URLSearchParams({
            direction,
            fiat: String(fiatAmount),
            asset: String(assetAmount),
            network: quote.network
        });
        router.push(`/connect?${params.toString()}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$components$2f$LedgerStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                quote: quote,
                direction: direction
            }, void 0, false, {
                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "tablist",
                        "aria-label": "Ramp direction",
                        className: "mb-5 inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] p-1",
                        children: [
                            "buy",
                            "sell"
                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                role: "tab",
                                "aria-selected": direction === d,
                                onClick: ()=>setDirection(d),
                                className: `focus-ring rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${direction === d ? "bg-[var(--color-moss)] text-white" : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"}`,
                                children: [
                                    d,
                                    " USDT"
                                ]
                            }, d, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-moss)]/40 bg-[var(--color-moss)]/5 px-3 py-1 text-sm font-medium text-[var(--color-moss-deep)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block h-2 w-2 rounded-full bg-[var(--color-moss)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            "M-Pesa"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50",
                                children: payLabel
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-sm text-[var(--color-ink)]/50",
                                            children: direction === "buy" ? "KES" : "USDT"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            inputMode: "decimal",
                                            className: "focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]",
                                            value: direction === "buy" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFiat"])(fiatAmount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsset"])(assetAmount),
                                            onChange: (e)=>direction === "buy" ? handleFiatChange(e.target.value) : handleAssetChange(e.target.value),
                                            "aria-label": payLabel
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-2 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)]/50",
                            children: "↓"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50",
                                children: receiveLabel
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-sm text-[var(--color-ink)]/50",
                                                children: direction === "buy" ? "USDT" : "KES"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                inputMode: "decimal",
                                                className: "focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]",
                                                value: direction === "buy" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAsset"])(assetAmount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFiat"])(fiatAmount),
                                                onChange: (e)=>direction === "buy" ? handleAssetChange(e.target.value) : handleFiatChange(e.target.value),
                                                "aria-label": receiveLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]/70",
                                        children: "Celo network"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-1.5 text-sm text-[var(--color-ink)]/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Network fee"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? "0.00 USDT" : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Market rate"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? `KES ${quote.marketRate.toFixed(2)}` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Our rate (",
                                            (quote?.marginBps ?? 0) / 100,
                                            "% spread)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? `KES ${activeRate?.toFixed(2)}` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    (validationError || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-[#8a3b2b]",
                        role: "alert",
                        children: validationError ?? error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleContinue,
                        disabled: !quote || !!validationError,
                        className: "focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-opacity disabled:opacity-40",
                        children: direction === "buy" ? "Next: connect wallet" : "Next: choose payout"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-xs text-[var(--color-ink)]/40",
                        children: "Rates refresh every 20s · KYC required over KES 30,000"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(RampCard, "/+WufQJkD/WRmPPZeb+nAFbTX6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RampCard;
var _c;
__turbopack_context__.k.register(_c, "RampCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/scropay/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/scropay/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/scropay/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/scropay/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/scropay/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_scropay_1jvua_l._.js.map