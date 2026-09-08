export const events = [
  {
    day: "18",
    month: "Oct 2026",
    title: "National Policy Convention — Abuja",
    location: "International Conference Centre, Abuja",
    time: "9:00 AM — 5:00 PM",
    slug: "national-policy-convention-abuja-oct-2026",
  },
  {
    day: "02",
    month: "Nov 2026",
    title: "Town Hall on the Economy — Lagos",
    location: "Eko Hotel & Suites, Victoria Island",
    time: "3:00 PM — 7:00 PM",
    slug: "town-hall-economy-lagos-nov-2026",
  },
  {
    day: "21",
    month: "Nov 2026",
    title: "Youth & Innovation Summit — Kano",
    location: "Kano Business Hub, Kano",
    time: "10:00 AM — 4:00 PM",
    slug: "youth-innovation-summit-kano-nov-2026",
  },
  {
    day: "12",
    month: "Dec 2026",
    title: "Education Reform Dialogue — Enugu",
    location: "Enugu State Civic Centre",
    time: "10:00 AM — 2:00 PM",
    slug: "education-reform-dialogue-enugu-dec-2026",
  },
  {
    day: "04",
    month: "Dec 2026",
    title: "Healthcare Policy Workshop — Ilorin",
    location: "Kwara State Banquet Hall",
    time: "9:30 AM — 3:00 PM",
    slug: "healthcare-policy-workshop-ilorin-dec-2026",
  },
  {
    day: "22",
    month: "Dec 2026",
    title: "Infrastructure Roundtable — Port Harcourt",
    location: "Rivers State Secretariat Complex",
    time: "11:00 AM — 4:00 PM",
    slug: "infrastructure-roundtable-port-harcourt-dec-2026",
  },
];

export function findEventBySlug(slug) {
  return events.find((item) => item.slug === slug) ?? null;
}
