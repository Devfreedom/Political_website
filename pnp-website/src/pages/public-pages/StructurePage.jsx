import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import StructureSection from "../../componentss/StructureSection";
import WardFinder from "../../componentss/WardFinder";
import ScrollReveal from "../../componentss/ScrollReveal";
import Button from "../../componentss/Button";

export default function StructurePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Party Structure"
        title="Built from the ward up, not the top down."
        intro="PNP is organised as a clear institutional hierarchy from the National Executive to every registered member. Our mandate flows upward from citizens — and accountability flows downward."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal as="div">
            <StructureSection />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr,1.4fr] lg:gap-12">
            <div>
              <h2 className="font-display text-2xl font-medium leading-tight text-[var(--pnp-charcoal)] md:text-3xl">
                Start where you live.
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-[var(--pnp-slate)]">
                Choose your state, LGA and ward to see your path into the
                Party. Then join, volunteer or come to a nearby event.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/chapters" variant="dark" size="md">
                  Find your local chapter
                </Button>
                <Button href="/join" variant="secondary" size="md">
                  Join PNP
                </Button>
              </div>
            </div>
            <WardFinder compact />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}