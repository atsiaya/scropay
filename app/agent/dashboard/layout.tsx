import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import AgentNav from "@/components/AgentNav";

export default async function AgentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = await getAgentSession(cookieStore.get(SESSION_COOKIE_NAME)?.value);

  // middleware.ts only checked whether a cookie existed at all — this is
  // where an expired, forged, or non-agent cookie actually gets caught.
  // Living in the layout means it guards every page under
  // /agent/dashboard/*, not just this one.
  if (!session) {
    redirect("/agent/sign-in");
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <AgentNav email={session.email ?? ""} />
      <div className="mx-auto w-full max-w-3xl px-4 py-6">{children}</div>
    </div>
  );
}
