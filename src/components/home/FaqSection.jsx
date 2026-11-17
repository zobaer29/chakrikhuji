const questions = [
  [
    "Is Chakri Khuji free for job seekers?",
    "Yes. The job seeker plan is free. Companies and HR teams will have a separate plan, with pricing announced before launch. The website is currently a preview and registration is not connected yet.",
  ],
  [
    "Who is Chakri Khuji for?",
    "Chakri Khuji is being built for two groups: job seekers who want to improve their applications, and HR professionals who need to review and match candidate CVs efficiently.",
  ],
  [
    "How will it help improve my CV?",
    "The planned tools compare a CV with a job description, identify skill gaps, check compatibility with applicant tracking systems (ATS), and suggest personalized improvements. Suggestions should help you describe your real experience clearly.",
  ],
  [
    "What is fairness-aware shortlisting?",
    "If a shortlist has five places but eight candidates have similarly strong qualifications, the system is designed to flag the additional three for human review instead of automatically rejecting them. This supports a more thoughtful review; it does not guarantee that every hiring outcome is fair.",
  ],
  [
    "Does AI make the final hiring decision?",
    "No. AI supports analysis, matching, and workflows. HR professionals review the evidence and make the final shortlisting and hiring decisions. A match score does not guarantee an interview or job offer.",
  ],
  [
    "What do the AI agents help with?",
    "The planned AI agents provide conversational assistance for job seekers and recruiters, with guidance on resume improvements, role requirements, and recruitment workflows.",
  ],
  [
    "Can I use these features today?",
    "This website currently presents the platform concept and an interactive sample report. The preview does not upload or analyze your CV. Live ATS checks, bulk CV analysis, fairness-aware shortlisting, AI agents, and account access are not connected yet.",
  ],
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        {/* Intro */}
        <div className="lg:sticky lg:top-28">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            Questions, answered
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            Know what’s behind<br />
            the match.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-md">
            Understand who the platform serves, how it supports decisions, and what’s available in this preview.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-[var(--line)]">
          {questions.map(([question, answer]) => (
            <details
              key={question}
              className="group py-5 transition-colors focus-within:outline-none"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none text-base sm:text-lg font-semibold text-[var(--ink)] hover:text-[var(--green)] transition-colors">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="text-xl sm:text-2xl text-[var(--green)] font-light transition-transform duration-200 group-open:rotate-45 shrink-0"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed pr-6">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
