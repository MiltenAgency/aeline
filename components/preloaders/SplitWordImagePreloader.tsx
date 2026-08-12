"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitWordImagePreloaderProps {
  startText?: string;
  endText?: string;
  images?: string[];
  onComplete?: () => void;
  className?: string;
}

const defaultProjectImages = [
  "/assets/img/0782534ad3211488.webp",
  "/assets/img/31a055c60d61e195.webp",
  "/assets/img/0ef854dabf740543.webp",
  "/assets/img/287ae4b58fe484fd.webp",
  "/assets/img/343ad639d6186a22.webp",
  "/assets/img/e7029c64832e9412.webp",
  "/assets/img/1fd4a8c085f10113.webp", // Hero background image
];

export function SplitWordImagePreloader({
  startText = "AEL",
  endText = "INE",
  images = defaultProjectImages,
  onComplete,
  className = "",
}: SplitWordImagePreloaderProps) {
  const [phase, setPhase] = useState<"enter" | "joined" | "open" | "cycle" | "fullscreen" | "complete">("enter");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    // 0 - 600ms: Letters reveal
    const t1 = setTimeout(() => setPhase("joined"), 600);

    // 1400ms: Split word and open middle slit
    const t2 = setTimeout(() => setPhase("open"), 1400);

    // 1800ms: Start image cycle through project images
    const t3 = setTimeout(() => setPhase("cycle"), 1800);

    let cycleInterval: NodeJS.Timeout;
    const startCycleTimer = setTimeout(() => {
      cycleInterval = setInterval(() => {
        setCurrentImgIndex((prev) => {
          if (prev < images.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 500);
    }, 1800);

    // 5200ms: Smoothly scale central slit to exact Hero viewport size
    const t4 = setTimeout(() => {
      if (cycleInterval) clearInterval(cycleInterval);
      setCurrentImgIndex(images.length - 1);
      setPhase("fullscreen");
    }, 5200);

    // 6300ms: Unmount preloader overlay to seamlessly reveal site
    const t5 = setTimeout(() => {
      setPhase("complete");
      if (onComplete) onComplete();
    }, 6300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(startCycleTimer);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, [images.length, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white font-sans overflow-hidden ${className}`}
        >
          <div className="relative flex items-center justify-center font-medium tracking-tight select-none w-full h-full">
            {/* Left Word Half ("AEL") */}
            <motion.div
              animate={
                phase === "fullscreen"
                  ? { x: "-100vw", opacity: 0 }
                  : phase === "open" || phase === "cycle"
                  ? { x: -30, opacity: 1 }
                  : { x: 0, opacity: 1 }
              }
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
              className="flex overflow-hidden pb-1 z-10"
            >
              {startText.split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.05,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-block text-6xl font-bold sm:text-8xl md:text-9xl tracking-tight text-neutral-100"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Central Image Container - Fixed Center Positioned for Smooth Dimension Scaling */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={
                phase === "open" || phase === "cycle"
                  ? {
                      width: "160px",
                      height: "140px",
                      borderRadius: "16px",
                      opacity: 1,
                    }
                  : phase === "fullscreen"
                  ? {
                      width: "calc(100vw - 24px)",
                      height: "calc(100vh - 24px)",
                      borderRadius: "24px",
                      opacity: 1,
                    }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: phase === "fullscreen" ? "fixed" : "relative",
                top: phase === "fullscreen" ? "50%" : "auto",
                left: phase === "fullscreen" ? "50%" : "auto",
                transform: phase === "fullscreen" ? "translate(-50%, -50%)" : "none",
              }}
              className="mx-3 overflow-hidden shadow-2xl bg-neutral-900 flex items-center justify-center z-20 shrink-0"
            >
              {images.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: i === currentImgIndex ? 1 : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ))}
            </motion.div>

            {/* Right Word Half ("INE") */}
            <motion.div
              animate={
                phase === "fullscreen"
                  ? { x: "100vw", opacity: 0 }
                  : phase === "open" || phase === "cycle"
                  ? { x: 30, opacity: 1 }
                  : { x: 0, opacity: 1 }
              }
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
              className="flex overflow-hidden pb-1 z-10"
            >
              {endText.split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.05,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-block text-6xl font-bold sm:text-8xl md:text-9xl tracking-tight text-neutral-100"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
