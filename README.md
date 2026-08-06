# Ramp

A Kenyan crypto on/off-ramp — buy USDT with M-Pesa, or sell USDT back to
M-Pesa. Next.js (App Router) + Tailwind CSS v4 + TypeScript, in the style
of Fonbnk's pay flow.

This has a real (free-tier) pricing feed, real wallet connections via
WalletConnect/Reown AppKit, and a working sell flow — but the order store
is in-memory and nothing here talks to an actual custody or KYC provider
yet. See "Before this touches real money" for the gap between this and a
launchable product.

## Running it

```bash
npm install
cp .env.example .env.local   # then fill in the two required values below
npm run dev
```

Two env vars matter for the app to actually work, not just build:

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` — free from
  [cloud.reown.com](https://cloud.reown.com). Without it, the Connect
  Wallet button stays disabled with an explanatory message rather than
  crashing.
- `TREASURY_ADDRESS_CELO` / `_POLYGON` / `_BASE` — where a Sell order's
  USDT actually goes. Without these it falls back to an obviously-fake
  placeholder address so the deposit screen still renders.

## The flow

**Buy** (max KES 500 without verification):
1. `/` — enter a KES amount, see the live rate.
2. `/connect` — **Connect Wallet** (opens the real AppKit modal — OKX
   Wallet, Binance Web3 Wallet, MetaMask, Trust, Coinbase, or a
   WalletConnect QR for anything else) or **Paste an address**.

**Sell** (max 200 USDT without verification):
1. `/` — enter a USDT amount.
2. `/sell/payout` — the M-Pesa number to receive the payout on.
3. `/sell/deposit` — a QR code + address to send USDT to, and an
   "I have already paid" button that flags the order for verification.

**Over either limit** — routes to `/kyc`, a stub verification form
instead of just blocking the button.

## Project structure

```
app/
  page.tsx                        home (hero + RampCard)
  connect/page.tsx                  buy step 2: server wrapper + Suspense
  sell/payout/page.tsx               sell step 2: same pattern
  sell/deposit/page.tsx              sell step 3: same pattern
  kyc/page.tsx                       over-limit redirect target
  api/rate/route.ts                  price quote, polled every 20s
  api/orders/route.ts                 create/fetch a sell order
  api/orders/[id]/confirm/route.ts     "I have already paid"
  web3-provider.tsx                   WagmiProvider + AppKit init
components/
  RampCard.tsx              buy/sell widget: amounts, limits, routing
  LedgerStrip.tsx             ticking rate strip, buy/sell aware
  ConnectView.tsx             buy step 2 client content
  WalletConnectStep.tsx        the real AppKit "Connect Wallet"/"Paste" UI
  SellPayoutStep.tsx           M-Pesa number entry, creates the order
  SellDepositStep.tsx          QR + address + confirm, polls order status
  KycStep.tsx                  over-limit stub verification form
lib/
  types.ts, limits.ts, phone.ts, format.ts
  priceFeed.ts     live rate: CoinGecko (USDT→USD) × currency-api (USD→KES)
  rates.ts          applies the margin on top of priceFeed's market rate
  web3/config.ts     wagmi + AppKit adapter config (networks, project id)
  treasury.ts        deposit address per network
  orders.ts           in-memory sell-order store
  empty-module.ts     stub used by the x402 build workaround (see below)
```

## The pricing logic

`lib/priceFeed.ts` fetches the live mid-market rate in two legs, because no
free API quotes USDT directly against KES:

1. **USDT → USD** from [CoinGecko](https://www.coingecko.com/en/api) —
   genuinely free, works keyless for prototyping, a free Demo key gets a
   stable 30 req/min if you want it. CoinMarketCap's free tier needs a key
   from the first call and covers less; Circle's APIs issue/redeem USDC,
   they don't quote market prices, so neither fit "what's the going rate."
2. **USD → KES** from [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) —
   open source (MIT), no key, no rate limit, 200+ currencies including
   KES, served off a CDN. This leg is required, not optional: CoinGecko's
   `vs_currencies` list doesn't include KES at all.

`lib/rates.ts` multiplies the two legs into a mid-market rate, then:

```
buyRate  = marketRate × (1 + marginBps / 10000)   // buyer pays above market
sellRate = marketRate × (1 - marginBps / 10000)   // seller receives below market
```

`MARGIN_BPS = 40` (0.40% each side) — tune per corridor in `lib/rates.ts`.
If either leg's fetch fails, `getQuote` falls back to a hardcoded
last-known-good rate and the ledger strip shows a small amber dot so the
fallback is visible, not silent.

## Wallet connections (buy flow)

`WalletConnectStep.tsx` is built on `@reown/appkit` + `wagmi` — a real
integration, not a stub list:

- **Connect Wallet** opens AppKit's modal, which surfaces OKX Wallet,
  Binance Web3 Wallet, MetaMask, Trust, Coinbase, and a WalletConnect QR
  for anything else, using AppKit's own wallet ranking (no hardcoded
  wallet IDs to keep in sync).
- **Paste an address** is the manual fallback, validated as a 0x/42-char
  EVM address.
- Detects the connected wallet being on the wrong chain and prompts a
  network switch via `useSwitchChain`.
- Tron is deliberately not wired in — it's non-EVM and needs its own
  connector (e.g. TronLink's SDK), not something AppKit's EVM wallet list
  covers. `lib/web3/config.ts` and `WalletConnectStep.tsx` both flag where.

## The x402 build workaround

`next.config.ts` has an alias block that looks unrelated to anything in
this app — it is. `wagmi`'s Coinbase "Base Account" connector transitively
pulls in `@coinbase/cdp-sdk`, which lazy-imports optional x402
(payment-protocol) packages nobody here installs. Both Turbopack and
webpack try to statically resolve those imports at build time and fail
even though the code path is never executed. The alias points them at
`lib/empty-module.ts`, a stub exporting harmless no-op functions for the
couple of named exports that get statically checked. If a future
wagmi/AppKit release drops that dependency, this whole block — the alias
list in `next.config.ts` plus `lib/empty-module.ts` — becomes dead weight
you can delete.

## Attributing incoming deposits

This is the biggest simplification in the sell flow. `lib/treasury.ts`
returns one static address per network — every Sell order on the same
network gets the same address. That's fine for a demo, but at real volume
two users sending the same amount around the same time become
indistinguishable, and there's no way to programmatically confirm a
deposit at all yet (`/api/orders/[id]/confirm` just records what the user
claims — see its comments). Before this handles real money:

- Get a **unique deposit address per order**, either from a custody
  provider (Fireblocks, Coinbase Prime) or your own HD wallet derivation.
- Watch it with an **on-chain indexer webhook** (Alchemy/Moralis/QuickNode
  "address activity" streams, or your own), and only then trigger the
  actual M-Pesa payout (Daraja B2C API) — automatically, not by trusting
  the "I have already paid" click.

## The order store

`lib/orders.ts` is a `Map` on a module-level variable. Fine for local dev
and demoing; unreliable in production because Vercel can route
consecutive requests to different serverless instances, silently losing
orders. Swap it for Vercel KV / Upstash Redis (a good fit for
short-lived pending orders) or Postgres if you also want it queryable for
reconciliation. The three functions in that file are the whole surface
area to keep — change the implementation, not the callers.

## Adding real KYC

`KycStep.tsx` collects a name and ID number and immediately shows
"submitted" — there's no document upload, liveness check, or actual
verification call. For a Kenyan user base,
[Smile Identity](https://www.smileidentity.com/) (ID + selfie liveness,
built for African markets) or [Sumsub](https://sumsub.com/) (broader
international coverage) are the two most commonly used real providers to
wire in here.

## Before this touches real money

Beyond the deposit-attribution and KYC gaps above, a production on-ramp
also needs, at minimum:

- **Licensing** — in Kenya, typically a registered VASP arrangement plus
  M-Pesa's own merchant/API agreements (Daraja API for STK push and B2C
  payouts).
- **AML transaction monitoring** — sanctions screening and pattern
  monitoring on top of the KYC identity check itself.
- **Custody** — a real signing/custody setup for the USDT leg; this repo
  never holds private keys anywhere.
- **Reconciliation** — matching M-Pesa payment callbacks to on-chain
  payouts, with retry/refund handling for partial failures.

## Deploying (Vercel)

`npm run build` passes cleanly here. A couple of things worth knowing:

- Set all the env vars from `.env.example` in Vercel's project settings —
  without `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` specifically, the wallet
  connect button will be visibly disabled in production, which is
  confusing if you don't expect it.
- If a deploy ever fails with `File 'X/page.tsx' is not a module` (a
  TypeScript error meaning the file has no imports/exports — usually
  empty), check the file isn't actually 0 bytes on GitHub directly (a bad
  `git add` can commit an empty file even when your local copy looks
  fine), and check case sensitivity — Vercel's filesystem is
  case-sensitive, a local macOS/Windows checkout often isn't.

## Notes on the build environment

`app/layout.tsx` uses system font stacks rather than `next/font/google`,
since font fetching at build time needs outbound network access this
sandbox didn't have. The CSS variables in `app/globals.css`
(`--font-display`, `--font-body`, `--font-mono`) are wired up for
Fraunces/Inter/IBM Plex Mono if you want to reintroduce `next/font/google`
somewhere with real network access.
