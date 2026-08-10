"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RampDirection, Network } from "@/lib/types";
import { formatFiat } from "@/lib/format";
import { MAX_BUY_FIAT_KES, MAX_SELL_ASSET_USDT } from "@/lib/limits";

type Stage = "email" | "identity";

export default function KycStep() {
  const router = useRouter();
  const params = useSearchParams();
  const direction = (params.get("direction") as RampDirection) || "buy";
  const fiat = Number(params.get("fiat") ?? "0");
  const asset = Number(params.get("asset") ?? "0");
  const network = (params.get("network") as Network) || "CELO";

  const [stage, setStage] = useState<Stage>("email");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const overBy =
    direction === "buy"
      ? `KES ${formatFiat(fiat - MAX_BUY_FIAT_KES)}`
      : `${(asset - MAX_SELL_ASSET_USDT).toFixed(2)} USDT`;

  function handleEmailContinue() {
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setStage("identity");
  }

  async function handleSubmit() {
    if (!fullName.trim() || !idNumber.trim()) {
      setError("Fill in both fields to continue.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullName, idNumber, direction, fiat, asset, network }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        setSubmitting(false);
        return;
      }

      const q = new URLSearchParams({
        direction,
        fiat: String(fiat),
        asset: String(asset),
        network,
      });

      if (data.status === "verified") {
        // Already passed KYC under this ID before — go straight to the
        // transaction, no need to send them through Didit again.
        router.push(direction === "buy" ? `/connect?${q.toString()}` : `/sell/payout?${q.toString()}`);
        return;
      }

      // Not verified yet — hand off to Didit's hosted flow. It redirects
      // back to /kyc/callback, which resumes the transaction once the
      // webhook confirms approval.
      window.location.href = data.url;
    } catch {
      setError("Couldn't reach the server. Check your connection and retry.");
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Verification required</span>
          <span className="font-mono">{stage === "email" ? "1" : "2"} of 2</span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          {stage === "email" ? (
            <>
              <h2 className="font-display text-lg font-medium">
                What&apos;s your email?
              </h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                You&apos;re {overBy} over our no-KYC limit for{" "}
                {direction === "buy" ? "buying" : "selling"}. We&apos;ll use
                this for your order receipts and verification updates.
              </p>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  Email address
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
                  placeholder="you@example.com"
                />
              </label>

              {error && (
                <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
                  {error}
                </p>
              )}

              <button
                onClick={handleEmailContinue}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h2 className="font-display text-lg font-medium">
                Verify your identity
              </h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                If you&apos;ve verified with us before under this ID,
                you&apos;ll go straight through; otherwise you&apos;ll
                complete a quick ID check.
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
                disabled={submitting}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
              >
                {submitting ? "Checking…" : "Continue"}
              </button>

              <button
                onClick={() => setStage("email")}
                className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
              >
                ← Back
              </button>
            </>
          )}

          {stage === "email" && (
            <button
              onClick={() => router.push("/")}
              className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
            >
              ← Back to amount
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
