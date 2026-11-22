import { requireAccountType } from "@/lib/auth-session";
import SeekerSidebar from "@/components/seekers/SeekerSidebar";

export default async function SeekerLayout({ children }) {
  await requireAccountType("job-seeker");
  return (
    <div className="min-h-screen lg:flex">
      <SeekerSidebar />
      <main id="main-content" className="min-w-0 flex-1 p-6 sm:p-10 lg:p-12">
        {children}
      </main>
    </div>
  );
}
