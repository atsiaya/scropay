import { NextRequest, NextResponse } from "next/server";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import { getAgentProfile, upsertAgentProfile } from "@/lib/agents";

export const dynamic = "force-dynamic";

const CELO_ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;

export async function GET(req: NextRequest) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const profile = await getAgentProfile(session.uid);
  return NextResponse.json(
    profile ?? {
      uid: session.uid,
      email: session.email,
      fullName: null,
      celoAddress: null,
      idNumber: null,
      online: false,
      lastOnlineAt: null,
      lastAssignedAt: null,
    }
  );
}

export async function PATCH(req: NextRequest) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const fullName = body?.fullName as string | undefined;
  const celoAddress = body?.celoAddress as string | undefined;
  const idNumber = body?.idNumber as string | undefined;

  if (!fullName?.trim()) {
    return NextResponse.json({ error: "Full name is required" }, { status: 400 });
  }
  if (!celoAddress || !CELO_ADDRESS_RE.test(celoAddress)) {
    return NextResponse.json(
      { error: "Enter a valid Celo address (0x…, 42 characters)" },
      { status: 400 }
    );
  }
  if (!idNumber?.trim()) {
    return NextResponse.json({ error: "ID or passport number is required" }, { status: 400 });
  }

  await upsertAgentProfile(session.uid, {
    fullName: fullName.trim(),
    celoAddress,
    idNumber: idNumber.trim(),
    email: session.email ?? undefined,
  });

  return NextResponse.json({ ok: true });
}
