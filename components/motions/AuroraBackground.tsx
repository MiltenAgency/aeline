"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-zinc-950 text-slate-950 transition-bg ${className}`}
      {...props}
    >
      <style>{`
        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
        .aurora-layer {
          background-image: var(--dark-gradient), var(--aurora);
          background-size: 300% 200%;
          background-position: 50% 50%, 50% 50%;
          filter: blur(10px) invert(1);
          animation: aurora 60s linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`
            aurora-layer
            absolute -inset-[10px] opacity-50 will-change-transform
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#38bdf8_10%,#a78bfa_15%,#e0e7ff_20%,#e879f9_25%,#38bdf8_30%)]
            ${showRadialGradient ? `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]` : ""}
          `}
        />
      </div>
      {children}
    </div>
  );
}
