import { routing } from "@/i18n/routing";

const SITE_URL = "https://www.originesgr.com";

// Required for `output: "export"` — generate this route statically at build time.
export const dynamic = "force-static";

// Paths (without locale prefix) that exist for every locale. Trailing slashes
// match `trailingSlash: true`.
const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/portfolio/", priority: 0.8 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routing.locales.flatMap((locale) =>
    ROUTES.map(({ path, priority }) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
