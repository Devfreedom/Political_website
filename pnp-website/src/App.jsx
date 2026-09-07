import { Route, Routes } from "react-router-dom";

import Home from "./pages/public-pages/Home";
import AboutPage from "./pages/public-pages/AboutPage";
import PoliciesPage from "./pages/public-pages/PoliciesPage";
import ManifestoPage from "./pages/public-pages/ManifestoPage";
import StructurePage from "./pages/public-pages/StructurePage";
import LeadershipPage from "./pages/public-pages/LeadershipPage";
import LeaderDetailPage from "./pages/public-pages/LeaderDetailPage";
import NewsPage from "./pages/public-pages/NewsPage";
import EventsPage from "./pages/public-pages/EventsPage";
import JoinPage from "./pages/public-pages/JoinPage";
import LoginPage from "./pages/public-pages/LoginPage";
import NotFoundPage from "./pages/public-pages/NotFoundPage";
import ComingSoon from "./componentss/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Real pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/policies" element={<PoliciesPage />} />
      <Route path="/manifesto" element={<ManifestoPage />} />
      <Route path="/structure" element={<StructurePage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/leadership/:slug" element={<LeaderDetailPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Placeholder routes — share the ComingSoon component with bespoke copy */}
      <Route
        path="/volunteer"
        element={
          <ComingSoon
            title="Volunteer with PNP"
            description="Our volunteer programme is being organised through state chapters. This page will host sign-up when the programme launches."
          />
        }
      />
      <Route
        path="/donate"
        element={
          <ComingSoon
            title="Support the Party"
            description="PNP is funded by transparent, publicly disclosed contributions. The donation portal is in development."
          />
        }
      />
      <Route
        path="/register"
        element={
          <ComingSoon
            title="Register to vote"
            description="Voter registration is administered by INEC. We'll link out to the official portal once integrated."
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}