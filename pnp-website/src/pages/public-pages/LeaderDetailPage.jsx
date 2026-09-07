import { Link, useParams } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import Button from "../../componentss/Button";
import ScrollReveal from "../../componentss/ScrollReveal";
import LeaderCardLite from "../../componentss/LeaderCardLite";
import { findLeaderBySlug, leadership } from "../../data/leadership";
import NotFoundPage from "./NotFoundPage";

export default function LeaderDetailPage() {
  const { slug } = useParams();
  const leader = findLeaderBySlug(slug);

  if (!leader) {
    return <NotFoundPage />;
  }

  const others = leadership.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <PageLayout>
      <PageHero eyebrow={leader.title} title={leader.name} intro={leader.bio} />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr,2fr]">
            <aside className="md:sticky md:top-28 md:self-start">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--pnp-dark-teal)]">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.imageAlt}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl font-medium tracking-tight text-white/95 md:text-8xl">
                      {leader.initials}
                    </span>
                  </div>
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 h-6 w-6 border-l border-t border-[var(--pnp-gold)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-[var(--pnp-gold)]"
                />
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-y-4 text-sm">
                {leader.region && (
                  <>
                    <dt className="text-[var(--pnp-slate)]">Region</dt>
                    <dd className="font-medium text-[var(--pnp-charcoal)]">
                      {leader.region}
                    </dd>
                  </>
                )}
                {leader.state && (
                  <>
                    <dt className="text-[var(--pnp-slate)]">State</dt>
                    <dd className="font-medium text-[var(--pnp-charcoal)]">
                      {leader.state}
                    </dd>
                  </>
                )}
                <dt className="text-[var(--pnp-slate)]">Tenure</dt>
                <dd className="font-medium text-[var(--pnp-charcoal)]">
                  {leader.tenure}
                </dd>
              </dl>

              <div className="mt-8">
                <Button href="/leadership" variant="secondary" size="sm">
                  ← All leaders
                </Button>
              </div>
            </aside>

            <article>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
                Biography
              </span>
              <div className="mt-6 max-w-none space-y-5 text-[16px] leading-8 text-[var(--pnp-charcoal)]">
                {leader.bioLong?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      {others.length > 0 && (
        <section className="border-t border-[var(--pnp-charcoal)]/10 bg-[var(--pnp-white)] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                  <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
                  Other leaders
                </span>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
                  The rest of the National Executive.
                </h2>
              </div>
              <Link
                to="/leadership"
                className="text-sm font-semibold text-[var(--pnp-dark-teal)] hover:underline"
              >
                View complete leadership →
              </Link>
            </div>

            <ScrollReveal
              as="div"
              className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3"
            >
              {others.map((l) => (
                <Link
                  key={l.slug}
                  to={`/leadership/${l.slug}`}
                  className="block focus:outline-none"
                >
                  <LeaderCardLite {...l} />
                </Link>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}
    </PageLayout>
  );
}