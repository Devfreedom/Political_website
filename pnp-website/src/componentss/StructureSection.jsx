/**
 * StructureSection — institutional hierarchy from National → Member.
 * <lg: vertical editorial ladder with spine.
 * lg+:  horizontal five-node stepped flow connected by a thin line.
 */
const LEVELS = [
  {
    label: "National",
    detail: "National Executive Committee, policy councils and conventions.",
  },
  {
    label: "State",
    detail: "36 state chapters — one in each state of the federation.",
  },
  {
    label: "Local Government Area",
    detail: "774 LGA executives coordinating grassroots activity.",
  },
  {
    label: "Ward",
    detail: "Ward-level executives and community organising committees.",
  },
  {
    label: "Member",
    detail: "Registered members — the foundation of the party's mandate.",
  },
];

export default function StructureSection() {
  return (
    <>
      {/* Mobile / tablet: vertical ladder */}
      <ol className="relative lg:hidden">
        <span
          aria-hidden="true"
          className="absolute left-[18px] top-3 bottom-3 w-px bg-[var(--pnp-charcoal)]/15 md:left-[22px]"
        />

        {LEVELS.map((level, i) => (
          <li
            key={level.label}
            className="relative grid grid-cols-[auto,1fr] items-start gap-x-6 py-5 first:pt-0"
          >
            <span
              className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 bg-white font-display text-sm font-medium text-[var(--pnp-dark-teal)] md:h-11 md:w-11 md:text-base"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-xl font-medium leading-tight text-[var(--pnp-charcoal)] md:text-2xl">
                {level.label}
              </h3>
              <p className="text-[15px] leading-7 text-[var(--pnp-slate)]">
                {level.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* lg+: horizontal five-node stepped flow */}
      <ol className="hidden lg:block">
        <div className="relative">
          {/* connector line behind the nodes */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-[26px] h-px bg-[var(--pnp-charcoal)]/15"
          />

          <div className="grid grid-cols-5 gap-4">
            {LEVELS.map((level, i) => (
              <li
                key={level.label}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 bg-white font-display text-base font-medium text-[var(--pnp-dark-teal)]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 font-display text-lg font-medium leading-tight text-[var(--pnp-charcoal)] xl:text-xl">
                  {level.label}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[var(--pnp-slate)]">
                  {level.detail}
                </p>
              </li>
            ))}
          </div>
        </div>
      </ol>
    </>
  );
}