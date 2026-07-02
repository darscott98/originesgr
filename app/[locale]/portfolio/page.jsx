import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PortfolioExplorer from "@/components/PortfolioExplorer";
import { portfolioTotals } from "@/components/portfolioData";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: { it: "/it/portfolio", en: "/en/portfolio", "x-default": "/it/portfolio" },
    },
  };
}

function Arcs({ cx = 380, cy = 200 }) {
  return (
    <div className="arcs" aria-hidden="true">
      <svg viewBox="0 0 540 540" fill="none">
        <g stroke="rgba(226,192,116,.2)" strokeWidth="1" fill="none">
          <circle cx={cx} cy={cy} r="70" />
          <circle cx={cx} cy={cy} r="140" />
          <circle cx={cx} cy={cy} r="210" />
          <circle cx={cx} cy={cy} r="290" />
          <circle cx={cx} cy={cy} r="4" fill="rgba(226,192,116,.8)" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");
  return (
    <>
      <Navbar />
      <main>
        <section className="pf-hero" id="top">
          <Arcs />
          <div className="wrap">
            <span className="eyebrow reveal">{t("eyebrow")}</span>
            <h1 className="reveal d1">
              {t.rich("title", { em: (chunks) => <em>{chunks}</em> })}
            </h1>
            <p className="reveal d2">{t("intro")}</p>
            <div className="pf-metrics reveal d3">
              <div className="pf-metric">
                <div className="v">
                  {String(portfolioTotals.pe).padStart(2, "0")}
                </div>
                <div className="l">{t("divisions.pe")}</div>
              </div>
              <div className="pf-metric">
                <div className="v">
                  {String(portfolioTotals.vc).padStart(2, "0")}
                </div>
                <div className="l">{t("divisions.vc")}</div>
              </div>
            </div>
          </div>
        </section>

        <PortfolioExplorer />

        <section className="pf-cta">
          <Arcs cx={160} cy={340} />
          <div className="wrap">
            <h2>{t.rich("ctaTitle", { em: (chunks) => <em>{chunks}</em> })}</h2>
            <Button href={`/${locale}/#contatti`} variant="gold" arrow>
              {t("ctaButton")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
