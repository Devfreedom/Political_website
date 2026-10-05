/**
 * ManifestoPreview — asymmetric editorial composition with a pulled quote
 * and a numbered list of policy principles.
 */
export default function ManifestoPreview({ principles }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Left — pulled editorial statement */}
      <div className="lg:col-span-5">
        <figure className="relative border-l-2 border-[var(--pnp-gold)] pl-6">
          <blockquote className="font-display text-2xl leading-snug text-[var(--pnp-charcoal)] md:text-[28px] md:leading-[1.25]">
            “Our manifesto is our commitment to Nigerians — a clear,
            accountable plan for an economy that works, a nation that holds
            together, and a democracy that listens.”
          </blockquote>
          <figcaption className="mt-6 text-xs font-medium tracking-[0.28em] uppercase text-[var(--pnp-slate)]">
            — The PNP Manifesto, 2026
          </figcaption>
        </figure>
      </div>

      {/* Right — principles list */}
      <ol className="lg:col-span-7">
        {principles.map((p, i) => (
          <li
            key={p.title}
            className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 border-b border-[var(--pnp-charcoal)]/10 py-5 last:border-b-0"
          >
            <span className="font-display text-xl font-medium leading-tight text-[var(--pnp-gold)] md:text-2xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="font-display text-lg font-medium text-[var(--pnp-charcoal)] md:text-xl">
                {p.title}
              </h4>
              <p className="mt-1 text-[15px] leading-7 text-[var(--pnp-slate)]">
                {p.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}