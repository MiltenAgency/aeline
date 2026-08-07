"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function WobbleCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0px) rotate3d(${mousePosition.y / 5}, ${-mousePosition.x / 5}, 0, 4deg)`
          : "translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 0deg)",
        transition: "transform 0.15s ease-out",
      }}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      {children}
    </motion.section>
  );
}
