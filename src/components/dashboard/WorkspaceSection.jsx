export default function WorkspaceSection({
  title,
  description,
  workspace,
  features,
}) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
        {workspace}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        {description}
      </p>
      <p className="mt-6 inline-flex rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
        Preview · Features are not connected yet
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <section
            key={feature.title}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h2 className="text-base font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              {feature.description}
            </p>
            {feature.title === "Learning resources" && (
              <a
                href="https://roadmap.sh/roadmaps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-brand underline underline-offset-4"
              >
                Explore roadmap.sh ↗
              </a>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
