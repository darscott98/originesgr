export default function Societa() {
  return (
    <section className="panel dark" id="societa">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow reveal">La società</span>
            <h2 className="reveal d1" style={{ marginTop: "var(--stack-gap)" }}>
              Standard internazionali, radici italiane.
            </h2>
            <p className="reveal d2">
              Ispirata a modelli consolidati nei principali gruppi di
              investimento internazionali, Origine sviluppa una piattaforma
              multi-asset che integra governance centralizzata, accesso a
              opportunità proprietarie e competenze specialistiche dei vari team
              d'investimento.
            </p>
            <p className="reveal d2">
              Un approccio che crea efficienze di scala, supporta la definizione
              di strategie personalizzate e consente di intercettare opportunità
              distintive nei diversi segmenti di mercato.
            </p>
            <p className="reveal d3">
              Origine è stata pertanto costituita per operare come piattaforma
              unificata di investimento per il capitale professionale italiano,
              operando secondo standard internazionali e mantenendo al contempo
              un forte radicamento nelle specificità e nelle esigenze del Paese.
            </p>
          </div>
          <div className="about-vis reveal d2">
            <img src="/images/rome-vertical.png" alt="Architettura istituzionale" />
            <div className="frame" />
            <div className="cap">Origine SGR S.p.A.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
