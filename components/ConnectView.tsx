"use client";

import { useRouter, useSearchParams } from "next/navigation";
import WalletConnectFlow from "@/components/WalletConnectFlow";

export default function ConnectView() {
  const router = useRouter();
  const params = useSearchParams();
  const direction = params.get("direction") ?? "buy";
  const fiat = params.get("fiat") ?? "0";
  const asset = params.get("asset") ?? "0";

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Step 2 of 3</span>
          <span className="font-mono">
            {direction === "buy"
              ? `KES ${fiat} → ${asset} USDT`
              : `${asset} USDT → KES ${fiat}`}
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <WalletConnectFlow onBack={() => router.push("/")} />
        </div>
      </div>
    </main>
  );
}
