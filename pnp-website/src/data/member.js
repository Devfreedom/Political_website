import { events } from "./events";
import { news } from "./news";

/**
 * member portal mock data — frontend prototype only.
 * No backend, no real authentication. Single source of truth for
 * member identity, next event and announcements; import from here
 * rather than hardcoding values in JSX.
 */
export const member = {
  id: "PNP-000124",
  firstName: "Amina",
  lastName: "Musa",
  fullName: "Amina Y. Musa",
  email: "amina.musa@example.com",
  phone: "+234 803 000 0124",
  membershipStatus: "ACTIVE",
  state: "Plateau",
  lga: "Mangu",
  ward: "Ward 08",
  joinedDate: "January 2026",
  initials: "AM",
};

const nextEvent = events[1] ?? events[0];

export const memberUpcomingEvent = {
  title: nextEvent.title,
  date: `${nextEvent.day} ${nextEvent.month}`,
  time: nextEvent.time,
  location: nextEvent.location,
  category: "Town Hall",
};

export const memberAnnouncements = news.slice(0, 3).map((n) => ({
  title: n.title,
  date: n.date,
  category: n.category,
}));
