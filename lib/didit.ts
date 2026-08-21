import crypto from "node:crypto";

const VERIFICATION_BASE = "https://verification.didit.me/v3";

/**
 * Per-session config, NOT a secret and NOT an env var — this is Didit's
 * own guidance: a workflow_id identifies which checks run (ID + liveness +
 * face match here) and is passed in the create-session body every time,
 * not kept in .env. Change it in the console under Workflows, or via
 * GET /v3/workflows/, then update this constant.
 */
export const WORKFLOW_ID = "7a5f472a-f63e-426f-ae28-56fd526f92d8";

export interface DiditSession {
  session_id: string;
  session_token: string;
  url: string;
  status: string;
  vendor_data: string;
}

/**
 * Creates a hosted verification session server-side. The API key never
 * reaches the browser — this must only ever be called from a route
 * handler, never from a client component.
 */
export async function createDiditSession(
  vendorData: string,
  callbackUrl: string
): Promise<DiditSession> {
  const apiKey = process.env.DIDIT_API_KEY;
  if (!apiKey) {
    throw new Error(
      "DIDIT_API_KEY is not set. Add it to .env.local — see .env.example."
    );
  }

  const res = await fetch(`${VERIFICATION_BASE}/session/`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      workflow_id: WORKFLOW_ID,
      vendor_data: vendorData,
      callback: callbackUrl,
    }),
  });

  if (!res.ok) {
    // 403 here means a missing/invalid/revoked x-api-key — Didit's only
    // error shape for that is {"detail": "..."}, no machine-readable code.
    const detail = await res.text();
    throw new Error(`Didit session_create_failed (${res.status}): ${detail}`);
  }

  return res.json();
}

/**
 * Didit's recommended webhook signature: HMAC-SHA256 over a canonicalised
 * re-serialisation of the body (whole-number floats shortened to
 * integers, keys sorted recursively, then JSON.stringify with unescaped
 * Unicode), compared constant-time against X-Signature-V2. This
 * canonicalisation is Didit's documented approach, not a workaround —
 * there's no official SDK helper for it.
 */
function shortenFloats(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shortenFloats);
  if (v && typeof v === "object") {
    return Object.fromEntries(
      Object.entries(v as Record<string, unknown>).map(([k, x]) => [
        k,
        shortenFloats(x),
      ])
    );
  }
  if (typeof v === "number" && !Number.isInteger(v) && v % 1 === 0) {
    return Math.trunc(v);
  }
  return v;
}

function sortKeys(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === "object") {
    return Object.keys(v as object)
      .sort()
      .reduce<Record<string, unknown>>((acc, k) => {
        acc[k] = sortKeys((v as Record<string, unknown>)[k]);
        return acc;
      }, {});
  }
  return v;
}

/**
 * Verifies a webhook delivery. Returns the parsed body if the signature
 * and timestamp freshness both check out, or null if the delivery should
 * be rejected (bad signature, or older/newer than 300s — replay
 * protection).
 */
export function verifyDiditWebhook(
  rawBody: string,
  signatureHeader: string | null,
  timestampHeader: string | null
): Record<string, unknown> | null {
  const secret = process.env.DIDIT_WEBHOOK_SECRET;
  if (!secret || !signatureHeader || !timestampHeader) return null;

  const ts = Number(timestampHeader);
  if (!ts || Math.abs(Date.now() / 1000 - ts) > 300) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return null;
  }

  const canonical = JSON.stringify(sortKeys(shortenFloats(parsed)));
  const expected = crypto
    .createHmac("sha256", secret)
    .update(canonical, "utf8")
    .digest("hex");

  const sigBuf = Buffer.from(signatureHeader);
  const expectedBuf = Buffer.from(expected);
  if (
    sigBuf.length !== expectedBuf.length ||
    !crypto.timingSafeEqual(sigBuf, expectedBuf)
  ) {
    return null;
  }

  return parsed as Record<string, unknown>;
}
