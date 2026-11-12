"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const COLS = [
  { title: "Product", links: [["Buy USDT", "/#ramp"], ["Sell USDT", "/#ramp"], ["How it works", "/how-it-works"], ["Fees & limits", "/fees"]] },
  { title: "Help", links: [["FAQ", "/faq"], ["Support", "/support"], ["Agent sign-in", "/agent/sign-in"]] },
  { title: "Legal", links: [["Terms of service", "/terms"], ["Privacy policy", "/privacy"]] },
];

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/agent/dashboard")) return null;

  return (
    <footer className="site-footer mt-16 border-t border-[var(--color-line)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-[var(--color-ink)]/55">
            Buy and sell USDT with M-Pesa. Fast, transparent, built for Kenya.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)]/40">{c.title}</h3>
            <ul className="mt-3 space-y-2">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="focus-ring text-sm text-[var(--color-ink)]/70 hover:text-[var(--color-moss)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-line)] px-4 py-5 text-center text-xs text-[var(--color-ink)]/40">
        © {new Date().getFullYear()} Ramp · safepal.co.ke · Crypto assets are volatile; only transact what you understand.
      </div>
    </footer>
  );
}
