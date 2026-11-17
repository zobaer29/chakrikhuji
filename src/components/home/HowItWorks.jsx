const steps = [
  [
    "01",
    "Start with the role",
    "Job seekers bring a CV and a job description. HR teams define the role’s requirements and bring the candidate CVs they need to review.",
  ],
  [
    "02",
    "Understand the match",
    "AI is designed to compare relevant skills, experience, and qualifications. Job seekers get resume insights; recruiters get a clearer view of their candidate pool.",
  ],
  [
    "03",
    "Take an informed next step",
    "Use the insights to improve an application or review a shortlist. Closely matched candidates stay visible, and people make the final hiring decisions.",
  ],
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            From CVs to clarity.<br />
            With people in control.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            A shared workflow for stronger applications and more informed candidate reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(([number, title, description]) => (
            <article
              key={number}
              className="relative p-7 sm:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--green)] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[var(--green)]">
                  {number}
                </span>
                <span
                  className="text-lg text-[var(--green)] select-none"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)] mb-3">
                  {title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
