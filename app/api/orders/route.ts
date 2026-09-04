import { NextRequest, NextResponse } from "next/server";
import { createSellOrder, getSellOrder } from "@/lib/orders";
import { normalizeMsisdn } from "@/lib/phone";
import { Network } from "@/lib/types";
import { MIN_SELL_ASSET_USDT, MAX_SELL_ASSET_USDT } from "@/lib/limits";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { asset, network, assetAmount, fiatAmount, mpesaNumber, email } = body as {
    asset?: string;
    network?: Network;
    assetAmount?: number;
    fiatAmount?: number;
    mpesaNumber?: string;
    email?: string;
  };

  const msisdn = normalizeMsisdn(mpesaNumber ?? "");
  if (!msisdn) {
    return NextResponse.json(
      { error: "Enter a valid M-Pesa number, e.g. 07XXXXXXXX" },
      { status: 400 }
    );
  }
  if (
    typeof assetAmount !== "number" ||
    assetAmount < MIN_SELL_ASSET_USDT ||
    assetAmount > MAX_SELL_ASSET_USDT
  ) {
    return NextResponse.json(
      { error: "Amount is outside the allowed range for an unverified order" },
      { status: 400 }
    );
  }
  if (!asset || !network || typeof fiatAmount !== "number") {
    return NextResponse.json({ error: "Missing order fields" }, { status: 400 });
  }

  const result = await createSellOrder({
    asset,
    network,
    assetAmount,
    fiatAmount,
    mpesaNumber: msisdn,
    email: email?.trim() || null,
  });

  if ("error" in result) {
    // 503: not the customer's fault, and retrying shortly might work —
    // an agent could come online any minute.
    return NextResponse.json(
      { error: "No agents are online right now — try again shortly." },
      { status: 503 }
    );
  }

  return NextResponse.json(result, { status: 201 });
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const order = await getSellOrder(id);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
  return NextResponse.json(order);
}
