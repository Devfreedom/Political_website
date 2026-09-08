import Button from "./Button";

/**
 * LeaderSpotlight — opening element of the Leadership section.
 * Two-thirds banner: large portrait + name/title/bio + "Read full biography".
 * Dark teal background with the hero's restrained arc/circle motif.
 * If `leader.image` is provided, renders the portrait photo (object-cover);
 * otherwise falls back to a giant initials monogram.
 */
export default function LeaderSpotlight({ leader }) {
  return (
    <article className="relative isolate overflow-hidden rounded-md border border-white/10 bg-pnp-dark-teal">
      {/* Reused hero motif: concentric arcs */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] opacity-[0.08]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="#E5B13A" strokeWidth="1" />
      </svg>

      <div className="relative grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[5fr,7fr]">
        {/* Portrait side */}
        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-pnp-charcoal lg:aspect-auto">
          {/* Subtle institutional pattern */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 125"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="spotlight-grid"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <path d="M14 0H0V14" fill="none" stroke="rgba(229,177,58,0.08)" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100" height="125" fill="url(#spotlight-grid)" />
          </svg>

          {/* Portrait OR initials */}
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.imageAlt || `Portrait of ${leader.name}`}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top aspect-[3/4]"
            />
          ) : (
            <div className="relative flex flex-col items-center">
              <span className="font-display text-[140px] font-medium leading-none tracking-tight text-white/95 md:text-[180px]">
                {leader.initials}
              </span>
              <span className="mt-4 text-[10px] font-semibold tracking-[0.4em] uppercase text-[var(--pnp-gold)]">
                Featured · National Chairperson
              </span>
            </div>
          )}

          <span aria-hidden="true" className="absolute left-6 top-6 h-7 w-7 border-l border-t border-[var(--pnp-gold)]" />
          <span aria-hidden="true" className="absolute right-6 bottom-6 h-7 w-7 border-b border-r border-[var(--pnp-gold)]" />

          {/* Featured caption sits beneath the photo */}
          {leader.image && (
            <span className="absolute bottom-6 left-6 right-6 text-center text-[10px] font-semibold tracking-[0.4em] uppercase text-[var(--pnp-gold)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              Featured · National Chairperson
            </span>
          )}
        </div>

        {/* Bio side */}
        <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
            <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
            Featured Leader
          </span>

          <div>
            <h3 className="font-display text-3xl font-medium leading-tight tracking-tight text-pnp-white md:text-4xl lg:text-5xl">
              {leader.name}
            </h3>
            <p className="mt-3 text-sm font-medium tracking-[0.18em] uppercase text-pnp-white/70">
              {leader.title} · {leader.tenure}
            </p>
          </div>

          {leader.bio && (
            <p className="max-w-xl text-[15px] leading-7 text-pnp-white/80 md:text-base md:leading-8">
              {leader.bio}
            </p>
          )}

          <div>
            <Button
              href={
                leader.slug
                  ? `/leadership/${leader.slug}`
                  : `/leadership/${leader.id}`
              }
              variant="primary"
              size="md"
            >
              Read full biography
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}