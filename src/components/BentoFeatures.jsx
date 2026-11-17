const features = [
  ["01", "See what carries over.", "Your previous role may look different on paper. The skills you built there could still be exactly what a new team needs.", "Transferable skills"],
  ["02", "Know what to work on.", "Separate the requirements you already meet from the ones worth learning. Give your next step a little more direction.", "Skill gaps"],
  ["03", "Have a better conversation.", "Use a closer reading of your experience to prepare specific examples for an application or interview.", "Interview preparation"],
];
export default function BentoFeatures() {
  return <section id="features" className="home-section features-section"><div className="home-container"><div className="feature-intro"><span className="eyebrow">What we’re building</span><h2>More useful than<br />another score.</h2><p>A number can start a conversation.<br />Understanding the reasons takes it further.</p></div><div className="feature-list">{features.map(([number, title, description, label]) => <article key={number}><span className="feature-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="feature-label">{label}</span></article>)}</div></div></section>;
}
