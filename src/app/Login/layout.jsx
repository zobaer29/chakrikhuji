import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-session";
import { getDashboardPath } from "@/lib/roles";

export default async function AccountLayout({ children }) {
  const session = await getSession();
  if (session?.user.emailVerified && getDashboardPath(session.user) !== "/Login") {
    redirect(getDashboardPath(session.user));
  }
  return children;
}
