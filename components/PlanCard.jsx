export function PlanCard({ name, price, description, features, featured }) {
  return (
    <article className={`plan-card${featured ? " featured" : ""}`}>
      <h3>{name}</h3>
      <span className="plan-price">{price}/mo</span>
      <p>{description}</p>
      <ul className="feature-list">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
