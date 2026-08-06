// Intentionally empty stub for aliased-out x402 packages. Two functions
// are exported as harmless no-ops because account-signers.js is imported
// with named destructuring — Turbopack statically checks that named
// exports exist, even though nothing in this app ever calls them.
export {};
export function fromCdpSmartWallet(): never {
  throw new Error("x402 payments are not used in this app.");
}
export function cdpSolanaAccountToSvmSigner(): never {
  throw new Error("x402 payments are not used in this app.");
}
export function toClientEvmSigner(): never {
  throw new Error("x402 payments are not used in this app.");
}
