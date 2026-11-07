"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CounterCurtainPreloaderProps {
  onComplete?: () => void;
  duration?: number;
  brandText?: string;
  className?: string;
}

export function CounterCurtainPreloader({
  onComplete,
  duration = 2000,
  brandText = "ZEPHYR DYNAMICS",
  className = "",
}: CounterCurtainPreloaderProps) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = typeof window !== "undefined" ? sessionStorage.getItem("zephyr_curtain_seen") : null;
    const forceShow = typeof window !== "undefined" && (
      new URLSearchParams(window.location.search).get("preview_preloader") === "true" ||
      new URLSearchParams(window.location.search).get("preloader") === "true"
    );

    if (hasVisited && !forceShow) {
      setIsLoading(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setCount(progress);

      if (progress < 100) {
        requestAnimationFrame(updateCount);
      } else {
        setTimeout(() => {
          sessionStorage.setItem("zephyr_curtain_seen", "true");
          setIsLoading(false);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 250);
      }
    };

    requestAnimationFrame(updateCount);

    const handleReplay = () => {
      setIsLoading(true);
      setCount(0);
      document.body.style.overflow = "hidden";
      const start = performance.now();
      const replayStep = (t: number) => {
        const p = Math.min(Math.floor(((t - start) / duration) * 100), 100);
        setCount(p);
        if (p < 100) {
          requestAnimationFrame(replayStep);
        } else {
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 250);
        }
      };
      requestAnimationFrame(replayStep);
    };

    window.addEventListener("zephyr_replay_preloader", handleReplay);
    return () => window.removeEventListener("zephyr_replay_preloader", handleReplay);
  }, [duration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="counter-curtain-preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[999999] flex flex-col justify-between bg-[#03071e] p-8 text-white select-none ${className}`}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-white/50">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              {brandText}
            </span>
            <span className="text-[#34d399]">OFFSHORE WIND • 18.5 MW</span>
          </div>

          <div className="my-auto text-center font-mono">
            <span className="text-8xl font-extrabold tracking-tighter sm:text-[11rem] text-white">
              {String(count).padStart(2, "0")}
            </span>
            <span className="text-4xl sm:text-5xl text-[#10b981] font-bold ml-1">%</span>
          </div>

          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-white/50">
            <span>INITIALIZING TURBINE ARRAYS</span>
            <div className="h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
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
