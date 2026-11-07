"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

interface ZephyrPreloaderProps {
  duration?: number;
  onComplete?: () => void;
  forceShow?: boolean;
}

export function ZephyrPreloader({
  duration = 2200,
  onComplete,
  forceShow = false,
}: ZephyrPreloaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const startAnimation = useCallback(() => {
    setIsLoading(true);
    setCount(0);
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setCount(progress);

      if (progress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          sessionStorage.setItem("zephyr_has_visited", "true");
          setIsLoading(false);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 350);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  useEffect(() => {
    setIsClient(true);
    const hasVisited = sessionStorage.getItem("zephyr_has_visited");
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get("preview_preloader") === "true";

    if (!hasVisited || isPreview || forceShow) {
      startAnimation();
    }

    const handleReplay = () => startAnimation();
    window.addEventListener("zephyr_trigger_preloader", handleReplay);
    return () => window.removeEventListener("zephyr_trigger_preloader", handleReplay);
  }, [forceShow, startAnimation]);

  if (!isClient) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="zephyr-preloader-overlay"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between bg-[#03071e] text-white p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#10b981]/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              ZEPHYR DYNAMICS
            </span>
            <span className="text-[#34d399]">OFFSHORE ARRAY TELEMETRY</span>
          </div>

          {/* Center Brand & Spinning Turbine Logo */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            {/* Logo with Turbine Rotation Motion */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <Logo
                  size={140}
                  className="w-full h-full filter drop-shadow-[0_0_24px_rgba(16,185,129,0.5)]"
                />
              </motion.div>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2"
            >
              ZEPHYR DYNAMICS
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#34d399] uppercase"
            >
              Engineering the Next Generation of Ocean Wind
            </motion.p>

            {/* Percentage Display */}
            <div className="mt-7 font-mono flex items-baseline gap-1 text-white">
              <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                {String(count).padStart(3, "0")}
              </span>
              <span className="text-xl sm:text-2xl text-[#10b981] font-bold">%</span>
            </div>
          </div>

          {/* Bottom Progress Bar & State */}
          <div className="relative z-10 w-full space-y-3 font-mono text-[11px] sm:text-xs text-white/60">
            <div className="flex items-center justify-between">
              <span className="tracking-widest uppercase text-white/75">INITIALIZING TURBINE ARRAYS</span>
              <span className="tracking-widest text-emerald-400 font-semibold">18.5 MW ONLINE</span>
            </div>

            {/* Progress line */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#059669] via-[#10b981] to-[#34d399] transition-all duration-75"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
