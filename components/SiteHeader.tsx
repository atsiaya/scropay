"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

/** Slim app bar: logo only, always a way back home. The agent dashboard has its own nav. */
export default function SiteHeader() {
  const pathname = usePathname();
  if (pathname.startsWith("/agent/dashboard")) return null;

  return (
    <header className="site-header sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-md items-center justify-between px-4">
        <Link href="/" className="focus-ring" aria-label="Ramp home">
          <Logo />
        </Link>
        {pathname !== "/" && (
          <Link href="/" className="focus-ring text-sm text-[var(--color-ink)]/50 hover:text-[var(--color-ink)]">
            Start over
          </Link>
        )}
      </div>
    </header>
  );
}
