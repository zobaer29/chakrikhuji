export const ACCOUNT_TYPES = ["job-seeker", "company"];

export function getAccountType(user) {
  // Accounts created before roles were introduced are job-seeker accounts.
  return user?.accountType ?? "job-seeker";
}

export function getDashboardPath(user) {
  const role = getAccountType(user);
  if (role === "company") return "/company/dashboard";
  if (role === "job-seeker") return "/seekers/dashboard";
  return "/Login";
}
