module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/scropay/lib/web3/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "networks",
    ()=>networks,
    "projectId",
    ()=>projectId,
    "wagmiAdapter",
    ()=>wagmiAdapter,
    "wagmiConfig",
    ()=>wagmiConfig
]);
(()=>{
    const e = new Error("Cannot find module 'wagmi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@reown/appkit-adapter-wagmi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@reown/appkit/networks'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const projectId = ("TURBOPACK compile-time value", "accbd93a9c77219c9ae3be346e40e8d5") ?? "";
const networks = [
    celo,
    polygon,
    base
];
const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
});
const wagmiConfig = wagmiAdapter.wagmiConfig;
}),
"[project]/Desktop/scropay/app/web3-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3Provider",
    ()=>Web3Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@reown/appkit/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'wagmi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tanstack/react-query'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/scropay/lib/web3/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const queryClient = new QueryClient();
// createAppKit must run once, at module load, before any component tries
// to open the modal. It's a no-op-safe call if projectId is empty — the
// modal will just fail to open, which the UI below handles explicitly
// rather than crashing.
if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"]) {
    createAppKit({
        adapters: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wagmiAdapter"]
        ],
        networks: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networks"],
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
        metadata: {
            name: "Ramp",
            description: "Buy and sell USDT with M-Pesa",
            url: ("TURBOPACK compile-time value", "http://localhost:3000") ?? "http://localhost:3000",
            icons: []
        },
        features: {
            analytics: false,
            email: false,
            socials: false
        }
    });
}
function Web3Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WagmiProvider, {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$lib$2f$web3$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wagmiConfig"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$scropay$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QueryClientProvider, {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/scropay/app/web3-provider.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/scropay/app/web3-provider.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qifmxb._.js.map