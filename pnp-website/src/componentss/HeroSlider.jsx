import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import pnpLogo from "../assets/pnp_logo_1_cutout.png";

/**
 * HeroSlider — institutional hero rotator.
 * 3 editorial slides sharing the same dark-teal frame; only text content
 * changes per slide. Manual + auto-rotate, accessible, motion-reduced safe.
 */

const SLIDES = [
  {
    id: "founding",
    eyebrow: "Est. 2026 · Progress. Unity. Opportunity.",
    headlineLines: ["Building", "a progressive", "Nigeria."],
    statement:
      "A progressive national political party committed to accountable leadership, economic opportunity, national unity and meaningful citizen participation.",
    primaryCta: { label: "Join the Party", href: "#join" },
    secondaryCta: { label: "Read our Manifesto", href: "#manifesto" },
  },
  {
    id: "priorities",
    eyebrow: "Our Priorities · 2026",
    headlineLines: ["Economy.", "Education.", "Healthcare."],
    statement:
      "Five clear commitments — economic opportunity, education & skills, healthcare, infrastructure and youth & innovation — backed by credible policy.",
    primaryCta: { label: "See our priorities", href: "#policies" },
    secondaryCta: { label: "Read our Manifesto", href: "#manifesto" },
  },
  {
    id: "join",
    eyebrow: "Get Involved",
    headlineLines: ["Built from", "the ward", "up."],
    statement:
      "A party is only as strong as the people who show up for it. Join thousands of Nigerians in every state building a political party worthy of the country's promise.",
    primaryCta: { label: "Become a member", href: "#membership" },
    secondaryCta: { label: "Volunteer with us", href: "#volunteer" },
  },
];

const AUTOPLAY_MS = 7000;

const SLIDE_MICROSTRIP = (
  <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
    <div>
      <p className="font-display text-2xl font-medium leading-none text-white">36</p>
      <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-white/60">States</p>
    </div>
    <div>
      <p className="font-display text-2xl font-medium leading-none text-white">774</p>
      <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-white/60">LGAs</p>
    </div>
    <div>
      <p className="font-display text-2xl font-medium leading-none text-white">1</p>
      <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-white/60">Vision</p>
    </div>
  </div>
);

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef(null);

  const goTo = useCallback((target) => {
    const len = SLIDES.length;
    setIndex((target + len) % len);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-rotate
  useEffect(() => {
    if (paused) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const id = setTimeout(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);

    return () => clearTimeout(id);
  }, [index, paused]);

  // Pause when tab is hidden
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      aria-label="Progressive Nigeria Party — featured statements"
      className="relative overflow-hidden bg-[var(--pnp-dark-teal)] text-white"
    >
      {/* Decorative grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <defs>
          <pattern id="heroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="#E5B13A" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 lg:block"
      />

      <div
        ref={regionRef}
        tabIndex={0}
        role="group"
        aria-label="Hero slides"
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-32"
      >
        {/* Left — slide text */}
        <div className="relative lg:col-span-7 xl:col-span-7">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={i !== index}
              className={`transition-opacity duration-700 ${
                i === index
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                <span className="h-px w-10 bg-current opacity-80" aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <div id="hero-heading">
                <h1 className="mt-8 font-display text-[56px] font-medium uppercase leading-[0.96] tracking-tight md:text-[88px] lg:text-[104px]">
                  {slide.headlineLines.map((line, j) => (
                    <span
                      key={j}
                      className={`block ${
                        j === 1 ? "pl-6 text-white/95 md:pl-12" : ""
                      } ${j === 2 ? "pl-12 text-[var(--pnp-gold)] md:pl-24" : ""}`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
              </div>

              <div className="mt-10 max-w-xl border-l-2 border-[var(--pnp-gold)] pl-5">
                <p className="text-lg leading-8 text-white/80 md:text-xl">
                  {slide.statement}
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Button href={slide.primaryCta.href} variant="primary" size="lg">
                  {slide.primaryCta.label}
                </Button>
                <Button href={slide.secondaryCta.href} variant="secondary-light" size="lg">
                  {slide.secondaryCta.label}
                </Button>
              </div>

              {i === index && SLIDE_MICROSTRIP}
            </div>
          ))}
        </div>

        {/* Right — static logo panel */}
        <div className="relative lg:col-span-5 xl:col-span-5">
          <div className="relative mx-auto flex aspect-square max-w-[480px] items-center justify-center">
            <span aria-hidden="true" className="absolute inset-0 rounded-full border border-white/10" />
            <span aria-hidden="true" className="absolute inset-6 rounded-full border border-white/10" />
            <span aria-hidden="true" className="absolute inset-12 rounded-full border border-[var(--pnp-gold)]/30" />
            <span aria-hidden="true" className="absolute inset-20 rounded-full border border-[var(--pnp-gold)]/15" />

            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M100 10 A90 90 0 0 1 190 100" fill="none" stroke="#E5B13A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div className="relative flex flex-col items-center text-center">
              <img
                src={pnpLogo}
                alt="Progressive Nigeria Party logo"
                width="320"
                height="213"
                className="h-auto w-[78%] max-w-[360px] object-contain"
              />
              <span className="mt-6 text-[10px] font-semibold tracking-[0.4em] uppercase text-[var(--pnp-gold)]">
                Progressive · Nigeria · Party
              </span>
            </div>

            <span aria-hidden="true" className="absolute left-2 top-2 h-6 w-6 border-l border-t border-[var(--pnp-gold)]/60" />
            <span aria-hidden="true" className="absolute right-2 bottom-2 h-6 w-6 border-b border-r border-[var(--pnp-gold)]/60" />
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-4 lg:bottom-10 lg:left-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white/80 transition-colors duration-200 hover:border-white hover:bg-white hover:text-[var(--pnp-dark-teal)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Slide selectors">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${s.headlineLines.join(" ")}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-pnp-gold" : "w-2 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white/80 transition-colors duration-200 hover:border-white hover:bg-white hover:text-[var(--pnp-dark-teal)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="m5 2 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className="ml-2 text-xs font-medium tracking-[0.28em] uppercase text-white/55">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}