export default function Esg() {
  return (
    <section className="panel esg" id="esg">
      <div className="wrap">
        <div className="esg-grid">
          <div className="reveal">
            <span className="eyebrow">Impegno ESG</span>
            <div className="esg-mark" aria-hidden="true">
              ESG.
            </div>
          </div>
          <div className="reveal d1">
            <p>
              I fattori ESG sono una componente centrale del nostro approccio
              d'investimento, affinché l'intero portafoglio benefici di un
              vantaggio competitivo strutturale. L'integrazione lungo l'intero
              ciclo rafforza la resilienza degli asset, migliora le performance
              operative e promuove una crescita sostenibile nel tempo.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Crediamo che la crescita delle società di portafoglio debba essere
              sostenibile, inclusiva e trasparente: ogni investimento è oggetto
              di due diligence ESG.
            </p>
            <div className="pillrow">
              <div>
                <b>Resilienza</b>
                <span>Asset più solidi</span>
              </div>
              <div>
                <b>Performance</b>
                <span>Operatività migliore</span>
              </div>
              <div>
                <b>Due diligence</b>
                <span>Su ogni investimento</span>
              </div>
            </div>
          </div>
        </div>

        <div className="alloc" style={{ marginTop: "var(--section-y)" }}>
          <div className="alloc-copy">
            <span className="eyebrow reveal">Allocazione target di portafoglio</span>
            <h2
              className="stack-h reveal d1"
              style={{ margin: "var(--stack-gap) 0 1.8rem" }}
            >
              Disciplina<span className="g">e ambizione.</span>
            </h2>
            <p className="reveal d2">
              Il fondo è destinato a un numero contenuto di investimenti
              selezionati, con ticket medi significativi per transazione,
              privilegiando concentrazione e qualità rispetto alla dispersione.
            </p>
            <div className="legend reveal d2">
              <div className="li">
                <span className="sw" style={{ background: "var(--gold)" }} />
                <b>60%</b>
                <span>Equity di maggioranza</span>
              </div>
              <div className="li">
                <span className="sw" style={{ background: "var(--gold-d)" }} />
                <b>40%</b>
                <span>Equity di minoranza &amp; quasi-equity</span>
              </div>
            </div>
          </div>
          <div className="donut-wrap reveal d1">
            <svg className="donut" viewBox="0 0 220 220" id="donut">
              <circle className="track" cx="110" cy="110" r="86" />
              <circle className="seg1" cx="110" cy="110" r="86" id="seg1" />
              <circle className="seg2" cx="110" cy="110" r="86" id="seg2" />
            </svg>
            <div className="donut-center">
              <div className="dc-v">€400m</div>
              <div className="dc-l">Target fondo PE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
