import { getTranslations } from "next-intl/server";

export default async function Esg() {
  const t = await getTranslations("esg");
  const pills = t.raw("pills");
  return (
    <section className="panel esg" id="esg">
      <div className="wrap">
        <div className="esg-grid">
          <div className="reveal">
            <span className="eyebrow">{t("eyebrow")}</span>
            <div className="esg-mark" aria-hidden="true">
              {t("mark")}
            </div>
          </div>
          <div className="reveal d1">
            <p>{t("p1")}</p>
            <p style={{ marginTop: "1.2rem" }}>{t("p2")}</p>
            <div className="pillrow">
              {pills.map((pill) => (
                <div key={pill.title}>
                  <b>{pill.title}</b>
                  <span>{pill.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
