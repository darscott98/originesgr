/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site to `out/` for static hosts (e.g. Cloudflare Pages).
  output: "export",
  // Static export can't use the Next.js image optimizer; serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
