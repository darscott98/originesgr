// Global 404. The root layout (app/layout.jsx) is a passthrough that renders no
// <html>, and this page sits outside the [locale] segment so it has no locale or
// next-intl context — therefore it supplies its own document shell (like
// app/page.jsx) and is bilingual (IT default + EN). Under `output: export` Next
// emits this as `out/404.html`, which static hosts serve for any unmatched URL.

import "../styles/globals.css";
import { fontVariables } from "./fonts";

export const metadata = {
  title: "404 — Pagina non trovata · Origine SGR",
  description: "La pagina che stai cercando non esiste.",
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0d",
};

export default function NotFound() {
  return (
    <html lang="it" className={fontVariables}>
      <body>
        <main className="nf">
          <div className="nf-arcs" aria-hidden="true">
            <svg viewBox="0 0 640 640" fill="none">
              <circle className="ring" cx="320" cy="320" r="70" />
              <circle className="ring" cx="320" cy="320" r="140" />
              <circle className="ring" cx="320" cy="320" r="212" />
              <circle className="ring" cx="320" cy="320" r="286" />
              <circle className="ring" cx="320" cy="320" r="312" />
            </svg>
          </div>
          <div className="nf-inner">
            <span className="eyebrow nf-brand">Origine SGR</span>
            <span className="nf-code">404</span>
            <h1 className="nf-title">Pagina non trovata.</h1>
            <p className="nf-lede">
              La pagina che stai cercando non esiste o è stata spostata.
              <br />
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="nf-actions">
              {/* Self-contained 404 served as a static 404.html at arbitrary
                  paths: absolute, locale-prefixed hrefs are the reliable target,
                  so plain anchors (not next/link) are intentional here. */}
              {/* eslint-disable @next/next/no-html-link-for-pages */}
              <a className="nf-btn nf-btn-gold" href="/it/">
                Torna alla home
              </a>
              <a className="nf-btn nf-btn-ghost" href="/en/">
                Back home (EN)
              </a>
              {/* eslint-enable @next/next/no-html-link-for-pages */}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
