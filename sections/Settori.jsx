const sectors = [
  {
    si: "01",
    title: "AgriFood B2B & Technology",
    img: "/images/agrifood.png",
    alt: "Agricoltura e tecnologia",
  },
  {
    si: "02",
    title: "Technology & Business Transformation",
    img: "/images/tech.png",
    alt: "Tecnologia e trasformazione digitale",
  },
  {
    si: "03",
    title: "Energy Transition & Related Services",
    img: "/images/energy.png",
    alt: "Transizione energetica",
  },
  {
    si: "04",
    title: "Aerospace, Defense & Safety",
    img: "/images/defense.png",
    alt: "Aerospazio e difesa",
  },
];

export default function Settori() {
  return (
    <section className="panel">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">Settori target</h2>
          <p className="reveal d1">
            Quattro verticali strategici su cui il fondo concentra gli
            investimenti, a rafforzamento della competitività e dell'autonomia
            industriale del sistema economico italiano ed europeo.
          </p>
        </div>
        <div className="sectors">
          {sectors.map((sector, i) => (
            <div key={sector.si} className={`sector reveal${i ? ` d${i}` : ""}`}>
              <img src={sector.img} alt={sector.alt} />
              <span className="si">{sector.si}</span>
              <h4>{sector.title}</h4>
              <div className="ln" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
