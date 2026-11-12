import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.safepal.co.ke"),
  title: { default: "Ramp — Buy & sell USDT with M-Pesa", template: "%s · Ramp" },
  description: "Kenya's fast USDT on/off-ramp. Pay with M-Pesa, receive USDT on Celo, Polygon or Base — or cash out to M-Pesa.",
  openGraph: { title: "Ramp — Buy & sell USDT with M-Pesa", description: "Move between M-Pesa shillings and USDT in minutes.", type: "website" },
};

export const viewport: Viewport = { themeColor: "#07090f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
