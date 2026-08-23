"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BuyOrder, Network } from "@/lib/types";
import { normalizeMsisdn } from "@/lib/phone";
import { formatFiat, formatAsset } from "@/lib/format";

type Stage = "confirm" | "waiting" | "paid" | "failed";

const POLL_INTERVAL_MS = 3000;

function truncate(addr: string): string {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

function buildReceiptText(order: BuyOrder | null, orderId: string | null, fiat: number, asset: number, network: string, wallet: string): string {
  const lines = [
    "Ramp — Payment Receipt",
    `Order ID: ${order?.id ?? orderId ?? "—"}`,
    `Paid: KES ${formatFiat(fiat)}`,
    `Received: ${formatAsset(asset)} USDT`,
    `Network: ${network}`,
    `Wallet: ${wallet}`,
  ];
  if (order?.mpesaReference) lines.push(`M-Pesa reference: ${order.mpesaReference}`);
  if (order?.payerName) lines.push(`Payer: ${order.payerName}`);
  lines.push(`Date: ${order ? new Date(order.createdAt).toLocaleString() : new Date().toLocaleString()}`);
  return lines.join("\n");
}

export default function BuyPayStep() {
  const router = useRouter();
  const params = useSearchParams();
  const network = (params.get("network") as Network) || "CELO";
  const fiat = Number(params.get("fiat") ?? "0");
  const asset = Number(params.get("asset") ?? "0");
  const wallet = params.get("wallet") ?? "";

  const [stage, setStage] = useState<Stage>("confirm");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paidOrder, setPaidOrder] = useState<BuyOrder | null>(null);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  async function handlePay() {
    const msisdn = normalizeMsisdn(phone);
    if (!msisdn) {
      setError("Enter a valid M-Pesa number, e.g. 0712345678");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email so we can send your payment receipt.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/buy/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asset: "USDT",
          network,
          assetAmount: asset,
          fiatAmount: fiat,
          mpesaNumber: phone,
          email: email.trim(),
          walletAddress: wallet,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Couldn't start the payment. Try again.");
        setSubmitting(false);
        return;
      }
      setOrderId(data.orderId);
      setStage("waiting");
    } catch {
      setError("Couldn't reach the server. Check your connection and retry.");
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (stage !== "waiting" || !orderId) return;
    let cancelled = false;
    async function poll() {
      try {
        const res = await fetch(`/api/buy/stk-push?id=${orderId}`, { cache: "no-store" });
        if (!res.ok) {
          // A request error is not proof that the M-Pesa charge failed.
          if (!cancelled) setTimeout(poll, POLL_INTERVAL_MS);
          return;
        }

        const order: BuyOrder = await res.json();
        if (cancelled) return;

        if (order.status === "paid") {
          setPaidOrder(order);
          setStage("paid");
          return;
        }
        if (order.status === "failed" || order.status === "expired") {
          setStage("failed");
          return;
        }

        if (!cancelled) setTimeout(poll, POLL_INTERVAL_MS);
      } catch {
        // Keep checking until KopoKopo itself returns a terminal status.
        if (!cancelled) setTimeout(poll, POLL_INTERVAL_MS);
      }
    }

    poll();
    return () => {
      cancelled = true;
    };
  }, [stage, orderId]);

  async function handleShareReceipt() {
    const text = buildReceiptText(paidOrder, orderId, fiat, asset, network, wallet);
    const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (nav.share) {
      try {
        await nav.share({ title: "Ramp payment receipt", text });
      } catch {
        // User cancelled the share sheet — not an error.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setShareFeedback("Copied to clipboard");
    } catch {
      setShareFeedback("Couldn't copy — select the text manually");
    } finally {
      setTimeout(() => setShareFeedback(null), 2500);
    }
  }

  function handlePrintReceipt() {
    window.print();
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50 print:hidden">
          <span>Step 3 of 3</span>
          <span className="font-mono">
            KES {formatFiat(fiat)} → {formatAsset(asset)} USDT
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)] print:border-0 print:bg-white print:p-0 print:shadow-none">
          {stage === "confirm" && (
            <>
              <h2 className="font-display text-lg font-medium">Confirm and pay</h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                Sending {formatAsset(asset)} USDT to{" "}
                <span className="font-mono">{truncate(wallet)}</span> on{" "}
                {network}.
              </p>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  M-Pesa number
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07XX XXX XXX"
                  inputMode="tel"
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 font-mono text-lg"
                />
              </label>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  Email (for your payment receipt)
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
                />
              </label>

              {error && (
                <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
                  {error}
                </p>
              )}

              <button
                onClick={handlePay}
                disabled={submitting}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
              >
                {submitting ? "Sending prompt…" : `Pay KES ${formatFiat(fiat)} with M-Pesa`}
              </button>

              <button
                onClick={() => router.push("/")}
                className="focus-ring mt-3 w-full text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
              >
                ← Start over
              </button>
            </>
          )}

          {stage === "waiting" && (
            <div className="text-center">
              <h2 className="font-display text-lg font-medium">
                Check your phone
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                Enter your M-Pesa PIN on the prompt to complete the payment.
                We&apos;ll confirm automatically once it goes through.
              </p>
              <div className="mx-auto mt-5 h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-moss)]" />
              <p className="mt-4 font-mono text-xs text-[var(--color-ink)]/40">
                Reference: {orderId}
              </p>
            </div>
          )}

          {stage === "paid" && (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)] print:hidden">
                ✓
              </div>
              <h2 className="font-display text-xl font-medium">Payment received</h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                {formatAsset(asset)} USDT is on its way to{" "}
                <span className="font-mono">{truncate(wallet)}</span>.
              </p>
              <p className="mt-1 text-xs text-[var(--color-ink)]/40">
                {email
                  ? "We've sent a receipt to your email."
                  : "Keep the reference below for support."}
              </p>

              <div className="mt-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-left font-mono text-xs text-[var(--color-ink)]/70 print:border-0 print:bg-white print:p-0">
                <div className="flex justify-between py-0.5">
                  <span>Order ID</span>
                  <span>{paidOrder?.id ?? orderId}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>Paid</span>
                  <span>KES {formatFiat(fiat)}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>Received</span>
                  <span>{formatAsset(asset)} USDT</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>Network</span>
                  <span>{network}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>Wallet</span>
                  <span>{truncate(wallet)}</span>
                </div>
                {paidOrder?.mpesaReference && (
                  <div className="flex justify-between py-0.5">
                    <span>M-Pesa ref</span>
                    <span>{paidOrder.mpesaReference}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 print:hidden">
                <button
                  onClick={handleShareReceipt}
                  className="focus-ring rounded-xl border border-[var(--color-line)] bg-white py-2.5 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-moss)]"
                >
                  Share receipt
                </button>
                <button
                  onClick={handlePrintReceipt}
                  className="focus-ring rounded-xl border border-[var(--color-line)] bg-white py-2.5 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-moss)]"
                >
                  Print to PDF
                </button>
              </div>

              {shareFeedback && (
                <p className="mt-2 text-xs text-[var(--color-moss-deep)] print:hidden">{shareFeedback}</p>
              )}

              <button
                onClick={() => router.push("/")}
                className="focus-ring mt-3 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)] print:hidden"
              >
                Back to ramp
              </button>
            </div>
          )}

          {stage === "failed" && (
            <div className="text-center">
              <h2 className="font-display text-lg font-medium">
                Payment didn&apos;t go through
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                The M-Pesa prompt may have timed out, been cancelled, or
                the order expired. No USDT was sent.
              </p>
              <button
                onClick={() => {
                  setStage("confirm");
                  setOrderId(null);
                }}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
