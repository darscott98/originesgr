export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="logo" href="#top" aria-label="Origine home">
            Origine
          </a>
          <p>Reliable operations software for teams that need clear execution.</p>
        </div>

        <nav aria-label="Footer product links">
          <h3>Product</h3>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <nav aria-label="Footer company links">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Security</a>
        </nav>

        <nav aria-label="Footer contact links">
          <h3>Contact</h3>
          <a href="mailto:hello@origine.app">hello@origine.app</a>
          <a href="#">LinkedIn</a>
          <a href="#">Status</a>
        </nav>
      </div>
      <div className="container footer-meta">
        <p>© {new Date().getFullYear()} Origine. All rights reserved.</p>
      </div>
    </footer>
  );
}
