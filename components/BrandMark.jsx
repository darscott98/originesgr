export default function BrandMark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeOpacity=".22" />
      <path d="M16 16 a8 8 0 1 1 -8 8" stroke="var(--gold-d)" strokeWidth="1.4" />
      <path d="M16 16 a4 4 0 1 0 4 -4" stroke="var(--gold-d)" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="1.7" fill="var(--gold-d)" />
    </svg>
  );
}
