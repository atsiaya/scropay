import { NextRequest, NextResponse } from "next/server";
import { getMockRate } from "@/lib/rates";
import { Network } from "@/lib/types";

export async function GET(req: NextRequest) {
  const network = (req.nextUrl.searchParams.get("network") as Network) || "CELO";
  const quote = getMockRate(network);
  return NextResponse.json(quote);
}
