import { NextRequest, NextResponse } from "next/server";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import { markOrderPaidByAgent } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const { id } = await params;
  const result = await markOrderPaidByAgent(id, session.uid);

  if ("error" in result) {
    const status =
      result.error === "not_found" ? 404 : result.error === "not_assigned_to_you" ? 403 : 409;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json(result);
}
