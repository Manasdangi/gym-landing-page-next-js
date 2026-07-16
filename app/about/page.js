import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";

const values = [
  {
    title: "Coaching first",
    description:
      "Every program starts with form, progression, and the kind of guidance that keeps training sustainable."
  },
  {
    title: "Built for consistency",
    description:
      "From early access to recovery spaces, the club is designed to make showing up feel easier."
  },
  {
    title: "Energy with purpose",
    description:
      "Classes, equipment, and floor layouts are tuned for focused sessions without the intimidation factor."
  }
];

export const metadata = {
  title: "About Us | PulseFit Gym",
  description: "Learn more about PulseFit Gym and its coaching-led training experience."
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="about-hero">
        <p className="eyebrow">About PulseFit</p>
        <h1>We built a gym for people who want momentum, not guesswork.</h1>
        <p>
          PulseFit brings coaching, performance equipment, group energy, and recovery
          together in one training environment. Our goal is simple: help members build
          a routine they can trust and keep.
        </p>
      </section>

      <section className="info-band about-band">
        <div>
          <span>Founded for</span>
          <strong>Busy members who want clear training structure</strong>
        </div>
        <div>
          <span>Focused on</span>
          <strong>Strength, conditioning, mobility, and recovery</strong>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Our Approach"
          title="Everything is shaped around better training habits"
          description="The space, schedule, and coaching model are built to remove friction and keep progress visible."
        />
        <div className="card-grid about-grid">
          {values.map((value) => (
            <article className="trainer-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-copy">
          <p className="eyebrow">Come See It</p>
          <h2>Find your rhythm on the floor.</h2>
          <p>
            Tour the club, meet a coach, and see how PulseFit can fit into your week.
          </p>
        </div>
        <a className="primary-button" href="mailto:hello@pulsefitgym.com">
          Book a Free Tour
        </a>
      </section>
    </main>
  );
}
