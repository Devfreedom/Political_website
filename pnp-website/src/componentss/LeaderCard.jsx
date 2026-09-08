/**
 * LeaderCard — editorial portrait card for party leadership.
 * If `image` is provided, renders a real portrait photo with object-cover.
 * Otherwise falls back to the SVG initials monogram.
 * `tone` controls the text colour treatment:
 *  - "light" (default): white name + white/70 labels — for dark sections
 *  - "dark":              charcoal name + dark-teal title — for light sections
 */
export default function LeaderCard({
  name,
  title,
  tenure,
  initials,
  image,
  imageAlt,
  tone = "light",
}) {
  const isLight = tone === "light";

  const nameColor = isLight ? "text-pnp-white" : "text-[var(--pnp-charcoal)]";
  const titleColor = isLight
    ? "text-pnp-white/70"
    : "text-[var(--pnp-dark-teal)]";
  const tenureColor = isLight ? "text-pnp-white/60" : "text-[var(--pnp-slate)]";

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--pnp-dark-teal)]">
        {/* Subtle institutional pattern (always present, beneath photo or initials) */}
        <svg
          viewBox="0 0 100 125"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={`grid-${initials}`}
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M14 0H0V14"
                fill="none"
                stroke="rgba(229,177,58,0.08)"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100" height="125" fill={`url(#grid-${initials})`} />
        </svg>

        {/* Portrait OR initials */}
        {image ? (
          <img
            src={image}
            alt={imageAlt || `Portrait of ${name}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top aspect-[3/4]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl font-medium tracking-tight text-white/95 md:text-8xl">
              {initials}
            </span>
          </div>
        )}

        {/* Gold corner marks */}
        <span
          aria-hidden="true"
          className="absolute left-5 top-5 h-6 w-6 border-l border-t border-[var(--pnp-gold)]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-[var(--pnp-gold)]"
        />

        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--pnp-dark-teal)]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <h3
          className={`font-display text-xl font-medium leading-tight md:text-[22px] ${nameColor}`}
        >
          {name}
        </h3>
        <p className={`text-sm font-medium tracking-wide ${titleColor}`}>
          {title}
        </p>
        {tenure && (
          <p
            className={`mt-1 text-xs tracking-[0.18em] uppercase ${tenureColor}`}
          >
            {tenure}
          </p>
        )}
      </div>
    </article>
  );
}