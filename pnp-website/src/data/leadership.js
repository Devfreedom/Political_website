import nationalChairperson from "../assets/leadership/national_chairperson.jpeg";
import nationalViceChairman from "../assets/leadership/national_vice_chairman.jpg";
import secretaryGeneral from "../assets/leadership/secretary_general.jpeg";
import treasurer from "../assets/leadership/treasurer.jpg";

const chairperson = {
  id: 1,
  slug: "adaeze-okeke",
  name: "Adaeze N. Okeke",
  title: "National Chairperson",
  tenure: "2026 — Present",
  initials: "AO",
  image: nationalChairperson,
  imageAlt: "Portrait of Adaeze N. Okeke, National Chairperson of PNP",
  region: "South-East",
  state: "Anambra",
};

const viceChairman = {
  id: 2,
  slug: "tunde-bakare",
  name: "Tunde A. Bakare",
  title: "Vice Chairperson, North",
  tenure: "2026 — Present",
  initials: "TB",
  image: nationalViceChairman,
  imageAlt: "Portrait of Tunde A. Bakare, Vice Chairperson North of PNP",
  region: "North-West",
  state: "Kano",
};

const secretary = {
  id: 3,
  slug: "funmi-adesanya",
  name: "Funmi A. Adesanya",
  title: "Secretary-General",
  tenure: "2026 — Present",
  initials: "FA",
  image: secretaryGeneral,
  imageAlt: "Portrait of Funmi A. Adesanya, Secretary-General of PNP",
  region: "South-West",
  state: "Lagos",
};

const treasurerData = {
  id: 4,
  slug: "ibrahim-danladi",
  name: "Ibrahim S. Danladi",
  title: "Treasurer",
  tenure: "2026 — Present",
  initials: "ID",
  image: treasurer,
  imageAlt: "Portrait of Ibrahim S. Danladi, Treasurer of PNP",
  region: "North-Central",
  state: "Plateau",
};

const bios = {
  "adaeze-okeke": {
    short:
      "Adaeze N. Okeke is the founding National Chairperson of the Progressive Nigeria Party. A former public-interest lawyer with two decades of experience in governance reform, she was elected at the Party's inaugural convention in 2026 and leads the National Executive Committee.",
    long: [
      "Adaeze N. Okeke is the founding National Chairperson of the Progressive Nigeria Party. A former public-interest lawyer with two decades of experience in governance reform, she was elected at the Party's inaugural convention in 2026 and leads the National Executive Committee.",
      "Before entering party politics, Adaeze built her career at the intersection of constitutional law, anti-corruption advocacy and civic education.",
      "As National Chairperson, she chairs the National Executive Committee and is responsible for the strategic direction of the Party.",
      "Adaeze holds an LLB from the University of Nigeria, Nsukka and an LLM from the London School of Economics.",
    ],
  },
  "tunde-bakare": {
    short:
      "Tunde A. Bakare is Vice Chairperson (North) of PNP. A former senator and policy economist, he coordinates the Party's work across the northern states.",
    long: [
      "Tunde A. Bakare is Vice Chairperson (North) of the Progressive Nigeria Party. A former senator and policy economist, he coordinates the Party's organising work across the northern states and chairs the Northern Policy Council.",
      "Tunde spent fifteen years in the public service, including a term as a senator and earlier roles in the Federal Ministry of Finance and the Central Bank of Nigeria.",
      "Within PNP, Tunde leads the Party's engagement with traditional institutions, governors and state assemblies in the nineteen northern states.",
      "He holds a BSc in Economics from Ahmadu Bello University and an MPA from the Harvard Kennedy School.",
    ],
  },
  "funmi-adesanya": {
    short:
      "Funmi A. Adesanya is Secretary-General of PNP. A journalist-turned-political-organiser, she runs the Party's national secretariat and communications.",
    long: [
      "Funmi A. Adesanya is Secretary-General of the Progressive Nigeria Party. A journalist-turned-political-organiser, she runs the Party's national secretariat, communications function and internal coordination between state chapters.",
      "Before joining PNP's founding convention, Funmi spent twelve years as a national newspaper editor and later as a media adviser to civic-election observation missions.",
      "As Secretary-General she is the chief administrative officer of the Party, responsible for record-keeping, convention planning, and liaison with INEC.",
      "She is a graduate of the University of Ibadan and holds a diploma in Political Communication from the London School of Economics.",
    ],
  },
  "ibrahim-danladi": {
    short:
      "Ibrahim S. Danladi is Treasurer of PNP. A chartered accountant with two decades of public-finance experience, he is responsible for the Party's finances and audited disclosures.",
    long: [
      "Ibrahim S. Danladi is Treasurer of the Progressive Nigeria Party. A chartered accountant with two decades of public-finance experience, he is responsible for the Party's finances, contribution systems and audited annual disclosures.",
      "Ibrahim previously served as Director of Finance in a federal ministry and as an adviser to a state government's fiscal-reform programme. He is a Fellow of ICAN.",
      "Within PNP, Ibrahim chairs the Finance and Audit Committee and oversees the publication of the Party's quarterly and annual finance reports.",
      "He holds a BSc in Accounting from the University of Jos and an MSc in Public Finance from the University of Glasgow.",
    ],
  },
};

function withBio(meta) {
  const b = bios[meta.slug] ?? { short: "", long: [] };
  return { ...meta, bio: b.short, bioLong: b.long };
}

export const leadership = [
  withBio(chairperson),
  withBio(viceChairman),
  withBio(secretary),
  withBio(treasurerData),
];

export function findLeaderBySlug(slug) {
  return leadership.find((l) => l.slug === slug) ?? null;
}

export function findLeaderById(id) {
  return leadership.find((l) => String(l.id) === String(id)) ?? null;
}