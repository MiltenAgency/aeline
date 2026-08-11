"use client";
import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  items: ReactNode[];
  /** Duration of one full cycle in seconds */
  duration?: number;
  /** Gap between items in px */
  gap?: number;
  /** Reverse direction */
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

export function InfiniteSlider({
  items,
  duration = 30,
  gap = 32,
  reverse = false,
  className = "",
  itemClassName = "",
}: InfiniteSliderProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <style>{`
        @keyframes infinite-slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .infinite-slide-track {
          animation: infinite-slide var(--slide-duration, 30s) linear infinite;
          animation-direction: var(--slide-dir, normal);
        }
        .infinite-slide-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="infinite-slide-track flex w-max"
        style={
          {
            gap,
            "--slide-duration": `${duration}s`,
            "--slide-dir": reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <div key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
