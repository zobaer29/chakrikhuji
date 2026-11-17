export default function ClosingSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="text-center px-6 py-14 sm:py-20 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            Smarter hiring · Human decisions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4 max-w-2xl mx-auto">
            Stronger applications.<br />
            <span className="text-[var(--green)]">Fairer opportunities.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-lg mx-auto mb-8">
            Explore our vision for AI-powered recruitment that works for job seekers and hiring teams.
          </p>
          <a
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-105 active:scale-[0.98] transition-all shadow-sm"
            href="#scanner"
          >
            <span>Explore the sample report</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
