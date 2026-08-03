import { WalletOption } from "./types";

export const WALLET_OPTIONS: WalletOption[] = [
  {
    id: "walletconnect",
    name: "WalletConnect",
    description: "Scan a QR code with any compatible wallet app",
  },
  {
    id: "metamask",
    name: "MetaMask",
    description: "Connect your browser extension wallet",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    description: "Connect using the Coinbase Wallet app",
  },
  {
    id: "manual",
    name: "Paste an address",
    description: "Send to any wallet address on the Celo network",
  },
];
