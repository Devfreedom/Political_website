/**
 * SectionHeading — editorial eyebrow + display heading + optional intro.
 * Use `align="center"` for centered sections; defaults to left.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  as: Tag = "h2",
  className = "",
}) {
  const isCenter = align === "center";
  const headingColor = light ? "text-white" : "text-[var(--pnp-charcoal)]";
  const introColor = light ? "text-white/70" : "text-[var(--pnp-slate)]";
  const eyebrowColor = "text-[var(--pnp-gold)]";

  return (
    <header
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.32em] uppercase ${eyebrowColor}`}
        >
          <span className="h-px w-8 bg-current opacity-70" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <Tag
        className={`font-display font-medium text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${headingColor}`}
      >
        {title}
      </Tag>

      {intro && (
        <p
          className={`max-w-2xl text-base leading-7 md:text-lg md:leading-8 ${introColor} ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </header>
  );
}