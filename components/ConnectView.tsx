"use client";

import { useRouter, useSearchParams } from "next/navigation";
import WalletConnectStep from "@/components/WalletConnectStep";
import { Network } from "@/lib/types";

/**
 * This route is the buy flow's step 2 (connect a wallet to receive USDT).
 * Sell has its own two-step flow — /sell/payout then /sell/deposit — since
 * "receive M-Pesa, send USDT to us" is a different shape than "receive
 * USDT, pay with M-Pesa". See RampCard's handleContinue for the branch.
 */
export default function ConnectView() {
  const router = useRouter();
  const params = useSearchParams();
  const fiat = params.get("fiat") ?? "0";
  const asset = params.get("asset") ?? "0";
  const network = (params.get("network") as Network) || "CELO";

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Step 2 of 2</span>
          <span className="font-mono">KES {fiat} → {asset} USDT</span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <WalletConnectStep network={network} onBack={() => router.push("/")} />
        </div>
      </div>
    </main>
  );
}
