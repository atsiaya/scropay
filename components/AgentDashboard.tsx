"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/client";

export default function AgentDashboard({
  email,
  agentId,
}: {
  email: string;
  agentId: string;
}) {
  const router = useRouter();
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteStatus, setInviteStatus] = useState<string | null>(null);
  const [inviting, setInviting] = useState(false);

  async function handleSignOut() {
    // Both matter: the cookie is what the server checks, the client SDK
    // state is what the browser's Firebase Auth instance still thinks
    // is true. Clearing only one leaves things inconsistent.
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

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-5 flex items-center justify-between text-sm text-[var(--color-ink)]/50">
          <span>Agent dashboard</span>
          <button onClick={handleSignOut} className="underline-offset-2 hover:underline">
            Sign out
          </button>
        </div>

        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <h2 className="font-display text-lg font-medium">Welcome, {email}</h2>
          <p className="mt-1 font-mono text-xs text-[var(--color-ink)]/40">
            Agent ID: {agentId}
          </p>
          <p className="mt-4 text-sm text-[var(--color-ink)]/60">
            This is a starting point, not a finished ops console — the
            natural next step is wiring the buy/sell order queues (
            <code>lib/buy-orders.ts</code>, <code>lib/orders.ts</code>)
            in here, so agents can action the &quot;check wallet&quot; /
            &quot;verify deposit&quot; emails directly instead of just
            reading them and working from the DB by hand.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          <h3 className="font-display text-base font-medium">Invite another agent</h3>
          <p className="mt-1 text-sm text-[var(--color-ink)]/60">
            They&apos;ll get an email with a sign-in link — no password
            to set up.
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
