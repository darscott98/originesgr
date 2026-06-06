const pillars = [
  {
    num: "01 / Pilastro",
    title: "Expertise dei team d'investimento",
    body: "Team con competenze uniche e distintive nella gestione di operazioni complesse e nell'individuazione di opportunità strategiche ad alto potenziale.",
  },
  {
    num: "02 / Pilastro",
    title: "Origination proprietaria",
    body: "Grazie al network istituzionale e imprenditoriale individuiamo e promuoviamo opportunità proprietarie fondate su solidi razionali industriali. Ogni deal è seguito dai nostri operating partner.",
  },
  {
    num: "03 / Pilastro",
    title: "Asset management attivo",
    body: "La nostra rete di imprenditori di successo affianca il team nella creazione di valore lungo l'intero ciclo, con competenze operative, visione strategica e accesso privilegiato a relazioni industriali.",
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
            ai private markets — già attiva nel Private Equity e nel Venture
            Capital, e in fase di sviluppo e consolidamento in Real Estate,
            Infrastructure e Private Debt. Combiniamo eccellenza gestionale,
            governance rigorosa e competenze industriali per sostenere la
            crescita dell'economia reale e generare rendimenti sostenibili nel
            tempo.
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
