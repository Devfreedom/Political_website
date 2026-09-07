import PageLayout from "../../componentss/PageLayout";
import PageHero from "../../componentss/PageHero";
import JoinForm from "../../componentss/JoinForm";

export default function JoinPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Join PNP"
        title="Become a member."
        intro="Membership is open to every Nigerian aged 18 and above. The form below takes about five minutes — you can save and return later if you need to."
      />
      <JoinForm />
    </PageLayout>
  );
}