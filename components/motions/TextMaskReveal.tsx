"use client";

import { motion, type Variants } from "framer-motion";

interface TextMaskRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDuration?: number;
  duration?: number;
  once?: boolean;
}

export function TextMaskReveal({
  text,
  className = "",
  delay = 0,
  staggerDuration = 0.06,
  duration = 0.6,
  once = true,
}: TextMaskRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
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
        <span key={`${word}-${i}`} className="inline-block overflow-hidden py-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
