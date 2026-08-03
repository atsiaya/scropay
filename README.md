# Ramp

A Kenyan crypto on/off-ramp UI — buy USDT with M-Pesa, or sell USDT back to
M-Pesa. Built with Next.js (App Router) + Tailwind CSS v4 + TypeScript, in
the style of Fonbnk's pay flow: rate ledger, amount fields, wallet connect.

This is a **frontend scaffold with a mock rate feed and a stubbed wallet
connection**. It's meant as a starting point for a real integration, not a
production payments product on its own — see the checklist below for what
that would need.

## Running 

```bash
npm install
npm run dev
```

Open http://localhost:3000. The flow:

1. `/` — pick Buy or Sell, type an amount, see the live-ish rate.
2. `/connect` — choose a wallet (WalletConnect, an extension wallet, or
   paste an address manually).

## Project structure

```
app/
  page.tsx               home page (hero + RampCard)
  connect/page.tsx        wallet connection step
  api/rate/route.ts        mock rate endpoint, polled every 20s
components/
  RampCard.tsx             the buy/sell widget (amounts, validation, CTA)
  LedgerStrip.tsx           the ticking rate strip at the top of the card
  WalletConnectFlow.tsx     wallet list → QR stub → manual address → connected
lib/
  types.ts, rates.ts, wallets.ts, format.ts
```

## Wiring up a real rate feed

`lib/rates.ts` currently returns a deterministic mock rate so the UI has
something to poll. Replace `getMockRate` with a real quote source:

- A licensed VASP or aggregator's quote API (this is what Fonbnk, Yellow
  Card, etc. do under the hood).
- Your own liquidity desk's rate, marked up for margin.

Keep the same `RateQuote` shape and the rest of the UI (the ledger strip,
the countdown, the recompute-on-tick logic in `RampCard`) works unchanged.

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

## Notes on the build environment

`app/layout.tsx` uses system font stacks rather than `next/font/google`,
since font fetching at build time needs outbound network access that this
sandbox didn't have. If your environment can reach Google Fonts, feel free
to reintroduce `next/font/google` for Fraunces / Inter / IBM Plex Mono —
the CSS variables in `app/globals.css` (`--font-display`, `--font-body`,
`--font-mono`) are already wired up to use them.
