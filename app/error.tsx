"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-sm text-[var(--color-ochre)]">Something went wrong</p>
      <h1 className="font-display mt-2 text-3xl font-semibold">We hit a snag</h1>
      <p className="mt-2 max-w-sm text-sm text-[var(--color-ink)]/60">Your money is safe — no action was taken. Try again, or head back home.</p>
      <div className="mt-6 flex gap-3">
        <button onClick={reset} className="focus-ring rounded-xl bg-[var(--color-moss)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-ink)]">Try again</button>
        <Link href="/" className="focus-ring rounded-xl border border-[var(--color-line)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-ink)]/5">Home</Link>
      </div>
    </main>
  );
}
