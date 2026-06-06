import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=2000&q=70"
          alt=""
        />
      </div>
      <div className="hero-bg" />
      <div className="hero-arcs" aria-hidden="true">
        <svg viewBox="0 0 800 800" fill="none">
          <g stroke="rgba(226,192,116,.22)" strokeWidth="1" fill="none">
            <circle cx="640" cy="400" r="90" />
            <circle cx="640" cy="400" r="170" />
            <circle cx="640" cy="400" r="250" />
            <circle cx="640" cy="400" r="330" />
            <circle cx="640" cy="400" r="410" />
            <circle cx="640" cy="400" r="500" />
            <circle cx="640" cy="400" r="600" />
            <circle cx="640" cy="400" r="5" fill="rgba(226,192,116,.8)" stroke="none" />
          </g>
        </svg>
      </div>
      <div className="hero-mark" aria-hidden="true">
        O
      </div>
      <div className="wrap">
        <span className="eyebrow hero-eyebrow reveal">
          Piattaforma di investimento multi-asset
        </span>
        <h1 className="reveal d1">
          Capitale e competenza, alle <em>origini</em> del valore industriale
          italiano.
        </h1>
        <p className="hero-lede reveal d2">
          Uniamo capitali privati e istituzionali con competenze industriali e
          finanziarie di prim'ordine, per creare valore sostenibile e rafforzare
          il sistema imprenditoriale italiano e la sua internazionalizzazione.
        </p>
        <div className="hero-actions reveal d3">
          <Button href="#fondi" variant="gold" arrow>
            Esplora i fondi
          </Button>
          <Button href="#societa" variant="ghost">
            La nostra visione
          </Button>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        Scorri
      </div>
    </section>
  );
}
