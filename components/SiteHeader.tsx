"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/fees", label: "Fees & limits" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  // Menu state is keyed to the pathname it was opened on, so navigating
  // closes it automatically (no effect needed).
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  // The agent dashboard ships its own navigation.
  if (pathname.startsWith("/agent/dashboard")) return null;

  return (
    <header className="site-header sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="focus-ring" aria-label="Ramp home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`focus-ring rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-[var(--color-ink)]/10 text-[var(--color-ink)]"
                  : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/agent/sign-in" className="focus-ring text-sm text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]">
            Agent sign-in
          </Link>
          <Link href="/#ramp" className="focus-ring rounded-xl bg-[var(--color-moss)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-ink)] hover:brightness-110">
            Buy / Sell USDT
          </Link>
        </div>

        <button
          className="focus-ring rounded-lg p-2 text-[var(--color-ink)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpenFor(open ? null : pathname)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-[var(--color-line)] bg-[var(--color-paper)] px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...LINKS].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`focus-ring rounded-lg px-3 py-3 text-base ${
                  pathname === l.href ? "text-[var(--color-moss)]" : "text-[var(--color-ink)]/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/agent/sign-in" className="focus-ring rounded-lg px-3 py-3 text-base text-[var(--color-ink)]/80">
              Agent sign-in
            </Link>
          </div>
          <Link href="/#ramp" className="focus-ring mt-3 block rounded-xl bg-[var(--color-moss)] py-3 text-center text-sm font-semibold text-[var(--color-accent-ink)]">
            Buy / Sell USDT
          </Link>
        </nav>
      )}
    </header>
  );
}
