/**
 * These are UI-enforced limits for an unverified user. They exist to keep
 * a no-KYC flow inside a low-risk band — the actual regulatory thresholds
 * are a compliance decision, not a frontend one, and should be enforced
 * again server-side (an order-creation endpoint that re-checks the amount
 * against the caller's verification level) before this ever touches real
 * money. A client-side check alone is trivially bypassable.
 */
export const MIN_BUY_FIAT_KES = 20;
export const MAX_BUY_FIAT_KES = 500;

export const MIN_SELL_ASSET_USDT = 2;
export const MAX_SELL_ASSET_USDT = 200;
