import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

/** RequireAuth — redirects unauthenticated visitors to /login. */
export default function RequireAuth({ children }) {
  const { isAuthenticated, ready } = useAuth();
  const location = useLocation();

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--pnp-white)]">
        <p className="text-sm text-[var(--pnp-slate)]">Loading member portal…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
