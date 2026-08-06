"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RampDirection } from "@/lib/types";
import { formatFiat } from "@/lib/format";
import { MAX_BUY_FIAT_KES, MAX_SELL_ASSET_USDT } from "@/lib/limits";

export default function KycStep() {
  const router = useRouter();
  const params = useSearchParams();
  const direction = (params.get("direction") as RampDirection) || "buy";
  const fiat = Number(params.get("fiat") ?? "0");
  const asset = Number(params.get("asset") ?? "0");

  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [error, setError] = useState<string | null>(null);

  const overBy =
    direction === "buy"
      ? `KES ${formatFiat(fiat - MAX_BUY_FIAT_KES)}`
      : `${(asset - MAX_SELL_ASSET_USDT).toFixed(2)} USDT`;

  function handleSubmit() {
    if (!fullName.trim() || !idNumber.trim()) {
      setError("Fill in both fields to continue.");
      return;
    }
    setError(null);
    // This is a stub: no document upload, no liveness check, no real
    // verification provider call. See README "Adding real KYC" for what
    // this needs before it does anything.
    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 text-sm text-[var(--color-ink)]/50">
          Verification required
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
                ✓
              </div>
              <h2 className="font-display text-xl font-medium">
                Submitted for review
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                We&apos;ll email you once your account is verified — usually
                within a few hours. You&apos;ll then be able to complete this
                order at your original amount.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-lg font-medium">
                This amount needs a verified account
              </h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                You&apos;re {overBy} over our no-KYC limit for{" "}
                {direction === "buy" ? "buying" : "selling"}. A quick
                one-time verification unlocks higher limits.
              </p>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  Full legal name
                </span>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
                  placeholder="As it appears on your ID"
                />
              </label>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  National ID or passport number
                </span>
                <input
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
                />
              </label>

              {error && (
                <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
                  {error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Continue verification
              </button>
            </>
          )}

          <button
            onClick={() => router.push("/")}
            className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
          >
            ← Back to amount
          </button>
        </div>
      </div>
    </main>
  );
}
