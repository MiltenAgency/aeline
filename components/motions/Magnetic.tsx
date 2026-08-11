"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function Magnetic({ children, className = "", intensity = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (clientX - (rect.left + rect.width / 2)) * intensity;
    const y = (clientY - (rect.top + rect.height / 2)) * intensity;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
