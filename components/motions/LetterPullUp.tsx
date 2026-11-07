"use client";
import { motion, type Variants } from "framer-motion";

export function LetterPullUp({ text, className = "" }: { text: string; className?: string }) {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", damping: 12 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`inline-flex overflow-hidden ${className}`}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={item} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
