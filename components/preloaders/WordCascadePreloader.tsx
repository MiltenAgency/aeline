"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordCascadePreloaderProps {
  words?: string[];
  onComplete?: () => void;
  interval?: number;
  className?: string;
}

export function WordCascadePreloader({
  words = ["Hello", "Bonjour", "Willkommen", "Aeline AI"],
  onComplete,
  interval = 300,
  className = "",
}: WordCascadePreloaderProps) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, interval);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, interval + 200);
      return () => clearTimeout(timer);
    }
  }, [index, words, interval, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white ${className}`}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-light tracking-wider sm:text-6xl"
            >
              • {words[index]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
