const funds = [
  {
    tag: "live",
    state: "In raccolta",
    title: "Origine Growth PE Fund",
    body: "Fondo di Private Equity PIR-compliant, generalista con forte concentrazione su quattro verticali strategici. Strategie di crescita e consolidamento per creare valore sostenibile.",
    big: "€400m",
    meta: "Target di raccolta · operatività dal 4 giugno 2026",
  },
  {
    tag: "exit",
    state: "In disinvestimento",
    title: "Origine VC Funds",
    body: "Iniziativa di Venture Capital focalizzata su innovazione e crescita, con 12 società in portafoglio nei segmenti Life Sciences, MedTech e Digital. Attualmente in fase di valorizzazione.",
    big: "12",
    meta: "Società in portafoglio",
  },
  {
    tag: "scout",
    state: "In scouting",
    title: "Private Assets — Real Estate · Infrastructure · Private Debt",
    body: "Nuove asset class in fase di negoziazione e scouting, a completamento di una piattaforma multi-asset dedicata ai private markets.",
    big: "03",
    meta: "Asset class in sviluppo",
  },
];

const terms = [
  { ix: "01 — Ticket", v: "€30–45m", l: "Ticket medio d'investimento" },
  { ix: "02 — Orizzonte", v: "4–6 anni", l: "Orizzonte d'investimento" },
  { ix: "03 — Focus", v: "~70%", l: "Concentrazione sul mercato italiano" },
  { ix: "04 — Regime", v: "PIR", l: "Fondo PIR-compliant" },
];

export default function Fondi() {
  return (
    <section className="panel" id="fondi">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">Fondi in gestione</h2>
          <p className="reveal d1">
            Una gamma in espansione lungo i private markets, costruita attorno a
            verticali strategici per l'economia del Paese.
          </p>
        </div>
        <div className="funds">
          {funds.map((fund, i) => (
            <div key={fund.title} className={`fund-row reveal${i ? ` d${i}` : ""}`}>
              <span className={`tag ${fund.tag}`}>● {fund.state}</span>
              <div>
                <h3>{fund.title}</h3>
                <p>{fund.body}</p>
              </div>
              <div className="fund-meta">
                <span className="big">{fund.big}</span>
                <small>{fund.meta}</small>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--section-y)" }}>
          <span className="eyebrow reveal">Focus — Origine Growth PE Fund</span>
          <div className="sec-head" style={{ marginTop: "var(--stack-gap)" }}>
            <h2
              className="reveal d1"
              style={{ fontSize: "clamp(1.7rem,3.4vw,2.6rem)" }}
            >
              Capitale flessibile per le PMI italiane ad alto potenziale.
            </h2>
            <p className="reveal d2">
              Un approccio che combina operazioni di buyout — inclusi LBO — e
              strategie di growth capital, con partecipazioni di maggioranza,
              preferred equity e minoranze qualificate. Focalizzato sul mercato
              italiano, con la flessibilità di cogliere opportunità selezionate
              in tutta Europa.
            </p>
          </div>
          <div className="stats">
            {terms.map((term, i) => (
              <div key={term.ix} className={`stat reveal${i ? ` d${i}` : ""}`}>
                <span className="ix">{term.ix}</span>
                <div className="v">{term.v}</div>
                <div className="l">{term.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
