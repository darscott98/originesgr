// Static fallback for the root path `/`.
//
// On Cloudflare the edge Function (functions/index.js) geo-redirects before this
// document is ever served. This page is the backstop for environments without
// that Function — local `serve out`, or any host that ignores `functions/`:
// it redirects client-side by browser language, defaulting to English, with a
// <meta refresh> and <noscript> links so it works even without JavaScript.
//
// The root layout (app/layout.jsx) is a passthrough that renders no <html>, so
// this self-contained document supplies its own <html>/<body>.

const REDIRECT_SCRIPT =
  "(function(){var l=(navigator.language||'').toLowerCase();" +
  "location.replace(l.indexOf('it')===0?'/it/':'/en/')})()";

export const metadata = {
  // It's a redirect stub — keep it out of the index; /it/ and /en/ are canonical.
  robots: { index: false, follow: false },
};

export default function RootRedirect() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      </head>
      <body>
        <noscript>
          {/* Raw anchors on purpose: this is the no-JS fallback, and next/link
              prefetch/routing has no role in a static redirect stub. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/it/">Italiano</a> · <a href="/en/">English</a>
        </noscript>
      </body>
    </html>
  );
}
