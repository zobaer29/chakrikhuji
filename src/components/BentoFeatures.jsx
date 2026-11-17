const features = [
  [
    "01",
    "Apply with a clearer picture.",
    "Compare your CV with a job description, identify skill gaps, check ATS compatibility, and get personalized suggestions to present your experience more clearly.",
    "For job seekers",
  ],
  [
    "02",
    "Find relevant experience faster.",
    "Analyze and sort CVs in bulk. Compare candidates against the role’s required skills, experience, and qualifications, with insights to support your team’s review.",
    "For HR professionals",
  ],
  [
    "03",
    "Keep strong candidates in view.",
    "When more candidates meet a similar standard than your shortlist allows, flag the additional candidates for human review instead of automatically rejecting them.",
    "Fairness-aware shortlisting",
  ],
  [
    "04",
    "Get help along the way.",
    "AI agents are designed to offer conversational guidance for job seekers and help recruiters with repetitive workflows, while people stay in control of decisions.",
    "AI assistance",
  ],
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.35fr] gap-12 lg:gap-16 items-start">
        {/* Intro */}
        <div className="lg:sticky lg:top-28">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            For both sides of hiring
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            Better applications.<br />
            More informed hiring.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-md">
            One platform for job seekers and HR professionals. We’re building AI tools that make recruitment faster, more transparent, and fairer—with final hiring decisions in human hands.
          </p>
        </div>

        {/* Feature List */}
        <div className="divide-y divide-[var(--line)]">
          {features.map(([number, title, description, label], index) => (
            <article
              key={number}
              className={`py-8 grid grid-cols-[32px_1fr] gap-4 items-start ${
                index === 0 ? "pt-0" : ""
              }`}
            >
              <span className="font-mono text-xs font-semibold text-[var(--green)] pt-1">
                {number}
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)]">
                    {title}
                  </h3>
                  <span className="inline-flex text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[var(--line)] text-[var(--green)] bg-[var(--paper)]">
                    {label}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
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
