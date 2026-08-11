"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function TracingBeam({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, 400]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div ref={ref} className={`relative max-w-4xl mx-auto ${className}`}>
      <div className="absolute -left-4 md:-left-12 top-3">
        <svg
          viewBox="0 0 20 300"
          aria-hidden="true"
          className="ml-4 block h-full w-5"
        >
          <motion.path
            d="M 1 0V 300"
            fill="none"
            stroke="#27272a"
            strokeWidth="1.25"
          />
          <motion.path
            d="M 1 0V 300"
            fill="none"
            stroke="url(#gradient-beam)"
            strokeWidth="2.5"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <defs>
            <linearGradient id="gradient-beam" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#38bdf8" />
              <stop offset="0.325" stopColor="#d6fd70" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pl-6 md:pl-10">{children}</div>
    </motion.div>
  );
}
