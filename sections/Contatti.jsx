export default function Contatti() {
  return (
    <section className="panel dark contact" id="contatti">
      <div className="arcs" aria-hidden="true">
        <svg viewBox="0 0 560 560" fill="none">
          <g stroke="rgba(226,192,116,.18)" strokeWidth="1" fill="none">
            <circle cx="420" cy="300" r="80" />
            <circle cx="420" cy="300" r="150" />
            <circle cx="420" cy="300" r="220" />
            <circle cx="420" cy="300" r="300" />
            <circle cx="420" cy="300" r="4" fill="rgba(226,192,116,.75)" stroke="none" />
          </g>
        </svg>
      </div>
      <div className="wrap">
        <div className="contact-inner">
          <div>
            <span className="eyebrow reveal">Contatti</span>
            <h2 className="reveal d1">
              Costruiamo
              <br />
              valore, <em>insieme.</em>
            </h2>
            <a
              className="mail reveal d2"
              href="https://originesgr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              originesgr.com
            </a>
          </div>
          <div className="contact-side reveal d1">
            <p>
              Per investitori professionali, imprenditori e partner industriali
              interessati alla piattaforma Origine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
