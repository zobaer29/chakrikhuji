import { requireAccountType } from "@/lib/auth-session";
import CompanySidebar from "@/components/company/CompanySidebar";

export default async function CompanyLayout({ children }) {
  await requireAccountType("company");
  return (
    <div className="min-h-screen lg:flex">
      <CompanySidebar />
      <main id="main-content" className="min-w-0 flex-1 p-6 sm:p-10 lg:p-12">
        {children}
      </main>
    </div>
  );
}
