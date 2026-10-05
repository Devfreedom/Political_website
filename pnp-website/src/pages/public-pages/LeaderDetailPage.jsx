import { Link, useParams } from "react-router-dom";
import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
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

  // Single consistent record: name → role → metadata → bio → image
  // Preserve the existing biography without inventing content.
  // Order below banner: intro, metadata grid, remaining paragraphs, CTA.
  const bioParagraphs = Array.isArray(leader.bioLong) ? leader.bioLong : [];
  const introParagraph = bioParagraphs[0] ?? leader.bio ?? "";
  const remainingParagraphs = bioParagraphs.slice(1);

  return (
    <PageLayout>
      <PageHero eyebrow={leader.title} title={leader.name} intro={leader.bio} />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr,2fr]">
            <aside className="md:self-start">
              {/* Portrait — unchanged sizing/cropping */}
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

              {/* Name banner — full width of portrait column, normal flow */}
              <div className="w-full border-t-2 border-[var(--pnp-gold)] bg-[var(--pnp-dark-teal)] px-5 py-4">
                <p className="break-words text-[13px] font-bold uppercase leading-6 tracking-[0.18em] text-white sm:text-sm">
                  {leader.name}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pnp-gold)]">
                  {leader.title}
                </p>
              </div>
            </aside>

            <article>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
                Biography
              </span>

              {/* 1. Introductory biography */}
              {introParagraph && (
                <p className="mt-6 font-sans text-[15px] leading-8 text-[var(--pnp-charcoal)] md:text-base">
                  {introParagraph}
                </p>
              )}

              {/* 2. Metadata grid — exactly ONE copy, normal flow, no absolute */}
              <dl className="relative z-10 mt-8 grid grid-cols-2 gap-4 bg-white md:grid-cols-3">
                {leader.region && (
                  <div className="rounded-md border border-[var(--pnp-charcoal)]/10 px-4 py-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
                      Region
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--pnp-charcoal)]">
                      {leader.region}
                    </dd>
                  </div>
                )}
                {leader.state && (
                  <div className="rounded-md border border-[var(--pnp-charcoal)]/10 px-4 py-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
                      State
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--pnp-charcoal)]">
                      {leader.state}
                    </dd>
                  </div>
                )}
                <div className="rounded-md border border-[var(--pnp-charcoal)]/10 px-4 py-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
                    Tenure
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--pnp-charcoal)]">
                    {leader.tenure}
                  </dd>
                </div>
              </dl>

              {/* 3 + 4. Responsibility / background / education — preserved verbatim */}
              {remainingParagraphs.length > 0 && (
                <div className="mt-8 space-y-5 font-sans text-[15px] leading-8 text-[var(--pnp-charcoal)] md:text-base">
                  {remainingParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* 5. All Members CTA */}
              <div className="mt-10">
                <Link
                  to="/leadership"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--pnp-dark-teal)] px-5 py-2.5 font-sans text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
                >
                  View All Members
                  <span aria-hidden="true">→</span>
                </Link>
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
