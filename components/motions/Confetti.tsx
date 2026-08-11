"use client";
import React, { useEffect, useState } from "react";

export function Confetti({ trigger = false }: { trigger?: boolean }) {
  const [particles, setParticles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    if (!trigger) return;
    const colors = ["#38bdf8", "#d6fd70", "#a78bfa", "#f472b6", "#fbbf24"];
    const items = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `-10px`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      width: `${Math.random() * 8 + 4}px`,
      height: `${Math.random() * 8 + 4}px`,
      animationDuration: `${Math.random() * 2 + 1.5}s`,
      animationDelay: `${Math.random() * 0.5}s`,
    }));
    setParticles(items);
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .confetti-particle {
          position: absolute;
          border-radius: 2px;
          animation: confetti-fall linear forwards;
        }
      `}</style>
      {particles.map((style, idx) => (
        <div key={idx} style={style} className="confetti-particle" />
      ))}
    </div>
  );
}
