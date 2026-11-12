import type { Metadata } from "next";
import PageShell, { H2 } from "@/components/PageShell";

export const metadata: Metadata = { title: "Terms of service" };

export default function Page() {
  return (
    <PageShell eyebrow="Legal" title="Terms of service" cta={false} intro="Last updated: November 2026. Template text — have it reviewed by counsel before relying on it.">
      <H2>1. The service</H2>
      <p>Ramp lets you buy USDT using M-Pesa and sell USDT for M-Pesa. Availability, limits and supported networks may change at any time.</p>
      <H2>2. Eligibility &amp; verification</H2>
      <p>You must be 18+ and legally able to transact in your jurisdiction. We may require identity verification and may refuse or reverse orders where required by law.</p>
      <H2>3. Orders &amp; rates</H2>
      <p>The rate shown at checkout applies to your order. Crypto assets are volatile; you accept the risk of price movements between orders.</p>
      <H2>4. Your responsibilities</H2>
      <p>You are responsible for providing a correct wallet address and network. Blockchain transfers are irreversible and we cannot recover funds sent to a wrong address.</p>
      <H2>5. Prohibited use</H2>
      <p>No fraud, money laundering, sanctions evasion or use of funds from illegal activity. We may suspend accounts and report suspicious activity.</p>
      <H2>6. Liability</H2>
      <p>To the maximum extent permitted by law, our liability is limited to the value of the affected order. The service is provided “as is”.</p>
      <H2>7. Contact</H2>
      <p>Questions about these terms: support@safepal.co.ke.</p>
    </PageShell>
  );
}
