import { Link } from "react-router-dom";

/** MemberSummaryCard — compact identity card with CTA to the full page. */
export default function MemberSummaryCard({ member }) {
  return (
    <section
      aria-labelledby="member-summary-heading"
      className="flex h-full flex-col rounded-md bg-[var(--pnp-dark-teal)] p-6 text-white"
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--pnp-gold)] bg-white/10 text-sm font-bold"
        >
          {member.initials}
        </span>
        <div className="min-w-0">
          <h2
            id="member-summary-heading"
            className="truncate font-display text-xl font-medium leading-tight"
          >
            {member.fullName}
          </h2>
          <p className="truncate text-[13px] text-white/70">{member.email}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/75">
        {member.ward} · {member.lga} · {member.state}
      </p>
      <div className="mt-auto pt-5">
        <Link
          to="/member/membership"
          className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-150 hover:bg-[#d9a227] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          View full membership
        </Link>
      </div>
    </section>
  );
}
