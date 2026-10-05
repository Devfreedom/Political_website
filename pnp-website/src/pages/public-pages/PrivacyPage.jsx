import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";

/**
 * PrivacyPage — prototype privacy notice for the PNP frontend.
 * Explains collection, use, retention, rights and contact with reference
 * to Nigeria's Data Protection Act 2023 and the NDPC. This prototype
 * collects no real data: demo accounts live only in the visitor's browser.
 */
const SECTIONS = [
  {
    heading: "What we collect",
    body: "In this prototype, the membership form asks for contact and chapter details (name, email, phone, state, LGA and ward) so the demo portal can personalise the dashboard. These details are stored only in your own browser's local storage and are never sent to any server, because no backend exists yet. Do not enter real sensitive information into this prototype.",
  },
  {
    heading: "How we use it",
    body: "Demo details are used only to display your dashboard, membership card and profile within this browser session. A production PNP platform would use submitted details to administer membership, communicate party updates and meet legal obligations — each purpose explained at the point of collection.",
  },
  {
    heading: "Retention",
    body: "Prototype data persists in your browser until you log out (which clears the demo session) or clear your browser storage. A production platform would keep membership records only as long as necessary and publish a retention schedule.",
  },
  {
    heading: "Your rights",
    body: "Under Nigeria's Data Protection Act 2023, enforced by the Nigeria Data Protection Commission (NDPC), you have the right to be informed, to access and correct your data, to request erasure, and to withdraw consent. In this prototype you can exercise these directly: editing your profile updates the stored record, and logging out clears the session.",
  },
  {
    heading: "Contact",
    body: "For privacy questions, contact the PNP National Secretariat, Plot 42 Independence Avenue, Central Business District, Abuja, or email hello@pnp.ng. Complaints about data protection may also be directed to the NDPC.",
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Privacy notice"
        title="How PNP handles your information."
        intro="A plain-language notice for this prototype, written with Nigeria's Data Protection Act 2023 in mind."
      />

      <section className="bg-[var(--pnp-white)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p
            role="note"
            className="rounded-md border border-[var(--pnp-gold)]/40 bg-[var(--pnp-gold)]/10 px-5 py-4 text-sm leading-7 text-[var(--pnp-charcoal)]"
          >
            Prototype notice: this site has no backend. Anything you enter
            stays in your own browser and must be treated as disposable demo
            data — never enter real sensitive information here.
          </p>

          <ol className="mt-12 flex flex-col gap-10">
            {SECTIONS.map((s, i) => (
              <li key={s.heading}>
                <p className="font-display text-xl font-medium text-[var(--pnp-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-[var(--pnp-charcoal)]">
                  {s.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-8 text-[var(--pnp-slate)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageLayout>
  );
}
