import { NextResponse, type NextRequest } from "next/server";

// Duplicated from lib/firebase-admin.ts rather than imported — that file
// also imports firebase-admin/app and firebase-admin/auth, which are
// Node-only modules. Middleware runs on Vercel's Edge runtime by
// default, and even an unused import of a Node-dependent module gets
// pulled into the Edge bundle at build time, which is exactly what
// broke deployment here ("referencing unsupported modules"). Middleware
// only ever needs this one string, never anything else from that file,
// so duplicating it is the actual fix, not a workaround — keep both
// copies in sync if you ever rename it.
const SESSION_COOKIE_NAME = "agent_session";

/**
 * This only checks whether the session cookie is PRESENT — it does not,
 * and safely cannot, cryptographically verify it here (see above for
 * why nothing Node-dependent can even be imported into this file, let
 * alone run in it). So this is a fast redirect for the common case (no
 * cookie at all), purely for UX — not the actual authorization check.
 * That check is lib/firebase-admin.ts's getAgentSession(), called for
 * real in the dashboard's Server Component and in every /api/agent/*
 * route handler (both run in the Node.js runtime, where firebase-admin
 * works fine). Someone with a forged or expired cookie sails past this
 * middleware and gets rejected there instead — that's fine, that's
 * where the actual security boundary is supposed to live.
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
