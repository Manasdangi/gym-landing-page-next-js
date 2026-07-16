import { Header } from "@/components/Header";
import { MembersList } from "@/components/MembersList";

export const metadata = {
  title: "Members | PulseFit Gym",
  description: "A paginated member list powered by a local dummy API."
};

export default function MembersPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="about-hero">
        <p className="eyebrow">Dummy API Demo</p>
        <h1>Members loaded from your local API route.</h1>
        <p>
          This page fetches from the Next.js API route at /api/members and uses
          page and limit query parameters to move through the data.
        </p>
      </section>

      <MembersList />
    </main>
  );
}
