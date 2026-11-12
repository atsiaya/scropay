import type { Metadata } from "next";
import PageShell, { H2 } from "@/components/PageShell";

export const metadata: Metadata = { title: "How it works" };

export default function Page() {
  return (
    <PageShell eyebrow="Guide" title="How it works" intro="Buying and selling USDT takes a few taps. Here's exactly what happens at each step.">
      <H2>Buying USDT</H2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Enter how much KES you want to spend. You&apos;ll see the USDT you&apos;ll receive.</li>
        <li>Choose a network (Celo, Polygon or Base) and connect your wallet or paste your address.</li>
        <li>Verify your email. If you&apos;re above the no-verification limit you&apos;ll complete a quick ID check.</li>
        <li>Enter your M-Pesa number and approve the STK push on your phone.</li>
        <li>We confirm the payment with M-Pesa and send USDT to your wallet. You get a receipt by email.</li>
      </ol>
      <H2>Selling USDT</H2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Enter the USDT amount you want to sell and the M-Pesa number to be paid.</li>
        <li>You&apos;ll see a deposit address and QR code for your chosen network, plus the agent who will process your payout.</li>
        <li>Send the exact amount from your wallet, then tap <strong className="text-[var(--color-ink)]">I have already paid</strong>.</li>
        <li>The agent verifies the deposit and sends KES to your M-Pesa. You&apos;ll be notified by email.</li>
      </ol>
      <H2>Security</H2>
      <p>Amounts and rates are always calculated on our servers, never trusted from your browser. Payments are verified directly with M-Pesa before any crypto is released.</p>
    </PageShell>
  );
}
