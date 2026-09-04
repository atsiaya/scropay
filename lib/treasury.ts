import { Network } from "./types";

/**
 * A single static deposit address per network — the simplest thing that
 * works for networks with no agent liquidity yet (see lib/orders.ts's
 * createSellOrder: only CELO currently routes through an agent match).
 * Set these in your environment; the fallback below is an obviously-fake
 * placeholder so the UI still renders in a fresh checkout.
 */
const FALLBACK_ADDRESS = "0x" + "11".repeat(20); // 42 chars, valid EVM format, not a real key

const ENV_KEY_BY_NETWORK: Record<Network, string> = {
  CELO: "TREASURY_ADDRESS_CELO",
  POLYGON: "TREASURY_ADDRESS_POLYGON",
  BASE: "TREASURY_ADDRESS_BASE",
  TRON: "TREASURY_ADDRESS_TRON",
};

export function getTreasuryAddress(network: Network): string {
  const key = ENV_KEY_BY_NETWORK[network];
  return process.env[key] || FALLBACK_ADDRESS;
}
