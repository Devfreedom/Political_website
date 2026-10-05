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
        </div>
      </section>
    </PageLayout>
  );
}