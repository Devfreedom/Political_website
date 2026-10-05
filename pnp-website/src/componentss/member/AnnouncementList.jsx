import { Link } from "react-router-dom";

/** AnnouncementList — 2–3 recent party updates with link to the full list. */
export default function AnnouncementList({ items }) {
  return (
    <section
      aria-labelledby="announcements-heading"
      className="flex h-full flex-col rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="announcements-heading"
          className="font-display text-xl font-medium leading-tight"
        >
          Recent announcements
        </h2>
        <Link
          to="/member/announcements"
          className="shrink-0 text-sm font-semibold text-[var(--pnp-dark-teal)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
        >
          View all
        </Link>
      </div>
      <ul className="mt-4 flex flex-col divide-y divide-[var(--pnp-charcoal)]/10">
        {items.map((a) => (
          <li key={a.title} className="py-3 first:pt-0 last:pb-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
              {a.category} · {a.date}
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-[var(--pnp-charcoal)]">
              {a.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
