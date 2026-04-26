export function TestimonialCard({ quote, name, result }) {
  return (
    <article className="testimonial-card">
      <span className="testimonial-result">{result}</span>
      <p>{quote}</p>
      <h3>{name}</h3>
    </article>
  );
}
