const steps = [
  ['01', 'Start with the role', 'Job seekers bring a CV and a job description. HR teams define the role’s requirements and bring the candidate CVs they need to review.'],
  ['02', 'Understand the match', 'AI is designed to compare relevant skills, experience, and qualifications. Job seekers get resume insights; recruiters get a clearer view of their candidate pool.'],
  ['03', 'Take an informed next step', 'Use the insights to improve an application or review a shortlist. Closely matched candidates stay visible, and people make the final hiring decisions.'],
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="home-section">
          <div className="home-container">
            <div className="section-heading"><span className="eyebrow">How it works</span><h2>From CVs to clarity.<br />With people in control.</h2><p>A shared workflow for stronger applications and more informed candidate reviews.</p></div>
            <div className="steps-grid">{steps.map(([number, title, description]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>
  );
}
