"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NoiseGrainPreloaderProps {
  onComplete?: () => void;
  duration?: number;
  brandText?: string;
  className?: string;
}

export function NoiseGrainPreloader({
  onComplete,
  duration = 1800,
  brandText = "AELINE",
  className = "",
}: NoiseGrainPreloaderProps) {
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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white ${className}`}
        >
          {/* Animated Noise Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative text-center">
            <h1 className="text-6xl font-black tracking-widest sm:text-8xl bg-gradient-to-b from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
              {brandText}
            </h1>
            <p className="mt-4 font-mono text-xs text-lime tracking-widest uppercase">
              • NOISE ENGINE INITIALIZED
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
