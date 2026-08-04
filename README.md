# Ramp

A Kenyan crypto on/off-ramp UI — buy USDT with M-Pesa, or sell USDT back to
M-Pesa. Built with Next.js (App Router) + Tailwind CSS v4 + TypeScript, in
the style of Fonbnk's pay flow: rate ledger, amount fields, wallet connect.

This is a **frontend scaffold with a real (free-tier) rate feed and margin
logic, and a stubbed wallet connection**. It's a starting point for a real
integration, not a production payments product on its own — see the
checklist below for what that would need.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The flow:

1. `/` — pick Buy or Sell, type an amount, see the live rate (mid-market
   and marked-up rate both shown, for transparency).
2. `/connect` — choose a wallet (WalletConnect, an extension wallet, or
   paste an address manually).

Optional: copy `.env.example` to `.env.local` and add a free CoinGecko
Demo API key for a more stable rate limit (not required to run the app).

## Project structure

```
app/
  page.tsx                home page (hero + RampCard)
  connect/page.tsx          server wrapper + Suspense boundary
  api/rate/route.ts          rate endpoint, polled every 20s
components/
  RampCard.tsx               the buy/sell widget (amounts, validation, CTA)
  LedgerStrip.tsx             the ticking rate strip, buy/sell aware
  ConnectView.tsx             the /connect page's client content
  WalletConnectFlow.tsx       wallet list → QR stub → manual address → connected
lib/
  types.ts       shared types, incl. RateQuote (marketRate/buyRate/sellRate)
  priceFeed.ts    live market price: CoinGecko (USDT→USD) × currency-api (USD→KES)
  rates.ts        applies the margin on top of priceFeed's market rate
  wallets.ts, format.ts
```

## The pricing logic

`lib/priceFeed.ts` fetches the live mid-market rate in two legs, because no
free API quotes USDT directly against KES:

1. **USDT → USD** from [CoinGecko](https://www.coingecko.com/en/api) — the
   best fit here: genuinely free, works keyless for prototyping, and a free
   Demo key gets a stable 30 req/min if you want it. CoinMarketCap's free
   tier requires a key from the first call and covers less; Circle's APIs
   are for issuing/redeeming USDC, not reading market prices, so neither
   was a fit for "what's the going rate."
2. **USD → KES** from [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) —
   open source (MIT), no key, no rate limit, 200+ currencies including KES,
   served off a CDN. This is the "better open-source option": CoinGecko's
   own `vs_currencies` list doesn't include KES at all, so this second leg
   is required, not optional — worth confirming for any fiat pair you add
   before assuming a single API covers it.

`lib/rates.ts` multiplies the two legs into a mid-market USDT/KES rate,
then applies the spread:

```
buyRate  = marketRate × (1 + marginBps / 10000)   // buyer pays above market
sellRate = marketRate × (1 - marginBps / 10000)   // seller receives below market
```

`MARGIN_BPS = 40` (0.40% each side, ~0.8% round-trip) matches what you
asked for — tune it per corridor or volume in `lib/rates.ts`. If either
leg's fetch fails (rate limit, timeout, outage), `getQuote` falls back to
a hardcoded last-known-good rate rather than breaking the buy flow, and
the UI shows a small amber dot on the ledger strip so the discrepancy is
visible rather than silent. For production, persist the last successful
live rate (KV, DB, even a flat file) and read that back instead of the
hardcoded constant, so the fallback stays roughly accurate over time.

## Wiring up real wallet connections

`WalletConnectFlow.tsx` has three stub paths, each with a comment marking
where real SDK calls go:

- **WalletConnect** — install `@walletconnect/web3-provider` or
  `wagmi` + `@walletconnect/ethereum-provider`, open the modal, and resolve
  on `session_connect`.
- **Injected wallets (MetaMask, Coinbase Wallet)** — call
  `window.ethereum.request({ method: "eth_requestAccounts" })` and switch
  chains with `wallet_switchEthereumChain` for the target network.
- **Manual address** — already fully functional; only the address format
  regex needs to match every network you support (the current one assumes
  EVM-style 0x addresses — Tron addresses look different, for instance).

If you'd rather not require users to already have a wallet (a real UX
barrier for a first-time buyer in Kenya), the better fit is an **embedded
wallet provider** instead of pure WalletConnect:

- **[Web3Auth](https://web3auth.io/)** — the strongest free/open-source
  pick. Core SDK is MIT-licensed, keys are split via MPC so Web3Auth itself
  never custodies funds (which matters for your own licensing exposure),
  multi-chain out of the box (EVM chains natively; others via chain
  adapters), and the free tier covers meaningful volume before you'd need
  to pay.
- **[Privy](https://www.privy.io/)** — not open source, but a noticeably
  faster integration in a Next.js app and a generous free tier. Worth
  trying if dev speed matters more than the OSS requirement.
- **thirdweb** and **Dynamic** are the other two commonly compared —
  similar shape, worth a look if neither of the above fits your chain list.

Either would replace `WalletConnectFlow.tsx`'s three stub paths with a
single "connect or create" flow.

## Before this touches real money

This scaffold intentionally stops short of anything that moves funds. A
production on-ramp needs, at minimum:

- **Licensing** — in Kenya this typically means working with or as a
  registered VASP, plus M-Pesa's own merchant/API agreements (Daraja API
  for STK push).
- **KYC/AML** — identity verification above regulatory thresholds, sanctions
  screening, and transaction monitoring. The "KYC required over KES 30,000"
  line in the UI is a placeholder for wherever your actual threshold lands.
- **Custody** — a real signing/custody setup for the USDT leg (this repo
  never holds keys).
- **Idempotent order state** — a backend order/quote record with a unique
  ID, so a payment callback from M-Pesa can be safely matched to a payout
  even if the user closes the tab.
- **Reconciliation** — matching M-Pesa payment callbacks (Daraja) to
  on-chain payouts, with retry/refund handling for partial failures.

## Deploying (Vercel)

`npm run build` passes cleanly here. If your Vercel deploy fails with
`File 'app/connect/page.tsx' is not a module` (a TypeScript error meaning
the file TypeScript sees has no imports/exports — usually because it's
empty), check, in order:

1. **The file isn't actually empty in the repo** — open it on GitHub
   directly, not just locally; a bad `git add` or merge can commit a
   0-byte file even when your local copy looks fine.
2. **Case sensitivity** — Vercel builds on a case-sensitive Linux
   filesystem; a local macOS/Windows checkout can silently have e.g. both
   `connect/` and `Connect/` referenced, which works locally and breaks on
   deploy.
3. **Clear the Vercel build cache** and redeploy — a stale cache
   occasionally serves a pre-fix version of a file.

The route is already split into a plain server `page.tsx` (just a
`Suspense` wrapper) plus a client `ConnectView.tsx` doing the actual work,
which is the standard-shaped fix if the underlying issue was
`useSearchParams()` needing a Suspense boundary during the build's static
pass — worth confirming that split survived however the code reached your
repo.

## Notes on the build environment

`app/layout.tsx` uses system font stacks rather than `next/font/google`,
since font fetching at build time needs outbound network access that this
sandbox didn't have. If your environment can reach Google Fonts, feel free
to reintroduce `next/font/google` for Fraunces / Inter / IBM Plex Mono —
the CSS variables in `app/globals.css` (`--font-display`, `--font-body`,
`--font-mono`) are already wired up to use them.
