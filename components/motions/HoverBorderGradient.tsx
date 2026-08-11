"use client";
import React from "react";

export function HoverBorderGradient({
  children,
  className = "",
  containerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={`relative rounded-full p-[1px] group ${containerClassName}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-lime-400 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-spin" style={{ animationDuration: '6s' }} />
      <div className={`relative rounded-full bg-zinc-950 px-6 py-2 text-white ${className}`}>
        {children}
      </div>
    </div>
  );
}
