export function TrainerCard({ name, role, bio }) {
  return (
    <article className="trainer-card">
      <span className="trainer-role">{role}</span>
      <h3>{name}</h3>
      <p>{bio}</p>
    </article>
  );
}
