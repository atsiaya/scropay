"use client";

import { useEffect, useState, useCallback } from "react";
import { SellOrder } from "@/lib/types";
import { formatFiat, formatAsset } from "@/lib/format";

function statusLabel(status: SellOrder["status"]): string {
  switch (status) {
    case "pending_deposit":
      return "Waiting for customer deposit";
    case "awaiting_verification":
      return "Customer claims paid — verify & pay out";
    case "confirmed":
      return "Paid out";
    case "expired":
      return "Expired";
  }
}

export default function AgentOrdersQueue() {
  const [orders, setOrders] = useState<SellOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [markingPaid, setMarkingPaid] = useState<string | null>(null);

  const loadOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/agent/orders", { cache: "no-store" });
      if (!res.ok) {
        setError("Couldn't load your orders.");
        return;
      }
      const data = await res.json();
      setOrders(data.orders ?? []);
      setError(null);
    } catch {
      setError("Couldn't reach the server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrders();
    const id = setInterval(loadOrders, 15000); // pick up newly-assigned orders
    return () => clearInterval(id);
  }, [loadOrders]);

  async function handleMarkPaid(orderId: string) {
    setMarkingPaid(orderId);
    try {
      const res = await fetch(`/api/agent/orders/${orderId}/mark-paid`, { method: "POST" });
      if (res.ok) {
        const updated: SellOrder = await res.json();
        setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
      }
    } finally {
      setMarkingPaid(null);
    }
  }

  const active = orders.filter((o) => o.status === "pending_deposit" || o.status === "awaiting_verification");
  const actionable = active.filter((o) => o.status === "awaiting_verification");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-display text-xl font-medium text-[var(--color-ink)]">Orders</h1>
        {actionable.length > 0 && (
          <span className="rounded-full bg-[var(--color-ochre)]/15 px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]/70">
            {actionable.length} need action
          </span>
        )}
      </div>

      {error && (
        <p className="mb-3 text-sm text-[#8a3b2b]" role="alert">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-sm text-[var(--color-ink)]/50">Loading…</p>
      ) : active.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-white/50 p-8 text-center">
          <p className="text-sm text-[var(--color-ink)]/50">
            No active orders. Go online from the nav above to start
            receiving them.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {active.map((o) => (
            <li
              key={o.id}
              className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_1px_0_var(--color-line)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-[var(--color-ink)]">
                  {formatAsset(o.assetAmount)} {o.asset} → KES {formatFiat(o.fiatAmount)}
                </span>
                <span className="font-mono text-xs text-[var(--color-ink)]/40">{o.id}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">{statusLabel(o.status)}</p>
              <p className="mt-1 text-xs text-[var(--color-ink)]/40">
                Deposit: {o.depositAddress} on {o.network}
              </p>
              {o.status === "awaiting_verification" && (
                <button
                  onClick={() => handleMarkPaid(o.id)}
                  disabled={markingPaid === o.id}
                  className="focus-ring mt-3 w-full rounded-xl bg-[var(--color-ink)] py-2.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
                >
                  {markingPaid === o.id
                    ? "Marking…"
                    : `Mark as paid — sent KES ${formatFiat(o.fiatAmount)} to ${o.mpesaNumber}`}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
