/**
 * Button — institutional primary, secondary and ghost variants.
 * Renders as <a> when href is supplied, otherwise as <button>.
 */

const SIZES = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

const VARIANTS = {
  primary:
    "bg-[var(--pnp-gold)] text-[var(--pnp-dark-teal)] hover:bg-[#d9a227] hover:shadow-lg hover:-translate-y-[1px]",
  secondary:
    "border border-[var(--pnp-dark-teal)]/25 text-[var(--pnp-dark-teal)] hover:border-[var(--pnp-dark-teal)] hover:bg-[var(--pnp-dark-teal)] hover:text-[var(--pnp-white)]",
  "secondary-light":
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-[var(--pnp-dark-teal)]",
  ghost:
    "text-[var(--pnp-teal)] hover:text-[var(--pnp-dark-teal)] underline-offset-4 hover:underline",
  "ghost-light": "text-white/85 hover:text-[var(--pnp-gold)]",
  dark: "bg-[var(--pnp-dark-teal)] text-white hover:bg-[var(--pnp-teal)]",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 will-change-transform";

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  variant = "primary",
  href,
  size = "md",
  className = "",
  trailingIcon = true,
  children,
  ...rest
}) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim();
  const icon = trailingIcon ? <Arrow /> : null;

  const isInternalRoute = typeof href === "string" && href.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link to={href} className={`group ${classes}`} {...rest}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} {...rest}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button className={`group ${classes}`} {...rest}>
      {children}
      {icon}
    </button>
  );
}
import { Link } from "react-router-dom";
