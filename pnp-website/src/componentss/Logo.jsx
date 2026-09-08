import { Link } from "react-router-dom";

export default function Logo({
  variant = "dark",
  withWordmark = true,
  monogramSize = 44,
}) {
  const isLight = variant === "light";

  const ringStroke = isLight ? "#F8FAF9" : "#073F46";
  const monogramFill = isLight ? "#F8FAF9" : "#073F46";
  const wordmarkPrimary = isLight ? "#F8FAF9" : "#073F46";
  const wordmarkSecondary = isLight ? "#E5B13A" : "#006B68";
  const accentStroke = "#E5B13A";

  return (
    <Link
      to="/"
      aria-label="Progressive Nigeria Party — home"
      className="group inline-flex items-center gap-3"
    >
      <svg
        width={monogramSize}
        height={monogramSize}
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* outer ring */}
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke={ringStroke}
          strokeWidth="1.25"
          opacity={isLight ? 0.35 : 0.18}
        />
        {/* gold inner arc */}
        <path
          d="M32 6 a26 26 0 0 1 22.5 13"
          fill="none"
          stroke={accentStroke}
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        {/* monogram */}
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontWeight="600"
          fontSize="22"
          fill={monogramFill}
          letterSpacing="-0.5"
        >
          PNP
        </text>
        {/* baseline hairline */}
        <line
          x1="18"
          y1="48"
          x2="46"
          y2="48"
          stroke={accentStroke}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>

      {withWordmark && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span
            className="text-[13px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: wordmarkPrimary }}
          >
            Progressive Nigeria
          </span>
          <span
            className="text-[11px] font-medium tracking-[0.32em] uppercase"
            style={{ color: wordmarkSecondary }}
          >
            Party · Est. 2026
          </span>
        </span>
      )}
    </Link>
  );
}
