import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { chapters, MEETING_NOTE } from "../data/chapters";

const selectClasses =
  "w-full rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] outline-none transition-colors focus:border-[var(--pnp-gold)]";

const labelClasses =
  "text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--pnp-dark-teal)]";

/**
 * WardFinder — reusable State → LGA → Ward discovery (frontend mock only).
 * Normal document flow, responsive, no backend, no absolute positioning.
 */
export default function WardFinder({ compact = false }) {
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");

  const stateEntry = useMemo(
    () => chapters.find((c) => c.state === state) ?? null,
    [state]
  );
  const lgaEntry = useMemo(
    () => stateEntry?.lgAs.find((l) => l.name === lga) ?? null,
    [stateEntry, lga]
  );

  const resetAfterState = (value) => {
    setState(value);
    setLga("");
    setWard("");
  };

  return (
    <div
      className={`rounded-md border border-[var(--pnp-charcoal)]/10 bg-white ${
        compact ? "p-6 md:p-8" : "p-8 md:p-10"
      }`}
    >
      <p className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-slate)]">
        State → LGA → Ward
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="wardfinder-state" className={labelClasses}>
            State
          </label>
          <select
            id="wardfinder-state"
            value={state}
            onChange={(e) => resetAfterState(e.target.value)}
            className={selectClasses}
          >
            <option value="">Select state…</option>
            {chapters.map((c) => (
              <option key={c.state} value={c.state}>
                {c.state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="wardfinder-lga" className={labelClasses}>
            LGA
          </label>
          <select
            id="wardfinder-lga"
            value={lga}
            disabled={!stateEntry}
            onChange={(e) => {
              setLga(e.target.value);
              setWard("");
            }}
            className={`${selectClasses} disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <option value="">
              {stateEntry ? "Select LGA…" : "Select a state first"}
            </option>
            {stateEntry?.lgAs.map((l) => (
              <option key={l.name} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="wardfinder-ward" className={labelClasses}>
            Ward
          </label>
          <select
            id="wardfinder-ward"
            value={ward}
            disabled={!lgaEntry}
            onChange={(e) => setWard(e.target.value)}
            className={`${selectClasses} disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <option value="">
              {lgaEntry ? "Select ward…" : "Select an LGA first"}
            </option>
            {lgaEntry?.wards.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div aria-live="polite" className="mt-6">
        {!state ? (
          <p className="text-[14px] leading-7 text-[var(--pnp-slate)]">
            Start with your state. This demo shows how a visitor traces{" "}
            <strong className="font-semibold text-[var(--pnp-charcoal)]">
              National → State → LGA → Ward → Member
            </strong>
            .
          </p>
        ) : (
          <div className="rounded-md bg-[var(--pnp-dark-teal)]/5 px-5 py-4">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--pnp-dark-teal)]">
              Your path
            </p>
            <p className="mt-2 text-[15px] font-medium leading-7 text-[var(--pnp-charcoal)]">
              PNP · {state}
              {lga ? ` · ${lga}` : ""}
              {ward ? ` · ${ward}` : ""}
            </p>
            <p className="mt-1 text-[14px] leading-7 text-[var(--pnp-slate)]">
              {MEETING_NOTE} Sample data for illustration — not a real register.
            </p>
            {ward && (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
                >
                  Join this ward
                </Link>
                <Link
                  to="/chapters"
                  className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-200 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
                >
                  Find your local chapter
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
