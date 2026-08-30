import { NextRequest, NextResponse } from "next/server";
import { getAdminAuth } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ invited: false });
  }

  try {
    const user = await getAdminAuth().getUserByEmail(email);
    const invited = user.customClaims?.role === "agent";
    return NextResponse.json({ invited });
  } catch {
    // No account with this email at all — same response as "account
    // exists but isn't an agent," deliberately, so this endpoint can't
    // be used to enumerate which emails have accounts.
    return NextResponse.json({ invited: false });
  }
}
