import Button from "./Button";

/**
 * GetInvolved — three-up ways to engage with PNP.
 * Editorial cards with thin gold corner ticks, hairline borders,
 * and an outline CTA. Uses only existing pnp.* tokens.
 */
export default function GetInvolved({ items }) {
  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-heading"
      className="bg-[var(--pnp-white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
              <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
              Get Involved
            </span>
            <h2
              id="get-involved-heading"
              className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[var(--pnp-charcoal)] md:text-4xl lg:text-5xl"
            >
              Three ways to
              <br className="hidden md:block" /> support the Party.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-7 text-[var(--pnp-slate)]">
            A party is only as strong as the people who show up for it. Pick the
            way that suits you — every form of participation matters.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col gap-5 border border-[var(--pnp-charcoal)]/10 bg-white p-8 transition-colors duration-200 hover:border-[var(--pnp-gold)]"
            >
              {/* gold corner ticks */}
              <span
                aria-hidden="true"
                className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[var(--pnp-gold)]"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 bottom-3 h-4 w-4 border-b border-r border-[var(--pnp-gold)]"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--pnp-dark-teal)]/5 text-[var(--pnp-dark-teal)] transition-colors duration-200 group-hover:bg-[var(--pnp-dark-teal)] group-hover:text-[var(--pnp-gold)]">
                  {item.icon}
                </div>
                <span className="font-display text-2xl font-medium leading-none text-[var(--pnp-gold)]/90">
                  {item.eyebrow}
                </span>
              </div>

              <h3 className="font-display text-2xl font-medium leading-tight text-[var(--pnp-charcoal)] md:text-[26px]">
                {item.title}
              </h3>

              <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
                {item.body}
              </p>

              <div className="mt-auto pt-2">
                <Button
                  href={item.cta.href}
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center"
                >
                  {item.cta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}