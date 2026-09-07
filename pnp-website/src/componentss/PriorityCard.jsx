/**
 * PriorityCard — editorial split panel used in the "Our Priorities" section.
 * Index controls the asymmetric gold numeral.
 */
export default function PriorityCard({ index, title, description, icon }) {
  return (
    <article
      className="group relative flex flex-col gap-5 border-t border-[var(--pnp-charcoal)]/10 pb-8 pt-7 transition-colors duration-200 hover:border-[var(--pnp-gold)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--pnp-dark-teal)]/5 text-[var(--pnp-dark-teal)] transition-colors duration-200 group-hover:bg-[var(--pnp-dark-teal)] group-hover:text-[var(--pnp-gold)]">
          {icon}
        </div>
        <span className="font-display text-3xl font-medium leading-none tracking-tight text-[var(--pnp-gold)]/90 md:text-4xl">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-display text-2xl font-medium leading-tight text-[var(--pnp-charcoal)] md:text-[28px]">
        {title}
      </h3>

      <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
        {description}
      </p>
    </article>
  );
}