import Link from "next/link";
import RampCard from "@/components/RampCard";
import { MIN_BUY_FIAT_KES } from "@/lib/limits";

const STEPS = [
  { n: "01", t: "Enter an amount", d: "See the exact USDT you'll get before you commit. The rate you see is the rate you pay." },
  { n: "02", t: "Connect or paste a wallet", d: "Use MetaMask, OKX, Binance, Trust or any WalletConnect wallet — or just paste an address." },
  { n: "03", t: "Pay with M-Pesa", d: "Approve the STK push on your phone. We confirm automatically and send your USDT." },
];

const FEATURES = [
  { t: "Multi-chain", d: "Celo, Polygon and Base — pick the network with the cheapest fees for you." },
  { t: "Verified payments", d: "Every M-Pesa payment is confirmed server-side before any USDT moves." },
  { t: "Live rates", d: "Rates refresh every 20 seconds from market data. No surprises at checkout." },
  { t: "Human-backed payouts", d: "Selling? A vetted agent receives your USDT and pays you out to M-Pesa." },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div className="float-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-moss)]/30 bg-[var(--color-moss)]/10 px-3 py-1 text-xs font-medium text-[var(--color-moss-deep)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-moss)]" />
            Live · M-Pesa ⇄ USDT
          </span>
          <h1 className="font-display mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Shillings in,
            <br />
            <span className="text-[var(--color-moss)]">USDT out.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-[var(--color-ink)]/60">
            Buy USDT with M-Pesa straight to your wallet, or sell USDT and get shillings in minutes. No exchange account needed.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="#ramp" className="focus-ring rounded-xl bg-[var(--color-moss)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-ink)] hover:brightness-110">
              Get started
            </Link>
            <Link href="/how-it-works" className="focus-ring rounded-xl border border-[var(--color-line)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)]/80 hover:bg-[var(--color-ink)]/5">
              How it works
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--color-line)] pt-6">
            {[["3", "networks"], ["20s", "rate refresh"], [`KES ${MIN_BUY_FIAT_KES}`, "minimum buy"]].map(([v, l]) => (
              <div key={l}>
                <dt className="font-mono text-xl font-medium text-[var(--color-ink)]">{v}</dt>
                <dd className="text-xs text-[var(--color-ink)]/45">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="ramp" className="float-in flex scroll-mt-24 justify-center lg:justify-end" style={{ animationDelay: "0.1s" }}>
          <RampCard />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-moss)]">How it works</p>
        <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight">Three steps. Two minutes.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="glow-card p-6">
              <span className="font-mono text-sm text-[var(--color-moss)]">{s.n}</span>
              <h3 className="font-display mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink)]/55">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.t} className="rounded-2xl border border-[var(--color-line)] p-5">
              <h3 className="font-display text-base font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink)]/55">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="glow-card flex flex-col items-start justify-between gap-5 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold">Questions before you start?</h2>
            <p className="mt-1 text-sm text-[var(--color-ink)]/55">Limits, networks, verification — it&apos;s all in the FAQ.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/faq" className="focus-ring rounded-xl border border-[var(--color-line)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-ink)]/5">Read the FAQ</Link>
            <Link href="/support" className="focus-ring rounded-xl bg-[var(--color-moss)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-ink)]">Contact support</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
