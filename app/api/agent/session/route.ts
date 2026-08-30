import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth, SESSION_COOKIE_NAME, SESSION_MAX_AGE_MS } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const idToken = body?.idToken as string | undefined;
  if (!idToken) {
    return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
  }

  try {
    const auth = getAdminAuth();
    // verifyIdToken confirms the token is genuinely from Firebase and
    // not expired. Custom claims (role) are already embedded on it at
    // this point, because they were set at invite time — before this
    // user's very first sign-in — so there's no propagation delay to
    // worry about here specifically (see lib/firebase-admin.ts's
    // getAgentSession comment for the general gotcha).
    const decoded = await auth.verifyIdToken(idToken);
    if (decoded.role !== "agent") {
      return NextResponse.json(
        { error: "This account isn't an invited agent." },
        { status: 403 }
      );
    }

    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: SESSION_MAX_AGE_MS,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE_NAME, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE_MS / 1000,
      path: "/",
    });
    return res;
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Couldn't create session" },
      { status: 401 }
    );
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return res;
}
