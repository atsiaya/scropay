"use client";

import { useState } from "react";
import { WALLET_OPTIONS } from "@/lib/wallets";

type Step = "list" | "qr" | "manual" | "connected";

function isValidAddress(addr: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(addr.trim());
}

export default function WalletConnectFlow({
  onBack,
}: {
  onBack: () => void;
}) {
  const [step, setStep] = useState<Step>("list");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState<string | null>(null);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(
    null
  );

  function selectWallet(id: string) {
    if (id === "manual") {
      setStep("manual");
    } else if (id === "walletconnect") {
      setStep("qr");
      // in a real integration, open the WalletConnect modal here and
      // resolve this promise on session_connect — see README.
      setTimeout(() => {
        setConnectedAddress("0x4f9a...E211");
        setStep("connected");
      }, 2200);
    } else {
      // extension-based wallets (MetaMask, Coinbase Wallet) would call
      // window.ethereum.request({ method: "eth_requestAccounts" }) here.
      setConnectedAddress("0x71cB...9a0D");
      setStep("connected");
    }
  }

  function submitManualAddress() {
    if (!isValidAddress(address)) {
      setAddressError("Enter a valid address (starts with 0x, 42 characters)");
      return;
    }
    setAddressError(null);
    setConnectedAddress(address);
    setStep("connected");
  }

  if (step === "connected" && connectedAddress) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
          ✓
        </div>
        <h2 className="font-display text-xl font-medium">Wallet connected</h2>
        <p className="mt-1 font-mono text-sm text-[var(--color-ink)]/60">
          {connectedAddress}
        </p>
        <button className="focus-ring mt-6 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]">
          Confirm and pay with M-Pesa
        </button>
        <button
          onClick={() => {
            setConnectedAddress(null);
            setStep("list");
          }}
          className="focus-ring mt-3 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
        >
          Use a different wallet
        </button>
      </div>
    );
  }

  if (step === "qr") {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-xl border border-dashed border-[var(--color-line)] bg-[var(--color-paper)] font-mono text-xs text-[var(--color-ink)]/40">
          QR CODE
        </div>
        <h2 className="font-display text-lg font-medium">
          Scan with your wallet app
        </h2>
        <p className="mx-auto mt-1 max-w-xs text-sm text-[var(--color-ink)]/60">
          Open Valora, Trust Wallet, or any WalletConnect-compatible app and
          scan this code.
        </p>
        <button
          onClick={() => setStep("list")}
          className="focus-ring mt-6 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
        >
          Cancel
        </button>
      </div>
    );
  }

  if (step === "manual") {
    return (
      <div>
        <h2 className="font-display text-lg font-medium">
          Paste your wallet address
        </h2>
        <p className="mt-1 text-sm text-[var(--color-ink)]/60">
          Make sure it supports the Celo network — funds sent to the wrong
          network can&apos;t be recovered.
        </p>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="0x…"
          className="focus-ring mt-4 w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 font-mono text-sm"
        />
        {addressError && (
          <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
            {addressError}
          </p>
        )}
        <button
          onClick={submitManualAddress}
          className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
        >
          Continue
        </button>
        <button
          onClick={() => setStep("list")}
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
        Choose where you&apos;d like to receive your USDT.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {WALLET_OPTIONS.map((w) => (
          <button
            key={w.id}
            onClick={() => selectWallet(w.id)}
            className="focus-ring flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-left transition-colors hover:border-[var(--color-moss)]"
          >
            <span>
              <span className="block text-sm font-medium">{w.name}</span>
              <span className="block text-xs text-[var(--color-ink)]/50">
                {w.description}
              </span>
            </span>
            <span className="text-[var(--color-ink)]/30">→</span>
          </button>
        ))}
      </div>
      <button
        onClick={onBack}
        className="focus-ring mt-4 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
      >
        ← Back to amount
      </button>
    </div>
  );
}
