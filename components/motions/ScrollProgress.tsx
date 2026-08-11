"use client";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-lime-400 to-purple-500 origin-left z-[99999] ${className}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
