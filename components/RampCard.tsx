"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { RampDirection, RateQuote } from "@/lib/types";
import { fiatToAsset, assetToFiat } from "@/lib/rates";
import { formatFiat, formatAsset } from "@/lib/format";
import LedgerStrip from "./LedgerStrip";

const MIN_FIAT = 100;
const MAX_FIAT = 150000;

export default function RampCard() {
  const router = useRouter();
  const [direction, setDirection] = useState<RampDirection>("buy");
  const [quote, setQuote] = useState<RateQuote | null>(null);
  const [fiatAmount, setFiatAmount] = useState(2500);
  const [editingSide, setEditingSide] = useState<"fiat" | "asset">("fiat");
  const [assetAmount, setAssetAmount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function poll() {
      try {
        const res = await fetch("/api/rate?network=CELO", { cache: "no-store" });
        const data: RateQuote = await res.json();
        if (mounted) setQuote(data);
      } catch {
        if (mounted) setError("Couldn't refresh the rate. Retrying…");
      }
    }
    poll();
    const id = setInterval(poll, 20000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (!quote) return;
    if (editingSide === "fiat") {
      setAssetAmount(fiatToAsset(fiatAmount, quote.rate));
    } else {
      setFiatAmount(assetToFiat(assetAmount, quote.rate));
    }
  }, [quote?.rate]);

  const payLabel = direction === "buy" ? "You pay" : "You send";
  const receiveLabel = direction === "buy" ? "You receive" : "You get";

  const validationError = useMemo(() => {
    if (fiatAmount < MIN_FIAT) return `Minimum is KES ${formatFiat(MIN_FIAT)}`;
    if (fiatAmount > MAX_FIAT) return `Maximum is KES ${formatFiat(MAX_FIAT)}`;
    return null;
  }, [fiatAmount]);

  function handleFiatChange(value: string) {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    setEditingSide("fiat");
    setFiatAmount(n);
    if (quote) setAssetAmount(fiatToAsset(n, quote.rate));
  }

  function handleAssetChange(value: string) {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    setEditingSide("asset");
    setAssetAmount(n);
    if (quote) setFiatAmount(assetToFiat(n, quote.rate));
  }

  function handleContinue() {
    if (validationError || !quote) return;
    const params = new URLSearchParams({
      direction,
      fiat: String(fiatAmount),
      asset: String(assetAmount),
      network: quote.network,
    });
    router.push(`/connect?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]">
      <LedgerStrip quote={quote} />

      <div className="p-5">
        {/* direction tabs */}
        <div
          role="tablist"
          aria-label="Ramp direction"
          className="mb-5 inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] p-1"
        >
          {(["buy", "sell"] as RampDirection[]).map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={direction === d}
              onClick={() => setDirection(d)}
              className={`focus-ring rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                direction === d
                  ? "bg-[var(--color-moss)] text-white"
                  : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"
              }`}
            >
              {d} USDT
            </button>
          ))}
        </div>

        {/* payment method */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-moss)]/40 bg-[var(--color-moss)]/5 px-3 py-1 text-sm font-medium text-[var(--color-moss-deep)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-moss)]" />
          M-Pesa
        </div>

        {/* pay field */}
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            {payLabel}
          </span>
          <div className="flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm text-[var(--color-ink)]/50">
                {direction === "buy" ? "KES" : "USDT"}
              </span>
              <input
                inputMode="decimal"
                className="focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]"
                value={
                  direction === "buy"
                    ? formatFiat(fiatAmount)
                    : formatAsset(assetAmount)
                }
                onChange={(e) =>
                  direction === "buy"
                    ? handleFiatChange(e.target.value)
                    : handleAssetChange(e.target.value)
                }
                aria-label={payLabel}
              />
            </div>
          </div>
        </label>

        {/* swap arrow */}
        <div className="my-2 flex justify-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)]/50">
            ↓
          </div>
        </div>

        {/* receive field */}
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            {receiveLabel}
          </span>
          <div className="flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm text-[var(--color-ink)]/50">
                {direction === "buy" ? "USDT" : "KES"}
              </span>
              <input
                inputMode="decimal"
                className="focus-ring w-36 bg-transparent font-mono text-2xl font-medium text-[var(--color-ink)]"
                value={
                  direction === "buy"
                    ? formatAsset(assetAmount)
                    : formatFiat(fiatAmount)
                }
                onChange={(e) =>
                  direction === "buy"
                    ? handleAssetChange(e.target.value)
                    : handleFiatChange(e.target.value)
                }
                aria-label={receiveLabel}
              />
            </div>
            <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]/70">
              Celo network
            </span>
          </div>
        </label>

        {/* fee row */}
        <div className="mt-4 flex items-center justify-between text-sm text-[var(--color-ink)]/60">
          <span>Network fee</span>
          <span className="font-mono">{quote ? "0.00 USDT" : "—"}</span>
        </div>

        {(validationError || error) && (
          <p className="mt-3 text-sm text-[#8a3b2b]" role="alert">
            {validationError ?? error}
          </p>
        )}

        <button
          onClick={handleContinue}
          disabled={!quote || !!validationError}
          className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-opacity disabled:opacity-40"
        >
          {direction === "buy" ? "Next: connect wallet" : "Next: choose payout"}
        </button>

        <p className="mt-3 text-center text-xs text-[var(--color-ink)]/40">
          Rates refresh every 20s · KYC required over KES 30,000
        </p>
      </div>
    </div>
  );
}
