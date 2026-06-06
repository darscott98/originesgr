const features = [
  {
    title: "Unified intake",
    description: "Capture requests from forms, email, or chat in one structured queue.",
    cue: "◉",
  },
  {
    title: "Priority scoring",
    description: "Rank work with transparent criteria aligned to business impact.",
    cue: "◇",
  },
  {
    title: "Live roadmap",
    description: "Share what is planned, in progress, and shipped across the company.",
    cue: "▦",
  },
  {
    title: "Workflow automation",
    description: "Automate handoffs, reminders, and approvals with simple rules.",
    cue: "↺",
  },
  {
    title: "Stakeholder updates",
    description: "Send polished progress updates without manual status reporting.",
    cue: "▤",
  },
  {
    title: "Delivery analytics",
    description: "Track cycle time, throughput, and bottlenecks to improve output.",
    cue: "▴",
  },
];

export default function Features() {
  return (
    <section id="features" className="section section--alt" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title">Everything needed to run reliable delivery.</h2>
        <div className="card-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <span className="card-cue" aria-hidden="true">
                {feature.cue}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
