import { Route, Routes } from "react-router-dom";

import Home from "./pages/public-pages/Home";
import AboutPage from "./pages/public-pages/AboutPage";
import PoliciesPage from "./pages/public-pages/PoliciesPage";
import ManifestoPage from "./pages/public-pages/ManifestoPage";
import StructurePage from "./pages/public-pages/StructurePage";
import LeadershipPage from "./pages/public-pages/LeadershipPage";
import LeaderDetailPage from "./pages/public-pages/LeaderDetailPage";
import NewsPage from "./pages/public-pages/NewsPage";
import NewsDetailPage from "./pages/public-pages/NewsDetailPage";
import EventsPage from "./pages/public-pages/EventsPage";
import EventDetailPage from "./pages/public-pages/EventDetailPage";
import JoinPage from "./pages/public-pages/JoinPage";
import ChaptersPage from "./pages/public-pages/ChaptersPage";
import VoterInfoPage from "./pages/public-pages/VoterInfoPage";
import LoginPage from "./pages/public-pages/LoginPage";
import NotFoundPage from "./pages/public-pages/NotFoundPage";
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberMembership from "./pages/member/MemberMembership";
import MemberPlaceholder from "./pages/member/MemberPlaceholder";
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
      <Route path="/news/:slug" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:slug" element={<EventDetailPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/voters" element={<VoterInfoPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Member portal (Phase 1: shell + dashboard; children are placeholders) */}
      <Route path="/member" element={<MemberDashboard />} />
      <Route path="/member/profile" element={<MemberPlaceholder title="My Profile" />} />
      <Route path="/member/membership" element={<MemberMembership />} />
      <Route path="/member/organisation" element={<MemberPlaceholder title="My Organisation" />} />
      <Route path="/member/events" element={<MemberPlaceholder title="Events" />} />
      <Route path="/member/announcements" element={<MemberPlaceholder title="Announcements" />} />
      <Route path="/member/volunteer" element={<MemberPlaceholder title="Volunteer" />} />
      <Route path="/member/documents" element={<MemberPlaceholder title="Documents" />} />
      <Route path="/member/messages" element={<MemberPlaceholder title="Messages" />} />
      <Route path="/member/settings" element={<MemberPlaceholder title="Settings" />} />

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
      <Route
        path="/password-reset"
        element={
          <ComingSoon
            title="Password reset"
            description="Member accounts are not active in this frontend prototype. Password reset will be available when the member portal launches."
          />
        }
      />
      <Route
        path="/manifesto/full"
        element={
          <ComingSoon
            title="Full PNP manifesto"
            description="The complete manifesto document is being prepared for publication. The current public site contains a preview of its core principles."
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
