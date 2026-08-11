"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedBeam({
  className = "",
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  delay = 0,
  duration = 5,
}: {
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  fromRef?: React.RefObject<HTMLDivElement>;
  toRef?: React.RefObject<HTMLDivElement>;
  curvature?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 stroke-2 ${className}`}
      width="100%"
      height="100%"
    >
      <motion.path
        d="M 20 50 Q 150 10 280 50"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />
      <motion.path
        d="M 20 50 Q 150 10 280 50"
        stroke="url(#beam-glow-grad)"
        strokeWidth={pathWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathOffset: 0 }}
        animate={{ pathOffset: 1 }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient id="beam-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
