import { Link } from "react-router-dom";
import MemberLayout from "../../componentss/member/MemberLayout";

/**
 * MemberPlaceholder — clear stand-in for member child routes
 * not yet built. Never a dead hash link; always routes back
 * to the overview.
 */
export default function MemberPlaceholder({ title, description }) {
  return (
    <MemberLayout>
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
        Member portal
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
        {title}
      </h1>
      <div className="mt-6 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6 md:p-8">
        <p className="max-w-xl text-[15px] leading-7 text-[var(--pnp-slate)]">
          {description ??
            "This section arrives in a later phase of the member portal. Your membership data is safe — nothing here is broken."}
        </p>
        <div className="mt-6">
          <Link
            to="/member"
            className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            ← Back to overview
          </Link>
        </div>
      </div>
    </MemberLayout>
  );
}
