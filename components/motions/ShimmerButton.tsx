"use client";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  /** Shimmer color */
  shimmerColor?: string;
  /** Background color */
  background?: string;
  /** Border color */
  borderColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function ShimmerButton({
  children,
  onClick,
  href,
  shimmerColor = "rgba(255,255,255,0.25)",
  background = "#0f0f0f",
  borderColor = "rgba(255,255,255,0.15)",
  className = "",
  type = "button",
}: ShimmerButtonProps) {
  const inner = (
    <>
      <style>{`
        @keyframes shimmer-sweep {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .shimmer-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            var(--shimmer-color) 50%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.2s;
        }
        .shimmer-btn:hover::before {
          opacity: 1;
          animation: shimmer-sweep 0.7s ease forwards;
        }
      `}</style>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const sharedProps = {
    className: `shimmer-btn relative overflow-hidden rounded-full border px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${className}`,
    style: {
      background,
      borderColor,
      color: "white",
      "--shimmer-color": shimmerColor,
    } as React.CSSProperties,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {inner}
    </button>
  );
}
