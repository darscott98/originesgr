const pillars = [
  {
    num: "01 / Pilastro",
    title: "Expertise dei Team di Investimento",
    body: "Team di investimento con competenze uniche e distintive nella gestione di operazioni complesse e nell'individuazione di opportunità strategiche.",
  },
  {
    num: "02 / Pilastro",
    title: "Origination",
    body: "Grazie al network istituzionale e imprenditoriale Origine riesce ad individuare e promuovere opportunità d'investimento proprietarie, fondate su solidi razionali strategici industriali. Ogni deal è seguito dai nostri operating partners che supportano sia l'origination sia la crescita delle società investite.",
  },
  {
    num: "03 / Pilastro",
    title: "Asset management",
    body: "La forza di Origine risiede anche nella sua rete di imprenditori di successo, che affiancano il team nell'individuazione delle opportunità e nella creazione di valore lungo l'intero ciclo di investimento, apportando competenze operative, visione strategica e accesso privilegiato a relazioni industriali di primo livello.",
  },
];

export default function Intro() {
  return (
    <section className="panel">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">
            Una piattaforma per i private markets italiani.
          </h2>
          <p className="reveal d1">
            Origine sviluppa una piattaforma d'investimento multi-asset dedicata
            agli investimenti nei private markets, già attiva nelle asset
            classes del Private Equity e Venture Capital e in fase di sviluppo e
            consolidamento in quelle del Real Estate, Infrastructure e Private
            Debt. Origine SGR combina eccellenza gestionale, rigorosa governance
            e competenze industriali, con l'obiettivo di sostenere la crescita
            dell'economia reale e generare rendimenti sostenibili nel tempo.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((pillar, i) => (
            <div key={pillar.num} className={`pillar reveal d${i + 1}`}>
              <span className="num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
