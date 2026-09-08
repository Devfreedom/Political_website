import { Link, useParams } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import { findEventBySlug } from "../../data/events";
import NotFoundPage from "./NotFoundPage";

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = findEventBySlug(slug);

  if (!event) return <NotFoundPage />;

  return (
    <PageLayout>
      <PageHero eyebrow={`${event.day} ${event.month}`} title={event.title} intro="Event information for the Progressive Nigeria Party public programme." />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <dl className="grid gap-6 border-y border-[var(--pnp-charcoal)]/10 py-8 text-[15px] leading-7 sm:grid-cols-[9rem,1fr]">
            <dt className="font-semibold text-[var(--pnp-dark-teal)]">Date</dt>
            <dd className="text-[var(--pnp-charcoal)]">{event.day} {event.month}</dd>
            <dt className="font-semibold text-[var(--pnp-dark-teal)]">Time</dt>
            <dd className="text-[var(--pnp-charcoal)]">{event.time}</dd>
            <dt className="font-semibold text-[var(--pnp-dark-teal)]">Location</dt>
            <dd className="text-[var(--pnp-charcoal)]">{event.location}</dd>
          </dl>
          <p className="mt-8 text-[15px] leading-7 text-[var(--pnp-slate)]">
            Registration and attendance tools are not connected in this frontend prototype. Please return later for confirmed programme details.
          </p>
          <Link to="/events" className="mt-10 inline-flex text-sm font-semibold text-[var(--pnp-dark-teal)] hover:underline">
            ← All events
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
