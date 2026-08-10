"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useChainId, useDisconnect, useSwitchChain } from "wagmi";
import { celo, polygon, base } from "@reown/appkit/networks";
import { projectId } from "@/lib/web3/config";
import { Network } from "@/lib/types";

const CHAIN_BY_NETWORK: Record<Network, { id: number; label: string }> = {
  CELO: { id: celo.id, label: "Celo" },
  POLYGON: { id: polygon.id, label: "Polygon" },
  BASE: { id: base.id, label: "Base" },
  // TRON is non-EVM and isn't wired into this AppKit/wagmi setup — see
  // README "Adding Tron support". Falling back to Celo's id here just
  // avoids a crash if it's ever passed through; the network switch below
  // is meaningless for it either way.
  TRON: { id: celo.id, label: "Celo" },
};

function isValidEvmAddress(addr: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(addr.trim());
}

function truncate(addr: string): string {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export default function WalletConnectStep({
  network,
  fiat,
  asset,
  onBack,
}: {
  network: Network;
  fiat: number;
  asset: number;
  onBack: () => void;
}) {
  const router = useRouter();
  const target = CHAIN_BY_NETWORK[network];

  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const [mode, setMode] = useState<"choose" | "manual">("choose");
  const [manualAddress, setManualAddress] = useState("");
  const [manualError, setManualError] = useState<string | null>(null);
  const [manualConfirmed, setManualConfirmed] = useState<string | null>(null);

  // If the user connects a real wallet while the manual form is open,
  // the real connection takes priority.
  useEffect(() => {
    // Resetting local UI state in response to an external source (wagmi's
    // connection status) changing — the standard "reset on prop change"
    // pattern, not a derived render value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isConnected) setManualConfirmed(null);
  }, [isConnected]);

  const connectedAddress = isConnected ? address : manualConfirmed;
  const wrongNetwork = isConnected && chainId !== target.id;

  function submitManualAddress() {
    if (!isValidEvmAddress(manualAddress)) {
      setManualError("Enter a valid address (starts with 0x, 42 characters)");
      return;
    }
    setManualError(null);
    setManualConfirmed(manualAddress.trim());
  }

  if (connectedAddress) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
          ✓
        </div>
        <h2 className="font-display text-xl font-medium">Wallet ready</h2>
        <p className="mt-1 font-mono text-sm text-[var(--color-ink)]/60">
          {truncate(connectedAddress)}
        </p>
        <p className="mt-1 text-xs text-[var(--color-ink)]/40">
          Receiving on {target.label}
        </p>

        {wrongNetwork && (
          <div className="mt-4 rounded-xl border border-[#8a3b2b]/30 bg-[#8a3b2b]/5 p-3 text-sm text-[#8a3b2b]">
            <p>Your wallet is on a different network than {target.label}.</p>
            <button
              onClick={() => switchChain({ chainId: target.id })}
              disabled={isSwitching}
              className="focus-ring mt-2 rounded-lg bg-[#8a3b2b] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
            >
              {isSwitching ? "Switching…" : `Switch to ${target.label}`}
            </button>
          </div>
        )}

        <button
          disabled={wrongNetwork}
          onClick={() => {
            const q = new URLSearchParams({
              network,
              fiat: String(fiat),
              asset: String(asset),
              wallet: connectedAddress,
            });
            router.push(`/buy/pay?${q.toString()}`);
          }}
          className="focus-ring mt-6 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
        >
          Confirm and pay with M-Pesa
        </button>
        <button
          onClick={() => {
            disconnect();
            setManualConfirmed(null);
            setMode("choose");
          }}
          className="focus-ring mt-3 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
        >
          Use a different wallet
        </button>
      </div>
    );
  }

  if (mode === "manual") {
    return (
      <div>
        <h2 className="font-display text-lg font-medium">
          Paste your wallet address
        </h2>
        <p className="mt-1 text-sm text-[var(--color-ink)]/60">
          Make sure it supports the {target.label} network — funds sent to
          the wrong network can&apos;t be recovered.
        </p>
        <input
          value={manualAddress}
          onChange={(e) => setManualAddress(e.target.value)}
          placeholder="0x…"
          className="focus-ring mt-4 w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 font-mono text-sm"
        />
        {manualError && (
          <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
            {manualError}
          </p>
        )}
        <button
          onClick={submitManualAddress}
          className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
        >
          Continue
        </button>
        <button
          onClick={() => setMode("choose")}
          className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-lg font-medium">Connect your wallet</h2>
      <p className="mt-1 text-sm text-[var(--color-ink)]/60">
        Choose where you&apos;d like to receive your USDT on {target.label}.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => open()}
          disabled={!projectId}
          className="focus-ring flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-left transition-colors hover:border-[var(--color-moss)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>
            <span className="block text-sm font-medium">Connect Wallet</span>
            <span className="block text-xs text-[var(--color-ink)]/50">
              OKX Wallet, Binance Web3 Wallet, MetaMask, Trust, or scan a
              WalletConnect QR code
            </span>
          </span>
          <span className="text-[var(--color-ink)]/30">→</span>
        </button>

        <button
          onClick={() => setMode("manual")}
          className="focus-ring flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-left transition-colors hover:border-[var(--color-moss)]"
        >
          <span>
            <span className="block text-sm font-medium">Paste an address</span>
            <span className="block text-xs text-[var(--color-ink)]/50">
              Send to any address on the {target.label} network
            </span>
          </span>
          <span className="text-[var(--color-ink)]/30">→</span>
        </button>
      </div>

      {!projectId && (
        <p className="mt-3 text-xs text-[#8a3b2b]">
          Wallet connection isn&apos;t configured yet — set
          NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID (a free key from
          cloud.reown.com) to enable it. Pasting an address still works.
        </p>
      )}

      <button
        onClick={onBack}
        className="focus-ring mt-4 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
      >
        ← Back to amount
      </button>
    </div>
  );
}
