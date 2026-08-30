import { NextRequest, NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { getAdminAuth, getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import { sendCustomerNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const email = body?.email as string | undefined;
  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
  }
  const targetEmail = email.trim();

  try {
    const auth = getAdminAuth();

    // Find or create the Firebase Auth user for this email. This is the
    // whole "registration" step for an agent — there's no separate form
    // the invitee fills out; accepting the emailed link below completes
    // sign-in against the account created right here.
    let uid: string;
    try {
      uid = (await auth.getUserByEmail(targetEmail)).uid;
    } catch {
      uid = (await auth.createUser({ email: targetEmail })).uid;
    }

    // This is what actually tags them as an agent, distinct from any
    // regular ramp customer (who has no account at all in this app) —
    // every authorization check in this feature (middleware's cookie
    // check aside) comes down to reading this claim.
    await auth.setCustomUserClaims(uid, { role: "agent" });

    // Also record it in Firestore, alongside your other collections —
    // an "is this uid an agent" lookup that doesn't require decoding a
    // token, useful for a future "list all agents" admin view.
    await getFirestore().collection("agents").doc(uid).set({
      email: targetEmail,
      invitedBy: session.uid,
      invitedAt: Date.now(),
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const link = await auth.generateSignInWithEmailLink(targetEmail, {
      url: `${appUrl}/agent/auth/callback`,
      handleCodeInApp: true,
    });

    // Reusing sendCustomerNotification here rather than adding a new
    // export to lib/email.ts — it's generically "send an email to an
    // arbitrary address," the "customer" in its name doesn't actually
    // constrain anything about how it's used.
    await sendCustomerNotification(
      targetEmail,
      "You've been invited as an agent",
      `<p>You've been invited to the agent dashboard.</p>
       <p><a href="${link}">Accept your invite and sign in →</a></p>
       <p>This link is single-use and expires soon — if it's expired by
       the time you click it, ask whoever invited you to send a new one.</p>`
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invite failed" },
      { status: 500 }
    );
  }
}
