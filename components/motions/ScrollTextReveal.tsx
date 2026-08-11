"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

        return (
          <motion.span key={i} style={{ opacity }} className="transition-opacity">
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
