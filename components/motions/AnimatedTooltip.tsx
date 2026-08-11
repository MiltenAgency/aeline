"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export function AnimatedTooltip({ items }: { items: TooltipItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center gap-2">
      {items.map((item) => (
        <div
          className="relative group -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 10 }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 border border-white/10"
              >
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                <div className="text-white/60 text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-full h-10 w-10 border-2 border-white group-hover:scale-105 group-hover:z-30 transition duration-300 relative"
          />
        </div>
      ))}
    </div>
  );
}
