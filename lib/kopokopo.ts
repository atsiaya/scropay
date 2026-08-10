/**
 * Kopokopo's docs (developers.kopokopo.com, api-docs.kopokopo.com) are
 * considerably sparser than Didit's, and several official examples mix
 * /v1 and /v2 paths and don't show a fully consistent response schema.
 * Given that, this client is deliberately conservative: it never trusts
 * a status string from anywhere except a fresh, authenticated GET to the
 * exact resource URL Kopokopo handed back when we created the payment —
 * see "Verify against your dashboard" comments below before relying on
 * this in production.
 */

const BASE_URL = process.env.KOPOKOPO_BASE_URL || "https://api.kopokopo.com";

interface TokenCache {
  token: string;
  expiresAt: number;
}
let cachedToken: TokenCache | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.token;
  }

  const clientId = process.env.KOPOKOPO_CLIENT_ID;
  const clientSecret = process.env.KOPOKOPO_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error(
      "KOPOKOPO_CLIENT_ID / KOPOKOPO_CLIENT_SECRET are not set. Add them to .env.local."
    );
  }

  const res = await fetch(`${BASE_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error(`Kopokopo oauth_failed (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    // Access tokens live 3600s; refresh a little early.
    expiresAt: Date.now() + (Number(data.expires_in ?? 3600) - 60) * 1000,
  };
  return cachedToken.token;
}

export interface StkPushResult {
  /** the full resource URL from the Location header — poll this for status */
  resourceUrl: string;
}

export async function initiateStkPush(input: {
  phoneNumber: string; // E.164, e.g. +2547XXXXXXXX
  amountKes: number;
  reference: string; // our order id, goes in metadata for cross-referencing
  callbackUrl: string;
  email?: string;
}): Promise<StkPushResult> {
  const tillNumber = process.env.KOPOKOPO_TILL_NUMBER;
  if (!tillNumber) {
    throw new Error("KOPOKOPO_TILL_NUMBER is not set. Add it to .env.local.");
  }

  const accessToken = await getAccessToken();

  // Endpoint per Kopokopo's own worked example (developers.kopokopo.com/
  // guides/receive-money/mpesa-stk.html); some SDK docs reference /v1
  // instead of /v2 for the same operation — if this 404s against your
  // account, check your Kopokopo dashboard's API version notice first.
  const res = await fetch(`${BASE_URL}/api/v2/incoming_payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      payment_channel: "M-PESA STK Push",
      till_number: tillNumber,
      subscriber: {
        first_name: "Ramp",
        last_name: "Customer",
        phone_number: input.phoneNumber,
        ...(input.email ? { email: input.email } : {}),
      },
      amount: { currency: "KES", value: input.amountKes },
      metadata: { reference: input.reference },
      _links: { callback_url: input.callbackUrl },
    }),
  });

  if (res.status !== 201) {
    throw new Error(`Kopokopo stk_push_failed (${res.status}): ${await res.text()}`);
  }

  const resourceUrl = res.headers.get("location");
  if (!resourceUrl) {
    throw new Error("Kopokopo response had no Location header to poll for status.");
  }

  return { resourceUrl };
}

export type KopokopoPaymentStatus = "pending" | "success" | "failed";

/**
 * Re-fetches the payment resource directly — this, not the webhook body,
 * is the source of truth. Field names below (data.attributes.status) are
 * the commonly-documented K2 API envelope shape; if your account returns
 * something structurally different, this defensively falls back to
 * "pending" rather than ever guessing "success" from an unrecognized
 * shape — verify against a real sandbox response and adjust the parsing
 * here if needed.
 */
export async function getStkPushStatus(
  resourceUrl: string
): Promise<KopokopoPaymentStatus> {
  const accessToken = await getAccessToken();
  const res = await fetch(resourceUrl, {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) return "pending"; // transient error — caller will poll again

  const data = await res.json().catch(() => null);
  const status: string | undefined = data?.data?.attributes?.status;

  if (status === "Success") return "success";
  if (status === "Failed") return "failed";
  return "pending"; // "Pending", unrecognized shape, or missing field
}
