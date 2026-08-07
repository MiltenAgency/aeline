"use client";

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export function RetroGrid({ className = "", angle = 65 }: RetroGridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px] ${className}`}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      <style>{`
        @keyframes grid-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        .retro-grid-plane {
          animation: grid-scroll 15s linear infinite;
        }
      `}</style>

      {/* Grid */}
      <div className="absolute inset-0 [transform-rotateX(var(--grid-angle))]">
        <div className="retro-grid-plane -inset-[100%] absolute h-[300%] w-[300%] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform-origin:100%_0_0]" />
      </div>

      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}
