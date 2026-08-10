import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { BuyOrder, SellOrder } from "./types";

/**
 * Firebase Admin SDK — server-side only, needs a service account, not the
 * client-side web config. Get one from Firebase Console → Project
 * Settings → Service Accounts → Generate new private key, then split its
 * three fields into the env vars below. Never commit the JSON file
 * itself or these values.
 */
function getDb() {
  if (!getApps().length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // Private keys from env vars usually arrive with literal "\n" instead
    // of real newlines — this undoes that.
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        "FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY are not set. Add them to .env.local."
      );
    }

    initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  }
  return getFirestore();
}

/**
 * Logs a completed order to the `transactions` collection. Called once,
 * right when a buy order's payment or a sell order's deposit is
 * confirmed — not on every status change, so this never double-writes
 * a still-pending order. Failures here are logged, not thrown: a
 * Firestore outage shouldn't be the reason a user's payment confirmation
 * fails to render.
 */
export async function logTransaction(
  order: (BuyOrder | SellOrder) & { direction: "buy" | "sell" }
): Promise<void> {
  try {
    const db = getDb();
    await db.collection("transactions").doc(order.id).set({
      ...order,
      loggedAt: Date.now(),
    });
  } catch (err) {
    console.error("Firestore logTransaction failed:", err);
  }
}
