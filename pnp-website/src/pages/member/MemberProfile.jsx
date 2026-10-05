import { useState } from "react";
import { Link } from "react-router-dom";
import MemberLayout from "../../componentss/member/MemberLayout";
import { useAuth } from "../../auth/useAuth";

const inputClasses =
  "w-full rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] outline-none transition-colors focus:border-[var(--pnp-gold)]";
const labelClasses =
  "text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--pnp-dark-teal)]";

/** Member profile — route /member/profile. Reads and edits currentUser. */
export default function MemberProfile() {
  const { currentUser, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");

  const startEdit = () => {
    setForm({
      fullName: currentUser.fullName,
      email: currentUser.email,
      phone: currentUser.phone,
      state: currentUser.state,
      lga: currentUser.lga,
      ward: currentUser.ward,
    });
    setError("");
    setEditing(true);
  };

  const cancel = () => {
    setForm(null);
    setError("");
    setEditing(false);
  };

  const save = (e) => {
    e.preventDefault();
    setError("");
    const patch = {
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      state: form.state.trim(),
      lga: form.lga.trim(),
      ward: form.ward.trim(),
    };
    if (!patch.fullName || !patch.phone || !patch.state || !patch.lga || !patch.ward) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(patch.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const result = updateProfile(patch);
    if (!result.ok && result.error === "duplicate") {
      setError("Another account already uses that email address.");
      return;
    }
    if (!result.ok) {
      setError("Could not save changes. Please try again.");
      return;
    }
    setEditing(false);
    setForm(null);
  };

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const groups = [
    {
      heading: "Personal Information",
      rows: [
        ["Full name", currentUser.fullName],
        ["Email", currentUser.email],
        ["Phone", currentUser.phone],
      ],
    },
    {
      heading: "Organisation",
      rows: [
        ["State", currentUser.state],
        ["LGA", currentUser.lga],
        ["Ward", currentUser.ward],
      ],
    },
    {
      heading: "Membership",
      rows: [
        ["Member ID", currentUser.memberId],
        ["Status", currentUser.membershipStatus],
        ["Joined date", currentUser.joinedDate],
      ],
    },
  ];

  return (
    <MemberLayout>
      <Link
        to="/member"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pnp-dark-teal)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
      >
        <span aria-hidden="true">←</span> Back to overview
      </Link>

      <header className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
            Member portal
          </p>
          <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-[var(--pnp-slate)]">
            The same record shown on your dashboard and membership page.
          </p>
        </div>
        {!editing && (
          <button
            type="button"
            onClick={startEdit}
            className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-150 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
          >
            Edit Profile
          </button>
        )}
      </header>

      {!editing ? (
        <section
          aria-label="Profile details"
          className="mt-6 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.heading}>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pnp-dark-teal)]">
                  {group.heading}
                </h2>
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
      ) : (
        <form
          onSubmit={save}
          noValidate
          className="mt-6 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              ["fullName", "Full name", "text", "e.g. Ada Bello"],
              ["email", "Email", "email", "you@example.com"],
              ["phone", "Phone", "tel", "+234 …"],
              ["state", "State", "text", "e.g. Lagos"],
              ["lga", "LGA", "text", "e.g. Ikeja"],
              ["ward", "Ward", "text", "e.g. Ward 04"],
            ].map(([key, label, type, placeholder]) => (
              <div key={key} className="flex flex-col gap-2">
                <label htmlFor={`profile-${key}`} className={labelClasses}>
                  {label}
                </label>
                <input
                  id={`profile-${key}`}
                  type={type}
                  value={form[key]}
                  onChange={set(key)}
                  placeholder={placeholder}
                  className={inputClasses}
                />
              </div>
            ))}
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm text-[#B23A48]">
              {error}
            </p>
          )}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={cancel}
              className="inline-flex items-center justify-center rounded-md border border-[var(--pnp-charcoal)]/20 px-5 py-2.5 text-sm font-semibold text-[var(--pnp-charcoal)] transition-colors duration-150 hover:bg-[var(--pnp-charcoal)]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)]"
            >
              Save changes
            </button>
          </div>
        </form>
      )}
    </MemberLayout>
  );
}
