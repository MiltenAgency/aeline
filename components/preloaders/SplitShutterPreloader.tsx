"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitShutterPreloaderProps {
  onComplete?: () => void;
  duration?: number;
  brandText?: string;
  className?: string;
}

export function SplitShutterPreloader({
  onComplete,
  duration = 1600,
  brandText = "AELINE",
  className = "",
}: SplitShutterPreloaderProps) {
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
        <div className={`fixed inset-0 z-[99999] flex flex-col pointer-events-none ${className}`}>
          {/* Top panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex h-1/2 w-full items-end justify-center bg-black pb-4 text-white"
          >
            <span className="text-4xl font-bold tracking-widest sm:text-6xl">{brandText}</span>
          </motion.div>

          {/* Bottom panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex h-1/2 w-full items-start justify-center bg-black pt-4 text-white/50"
          >
            <span className="font-mono text-xs tracking-widest uppercase">CREATIVE SUITE</span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
