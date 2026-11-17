import Link from "next/link";

const links = [
  ["Who it’s for", "/#features"],
  ["How it works", "/#how-it-works"],
  ["Fairness", "/#fairness"],
  ["Pricing", "/#pricing"],
  ["FAQs", "/#faq"],
];

export default function Footer() {
  return (
    <footer className="site-footer home-container">
      <div>
        <Link className="footer-brand" href="/#home">
          Chakri<span>Khuji</span>
        </Link>
        <p>AI-powered recruitment. Human-led decisions.</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>© 2026 ChakriKhuji</span>
        <span>Built for both sides of hiring.</span>
      </div>
    </footer>
  );
}
