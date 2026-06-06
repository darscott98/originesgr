export default function Button({ href, children, variant = "gold", arrow = false }) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
      {arrow && (
        <span className="arr" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
