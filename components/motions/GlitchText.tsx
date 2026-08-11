"use client";
import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  text: string;
  /** Trigger glitch continuously or only on hover */
  always?: boolean;
  className?: string;
}

export function GlitchText({ text, always = false, className = "" }: GlitchTextProps) {
  const [active, setActive] = useState(always);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!always) return;
    intervalRef.current = setInterval(() => {
      setActive(true);
      setTimeout(() => setActive(false), 200);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [always]);

  const style = `
    .glitch-wrap {
      position: relative;
      display: inline-block;
    }
    .glitch-wrap::before,
    .glitch-wrap::after {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      opacity: 0;
      pointer-events: none;
    }
    .glitch-active::before {
      opacity: 0.8;
      color: #ff003c;
      animation: glitch-r 0.15s steps(2) infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-2px, -1px);
    }
    .glitch-active::after {
      opacity: 0.8;
      color: #00e5ff;
      animation: glitch-l 0.15s steps(2) infinite;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
      transform: translate(2px, 1px);
    }
    @keyframes glitch-r {
      0%   { transform: translate(-2px, -1px) scaleX(1.01); }
      50%  { transform: translate(2px, 1px) scaleX(1); }
      100% { transform: translate(-2px, -1px) scaleX(1.01); }
    }
    @keyframes glitch-l {
      0%   { transform: translate(2px, 1px) scaleX(0.99); }
      50%  { transform: translate(-2px, -1px) scaleX(1); }
      100% { transform: translate(2px, 1px) scaleX(0.99); }
    }
  `;

  return (
    <>
      <style>{style}</style>
      <span
        className={`glitch-wrap ${active ? "glitch-active" : ""} ${className}`}
        data-text={text}
        onMouseEnter={() => !always && setActive(true)}
        onMouseLeave={() => !always && setActive(false)}
      >
        {text}
      </span>
    </>
  );
}
