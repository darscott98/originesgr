"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname } from "@/i18n/navigation";

// Manual language toggle. `usePathname` (from next-intl) returns the path with
// the locale prefix stripped; we re-add the target locale and a trailing slash
// (matching `trailingSlash: true`) to build the localized URL.
//
// These are plain <a> links on purpose: switching locale is a FULL page load,
// not a soft client navigation. That guarantees the new locale's static HTML
// (with the correct <html lang> and its synchronous <head> script) loads fresh,
// and it keeps the [locale] layout from re-rendering on the client — which is
// what otherwise makes React warn about the inline reveal <script>.
export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const active = useLocale();
  const pathname = usePathname();

  const hrefFor = (locale) =>
    `/${locale}${pathname === "/" ? "" : pathname}/`.replace(/\/{2,}/g, "/");

  return (
    <div className="locale-switcher" role="group" aria-label={t("label")}>
      {routing.locales.map((locale) => (
        <a
          key={locale}
          href={hrefFor(locale)}
          hrefLang={locale}
          className={`locale-link${locale === active ? " active" : ""}`}
          aria-current={locale === active ? "true" : undefined}
        >
          {t(locale)}
        </a>
      ))}
    </div>
  );
}
