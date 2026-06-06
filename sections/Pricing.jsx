import Button from "@/components/Button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    interval: "/month",
    description: "For small teams centralizing delivery basics.",
    features: ["Up to 10 users", "Core workflows", "Weekly reports"],
  },
  {
    name: "Growth",
    price: "$89",
    interval: "/month",
    description: "For scaling teams that need automation and visibility.",
    features: ["Up to 40 users", "Advanced automations", "Priority support"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    interval: "",
    description: "For larger organizations with governance requirements.",
    features: ["Unlimited users", "SSO and audit logs", "Dedicated success manager"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title">Simple pricing for each stage of growth.</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card${plan.recommended ? " pricing-card--recommended" : ""}`}
            >
              {plan.recommended ? <p className="badge">Recommended</p> : null}
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price}
                <span>{plan.interval}</span>
              </p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button href="#" variant={plan.recommended ? "primary" : "secondary"}>
                Choose {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
