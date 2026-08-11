"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FollowCursorProps {
  /** Content rendered inside the custom cursor bubble */
  children?: ReactNode;
  /** Size of the cursor in px */
  size?: number;
  /** Spring lag — higher = more delay */
  lag?: number;
  className?: string;
}

export function FollowCursor({
  children,
  size = 32,
  lag = 0.12,
  className = "",
}: FollowCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      current.current.x += (pos.current.x - current.current.x) * lag;
      current.current.y += (pos.current.y - current.current.y) * lag;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x - size / 2}px, ${current.current.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [lag, size, visible]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: children ? "transparent" : "white",
        willChange: "transform",
      }}
      aria-hidden
    >
      {children}
    </div>
  );
}
