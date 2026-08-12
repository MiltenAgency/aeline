"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextFillPreloaderProps {
  text?: string;
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function TextFillPreloader({
  text = "AELINE",
  onComplete,
  duration = 2200,
  className = "",
}: TextFillPreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const updateFill = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / (duration - 400)) * 100, 100);
      setFillPercent(progress);

      if (progress < 100) {
        requestAnimationFrame(updateFill);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 300);
      }
    };
    requestAnimationFrame(updateFill);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white ${className}`}
        >
          <div className="relative select-none font-black text-6xl tracking-tighter sm:text-9xl">
            {/* Outline background text */}
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.2)]">
              {text}
            </span>
            {/* Liquid fill text */}
            <div
              className="absolute inset-0 overflow-hidden text-white transition-all duration-75"
              style={{ width: `${fillPercent}%` }}
            >
              <span className="whitespace-nowrap">{text}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
