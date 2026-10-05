/**
 * chapters — illustrative SAMPLE data for State → LGA → Ward discovery.
 * Frontend prototype only. Not a real party register and not INEC data.
 * Wards and meeting notes below are placeholders to demonstrate the
 * National → State → LGA → Ward → Member journey.
 */
export const chapters = [
  {
    state: "Lagos",
    lgAs: [
      { name: "Ikeja", wards: ["Ward 01 — GRA", "Ward 04 — Allen", "Ward 07 — Onigbongbo"] },
      { name: "Surulere", wards: ["Ward 02 — Aguda", "Ward 05 — Itire", "Ward 08 — Coker"] },
    ],
  },
  {
    state: "Kano",
    lgAs: [
      { name: "Nassarawa", wards: ["Ward 03 — Kawo", "Ward 06 — Brigade"] },
      { name: "Fagge", wards: ["Ward 01 — Sabon Gari", "Ward 05 — Kwarin Gogau"] },
    ],
  },
  {
    state: "Enugu",
    lgAs: [
      { name: "Enugu North", wards: ["Ward 02 — GRA", "Ward 05 — Ogbete"] },
      { name: "Nsukka", wards: ["Ward 01 — University", "Ward 04 — Barracks"] },
    ],
  },
  {
    state: "Rivers",
    lgAs: [
      { name: "Port Harcourt", wards: ["Ward 04 — D-line", "Ward 09 — Borokiri"] },
      { name: "Obio-Akpor", wards: ["Ward 02 — Rumuola", "Ward 06 — Choba"] },
    ],
  },
  {
    state: "Kwara",
    lgAs: [{ name: "Ilorin West", wards: ["Ward 03 — Adewole", "Ward 07 — Oloje"] }],
  },
  {
    state: "FCT - Abuja",
    lgAs: [{ name: "Abuja Municipal", wards: ["Ward 01 — Central", "Ward 05 — Garki"] }],
  },
];

export const MEETING_NOTE =
  "Ward meetings hold monthly. Confirm the date with your ward executive before attending.";
