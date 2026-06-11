import { getTranslations } from "next-intl/server";

// Structural-only metadata that pairs with the translated content by index:
// CSS state classes for the fund rows, and the image + index for each sector.
const fundTags = ["live", "exit"];
const sectorMeta = [
  { si: "01", img: "/images/agrifood.png" },
  { si: "02", img: "/images/tech.png" },
  { si: "03", img: "/images/energy.png" },
  { si: "04", img: "/images/defense.png" },
];

export default async function Fondi() {
  const t = await getTranslations("fondi");
  const funds = t.raw("funds");
  const metrics = t.raw("metrics");
  const approach = t.raw("approach");
  const sectors = t.raw("sectors");
  const distinctive = t.raw("distinctive");
  return (
    <section className="panel" id="fondi">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">{t("title")}</h2>
          <p className="reveal d1">{t("intro")}</p>
        </div>
        <div className="funds">
          {funds.map((fund, i) => (
            <div key={fund.title} className={`fund-row reveal${i ? ` d${i}` : ""}`}>
              <span className={`tag ${fundTags[i]}`}>● {fund.state}</span>
              <div>
                <h3>{fund.title}</h3>
                <p>{fund.body}</p>
              </div>
              <span className={`fund-cat ${fundTags[i]}`}>{fund.cat}</span>
            </div>
          ))}
        </div>

        <div className="fund-focus accent" style={{ marginTop: "var(--section-y)" }}>
          <span className="eyebrow reveal">{t("focusEyebrow")}</span>
          <div className="sec-head" style={{ marginTop: "var(--stack-gap)" }}>
            <h2
              className="reveal d1"
              style={{ fontSize: "clamp(1.7rem,3.4vw,2.6rem)" }}
            >
              {t("focusTitle")}
            </h2>
            <p className="reveal d2">{t("focusBody")}</p>
          </div>

          <div className="focus-sub reveal">
            <span className="eyebrow">{t("sub1")}</span>
          </div>
          <div className="stats stats-2">
            {metrics.map((term, i) => (
              <div key={term.ix} className={`stat reveal${i ? ` d${i}` : ""}`}>
                <span className="ix">{term.ix}</span>
                <div className="v">{term.v}</div>
                <div className="l">{term.l}</div>
              </div>
            ))}
          </div>
          <div className="approach">
            {approach.map((a, i) => (
              <div key={a.ix} className={`stat reveal${i ? ` d${i}` : ""}`}>
                <span className="ix">{a.ix}</span>
                <div className="v">{a.v}</div>
                <div className="l">{a.l}</div>
              </div>
            ))}
          </div>

          <div className="focus-sub reveal">
            <span className="eyebrow">{t("sub2Eyebrow")}</span>
            <p>{t("sub2Body")}</p>
          </div>
          <div className="sectors">
            {sectors.map((sector, i) => (
              <div key={sectorMeta[i].si} className={`sector reveal${i ? ` d${i}` : ""}`}>
                <img src={sectorMeta[i].img} alt={sector.alt} />
                <span className="si">{sectorMeta[i].si}</span>
                <h4>{sector.title}</h4>
                <div className="ln" />
              </div>
            ))}
          </div>

          <div className="focus-sub reveal">
            <span className="eyebrow">{t("sub3")}</span>
            <p>{t("sub3Body")}</p>
          </div>
          <div className="distinct-list">
            {distinctive.map((d, i) => (
              <div key={d.title} className={`distinct-item reveal${i ? ` d${i}` : ""}`}>
                <span className="di-num" aria-hidden="true">{`0${i + 1}`}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fund-focus" style={{ marginTop: "var(--section-y)" }}>
          <span className="eyebrow reveal">{t("vcFocusEyebrow")}</span>
          <div className="sec-head" style={{ marginTop: "var(--stack-gap)" }}>
            <h2
              className="reveal d1"
              style={{ fontSize: "clamp(1.7rem,3.4vw,2.6rem)" }}
            >
              {t("vcFocusTitle")}
            </h2>
            <p className="reveal d2">{t("vcFocusBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
