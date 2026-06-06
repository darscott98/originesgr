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
            <a className="mail reveal d2" href="mailto:info@originesgr.it">
              info@originesgr.it
            </a>
          </div>
          <div className="contact-side reveal d1">
            <p>
              Per investitori professionali, imprenditori e partner industriali
              interessati alla piattaforma Origine.
            </p>
            <div className="row">
              <span>Sede</span>
              <span>Milano, Italia</span>
            </div>
            <div className="row">
              <span>Telefono</span>
              <span>+39 02 0000 0000</span>
            </div>
            <div className="row">
              <span>Stampa</span>
              <span>press@originesgr.it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
