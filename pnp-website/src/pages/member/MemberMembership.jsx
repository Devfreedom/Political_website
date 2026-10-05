import { Link } from "react-router-dom";
import MemberLayout from "../../componentss/member/MemberLayout";
import MembershipStatusCard from "../../componentss/member/MembershipStatusCard";
import MembershipCard from "../../componentss/member/MembershipCard";
import QuickAction from "../../componentss/member/QuickAction";
import { useAuth } from "../../auth/AuthContext";

const ACTIONS = [
  {
    to: "/member/profile",
    label: "Edit Profile",
    description: "Update your contact details",
  },
  {
    to: "/member/organisation",
    label: "View Organisation",
    description: "Your chapter structure",
  },
  {
    to: "/member/events",
    label: "View Events",
    description: "Town halls and conventions",
  },
];

/** My Membership — route /member/membership. Status, card, details, affiliation. */
export default function MemberMembership() {
  const { currentUser: member } = useAuth();

  const detailGroups = [
    {
      heading: "Personal",
      rows: [
        ["Full name", member.fullName],
        ["Email", member.email],
        ["Phone", member.phone],
      ],
    },
    {
      heading: "Organisation",
      rows: [
        ["State", member.state],
        ["LGA", member.lga],
        ["Ward", member.ward],
      ],
    },
    {
      heading: "Membership",
      rows: [
        ["Member ID", member.memberId],
        ["Membership type", member.membershipType],
        ["Date joined", member.joinedDate],
        ["Status", member.membershipStatus],
      ],
    },
  ];

  const affiliation = [
    { label: "Nigeria", sub: "National Executive", current: false },
    { label: `${member.state} State`, sub: "State chapter", current: false },
    { label: `${member.lga} LGA`, sub: "LGA executive", current: false },
    { label: member.ward, sub: "Your ward — current position", current: true },
  ];

  return (
    <MemberLayout>
      <Link
        to="/member"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pnp-dark-teal)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
      >
        <span aria-hidden="true">←</span> Back to overview
      </Link>

      <header className="mt-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
          Member portal
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          My Membership
        </h1>
        <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[var(--pnp-slate)]">
          View your membership status, details and party affiliation.
        </p>
      </header>

      {/* 1. Status panel — shared component, same data as the dashboard */}
      <div className="mt-6">
        <MembershipStatusCard member={member} />
      </div>

      {/* 2. Digital membership card */}
      <section aria-labelledby="member-card-heading" className="mt-8">
        <h2
          id="member-card-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]"
        >
          Digital membership card
        </h2>
        <div className="mt-3">
          <MembershipCard member={member} />
        </div>
        <p className="mt-3 max-w-md text-[13px] leading-6 text-[var(--pnp-slate)]">
          Show this card at ward meetings alongside a valid ID. Printing and
          offline saving arrive in a later phase.
        </p>
      </section>

      {/* 3. Member details — normal flow, no excess cards */}
      <section
        aria-labelledby="member-details-heading"
        className="mt-8 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6 md:p-8"
      >
        <h2
          id="member-details-heading"
          className="font-display text-xl font-medium leading-tight"
        >
          Member details
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {detailGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pnp-dark-teal)]">
                {group.heading}
              </h3>
              <dl className="mt-3 flex flex-col gap-3">
                {group.rows.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
                      {label}
                    </dt>
                    <dd className="mt-0.5 break-words text-sm font-medium text-[var(--pnp-charcoal)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Organisational affiliation */}
      <section
        aria-labelledby="affiliation-heading"
        className="mt-4 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6 md:p-8"
      >
        <h2
          id="affiliation-heading"
          className="font-display text-xl font-medium leading-tight"
        >
          Your place in the Party
        </h2>
        <ol className="relative mt-6">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[5px] top-3 w-px bg-[var(--pnp-charcoal)]/15"
          />
          {affiliation.map((level) => (
            <li key={level.label} className="relative flex gap-4 py-2.5">
              <span
                aria-hidden="true"
                className={`relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                  level.current
                    ? "bg-[var(--pnp-gold)] ring-4 ring-[var(--pnp-gold)]/20"
                    : "bg-[var(--pnp-dark-teal)]/30"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    level.current
                      ? "text-[var(--pnp-dark-teal)]"
                      : "text-[var(--pnp-charcoal)]"
                  }`}
                >
                  {level.label}
                  {level.current && (
                    <span className="ml-2 rounded-full bg-[var(--pnp-dark-teal)]/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--pnp-dark-teal)]">
                      You are here
                    </span>
                  )}
                </p>
                <p className="text-[13px] leading-6 text-[var(--pnp-slate)]">
                  {level.sub}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Actions — existing routes only */}
      <section aria-label="Membership actions" className="mt-8">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
          Next steps
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIONS.map((a) => (
            <QuickAction key={a.to} {...a} />
          ))}
        </div>
      </section>
    </MemberLayout>
  );
}
