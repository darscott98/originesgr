import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Portfolio — Origine SGR",
  description:
    "Le società in portafoglio dei fondi gestiti da Origine SGR nei private markets italiani.",
};

const holdings = [
  { sector: "Life Sciences", count: "MedTech & Biotech" },
  { sector: "Digital", count: "Software & Platforms" },
  { sector: "AgriFood B2B", count: "Technology" },
  { sector: "Energy Transition", count: "Related Services" },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="panel"
          id="top"
          style={{ paddingTop: "calc(80px + var(--section-y))" }}
        >
          <div className="wrap">
            <span className="eyebrow reveal">Portfolio</span>
            <div className="sec-head" style={{ marginTop: "var(--stack-gap)" }}>
              <h2 className="reveal d1">Le società che costruiamo con noi.</h2>
              <p className="reveal d2">
                I fondi gestiti da Origine investono in PMI italiane ad alto
                potenziale lungo quattro verticali strategici. La pagina completa
                del portafoglio è in fase di pubblicazione.
              </p>
            </div>
            <div className="sectors">
              {holdings.map((holding, i) => (
                <div
                  key={holding.sector}
                  className={`sector reveal${i ? ` d${i}` : ""}`}
                  style={{ background: "var(--char)" }}
                >
                  <span className="si">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{holding.sector}</h4>
                  <div className="ln" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
