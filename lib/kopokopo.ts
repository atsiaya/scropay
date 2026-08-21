const BASE_URL = process.env.KOPOKOPO_BASE_URL || "https://api.kopokopo.com";

interface TokenCache {
  token: string;
  expiresAt: number;
}
let cachedToken: TokenCache | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) return cachedToken.token;

  const clientId = process.env.KOPOKOPO_CLIENT_ID;
  const clientSecret = process.env.KOPOKOPO_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("KOPOKOPO_CLIENT_ID / KOPOKOPO_CLIENT_SECRET are not set. Add them to .env.local.");
  }

  const res = await fetch(`${BASE_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) throw new Error(`Kopokopo oauth_failed (${res.status}): ${await res.text()}`);

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (Number(data.expires_in ?? 3600) - 60) * 1000,
  };
  return cachedToken.token;
}

export interface StkPushResult {
  resourceUrl: string;
}

export async function initiateStkPush(input: {
  phoneNumber: string;
  amountKes: number;
  reference: string;
  callbackUrl: string;
  email?: string;
}): Promise<StkPushResult> {
  const tillNumber = process.env.KOPOKOPO_TILL_NUMBER;
  if (!tillNumber) throw new Error("KOPOKOPO_TILL_NUMBER is not set. Add it to .env.local.");

  const accessToken = await getAccessToken();
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
  if (res.status !== 201) throw new Error(`Kopokopo stk_push_failed (${res.status}): ${await res.text()}`);

  const resourceUrl = res.headers.get("location");
  if (!resourceUrl) throw new Error("Kopokopo response had no Location header to poll for status.");
  return { resourceUrl };
}

export type KopokopoPaymentStatus = "pending" | "success" | "failed";
export interface StkPushPaymentResult {
  status: KopokopoPaymentStatus;
  mpesaReference: string | null;
  payerName: string | null;
}

function stringValue(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}
function firstString(...values: unknown[]): string | null {
  for (const value of values) {
    const result = stringValue(value);
    if (result) return result;
  }
  return null;
}
function fullName(...values: unknown[]): string | null {
  const name = values.map(stringValue).filter((value): value is string => Boolean(value)).join(" ");
  return name || null;
}

/** Returns the KopoKopo-verified status and receipt details for an STK Push. */
export async function getStkPushPayment(resourceUrl: string): Promise<StkPushPaymentResult> {
  try {
    const accessToken = await getAccessToken();
    const res = await fetch(resourceUrl, {
      headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Kopokopo status check non-OK (${res.status}) for ${resourceUrl}:`, await res.text().catch(() => "<no body>"));
      return { status: "pending", mpesaReference: null, payerName: null };
    }

    const data = await res.json().catch(() => null);
    const attributes = data?.data?.attributes;
    const status: string | undefined = attributes?.status;
    const mpesaReference = firstString(
      attributes?.mpesa_reference,
      attributes?.mpesa_receipt_number,
      attributes?.transaction_reference,
      attributes?.receipt_number,
      attributes?.reference
    );
    const payerName = firstString(
      attributes?.payer_name,
      fullName(attributes?.subscriber?.first_name, attributes?.subscriber?.last_name),
      fullName(attributes?.first_name, attributes?.last_name)
    );
    if (status === "Success") return { status: "success", mpesaReference, payerName };
    if (status === "Failed") return { status: "failed", mpesaReference, payerName };
    if (!status) console.error(`Kopokopo status check got an unrecognized response shape for ${resourceUrl}:`, JSON.stringify(data));
    return { status: "pending", mpesaReference, payerName };
  } catch (err) {
    console.error(`Kopokopo status check threw for ${resourceUrl}:`, err);
    return { status: "pending", mpesaReference: null, payerName: null };
  }
}

export async function getStkPushStatus(resourceUrl: string): Promise<KopokopoPaymentStatus> {
  return (await getStkPushPayment(resourceUrl)).status;
}
