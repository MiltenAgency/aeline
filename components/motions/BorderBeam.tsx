"use client";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className = "",
  size = 250,
  duration = 12,
  borderWidth = 5.5,
  colorFrom = "#d6fd70",
  colorTo = "#38bdf8",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={{
        "--size": size,
        "--duration": duration,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": delay,
      } as React.CSSProperties}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <style>{`
        @keyframes border-beam-anim {
          100% { offset-distance: 100%; }
        }
        .border-beam-element {
          animation: border-beam-anim calc(var(--duration) * 1s) linear infinite;
          animation-delay: calc(var(--delay) * 1s);
        }
      `}</style>
      <div
        className="border-beam-element absolute aspect-square w-[calc(var(--size)*1px)] rounded-full bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          offsetPath: `rect(0 auto auto 0 round calc(var(--border-width) * 1px))`,
        }}
      />
    </div>
  );
}
