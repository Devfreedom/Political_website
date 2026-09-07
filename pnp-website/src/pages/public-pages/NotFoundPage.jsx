import PageLayout from "../../componentss/PageLayout";
import Button from "../../componentss/Button";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--pnp-white)]">
        <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10 lg:py-32">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
            <span className="h-px w-8 bg-current opacity-80" aria-hidden="true" />
            Error 404
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-[var(--pnp-charcoal)] md:text-6xl">
            Page not found.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--pnp-slate)]">
            We can't find what you're looking for. The page may have moved or
            never existed. Try the homepage or the navigation above.
          </p>
          <div className="mt-10">
            <Button href="/" variant="dark" size="md">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}