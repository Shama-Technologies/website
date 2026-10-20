// The Shama mark: stacked lines forming a sphere, as in the logo.
const WIDTHS = [12, 22, 28, 32, 32, 28, 22, 12];

export default function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      {WIDTHS.map((w, i) => (
        <rect
          key={i}
          x={20 - w / 2}
          y={5 + i * 4}
          width={w}
          height={2.4}
          rx={1.2}
          fill={i % 2 ? "#8F86FF" : "#6C63FF"}
        />
      ))}
    </svg>
  );
}
