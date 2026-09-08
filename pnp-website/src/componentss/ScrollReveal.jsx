import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal — wraps children and adds an `is-visible` class once the
 * wrapper enters the viewport. Pairs with the .reveal-* CSS in index.css.
 *
 * Props:
 *   - variant: 'up' | 'down' | 'left' | 'right' | 'fade' (default 'up')
 *   - delay: ms before adding is-visible (default 0)
 *   - threshold: 0..1, how much must be in view (default 0.15)
 *   - once: only fire once (default true)
 *   - as: element tag to render (default 'div')
 *   - className: extra utility classes
 */
export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let delayTimer;

    // Respect reduced motion: snap to visible immediately, no observer.
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Defer so this isn't a synchronous setState inside the effect body.
      queueMicrotask(() => setVisible(true));
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      queueMicrotask(() => setVisible(true));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              delayTimer = setTimeout(() => setVisible(true), delay);
              if (once) observer.unobserve(entry.target);
              return;
            }
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      observer.disconnect();
    };
  }, [delay, threshold, once]);

  const classes = [
    `reveal-${variant}`,
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
