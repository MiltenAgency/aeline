"use client";

import { motion, type Variants } from "framer-motion";

interface SlideRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}

export function SlideReveal({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  distance = 50,
  blur = true,
  className = "",
  once = true,
}: SlideRevealProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "top":
        return { x: 0, y: -distance };
      case "bottom":
        return { x: 0, y: distance };
    }
  };

  const offset = getInitialOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
