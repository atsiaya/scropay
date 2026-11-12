import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-20">
      <div className="glow-card w-full max-w-md overflow-hidden">
        <div className="grain flex items-center justify-between bg-[var(--color-moss-deep)] px-5 py-3">
          <div className="flex items-baseline gap-2 font-mono text-xs tracking-wide">
            <span className="text-[var(--color-ink)]/60">1 PAGE</span>
            <span className="text-[var(--color-ink)]/40">=</span>
            <span className="text-sm font-medium">0.000000 USDT</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--color-ink)]/50">rate: n/a</span>
        </div>
        <div className="p-8 text-center">
          <p className="font-mono text-6xl font-medium tracking-tight text-[var(--color-moss)]">404</p>
          <h1 className="font-display mt-3 text-2xl font-semibold">Lost in the mempool</h1>
          <p className="mt-2 text-sm text-[var(--color-ink)]/60">
            We sent an STK push to this URL and got no response. No page was found — and, unlike last time, no charge was made either.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link href="/" className="focus-ring rounded-xl bg-[var(--color-moss)] py-3 text-sm font-semibold text-[var(--color-accent-ink)]">Back to Ramp</Link>
            <Link href="/support" className="focus-ring rounded-xl border border-[var(--color-line)] py-3 text-sm font-semibold hover:bg-[var(--color-ink)]/5">Get help</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
