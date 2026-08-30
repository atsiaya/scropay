import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-6 text-center shadow-[0_1px_0_var(--color-line)]">
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-ink)]/40">
            404
          </p>
          <h1 className="font-display mt-2 text-xl font-medium text-[var(--color-ink)]">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-[var(--color-ink)]/60">
            That page doesn&apos;t exist, or the link may be out of date —
            an order reference or session link that&apos;s since expired,
            for instance.
          </p>
          <Link
            href="/"
            className="focus-ring mt-5 inline-block w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)]"
          >
            Back to Ramp
          </Link>
        </div>
      </div>
    </main>
  );
}
