const sectors = [
  {
    si: "01",
    title: "AgriFood B2B & Technology",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=70",
    alt: "Agricoltura e tecnologia",
  },
  {
    si: "02",
    title: "Technology & Business Transformation",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=70",
    alt: "Tecnologia e trasformazione digitale",
  },
  {
    si: "03",
    title: "Energy Transition & Related Services",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=70",
    alt: "Transizione energetica",
  },
  {
    si: "04",
    title: "Aerospace, Defense & Safety",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=700&q=70",
    alt: "Aerospazio e difesa",
  },
];

export default function Settori() {
  return (
    <section className="panel dark">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="reveal">Settori target</h2>
          <p className="reveal d1">
            Quattro verticali strategici per l'autonomia e la competitività
            industriale del sistema economico italiano ed europeo, dove
            digitalizzazione, transizione energetica e salute saranno cruciali
            per la prosperità futura.
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
