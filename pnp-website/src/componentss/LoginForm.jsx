import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

/**
 * LoginForm — frontend-only member login prototype.
 * Validates email format on submit; on "success" shows an inline notice.
 */
export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const emailErrorId = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => setStatus("success"), 600);
  }

  if (status === "success") {
    return (
      <section className="bg-[var(--pnp-white)]">
        <div className="mx-auto max-w-md px-6 pb-24 pt-2 text-center lg:px-0 lg:pb-32">
          <div className="rounded-md border border-[var(--pnp-gold)]/30 bg-[var(--pnp-gold)]/5 p-8">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
              className="mx-auto text-[var(--pnp-gold)]"
            >
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="m11 18 5 5 9-10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="mt-4 font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
              Signed in.
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
              You're now signed in as{" "}
              <strong className="font-medium text-[var(--pnp-charcoal)]">
                {email}
              </strong>
              . This is a prototype — no real session has been created.
            </p>
            <div className="mt-6">
              <Button
                onClick={() => {
                  setStatus("idle");
                  setEmail("");
                  setPassword("");
                }}
                variant="secondary"
                size="sm"
              >
                Sign in as another user
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--pnp-white)]">
      <div className="mx-auto max-w-md px-6 pb-24 pt-2 lg:px-0 lg:pb-32">
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-8"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor={emailId}
              className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-dark-teal)]"
            >
              Email
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === "error" && error.includes("email")}
              aria-describedby={status === "error" ? emailErrorId : undefined}
              placeholder="you@example.com"
              className="rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] placeholder:text-[var(--pnp-slate)]/60 outline-none transition-colors focus:border-[var(--pnp-gold)]"
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label
              htmlFor={passwordId}
              className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[var(--pnp-dark-teal)]"
            >
              Password
            </label>
            <input
              id={passwordId}
              type="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={status === "error" && error.includes("password")}
              aria-describedby={status === "error" ? emailErrorId : undefined}
              placeholder="••••••••"
              className="rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] placeholder:text-[var(--pnp-slate)]/40 outline-none transition-colors focus:border-[var(--pnp-gold)]"
            />
          </div>

          {status === "error" && error && (
            <p
              id={emailErrorId}
              role="alert"
              className="mt-4 text-sm text-[#B23A48]"
            >
              {error}
            </p>
          )}

          <div className="mt-8">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full justify-center"
              trailingIcon={false}
            >
              {status === "submitting" ? "Signing in…" : "Sign in"}
            </Button>
          </div>

          <p className="mt-6 text-center text-xs text-[var(--pnp-slate)]">
            Forgot your password?{" "}
            <Link
              to="/password-reset"
              className="font-semibold text-[var(--pnp-dark-teal)] hover:underline"
            >
              Reset it
            </Link>
            .
          </p>
          <p className="mt-2 text-center text-xs text-[var(--pnp-slate)]">
            Not a member yet?{" "}
            <Link
              to="/join"
              className="font-semibold text-[var(--pnp-dark-teal)] hover:underline"
            >
              Join PNP
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
