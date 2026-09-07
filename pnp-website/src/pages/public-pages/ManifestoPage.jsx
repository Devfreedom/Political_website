import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import ManifestoPreview from "../../componentss/ManifestoPreview";
import Button from "../../componentss/Button";
import ScrollReveal from "../../componentss/ScrollReveal";
import { principles } from "../../data/principles";

export default function ManifestoPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="The Manifesto"
        title="A covenant with the Nigerian people."
        intro="Our 2026 manifesto sets out clear principles — not vague aspirations. This page highlights the commitments; the full document is published as a downloadable PDF and is also available in accessible formats on request."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal as="div">
            <ManifestoPreview principles={principles} />
          </ScrollReveal>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[var(--pnp-charcoal)]/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-[15px] leading-7 text-[var(--pnp-slate)]">
              The full manifesto is available as a downloadable document and
              in accessible formats on request.
            </p>
            <Button href="#manifesto-full" variant="dark" size="md">
              Read the complete manifesto
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}