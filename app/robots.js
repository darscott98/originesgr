// Confirm the production domain before launch (must match layout.jsx SITE_URL).
const SITE_URL = "https://www.originesgr.com";

// Required for `output: "export"` — generate this route statically at build time.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
