import { Link } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import StructureSection from "../../componentss/StructureSection";
import WardFinder from "../../componentss/WardFinder";

/**
 * ChaptersPage — frontend placeholder for State → LGA → Ward discovery.
 * Uses static sample data only. No backend, no real register.
 */
export default function ChaptersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Local chapters"
        title="Find your local chapter."
        intro="PNP is built from the ward up. Trace your path from state to ward, then join, volunteer or attend a nearby event."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <StructureSection />

          <div className="mt-14">
            <WardFinder />
          </div>

          <p className="mt-6 text-[14px] leading-7 text-[var(--pnp-slate)]">
            Sample data for demonstration. Chapter contacts and meeting venues
            will be published by state chapters. No real membership data is
            stored on this page.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Join PNP
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              See events near you
            </Link>
            <Link
              to="/voters"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-[var(--pnp-teal)] underline-offset-4 transition-colors duration-200 hover:text-[var(--pnp-dark-teal)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Voter information →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
