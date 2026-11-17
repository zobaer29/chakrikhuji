const fairness = [
  [
    "05",
    "Shortlist places",
    "Your HR team wants to shortlist five candidates for a role.",
    false,
  ],
  [
    "08",
    "Similarly strong candidates",
    "Eight candidates have similarly strong qualifications against the job requirements.",
    false,
  ],
  [
    "+03",
    "Flagged for human review",
    "The additional three are flagged for your team to review, rather than automatically rejected because of the shortlist limit.",
    true,
  ],
];

export default function FairnessSection() {
  return (
    <section id="fairness" className="py-16 sm:py-24 bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            Fairness-aware shortlisting
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            A shortlist limit shouldn’t<br />
            hide a strong candidate.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Our approach keeps similarly qualified candidates visible for human review. Here’s the idea in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fairness.map(([number, title, description, isHighlighted]) => (
            <article
              key={number}
              className={`p-7 sm:p-8 rounded-2xl border transition-all duration-200 ${
                isHighlighted
                  ? "border-[var(--green)] bg-[var(--paper)] shadow-md ring-1 ring-[var(--green)]/20"
                  : "border-[var(--line)] bg-[var(--paper)]/50"
              }`}
            >
              <span
                className={`font-mono text-2xl font-bold ${
                  isHighlighted ? "text-[var(--green)]" : "text-[var(--ink)]"
                }`}
              >
                {number}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)] mt-6 mb-3">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-[var(--muted)] max-w-2xl leading-relaxed">
          Illustrative example of the planned workflow. HR reviews the flagged candidates and decides whom to advance.
        </p>
      </div>
    </section>
  );
}
