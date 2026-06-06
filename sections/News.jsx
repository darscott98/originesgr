const news = [
  {
    date: "Giugno 2026",
    title:
      "Origine Growth PE Fund avvia l'operatività con un target di raccolta di €400m.",
  },
  {
    date: "Maggio 2026",
    title: "Micki Mineo entra nel team di Origine come Investment Manager.",
  },
  {
    date: "Aprile 2026",
    title:
      "Origine SGR completa il percorso autorizzativo come Società di Gestione del Risparmio.",
  },
];

export default function News() {
  return (
    <section className="panel" id="news">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">News</h2>
          <p className="reveal d1">
            Aggiornamenti dalla piattaforma: nuovi fondi, ingressi nel team e
            tappe istituzionali.
          </p>
        </div>
        {news.map((item, i) => (
          <a key={item.title} className={`news-row reveal${i ? ` d${i}` : ""}`} href="#news">
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <span className="go" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
