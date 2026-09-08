import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import NewsCard from "../../componentss/NewsCard";
import ScrollReveal from "../../componentss/ScrollReveal";
import { news } from "../../data/news";

export default function NewsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Latest News"
        title="Statements, policy releases and Party updates."
        intro="Official statements, policy releases and news from the Party's national secretariat and state chapters."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal
            as="div"
            className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {news.map((n, i) => (
              <NewsCard
                key={n.slug}
                category={n.category}
                date={n.date}
                title={n.title}
                excerpt={n.excerpt}
                slug={n.slug}
                variant={i % 3}
              />
            ))}
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
