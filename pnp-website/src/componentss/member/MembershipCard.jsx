import pnpLogo from "../../assets/pnp_logo_1_cutout.png";

/**
 * MembershipCard — PNP digital membership card.
 * Institutional ID treatment in deep teal + gold. Landscape,
 * responsive, no banking/SaaS styling. UI only — no print,
 * download or backend logic.
 */
export default function MembershipCard({ member }) {
  const fields = [
    ["State", member.state],
    ["LGA", member.lga],
    ["Ward", member.ward],
  ];

  return (
    <article
      aria-label={`PNP digital membership card for ${member.fullName}`}
      className="relative w-full max-w-md overflow-hidden rounded-md bg-[var(--pnp-dark-teal)] p-6 text-white sm:p-7"
    >
      {/* restrained arc motif, shared with the public site */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-[0.10]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="#E5B13A" strokeWidth="1" />
      </svg>

      <div className="relative">
        <div className="flex items-center gap-4">
          <img
            src={pnpLogo}
            alt="Progressive Nigeria Party logo"
            width={96}
            height={64}
            className="h-12 w-auto shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold uppercase tracking-[0.18em]">
              Progressive Nigeria Party
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-gold)]">
              Digital membership card
            </p>
          </div>
        </div>

        <p className="mt-6 truncate font-display text-2xl font-medium leading-tight sm:text-[28px]">
          {member.fullName}
        </p>
        <p className="mt-1 text-sm font-semibold tracking-[0.14em] text-white/70">
          {member.id}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
          {fields.map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                {label}
              </dt>
              <dd className="mt-1 truncate text-sm font-semibold">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--pnp-gold)] px-3 py-1 text-xs font-bold tracking-[0.14em] text-[var(--pnp-dark-teal)]">
            {member.membershipStatus}
          </span>
          <span className="text-xs text-white/60">
            Joined {member.joinedDate}
          </span>
        </div>
      </div>
    </article>
  );
}
