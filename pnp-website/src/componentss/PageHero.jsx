/**
 * PageHero — reusable editorial title block used by all non-home pages.
 * Deep teal background with a gold hairline divider above the eyebrow,
 * matching the editorial feel of the homepage hero without its scale.
 */
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden bg-[var(--pnp-dark-teal)] text-white">
      {/* faint grid texture */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      >
        <defs>
          <pattern id="pageHeroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="#E5B13A" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pageHeroGrid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {eyebrow && (
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
            <span className="h-px w-10 bg-current opacity-80" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <div className="mt-6 max-w-3xl border-l-2 border-[var(--pnp-gold)] pl-5">
            <p className="text-lg leading-8 text-white/80 md:text-xl">{intro}</p>
          </div>
        )}
      </div>
    </section>
  );
}