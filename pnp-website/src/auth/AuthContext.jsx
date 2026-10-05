import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
import {
  ensureSeed,
  createUser,
  verifyCredentials,
  updateUser,
  getSessionId,
  setSessionId,
  clearSession,
  getUsers,
} from "./store";

/**
 * AuthProvider — centralized demo auth state (frontend prototype only).
 * Exposes currentUser / isAuthenticated / login / signup / logout /
 * updateProfile. Session persists via localStorage; passwords never do.
 *
 * PRODUCTION AUTH REQUIREMENTS (do not launch without these):
 * - server-side password hashing with a slow KDF (bcrypt/argon2), never
 *   client-side digests and never plaintext anywhere
 * - secure session management (httpOnly, Secure, SameSite cookies)
 * - server-side authorization checks on every member route and API call
 * - database persistence with backups, replacing src/auth/store.js entirely
 * - account recovery and email verification flows
 * - rate limiting and brute-force protection on login/signup
 * UI code consumes only the public user shape, so the store can be
 * swapped for API calls without rewriting components.
 */
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const users = await ensureSeed();
      const sessionId = getSessionId();
      const match = users.find((u) => u.memberId === sessionId) ?? null;
      if (!cancelled) {
        setCurrentUser(
          match
            ? {
                memberId: match.memberId,
                firstName: match.firstName,
                lastName: match.lastName,
                fullName: match.fullName,
                email: match.email,
                phone: match.phone,
                state: match.state,
                lga: match.lga,
                ward: match.ward,
                membershipStatus: match.membershipStatus,
                membershipType: match.membershipType,
                joinedDate: match.joinedDate,
              }
            : null
        );
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const signup = useCallback(async (details) => {
    const result = await createUser(details);
    if (!result.ok) return result;
    setSessionId(result.user.memberId);
    setCurrentUser(result.user);
    return result;
  }, []);

  const login = useCallback(async (email, password) => {
    const user = await verifyCredentials(email, password);
    if (!user) return { ok: false, error: "invalid" };
    setSessionId(user.memberId);
    setCurrentUser(user);
    return { ok: true, user };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setCurrentUser(null);
  }, []);

  const updateProfile = useCallback(
    (patch) => {
      if (!currentUser) return { ok: false, error: "not-found" };
      const result = updateUser(currentUser.memberId, patch);
      if (result.ok) setCurrentUser(result.user);
      return result;
    },
    [currentUser]
  );

  const refresh = useCallback(() => {
    const users = getUsers();
    const sessionId = getSessionId();
    const match = users.find((u) => u.memberId === sessionId) ?? null;
    setCurrentUser(
      match
        ? {
            memberId: match.memberId,
            firstName: match.firstName,
            lastName: match.lastName,
            fullName: match.fullName,
            email: match.email,
            phone: match.phone,
            state: match.state,
            lga: match.lga,
            ward: match.ward,
            membershipStatus: match.membershipStatus,
            membershipType: match.membershipType,
            joinedDate: match.joinedDate,
          }
        : null
    );
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: currentUser !== null,
      ready,
      signup,
      login,
      logout,
      updateProfile,
      refresh,
    }),
    [currentUser, ready, signup, login, logout, updateProfile, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
