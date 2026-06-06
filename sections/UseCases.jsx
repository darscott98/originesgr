const useCases = [
  {
    title: "Product teams",
    description: "Manage backlog intake and roadmap communication in one source of truth.",
  },
  {
    title: "Operations teams",
    description: "Coordinate cross-functional initiatives without spreadsheet tracking.",
  },
  {
    title: "Customer success",
    description: "Route escalation requests and monitor delivery promises clearly.",
  },
  {
    title: "Executive reporting",
    description: "Turn project updates into reliable metrics and weekly summaries.",
  },
];

export default function UseCases() {
  return (
    <section className="section" aria-labelledby="use-cases-title">
      <div className="container">
        <h2 id="use-cases-title">Flexible enough for every delivery-heavy function.</h2>
        <div className="card-grid card-grid--four">
          {useCases.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
