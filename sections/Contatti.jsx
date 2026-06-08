export default function Contatti() {
  return (
    <section className="panel dark contact" id="contatti">
      <div className="wrap">
        <div className="contact-inner">
          <div>
            <span className="eyebrow reveal">Contatti</span>
            <h2 className="reveal d1" style={{ marginTop: "var(--stack-gap)" }}>
              Costruiamo valore, <em>insieme.</em>
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
