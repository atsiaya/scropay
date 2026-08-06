"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { RampDirection, RateQuote } from "@/lib/types";
import { fiatToAsset, assetToFiat } from "@/lib/rates";
import { formatFiat, formatAsset } from "@/lib/format";
import {
  MIN_BUY_FIAT_KES,
  MAX_BUY_FIAT_KES,
  MIN_SELL_ASSET_USDT,
  MAX_SELL_ASSET_USDT,
} from "@/lib/limits";
import LedgerStrip from "./LedgerStrip";

export default function RampCard() {
  const router = useRouter();
  const [direction, setDirection] = useState<RampDirection>("buy");
  const [quote, setQuote] = useState<RateQuote | null>(null);
  const [fiatAmount, setFiatAmount] = useState(500);
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

  const activeRate = quote
    ? direction === "buy"
      ? quote.buyRate
      : quote.sellRate
    : null;

  useEffect(() => {
    if (!activeRate) return;
    // Deliberate cross-field sync, not a render-derivable value: when the
    // rate ticks, whichever side the user *isn't* actively typing in needs
    // to be recomputed from it.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (editingSide === "fiat") {
      setAssetAmount(fiatToAsset(fiatAmount, activeRate));
    } else {
      setFiatAmount(assetToFiat(assetAmount, activeRate));
    }
    /* eslint-enable react-hooks/set-state-in-effect */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRate]);

  const payLabel = direction === "buy" ? "You pay" : "You send";
  const receiveLabel = direction === "buy" ? "You receive" : "You get";

  // "Over the limit" is distinct from "invalid" — over-limit routes to KYC
  // instead of just blocking the button.
  const overLimit = useMemo(() => {
    if (direction === "buy") return fiatAmount > MAX_BUY_FIAT_KES;
    return assetAmount > MAX_SELL_ASSET_USDT;
  }, [direction, fiatAmount, assetAmount]);

  const validationError = useMemo(() => {
    if (overLimit) return null; // shown via the KYC CTA instead
    if (direction === "buy") {
      if (fiatAmount < MIN_BUY_FIAT_KES)
        return `Minimum is KES ${formatFiat(MIN_BUY_FIAT_KES)}`;
    } else {
      if (assetAmount < MIN_SELL_ASSET_USDT)
        return `Minimum is ${MIN_SELL_ASSET_USDT} USDT`;
    }
    return null;
  }, [direction, fiatAmount, assetAmount, overLimit]);

  function handleFiatChange(value: string) {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    setEditingSide("fiat");
    setFiatAmount(n);
    if (activeRate) setAssetAmount(fiatToAsset(n, activeRate));
  }

  function handleAssetChange(value: string) {
    const n = Number(value.replace(/[^0-9.]/g, ""));
    setEditingSide("asset");
    setAssetAmount(n);
    if (activeRate) setFiatAmount(assetToFiat(n, activeRate));
  }

  function handleContinue() {
    if (!quote) return;
    const params = new URLSearchParams({
      direction,
      fiat: String(fiatAmount),
      asset: String(assetAmount),
      network: quote.network,
    });

    if (overLimit) {
      router.push(`/kyc?${params.toString()}`);
      return;
    }
    if (validationError) return;

    router.push(
      direction === "buy"
        ? `/connect?${params.toString()}`
        : `/sell/payout?${params.toString()}`
    );
  }

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]">
      <LedgerStrip quote={quote} direction={direction} />

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

        {/* fee + rate transparency */}
        <div className="mt-4 space-y-1.5 text-sm text-[var(--color-ink)]/60">
          <div className="flex items-center justify-between">
            <span>Network fee</span>
            <span className="font-mono">{quote ? "0.00 USDT" : "—"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Market rate</span>
            <span className="font-mono">
              {quote ? `KES ${quote.marketRate.toFixed(2)}` : "—"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Our rate ({(quote?.marginBps ?? 0) / 100}% spread)</span>
            <span className="font-mono">
              {quote ? `KES ${activeRate?.toFixed(2)}` : "—"}
            </span>
          </div>
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
          {overLimit
            ? "Complete registration & KYC →"
            : direction === "buy"
              ? "Next: connect wallet"
              : "Next: enter M-Pesa number"}
        </button>

        <p className="mt-3 text-center text-xs text-[var(--color-ink)]/40">
          {direction === "buy"
            ? `Rates refresh every 20s · No KYC up to KES ${formatFiat(MAX_BUY_FIAT_KES)}`
            : `Rates refresh every 20s · No KYC up to ${MAX_SELL_ASSET_USDT} USDT`}
        </p>
      </div>
    </div>
  );
}
