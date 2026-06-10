import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BrandMark from "./BrandMark";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer>
      <svg className="arcs" viewBox="0 0 480 480" fill="none" aria-hidden="true">
        <g stroke="rgba(226,192,116,.22)" strokeWidth="1" fill="none">
          <circle cx="380" cy="120" r="60" />
          <circle cx="380" cy="120" r="120" />
          <circle cx="380" cy="120" r="180" />
          <circle cx="380" cy="120" r="240" />
          <circle cx="380" cy="120" r="4" fill="rgba(226,192,116,.8)" stroke="none" />
        </g>
      </svg>

      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand" aria-label={tNav("brandHome")}>
              <BrandMark className="brand-logo foot-logo" />
            </Link>
            <p className="statement">{t("statement")}</p>
          </div>

          <nav className="foot-col" aria-label={t("navHeader")}>
            <h4>{t("navHeader")}</h4>
            <ul>
              <li><Link href="/#societa">{t("linkSocieta")}</Link></li>
              <li><Link href="/#fondi">{t("linkFondi")}</Link></li>
              <li><Link href="/#esg">{t("linkEsg")}</Link></li>
              <li><Link href="/#team">{t("linkTeam")}</Link></li>
              <li><Link href="/portfolio">{t("linkPortfolio")}</Link></li>
            </ul>
          </nav>

          <div className="foot-col">
            <h4>{t("contactsHeader")}</h4>
            <address className="addr">
              Origine SGR S.p.A.
              <br />
              Via Napo Torriani, 31 — Milano
              <br />
              <br />
              <a href="mailto:info@originesgr.com">info@originesgr.com</a>
              <br />
              <a href="https://originesgr.com" target="_blank" rel="noopener noreferrer">
                originesgr.com
              </a>
            </address>
          </div>
        </div>

        <div className="foot-bottom">
          <p className="disc">{t("disclaimer")}</p>
          <div className="foot-legal">
            <a
              href="https://www.iubenda.com/privacy-policy/76603389#owner-and-data-controller"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("privacy")}
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/76603389/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cookie")}
            </a>
            <span className="copy">{t("copy", { year })}</span>
            <span className="built-by">
              {t.rich("builtBy", {
                a: (chunks) => (
                  <a
                    href="https://www.worldlabs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
