import { Link } from "react-router-dom";

/**
 * EventCard — upcoming event with date block, location and title.
 */
export default function EventCard({ day, month, title, location, time, slug }) {
  return (
    <article className="group flex flex-col gap-5 border-t border-[var(--pnp-charcoal)]/10 py-7 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-0 sm:border-r sm:border-[var(--pnp-charcoal)]/10 sm:pr-6">
        <span className="font-display text-4xl font-medium leading-none tracking-tight text-[var(--pnp-dark-teal)] md:text-5xl">
          {day}
        </span>
        <span className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)] sm:mt-2">
          {month}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-display text-xl font-medium leading-tight text-[var(--pnp-charcoal)] md:text-[22px]">
          {title}
        </h3>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--pnp-slate)]">
          <span className="inline-flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 12s5-4.2 5-7.5A5 5 0 0 0 2 4.5C2 7.8 7 12 7 12Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="4.7" r="1.7" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            {location}
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M7 4v3.2l2 1.2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            {time}
          </span>
        </div>
      </div>

      <Link
        to={`/events/${slug}`}
        className="inline-flex items-center gap-2 self-start text-sm font-semibold tracking-wide text-[var(--pnp-dark-teal)] sm:self-center"
      >
        View event
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </article>
  );
}
