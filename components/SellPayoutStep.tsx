"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { normalizeMsisdn } from "@/lib/phone";
import { Network, SellOrder } from "@/lib/types";
import { formatFiat } from "@/lib/format";

export default function SellPayoutStep() {
  const router = useRouter();
  const params = useSearchParams();

  const fiat = Number(params.get("fiat") ?? "0");
  const asset = Number(params.get("asset") ?? "0");
  const network = (params.get("network") as Network) || "CELO";

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit() {
    const msisdn = normalizeMsisdn(phone);
    if (!msisdn) {
      setError("Enter a valid M-Pesa number, e.g. 0712345678");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asset: "USDT",
          network,
          assetAmount: asset,
          fiatAmount: fiat,
          mpesaNumber: phone,
          email: email || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }
      const order = data as SellOrder;
      router.push(`/sell/deposit?orderId=${order.id}`);
    } catch {
      setError("Couldn't reach the server. Check your connection and retry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Step 2 of 3</span>
          <span className="font-mono">
            {asset} USDT → KES {formatFiat(fiat)}
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <h2 className="font-display text-lg font-medium">
            Where should we send your KES?
          </h2>
          <p className="mt-1 text-sm text-[var(--color-ink)]/60">
            We&apos;ll pay out KES {formatFiat(fiat)} to this M-Pesa number
            once your USDT arrives.
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
            onClick={handleSubmit}
            disabled={submitting}
            className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
          >
            {submitting ? "Creating order…" : "Next: send USDT"}
          </button>

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
