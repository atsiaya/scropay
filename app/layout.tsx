import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "./web3-provider";

export const metadata: Metadata = {
  title: "Ramp — Buy & sell USDT with M-Pesa",
  description:
    "A Kenyan on/off-ramp: move between M-Pesa shillings and USDT in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
