// The root layout is a pure passthrough. The real document shell (<html>, fonts,
// providers) lives in app/[locale]/layout.jsx so each locale gets its own
// `lang`, and the root `/` redirect page (app/page.jsx) renders its own shell.
export default function RootLayout({ children }) {
  return children;
}
