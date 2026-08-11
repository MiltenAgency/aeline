"use client";

interface RippleProps {
  /** Number of ripple rings */
  count?: number;
  /** Color of the rings */
  color?: string;
  /** Base size in px */
  size?: number;
  /** Duration of one cycle in seconds */
  duration?: number;
  className?: string;
}

export function Ripple({
  count = 4,
  color = "rgba(214,253,112,0.15)",
  size = 200,
  duration = 3,
  className = "",
}: RippleProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      <style>{`
        @keyframes ripple-out {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .ripple-ring {
          position: absolute;
          border-radius: 9999px;
          animation: ripple-out var(--rip-dur) ease-out infinite;
        }
      `}</style>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="ripple-ring"
          style={{
            width: size,
            height: size,
            background: color,
            animationDelay: `${(duration / count) * i}s`,
            "--rip-dur": `${duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
