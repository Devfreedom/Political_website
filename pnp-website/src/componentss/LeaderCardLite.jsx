/**
 * LeaderCardLite — minimal leader card for use inside light sections.
 * Drops the tone prop and always uses light-on-charcoal text.
 */
export default function LeaderCardLite({ name, title, initials, image, imageAlt }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--pnp-dark-teal)]">
        {image ? (
          <img
            src={image}
            alt={imageAlt || `Portrait of ${name}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl font-medium tracking-tight text-white/95 md:text-8xl">
              {initials}
            </span>
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute left-5 top-5 h-6 w-6 border-l border-t border-[var(--pnp-gold)]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-[var(--pnp-gold)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--pnp-dark-teal)]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <h3 className="font-display text-xl font-medium leading-tight md:text-[22px] text-[var(--pnp-charcoal)]">
          {name}
        </h3>
        <p className="text-sm font-medium tracking-wide text-[var(--pnp-dark-teal)]">
          {title}
        </p>
      </div>
    </article>
  );
}