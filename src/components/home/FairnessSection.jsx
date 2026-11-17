const fairness = [
  ['05', 'Shortlist places', 'Your HR team wants to shortlist five candidates for a role.'],
  ['08', 'Similarly strong candidates', 'Eight candidates have similarly strong qualifications against the job requirements.'],
  ['+03', 'Flagged for human review', 'The additional three are flagged for your team to review, rather than automatically rejected because of the shortlist limit.'],
];

export default function FairnessSection() {
  return (
    <section id="fairness" className="home-section features-section">
          <div className="home-container fairness-content">
            <div className="section-heading"><span className="eyebrow">Fairness-aware shortlisting</span><h2>A shortlist limit shouldn’t<br />hide a strong candidate.</h2><p>Our approach keeps similarly qualified candidates visible for human review. Here’s the idea in practice.</p></div>
            <div className="steps-grid">{fairness.map(([number, title, description]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
            <p className="scanner-note fairness-note">Illustrative example of the planned workflow. HR reviews the flagged candidates and decides whom to advance.</p>
          </div>
        </section>
  );
}
