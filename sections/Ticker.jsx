import { getTranslations } from "next-intl/server";

export default async function Ticker() {
  const t = await getTranslations("ticker");
  const items = t.raw("items");
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
