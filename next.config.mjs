import { dirname } from "path";
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Wires next-intl into the build and points it at the request config. No
// middleware is involved — locale is resolved from the `[locale]` route segment
// so the whole site can still be statically exported.
const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site to `out/` for static hosts (e.g. Cloudflare Pages).
  output: "export",
  // Static export can't use the Next.js image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Emit `out/it/index.html` (not `out/it.html`) so Cloudflare Pages resolves
  // the locale-prefixed routes consistently. All internal links, redirect
  // targets, sitemap and canonical URLs therefore end in a trailing slash.
  trailingSlash: true,
  // Pin the workspace root so a stray lockfile in a parent directory doesn't
  // make Next infer the wrong root (silences the multiple-lockfiles warning).
  turbopack: { root: __dirname },
};

export default withNextIntl(nextConfig);
