const members = [
  {
    ini: "RS",
    name: "Roberto Sambuco",
    role: "CEO & Senior Partner",
    bio: "Investment banker, principal investor e imprenditore con consolidata esperienza nel settore pubblico e privato, specializzato in telecomunicazioni, trasformazione digitale, energia e filiera agroalimentare. Ha ricoperto ruoli quali Senior Managing Director presso Macquarie, Socio Senior di Vitale & Co e responsabile del Dipartimento Telecomunicazioni del MISE.",
  },
  {
    ini: "DC",
    name: "Dario Cenci",
    role: "Senior Partner",
    bio: "Oltre 25 anni di esperienza nel settore finanziario, di cui più di 15 nel Private Equity come principal investor e 10 nell'investment banking presso Deutsche Bank. Ha ricoperto ruoli di rilievo nel private equity italiano, tra cui Investment Director presso Clessidra SGR e Partner di Armònia SGR.",
  },
  {
    ini: "MM",
    name: "Micki Mineo",
    role: "Investment Manager",
    bio: "Entrato in Origine nel maggio 2026 come Investment Manager, ha maturato circa nove anni di esperienza nel private equity mid-market italiano. Dopo le esperienze in Armònia SGR ed Entangled Capital SGR, ha preso parte a numerose operazioni di investimento di maggioranza in differenti settori industriali, seguendone tutte le principali fasi — dall'analisi e strutturazione dell'investimento alla gestione e valorizzazione delle partecipate. Ha inoltre supportato il management delle società in portafoglio nell'implementazione di iniziative strategiche e operative finalizzate alla creazione di valore.",
  },
  {
    ini: "MC",
    name: "Marialiliana Conte",
    role: "CFO",
    bio: "Ha maturato una significativa esperienza nelle funzioni amministrative, finanziarie e operative nella gestione di fondi di investimento alternativi, presso primarie SGR attive nel private equity e venture capital. Nel corso della carriera ha ricoperto ruoli di responsabilità quali CFO, COO e Head of Administration presso realtà come Ambienta SGR, Hyle Capital Partners SGR e I2 Capital Partners SGR, sviluppando competenze anche in ambito di compliance, reporting agli investitori e rapporti con depositari e revisori.",
  },
];

const board = [
  { ini: "AB", name: "Presidente", role: "Consiglio di Amministrazione" },
  { ini: "CD", name: "Consigliere", role: "Indipendente" },
  { ini: "EF", name: "Consigliere", role: "Indipendente" },
  { ini: "GH", name: "Operating Partner", role: "Industria" },
  { ini: "IJ", name: "Operating Partner", role: "Finanza" },
];

export default function Team() {
  return (
    <section className="panel dark" id="team">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">Il team</h2>
          <p className="reveal d1">
            Professionisti con una comprovata esperienza nel private equity, nel
            venture capital e nell'industria, uniti da una collaborazione
            consolidata nel tempo.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`member expandable reveal${i ? ` d${i}` : ""}`}
              tabIndex={0}
            >
              <div className="pic">
                <div className="ini">{member.ini}</div>
              </div>
              <div className="info">
                <h4>{member.name}</h4>
                <span className="role">{member.role}</span>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-sub">
          <h3>Governance &amp; Operating Partners</h3>
          <div className="ln" />
        </div>
        <div className="board">
          {board.map((bm) => (
            <div key={bm.ini} className="bm">
              <div className="pic">{bm.ini}</div>
              <h4>{bm.name}</h4>
              <span>{bm.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
