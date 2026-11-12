import type { Metadata } from "next";
import PageShell, { H2 } from "@/components/PageShell";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return (
    <PageShell eyebrow="Legal" title="Privacy policy" cta={false} intro="Last updated: November 2026. Template text — have it reviewed against the Kenya Data Protection Act, 2019.">
      <H2>What we collect</H2>
      <p>Email address, M-Pesa phone number, wallet address, transaction details, and — where verification is required — identity data processed by our verification provider.</p>
      <H2>How we use it</H2>
      <p>To process orders, confirm payments, send receipts, prevent fraud, and meet legal obligations.</p>
      <H2>Who we share it with</H2>
      <p>Service providers needed to operate the service: payments (Kopokopo / M-Pesa), identity verification (Didit), email delivery, and infrastructure hosting. We do not sell your data.</p>
      <H2>Retention &amp; your rights</H2>
      <p>We keep transaction records as long as required by law. You may request access, correction or deletion of your personal data by contacting support@safepal.co.ke.</p>
    </PageShell>
  );
}
