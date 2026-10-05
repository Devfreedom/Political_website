import { Link, NavLink } from "react-router-dom";

export const MEMBER_NAV = [
  { label: "Overview", to: "/member", end: true },
  { label: "My Profile", to: "/member/profile" },
  { label: "Membership", to: "/member/membership" },
  { label: "My Organisation", to: "/member/organisation" },
  { label: "Events", to: "/member/events" },
  { label: "Announcements", to: "/member/announcements" },
  { label: "Volunteer", to: "/member/volunteer" },
  { label: "Documents", to: "/member/documents" },
  { label: "Messages", to: "/member/messages" },
  { label: "Settings", to: "/member/settings" },
];

function NavItems({ onNavigate }) {
  return (
    <ul className="flex flex-col gap-1">
      {MEMBER_NAV.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)] ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    isActive ? "bg-[var(--pnp-gold)]" : "bg-white/25"
                  }`}
                />
                {item.label}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * MemberSidebar — single source of member-portal navigation.
 * Desktop: persistent sticky sidebar. Mobile: slide-in drawer
 * controlled by MemberLayout. No duplicated nav markup.
 */
export default function MemberSidebar({ open, onClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col bg-[var(--pnp-dark-teal)] text-white lg:flex">
        <div className="flex items-center gap-3 px-6 pb-6 pt-7">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--pnp-gold)] font-display text-sm font-bold text-[var(--pnp-dark-teal)]"
          >
            P
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wide">PNP Member</span>
            <span className="text-xs text-white/60">Member portal</span>
          </div>
        </div>
        <nav aria-label="Member portal" className="flex-1 overflow-y-auto px-4">
          <NavItems />
        </nav>
        <div className="border-t border-white/10 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium text-white/70 transition-colors duration-150 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            <span aria-hidden="true">←</span> Back to Public Website
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col bg-[var(--pnp-dark-teal)] text-white transition-transform duration-200 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pb-6 pt-7">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--pnp-gold)] font-display text-sm font-bold text-[var(--pnp-dark-teal)]"
            >
              P
            </span>
            <span className="text-sm font-bold tracking-wide">PNP Member</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close member navigation"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>
        <nav
          aria-label="Member portal"
          className="flex-1 overflow-y-auto px-4"
        >
          <NavItems onNavigate={onClose} />
        </nav>
        <div className="border-t border-white/10 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            <span aria-hidden="true">←</span> Back to Public Website
          </Link>
        </div>
      </aside>
    </>
  );
}
