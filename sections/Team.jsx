import TeamMember from "@/components/TeamMember";

const members = [
  {
    ini: "RS",
    name: "Roberto Sambuco",
    role: "CEO & Senior Partner",
    bio: "Investment banker, principal investor e imprenditore con una consolidata esperienza maturata nel settore pubblico e privato, con particolare specializzazione nei comparti delle telecomunicazioni e della trasformazione digitale, dell'energia e della filiera agroalimentare. Nel corso della sua carriera ha ricoperto ruoli di primaria responsabilità, tra cui Senior Managing Director presso Macquarie, Socio Senior di Vitale & Co e responsabile del Dipartimento Telecomunicazioni del Ministero dello Sviluppo Economico (MISE).",
  },
  {
    ini: "DC",
    name: "Dario Cenci",
    role: "Senior Partner",
    bio: "Professionista con oltre 25 anni di esperienza nel settore finanziario, di cui più di 15 maturati nel Private Equity come principal investor in fondi d'investimento e 10 anni nell'investment banking presso Deutsche Bank. Nel corso della sua carriera ha ricoperto ruoli di rilievo nel mercato italiano del private equity, tra cui Investment Director presso Clessidra SGR e Partner di Armònia SGR.",
  },
  {
    ini: "MM",
    name: "Micki Mineo",
    role: "Investment Manager",
    bio: "Entrato in Origine nel maggio 2026 con il ruolo di Investment Manager, ha maturato circa nove anni di esperienza nel private equity mid-market italiano. Dopo le esperienze in Armònia SGR e in Entangled Capital SGR, ha preso parte a numerose operazioni di investimento di maggioranza in differenti settori industriali, seguendone tutte le principali fasi, dall'analisi e strutturazione dell'investimento alla gestione e valorizzazione delle partecipate. Ha inoltre supportato il management delle società in portafoglio nell'implementazione di iniziative strategiche e operative finalizzate alla creazione di valore.",
  },
  {
    ini: "LC",
    name: "Lorenzo Castelli",
    role: "Managing Director & Venture Partner",
    bio: "Ha maturato una significativa esperienza nel venture capital e negli investimenti alternativi in qualità di Co-Founder e Managing Director di Alchimia Investments, contribuendo alla costituzione e gestione di veicoli di investimento e alle attività di raccolta di capitali. Ha ricoperto incarichi come Managing Director e membro del Consiglio di Amministrazione di società in portafoglio e ha partecipato, come membro del team fondatore, al lancio di progetti di primaria rilevanza quali Arsenale Group e Orient Express La Dolce Vita. È inoltre docente ed esperto del settore Venture Capital presso l'Università Luiss.",
  },
  {
    ini: "MV",
    name: "Marco Venturelli",
    role: "Venture Partner · MedTech & Life Sciences",
    bio: "Manager con oltre 30 anni di esperienza nel settore delle Life Sciences. Ha lavorato nel gruppo Novartis dal 1991 al 2021 ricoprendo ruoli quali Country President e CEO Italia, CFO a livello italiano ed europeo nel Pharma e Oncology, Integration Officer nella fusione Ciba-Sandoz e leader di progetti globali IT presso la sede di Basilea. Dal 2021 è Ambassador Life Science and Health Care presso MIND – Milano Innovation District e dal 2024 Chairman del board di Checkmab S.r.l. Laureato in Economia Aziendale presso l'Università Bocconi.",
  },
  {
    ini: "MC",
    name: "Marialiliana Conte",
    role: "CFO",
    bio: "Ha maturato una significativa esperienza nelle funzioni amministrative, finanziarie e operative nell'ambito della gestione di fondi di investimento alternativi, presso primarie SGR attive nel private equity e venture capital. Nel corso della carriera ha ricoperto ruoli di responsabilità quali Chief Financial Officer, Chief Operating Officer e Head of Administration presso realtà come Ambienta SGR, Hyle Capital Partners SGR e I2 Capital Partners SGR, sviluppando competenze anche in ambito ESG e risk management.",
  },
  {
    ini: "MU",
    name: "Maria José Ullauri",
    role: "Assistant",
  },
];

const board = [
  { ini: "GD", name: "Giuseppe Donagemma", role: "Presidente" },
  { ini: "RS", name: "Roberto Sambuco", role: "Amministratore Delegato" },
  { ini: "AC", name: "Alessandra Cassone", role: "Consigliere" },
  { ini: "DC", name: "Dario Cenci", role: "Consigliere" },
  { ini: "RS", name: "Roberto Sergio", role: "Consigliere" },
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
          {members.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>

        <div className="team-sub">
          <h3>Consiglio di Amministrazione</h3>
          <div className="ln" />
        </div>
        <div className="board">
          {board.map((bm) => (
            <div key={`${bm.name}`} className="bm">
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
