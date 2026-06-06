const triplet = [
  {
    title: "Opportunità di consolidamento",
    body: "La diversità e la frammentazione delle PMI italiane creano numerose opportunità di investimento strategico e di creazione di valore tramite aggregazione.",
  },
  {
    title: "Visione di lungo termine",
    body: "Note per la loro flessibilità, le PMI italiane si adattano rapidamente. Le strutture familiari favoriscono stabilità, visione di lungo periodo e crescita sostenuta.",
  },
  {
    title: "Proiezione internazionale",
    body: "Riconosciute per qualità produttiva e forte vocazione all'export, offrono accesso a flussi di ricavo diversificati, resilienza e propensione all'innovazione.",
  },
];

export default function Mercato() {
  return (
    <section className="panel" id="mercato">
      <div className="wrap">
        <span className="eyebrow reveal">Il mercato</span>
        <div
          className="sec-head"
          style={{
            marginTop: "var(--stack-gap)",
            marginBottom: "var(--head-gap)",
          }}
        >
          <h2 className="reveal d1">
            Opportunità strategiche nel tessuto delle PMI italiane.
          </h2>
          <p className="reveal d2">
            Un mercato ampio, frammentato e resiliente: tra i più rilevanti
            d'Europa per numero di imprese e per potenziale di consolidamento e
            crescita.
          </p>
        </div>
        <div className="bigstat">
          <div className="numwrap reveal">
            <span className="num">
              ~20<sup>%</sup>
            </span>
            <div className="numrule">delle PMI europee · ~4,4 milioni di imprese</div>
          </div>
          <div className="bigstat-copy reveal d1">
            <h3>delle PMI dell'Unione Europea sono italiane.</h3>
            <p>
              Con circa 4,4 milioni di imprese, l'Italia si colloca subito dietro
              la Germania nelle classifiche europee. Un bacino esteso e
              diversificato che offre un panorama d'investimento distintivo, con
              punti di forza che attraggono il capitale professionale.
            </p>
          </div>
        </div>
        <div className="banner reveal" style={{ marginTop: "var(--head-gap)" }}>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=70"
            alt="Linea produttiva industriale"
          />
          <div className="bc">
            <h3>
              Tra i principali mercati di PMI dell'UE, l'Italia offre stabilità,
              crescita e opportunità di consolidamento e internazionalizzazione.
            </h3>
          </div>
        </div>
        <div className="triplet">
          {triplet.map((item, i) => (
            <div key={item.title} className={`item reveal d${i + 1}`}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
