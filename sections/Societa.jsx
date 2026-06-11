import { getTranslations } from "next-intl/server";

// Board members are proper nouns; their role maps to a translated label.
const board = [
  { name: "Giuseppe Donagemma", role: "presidente" },
  { name: "Roberto Sambuco", role: "ceo" },
  { name: "Dario Cenci", role: "consigliere" },
  { name: "Alessandra Cassone", role: "consigliere" },
  { name: "Roberto Sergio", role: "consigliere" },
];

export default async function Societa() {
  const t = await getTranslations("societa");
  return (
    <section className="panel dark" id="societa">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow reveal">{t("eyebrow")}</span>
            <h2 className="reveal d1" style={{ marginTop: "var(--stack-gap)" }}>
              {t("title")}
            </h2>
            <p className="reveal d2">{t("p1")}</p>
            <p className="reveal d2">{t("p2")}</p>
            <p className="reveal d3">{t("p3")}</p>
          </div>
          <div className="about-vis reveal d2">
            <img src="/images/rome-vertical.png" alt={t("imgAlt")} />
            <div className="frame" />
            <div className="cap">{t("caption")}</div>
          </div>
        </div>

        <div className="board reveal">
          <div className="board-head">
            <h3>{t("boardTitle")}</h3>
          </div>
          <div className="board-list">
            {board.map((member) => (
              <div key={member.name} className="board-item">
                <span className="bm-name">{member.name}</span>
                <span className="bm-role">{t(`roles.${member.role}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
