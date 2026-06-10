import { getTranslations } from "next-intl/server";
import Button from "@/components/Button";

export default async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true">
        <img src="/images/hero-bg.png" alt="" />
      </div>
      <div className="hero-bg" />
      <div className="hero-arcs" aria-hidden="true">
        <svg viewBox="0 0 640 640" fill="none">
          <g className="rings">
            <circle className="ring" cx="466" cy="300" r="56" />
            <circle className="ring" cx="466" cy="300" r="118" />
            <circle className="ring" cx="466" cy="300" r="184" />
            <circle className="ring" cx="466" cy="300" r="256" />
            <circle className="ring" cx="466" cy="300" r="336" />
            <circle className="ring" cx="466" cy="300" r="428" />
            <circle className="ring" cx="466" cy="300" r="536" />
          </g>
          <circle className="origin" cx="466" cy="300" r="3.5" />
        </svg>
      </div>
      <div className="wrap">
        <span className="eyebrow hero-eyebrow reveal">{t("eyebrow")}</span>
        <h1 className="reveal d1">
          {t.rich("title", { em: (chunks) => <em>{chunks}</em> })}
        </h1>
        <p className="hero-lede reveal d2">{t("lede")}</p>
        <div className="hero-actions reveal d3">
          <Button href="#fondi" variant="gold" arrow>
            {t("ctaFunds")}
          </Button>
          <Button href="#societa" variant="ghost">
            {t("ctaVision")}
          </Button>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        {t("scroll")}
      </div>
    </section>
  );
}
