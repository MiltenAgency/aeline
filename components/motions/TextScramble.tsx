"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface TextScrambleProps {
  text: string;
  /** Trigger scramble on hover instead of mount */
  hoverOnly?: boolean;
  className?: string;
  /** Speed of each character resolve step (ms) */
  speed?: number;
}

export function TextScramble({
  text,
  hoverOnly = false,
  className = "",
  speed = 40,
}: TextScrambleProps) {
  const [output, setOutput] = useState(hoverOnly ? text : "");
  const frame = useRef(0);
  const raf = useRef<number | null>(null);

  const scramble = () => {
    let iteration = 0;
    if (raf.current) cancelAnimationFrame(raf.current);

    const tick = () => {
      setOutput(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return text[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 0.4;
      if (iteration < text.length) {
        frame.current++;
        raf.current = setTimeout(tick, speed) as unknown as number;
      }
    };

    tick();
  };

  useEffect(() => {
    if (!hoverOnly) scramble();
    return () => {
      if (raf.current) clearTimeout(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      className={`font-mono ${className}`}
      onMouseEnter={hoverOnly ? scramble : undefined}
    >
      {output || text}
    </span>
  );
}
