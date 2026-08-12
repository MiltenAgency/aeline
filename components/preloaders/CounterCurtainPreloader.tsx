"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterCurtainPreloaderProps {
  onComplete?: () => void;
  duration?: number; // Total loading time in ms
  brandText?: string;
  className?: string;
}

export function CounterCurtainPreloader({
  onComplete,
  duration = 2000,
  brandText = "AELINE",
  className = "",
}: CounterCurtainPreloaderProps) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setCount(progress);

      if (progress < 100) {
        requestAnimationFrame(updateCount);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 200);
      }
    };

    requestAnimationFrame(updateCount);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-black p-8 text-white ${className}`}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-white/50">
            <span>{brandText}</span>
            <span>EXPERIENCE</span>
          </div>

          <div className="my-auto text-center font-mono">
            <span className="text-7xl font-bold tracking-tighter sm:text-9xl">
              {String(count).padStart(2, "0")}
            </span>
            <span className="text-3xl text-white/40">%</span>
          </div>

          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-white/50">
            <span>LOADING ASSETS</span>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
