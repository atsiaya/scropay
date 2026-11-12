import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Support" };

export default function Page() {
  return (
    <PageShell eyebrow="Help" title="Support" intro="Something not right? Send us the details and we'll sort it out." cta={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="glow-card p-6">
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Email us</h2>
          <p className="mt-1 text-sm text-[var(--color-ink)]/55">Include your order reference (e.g. buy_… or ord_…) and the M-Pesa number used.</p>
          <a href="mailto:support@safepal.co.ke" className="focus-ring mt-4 inline-block font-mono text-sm text-[var(--color-moss)]">support@safepal.co.ke</a>
        </div>
        <div className="glow-card p-6">
          <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">Check the FAQ</h2>
          <p className="mt-1 text-sm text-[var(--color-ink)]/55">Most questions about limits, networks and failed payments are answered there.</p>
          <Link href="/faq" className="focus-ring mt-4 inline-block text-sm font-medium text-[var(--color-moss)]">Read the FAQ →</Link>
        </div>
      </div>
      <p className="text-sm text-[var(--color-ink)]/50">We never ask for your M-Pesa PIN, wallet seed phrase or private keys. Anyone who does is not us.</p>
    </PageShell>
  );
}
