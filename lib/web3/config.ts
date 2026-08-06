import { cookieStorage, createStorage } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { celo, polygon, base, type AppKitNetwork } from "@reown/appkit/networks";

/**
 * A free WalletConnect/Reown Project ID is required to open the wallet
 * modal at all — this isn't optional the way the CoinGecko key is. Get one
 * at https://cloud.reown.com (free tier, a couple of minutes to set up)
 * and set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID. Without it, the connect
 * button below stays disabled with an explanatory message instead of
 * throwing at runtime.
 */
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";

// Tron isn't included here — it's a non-EVM chain and needs a separate
// integration (e.g. TronLink's own connector), not something AppKit's
// EVM-focused wallet list covers. See README "Adding Tron support".
export const networks = [celo, polygon, base] as [
  AppKitNetwork,
  ...AppKitNetwork[]
];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;
