"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlurDissolvePreloaderProps {
  onComplete?: () => void;
  duration?: number;
  brandText?: string;
  className?: string;
}

export function BlurDissolvePreloader({
  onComplete,
  duration = 1800,
  brandText = "AELINE",
  className = "",
}: BlurDissolvePreloaderProps) {
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
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl text-white ${className}`}
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            {brandText}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mt-6 h-0.5 bg-gradient-to-r from-sky-400 via-lime to-purple-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
