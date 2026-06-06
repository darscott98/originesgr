const steps = [
  {
    title: "Collect and triage",
    description: "Centralize incoming requests and quickly assign owner, impact, and effort.",
  },
  {
    title: "Plan with confidence",
    description: "Build a realistic delivery plan with dependencies and clear milestones.",
  },
  {
    title: "Execute and report",
    description: "Move work through delivery and share progress automatically with stakeholders.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title">How Origine works</h2>
        <ol className="step-list">
          {steps.map((step, index) => (
            <li key={step.title} className="step-card">
              <span aria-hidden="true">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
