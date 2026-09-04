"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import { SellOrder } from "@/lib/types";
import { formatFiat, formatAsset } from "@/lib/format";
import { formatMsisdn } from "@/lib/phone";

function truncate(addr: string): string {
  return `${addr.slice(0, 8)}…${addr.slice(-6)}`;
}

export default function SellDepositStep() {
  const router = useRouter();
  const params = useSearchParams();
  const orderId = params.get("orderId");

  const [order, setOrder] = useState<SellOrder | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [copied, setCopied] = useState(false);

  const loadOrder = useCallback(async () => {
    if (!orderId) return;
    try {
      const res = await fetch(`/api/orders?id=${orderId}`, { cache: "no-store" });
      if (!res.ok) {
        setLoadError("This order wasn't found — it may have expired.");
        return;
      }
      setOrder(await res.json());
    } catch {
      setLoadError("Couldn't load the order. Check your connection.");
    }
  }, [orderId]);

  useEffect(() => {
    loadOrder();
  }, [loadOrder]);

  useEffect(() => {
    if (!order) return;
    QRCode.toDataURL(order.depositAddress, { margin: 1, width: 220 })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(null));
  }, [order]);

  async function handleAlreadyPaid() {
    if (!order) return;
    setConfirming(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/confirm`, { method: "POST" });
      if (res.ok) setOrder(await res.json());
    } finally {
      setConfirming(false);
    }
  }

  function copyAddress() {
    if (!order) return;
    navigator.clipboard.writeText(order.depositAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  if (loadError) {
    return (
      <Shell step="Step 3 of 3">
        <p className="text-sm text-[#8a3b2b]">{loadError}</p>
        <button
          onClick={() => router.push("/")}
          className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
        >
          Start over
        </button>
      </Shell>
    );
  }

  if (!order) {
    return (
      <Shell step="Step 3 of 3">
        <p className="text-sm text-[var(--color-ink)]/50">Loading order…</p>
      </Shell>
    );
  }

  if (order.status === "expired") {
    return (
      <Shell step="Step 3 of 3">
        <p className="text-sm text-[#8a3b2b]">
          This order expired before a deposit was confirmed. Start a new
          one — amounts are locked in for 15 minutes at a time.
        </p>
        <button
          onClick={() => router.push("/")}
          className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
        >
          Start over
        </button>
      </Shell>
    );
  }

  if (order.status === "awaiting_verification" || order.status === "confirmed") {
    const done = order.status === "confirmed";
    return (
      <Shell step="Step 3 of 3">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
            ✓
          </div>
          <h2 className="font-display text-xl font-medium">
            {done ? "Payment sent" : "Verifying your transfer"}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-ink)]/60">
            {done
              ? `KES ${formatFiat(order.fiatAmount)} has been sent to ${formatMsisdn(order.mpesaNumber)}.`
              : `Once we see ${formatAsset(order.assetAmount)} USDT land, ${order.assignedAgentName ?? "we"} will send KES ${formatFiat(order.fiatAmount)} to ${formatMsisdn(order.mpesaNumber)}.`}
          </p>
          <p className="mt-4 font-mono text-xs text-[var(--color-ink)]/40">
            Reference: {order.id}
          </p>
        </div>
      </Shell>
    );
  }

  // pending_deposit
  return (
    <Shell step="Step 3 of 3">
      <h2 className="font-display text-lg font-medium">Send your USDT</h2>
      <p className="mt-1 text-sm text-[var(--color-ink)]/60">
        Send exactly{" "}
        <span className="font-mono font-medium text-[var(--color-ink)]">
          {formatAsset(order.assetAmount)} USDT
        </span>{" "}
        on {order.network} to the address below.
      </p>

      {order.assignedAgentName && (
        <div className="mt-3 rounded-xl border border-[var(--color-moss)]/30 bg-[var(--color-moss)]/5 px-3 py-2 text-sm text-[var(--color-moss-deep)]">
          Your payment will be processed by{" "}
          <span className="font-medium">{order.assignedAgentName}</span>.
        </div>
      )}

      <div className="mt-4 flex flex-col items-center">
        {qrDataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={qrDataUrl}
            alt="Deposit address QR code"
            className="rounded-xl border border-[var(--color-line)]"
            width={220}
            height={220}
          />
        ) : (
          <div className="flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-dashed border-[var(--color-line)] font-mono text-xs text-[var(--color-ink)]/40">
            Generating QR…
          </div>
        )}

        <button
          onClick={copyAddress}
          className="focus-ring mt-3 rounded-xl border border-[var(--color-line)] bg-white px-4 py-2 font-mono text-sm hover:border-[var(--color-moss)]"
        >
          {copied ? "Copied ✓" : truncate(order.depositAddress)}
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-[var(--color-ochre)]/30 bg-[var(--color-ochre)]/5 p-3 text-xs text-[var(--color-ink)]/70">
        Only send USDT on the {order.network} network. Sending from an
        exchange? Double-check it supports {order.network} withdrawals —
        funds sent on the wrong network can&apos;t be recovered.
      </div>

      <button
        onClick={handleAlreadyPaid}
        disabled={confirming}
        className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
      >
        {confirming ? "Confirming…" : "I have already paid"}
      </button>

      <p className="mt-3 text-center text-xs text-[var(--color-ink)]/40">
        Reference: {order.id} · Expires{" "}
        {new Date(order.expiresAt).toLocaleTimeString()}
      </p>
    </Shell>
  );
}

function Shell({ step, children }: { step: string; children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>{step}</span>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          {children}
        </div>
      </div>
    </main>
  );
}
