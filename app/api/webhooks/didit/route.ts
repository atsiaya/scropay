import { NextRequest, NextResponse } from "next/server";
import { verifyDiditWebhook } from "@/lib/didit";
import {
  applyDecisionBySessionId,
  wasEventProcessed,
  markEventProcessed,
  KycStatus,
} from "@/lib/kyc";

// Didit's literal status strings, case-sensitive. Only three map to a
// terminal-ish state we care about here; everything else is a no-op —
// see docs.didit.me/integration/verification-statuses for the full list
// (Not Started, In Progress, Awaiting User, Resubmitted, Abandoned,
// Expired, Kyc Expired also exist).
const STATUS_MAP: Record<string, KycStatus | undefined> = {
  Approved: "approved",
  Declined: "declined",
  "In Review": "in_review",
};

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const payload = verifyDiditWebhook(
    rawBody,
    req.headers.get("x-signature-v2"),
    req.headers.get("x-timestamp")
  );

  if (!payload) {
    return new NextResponse("bad signature or stale timestamp", { status: 401 });
  }

  const eventId = payload.event_id as string | undefined;
  if (eventId) {
    if (wasEventProcessed(eventId)) return new NextResponse("ok"); // dedupe
    markEventProcessed(eventId);
  }

  const sessionId = payload.session_id as string | undefined;
  const status = payload.status as string | undefined;
  const mapped = status ? STATUS_MAP[status] : undefined;

  if (sessionId && mapped) {
    applyDecisionBySessionId(sessionId, mapped);
  }
  // Not Started / In Progress / Awaiting User / Resubmitted / Abandoned /
  // Expired / Kyc Expired: no state change needed for this app's flow —
  // the user is either still mid-verification or needs to restart, and
  // the callback page's polling already treats "still pending" as such.

  // Always 2xx quickly — Didit retries on 5xx/404 (twice, ~1min then
  // ~4min) and this handler has nothing slow to defer.
  return new NextResponse("ok");
}
