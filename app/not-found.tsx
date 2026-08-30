import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]">
        {/* same dark ledger header as the ramp widget, just quoting a joke rate */}
        <div className="grain flex items-center justify-between bg-[var(--color-moss-deep)] px-5 py-3 text-[var(--color-paper)]">
          <div className="flex items-baseline gap-2 font-mono text-xs tracking-wide">
            <span className="text-[var(--color-paper)]/60">1 PAGE</span>
            <span className="text-[var(--color-paper)]/40">=</span>
            <span className="text-sm font-medium">0.000000 USDT</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-paper)]/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ochre)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-ochre)]" />
            </span>
            rate: n/a
          </div>
        </div>

        <div className="p-6 text-center">
          <p className="font-mono text-5xl font-medium tracking-tight text-[var(--color-ink)]">
            404
          </p>
          <h1 className="font-display mt-2 text-xl font-medium text-[var(--color-ink)]">
            Lost in the mempool
          </h1>
          <p className="mt-2 text-sm text-[var(--color-ink)]/60">
            We sent an STK push to this URL and got no response. No page
            was found — and, unlike last time, no charge was made either.
          </p>

          <Link
            href="/"
            className="focus-ring mt-6 inline-block w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)]"
          >
            Back to Ramp
          </Link>
          <p className="mt-3 text-xs text-[var(--color-ink)]/40">
            Checked Celo, Polygon, and Base. Still nothing.
          </p>
        </div>
      </div>
    </main>
  );
}
