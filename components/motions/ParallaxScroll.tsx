"use client";
import { useRef, ReactNode, CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
  children: ReactNode;
  /** Speed factor: negative = opposite direction, positive = same direction, 0 = fixed */
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export function ParallaxScroll({
  children,
  speed = 0.4,
  className = "",
  style,
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll 0→1 to a vertical offset
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
