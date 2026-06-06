import Button from "@/components/Button";

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Built for focused teams</p>
          <h1>Turn requests into shipped outcomes without coordination chaos.</h1>
          <p className="lead">
            Origine brings intake, prioritization, and delivery tracking into one calm workspace so teams can move faster with less overhead.
          </p>
          <div className="cta-row">
            <Button href="#pricing">Start free trial</Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Product interface preview">
          <div className="hero-visual__panel" />
          <div className="hero-visual__card" />
          <div className="hero-visual__card hero-visual__card--small" />
        </div>
      </div>
    </section>
  );
}
