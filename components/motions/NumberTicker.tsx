"use client";
import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  value: number;
  /** Optional prefix e.g. "$" */
  prefix?: string;
  /** Optional suffix e.g. "%" */
  suffix?: string;
  /** Duration in ms */
  duration?: number;
  className?: string;
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "",
}: NumberTickerProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setCurrent(Math.round(easeOut(t) * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}
