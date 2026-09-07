import { useEffect } from "react";

/**
 * MobileMenu — accessible slide-down sheet.
 * Locks body scroll, restores focus on close, dismisses on Escape.
 */
export default function MobileMenu({ open, onClose, links, currentPath = "/" }) {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[60] md:hidden"
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--pnp-charcoal)]/55 backdrop-blur-sm"
      />
      <div className="relative ml-auto flex h-full w-[88%] max-w-sm flex-col gap-6 overflow-y-auto bg-white px-6 pb-10 pt-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--pnp-charcoal)]/10 text-[var(--pnp-charcoal)] hover:bg-[var(--pnp-charcoal)]/5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 2l10 10M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Primary">
          <ul className="flex flex-col divide-y divide-[var(--pnp-charcoal)]/10">
            {links.map((l) => {
              const isActive =
                currentPath === l.href ||
                (l.href !== "/" && currentPath.startsWith(l.href));
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-display text-2xl font-medium transition-colors ${
                      isActive
                        ? "text-[var(--pnp-dark-teal)]"
                        : "text-[var(--pnp-charcoal)] hover:text-[var(--pnp-teal)]"
                    }`}
                  >
                    <span>{l.label}</span>
                    <span
                      className={`h-px transition-all duration-200 ${
                        isActive
                          ? "w-10 bg-[var(--pnp-gold)]"
                          : "w-4 bg-[var(--pnp-charcoal)]/15"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <a
            href="#login"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/25 px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] hover:bg-[var(--pnp-dark-teal)] hover:text-white"
          >
            Member Login
          </a>
          <a
            href="#join"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-gold)] px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] hover:bg-[#d9a227]"
          >
            Join PNP
          </a>
        </div>
      </div>
    </div>
  );
}