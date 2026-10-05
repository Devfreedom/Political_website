import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const FOOTER_LINKS = {
  Party: [
    { label: "About PNP", to: "/about" },
    { label: "Policies", to: "/policies" },
    { label: "Manifesto", to: "/manifesto" },
    { label: "Leadership", to: "/leadership" },
    { label: "News", to: "/news" },
  ],
  GetInvolved: [
    { label: "Join the Party", to: "/join" },
    { label: "Volunteer", to: "/volunteer" },
    { label: "Donate", to: "/donate" },
    { label: "Events", to: "/events" },
    { label: "Member Login", to: "/login" },
  ],
  Resources: [
    { label: "Structure", to: "/structure" },
    { label: "Privacy", to: "/privacy" },
  ],
};

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");
    // Simulate a brief async subscribe; in production this would POST to a real endpoint.
    setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <div className="mt-10 rounded-md border border-pnp-gold/40 bg-pnp-gold/10 p-6">
        <p className="text-[11px] font-semibold tracking-[0.32em] uppercase text-pnp-gold">
          Subscribed
        </p>
        <p className="mt-2 text-sm leading-6 text-white/85">
          Thanks — we'll send policy briefings and major announcements to{" "}
          <strong className="font-semibold text-white">{email}</strong>. This
          is a prototype — no real subscription has been created.
        </p>
      </div>
    );
  }

  return (
    <form
      aria-label="Newsletter signup"
      onSubmit={onSubmit}
      noValidate
      className="mt-10 flex flex-col gap-3"
    >
      <label
        htmlFor="footer-newsletter-email"
        className="text-[11px] font-semibold tracking-[0.32em] uppercase text-pnp-white/60"
      >
        Get updates from PNP
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === "error" || undefined}
          className="w-full flex-1 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors duration-200 focus:border-pnp-gold"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-pnp-gold px-6 py-3 text-sm font-semibold text-pnp-dark-teal transition-all duration-200 hover:bg-[#d9a227] hover:shadow-lg hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && error && (
        <p role="alert" className="text-xs text-[#F2B5BC]">
          {error}
        </p>
      )}
      <p className="text-xs text-white/45">
        We send policy briefings and major announcements only. Unsubscribe at
        any time.
      </p>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--pnp-charcoal)] text-white/80">
      {/* faint geometric accent */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.06]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#E5B13A" strokeWidth="1" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="#E5B13A" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr,3fr] lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo variant="light" />
            <p className="max-w-sm text-[15px] leading-7 text-white/65">
              The Progressive Nigeria Party — a national political movement
              committed to accountable leadership, economic opportunity and
              meaningful citizen participation across all 36 states.
            </p>

            <address className="not-italic text-sm leading-7 text-white/55">
              PNP National Headquarters
              <br />
              Plot 42, Independence Avenue
              <br />
              Central Business District, Abuja
              <br />
              <a
                href="mailto:hello@pnp.ng"
                className="mt-2 inline-block text-[var(--pnp-gold)] hover:underline"
              >
                hello@pnp.ng
              </a>
            </address>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3"
          >
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-4">
                <h4 className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-gold)]">
                  {heading === "GetInvolved" ? "Get Involved" : heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="my-12 border-white/10" />

        <NewsletterSignup />

        <div className="mt-12 flex flex-col items-start justify-between gap-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>
            © {year} Progressive Nigeria Party. All rights reserved. This is a
            fictional party used for platform-design purposes.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--pnp-gold)]" />
            Progress. Unity. Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}
