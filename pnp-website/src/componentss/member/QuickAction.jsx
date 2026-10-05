import { Link } from "react-router-dom";

/** QuickAction — single compact task link for the dashboard grid. */
export default function QuickAction({ to, label, description }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between gap-4 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white px-5 py-4 transition-colors duration-150 hover:border-[var(--pnp-dark-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
    >
      <span>
        <span className="block text-sm font-semibold text-[var(--pnp-charcoal)] group-hover:text-[var(--pnp-dark-teal)]">
          {label}
        </span>
        <span className="mt-0.5 block text-[13px] leading-6 text-[var(--pnp-slate)]">
          {description}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 text-[var(--pnp-dark-teal)] transition-transform duration-150 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
