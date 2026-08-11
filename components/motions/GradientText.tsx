"use client";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  /** CSS gradient string */
  gradient?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Animate continuously */
  animate?: boolean;
  className?: string;
}

export function GradientText({
  children,
  gradient = "linear-gradient(90deg, #d6fd70, #38bdf8, #a78bfa, #d6fd70)",
  duration = 4,
  animate = true,
  className = "",
}: GradientTextProps) {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text-animated {
          background-size: 200% 200%;
          animation: gradient-shift var(--gt-dur) ease infinite;
        }
      `}</style>
      <span
        className={`gradient-text-animated inline-block bg-clip-text text-transparent ${animate ? "gradient-text-animated" : ""} ${className}`}
        style={{
          backgroundImage: gradient,
          "--gt-dur": `${duration}s`,
        } as React.CSSProperties}
      >
        {children}
      </span>
    </>
  );
}
