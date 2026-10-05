function greetingFor(hour) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

/** DashboardHeader — answers "Who am I?" at a glance. */
export default function DashboardHeader({ firstName }) {
  const greeting =
    typeof window === "undefined"
      ? "Welcome"
      : greetingFor(new Date().getHours());

  return (
    <header>
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pnp-slate)]">
        Member overview
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
        {greeting}, {firstName}
      </h1>
      <p className="mt-2 text-[15px] leading-7 text-[var(--pnp-slate)]">
        Here is your PNP member overview.
      </p>
    </header>
  );
}
