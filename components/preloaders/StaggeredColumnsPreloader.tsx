"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StaggeredColumnsPreloaderProps {
  columnsCount?: number;
  brandText?: string;
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function StaggeredColumnsPreloader({
  columnsCount = 5,
  brandText = "AELINE",
  onComplete,
  duration = 1800,
  className = "",
}: StaggeredColumnsPreloaderProps) {
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
        <div className={`fixed inset-0 z-[99999] pointer-events-none ${className}`}>
          {/* Center Brand Text / Counter (Fades out first) */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-[100000] flex flex-col items-center justify-center text-white"
          >
            <h1 className="text-4xl font-bold tracking-widest sm:text-6xl">{brandText}</h1>
            <p className="mt-2 font-mono text-xs text-white/50 tracking-widest uppercase">
              STUDIO EDITION
            </p>
          </motion.div>

          {/* Staggered Vertical Columns */}
          <div className="flex h-full w-full">
            {Array.from({ length: columnsCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="h-full flex-1 bg-black border-r border-white/5 last:border-r-0"
              />
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
