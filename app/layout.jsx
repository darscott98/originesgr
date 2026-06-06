import "../styles/globals.css";

export const metadata = {
  title: "Origine SGR — Piattaforma di investimento multi-asset",
  description:
    "Origine SGR unisce capitali privati e istituzionali con competenze industriali e finanziarie di prim'ordine per creare valore sostenibile e rafforzare il sistema imprenditoriale italiano.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
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
      <body>{children}</body>
    </html>
  );
}
