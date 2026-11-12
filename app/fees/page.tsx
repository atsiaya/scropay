import type { Metadata } from "next";
import PageShell, { H2 } from "@/components/PageShell";
import { MIN_BUY_FIAT_KES, MAX_BUY_FIAT_KES, MIN_SELL_ASSET_USDT, MAX_SELL_ASSET_USDT } from "@/lib/limits";

export const metadata: Metadata = { title: "Fees & limits" };

const ROWS = [
  ["Buy USDT (no verification)", `KES ${MIN_BUY_FIAT_KES} – KES ${MAX_BUY_FIAT_KES} per order`],
  ["Sell USDT (no verification)", `${MIN_SELL_ASSET_USDT} – ${MAX_SELL_ASSET_USDT} USDT per order`],
  ["Above these limits", "Complete ID verification (government ID + selfie)"],
  ["Payment method", "M-Pesa"],
  ["Networks", "Celo, Polygon, Base"],
  ["Rate refresh", "Every 20 seconds"],
];

export default function Page() {
  return (
    <PageShell eyebrow="Pricing" title="Fees & limits" intro="One price, shown up front. The amount you see at checkout is the amount you pay or receive.">
      <div className="glow-card divide-y divide-[var(--color-line)] overflow-hidden">
        {ROWS.map(([k, v]) => (
          <div key={k} className="flex flex-col justify-between gap-1 px-5 py-4 sm:flex-row sm:items-center">
            <span className="text-[var(--color-ink)]/60">{k}</span>
            <span className="font-mono text-sm text-[var(--color-ink)]">{v}</span>
          </div>
        ))}
      </div>
      <H2>Good to know</H2>
      <p>Network (gas) fees on the blockchain are paid by us on purchases. When you sell, send from a wallet that holds enough of the network&apos;s gas token to cover your own transfer.</p>
      <p>Limits may change as we grow. Verified users can transact above the limits shown here.</p>
    </PageShell>
  );
}
