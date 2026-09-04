import { NextRequest, NextResponse } from "next/server";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import { getAgentSellOrders } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await getAgentSession(req.cookies.get(SESSION_COOKIE_NAME)?.value);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const orders = await getAgentSellOrders(session.uid);
  return NextResponse.json({ orders });
}
