import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getAccountType, getDashboardPath } from "@/lib/roles";

export const getSession = cache(async () => {
  return auth.api.getSession({ headers: await headers() });
});

export async function requireAccountType(accountType) {
  const session = await getSession();
  if (!session) redirect(`/Login?role=${accountType}`);
  if (!session.user.emailVerified) redirect(`/Login?role=${accountType}`);
  if (getAccountType(session.user) !== accountType) {
    redirect(getDashboardPath(session.user));
  }
  return session;
}
