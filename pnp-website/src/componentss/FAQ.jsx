import { useState } from "react";
import SectionHeading from "./SectionHeading";

/**
 * FAQ — single-open-at-a-time accordion.
 * Reuses the 01/02/03 numbering treatment from PriorityCard / ManifestoPreview.
 */
export default function FAQ({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-pnp-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Common Questions"
          title={<span id="faq-heading">Common Questions</span>}
          intro="Answers to the things people most often ask before joining, volunteering, or standing as a candidate with the Party."
        />

        <ol className="mt-14 border-t border-[var(--pnp-charcoal)]/10">
          {items.map((item, i) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;
            return (
              <li key={item.id} className="border-b border-[var(--pnp-charcoal)]/10">
                <h3 className="flex items-baseline gap-6">
                  <span className="hidden shrink-0 font-display text-2xl font-medium leading-none text-[var(--pnp-gold)] sm:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-[var(--pnp-dark-teal)]"
                  >
                    <span className="font-display text-lg font-medium leading-snug text-[var(--pnp-charcoal)] md:text-xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--pnp-charcoal)]/15 text-[var(--pnp-dark-teal)] transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[var(--pnp-gold)] text-[var(--pnp-gold)]"
                          : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-6 pl-0 pr-12 sm:pl-[3.25rem]"
                >
                  <p className="max-w-3xl text-[15px] leading-7 text-[var(--pnp-slate)] md:text-base md:leading-8">
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}