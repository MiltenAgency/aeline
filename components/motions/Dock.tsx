"use client";
import React from "react";
import { motion } from "framer-motion";

export function Dock({
  items,
  className = "",
}: {
  items: { icon: React.ReactNode; label: string; onClick?: () => void }[];
  className?: string;
}) {
  return (
    <div
      className={`flex h-16 items-end gap-4 rounded-2xl bg-black/40 px-4 pb-3 backdrop-blur-md border border-white/10 ${className}`}
    >
      {items.map((item, idx) => (
        <motion.button
          key={idx}
          onClick={item.onClick}
          whileHover={{ scale: 1.4, y: -8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-lg border border-white/20"
        >
          {item.icon}
        </motion.button>
      ))}
    </div>
  );
}
