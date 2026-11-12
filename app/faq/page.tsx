import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "FAQ" };

const FAQ = [
  ["Which networks do you support?", "Celo, Polygon and Base. Make sure the wallet address you provide matches the network you picked — sending on the wrong network can result in lost funds."],
  ["How long does a purchase take?", "Usually a few minutes after you approve the M-Pesa prompt. You'll see a confirmation on screen and receive an email receipt."],
  ["I entered my PIN but the payment failed. What now?", "If M-Pesa didn't deduct funds, you weren't charged — just try again. If you were charged and didn't receive USDT, contact support with your order reference."],
  ["Why am I asked to verify my identity?", "Orders above the no-verification limits require a quick ID check (government ID and a selfie) to meet regulatory expectations and keep the platform safe."],
  ["How do I sell USDT?", "Choose Sell, enter the amount and your M-Pesa number, then send USDT to the address shown. Tap “I have already paid” and we'll verify and pay you out."],
  ["Can I cancel an order?", "A buy order can't be reversed once M-Pesa has charged you. Unpaid orders expire automatically after 15 minutes."],
  ["What if I send to the wrong address or network?", "On-chain transfers are irreversible. Double-check the address, network and amount before sending."],
];

export default function Page() {
  return (
    <PageShell eyebrow="Help" title="Frequently asked questions" intro="Quick answers to the most common questions.">
      <div className="space-y-3">
        {FAQ.map(([q, a]) => (
          <details key={q} className="glow-card group p-5 open:bg-[var(--color-surface-2)]">
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[var(--color-ink)]">
              {q}
              <span className="text-[var(--color-moss)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-[var(--color-ink)]/60">{a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
