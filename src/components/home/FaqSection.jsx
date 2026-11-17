const questions = [
  ['Is Chakri Khuji free for job seekers?', 'Yes. The job seeker plan is free. Companies and HR teams will have a separate plan, with pricing announced before launch. The website is currently a preview and registration is not connected yet.'],
  ['Who is Chakri Khuji for?', 'Chakri Khuji is being built for two groups: job seekers who want to improve their applications, and HR professionals who need to review and match candidate CVs efficiently.'],
  ['How will it help improve my CV?', 'The planned tools compare a CV with a job description, identify skill gaps, check compatibility with applicant tracking systems (ATS), and suggest personalized improvements. Suggestions should help you describe your real experience clearly.'],
  ['What is fairness-aware shortlisting?', 'If a shortlist has five places but eight candidates have similarly strong qualifications, the system is designed to flag the additional three for human review instead of automatically rejecting them. This supports a more thoughtful review; it does not guarantee that every hiring outcome is fair.'],
  ['Does AI make the final hiring decision?', 'No. AI supports analysis, matching, and workflows. HR professionals review the evidence and make the final shortlisting and hiring decisions. A match score does not guarantee an interview or job offer.'],
  ['What do the AI agents help with?', 'The planned AI agents provide conversational assistance for job seekers and recruiters, with guidance on resume improvements, role requirements, and recruitment workflows.'],
  ['Can I use these features today?', 'This website currently presents the platform concept and an interactive sample report. The preview does not upload or analyze your CV. Live ATS checks, bulk CV analysis, fairness-aware shortlisting, AI agents, and account access are not connected yet.'],
];

export default function FaqSection() {
  return (
    <section id="faq" className="home-section faq-section"><div className="home-container faq-layout"><div className="section-heading"><span className="eyebrow">Questions, answered</span><h2>Know what’s behind<br />the match.</h2><p>Understand who the platform serves, how it supports decisions, and what’s available in this preview.</p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
  );
}
