import { Network, RampDirection } from "./types";

export type KycStatus = "pending" | "approved" | "declined" | "in_review";

export interface KycRequest {
  requestId: string;
  /** filled in once Didit responds to the create-session call */
  sessionId: string | null;
  /** the government ID number — our key for "has this person verified before" */
  vendorData: string;
  direction: RampDirection;
  fiat: number;
  asset: number;
  network: Network;
  status: KycStatus;
  createdAt: number;
}

/**
 * Maps on module-level variables — same caveat as lib/orders.ts: fine for
 * local dev and demoing, not reliable across Vercel's serverless
 * instances. Before this is real, move to a real store (Postgres, or
 * Redis/KV for the pending-request side since it just needs a TTL) —
 * keep the same three lookup keys: requestId (what the callback page has
 * in its URL), sessionId (what the webhook payload has), and vendorData
 * (the durable "already verified" registry keyed by government ID).
 */
const requestsById = new Map<string, KycRequest>();
const requestIdBySessionId = new Map<string, string>();
const verifiedVendors = new Set<string>();
const processedEventIds = new Set<string>(); // webhook idempotency

export function isVendorVerified(vendorData: string): boolean {
  return verifiedVendors.has(vendorData);
}

export function createPendingRequest(input: {
  requestId: string;
  vendorData: string;
  direction: RampDirection;
  fiat: number;
  asset: number;
  network: Network;
}): KycRequest {
  const request: KycRequest = {
    ...input,
    sessionId: null,
    status: "pending",
    createdAt: Date.now(),
  };
  requestsById.set(input.requestId, request);
  return request;
}

/** Called once Didit's create-session call responds with a session_id. */
export function attachSessionId(requestId: string, sessionId: string): void {
  const request = requestsById.get(requestId);
  if (!request) return;
  request.sessionId = sessionId;
  requestIdBySessionId.set(sessionId, requestId);
}

export function getRequestById(requestId: string): KycRequest | undefined {
  return requestsById.get(requestId);
}

export function getRequestBySessionId(sessionId: string): KycRequest | undefined {
  const requestId = requestIdBySessionId.get(sessionId);
  return requestId ? requestsById.get(requestId) : undefined;
}

export function applyDecisionBySessionId(sessionId: string, status: KycStatus): void {
  const request = getRequestBySessionId(sessionId);
  if (!request) return;
  request.status = status;
  if (status === "approved") verifiedVendors.add(request.vendorData);
}

export function wasEventProcessed(eventId: string): boolean {
  return processedEventIds.has(eventId);
}

export function markEventProcessed(eventId: string): void {
  processedEventIds.add(eventId);
}
