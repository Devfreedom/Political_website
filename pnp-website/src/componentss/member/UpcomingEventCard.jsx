import { Link } from "react-router-dom";

/** UpcomingEventCard — answers "What is happening next?" */
export default function UpcomingEventCard({ event }) {
  return (
    <section
      aria-labelledby="upcoming-event-heading"
      className="flex h-full flex-col rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
        Upcoming event
      </p>
      <h2
        id="upcoming-event-heading"
        className="mt-3 font-display text-xl font-medium leading-snug"
      >
        {event.title}
      </h2>
      <dl className="mt-4 flex flex-col gap-2 text-sm">
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 font-semibold text-[var(--pnp-slate)]">Date</dt>
          <dd className="text-[var(--pnp-charcoal)]">
            {event.date} · {event.time}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 font-semibold text-[var(--pnp-slate)]">Venue</dt>
          <dd className="text-[var(--pnp-charcoal)]">{event.location}</dd>
        </div>
      </dl>
      <div className="mt-auto pt-5">
        <Link
          to="/member/events"
          className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-150 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
        >
          View events
        </Link>
      </div>
    </section>
  );
}
