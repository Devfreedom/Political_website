import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * ErrorBoundary — reusable crash guard for public and member routes.
 * Catches render failures below it and shows a useful fallback with
 * retry and navigation instead of a blank page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env?.DEV) {
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const onMemberArea =
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/member");

    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--pnp-white)] px-6 py-16">
        <div className="w-full max-w-lg rounded-md border border-[var(--pnp-charcoal)]/10 bg-white p-8 text-center md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-gold)]">
            Something went wrong
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium text-[var(--pnp-charcoal)]">
            This page could not be displayed.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[var(--pnp-slate)]">
            The error has been contained. Try again, or return to a page you
            know works — nothing in your account was changed by this error.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex w-full items-center justify-center rounded-md bg-[var(--pnp-dark-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--pnp-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)] sm:w-auto"
            >
              Try again
            </button>
            {onMemberArea ? (
              <Link
                to="/member"
                className="inline-flex w-full items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-150 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)] sm:w-auto"
              >
                Back to member overview
              </Link>
            ) : (
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center rounded-md border border-[var(--pnp-dark-teal)]/30 px-6 py-3 text-sm font-semibold text-[var(--pnp-dark-teal)] transition-colors duration-150 hover:bg-[var(--pnp-dark-teal)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pnp-gold)] sm:w-auto"
              >
                Back to homepage
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
