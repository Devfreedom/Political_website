import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import LeaderSpotlight from "../../componentss/LeaderSpotlight";
import LeaderCard from "../../componentss/LeaderCard";
import ScrollReveal from "../../componentss/ScrollReveal";
import { leadership } from "../../data/leadership";

export default function AboutPage() {
  const [featured, ...rest] = leadership;
  return (
    <PageLayout>
      <PageHero
        eyebrow="About PNP"
        title="A national political party, built from the ward up."
        intro="The Progressive Nigeria Party is a new political movement committed to accountable leadership, economic opportunity, national unity and meaningful citizen participation. This page brings together the people entrusted with leading the Party."
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
            Members of the National Executive Committee elected at the founding convention.
          </p>
          <ScrollReveal
            as="div"
            className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3"
          >
            {rest.map((l) => (
              <LeaderCard key={l.slug} {...l} />
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}