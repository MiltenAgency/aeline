"use client";
import { ReactNode } from "react";

interface Marquee3DProps {
  rows: ReactNode[][];
  /** Tilt angle in degrees */
  tilt?: number;
  /** Duration per row in seconds (alternating direction) */
  duration?: number;
  gap?: number;
  className?: string;
}

export function Marquee3D({
  rows,
  tilt = 15,
  duration = 25,
  gap = 16,
  className = "",
}: Marquee3DProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ perspective: "1200px" }}
    >
      <style>{`
        @keyframes m3d-ltr {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes m3d-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .m3d-ltr { animation: m3d-ltr var(--m3d-dur) linear infinite; }
        .m3d-rtl { animation: m3d-rtl var(--m3d-dur) linear infinite; }
      `}</style>

      <div
        style={{
          transform: `rotateX(${tilt}deg) rotateZ(-4deg)`,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col"
        aria-hidden
      >
        {rows.map((row, rowIdx) => {
          const doubled = [...row, ...row];
          const dir = rowIdx % 2 === 0 ? "m3d-ltr" : "m3d-rtl";
          return (
            <div key={rowIdx} className="flex w-max overflow-hidden">
              <div
                className={`${dir} flex shrink-0`}
                style={{ gap, "--m3d-dur": `${duration + rowIdx * 4}s` } as React.CSSProperties}
              >
                {doubled.map((item, i) => (
                  <div key={i} className="shrink-0">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
