import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAgentSession, SESSION_COOKIE_NAME } from "@/lib/firebase-admin";
import AgentDashboard from "@/components/AgentDashboard";

export default async function AgentDashboardPage() {
  const cookieStore = await cookies();
  const session = await getAgentSession(cookieStore.get(SESSION_COOKIE_NAME)?.value);

  // middleware.ts only checked whether a cookie existed at all — this is
  // where an expired, forged, or non-agent cookie actually gets caught.
  if (!session) {
    redirect("/agent/sign-in");
  }

  return <AgentDashboard email={session.email ?? ""} agentId={session.uid} />;
}
