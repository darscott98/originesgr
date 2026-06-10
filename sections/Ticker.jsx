import { getTranslations } from "next-intl/server";

export default async function Ticker() {
  const t = await getTranslations("ticker");
  const announcement = t("announcement");
  // Repeated so the -50% keyframe scroll loops seamlessly across the bar width.
  const loop = Array.from({ length: 6 });

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((_, i) => (
          <span key={i}>
            <b>News</b> {announcement}
          </span>
        ))}
      </div>
    </div>
  );
}
