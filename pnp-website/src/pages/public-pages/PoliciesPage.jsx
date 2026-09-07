import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import PriorityCard from "../../componentss/PriorityCard";
import ScrollReveal from "../../componentss/ScrollReveal";
import { priorities } from "../../data/priorities";

export default function PoliciesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Policies"
        title="A focused agenda — measured by what we do."
        intro="Five clear priorities backed by credible policy. Not a thousand promises, but a small set of commitments we are willing to be held to."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal
            as="div"
            className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2"
          >
            {priorities.map((p, i) => (
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
      </section>
    </PageLayout>
  );
}