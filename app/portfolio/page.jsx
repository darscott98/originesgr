import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PortfolioExplorer from "@/components/PortfolioExplorer";
import { portfolioTotals } from "@/components/portfolioData";

export const metadata = {
  title: "Portfolio — Origine SGR",
  description:
    "Il portafoglio di Origine SGR: società partecipate nei segmenti Technology, MedTech e Life Sciences.",
};

function Arcs({ cx = 380, cy = 200 }) {
  return (
    <div className="arcs" aria-hidden="true">
      <svg viewBox="0 0 540 540" fill="none">
        <g stroke="rgba(226,192,116,.2)" strokeWidth="1" fill="none">
          <circle cx={cx} cy={cy} r="70" />
          <circle cx={cx} cy={cy} r="140" />
          <circle cx={cx} cy={cy} r="210" />
          <circle cx={cx} cy={cy} r="290" />
          <circle cx={cx} cy={cy} r="4" fill="rgba(226,192,116,.8)" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pf-hero" id="top">
          <Arcs />
          <div className="wrap">
            <span className="eyebrow reveal">Portfolio</span>
            <h1 className="reveal d1">
              Le menti che innovano aprono <em>nuovi orizzonti</em>.
            </h1>
            <p className="reveal d2">
              Il nostro portafoglio d'investimento: le società e i progetti che
              sosteniamo nei segmenti Technology, MedTech e Life Sciences, frutto
              di un'attività di origination proprietaria lungo l'intero ciclo di
              vita.
            </p>
            <div className="pf-metrics reveal d3">
              <div className="pf-metric">
                <div className="v">{portfolioTotals.total}</div>
                <div className="l">Società in portafoglio</div>
              </div>
              <div className="pf-metric">
                <div className="v">{portfolioTotals.areas}</div>
                <div className="l">Aree d'investimento</div>
              </div>
              <div className="pf-metric">
                <div className="v">Multi-exit</div>
                <div className="l">Track record di cessioni</div>
              </div>
            </div>
          </div>
        </section>

        <PortfolioExplorer />

        <section className="pf-cta">
          <Arcs cx={160} cy={340} />
          <div className="wrap">
            <h2>
              Costruiamo il prossimo capitolo, <em>insieme.</em>
            </h2>
            <Button href="/#contatti" variant="gold" arrow>
              Contattaci
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
