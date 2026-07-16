import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { PlanCard } from "@/components/PlanCard";
import { TrainerCard } from "@/components/TrainerCard";
import { TestimonialCard } from "@/components/TestimonialCard";

export const dynamic = "force-dynamic";

const plans = [
  {
    name: "Starter",
    price: "$39",
    description: "For building consistency with guided essentials and floor access.",
    features: ["Unlimited gym floor", "2 group classes weekly", "Body composition check"]
  },
  {
    name: "Elite",
    price: "$79",
    description: "For members who want coaching, classes, and recovery in one plan.",
    features: ["Unlimited classes", "Monthly coach review", "Sauna and recovery lounge"],
    featured: true
  },
  {
    name: "Athlete",
    price: "$129",
    description: "For performance-focused training with premium access and personal support.",
    features: ["4 PT sessions monthly", "Priority class booking", "Custom nutrition roadmap"]
  }
];

const trainers = [
  {
    name: "Maya Torres",
    role: "Strength Coach",
    bio: "Builds smart power programs with a focus on technique, mobility, and progression."
  },
  {
    name: "Jordan Lee",
    role: "HIIT Specialist",
    bio: "Known for fast-paced conditioning blocks that keep members pushing with control."
  },
  {
    name: "Amir Khan",
    role: "Performance Trainer",
    bio: "Works with athletes and beginners alike to improve speed, stamina, and confidence."
  }
];

const testimonials = [
  {
    quote:
      "I joined for the equipment and stayed because the coaches made training feel sustainable.",
    name: "Rhea S.",
    result: "Lost 18 lbs in 4 months"
  },
  {
    quote:
      "The vibe is intense without being intimidating. Every area feels designed for real progress.",
    name: "Daniel M.",
    result: "Added 70 lbs to deadlift"
  },
  {
    quote:
      "The recovery zone and class schedule changed my routine completely. I actually look forward to sessions.",
    name: "Kiara T.",
    result: "5x weekly attendance streak"
  }
];

const metrics = [
  { value: "12K+", label: "Workouts logged" },
  { value: "24/7", label: "Member access" },
  { value: "40+", label: "Weekly classes" }
];

async function getHomePageData() {
  return {
    metrics,
    plans,
    trainers,
    testimonials
  };
}

export default async function HomePage() {
  const homePageData = await getHomePageData();

  return (
    <main className="page-shell">
      <Header />

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Urban Performance Club</p>
          <h1>Train harder. Recover smarter. Stay consistent.</h1>
          <p className="hero-text">
            PulseFit is a modern gym experience with elite coaching, high-energy classes,
            and recovery spaces designed to keep momentum on your side.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#plans">
              Start Membership
            </a>
            <a className="secondary-button" href="#trainers">
              Meet the Coaches
            </a>
          </div>
          <div className="metric-row">
            {homePageData.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-panel hero-panel-main">
            <span>Today</span>
            <strong>Strength + Conditioning</strong>
            <p>60 min coached block</p>
          </div>
          <div className="hero-panel hero-panel-accent">
            <span>Recovery</span>
            <strong>Contrast Zone</strong>
            <p>Sauna, mobility, and reset</p>
          </div>
          <div className="hero-grid" />
        </div>
      </section>

      <section className="info-band">
        <div>
          <span>Coached classes</span>
          <strong>Boxing, HIIT, strength, mobility, cycle</strong>
        </div>
        <div>
          <span>Member experience</span>
          <strong>Clean layout, premium equipment, motivating energy</strong>
        </div>
      </section>

      <section className="content-section" id="plans">
        <SectionTitle
          eyebrow="Membership"
          title="Plans built for different training rhythms"
          description="From first-timers to all-in athletes, each membership keeps the path clear and the experience focused."
        />
        <div className="card-grid plan-grid">
          {homePageData.plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="content-section accent-section" id="trainers">
        <SectionTitle
          eyebrow="Coaching Team"
          title="Trainers who balance intensity with real guidance"
          description="Every coach brings a different training lens so members can find structure that actually fits."
        />
        <div className="card-grid trainer-grid">
          {homePageData.trainers.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </div>
      </section>

      <section className="content-section" id="testimonials">
        <SectionTitle
          eyebrow="Results"
          title="Why members keep coming back"
          description="The strongest signal is consistency. These stories reflect the environment, support, and pace members feel every week."
        />
        <div className="card-grid testimonial-grid">
          {homePageData.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-copy">
          <p className="eyebrow">Visit PulseFit</p>
          <h2>Your next routine starts with one strong week.</h2>
          <p>
            Book a tour, try a class, and see how a focused training environment changes your momentum.
          </p>
        </div>
        <a className="primary-button" href="mailto:hello@pulsefitgym.com">
          Book a Free Tour
        </a>
      </section>
    </main>
  );
}
