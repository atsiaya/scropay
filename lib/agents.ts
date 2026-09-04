import { getFirestore } from "firebase-admin/firestore";
import { getAdminAuth } from "./firebase-admin";
import { AgentProfile } from "./types";

const COLLECTION = "agents";

/** Any getAdminAuth() call runs the same init guard lib/firebase.ts and
 *  lib/firebase-admin.ts both rely on — calling it here just guarantees
 *  the app exists before getFirestore() below, regardless of which file
 *  actually did the initializing first. */
function ensureInit(): void {
  getAdminAuth();
}

export async function getAgentProfile(uid: string): Promise<AgentProfile | null> {
  ensureInit();
  const doc = await getFirestore().collection(COLLECTION).doc(uid).get();
  if (!doc.exists) return null;
  return { uid, ...(doc.data() as Omit<AgentProfile, "uid">) };
}

export async function upsertAgentProfile(
  uid: string,
  fields: Partial<Pick<AgentProfile, "fullName" | "celoAddress" | "idNumber" | "email">>
): Promise<void> {
  ensureInit();
  await getFirestore().collection(COLLECTION).doc(uid).set(fields, { merge: true });
}

export async function setAgentOnlineStatus(uid: string, online: boolean): Promise<void> {
  ensureInit();
  await getFirestore()
    .collection(COLLECTION)
    .doc(uid)
    .set({ online, lastOnlineAt: Date.now() }, { merge: true });
}

const CELO_ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;

export interface MatchedAgent {
  uid: string;
  fullName: string;
  celoAddress: string;
  email: string;
}

/**
 * Picks an online agent with a completed profile (name + a valid-looking
 * Celo address), preferring whoever's gone longest without a new
 * assignment — a simple least-recently-used spread across available
 * agents, not a real load balancer or queue. Returns null if nobody's
 * eligible right now; the caller (lib/orders.ts's createSellOrder)
 * treats that as "no agents online" and refuses to create the order
 * rather than silently falling back to some default address.
 *
 * Filters in application code rather than in the Firestore query itself
 * — `online == true` is the only server-side filter, the name/address
 * completeness check happens after fetching, since Firestore's query
 * language doesn't make "field exists and is non-empty" convenient to
 * express as a compound filter alongside an equality check. Fine at the
 * scale of "how many agents are online at once."
 */
export async function findAvailableAgent(): Promise<MatchedAgent | null> {
  ensureInit();
  const snapshot = await getFirestore()
    .collection(COLLECTION)
    .where("online", "==", true)
    .get();

  const eligible = snapshot.docs
    .map((d) => ({ uid: d.id, ...(d.data() as Omit<AgentProfile, "uid">) }))
    .filter(
      (a): a is AgentProfile & { fullName: string; celoAddress: string } =>
        !!a.fullName?.trim() && !!a.celoAddress && CELO_ADDRESS_RE.test(a.celoAddress)
    );

  if (eligible.length === 0) return null;

  eligible.sort((a, b) => (a.lastAssignedAt ?? 0) - (b.lastAssignedAt ?? 0));
  const chosen = eligible[0];

  await getFirestore()
    .collection(COLLECTION)
    .doc(chosen.uid)
    .set({ lastAssignedAt: Date.now() }, { merge: true });

  return {
    uid: chosen.uid,
    fullName: chosen.fullName,
    celoAddress: chosen.celoAddress,
    email: chosen.email,
  };
}
