import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import LoginForm from "../../componentss/LoginForm";

export default function LoginPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Member Login"
        title="Sign in to your PNP account."
        intro="Access your membership profile, state chapter updates, and Party documents. Frontend-only prototype — credentials are not verified."
      />
      <LoginForm />
    </PageLayout>
  );
}