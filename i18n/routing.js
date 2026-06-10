import { defineRouting } from "next-intl/routing";

// Italian is the default; every page lives under a locale prefix (/it, /en).
// No `localePrefix` override needed — "always" is the default, which is what
// we want for a static export where each locale is a distinct prerendered tree.
export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
});
