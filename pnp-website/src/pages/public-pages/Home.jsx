import PublicLayout from "../../componentss/layout";
import Button from "../../componentss/Button";
import SectionHeading from "../../componentss/SectionHeading";
import StatStrip from "../../componentss/StatStrip";
import PriorityCard from "../../componentss/PriorityCard";
import ManifestoPreview from "../../componentss/ManifestoPreview";
import StructureSection from "../../componentss/StructureSection";
import LeaderCard from "../../componentss/LeaderCard";
import LeaderSpotlight from "../../componentss/LeaderSpotlight";
import ElectedOfficialsStrip from "../../componentss/ElectedOfficialsStrip";
import NewsCard from "../../componentss/NewsCard";
import EventCard from "../../componentss/EventCard";
import FAQ from "../../componentss/FAQ";
import GetInvolved from "../../componentss/GetInvolved";
import HeroSlider from "../../componentss/HeroSlider";
import ScrollReveal from "../../componentss/ScrollReveal";

import { leadership } from "../../data/leadership";
import { electedOfficials } from "../../data/electedOfficials";
import { faq } from "../../data/faq";
import { getInvolved } from "../../data/getInvolved.jsx";

/* --------------------------- Static data --------------------------- */

const NATIONAL_REACH = [
  { value: "36", kicker: "States", label: "Across Nigeria" },
  { value: "774", kicker: "Local Gov't Areas", label: "Grassroots presence" },
  { value: "1", kicker: "Shared Vision", label: "Progress · Unity · Opportunity" },
];

const PRIORITIES = [
  {
    title: "Economic Opportunity",
    description:
      "A modernised economy that creates jobs, lifts productivity and rewards enterprise — anchored by credible industrial, fiscal and monetary policy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 17h16M5 14l3-4 4 3 5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Education & Skills",
    description:
      "Reform of basic, technical and vocational education so every Nigerian child leaves school equipped to learn, work and lead.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3 2 7l9 4 9-4-9-4ZM5 9v5c0 1.5 2.7 3 6 3s6-1.5 6-3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Universal primary care, a strengthened NHIA, and investment in local pharmaceutical and research capacity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 19s7-4.4 7-9.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 1 0-9 0C0 14.6 11 19 11 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    description:
      "Reliable power, modern transport corridors and digital infrastructure that connect every state to opportunity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 18h14M5 18V8l6-4 6 4v10M9 18v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Youth & Innovation",
    description:
      "A national strategy for young people — credit, training, digital identity and a direct stake in public decision-making.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3a6 6 0 1 0 5.7 8M11 3l5.7 8L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PRINCIPLES = [
  { title: "Accountable Leadership", body: "A binding commitment to transparent budgets, asset disclosure and the rule of law — at every level of government." },
  { title: "A Productive Economy", body: "Industrial and trade policy designed to build, make and export more, while supporting small businesses." },
  { title: "National Unity", body: "An inclusive, federal Nigeria where every state, religion and ethnicity has an equal stake in the project." },
  { title: "Citizen Participation", body: "Lower barriers to civic engagement and structured participation for women, youth and persons with disabilities." },
];

const LEADERS = leadership;

const NEWS = [
  { category: "Statement", date: "12 March 2026", title: "PNP outlines a five-point economic recovery plan for 2026", excerpt: "The party has published a detailed framework covering jobs, power, manufacturing, agriculture and youth enterprise.", variant: 0 },
  { category: "Policy", date: "04 March 2026", title: "Education reforms: a national skills compact with state governments", excerpt: "A new compact proposes shared standards, teacher investment and a modernised TVET curriculum across all 36 states.", variant: 1 },
  { category: "Party", date: "21 February 2026", title: "PNP inaugurates state executives in 12 additional states", excerpt: "The Party continues its nationwide organising drive, with completed ward executives in over 400 LGAs.", variant: 2 },
];

const EVENTS = [
  { day: "18", month: "Apr 2026", title: "National Policy Convention — Abuja", location: "International Conference Centre, Abuja", time: "9:00 AM — 5:00 PM" },
  { day: "02", month: "May 2026", title: "Town Hall on the Economy — Lagos", location: "Eko Hotel & Suites, Victoria Island", time: "3:00 PM — 7:00 PM" },
  { day: "21", month: "May 2026", title: "Youth & Innovation Summit — Kano", location: "Kano Business Hub, Kano", time: "10:00 AM — 4:00 PM" },
];

/* --------------------------- Page --------------------------- */

export default function Home() {
  return (
    <PublicLayout>
      {/* 2. HERO ----------------------------------------------------- */}
      <HeroSlider />

      {/* 3. NATIONAL REACH STRIP ------------------------------------- */}
      <section aria-label="National reach" className="relative bg-[var(--pnp-teal)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--pnp-gold)]/40" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--pnp-gold)]/40" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-8">
          <StatStrip items={NATIONAL_REACH} />
        </div>
      </section>

      {/* B1. ELECTED OFFICIALS STRIP ---------------------------------- */}
      <ElectedOfficialsStrip items={electedOfficials} />

      {/* 4. OUR PRIORITIES ------------------------------------------- */}
      <section
        id="policies"
        className="relative bg-[var(--pnp-white)]"
        aria-labelledby="priorities-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Our Priorities"
              title={
                <span id="priorities-heading">
                  Five commitments to
                  <br className="hidden md:block" /> a better Nigeria.
                </span>
              }
              intro="A focused agenda. Not a thousand promises — a clear set of priorities backed by credible policy and a willingness to be measured against them."
            />

            <ScrollReveal as="div" className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {PRIORITIES.map((p, i) => (
                <PriorityCard
                  key={p.title}
                  index={i + 1}
                  title={p.title}
                  description={p.description}
                  icon={p.icon}
                />
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. MANIFESTO ----------------------------------------------- */}
      <section
        id="manifesto"
        className="relative bg-[var(--pnp-white)]"
        aria-labelledby="manifesto-heading"
      >
        <div className="border-y border-[var(--pnp-charcoal)]/10 bg-gradient-to-b from-white to-[#F1F4F2]/40">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <SectionHeading
              eyebrow="The Manifesto"
              title={
                <span id="manifesto-heading">
                  A covenant with the
                  <br className="hidden md:block" /> Nigerian people.
                </span>
              }
              intro="Our 2026 manifesto sets out clear principles — not vague aspirations. Below is a preview; the full document details our policy commitments across every sector."
            />

            <ScrollReveal as="div" className="mt-14">
              <ManifestoPreview principles={PRINCIPLES} />
            </ScrollReveal>

            <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[var(--pnp-charcoal)]/10 pt-8 md:flex-row md:items-center">
              <p className="max-w-xl text-[15px] leading-7 text-[var(--pnp-slate)]">
                The full manifesto is available as a downloadable document and
                in accessible formats on request.
              </p>
              <Button href="#manifesto-full" variant="dark" size="md">
                Read the complete manifesto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTY STRUCTURE ------------------------------------------ */}
      <section
        id="structure"
        className="bg-[var(--pnp-white)]"
        aria-labelledby="structure-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr,1.4fr] lg:gap-20">
            <SectionHeading
              eyebrow="Party Structure"
              title={
                <span id="structure-heading">
                  Built from the ward up,
                  <br className="hidden md:block" /> not the top down.
                </span>
              }
              intro="PNP is organised as a clear institutional hierarchy from the National Executive to every registered member. Our mandate flows upward from citizens — and accountability flows downward."
            />
            <ScrollReveal as="div">
              <StructureSection />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP ----------------------------------------------- */}
      <section
        id="about"
        className="bg-[var(--pnp-charcoal)] text-white"
        aria-labelledby="leadership-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              light
              eyebrow="Leadership"
              title={
                <span id="leadership-heading">
                  The people entrusted
                  <br className="hidden md:block" /> to lead the Party.
                </span>
              }
              intro="The current National Executive Committee was elected by the founding convention in 2026. Real photographs and biographies will be inserted as the leadership is confirmed publicly."
            />
            <Button href="#leadership-full" variant="secondary-light" size="md">
              View complete leadership
            </Button>
          </div>

          {/* B2. FEATURED LEADER SPOTLIGHT ------------------------------ */}
          <div className="mt-14">
            <LeaderSpotlight leader={LEADERS[0]} />
          </div>

          <ScrollReveal as="div" className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {LEADERS.slice(1).map((l) => (
              <LeaderCard key={l.name} {...l} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 8. NEWS ----------------------------------------------------- */}
      <section
        id="news"
        className="bg-[var(--pnp-white)]"
        aria-labelledby="news-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Latest News"
              title={<span id="news-heading">Statements & updates.</span>}
              intro="Official statements, policy releases and news from the Party's national secretariat and state chapters."
            />
            <Button href="#news-all" variant="ghost" size="md">
              View all news
            </Button>
          </div>

          <ScrollReveal as="div" className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {NEWS.map((n, i) => (
              <NewsCard
                key={n.title}
                category={n.category}
                date={n.date}
                title={n.title}
                excerpt={n.excerpt}
                variant={i}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 9. EVENTS --------------------------------------------------- */}
      <section
        id="events"
        className="bg-[var(--pnp-white)]"
        aria-labelledby="events-heading"
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Upcoming Events"
              title={<span id="events-heading">Meet us in your state.</span>}
              intro="Conventions, town halls, policy dialogues and membership drives across the country. Open to all Nigerians."
            />
            <Button href="#events-all" variant="ghost" size="md">
              Full event calendar
            </Button>
          </div>

          <ScrollReveal as="div" className="mt-10 border-t border-[var(--pnp-charcoal)]/10">
            {EVENTS.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* B3. FAQ --------------------------------------------------- */}
      <FAQ items={faq} />

      {/* GET INVOLVED -------------------------------------------- */}
      <GetInvolved items={getInvolved} />

      {/* 10. JOIN PNP CTA ------------------------------------------- */}
      <section
        id="join"
        aria-labelledby="join-heading"
        className="relative overflow-hidden bg-[var(--pnp-dark-teal)] text-white"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[520px] w-[520px] opacity-[0.08]"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="98" fill="none" stroke="#E5B13A" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#E5B13A" strokeWidth="1" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr,1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                <span className="h-px w-10 bg-current opacity-80" aria-hidden="true" />
                Join PNP
              </span>
              <h2
                id="join-heading"
                className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              >
                A country is not built
                <br className="hidden md:block" /> from the balcony.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Join thousands of Nigerians — in every state — building a
                political party worthy of the country's promise. Membership is
                free, open and rooted in your ward.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#membership" variant="primary" size="lg">
                  Become a member
                </Button>
                <Button href="#volunteer" variant="ghost-light" size="lg" trailingIcon={false}>
                  Or volunteer with us →
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-medium leading-tight md:text-2xl">
                What you get as a member.
              </h3>
              <ul className="mt-6 flex flex-col gap-4 text-[15px] leading-7 text-white/85">
                {[
                  "A vote in selecting your ward and LGA executives.",
                  "Invitations to conventions, policy dialogues and town halls.",
                  "A direct line to your elected representatives.",
                  "Regular policy briefings and the Party's quarterly report.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--pnp-gold)]/15 text-[var(--pnp-gold)]">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M2 5.5 4.5 8 9 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}