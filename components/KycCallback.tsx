"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { KycRequest } from "@/lib/kyc";

const POLL_INTERVAL_MS = 2000;
const MAX_POLLS = 15; // ~30s — the webhook usually lands well before this

export default function KycCallback() {
  const router = useRouter();
  const params = useSearchParams();
  const requestId = params.get("rid");

  const [request, setRequest] = useState<KycRequest | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pollCount = useRef(0);

  useEffect(() => {
    if (!requestId) {
      // Validating a URL param on mount, not deriving from other state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("Missing verification reference.");
      return;
    }

    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(`/api/kyc?rid=${requestId}`, { cache: "no-store" });
        if (!res.ok) {
          if (!cancelled) setError("This verification link has expired.");
          return;
        }
        const data: KycRequest = await res.json();
        if (cancelled) return;
        setRequest(data);

        if (data.status === "approved") {
          const q = new URLSearchParams({
            direction: data.direction,
            fiat: String(data.fiat),
            asset: String(data.asset),
            network: data.network,
          });
          router.push(
            data.direction === "buy"
              ? `/connect?${q.toString()}`
              : `/sell/payout?${q.toString()}`
          );
          return;
        }

        if (data.status === "declined") return; // terminal — stop polling, show message

        pollCount.current += 1;
        if (pollCount.current < MAX_POLLS) {
          setTimeout(poll, POLL_INTERVAL_MS);
        }
      } catch {
        if (!cancelled) setError("Couldn't check verification status.");
      }
    }

    poll();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestId]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 text-center shadow-[0_1px_0_var(--color-line)]">
          {error && (
            <>
              <p className="text-sm text-[#8a3b2b]">{error}</p>
              <button
                onClick={() => router.push("/")}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Start over
              </button>
            </>
          )}

          {!error && (!request || request.status === "pending" || request.status === "in_review") && (
            <>
              <h2 className="font-display text-lg font-medium">
                {request?.status === "in_review"
                  ? "Under manual review"
                  : "Confirming your verification"}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                {request?.status === "in_review"
                  ? "This one needs a human look — we'll email you once it's done, usually within a few hours."
                  : "This only takes a moment once Didit finishes checking your ID."}
              </p>
              {request?.status !== "in_review" && (
                <div className="mx-auto mt-4 h-1.5 w-32 overflow-hidden rounded-full bg-[var(--color-line)]">
                  <div className="h-full w-1/3 animate-pulse bg-[var(--color-moss)]" />
                </div>
              )}
              {request?.status === "in_review" && (
                <button
                  onClick={() => router.push("/")}
                  className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
                >
                  Back to home
                </button>
              )}
            </>
          )}

          {!error && request?.status === "declined" && (
            <>
              <h2 className="font-display text-lg font-medium">
                We couldn&apos;t verify that ID
              </h2>
              <p className="mt-2 text-sm text-[var(--color-ink)]/60">
                Double-check the document you used and try again, or reach
                out to support if you think this is a mistake.
              </p>
              <button
                onClick={() => router.push("/")}
                className="focus-ring mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3.5 text-sm font-semibold text-[var(--color-paper)]"
              >
                Back to home
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
