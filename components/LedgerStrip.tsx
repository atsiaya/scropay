"use client";

import { useEffect, useState } from "react";
import { RampDirection, RateQuote } from "@/lib/types";
import { timeLeft } from "@/lib/format";

export default function LedgerStrip({
  quote,
  direction,
}: {
  quote: RateQuote | null;
  direction: RampDirection;
}) {
  const [secondsLeft, setSecondsLeft] = useState(20);
  const displayRate = quote
    ? direction === "buy"
      ? quote.buyRate
      : quote.sellRate
    : null;

  useEffect(() => {
    if (!quote) return;
    const id = setInterval(() => {
      setSecondsLeft(timeLeft(quote.updatedAt, quote.ttlSeconds));
    }, 1000);
    return () => clearInterval(id);
  }, [quote]);

  return (
    <div className="grain flex items-center justify-between rounded-t-2xl bg-[var(--color-moss-deep)] px-5 py-3 text-[var(--color-paper)]">
      <div className="flex items-baseline gap-2 font-mono text-xs tracking-wide">
        <span className="text-[var(--color-paper)]/60">1 USDT</span>
        <span className="text-[var(--color-paper)]/40">=</span>
        <span key={displayRate} className="rate-refresh text-sm font-medium">
          {displayRate ? `KES ${displayRate.toFixed(2)}` : "—"}
        </span>
        {quote?.source === "fallback" && (
          <span
            className="text-[var(--color-ochre)]/80"
            title="Live price feed unavailable — showing the last known rate"
          >
            ●
          </span>
        )}
      </div>
      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-paper)]/50">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ochre)] opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-ochre)]" />
        </span>
        next tick {secondsLeft}s
      </div>
    </div>
  );
}
