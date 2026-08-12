"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PercentageFillCirclePreloaderProps {
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function PercentageFillCirclePreloader({
  onComplete,
  duration = 2000,
  className = "",
}: PercentageFillCirclePreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / (duration - 300)) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 300);
      }
    };

    requestAnimationFrame(update);
  }, [duration, onComplete]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black text-white ${className}`}
        >
          <div className="relative flex items-center justify-center">
            <svg className="h-40 w-40 -rotate-90 transform">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-white/10"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-white transition-all duration-75"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <span className="absolute font-mono text-2xl font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
