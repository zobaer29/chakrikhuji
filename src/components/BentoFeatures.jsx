const features = [
  ["01", "Apply with a clearer picture.", "Compare your CV with a job description, identify skill gaps, check ATS compatibility, and get personalized suggestions to present your experience more clearly.", "For job seekers"],
  ["02", "Find relevant experience faster.", "Analyze and sort CVs in bulk. Compare candidates against the role’s required skills, experience, and qualifications, with insights to support your team’s review.", "For HR professionals"],
  ["03", "Keep strong candidates in view.", "When more candidates meet a similar standard than your shortlist allows, flag the additional candidates for human review instead of automatically rejecting them.", "Fairness-aware shortlisting"],
  ["04", "Get help along the way.", "AI agents are designed to offer conversational guidance for job seekers and help recruiters with repetitive workflows, while people stay in control of decisions.", "AI assistance"],
];
export default function BentoFeatures() {
  return (
    <section id="features" className="home-section features-section">
      <div className="home-container">
        <div className="feature-intro">
          <span className="eyebrow">For both sides of hiring</span>
          <h2>Better applications.<br />More informed hiring.</h2>
          <p>One platform for job seekers and HR professionals. We’re building AI tools that make recruitment faster, more transparent, and fairer—with final hiring decisions in human hands.</p>
        </div>
        <div className="feature-list">
          {features.map(([number, title, description, label]) => (
            <article key={number}><span className="feature-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="feature-label">{label}</span></article>
          ))}
        </div>
      </div>
    </section>
  );
}
