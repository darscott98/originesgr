// Self-hosted fonts. `next/font/google` downloads Fraunces + Open Sans at BUILD
// time and emits them as static assets under `_next/static/media`, served from
// our own domain — so a visitor's browser never contacts Google (no IP leak,
// no render-blocking external stylesheet). This replaces the old
// <link rel="stylesheet" href="fonts.googleapis.com/..."> in the layouts.
//
// Each font exposes a CSS variable (consumed throughout styles/globals.css as
// `var(--font-fraunces)` / `var(--font-open-sans)`); the generated family name
// is a hashed token, so the variable is the stable handle. Next also injects a
// size-adjusted fallback face to keep layout shift (CLS) near zero.
import { Fraunces, Open_Sans } from "next/font/google";

// Display serif. Variable across weight (the CSS uses 300–600) and optical size,
// with a true italic — both the upright and italic cuts are used in the design.
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

// Body / UI sans. Variable weight covers the 400–700 used across the site.
export const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-open-sans",
});

// Convenience: both CSS-variable classes, for the <html> elements.
export const fontVariables = `${fraunces.variable} ${openSans.variable}`;
