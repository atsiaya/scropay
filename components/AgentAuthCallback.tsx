"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/client";

const PENDING_EMAIL_KEY = "agentSignInEmail";

type Status = "working" | "need-email" | "error";

export default function AgentAuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("working");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function complete(emailToUse: string) {
    setSubmitting(true);
    setError(null);
    try {
      const auth = getFirebaseAuth();
      const credential = await signInWithEmailLink(auth, emailToUse, window.location.href);
      window.localStorage.removeItem(PENDING_EMAIL_KEY);

      const idToken = await credential.user.getIdToken();
      const res = await fetch("/api/agent/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "This account isn't an invited agent.");
        setStatus("error");
        setSubmitting(false);
        return;
      }

      router.push("/agent/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "That sign-in link is invalid or has expired."
      );
      setStatus("error");
      setSubmitting(false);
    }
  }

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      setError("This isn't a valid sign-in link.");
      setStatus("error");
      return;
    }

    const stored = window.localStorage.getItem(PENDING_EMAIL_KEY);
    if (stored) {
      complete(stored);
    } else {
      // Opened on a different device/browser than the one that
      // requested the link — Firebase's own flow doesn't carry the
      // email in the URL, so it has to be confirmed again here.
      setStatus("need-email");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 text-center shadow-[0_1px_0_var(--color-line)]">
          {status === "working" && (
            <>
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-moss)]" />
              <p className="mt-4 text-sm text-[var(--color-ink)]/60">Signing you in…</p>
            </>
          )}

          {status === "need-email" && (
            <>
              <h2 className="font-display text-lg font-medium">Confirm your email</h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                This link was opened on a different device than the one
                that requested it — enter your email to confirm it&apos;s
                you.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="focus-ring mt-4 w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm"
              />
              {error && (
                <p className="mt-2 text-sm text-[#8a3b2b]" role="alert">
                  {error}
                </p>
              )}
              <button
                onClick={() => complete(email.trim())}
                disabled={submitting || !email.trim()}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)] disabled:opacity-40"
              >
                {submitting ? "Confirming…" : "Continue"}
              </button>
            </>
          )}

          {status === "error" && (
            <>
              <h2 className="font-display text-lg font-medium">Couldn&apos;t sign you in</h2>
              <p className="mt-2 text-sm text-[#8a3b2b]">{error}</p>
              <button
                onClick={() => router.push("/agent/sign-in")}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-[var(--color-paper)]"
              >
                Back to sign-in
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
