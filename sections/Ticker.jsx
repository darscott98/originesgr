const items = [
  { label: "Private Equity", state: "Attivo" },
  { label: "Venture Capital", state: "In valorizzazione" },
  { label: "Real Estate", state: "In sviluppo" },
  { label: "Infrastructure", state: "In sviluppo" },
  { label: "Private Debt", state: "In scouting" },
];

export default function Ticker() {
  // Doubled so the -50% keyframe scroll loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={i}>
            <b>{item.label}</b> {item.state}
          </span>
        ))}
      </div>
    </div>
  );
}
