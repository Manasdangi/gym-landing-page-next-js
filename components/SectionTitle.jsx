export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <div className="section-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-description">{description}</p>
    </div>
  );
}
