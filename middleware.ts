import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/firebase-admin";

/**
 * This only checks whether the session cookie is PRESENT — it does not,
 * and safely cannot, cryptographically verify it here. Middleware runs
 * on the Edge runtime by default, which doesn't support firebase-admin's
 * Node-only crypto APIs. Verifying signatures on the Edge is possible in
 * principle but adds real complexity for little benefit here.
 *
 * So this is a fast redirect for the common case (no cookie at all),
 * purely for UX — not the actual authorization check. That check is
 * lib/firebase-admin.ts's getAgentSession(), called for real in the
 * dashboard's Server Component and in every /api/agent/* route handler
 * (both run in the Node.js runtime, where firebase-admin works fine).
 * Someone with a forged or expired cookie sails past this middleware and
 * gets rejected there instead — that's fine, that's where the actual
 * security boundary is supposed to live.
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicAgentRoute = path.startsWith("/agent/sign-in") || path.startsWith("/agent/auth");
  const isAgentRoute = path.startsWith("/agent") && !isPublicAgentRoute;

  if (isAgentRoute && !request.cookies.get(SESSION_COOKIE_NAME)) {
    const url = request.nextUrl.clone();
    url.pathname = "/agent/sign-in";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/agent/:path*"],
};
