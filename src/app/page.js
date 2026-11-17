import Navbar from '@/components/navbar.jsx';
import HybridHeroCanvas from '@/components/hero.jsx';
import LiveScanner from '@/components/LiveScanner.jsx';
import BentoFeatures from '@/components/BentoFeatures.jsx';

const steps = [
  ['01', 'Bring your resume', 'Bring your resume and the description of a role that interests you. Your experience is the starting point.'],
  ['02', 'Pick a role', 'Compare the skills a role calls for with the strengths and experience you already bring to the table.'],
  ['03', 'Look at the gaps', 'Use the insights to sharpen your resume, focus your learning, and prepare for a more confident conversation.'],
];
const questions = [
  ['Does the scanner analyze my resume today?', 'The scanner on this page is an interactive preview with a sample report. Choosing a file keeps it on your device; no resume analysis or server upload happens in this demo.'],
  ['Who is ChakriKhuji for?', 'We’re designing ChakriKhuji for people exploring their next role and hiring teams who want a clearer view of candidate experience.'],
  ['Does a match score guarantee an interview?', 'No. A score is only one signal. Experience, context, and human judgment matter, and no score can guarantee an interview or offer.'],
  ['How should I use the feedback?', 'Use it as a starting point for reflection. Describe your real experience clearly and focus on relevant skills; avoid adding qualifications you don’t have.'],
];

export default function Home() {
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <HybridHeroCanvas />
        <section id="how-it-works" className="home-section">
          <div className="home-container">
            <div className="section-heading"><span className="eyebrow">The process</span><h2>Three steps.<br />A fresh perspective.</h2><p>A simple way to look at your experience through the lens of your next opportunity.</p></div>
            <div className="steps-grid">{steps.map(([number, title, description]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>
        <BentoFeatures />
        <LiveScanner />
        <section id="faq" className="home-section faq-section"><div className="home-container faq-layout"><div className="section-heading"><span className="eyebrow">Before you start</span><h2>A few things<br />worth knowing.</h2><p>Know what to expect, and take your next step with clarity.</p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
        <section className="home-container closing-section"><div className="closing-card"><span className="eyebrow">Go on, have a look.</span><h2>Your next role might<br /><span>be closer than you think.</span></h2><p>See what a more thoughtful approach to your next role could look like.</p><a className="primary-action" href="#scanner">Explore the demo <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <footer className="site-footer home-container"><div><a className="footer-brand" href="#home">Chakri<span>Khuji</span></a><p>A clearer connection between people and opportunity.</p></div><nav aria-label="Footer navigation"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a><a href="#home">Back to top ↑</a></nav><div className="footer-bottom"><span>© 2026 ChakriKhuji</span><span>Made for the next step.</span></div></footer>
    </div>
  );
}
