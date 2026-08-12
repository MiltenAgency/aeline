"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircleExpandPreloaderProps {
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function CircleExpandPreloader({
  onComplete,
  duration = 1800,
  className = "",
}: CircleExpandPreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ clipPath: "circle(100% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white ${className}`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            <span className="font-mono text-xs tracking-widest uppercase text-white/60">
              PREPARING CANVAS
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
