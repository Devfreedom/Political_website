import { Link } from "react-router-dom";

/**
 * NewsCard — editorial article card with category, date, headline and excerpt.
 * Uses an SVG-based editorial visual so the section is ready to drop in
 * real photography later.
 */
export default function NewsCard({
  category,
  date,
  title,
  excerpt,
  slug,
  variant = 0,
}) {
  const palettes = [
    { bg: "#073F46", accent: "#E5B13A" },
    { bg: "#006B68", accent: "#F8FAF9" },
    { bg: "#172126", accent: "#E5B13A" },
  ];
  const p = palettes[variant % palettes.length];

  return (
    <article className="group flex flex-col">
      <Link to={`/news/${slug}`} className="block focus:outline-none">
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: p.bg }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 160 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <pattern
                id={`news-${variant}`}
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="0.8" fill={p.accent} opacity="0.18" />
              </pattern>
            </defs>
            <rect width="160" height="100" fill={`url(#news-${variant})`} />
            <line
              x1="0"
              y1="80"
              x2="160"
              y2="60"
              stroke={p.accent}
              strokeWidth="0.6"
              opacity="0.45"
            />
            <line
              x1="0"
              y1="95"
              x2="160"
              y2="78"
              stroke={p.accent}
              strokeWidth="0.6"
              opacity="0.25"
            />
          </svg>

          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--pnp-dark-teal)]">
            {category}
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <time className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--pnp-slate)]">
            {date}
          </time>
          <h3 className="font-display text-xl font-medium leading-snug text-[var(--pnp-charcoal)] transition-colors duration-200 group-hover:text-[var(--pnp-dark-teal)] md:text-[22px]">
            {title}
          </h3>
          <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
            {excerpt}
          </p>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--pnp-dark-teal)]">
            Read article
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
