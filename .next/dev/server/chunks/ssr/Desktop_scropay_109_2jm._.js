module.exports = [
"[project]/Desktop/scropay/lib/priceFeed.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/scropay/lib/rates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assetToFiat",
    ()=>assetToFiat,
    "fiatToAsset",
    ()=>fiatToAsset,
    "getQuote",
    ()=>getQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/priceFeed.ts [app-ssr] (ecmascript)");
;
/**
 * The spread. 40 bps = 0.4% on each side, i.e. a buyer pays ~0.4% above the
 * market rate and a seller receives ~0.4% below it — about 0.8% round-trip
 * margin, in line with what P2P/ramp apps typically charge. Tune this per
 * corridor/volume; it's the one number that turns "quote" into "profit."
 */ const MARGIN_BPS = 40;
async function getQuote(network = "CELO") {
    const now = Date.now();
    const live = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchMarketRate"])("USDT", "KES");
    const marketRate = live ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$priceFeed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFallbackRate"])();
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
"[project]/Desktop/scropay/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/scropay/lib/limits.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * These are UI-enforced limits for an unverified user. They exist to keep
 * a no-KYC flow inside a low-risk band — the actual regulatory thresholds
 * are a compliance decision, not a frontend one, and should be enforced
 * again server-side (an order-creation endpoint that re-checks the amount
 * against the caller's verification level) before this ever touches real
 * money. A client-side check alone is trivially bypassable.
 */ __turbopack_context__.s([
    "MAX_BUY_FIAT_KES",
    ()=>MAX_BUY_FIAT_KES,
    "MAX_SELL_ASSET_USDT",
    ()=>MAX_SELL_ASSET_USDT,
    "MIN_BUY_FIAT_KES",
    ()=>MIN_BUY_FIAT_KES,
    "MIN_SELL_ASSET_USDT",
    ()=>MIN_SELL_ASSET_USDT
]);
const MIN_BUY_FIAT_KES = 100;
const MAX_BUY_FIAT_KES = 500;
const MIN_SELL_ASSET_USDT = 5;
const MAX_SELL_ASSET_USDT = 200;
}),
"[project]/Desktop/scropay/components/LedgerStrip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LedgerStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/format.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function LedgerStrip({ quote, direction }) {
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const displayRate = quote ? direction === "buy" ? quote.buyRate : quote.sellRate : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!quote) return;
        const id = setInterval(()=>{
            setSecondsLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeLeft"])(quote.updatedAt, quote.ttlSeconds));
        }, 1000);
        return ()=>clearInterval(id);
    }, [
        quote
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grain flex items-center justify-between rounded-t-2xl bg-[var(--color-moss-deep)] px-5 py-3 text-[var(--color-paper)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2 font-mono text-xs tracking-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-paper)]/60",
                        children: "1 USDT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--color-paper)]/40",
                        children: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rate-refresh text-sm font-medium",
                        children: displayRate ? `KES ${displayRate.toFixed(2)}` : "—"
                    }, displayRate, false, {
                        fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    quote?.source === "fallback" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-paper)]/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex h-1.5 w-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ochre)] opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/LedgerStrip.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Desktop/scropay/components/RampCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RampCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/rates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/limits.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$components$2f$LedgerStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/components/LedgerStrip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function RampCard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("buy");
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fiatAmount, setFiatAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2500);
    const [editingSide, setEditingSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("fiat");
    const [assetAmount, setAssetAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            mounted = false;
            clearInterval(id);
        };
    }, []);
    const activeRate = quote ? direction === "buy" ? quote.buyRate : quote.sellRate : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeRate) return;
        // Deliberate cross-field sync, not a render-derivable value: when the
        // rate ticks, whichever side the user *isn't* actively typing in needs
        // to be recomputed from it.
        /* eslint-disable react-hooks/set-state-in-effect */ if (editingSide === "fiat") {
            setAssetAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fiatToAsset"])(fiatAmount, activeRate));
        } else {
            setFiatAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assetToFiat"])(assetAmount, activeRate));
        }
    /* eslint-enable react-hooks/set-state-in-effect */ // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        activeRate
    ]);
    const payLabel = direction === "buy" ? "You pay" : "You send";
    const receiveLabel = direction === "buy" ? "You receive" : "You get";
    // "Over the limit" is distinct from "invalid" — over-limit routes to KYC
    // instead of just blocking the button.
    const overLimit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (direction === "buy") return fiatAmount > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BUY_FIAT_KES"];
        return assetAmount > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_SELL_ASSET_USDT"];
    }, [
        direction,
        fiatAmount,
        assetAmount
    ]);
    const validationError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (overLimit) return null; // shown via the KYC CTA instead
        if (direction === "buy") {
            if (fiatAmount < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_BUY_FIAT_KES"]) return `Minimum is KES ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFiat"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_BUY_FIAT_KES"])}`;
        } else {
            if (assetAmount < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_SELL_ASSET_USDT"]) return `Minimum is ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_SELL_ASSET_USDT"]} USDT`;
        }
        return null;
    }, [
        direction,
        fiatAmount,
        assetAmount,
        overLimit
    ]);
    function handleFiatChange(value) {
        const n = Number(value.replace(/[^0-9.]/g, ""));
        setEditingSide("fiat");
        setFiatAmount(n);
        if (activeRate) setAssetAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fiatToAsset"])(n, activeRate));
    }
    function handleAssetChange(value) {
        const n = Number(value.replace(/[^0-9.]/g, ""));
        setEditingSide("asset");
        setAssetAmount(n);
        if (activeRate) setFiatAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$rates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assetToFiat"])(n, activeRate));
    }
    function handleContinue() {
        if (!quote) return;
        const params = new URLSearchParams({
            direction,
            fiat: String(fiatAmount),
            asset: String(assetAmount),
            network: quote.network
        });
        if (overLimit) {
            router.push(`/kyc?${params.toString()}`);
            return;
        }
        if (validationError) return;
        router.push(direction === "buy" ? `/connect?${params.toString()}` : `/sell/payout?${params.toString()}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$components$2f$LedgerStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                quote: quote,
                direction: direction
            }, void 0, false, {
                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "tablist",
                        "aria-label": "Ramp direction",
                        className: "mb-5 inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] p-1",
                        children: [
                            "buy",
                            "sell"
                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 135,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-moss)]/40 bg-[var(--color-moss)]/5 px-3 py-1 text-sm font-medium text-[var(--color-moss-deep)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block h-2 w-2 rounded-full bg-[var(--color-moss)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            "M-Pesa"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50",
                                children: payLabel
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-sm text-[var(--color-ink)]/50",
                                            children: direction === "buy" ? "KES" : "USDT"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            inputMode: "decimal",
                                            className: "focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]",
                                            value: direction === "buy" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFiat"])(fiatAmount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAsset"])(assetAmount),
                                            onChange: (e)=>direction === "buy" ? handleFiatChange(e.target.value) : handleAssetChange(e.target.value),
                                            "aria-label": payLabel
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-2 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)]/50",
                            children: "↓"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50",
                                children: receiveLabel
                            }, void 0, false, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-sm text-[var(--color-ink)]/50",
                                                children: direction === "buy" ? "USDT" : "KES"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                inputMode: "decimal",
                                                className: "focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]",
                                                value: direction === "buy" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAsset"])(assetAmount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFiat"])(fiatAmount),
                                                onChange: (e)=>direction === "buy" ? handleAssetChange(e.target.value) : handleFiatChange(e.target.value),
                                                "aria-label": receiveLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]/70",
                                        children: "Celo network"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-1.5 text-sm text-[var(--color-ink)]/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Network fee"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? "0.00 USDT" : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Market rate"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? `KES ${quote.marketRate.toFixed(2)}` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Our rate (",
                                            (quote?.marginBps ?? 0) / 100,
                                            "% spread)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: quote ? `KES ${activeRate?.toFixed(2)}` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    (validationError || error) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-[#8a3b2b]",
                        role: "alert",
                        children: validationError ?? error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleContinue,
                        disabled: !quote || !!validationError,
                        className: "focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-opacity disabled:opacity-40",
                        children: overLimit ? "Complete registration & KYC →" : direction === "buy" ? "Next: connect wallet" : "Next: enter M-Pesa number"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-xs text-[var(--color-ink)]/40",
                        children: direction === "buy" ? `Rates refresh every 20s · No KYC up to KES ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatFiat"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_BUY_FIAT_KES"])}` : `Rates refresh every 20s · No KYC up to ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$limits$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_SELL_ASSET_USDT"]} USDT`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/scropay/components/RampCard.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_scropay_109_2jm._.js.map