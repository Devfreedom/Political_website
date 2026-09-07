import Button from "./Button";

/**
 * ComingSoon — small placeholder used for routes that have a CTA in the nav
 * but no full implementation yet (volunteer, donate, register). Visually
 * consistent with the rest of the site; honest about its placeholder status.
 */
export default function ComingSoon({ title, description }) {
  return (
    <section className="bg-[var(--pnp-white)]">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
          <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
          Coming Soon
        </span>
        <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-[var(--pnp-charcoal)] md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--pnp-slate)]">
          {description}
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
          This page is a prototype placeholder — no real submission yet.
        </p>
        <div className="mt-10">
          <Button href="/" variant="dark" size="md">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}