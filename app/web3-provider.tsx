"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiAdapter, wagmiConfig, projectId, networks } from "@/lib/web3/config";

const queryClient = new QueryClient();

// createAppKit must run once, at module load, before any component tries
// to open the modal. It's a no-op-safe call if projectId is empty — the
// modal will just fail to open, which the UI below handles explicitly
// rather than crashing.
if (projectId) {
  createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata: {
      name: "Ramp",
      description: "Buy and sell USDT with M-Pesa",
      url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      icons: [],
    },
    features: {
      analytics: false,
      email: false,
      socials: false,
    },
    // No featuredWalletIds override: AppKit's default explorer ranking
    // already surfaces MetaMask, OKX Wallet, Binance Web3 Wallet, Trust
    // Wallet, Rainbow, etc. at the top for EVM chains, plus any wallet
    // injected in the browser. Pin specific wallet IDs here only if you
    // need a *fixed* order — copy the IDs from https://cloud.reown.com
    // rather than guessing them.
  });
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
