/**
 * StatStrip — institutional counter row used for the National Reach section.
 * Renders three editorial numbers with gold dividers between them.
 */
export default function StatStrip({ items }) {
  return (
    <dl className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-2 px-6 py-8 text-center md:py-12"
        >
          <dt className="text-[10px] font-semibold tracking-[0.34em] uppercase text-[var(--pnp-gold)]/90">
            {String(i + 1).padStart(2, "0")} · {item.kicker}
          </dt>
          <dd className="font-display text-5xl font-medium leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            {item.value}
          </dd>
          <span className="mt-2 text-xs font-medium tracking-[0.28em] uppercase text-white/65">
            {item.label}
          </span>
        </div>
      ))}
    </dl>
  );
}