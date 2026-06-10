import "../../styles/globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Runs synchronously in <head> before first paint: marks JS as available so the
// reveal animations engage (CSS hides .reveal only under html.js), then sets a
// failsafe that reveals everything after 2.5s if the bundle never hydrates
// (Reveal cancels it on mount). It must stay a plain inline script — next/script
// `beforeInteractive` defers under `output: export`, which would flash content.
// The language switcher does a full page load, so this layout never re-renders
// on the client and React never warns about the raw <script>.
const REVEAL_FAILSAFE =
  "document.documentElement.classList.add('js');" +
  "window.__revealFailsafe=setTimeout(function(){" +
  "var r=document.querySelectorAll('.reveal');" +
  "for(var i=0;i<r.length;i++){r[i].classList.add('in')}},2500)";

// TODO: confirm the production domain before launch (used for canonical + OG URLs).
const SITE_URL = "https://www.originesgr.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0d",
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("homeTitle");
  const description = t("homeDescription");
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { it: "/it", en: "/en", "x-default": "/it" },
    },
    openGraph: {
      type: "website",
      siteName: "Origine SGR",
      locale: locale === "it" ? "it_IT" : "en_US",
      url: `${SITE_URL}/${locale}`,
      title,
      description,
      images: [{ url: "/images/originesgr-logo.png", width: 786, height: 638, alt: "Origine SGR" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/images/originesgr-logo.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // Required for static rendering: seeds next-intl's locale so server
  // components can resolve messages at build time without a request.
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_FAILSAFE }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,400&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
