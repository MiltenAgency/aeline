"use client";

import { motion, type Variants } from "framer-motion";

interface WordByWordBlurProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDuration?: number;
  duration?: number;
  once?: boolean;
}

export function WordByWordBlur({
  text,
  className = "",
  delay = 0,
  staggerDuration = 0.08,
  duration = 0.5,
  once = true,
}: WordByWordBlurProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
