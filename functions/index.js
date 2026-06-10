// Cloudflare Pages Function for the root path `/`.
//
// The site is a static export (no Next.js server), so geo-detection lives here
// at Cloudflare's edge: visitors in Italy are sent to the Italian site, everyone
// else to the English site. This runs ONLY for `/` — every other path is served
// straight from the static `out/` assets.
//
// `CF-IPCountry` is Cloudflare's ISO country code for the visitor's IP. The 302
// (temporary) keeps `/` re-evaluating geo on each visit rather than being cached
// as a permanent redirect.
export function onRequest(context) {
  const country = context.request.headers.get("CF-IPCountry");
  const target = country === "IT" ? "/it/" : "/en/";
  return Response.redirect(new URL(target, context.request.url), 302);
}
