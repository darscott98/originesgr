import { getTranslations } from "next-intl/server";

// External article URLs are structural and pair with the translated date/title
// labels by index.
const newsLinks = [
  "https://financecommunity.it/al-via-origine-sgr/",
  "https://bebeez.it/private-equity/al-via-origine-sgr-nuova-societa-di-gestione-di-fondi-di-private-equity-e-venture-capital/",
];

export default async function News() {
  const t = await getTranslations("news");
  const news = t.raw("items");
  return (
    <section className="panel dark" id="news">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">{t("title")}</h2>
          <p className="reveal d1">{t("intro")}</p>
        </div>
        {news.map((item, i) => (
          <a
            key={item.title}
            className={`news-row reveal${i ? ` d${i}` : ""}`}
            href={newsLinks[i]}
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
