export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="/#home">
        <span>PF</span>
        PulseFit
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="/about">About</a>
        <a href="/members">Members</a>
        <a href="/#plans">Plans</a>
        <a href="/#trainers">Trainers</a>
        <a href="/#testimonials">Testimonials</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
