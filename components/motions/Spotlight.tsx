"use client";
import React, { useState } from "react";

export function Spotlight({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}15, transparent 80%)`,
        }}
      />
    </div>
  );
}
