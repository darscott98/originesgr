import BrandMark from "./BrandMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <svg className="arcs" viewBox="0 0 480 480" fill="none" aria-hidden="true">
        <g stroke="rgba(226,192,116,.22)" strokeWidth="1" fill="none">
          <circle cx="380" cy="120" r="60" />
          <circle cx="380" cy="120" r="120" />
          <circle cx="380" cy="120" r="180" />
          <circle cx="380" cy="120" r="240" />
          <circle cx="380" cy="120" r="4" fill="rgba(226,192,116,.8)" stroke="none" />
        </g>
      </svg>

      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="/" className="brand" aria-label="Origine SGR — home">
              <BrandMark className="brand-logo foot-logo" />
            </a>
            <p className="statement">
              Piattaforma d'investimento multi-asset dedicata ai private markets.
            </p>
          </div>

          <nav className="foot-col" aria-label="Navigazione">
            <h4>Navigazione</h4>
            <ul>
              <li><a href="/#societa">Società</a></li>
              <li><a href="/#fondi">Fondi</a></li>
              <li><a href="/#esg">ESG</a></li>
              <li><a href="/#team">Team</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
            </ul>
          </nav>

          <div className="foot-col">
            <h4>Contatti</h4>
            <address className="addr">
              Origine SGR S.p.A.
              <br />
              <br />
              <a href="https://originesgr.com" target="_blank" rel="noopener noreferrer">
                originesgr.com
              </a>
            </address>
          </div>
        </div>

        <div className="foot-bottom">
          <p className="disc">
            Origine SGR S.p.A. — Società di Gestione del Risparmio. Le
            informazioni contenute in questo sito hanno finalità esclusivamente
            illustrative e non costituiscono offerta al pubblico né consulenza
            finanziaria.
          </p>
          <p className="copy">© {year} Origine SGR S.p.A.</p>
        </div>
      </div>
    </footer>
  );
}
