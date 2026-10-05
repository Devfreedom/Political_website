/** Completed member routes — fully built pages. */
export const MEMBER_NAV = [
  { label: "Overview", to: "/member", end: true },
  { label: "My Profile", to: "/member/profile" },
  { label: "Membership", to: "/member/membership" },
];

/**
 * Unfinished member routes — placeholder pages arriving in later phases.
 * Rendered under a "Coming soon" group so nothing is presented as complete.
 */
export const MEMBER_NAV_SOON = [
  { label: "My Organisation", to: "/member/organisation" },
  { label: "Events", to: "/member/events" },
  { label: "Announcements", to: "/member/announcements" },
  { label: "Volunteer", to: "/member/volunteer" },
  { label: "Documents", to: "/member/documents" },
  { label: "Messages", to: "/member/messages" },
  { label: "Settings", to: "/member/settings" },
];
