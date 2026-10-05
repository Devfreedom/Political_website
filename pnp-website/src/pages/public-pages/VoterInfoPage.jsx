import { Link } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import SectionHeading from "../../componentss/SectionHeading";

const CARDS = [
  {
    title: "Register to vote",
    body: "Registration is run by INEC through continuous voter registration (CVR) — in person at INEC centres. PNP does not register voters on this site.",
    points: ["Nigerian citizen", "Aged 18 and above", "Register in person at INEC"],
  },
  {
    title: "Your PVC",
    body: "The Permanent Voter Card is collected in person after registration. Keep it safe — it is required to vote on election day.",
    points: ["Collect in person", "Check transfer windows", "Report loss to INEC"],
  },
  {
    title: "On election day",
    body: "Confirm your polling unit before election day, arrive early with your PVC, and follow INEC officials' guidance at the unit.",
    points: ["Confirm polling unit", "Bring your PVC", "Follow officials' guidance"],
  },
];

/**
 * VoterInfoPage — public voter-information entry point (prototype).
 * General information only. No registration processing, no fake INEC flows.
 */
export default function VoterInfoPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Voter information"
        title="Your vote starts here."
        intro="General guidance on registration, PVCs and elections. Official registration is handled by INEC — links below leave the PNP site."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="The basics"
            title={<span>Three things every voter should know.</span>}
            intro="Simple, non-partisan information. For anything official, always use INEC channels."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {CARDS.map((c) => (
              <article
                key={c.title}
                className="relative flex flex-col gap-4 border border-[var(--pnp-charcoal)]/10 bg-white p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[var(--pnp-gold)]"
                />
                <h3 className="font-display text-2xl font-medium leading-tight text-[var(--pnp-charcoal)]">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
                  {c.body}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[14px] leading-6 text-[var(--pnp-charcoal)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pnp-gold)]"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-md border border-[var(--pnp-dark-teal)]/15 bg-[var(--pnp-dark-teal)]/5 p-8 md:p-10">
            <h3 className="font-display text-xl font-medium text-[var(--pnp-charcoal)] md:text-2xl">
              Official resources
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[var(--pnp-slate)]">
              These links go to the Independent National Electoral Commission.
              PNP does not process voter registration.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-[15px] font-medium sm:flex-row sm:flex-wrap sm:gap-x-8">
              <li>
                <a
                  href="https://www.inecnigeria.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pnp-dark-teal)] underline underline-offset-4 hover:text-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
                >
                  INEC — inecnigeria.org ↗
                </a>
              </li>
              <li>
                <a
                  href="https://cvr.inecnigeria.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pnp-dark-teal)] underline underline-offset-4 hover:text-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
                >
                  Voter registration portal ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/chapters"
              className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Find your local chapter
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Join PNP
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
