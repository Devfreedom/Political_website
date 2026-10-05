import { useId, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../auth/AuthContext";
import { DEMO_EMAIL, DEMO_PASSWORD } from "../auth/store";

/**
 * LoginForm — demo login against the frontend prototype member store.
 * Frontend-only prototype — credentials are not verified by any server.
 */
export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const errorId = useId();
  const { login, isAuthenticated, ready } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (ready && isAuthenticated) {
    return <Navigate to="/member" replace />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setSubmitting(true);
    const result = await login(email, password);
    setSubmitting(false);

    if (!result.ok) {
      setError("Incorrect email or password. Check your details and try again.");
      return;
    }
    const from = location.state?.from;
    navigate(typeof from === "string" ? from : "/member", { replace: true });
  };

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
              placeholder="••••••••"
              className="rounded-md border border-[var(--pnp-charcoal)]/15 bg-white px-4 py-3 text-sm text-[var(--pnp-charcoal)] placeholder:text-[var(--pnp-slate)]/40 outline-none transition-colors focus:border-[var(--pnp-gold)]"
            />
          </div>

          {error && (
            <p id={errorId} role="alert" className="mt-4 text-sm text-[#B23A48]">
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
              {submitting ? "Signing in…" : "Sign in"}
            </Button>
          </div>

          <p
            role="note"
            className="mt-6 rounded-md bg-[var(--pnp-dark-teal)]/5 px-4 py-3 text-center text-xs leading-6 text-[var(--pnp-slate)]"
          >
            Frontend-only prototype — credentials are not verified by any
            server. Demo account:{" "}
            <strong className="font-semibold text-[var(--pnp-charcoal)]">
              {DEMO_EMAIL}
            </strong>{" "}
            /{" "}
            <strong className="font-semibold text-[var(--pnp-charcoal)]">
              {DEMO_PASSWORD}
            </strong>
          </p>

          <p className="mt-4 text-center text-xs text-[var(--pnp-slate)]">
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
