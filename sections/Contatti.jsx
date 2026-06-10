import { getTranslations } from "next-intl/server";

export default async function Contatti() {
  const t = await getTranslations("contatti");
  return (
    <section className="panel contact" id="contatti">
      <div className="arcs" aria-hidden="true">
        <svg viewBox="0 0 560 560" fill="none">
          <g stroke="rgba(226,192,116,.18)" strokeWidth="1" fill="none">
            <circle cx="420" cy="300" r="80" />
            <circle cx="420" cy="300" r="150" />
            <circle cx="420" cy="300" r="220" />
            <circle cx="420" cy="300" r="300" />
            <circle cx="420" cy="300" r="4" fill="rgba(226,192,116,.75)" stroke="none" />
          </g>
        </svg>
      </div>
      <div className="wrap">
        <div className="contact-inner">
          <div>
            <span className="eyebrow reveal">{t("eyebrow")}</span>
            <h2 className="reveal d1">
              {t.rich("title", {
                br: () => <br />,
                em: (chunks) => <em>{chunks}</em>,
              })}
            </h2>
            <a className="mail reveal d2" href="mailto:info@originesgr.com">
              info@originesgr.com
            </a>
          </div>
          <div className="contact-side reveal d1">
            <p>{t("side")}</p>
            <address className="contact-addr">
              Origine SGR S.p.A.
              <br />
              Via Napo Torriani, 31 — Milano
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
