"use client";
import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  className?: string;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "#38bdf8",
  className = "",
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    const grid = Array.from({ length: cols * rows }, () => Math.random());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j;
          if (Math.random() < flickerChance) {
            grid[index] = Math.random();
          }

          ctx.fillStyle = color;
          ctx.globalAlpha = grid[index] * 0.4;
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [squareSize, gridGap, flickerChance, color]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
