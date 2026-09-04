"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { AgentProfile, SellOrder } from "@/lib/types";
import { formatFiat, formatAsset } from "@/lib/format";

const CELO_ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;

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

export default function AgentDashboard({
  email,
  agentId,
}: {
  email: string;
  agentId: string;
}) {
  const router = useRouter();

  // profile
  const [profile, setProfile] = useState<AgentProfile | null>(null);
  const [fullName, setFullName] = useState("");
  const [celoAddress, setCeloAddress] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileStatus, setProfileStatus] = useState<string | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);

  // online toggle
  const [togglingOnline, setTogglingOnline] = useState(false);
  const [onlineError, setOnlineError] = useState<string | null>(null);

  // orders
  const [orders, setOrders] = useState<SellOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [markingPaid, setMarkingPaid] = useState<string | null>(null);

  // invite
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteStatus, setInviteStatus] = useState<string | null>(null);
  const [inviting, setInviting] = useState(false);

  const loadProfile = useCallback(async () => {
    try {
      const res = await fetch("/api/agent/profile", { cache: "no-store" });
      const data: AgentProfile = await res.json();
      setProfile(data);
      setFullName(data.fullName ?? "");
      setCeloAddress(data.celoAddress ?? "");
      setIdNumber(data.idNumber ?? "");
    } catch {
      setProfileError("Couldn't load your profile.");
    }
  }, []);

  const loadOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/agent/orders", { cache: "no-store" });
      const data = await res.json();
      setOrders(data.orders ?? []);
    } catch {
      // leave existing list in place — a transient failure here
      // shouldn't clear a queue the agent is actively working from
    } finally {
      setOrdersLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
    loadOrders();
    const id = setInterval(loadOrders, 20000); // poll for newly-assigned orders
    return () => clearInterval(id);
  }, [loadProfile, loadOrders]);

  async function handleSaveProfile() {
    if (!fullName.trim()) {
      setProfileError("Enter your full name.");
      return;
    }
    if (!CELO_ADDRESS_RE.test(celoAddress)) {
      setProfileError("Enter a valid Celo address (0x…, 42 characters).");
      return;
    }
    if (!idNumber.trim()) {
      setProfileError("Enter your ID or passport number.");
      return;
    }
    setProfileError(null);
    setSavingProfile(true);
    try {
      const res = await fetch("/api/agent/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, celoAddress, idNumber }),
      });
      const data = await res.json();
      if (!res.ok) {
        setProfileError(data.error ?? "Couldn't save your profile.");
        return;
      }
      setProfileStatus("Profile saved.");
      setTimeout(() => setProfileStatus(null), 2500);
      loadProfile();
    } catch {
      setProfileError("Couldn't reach the server.");
    } finally {
      setSavingProfile(false);
    }
  }

  async function handleToggleOnline() {
    if (!profile) return;
    setOnlineError(null);
    setTogglingOnline(true);
    try {
      const res = await fetch("/api/agent/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ online: !profile.online }),
      });
      const data = await res.json();
      if (!res.ok) {
        setOnlineError(data.error ?? "Couldn't update your status.");
        return;
      }
      setProfile((p) => (p ? { ...p, online: data.online } : p));
    } catch {
      setOnlineError("Couldn't reach the server.");
    } finally {
      setTogglingOnline(false);
    }
  }

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

  async function handleSignOut() {
    await fetch("/api/agent/session", { method: "DELETE" });
    await signOut(getFirebaseAuth());
    router.push("/agent/sign-in");
  }

  async function handleInvite() {
    if (!inviteEmail.trim() || !inviteEmail.includes("@")) {
      setInviteStatus("Enter a valid email.");
      return;
    }
    setInviting(true);
    setInviteStatus(null);
    try {
      const res = await fetch("/api/agent/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inviteEmail.trim() }),
      });
      const data = await res.json();
      setInviteStatus(
        res.ok ? `Invite sent to ${inviteEmail}.` : data.error ?? "Couldn't send invite."
      );
      if (res.ok) setInviteEmail("");
    } catch {
      setInviteStatus("Couldn't reach the server.");
    } finally {
      setInviting(false);
    }
  }

  const profileComplete = Boolean(profile?.fullName && profile?.celoAddress);
  const actionableOrders = orders.filter((o) => o.status === "awaiting_verification");

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Agent dashboard</span>
          <button onClick={handleSignOut} className="underline-offset-2 hover:underline">
            Sign out
          </button>
        </div>

        {/* status banner */}
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_1px_0_var(--color-line)]">
          <div>
            <p className="font-display text-base font-medium">{email}</p>
            <p className="mt-0.5 font-mono text-xs text-[var(--color-ink)]/40">{agentId}</p>
          </div>
          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                profile?.online
                  ? "bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]"
                  : "bg-[var(--color-ink)]/5 text-[var(--color-ink)]/50"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${profile?.online ? "bg-[var(--color-moss)]" : "bg-[var(--color-ink)]/30"}`}
              />
              {profile?.online ? "Online" : "Offline"}
            </span>
            <button
              onClick={handleToggleOnline}
              disabled={togglingOnline || !profile}
              className="focus-ring mt-2 block w-full rounded-lg bg-[var(--color-ink)] px-3 py-1.5 text-xs font-semibold text-[var(--color-paper)] disabled:opacity-40"
            >
              {togglingOnline ? "…" : profile?.online ? "Go offline" : "Go online"}
            </button>
          </div>
        </div>
        {onlineError && (
          <p className="mb-4 text-sm text-[#8a3b2b]" role="alert">
            {onlineError}
          </p>
        )}
        {!profileComplete && (
          <p className="mb-4 text-xs text-[var(--color-ink)]/50">
            Complete your profile below before you can go online.
          </p>
        )}

        {/* profile */}
        <div className="mb-4 rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <h3 className="font-display text-base font-medium">Your profile</h3>
          <p className="mt-1 text-sm text-[var(--color-ink)]/60">
            This Celo address is where customers send USDT while you&apos;re
            online — double-check it.
          </p>

          <label className="mt-3 block">
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

          {profileError && (
            <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
              {profileError}
            </p>
          )}
          {profileStatus && (
            <p className="mt-2 text-sm text-[var(--color-moss-deep)]">{profileStatus}</p>
          )}

          <button
            onClick={handleSaveProfile}
            disabled={savingProfile}
            className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
          >
            {savingProfile ? "Saving…" : "Save profile"}
          </button>
        </div>

        {/* orders queue */}
        <div className="mb-4 rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-medium">Your orders</h3>
            {actionableOrders.length > 0 && (
              <span className="rounded-full bg-[var(--color-ochre)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--color-ink)]/70">
                {actionableOrders.length} need action
              </span>
            )}
          </div>

          {ordersLoading ? (
            <p className="mt-3 text-sm text-[var(--color-ink)]/50">Loading…</p>
          ) : orders.length === 0 ? (
            <p className="mt-3 text-sm text-[var(--color-ink)]/50">
              No orders assigned yet — go online to start receiving them.
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {orders.map((o) => (
                <li
                  key={o.id}
                  className="rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] p-3"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono font-medium">
                      {formatAsset(o.assetAmount)} {o.asset} → KES {formatFiat(o.fiatAmount)}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-ink)]/40">{o.id}</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-ink)]/60">
                    {statusLabel(o.status)}
                  </p>
                  {o.status === "awaiting_verification" && (
                    <button
                      onClick={() => handleMarkPaid(o.id)}
                      disabled={markingPaid === o.id}
                      className="focus-ring mt-2 w-full rounded-lg bg-[var(--color-ink)] py-2 text-xs font-semibold text-[var(--color-paper)] disabled:opacity-40"
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

        {/* invite */}
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <h3 className="font-display text-base font-medium">Invite another agent</h3>
          <p className="mt-1 text-sm text-[var(--color-ink)]/60">
            They&apos;ll get an email with a sign-in link — no password to
            set up.
          </p>

          <label className="mt-3 block">
            <input
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="newagent@example.com"
              className="focus-ring w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
            />
          </label>

          {inviteStatus && (
            <p className="mt-2 text-sm text-[var(--color-ink)]/70">{inviteStatus}</p>
          )}

          <button
            onClick={handleInvite}
            disabled={inviting}
            className="focus-ring mt-3 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
          >
            {inviting ? "Sending invite…" : "Send invite"}
          </button>
        </div>
      </div>
    </main>
  );
}
