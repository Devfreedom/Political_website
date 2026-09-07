import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates from 0 to `to` once the element enters the viewport.
 * Falls back to the final value if IntersectionObserver is unavailable or
 * if the user prefers reduced motion.
 *
 * Props:
 *   - to: target number
 *   - duration: ms for the count (default 1400)
 *   - start: starting number (default 0)
 *   - className: passed through to the rendered <span>
 */
export default function CountUp({
  to,
  duration = 1400,
  start = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);
  const playedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      // Defer so this isn't a synchronous setState inside the effect body.
      queueMicrotask(() => setValue(to));
      return undefined;
    }

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      const begin = performance.now();
      const tick = (now) => {
        const elapsed = now - begin;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const current = start + (to - start) * eased;
        // Avoid showing "37.4" — round to integer for clean institutional stats.
        setValue(Math.round(current));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, start]);

  return (
    <span ref={ref} className={className} {...rest}>
      {value}
    </span>
  );
}