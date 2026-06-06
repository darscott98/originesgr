const benefits = [
  "Ship priority work faster with fewer meetings.",
  "Reduce dropped requests through clear ownership.",
  "Give leadership real-time delivery visibility.",
  "Improve team capacity planning with better forecasts.",
];

export default function Benefits() {
  return (
    <section className="section section--alt" aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title">Practical benefits your team feels immediately.</h2>
        <ul className="benefit-list">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
