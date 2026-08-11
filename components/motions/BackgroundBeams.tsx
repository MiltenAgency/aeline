"use client";
import React from "react";
import { motion } from "framer-motion";

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 1080"
        fill="none"
      >
        <motion.path
          d="M-200 200 L1200 800"
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#d6fd70" stopOpacity="1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
