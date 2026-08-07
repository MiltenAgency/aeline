"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GridUnfoldPreloaderProps {
  rows?: number;
  cols?: number;
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function GridUnfoldPreloader({
  rows = 4,
  cols = 6,
  onComplete,
  duration = 1500,
  className = "",
}: GridUnfoldPreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const totalTiles = rows * cols;

  return (
    <AnimatePresence>
      {isLoading && (
        <div className={`fixed inset-0 z-[99999] grid grid-cols-6 grid-rows-4 pointer-events-none ${className}`}>
          {Array.from({ length: totalTiles }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: (i % cols) * 0.08 + Math.floor(i / cols) * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="bg-black border border-white/5"
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
