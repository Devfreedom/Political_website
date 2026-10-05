/** MembershipStatusCard — answers "Is my membership active? Where do I belong?" */
export default function MembershipStatusCard({ member }) {
  const rows = [
    ["Member ID", member.id],
    ["State", member.state],
    ["LGA", member.lga],
    ["Ward", member.ward],
    ["Member since", member.joinedDate],
  ];

  return (
    <section
      aria-labelledby="membership-status-heading"
      className="rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2
          id="membership-status-heading"
          className="font-display text-xl font-medium leading-tight"
        >
          Membership summary
        </h2>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--pnp-dark-teal)] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[var(--pnp-gold)]"
          />
          {member.membershipStatus}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[var(--pnp-charcoal)]">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
