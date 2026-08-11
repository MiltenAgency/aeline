"use client";

import { motion, type Variants, type MarginProps } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  margin?: string;
  amount?: "some" | "all" | number;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  margin = "-80px",
  amount = "some",
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as any, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
