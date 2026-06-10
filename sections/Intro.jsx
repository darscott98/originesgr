import { getTranslations } from "next-intl/server";

export default async function Intro() {
  const t = await getTranslations("intro");
  const pillars = t.raw("pillars");
  return (
    <section className="panel">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">{t("title")}</h2>
          <p className="reveal d1">{t("body")}</p>
        </div>
        <div className="pillars">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className={`pillar reveal d${i + 1}`}>
              <span className="rule" aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
