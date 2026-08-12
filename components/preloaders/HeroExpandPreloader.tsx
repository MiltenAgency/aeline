"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroExpandPreloaderProps {
  brandText?: string;
  heroImageSrc?: string;
  onComplete?: () => void;
  duration?: number;
  className?: string;
}

export function HeroExpandPreloader({
  brandText = "AELINE",
  heroImageSrc = "/assets/img/1fd4a8c085f10113.webp",
  onComplete,
  duration = 2600,
  className = "",
}: HeroExpandPreloaderProps) {
  const [phase, setPhase] = useState<"text" | "split" | "expand" | "complete">("text");

  useEffect(() => {
    // Stage 1: Display Brand Text (0 - 1000ms)
    const t1 = setTimeout(() => setPhase("split"), 1000);

    // Stage 2: Text splits top & bottom, hero picture emerges in middle (1000ms - 1800ms)
    const t2 = setTimeout(() => setPhase("expand"), 1800);

    // Stage 3: Hero picture scales to full screen & complete (2600ms)
    const t3 = setTimeout(() => {
      setPhase("complete");
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed inset-0 z-[99999] overflow-hidden bg-black flex items-center justify-center ${className}`}
        >
          {/* Top Half of Brand Text + Top Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={
              phase === "split" || phase === "expand"
                ? { y: "-50vh" }
                : { y: 0 }
            }
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-black flex items-end justify-center z-30 overflow-hidden pb-0"
          >
            <div className="translate-y-1/2">
              <h1 className="text-7xl font-black tracking-widest text-white sm:text-9xl md:text-[10rem] uppercase select-none">
                {brandText}
              </h1>
            </div>
          </motion.div>

          {/* Emerging Hero Picture Card in Center Gap */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ width: "240px", height: "140px", borderRadius: "16px", scale: 0.7, opacity: 0 }}
              animate={
                phase === "split"
                  ? { width: "420px", height: "240px", borderRadius: "20px", scale: 1, opacity: 1 }
                  : phase === "expand"
                  ? { width: "100vw", height: "100vh", borderRadius: "0px", scale: 1, opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden shadow-2xl"
            >
              <img
                src={heroImageSrc}
                alt="Hero Preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Bottom Half of Brand Text + Bottom Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={
              phase === "split" || phase === "expand"
                ? { y: "50vh" }
                : { y: 0 }
            }
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black flex items-start justify-center z-30 overflow-hidden pt-0"
          >
            <div className="-translate-y-1/2">
              <h1 className="text-7xl font-black tracking-widest text-white sm:text-9xl md:text-[10rem] uppercase select-none">
                {brandText}
              </h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
