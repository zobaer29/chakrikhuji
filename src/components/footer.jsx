import Link from "next/link";
import Brand from "@/components/Brand";

const links = [
  ["Who it’s for", "/#features"],
  ["How it works", "/#how-it-works"],
  ["Fairness", "/#fairness"],
  ["Pricing", "/#pricing"],
  ["FAQs", "/#faq"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12 bg-[var(--paper)]">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10">
          <div>
            <Link
              href="/#home"
              className="text-2xl font-black tracking-tight text-[var(--ink)]"
            >
              <Brand />
            </Link>
            <p className="text-xs sm:text-sm text-[var(--muted)] mt-1.5">
              AI-powered recruitment. Human-led decisions.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 sm:gap-8">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-xs sm:text-sm font-medium text-[var(--muted)] hover:text-[var(--green)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--muted)]">
          <span>© 2026 ChakriKhuji. All rights reserved.</span>
          <span>Built for both sides of hiring.</span>
        </div>
      </div>
    </footer>
  );
}
