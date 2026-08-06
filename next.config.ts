import type { NextConfig } from "next";

// wagmi's Coinbase "Base Account" connector transitively pulls in
// @coinbase/cdp-sdk, which lazy-imports optional x402 (payment protocol)
// packages this app never installs or uses. Those imports are dynamic and
// runtime-guarded inside that SDK, but both Turbopack and webpack still
// try to statically resolve them at build time and fail. Aliasing them to
// an empty stub module fixes it for either bundler. If a future
// wagmi/appkit release drops that dependency, this whole block becomes a
// no-op you can delete.
const X402_ALIASES = [
  "@x402/core",
  "@x402/core/client",
  "@x402/evm",
  "@x402/evm/exact/client",
  "@x402/evm/upto/client",
  "@x402/svm",
  "@x402/svm/exact/client",
  "../../x402/account-signers.js",
];

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: Object.fromEntries(
      X402_ALIASES.map((name) => [name, "./lib/empty-module.ts"])
    ),
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...Object.fromEntries(X402_ALIASES.map((name) => [name, false])),
    };
    return config;
  },
};

export default nextConfig;
