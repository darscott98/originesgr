const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most teams are fully configured in under one day, including intake forms and workflow stages.",
  },
  {
    question: "Can we import existing projects?",
    answer: "Yes. You can import projects from spreadsheets or common project management exports.",
  },
  {
    question: "Does Origine support role-based access?",
    answer: "Yes. Starter includes basic roles, while Growth and Enterprise include granular permissions.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes. Annual plans include a discount and optional onboarding support.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. Every plan starts with a 14-day free trial and no credit card required.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className="container narrow">
        <h2 id="faq-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
