import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import EventCard from "../../componentss/EventCard";
import ScrollReveal from "../../componentss/ScrollReveal";
import { events } from "../../data/events";

export default function EventsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Upcoming Events"
        title="Conventions, town halls and policy dialogues."
        intro="Open to all Nigerians. Conventions, town halls, policy dialogues and membership drives across the country."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal
            as="div"
            className="border-t border-[var(--pnp-charcoal)]/10"
          >
            {events.map((e) => (
              <EventCard key={e.slug} {...e} />
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}