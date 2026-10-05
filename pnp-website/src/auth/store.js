import { member as seedMember } from "../data/member";

/**
 * Demo auth store — FRONTEND PROTOTYPE ONLY.
 *
 * - Users and the demo session persist in localStorage so a page refresh
 *   keeps the member signed in. No backend, no cookies, no real security.
 * - Passwords are NEVER stored in plaintext: only a SHA-256 digest (with a
 *   demo pepper) is kept, and digests never leave this module. SHA-256
 *   here is obfuscation for a demo, NOT production password security.
 * - Production will require: backend authentication, a slow password hash
 *   (bcrypt/argon2), secure httpOnly session cookies, server-side
 *   authorization, database persistence, account recovery and email
 *   verification.
 */

const USERS_KEY = "pnp.users.v1";
const SESSION_KEY = "pnp.session.v1";
const SEQ_KEY = "pnp.seq.v1";

/** Demo seed account. Plaintext appears here in code only — never in storage. */
export const DEMO_EMAIL = seedMember.email;
export const DEMO_PASSWORD = "Password123";

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode etc.) — session simply won't persist
  }
}

/** SHA-256 digest with sync fallback. Demo-grade only, not a password KDF. */
export async function hashPassword(password) {
  try {
    const subtle = globalThis.crypto?.subtle;
    if (subtle) {
      const bytes = await subtle.digest(
        "SHA-256",
        new TextEncoder().encode(`pnp-demo:${password}`)
      );
      return [...new Uint8Array(bytes)]
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
  } catch {
    // fall through to non-crypto fallback below
  }
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  const s = `pnp-demo:${password}`;
  for (let i = 0; i < s.length; i += 1) {
    const ch = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return `fallback:${(h2 >>> 0).toString(16)}${(h1 >>> 0).toString(16)}`;
}

/** Public shape — never includes the password digest. */
export function toPublic(user) {
  if (!user) return null;
  const rest = { ...user };
  delete rest.passHash;
  return rest;
}

function nextMemberId(users) {
  const max = users.reduce((acc, u) => {
    const n = Number(String(u.memberId).replace(/\D/g, ""));
    return Number.isFinite(n) && n > acc ? n : acc;
  }, 124);
  const next = Math.max(max + 1, readJSON(SEQ_KEY, 125));
  writeJSON(SEQ_KEY, next + 1);
  return `PNP-${String(next).padStart(6, "0")}`;
}

function joinedNow() {
  const d = new Date();
  const month = d.toLocaleString("en-US", { month: "long" });
  return `${month} ${d.getFullYear()}`;
}

/** Seed the pre-existing demo member on first run. */
export async function ensureSeed() {
  const existing = readJSON(USERS_KEY, null);
  if (Array.isArray(existing)) return existing;
  const seed = {
    memberId: seedMember.id,
    firstName: seedMember.firstName,
    lastName: seedMember.lastName,
    fullName: seedMember.fullName,
    email: seedMember.email.toLowerCase(),
    phone: seedMember.phone,
    state: seedMember.state,
    lga: seedMember.lga,
    ward: seedMember.ward,
    membershipStatus: seedMember.membershipStatus,
    membershipType: seedMember.membershipType,
    joinedDate: seedMember.joinedDate,
    passHash: await hashPassword(DEMO_PASSWORD),
  };
  writeJSON(USERS_KEY, [seed]);
  return [seed];
}

export function getUsers() {
  const users = readJSON(USERS_KEY, []);
  return Array.isArray(users) ? users : [];
}

export function findByEmail(email) {
  const needle = String(email).trim().toLowerCase();
  return getUsers().find((u) => u.email === needle) ?? null;
}

export async function createUser({ fullName, email, phone, state, lga, ward, password }) {
  const cleanEmail = String(email).trim().toLowerCase();
  if (findByEmail(cleanEmail)) return { ok: false, error: "duplicate" };
  const users = getUsers();
  const parts = String(fullName).trim().split(/\s+/);
  const user = {
    memberId: nextMemberId(users),
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
    fullName: String(fullName).trim(),
    email: cleanEmail,
    phone: String(phone).trim(),
    state,
    lga: String(lga).trim(),
    ward: String(ward).trim(),
    membershipStatus: "ACTIVE",
    membershipType: "Full Member",
    joinedDate: joinedNow(),
    passHash: await hashPassword(password),
  };
  writeJSON(USERS_KEY, [...users, user]);
  return { ok: true, user: toPublic(user) };
}

export async function verifyCredentials(email, password) {
  const user = findByEmail(email);
  if (!user) return null;
  const digest = await hashPassword(password);
  return digest === user.passHash ? toPublic(user) : null;
}

export function updateUser(memberId, patch) {
  const users = getUsers();
  const idx = users.findIndex((u) => u.memberId === memberId);
  if (idx === -1) return { ok: false, error: "not-found" };
  if (patch.email) {
    const needle = String(patch.email).trim().toLowerCase();
    const clash = users.find((u) => u.email === needle && u.memberId !== memberId);
    if (clash) return { ok: false, error: "duplicate" };
  }
  const updated = {
    ...users[idx],
    ...patch,
    memberId: users[idx].memberId,
    membershipStatus: users[idx].membershipStatus,
    membershipType: users[idx].membershipType,
    joinedDate: users[idx].joinedDate,
  };
  if (patch.fullName) {
    const parts = String(patch.fullName).trim().split(/\s+/);
    updated.firstName = parts[0] ?? updated.firstName;
    updated.lastName = parts.slice(1).join(" ");
  }
  const next = [...users];
  next[idx] = updated;
  writeJSON(USERS_KEY, next);
  return { ok: true, user: toPublic(updated) };
}

export function getSessionId() {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
}

export function setSessionId(memberId) {
  try {
    localStorage.setItem(SESSION_KEY, memberId);
  } catch {
    // ignore — session simply won't persist
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
