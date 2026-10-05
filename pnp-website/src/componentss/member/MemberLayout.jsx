import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberSidebar from "./MemberSidebar";
import { member } from "../../data/member";

/**
 * MemberLayout — reusable shell for all /member routes.
 * Sidebar + top bar + main content. Functional dashboard styling,
 * separate from the editorial public layout.
 */
export default function MemberLayout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <div className="flex min-h-screen bg-[var(--pnp-white)] text-[var(--pnp-charcoal)]">
      <MemberSidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[var(--pnp-charcoal)]/10 bg-white px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open member navigation"
            aria-expanded={open}
            aria-controls="member-nav"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--pnp-charcoal)]/15 text-[var(--pnp-dark-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link
            to="/member"
            className="text-sm font-bold tracking-wide text-[var(--pnp-dark-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            PNP Member
          </Link>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--pnp-dark-teal)] text-xs font-bold text-white"
          >
            {member.initials}
          </span>
        </header>

        <main id="member-main" className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
