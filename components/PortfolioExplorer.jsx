"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { tabs, privateEquity } from "./portfolioData";

// Top-level divisions. `id` doubles as the URL hash so the navbar dropdown
// (/portfolio#private-equity, /portfolio#venture-capital) can deep-link straight
// to a division. `key` maps to the `portfolio.divisions` message namespace.
const DIVISIONS = [
  { id: "private-equity", key: "pe" },
  { id: "venture-capital", key: "vc" },
];

const DEFAULT_DIVISION = "venture-capital";

function hashToDivision() {
  if (typeof window === "undefined") return DEFAULT_DIVISION;
  const h = window.location.hash.replace("#", "");
  return DIVISIONS.some((d) => d.id === h) ? h : DEFAULT_DIVISION;
}

// Logo with a graceful text fallback: if a logo file is missing, the company
// name shows instead of a broken image icon.
function Logo({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="pf-logo-fallback">{alt}</span>;
  return (
    <img className="pf-logo" src={src} alt={alt} onError={() => setFailed(true)} />
  );
}

function Card({ item, index }) {
  const t = useTranslations("portfolio");
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <article
      className={`pf-card${item.logos ? " pf-card-logos" : ""}${
        open ? " open" : ""
      }`}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="pf-card-head">
        <span className="pf-idx">{String(index + 1).padStart(2, "0")}</span>
        <button
          type="button"
          className="pf-toggle"
          aria-label={open ? t("toggleHide") : t("toggleShow")}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <span />
          <span />
        </button>
      </div>
      {item.logos ? (
        <div className="pf-logos">
          {item.logos.map((logo) => (
            <Logo key={logo.src} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      ) : null}
      <h3 className="pf-name">{item.name}</h3>
      <div className="pf-body">
        <p className="pf-desc">{t(`companies.${item.key}.desc`)}</p>
        <span className="pf-status">{t(`companies.${item.key}.status`)}</span>
      </div>
    </article>
  );
}

export default function PortfolioExplorer() {
  const t = useTranslations("portfolio");
  const [division, setDivision] = useState(DEFAULT_DIVISION);
  const [active, setActive] = useState(tabs[0].id);

  // Sync the active division with the URL hash so navbar deep-links work both on
  // first load and when the hash changes while already on the page. Next.js
  // App Router <Link> navigations update the URL via history.pushState rather
  // than a native hash navigation, so `hashchange` alone never fires — patch
  // push/replaceState to emit an event we can observe.
  useEffect(() => {
    const sync = () => setDivision(hashToDivision());
    sync();

    const origPush = window.history.pushState;
    const origReplace = window.history.replaceState;
    // Defer to a microtask: Next's router calls pushState inside a
    // useInsertionEffect, and React forbids scheduling state updates from there.
    const notify = () =>
      queueMicrotask(() =>
        window.dispatchEvent(new Event("origine:locationchange"))
      );
    window.history.pushState = function (...args) {
      const ret = origPush.apply(this, args);
      notify();
      return ret;
    };
    window.history.replaceState = function (...args) {
      const ret = origReplace.apply(this, args);
      notify();
      return ret;
    };

    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener("origine:locationchange", sync);
    return () => {
      window.history.pushState = origPush;
      window.history.replaceState = origReplace;
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener("origine:locationchange", sync);
    };
  }, []);

  const selectDivision = (id) => {
    setDivision(id);
    if (typeof window !== "undefined" && window.history) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <section className="pf-section" id="portfolio">
      <div className="wrap">
        <div
          className="pf-divisions"
          role="tablist"
          aria-label={t("divisionsAria")}
        >
          {DIVISIONS.map((d) => (
            <button
              key={d.id}
              type="button"
              className="pf-division"
              role="tab"
              id={`division-${d.id}`}
              aria-selected={division === d.id}
              aria-controls={`division-panel-${d.id}`}
              onClick={() => selectDivision(d.id)}
            >
              {t(`divisions.${d.key}`)}
            </button>
          ))}
        </div>

        <div
          className={`pf-division-panel${
            division === "private-equity" ? " active" : ""
          }`}
          id="division-panel-private-equity"
          role="tabpanel"
          aria-labelledby="division-private-equity"
        >
          <p className="pf-division-intro">{t("peIntro")}</p>
          <div className="pf-grid">
            {privateEquity.map((item, i) => (
              <Card key={item.key} item={item} index={i} />
            ))}
          </div>
        </div>

        <div
          className={`pf-division-panel${
            division === "venture-capital" ? " active" : ""
          }`}
          id="division-panel-venture-capital"
          role="tabpanel"
          aria-labelledby="division-venture-capital"
        >
          <p className="pf-division-intro">{t("vcIntro")}</p>
          <div className="pf-tabs" role="tablist" aria-label={t("tabsAria")}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="pf-tab"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
              >
                {t(`tabs.${tab.id}`)}
                <span className="ct">{tab.items.length}</span>
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`pf-panel${active === tab.id ? " active" : ""}`}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
            >
              <div className="pf-grid">
                {tab.items.map((item, i) => (
                  <Card key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
