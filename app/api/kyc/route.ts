import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { createDiditSession } from "@/lib/didit";
import {
  isVendorVerified,
  createPendingRequest,
  attachSessionId,
  getRequestById,
} from "@/lib/kyc";
import { Network, RampDirection } from "@/lib/types";

function normalizeIdNumber(idNumber: string): string {
  return idNumber.trim().toUpperCase().replace(/\s+/g, "");
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { fullName, idNumber, direction, fiat, asset, network } = body as {
    fullName?: string;
    idNumber?: string;
    direction?: RampDirection;
    fiat?: number;
    asset?: number;
    network?: Network;
  };

  if (!fullName?.trim() || !idNumber?.trim()) {
    return NextResponse.json(
      { error: "Full name and ID number are required" },
      { status: 400 }
    );
  }
  if (!direction || fiat === undefined || asset === undefined || !network) {
    return NextResponse.json({ error: "Missing transaction context" }, { status: 400 });
  }

  const vendorData = normalizeIdNumber(idNumber);

  // Already verified before, under this ID — skip straight to the
  // transaction instead of sending them through Didit again.
  if (isVendorVerified(vendorData)) {
    return NextResponse.json({ status: "verified" });
  }

  // Our own opaque id, chosen *before* Didit responds, so we have
  // something stable to put in the callback URL — Didit only hands back
  // its session_id inside the create-session response, too late to bake
  // into the very callback URL we send in that same request.
  const requestId = randomUUID();
  createPendingRequest({ requestId, vendorData, direction, fiat, asset, network });

  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const session = await createDiditSession(
      vendorData,
      `${appUrl}/kyc/callback?rid=${requestId}`
    );
    attachSessionId(requestId, session.session_id);

    return NextResponse.json({ status: "pending", url: session.url, requestId });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Verification session failed" },
      { status: 502 }
    );
  }
}

export async function GET(req: NextRequest) {
  const requestId = req.nextUrl.searchParams.get("rid");
  if (!requestId) {
    return NextResponse.json({ error: "Missing rid" }, { status: 400 });
  }
  const request = getRequestById(requestId);
  if (!request) {
    return NextResponse.json({ error: "Unknown request" }, { status: 404 });
  }
  return NextResponse.json(request);
}
