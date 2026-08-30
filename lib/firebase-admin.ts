import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

/**
 * Same init logic as lib/firebase.ts's getDb() — duplicated here rather
 * than imported, because firebase-admin's getApps()/initializeApp() are
 * a global singleton registry: whichever file's guard runs first does
 * the real initialization, and every other file just attaches to the
 * existing app. That makes this safe to add without touching or even
 * needing to see your original lib/firebase.ts.
 */
function ensureAdminApp(): void {
  if (getApps().length) return;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Env vars usually arrive with literal "\n" instead of real newlines.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY are not set. Add them to .env.local."
    );
  }

  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
}

export function getAdminAuth() {
  ensureAdminApp();
  return getAuth();
}

export const SESSION_COOKIE_NAME = "agent_session";
export const SESSION_MAX_AGE_MS = 5 * 24 * 60 * 60 * 1000; // 5 days — Firebase's own cap is 14

export interface AgentSession {
  uid: string;
  email: string | null;
}

/**
 * The one real authorization check in this whole feature. Everything
 * else — middleware.ts's cookie-presence check, the client-side
 * redirects — is UX on top of this; someone with a forged, expired, or
 * revoked cookie fails here even if they got past every earlier gate.
 *
 * Checks role === "agent" on the DECODED SESSION COOKIE's custom claims,
 * not a fresh Firestore read — cheap, and correct for this app's flow
 * specifically because claims are always set at invite time, before the
 * user's first sign-in ever happens (see app/api/agent/invite/route.ts).
 * If you ever add a path that promotes an *already signed-in* user to
 * agent, that user's existing session cookie won't reflect the new claim
 * until they sign in again — a well-known Firebase gotcha, not a bug
 * here, just worth knowing if this assumption changes.
 */
export async function getAgentSession(
  sessionCookie: string | undefined
): Promise<AgentSession | null> {
  if (!sessionCookie) return null;
  try {
    const decoded = await getAdminAuth().verifySessionCookie(sessionCookie, true);
    if (decoded.role !== "agent") return null;
    return { uid: decoded.uid, email: decoded.email ?? null };
  } catch {
    return null;
  }
}
