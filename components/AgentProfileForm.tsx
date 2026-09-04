"use client";

import { useEffect, useState } from "react";
import { AgentProfile } from "@/lib/types";

const CELO_ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;

export default function AgentProfileForm() {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [celoAddress, setCeloAddress] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/agent/profile", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: AgentProfile) => {
        setFullName(data.fullName ?? "");
        setCeloAddress(data.celoAddress ?? "");
        setIdNumber(data.idNumber ?? "");
      })
      .catch(() => setError("Couldn't load your profile."))
      .finally(() => setLoading(false));
  }, []);

  async function handleSave() {
    if (!fullName.trim()) {
      setError("Enter your full name.");
      return;
    }
    if (!CELO_ADDRESS_RE.test(celoAddress)) {
      setError("Enter a valid Celo address (0x…, 42 characters).");
      return;
    }
    if (!idNumber.trim()) {
      setError("Enter your ID or passport number.");
      return;
    }
    setError(null);
    setSaving(true);
    try {
      const res = await fetch("/api/agent/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, celoAddress, idNumber }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Couldn't save your profile.");
        return;
      }
      setStatus("Saved.");
      setTimeout(() => setStatus(null), 2500);
    } catch {
      setError("Couldn't reach the server.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-[var(--color-ink)]/50">Loading…</p>;
  }

  return (
    <div className="max-w-md">
      <h1 className="font-display text-xl font-medium text-[var(--color-ink)]">Profile</h1>
      <p className="mt-1 text-sm text-[var(--color-ink)]/60">
        This Celo address is where customers send USDT while you&apos;re
        online, and your name is what they see as &quot;processed
        by&quot; — double-check both.
      </p>

      <div className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            Full name
          </span>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
            placeholder="As shown to customers"
          />
        </label>

        <label className="mt-3 block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            Celo address (receives USDT)
          </span>
          <input
            value={celoAddress}
            onChange={(e) => setCeloAddress(e.target.value)}
            className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 font-mono text-sm"
            placeholder="0x…"
          />
        </label>

        <label className="mt-3 block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            National ID or passport number
          </span>
          <input
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
          />
        </label>

        {error && (
          <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
            {error}
          </p>
        )}
        {status && <p className="mt-2 text-sm text-[var(--color-moss-deep)]">{status}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
        >
          {saving ? "Saving…" : "Save profile"}
        </button>
      </div>
    </div>
  );
}
