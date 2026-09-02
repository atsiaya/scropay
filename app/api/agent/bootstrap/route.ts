import { NextRequest, NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { getAdminAuth } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

/**
 * TEMPORARY, ONE-TIME BOOTSTRAP ENDPOINT.
 *
 * Exists purely to create the very first agent when there's no way to
 * run scripts/create-first-agent.mjs locally against production
 * credentials. Does exactly what that script does — nothing more —
 * gated behind a secret you set yourself in BOOTSTRAP_SECRET.
 *
 * DELETE THIS FILE and remove/rotate BOOTSTRAP_SECRET in Vercel
 * immediately after using it once. This is a live "create an agent"
 * endpoint on the public internet, and a secret header is the only
 * thing standing between anyone who finds this URL and an agent
 * account — fine for a few minutes of deliberate use, not as a
 * permanent fixture. Every agent after this one goes through
 * app/api/agent/invite/route.ts instead, which requires an existing
 * signed-in agent and has no equivalent exposure.
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-bootstrap-secret");
  const expected = process.env.BOOTSTRAP_SECRET;

  if (!expected) {
    return NextResponse.json(
      { error: "BOOTSTRAP_SECRET is not set — set it in Vercel before calling this." },
      { status: 500 }
    );
  }
  if (!secret || secret !== expected) {
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

    let uid: string;
    try {
      uid = (await auth.getUserByEmail(targetEmail)).uid;
    } catch {
      uid = (await auth.createUser({ email: targetEmail })).uid;
    }

    await auth.setCustomUserClaims(uid, { role: "agent" });

    await getFirestore().collection("agents").doc(uid).set({
      email: targetEmail,
      invitedBy: "bootstrap-endpoint",
      invitedAt: Date.now(),
    });

    return NextResponse.json({
      ok: true,
      uid,
      message: `${targetEmail} is now an agent. Delete this route and rotate BOOTSTRAP_SECRET now.`,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Bootstrap failed" },
      { status: 500 }
    );
  }
}
