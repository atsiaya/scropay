import { NextRequest, NextResponse } from "next/server";
import { getQuote } from "@/lib/rates";
import { Network } from "@/lib/types";

export async function GET(req: NextRequest) {
  const network = (req.nextUrl.searchParams.get("network") as Network) || "CELO";
  const quote = await getQuote(network);
  return NextResponse.json(quote);
}
