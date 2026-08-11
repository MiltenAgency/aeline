"use client";
import { motion } from "framer-motion";

interface FlipTextProps {
  words: string[];
  className?: string;
}

export function FlipText({ words, className = "" }: FlipTextProps) {
  return (
    <div className={`inline-flex overflow-hidden py-1 ${className}`}>
      <motion.div
        animate={{ y: words.map((_, i) => `-${i * 100}%`) }}
        transition={{ duration: words.length * 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col"
      >
        {words.map((word, idx) => (
          <span key={idx} className="h-full flex items-center">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
