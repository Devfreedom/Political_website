import SectionHeading from "./SectionHeading";
import Button from "./Button";

/**
 * CommunityStories — Nigeria-focused storytelling WITHOUT photography.
 * Restrained editorial cards in existing teal/gold language.
 *
 * NOTE — photography slots (not yet supplied, intentionally unreferenced):
 *   src/assets/communities/youth-enterprise.jpg      → Youth & Enterprise card
 *   src/assets/communities/learning-skills.jpg       → Learning & Skills card
 *   src/assets/communities/health-community.jpg      → Health & Community card
 * Add 3 landscape JPGs (~1600px) and render them above each card body
 * with object-cover + gold hairline. No fake paths are referenced until
 * the files exist.
 */
const STORIES = [
  {
    tag: "Lagos · Kano",
    title: "Youth & enterprise",
    body: "Market traders, tech trainees and apprentices — young Nigerians building livelihoods ward by ward.",
  },
  {
    tag: "Enugu · Kwara",
    title: "Learning & skills",
    body: "Classrooms, workshops and TVET centres where skills become jobs and jobs become stability.",
  },
  {
    tag: "Rivers · FCT",
    title: "Health & community",
    body: "Primary-care visits, community meetings and neighbours looking out for one another.",
  },
];

export default function CommunityStories() {
  return (
    <section
      aria-labelledby="community-heading"
      className="border-y border-[var(--pnp-charcoal)]/10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Nigeria in focus"
          title={
            <span id="community-heading">
              People first, <br className="hidden md:block" /> in every ward.
            </span>
          }
          intro="Policy starts with people. These are the communities our five priorities serve — from markets to classrooms to clinics."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {STORIES.map((s) => (
            <article
              key={s.title}
              className="relative flex flex-col gap-4 border border-[var(--pnp-charcoal)]/10 bg-[var(--pnp-white)] p-8"
            >
              <span
                aria-hidden="true"
                className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[var(--pnp-gold)]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[var(--pnp-gold)]"
              />
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--pnp-dark-teal)]">
                {s.tag}
              </p>
              <h3 className="font-display text-2xl font-medium leading-tight text-[var(--pnp-charcoal)]">
                {s.title}
              </h3>
              <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[var(--pnp-charcoal)]/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-xl text-[15px] leading-7 text-[var(--pnp-slate)]">
            Photography of real communities will sit here. Until then, every
            story above links to action below.
          </p>
          <Button href="/chapters" variant="dark" size="md">
            Explore your ward
          </Button>
        </div>
      </div>
    </section>
  );
}
