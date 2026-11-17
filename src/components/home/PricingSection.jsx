import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="border-b border-[var(--line)] py-[65px] min-[761px]:py-[100px]">
      <div className="mx-auto w-[calc(100%_-_36px)] min-[761px]:w-[calc(100%_-_48px)] min-[1051px]:w-[min(1200px,calc(100%_-_80px))]">
        <div className="text-[var(--ink)]">
          <span className="text-[11px] font-bold tracking-[2px] text-[var(--green)] uppercase">Plans for both sides</span>
          <h2 className="my-[18px] text-[clamp(32px,4vw,50px)]! leading-[1.15]! font-[550]! tracking-[-1px]! min-[761px]:tracking-[-2px]!">
            Free for job seekers.
            <br />
            Built for hiring teams.
          </h2>
          <p className="max-w-[440px] text-[var(--muted)]">
            Choose the account that fits your next step. These plans describe
            our planned offering; live features and registration are still in
            development.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 min-[761px]:grid-cols-2">
          <article className="flex min-w-0 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-[26px] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out focus-within:border-[var(--green)] focus-within:shadow-[0_12px_30px_color-mix(in_srgb,var(--green)_12%,transparent)] hover:border-[var(--green)] hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--green)_14%,transparent)] motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none min-[761px]:p-9">
            <span className="text-[11px] font-bold tracking-[2px] text-[var(--green)] uppercase">For your next opportunity</span>
            <h3 className="mt-3.5 text-[26px] font-semibold tracking-[-1px] text-[var(--ink)]">Job Seeker</h3>
            <p className="my-5 text-5xl leading-[1.2] font-semibold tracking-[-1.5px] text-[var(--green)]">Free</p>
            <p className="text-sm text-[var(--muted)]">
              Improve your applications with a clearer view of your experience.
            </p>
            <ul className="mt-7 mb-8 grid list-none gap-[13px] text-sm text-[var(--ink)]">
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">CV-to-job matching</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Skill gap insights</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">ATS compatibility checks</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Personalized resume suggestions</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Conversational AI guidance</li>
            </ul>
            <Link
              className="mt-auto inline-flex items-center justify-center gap-7 rounded-lg bg-[var(--green)] px-[22px] py-4 text-sm font-semibold text-[var(--paper)] transition-transform motion-safe:hover:-translate-y-[3px] motion-reduce:transition-none"
              href="/Login?mode=register&role=job-seeker"
            >
              Register for free <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article className="flex min-w-0 flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-[26px] transition-[transform,border-color,box-shadow] duration-[220ms] ease-out focus-within:border-[var(--green)] focus-within:shadow-[0_12px_30px_color-mix(in_srgb,var(--green)_12%,transparent)] hover:border-[var(--green)] hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--green)_14%,transparent)] motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none min-[761px]:p-9">
            <span className="text-[11px] font-bold tracking-[2px] text-[var(--green)] uppercase">For companies & HR professionals</span>
            <h3 className="mt-3.5 text-[26px] font-semibold tracking-[-1px] text-[var(--ink)]">Company</h3>
            <p className="my-5 flex min-h-[58px] items-center text-3xl leading-[1.2] font-semibold tracking-[-1px] text-[var(--green)]">Pricing coming soon</p>
            <p className="text-sm text-[var(--muted)]">
              Review candidate pools efficiently and keep your team in control.
            </p>
            <ul className="mt-7 mb-8 grid list-none gap-[13px] text-sm text-[var(--ink)]">
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Bulk CV analysis and sorting</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Matching by skills, experience, and qualifications</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Fairness-aware shortlist review</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">AI-assisted recruitment workflows</li>
              <li className="flex gap-3 before:text-[var(--green)] before:content-['✓']">Final hiring decisions made by your team</li>
            </ul>
            <Link
              className="mt-auto inline-flex items-center justify-center gap-7 rounded-lg bg-[var(--green)] px-[22px] py-4 text-sm font-semibold text-[var(--paper)] transition-transform motion-safe:hover:-translate-y-[3px] motion-reduce:transition-none"
              href="/Login?mode=register&role=company"
            >
              Register your company <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </div>
        <p className="mt-[22px] text-[11px] leading-[1.7] text-[var(--muted)]">
          Preview only. No payment is collected, and no account is created
          through this demo.
        </p>
      </div>
    </section>
  );
}
