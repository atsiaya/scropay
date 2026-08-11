"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BuyOrder, Network } from "@/lib/types";
import { normalizeMsisdn } from "@/lib/phone";
import { formatFiat, formatAsset } from "@/lib/format";

type Stage = "confirm" | "waiting" | "paid" | "failed";

const POLL_INTERVAL_MS = 3000;
const MAX_POLLS = 40; // ~2 minutes — STK prompts time out around then anyway

function truncate(addr: string): string {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export default function BuyPayStep() {
  const router = useRouter();
  const params = useSearchParams();
  const network = (params.get("network") as Network) || "CELO";
  const fiat = Number(params.get("fiat") ?? "0");
  const asset = Number(params.get("asset") ?? "0");
  const wallet = params.get("wallet") ?? "";

  const [stage, setStage] = useState<Stage>("confirm");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const pollCount = useRef(0);

  async function handlePay() {
    const msisdn = normalizeMsisdn(phone);
    if (!msisdn) {
      setError("Enter a valid M-Pesa number, e.g. 0712345678");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/buy/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asset: "USDT",
          network,
          assetAmount: asset,
          fiatAmount: fiat,
          mpesaNumber: phone,
          email: email || undefined,
          walletAddress: wallet,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Couldn't start the payment. Try again.");
        setSubmitting(false);
        return;
      }
      setOrderId(data.orderId);
      setStage("waiting");
    } catch {
      setError("Couldn't reach the server. Check your connection and retry.");
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (stage !== "waiting" || !orderId) return;
    let cancelled = false;
    let consecutiveErrors = 0;
    const MAX_CONSECUTIVE_ERRORS = 5; // ~15s of transient failures before giving up

    async function poll() {
      try {
        const res = await fetch(`/api/buy/stk-push?id=${orderId}`, { cache: "no-store" });
        if (!res.ok) {
          // A single bad response (a rate-limited token refresh, a cold
          // serverless instance, a network blip) must not look like a
          // failed payment — only genuinely repeated failures should.
          consecutiveErrors += 1;
          if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
            if (!cancelled) setStage("failed");
            return;
          }
          pollCount.current += 1;
          if (pollCount.current < MAX_POLLS) setTimeout(poll, POLL_INTERVAL_MS);
          else if (!cancelled) setStage("failed");
          return;
        }
        consecutiveErrors = 0;

        const order: BuyOrder = await res.json();
        if (cancelled) return;

        if (order.status === "paid") {
          setStage("paid");
          return;
        }
        if (order.status === "failed" || order.status === "expired") {
          setStage("failed");
          return;
        }

        pollCount.current += 1;
        if (pollCount.current < MAX_POLLS) {
          setTimeout(poll, POLL_INTERVAL_MS);
        } else {
          setStage("failed");
        }
      } catch {
        // Same reasoning as the !res.ok branch — a thrown fetch (e.g. a
        // brief network drop) is transient, not a payment failure.
        consecutiveErrors += 1;
        pollCount.current += 1;
        if (!cancelled) {
          if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS || pollCount.current >= MAX_POLLS) {
            setStage("failed");
          } else {
            setTimeout(poll, POLL_INTERVAL_MS);
          }
        }
      }
    }

    poll();
    return () => {
      cancelled = true;
    };
  }, [stage, orderId]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Step 3 of 3</span>
          <span className="font-mono">
            KES {formatFiat(fiat)} → {formatAsset(asset)} USDT
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          {stage === "confirm" && (
            <>
              <h2 className="font-display text-lg font-medium">Confirm and pay</h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                Sending {formatAsset(asset)} USDT to{" "}
                <span className="font-mono">{truncate(wallet)}</span> on{" "}
                {network}.
              </p>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  M-Pesa number
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07XX XXX XXX"
                  inputMode="tel"
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 font-mono text-lg"
                />
              </label>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  Email (optional, for your receipt)
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
                />
              </label>

              {error && (
                <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
                  {error}
                </p>
              )}

              <button
                onClick={handlePay}
                disabled={submitting}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
              >
                {submitting ? "Sending prompt…" : `Pay KES ${formatFiat(fiat)} with M-Pesa`}
              </button>

              <button
                onClick={() => router.push("/")}
                className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
              >
                ← Start over
              </button>
            </>
          )}

          {stage === "waiting" && (
            <div className="text-center">
              <h2 className="font-display text-lg font-medium">
                Check your phone
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                Enter your M-Pesa PIN on the prompt to complete the payment.
                We&apos;ll confirm automatically once it goes through.
              </p>
              <div className="mx-auto mt-5 h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-moss)]" />
              <p className="mt-4 font-mono text-xs text-[var(--color-ink)]/40">
                Reference: {orderId}
              </p>
            </div>
          )}

          {stage === "paid" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
                ✓
              </div>
              <h2 className="font-display text-xl font-medium">Payment received</h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                {formatAsset(asset)} USDT is on its way to{" "}
                <span className="font-mono">{truncate(wallet)}</span>.
              </p>
              <p className="mt-1 text-xs text-[var(--color-ink)]/40">
                {email
                  ? "We've sent a receipt to your email."
                  : "Keep the reference below for support."}
              </p>
              <p className="mt-4 font-mono text-xs text-[var(--color-ink)]/40">
                Reference: {orderId}
              </p>
            </div>
          )}

          {stage === "failed" && (
            <div className="text-center">
              <h2 className="font-display text-lg font-medium">
                Payment didn&apos;t go through
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                The M-Pesa prompt may have timed out, been cancelled, or
                the order expired. No USDT was sent.
              </p>
              <button
                onClick={() => {
                  setStage("confirm");
                  setOrderId(null);
                  pollCount.current = 0;
                }}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
