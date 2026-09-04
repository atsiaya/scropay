"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { AgentProfile } from "@/lib/types";

const TABS = [
  { href: "/agent/dashboard", label: "Orders" },
  { href: "/agent/dashboard/history", label: "History" },
  { href: "/agent/dashboard/profile", label: "Profile" },
  { href: "/agent/dashboard/team", label: "Team" },
];

export default function AgentNav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [profile, setProfile] = useState<AgentProfile | null>(null);
  const [toggling, setToggling] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/agent/profile", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setProfile(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // Re-check whenever the route changes — e.g. after saving a profile
    // edit and navigating away, the pill should reflect the new state.
  }, [pathname]);

  async function handleToggleOnline() {
    if (!profile) return;
    setToggling(true);
    try {
      const res = await fetch("/api/agent/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ online: !profile.online }),
      });
      const data = await res.json();
      if (res.ok) setProfile((p) => (p ? { ...p, online: data.online } : p));
    } finally {
      setToggling(false);
    }
  }

  async function handleSignOut() {
    await fetch("/api/agent/session", { method: "DELETE" });
    await signOut(getFirebaseAuth());
    router.push("/agent/sign-in");
  }

  return (
    <header className="border-b border-[var(--color-line)] bg-white/70">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-medium text-[var(--color-ink)]">
            Ramp Agent
          </span>
          <nav className="flex items-center gap-1">
            {TABS.map((tab) => {
              const active =
                tab.href === "/agent/dashboard"
                  ? pathname === "/agent/dashboard"
                  : pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`focus-ring rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                      : "text-[var(--color-ink)]/60 hover:bg-[var(--color-ink)]/5"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleOnline}
            disabled={toggling || !profile}
            className={`focus-ring flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium disabled:opacity-40 ${
              profile?.online
                ? "bg-[var(--color-moss)]/10 text-[var(--color-moss-deep)]"
                : "bg-[var(--color-ink)]/5 text-[var(--color-ink)]/50"
            }`}
            title={profile?.online ? "Click to go offline" : "Click to go online"}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                profile?.online ? "bg-[var(--color-moss)]" : "bg-[var(--color-ink)]/30"
              }`}
            />
            {profile?.online ? "Online" : "Offline"}
          </button>
          <span className="hidden text-xs text-[var(--color-ink)]/50 sm:inline">{email}</span>
          <button
            onClick={handleSignOut}
            className="focus-ring text-xs text-[var(--color-ink)]/50 underline-offset-2 hover:underline"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
