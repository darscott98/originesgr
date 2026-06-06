export default function Struttura() {
  return (
    <section className="panel dark">
      <div className="wrap">
        <div className="struct">
          <div className="struct-copy">
            <span className="eyebrow reveal">Struttura d'investimento</span>
            <h2
              className="stack-h reveal d1"
              style={{ margin: "var(--stack-gap) 0 1.8rem" }}
            >
              Una piattaforma<span className="g">unica.</span>
            </h2>
            <p className="reveal d2">
              Origine integra governance centralizzata e veicoli dedicati per
              offrire opzioni d'investimento su misura a un'ampia platea di
              investitori professionali, con capitale flessibile destinato alle
              PMI italiane.
            </p>
            <p className="reveal d2">
              Le società target devono presentare crescita elevata, cash flow
              stabile, una posizione di mercato solida o un'offerta distintiva, e
              allinearsi ai principi ESG.
            </p>
          </div>
          <div
            className="reveal d1"
            aria-label="Diagramma della struttura di investimento di Origine"
          >
            <svg className="org" viewBox="0 0 560 460" role="img">
              {/* connectors */}
              <path className="conn" d="M280 92 L280 132" />
              <circle className="dot" cx="280" cy="92" r="4" />
              <path className="conn" d="M150 150 L150 132 L410 132 L410 150" />
              <path className="conn" d="M280 132 L280 150" />
              <path className="conn" d="M150 260 L150 286" />
              <circle className="dot" cx="150" cy="286" r="4" />
              <path className="conn" d="M90 330 L90 286 L210 286 L210 330" />
              {/* Origine top */}
              <rect className="node-out" x="150" y="40" width="260" height="52" rx="8" />
              <text className="lbl-g" x="280" y="71" textAnchor="middle">
                Origine
              </text>
              {/* middle row */}
              <rect className="node-gold" x="60" y="150" width="180" height="64" rx="10" />
              <text className="lbl-w" x="150" y="188" textAnchor="middle">
                Origine SGR S.p.A.
              </text>
              <rect className="node" x="300" y="156" width="100" height="52" rx="8" />
              <text className="lbl" x="350" y="187" textAnchor="middle">
                Club Deals
              </text>
              <rect className="node" x="420" y="156" width="100" height="52" rx="8" />
              <text className="lbl" x="470" y="187" textAnchor="middle">
                Holdings
              </text>
              {/* bottom row */}
              <rect className="node" x="20" y="330" width="180" height="74" rx="8" />
              <text className="lbl" x="110" y="362" textAnchor="middle">
                Private Equity
              </text>
              <text className="lbl-sub" x="110" y="384" textAnchor="middle">
                Origine Growth PE
              </text>
              <rect className="node" x="220" y="330" width="180" height="74" rx="8" />
              <text className="lbl" x="310" y="362" textAnchor="middle">
                Venture Capital
              </text>
              <text className="lbl-sub" x="310" y="384" textAnchor="middle">
                Origine VC Funds
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
