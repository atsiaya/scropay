"use client";

import { useEffect, useState } from "react";
import { SellOrder } from "@/lib/types";
import { formatFiat, formatAsset } from "@/lib/format";

export default function AgentHistory() {
  const [orders, setOrders] = useState<SellOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/agent/orders", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setOrders(data.orders ?? []))
      .catch(() => setError("Couldn't load your order history."))
      .finally(() => setLoading(false));
  }, []);

  // /api/agent/orders already returns up to 50 orders, most recent
  // first — filtering client-side here instead of adding a second
  // backend endpoint just for a different status filter on the same
  // underlying query.
  const closed = orders.filter((o) => o.status === "confirmed" || o.status === "expired");

  return (
    <div>
      <h1 className="font-display text-xl font-medium text-[var(--color-ink)]">History</h1>
      <p className="mt-1 text-sm text-[var(--color-ink)]/60">
        Your last {orders.length > 0 ? orders.length : ""} orders,
        completed or expired.
      </p>

      {error && (
        <p className="mt-3 text-sm text-[#8a3b2b]" role="alert">
          {error}
        </p>
      )}

      {loading ? (
        <p className="mt-3 text-sm text-[var(--color-ink)]/50">Loading…</p>
      ) : closed.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-[var(--color-line)] bg-white/50 p-8 text-center">
          <p className="text-sm text-[var(--color-ink)]/50">Nothing here yet.</p>
        </div>
      ) : (
        <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/70 shadow-[0_1px_0_var(--color-line)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)] text-xs uppercase tracking-wide text-[var(--color-ink)]/50">
                <th className="px-4 py-2.5 font-medium">Order</th>
                <th className="px-4 py-2.5 font-medium">Amount</th>
                <th className="px-4 py-2.5 font-medium">M-Pesa</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {closed.map((o) => (
                <tr key={o.id} className="border-b border-[var(--color-line)] last:border-0">
                  <td className="px-4 py-2.5 font-mono text-xs text-[var(--color-ink)]/50">
                    {o.id}
                  </td>
                  <td className="px-4 py-2.5 font-mono">
                    {formatAsset(o.assetAmount)} {o.asset} / KES {formatFiat(o.fiatAmount)}
                  </td>
                  <td className="px-4 py-2.5">{o.mpesaNumber}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        o.status === "confirmed"
                          ? "bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]"
                          : "bg-[var(--color-ink)]/5 text-[var(--color-ink)]/50"
                      }`}
                    >
                      {o.status === "confirmed" ? "Paid" : "Expired"}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--color-ink)]/50">
                    {new Date(o.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
