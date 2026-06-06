import "../styles/globals.css";

export const metadata = {
  title: "Origine | Operations clarity for growing teams",
  description:
    "Origine helps teams capture requests, automate repeatable work, and ship with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
