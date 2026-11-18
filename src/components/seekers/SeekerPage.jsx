export default function SeekerPage({ title, description, heading = title, children }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Job seeker workspace</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{description}</p>
      <section className="mt-8 rounded-2xl border border-dashed border-soft-line bg-surface p-8 sm:p-12" aria-label={`${title} content`}>
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{children ?? "There’s nothing to show here yet."}</p>
      </section>
    </>
  );
}
