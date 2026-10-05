import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../auth/useAuth";

/**
 * JoinForm — frontend-only membership registration prototype.
 * 5-step wizard: state → LGA → ward → personal details → review & confirm.
 * No backend; submit shows a thank-you state.
 */

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT - Abuja", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const STEPS = [
  { id: 1, label: "State" },
  { id: 2, label: "LGA" },
  { id: 3, label: "Ward" },
  { id: 4, label: "Personal details" },
  { id: 5, label: "Review" },
];

const initial = {
  state: "",
  lga: "",
  ward: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  password: "",
  confirmPassword: "",
  consent: false,
};

const fieldClasses =
  "rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] placeholder:text-[var(--pnp-slate)]/60 outline-none transition-colors focus:border-[var(--pnp-gold)]";

const labelClasses =
  "text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-dark-teal)]";

function Field({ label, hint, children }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {typeof children === "function" ? children(id) : children}
      {hint && <p className="text-xs text-[var(--pnp-slate)]/80">{hint}</p>}
    </div>
  );
}

export default function JoinForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initial);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  const validateStep = () => {
    setError("");
    if (step === 1 && !data.state) return "Please select your state of residence.";
    if (step === 2 && !data.lga.trim()) return "Please enter your local government area.";
    if (step === 3 && !data.ward.trim()) return "Please enter your ward.";
    if (step === 4) {
      if (!data.firstName.trim() || !data.lastName.trim())
        return "Please enter your full name.";
      if (!/^\S+@\S+\.\S+$/.test(data.email))
        return "Please enter a valid email address.";
      if (!data.phone.trim()) return "Please enter a phone number.";
      const ageNum = Number(data.age);
      if (!Number.isFinite(ageNum) || ageNum < 18)
        return "You must be at least 18 years old to join.";
      if (!data.password || data.password.length < 8)
        return "Your password must be at least 8 characters long.";
      if (!/[A-Za-z]/.test(data.password) || !/\d/.test(data.password))
        return "Your password must include at least one letter and one number.";
      if (data.password !== data.confirmPassword)
        return "Passwords do not match. Please re-enter them.";
      if (!data.consent)
        return "Please confirm you agree to the Party's membership terms.";
    }
    return null;
  };

  const next = () => {
    const v = validateStep();
    if (v) {
      setError(v);
      return;
    }
    setError("");
    setStep((s) => Math.min(STEPS.length, s + 1));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async () => {
    setError("");
    setSubmitting(true);
    const result = await signup({
      fullName: `${data.firstName.trim()} ${data.lastName.trim()}`.trim(),
      email: data.email,
      phone: data.phone,
      state: data.state,
      lga: data.lga,
      ward: data.ward,
      password: data.password,
    });
    setSubmitting(false);
    if (!result.ok && result.error === "duplicate") {
      setError(
        "An account with this email already exists. Please sign in instead."
      );
      return;
    }
    navigate("/member", { replace: true });
  };

  return (
    <section className="bg-[var(--pnp-white)]">
      <div className="mx-auto max-w-2xl px-6 pb-24 pt-2 lg:px-0 lg:pb-32">
        <Progress step={step} />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (step < STEPS.length) next();
            else submit();
          }}
          noValidate
          className="mt-8 rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-8"
        >
          {step === 1 && <Step1 data={data} update={update} />}
          {step === 2 && <Step2 data={data} update={update} />}
          {step === 3 && <Step3 data={data} update={update} />}
          {step === 4 && <Step4 data={data} update={update} />}
          {step === 5 && <Step5 data={data} />}

          {error && (
            <p role="alert" className="mt-6 text-sm text-[#B23A48]">
              {error}
            </p>
          )}

          <div className="mt-10 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <Button onClick={back} variant="secondary" size="md" trailingIcon={false}>
                ← Back
              </Button>
            ) : (
              <span />
            )}

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--pnp-slate)]">
                Step {step} of {STEPS.length}
              </span>
              <Button type="submit" variant="primary" size="md">
                {step < STEPS.length
                  ? "Continue"
                  : submitting
                    ? "Creating account…"
                    : "Submit membership"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Progress({ step }) {
  return (
    <ol className="grid grid-cols-5 gap-2">
      {STEPS.map((s) => {
        const done = step > s.id;
        const active = step === s.id;
        return (
          <li key={s.id} className="flex flex-col gap-2">
            <span
              aria-hidden="true"
              className={`h-1 w-full rounded-full transition-colors ${
                done
                  ? "bg-[var(--pnp-gold)]"
                  : active
                  ? "bg-[var(--pnp-dark-teal)]"
                  : "bg-[var(--pnp-charcoal)]/15"
              }`}
            />
            <span
              className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
                done
                  ? "text-[var(--pnp-gold)]"
                  : active
                  ? "text-[var(--pnp-dark-teal)]"
                  : "text-[var(--pnp-slate)]/70"
              }`}
            >
              <span className="mr-2">{String(s.id).padStart(2, "0")}</span>
              {s.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function Step1({ data, update }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
        Where do you live?
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        We'll use this to connect you with your state chapter and your ward executive.
      </p>
      <div className="mt-6">
        <Field label="State of residence">
          {(id) => (
            <select
              id={id}
              value={data.state}
              onChange={(e) => update({ state: e.target.value })}
              className={fieldClasses}
            >
              <option value="">Select your state…</option>
              {NIGERIAN_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>
    </div>
  );
}

function Step2({ data, update }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
        Your local government area
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        Type the name of your LGA in {data.state ? data.state : "your state"}.
      </p>
      <div className="mt-6">
        <Field label="Local Government Area">
          {(id) => (
            <input
              id={id}
              type="text"
              value={data.lga}
              onChange={(e) => update({ lga: e.target.value })}
              placeholder="e.g. Ikeja"
              autoComplete="address-level2"
              className={fieldClasses}
            />
          )}
        </Field>
      </div>
    </div>
  );
}

function Step3({ data, update }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
        Your ward
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        Your ward is the smallest political unit — and the foundation of the Party.
      </p>
      <div className="mt-6">
        <Field label="Ward name" hint="If you're unsure, your ward executive can confirm.">
          {(id) => (
            <input
              id={id}
              type="text"
              value={data.ward}
              onChange={(e) => update({ ward: e.target.value })}
              placeholder="e.g. Ward 04 — GRA"
              className={fieldClasses}
            />
          )}
        </Field>
      </div>
    </div>
  );
}
function Step4({ data, update }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
        A little about you
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        Your contact details help your ward executive reach you about meetings, conventions and policy forums.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name">
          {(id) => (
            <input id={id} type="text" value={data.firstName}
              onChange={(e) => update({ firstName: e.target.value })}
              autoComplete="given-name" className={fieldClasses} />
          )}
        </Field>
        <Field label="Last name">
          {(id) => (
            <input id={id} type="text" value={data.lastName}
              onChange={(e) => update({ lastName: e.target.value })}
              autoComplete="family-name" className={fieldClasses} />
          )}
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email">
          {(id) => (
            <input id={id} type="email" value={data.email}
              onChange={(e) => update({ email: e.target.value })}
              autoComplete="email" placeholder="you@example.com" className={fieldClasses} />
          )}
        </Field>
        <Field label="Phone">
          {(id) => (
            <input id={id} type="tel" value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              autoComplete="tel" placeholder="+234 ..." className={fieldClasses} />
          )}
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Age">
          {(id) => (
            <input id={id} type="number" min="18" max="120" value={data.age}
              onChange={(e) => update({ age: e.target.value })}
              className={fieldClasses} />
          )}
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Password">
          {(id) => (
            <input id={id} type="password" value={data.password}
              onChange={(e) => update({ password: e.target.value })}
              autoComplete="new-password" placeholder="At least 8 characters" className={fieldClasses} />
          )}
        </Field>
        <Field label="Confirm password">
          {(id) => (
            <input id={id} type="password" value={data.confirmPassword}
              onChange={(e) => update({ confirmPassword: e.target.value })}
              autoComplete="new-password" placeholder="Repeat your password" className={fieldClasses} />
          )}
        </Field>
      </div>
      <p className="mt-3 text-xs leading-6 text-[var(--pnp-slate)]/80">
        Use at least 8 characters with a letter and a number. Demo prototype —
        do not reuse a password you use elsewhere.
      </p>
      <label className="mt-6 flex items-start gap-3 text-[14px] leading-6 text-[var(--pnp-slate)]">
        <input type="checkbox" checked={data.consent}
          onChange={(e) => update({ consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-[var(--pnp-charcoal)]/30 accent-[var(--pnp-gold)]" />
        <span>
          I confirm the information above is accurate and I agree to abide by the Party's constitution and code of conduct.
        </span>
      </label>
    </div>
  );
}

function Step5({ data }) {
  const rows = [
    ["State", data.state],
    ["LGA", data.lga],
    ["Ward", data.ward],
    ["Name", `${data.firstName} ${data.lastName}`.trim()],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Age", data.age],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
        Review and confirm
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        Check the details below. When you're ready, submit your membership registration.
      </p>
      <dl className="mt-6 divide-y divide-[var(--pnp-charcoal)]/10 rounded-md border border-[var(--pnp-charcoal)]/10">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-[8rem,1fr]">
            <dt className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-dark-teal)]">{label}</dt>
            <dd className="text-[15px] text-[var(--pnp-charcoal)]">
              {value || <span className="text-[var(--pnp-slate)]/60">—</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
