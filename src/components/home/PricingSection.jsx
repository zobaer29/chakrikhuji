import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 border-b border-[var(--line)]">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            Plans for both sides
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            Free for job seekers.<br />
            Built for hiring teams.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Choose the account that fits your next step. These plans describe our planned offering; live features and registration are still in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Job Seeker Tier */}
          <article className="flex min-w-0 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-9 transition-all duration-200 hover:border-[var(--green)] hover:shadow-lg">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
              For your next opportunity
            </span>
            <h3 className="mt-3 text-2xl sm:text-[26px] font-semibold tracking-tight text-[var(--ink)]">
              Job Seeker
            </h3>
            <p className="my-5 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--green)]">
              Free
            </p>
            <p className="text-sm text-[var(--muted)]">
              Improve your applications with a clearer view of your experience.
            </p>
            <ul className="mt-6 mb-8 grid list-none gap-3 text-sm text-[var(--ink)]">
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>CV-to-job matching</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Skill gap insights</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>ATS compatibility checks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Personalized resume suggestions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Conversational AI guidance</span>
              </li>
            </ul>
            <Link
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 text-sm font-semibold text-[var(--paper)] transition-all hover:brightness-105 active:scale-[0.98] shadow-sm"
              href="/Login?mode=register&role=job-seeker"
            >
              <span>Register for free</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </article>

          {/* Company Tier */}
          <article className="flex min-w-0 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-9 transition-all duration-200 hover:border-[var(--green)] hover:shadow-lg">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
              For companies & HR professionals
            </span>
            <h3 className="mt-3 text-2xl sm:text-[26px] font-semibold tracking-tight text-[var(--ink)]">
              Company
            </h3>
            <div className="my-5 flex min-h-[48px] items-center">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--green)]">
                Pricing coming soon
              </p>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Review candidate pools efficiently and keep your team in control.
            </p>
            <ul className="mt-6 mb-8 grid list-none gap-3 text-sm text-[var(--ink)]">
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Bulk CV analysis and sorting</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Matching by skills, experience, and qualifications</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Fairness-aware shortlist review</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>AI-assisted recruitment workflows</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold">✓</span>
                <span>Final hiring decisions made by your team</span>
              </li>
            </ul>
            <Link
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 text-sm font-semibold text-[var(--paper)] transition-all hover:brightness-105 active:scale-[0.98] shadow-sm"
              href="/Login?mode=register&role=company"
            >
              <span>Register your company</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </div>

        <p className="mt-6 text-xs text-[var(--muted)] leading-relaxed">
          Preview only. No payment is collected, and no account is created through this demo.
        </p>
      </div>
    </section>
  );
}
