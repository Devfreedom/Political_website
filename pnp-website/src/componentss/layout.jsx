import Navbar from "./navigation";
import Footer from "./Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--pnp-white)]">
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}