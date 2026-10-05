import MemberLayout from "../../componentss/member/MemberLayout";
import DashboardHeader from "../../componentss/member/DashboardHeader";
import MembershipStatusCard from "../../componentss/member/MembershipStatusCard";
import MemberSummaryCard from "../../componentss/member/MemberSummaryCard";
import QuickAction from "../../componentss/member/QuickAction";
import UpcomingEventCard from "../../componentss/member/UpcomingEventCard";
import AnnouncementList from "../../componentss/member/AnnouncementList";
import { useAuth } from "../../auth/AuthContext";
import { memberUpcomingEvent, memberAnnouncements } from "../../data/member";

const QUICK_ACTIONS = [
  {
    to: "/member/membership",
    label: "View Membership",
    description: "Status, ID and ward details",
  },
  {
    to: "/member/organisation",
    label: "My Organisation",
    description: "Your chapter structure",
  },
  {
    to: "/member/events",
    label: "Upcoming Events",
    description: "Town halls and conventions",
  },
  {
    to: "/member/volunteer",
    label: "Volunteer",
    description: "Give time in your ward",
  },
];

/** Member dashboard — route /member. Functional overview, not editorial. */
export default function MemberDashboard() {
  const { currentUser } = useAuth();

  return (
    <MemberLayout>
      <DashboardHeader firstName={currentUser.firstName} />

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr,1fr]">
        <MembershipStatusCard member={currentUser} />
        <MemberSummaryCard member={currentUser} />
      </div>

      <section aria-label="Quick actions" className="mt-8">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
          What can I do now?
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {QUICK_ACTIONS.map((a) => (
            <QuickAction key={a.to} {...a} />
          ))}
        </div>
      </section>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr,1fr]">
        <UpcomingEventCard event={memberUpcomingEvent} />
        <AnnouncementList items={memberAnnouncements} />
      </div>
    </MemberLayout>
  );
}
