"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface LiquidWavePreloaderProps {
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function LiquidWavePreloader({
  onComplete,
  duration = 1800,
  className = "",
}: LiquidWavePreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  const curveVariants: Variants = {
    initial: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
    },
    exit: {
      d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.7 } }}
          className={`fixed inset-0 z-[99999] pointer-events-none ${className}`}
        >
          <svg className="h-full w-full fill-black">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
