import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Policies", href: "#policies" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Structure", href: "#structure" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-[var(--pnp-charcoal)]/10 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(7,63,70,0.18)]" : ""
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative text-[14px] font-medium tracking-wide text-[var(--pnp-charcoal)]/80 transition-colors duration-200 hover:text-[var(--pnp-dark-teal)]"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--pnp-gold)] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#login"
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)]/5"
            >
              Member Login
            </a>
            <a
              href="#join"
              className="rounded-md bg-[var(--pnp-teal)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--pnp-dark-teal)] hover:shadow-lg hover:-translate-y-[1px]"
            >
              Join PNP
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--pnp-charcoal)]/10 text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)]/5 lg:hidden"
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
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          links={NAV_LINKS}
        />
      </div>
    </>
  );
}