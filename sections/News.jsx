const news = [
  {
    date: "Comunicato stampa",
    title: "Al via Origine SGR.",
    href: "https://financecommunity.it/al-via-origine-sgr/",
  },
];

export default function News() {
  return (
    <section className="panel" id="news">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">News</h2>
          <p className="reveal d1">
            Comunicati stampa e aggiornamenti istituzionali dalla costituzione di
            Origine.
          </p>
        </div>
        {news.map((item, i) => (
          <a
            key={item.title}
            className={`news-row reveal${i ? ` d${i}` : ""}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
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
