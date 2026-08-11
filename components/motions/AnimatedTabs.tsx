"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function AnimatedTabs({
  tabs,
  onChange,
  className = "",
}: {
  tabs: string[];
  onChange?: (tab: string) => void;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={`flex space-x-1 rounded-full bg-white/5 p-1 border border-white/10 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              if (onChange) onChange(tab);
            }}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition focus-visible:outline-2 ${
              isActive ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-white/20"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}
