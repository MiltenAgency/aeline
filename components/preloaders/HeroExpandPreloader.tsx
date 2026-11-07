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
  brandText = "ZEPHYR",
  heroImageSrc = "/assets/img/light/hero-daylight.jpg",
  onComplete,
  duration = 2400,
  className = "",
}: HeroExpandPreloaderProps) {
  const [phase, setPhase] = useState<"text" | "split" | "expand" | "complete">("text");
  const [active, setActive] = useState(true);

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("zephyr_hero_seen") : null;
    const forceShow = typeof window !== "undefined" && (
      new URLSearchParams(window.location.search).get("preview_preloader") === "true" ||
      new URLSearchParams(window.location.search).get("preloader") === "true"
    );

    if (hasSeen && !forceShow) {
      setActive(false);
      return;
    }

    document.body.style.overflow = "hidden";

    // Stage 1: Display Brand Text (0 - 900ms)
    const t1 = setTimeout(() => setPhase("split"), 900);

    // Stage 2: Text splits top & bottom, hero picture emerges in middle (900ms - 1700ms)
    const t2 = setTimeout(() => setPhase("expand"), 1700);

    // Stage 3: Hero picture scales to full screen & complete
    const t3 = setTimeout(() => {
      setPhase("complete");
      setActive(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("zephyr_hero_seen", "true");
      if (onComplete) onComplete();
    }, duration);

    const handleReplay = () => {
      setActive(true);
      setPhase("text");
      document.body.style.overflow = "hidden";
      setTimeout(() => setPhase("split"), 900);
      setTimeout(() => setPhase("expand"), 1700);
      setTimeout(() => {
        setPhase("complete");
        setActive(false);
        document.body.style.overflow = "";
      }, duration);
    };

    window.addEventListener("zephyr_trigger_preloader", handleReplay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("zephyr_trigger_preloader", handleReplay);
      document.body.style.overflow = "";
    };
  }, [duration, onComplete]);

  if (!active) return null;

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          key="hero-expand-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed inset-0 z-[99999] overflow-hidden bg-[#03071e] flex items-center justify-center ${className}`}
        >
          {/* Top Half of Brand Text + Top Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={
              phase === "split" || phase === "expand"
                ? { y: "-50vh" }
                : { y: 0 }
            }
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#03071e] flex items-end justify-center z-30 overflow-hidden pb-0 border-b border-white/10"
          >
            <div className="translate-y-1/2">
              <h1 className="text-7xl font-extrabold tracking-widest text-white sm:text-9xl md:text-[11rem] uppercase select-none">
                {brandText}
              </h1>
            </div>
          </motion.div>

          {/* Emerging Hero Picture Card in Center Gap */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ width: "240px", height: "140px", borderRadius: "16px", scale: 0.75, opacity: 0 }}
              animate={
                phase === "split"
                  ? { width: "440px", height: "260px", borderRadius: "20px", scale: 1, opacity: 1 }
                  : phase === "expand"
                  ? { width: "100vw", height: "100vh", borderRadius: "0px", scale: 1, opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden shadow-2xl"
            >
              <img
                src={heroImageSrc}
                alt="Zephyr Dynamics Offshore Wind Farm"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03071e]/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/90">
                  Zephyr Dynamics • Offshore Energy
                </span>
              </div>
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
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#03071e] flex items-start justify-center z-30 overflow-hidden pt-0 border-t border-white/10"
          >
            <div className="-translate-y-1/2">
              <h1 className="text-7xl font-extrabold tracking-widest text-white sm:text-9xl md:text-[11rem] uppercase select-none">
                {brandText}
              </h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
