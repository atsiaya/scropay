import Link from "next/link";

export default function PageShell({
  eyebrow, title, intro, children, cta = true,
}: { eyebrow?: string; title: string; intro?: string; children: React.ReactNode; cta?: boolean }) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[var(--color-ink)]/40">
        <Link href="/" className="hover:text-[var(--color-moss)]">Home</Link> <span>/</span> <span className="text-[var(--color-ink)]/60">{title}</span>
      </nav>
      {eyebrow && <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-moss)]">{eyebrow}</p>}
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 max-w-2xl text-base text-[var(--color-ink)]/60">{intro}</p>}
      <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-[var(--color-ink)]/75">{children}</div>
      {cta && (
        <div className="glow-card mt-12 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold">Ready to move some USDT?</p>
            <p className="text-sm text-[var(--color-ink)]/55">Takes about two minutes with M-Pesa.</p>
          </div>
          <Link href="/#ramp" className="focus-ring rounded-xl bg-[var(--color-moss)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-ink)]">Start now</Link>
        </div>
      )}
    </main>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display pt-4 text-xl font-semibold text-[var(--color-ink)]">{children}</h2>;
}
