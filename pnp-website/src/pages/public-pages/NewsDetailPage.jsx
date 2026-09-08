import { Link, useParams } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import { findNewsBySlug } from "../../data/news";
import NotFoundPage from "./NotFoundPage";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = findNewsBySlug(slug);

  if (!article) return <NotFoundPage />;

  return (
    <PageLayout>
      <PageHero eyebrow={`${article.category} · ${article.date}`} title={article.title} intro={article.excerpt} />

      <article className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-[16px] leading-8 text-[var(--pnp-charcoal)]">
            This public prototype currently contains the official article summary above. Full news stories will be published here when the PNP newsroom is connected to a content source.
          </p>
          <Link to="/news" className="mt-10 inline-flex text-sm font-semibold text-[var(--pnp-dark-teal)] hover:underline">
            ← All news
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
