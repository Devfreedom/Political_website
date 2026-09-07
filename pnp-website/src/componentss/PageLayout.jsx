import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PublicLayout from "./layout";

/**
 * PageLayout — wraps every non-home route in the standard public layout
 * (sticky Navbar + Footer) and resets scroll position on route change.
 */
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return children;
}

export default function PageLayout({ children }) {
  return (
    <ScrollToTop>
      <PublicLayout>{children}</PublicLayout>
    </ScrollToTop>
  );
}