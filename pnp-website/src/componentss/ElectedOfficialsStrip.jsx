/**
 * ElectedOfficialsStrip — distinct full-width teal band.
 * Four translucent-panel cards with circular icon, big number, label.
 * Uses bg-pnp-white/10 panels to match the hero's translucent-circle treatment.
 * Numbers animate from 0 on first viewport entry.
 */
import CountUp from "./CountUp";
const ICONS = {
  "Governors": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 19h16M5 19V8l6-4 6 4v11M9 19v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Senators": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 18h16M5 18l3-12h6l3 12M8 6l-1 12M14 6l1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "House of Representatives": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 11h16M3 11V8h16v3M5 19V11M17 19V11M9 19v-4h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "State Assembly Members": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 3 3 7v8l8 4 8-4V7l-8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11 11v8M3 7l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ElectedOfficialsStrip({ items }) {
  return (
    <section
      aria-label="PNP elected officials"
      className="relative bg-pnp-teal"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--pnp-gold)]/40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--pnp-gold)]/40" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col items-start gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
              <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
              Elected Officials
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-pnp-white md:text-4xl">
              PNP Elected Officials
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Illustrative prototype counts shown for layout purposes. PNP is a
            new political party and these figures are placeholder reference
            values, not real electoral claims.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-md border border-white/10 bg-pnp-white/10 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-pnp-white/15"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-pnp-white/20 bg-pnp-white/10 text-pnp-gold">
                {ICONS[item.label] ?? null}
              </div>
              <p className="mt-6 font-display text-5xl font-medium leading-none tracking-tight text-pnp-white md:text-6xl">
                <CountUp to={item.count} duration={1200} />
              </p>
              <p className="mt-3 text-xs font-medium tracking-[0.18em] uppercase text-white/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}