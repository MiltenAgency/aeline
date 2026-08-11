"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MorphingText({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
