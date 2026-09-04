import { NextRequest, NextResponse } from "next/server";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import { setAgentOnlineStatus, getAgentProfile } from "@/lib/agents";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const online = body?.online;
  if (typeof online !== "boolean") {
    return NextResponse.json({ error: "Missing online (boolean)" }, { status: 400 });
  }

  if (online) {
    // Going online means "route real customer deposits to my address" —
    // refuse if the profile that address comes from isn't actually set.
    const profile = await getAgentProfile(session.uid);
    if (!profile?.fullName || !profile?.celoAddress) {
      return NextResponse.json(
        { error: "Complete your profile (name + Celo address) before going online." },
        { status: 400 }
      );
    }
  }

  await setAgentOnlineStatus(session.uid, online);
  return NextResponse.json({ ok: true, online });
}
