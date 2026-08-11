"use client";
import React from "react";
import { motion } from "framer-motion";

export function MotionNumber({ value, className = "" }: { value: number; className?: string }) {
  const digits = value.toString().split("");

  return (
    <div className={`inline-flex overflow-hidden ${className}`}>
      {digits.map((digit, idx) => (
        <motion.div
          key={idx}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          {digit}
        </motion.div>
      ))}
    </div>
  );
}
