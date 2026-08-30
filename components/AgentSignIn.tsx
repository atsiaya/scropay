"use client";

import { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/client";

const PENDING_EMAIL_KEY = "agentSignInEmail";

export default function AgentSignIn() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit() {
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);

    try {
      // Firebase's client SDK has no equivalent of "only sign in
      // existing users" — sendSignInLinkToEmail will happily complete
      // for any address. This check is what actually restricts sign-in
      // to already-invited agents; it deliberately doesn't distinguish
      // "no such account" from "account exists but isn't an agent" in
      // its response, so this form can't be used to enumerate emails.
      const checkRes = await fetch(
        `/api/agent/check-invited?email=${encodeURIComponent(email.trim())}`
      );
      const checkData = await checkRes.json();
      if (!checkData.invited) {
        setError("This email hasn't been invited as an agent.");
        setSubmitting(false);
        return;
      }

      const auth = getFirebaseAuth();
      await sendSignInLinkToEmail(auth, email.trim(), {
        url: `${window.location.origin}/agent/auth/callback`,
        handleCodeInApp: true,
      });
      // The sign-in link carries only an action code, not the email
      // itself — Firebase's own documented pattern is to stash it
      // locally and read it back on the callback page. If it's opened
      // on a different device, that page asks for the email again.
      window.localStorage.setItem(PENDING_EMAIL_KEY, email.trim());
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send the sign-in link.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 shadow-[0_1px_0_var(--color-line)]">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]">
                ✓
              </div>
              <h2 className="font-display text-lg font-medium">Check your email</h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                We sent a sign-in link to {email}. It expires shortly, so
                use it soon — request a new one below if it does.
              </p>
              <button
                onClick={() => setSent(false)}
                className="focus-ring mt-4 text-sm text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-display text-lg font-medium">Agent sign-in</h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                Enter the email your invite was sent to. We&apos;ll email
                you a one-time sign-in link — no password needed.
              </p>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-ink)]/50">
                  Email
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
                onClick={handleSubmit}
                disabled={submitting}
                className="focus-ring mt-5 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
              >
                {submitting ? "Sending…" : "Send magic link"}
              </button>

              <p className="mt-3 text-center text-xs text-[var(--color-ink)]/40">
                Only invited agents can sign in here.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
