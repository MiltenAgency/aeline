"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LineProgressCurtainProps {
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function LineProgressCurtain({
  onComplete,
  duration = 1800,
  className = "",
}: LineProgressCurtainProps) {
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
          transition={{ duration: 0.4, delay: 0.6 }}
          className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-zinc-950 p-12 text-white ${className}`}
        >
          <div className="text-xs font-mono tracking-widest text-zinc-500">AELINE / STUDIO</div>

          <div className="w-full">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: "easeInOut" }}
              className="h-1 w-full bg-gradient-to-r from-sky-400 via-lime-400 to-purple-500 origin-left"
            />
          </div>

          <div className="flex justify-between text-xs font-mono text-zinc-500">
            <span>INITIALIZING</span>
            <span>2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
