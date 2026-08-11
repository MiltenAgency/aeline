"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function PinContainer({
  children,
  title,
  href,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
}) {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={`relative group/pin z-10 cursor-pointer ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] transition duration-700 overflow-hidden"
        >
          <div className="relative z-50">{children}</div>
        </div>
      </div>
      {title && (
        <motion.div className="pointer-events-none w-full flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500 absolute -top-8 inset-x-0">
          <span className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="relative z-10 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
          </span>
        </motion.div>
      )}
    </div>
  );
}
