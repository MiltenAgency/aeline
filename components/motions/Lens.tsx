"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function Lens({
  children,
  zoomFactor = 1.5,
  lensSize = 150,
  className = "",
}: {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="pointer-events-none absolute rounded-full border-2 border-white/40 shadow-2xl overflow-hidden"
          style={{
            width: lensSize,
            height: lensSize,
            left: mousePosition.x - lensSize / 2,
            top: mousePosition.y - lensSize / 2,
            backdropFilter: `blur(0px)`,
          }}
        >
          <div
            className="absolute"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
              left: -mousePosition.x + lensSize / 2,
              top: -mousePosition.y + lensSize / 2,
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}
