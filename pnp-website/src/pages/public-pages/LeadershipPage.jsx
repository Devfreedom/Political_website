import { Link } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import LeaderSpotlight from "../../componentss/LeaderSpotlight";
import LeaderCard from "../../componentss/LeaderCard";
import ScrollReveal from "../../componentss/ScrollReveal";
import { leadership } from "../../data/leadership";

export default function LeadershipPage() {
  const [featured, ...rest] = leadership;
  return (
    <PageLayout>
      <PageHero
        eyebrow="Leadership"
        title="The people entrusted to lead the Party."
        intro="The current National Executive Committee, elected at the founding convention in 2026."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <LeaderSpotlight leader={featured} />
        </div>
      </section>

      <section className="bg-[var(--pnp-charcoal)] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
            The National Executive
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70">
            Click any leader to read their full biography.
          </p>
          <ScrollReveal
            as="div"
            className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3"
          >
            {rest.map((l) => (
              <Link
                key={l.slug}
                to={`/leadership/${l.slug}`}
                className="block focus:outline-none"
              >
                <LeaderCard {...l} />
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}