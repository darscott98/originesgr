const testimonials = [
  {
    quote:
      "Origine replaced three disconnected tools and gave our whole team a single delivery rhythm.",
    name: "Mia Patel",
    role: "VP Product, Northline",
  },
  {
    quote:
      "Weekly reporting now takes 10 minutes instead of two hours, and everyone trusts the numbers.",
    name: "Jordan Lee",
    role: "Head of Operations, Driftwell",
  },
];

export default function Testimonials() {
  return (
    <section className="section section--alt" aria-labelledby="credibility-title">
      <div className="container">
        <h2 id="credibility-title">Trusted by teams that ship critical work.</h2>
        <div className="metrics-row" role="list" aria-label="Key customer metrics">
          <p role="listitem">
            <strong>42%</strong> faster cycle times
          </p>
          <p role="listitem">
            <strong>3.1x</strong> more on-time launches
          </p>
          <p role="listitem">
            <strong>99.9%</strong> uptime
          </p>
        </div>
        <div className="card-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="card">
              <p>“{item.quote}”</p>
              <cite>
                {item.name}, {item.role}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
