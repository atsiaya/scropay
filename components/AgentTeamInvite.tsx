"use client";

import { useState } from "react";

export default function AgentTeamInvite() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteStatus, setInviteStatus] = useState<string | null>(null);
  const [inviting, setInviting] = useState(false);

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
    <div className="max-w-md">
      <h1 className="font-display text-xl font-medium text-[var(--color-ink)]">Team</h1>
      <p className="mt-1 text-sm text-[var(--color-ink)]/60">
        Invite another agent — they&apos;ll get an email with a sign-in
        link, no password to set up.
      </p>

      <div className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
            Email
          </span>
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
  );
}
