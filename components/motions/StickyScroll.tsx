"use client";
import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollItem {
  title: string;
  description: string;
  content: ReactNode;
}

interface StickyScrollProps {
  items: StickyScrollItem[];
  className?: string;
}

export function StickyScroll({ items, className = "" }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {items.map((item, i) => {
        const start = i / items.length;
        const end = (i + 1) / items.length;

        return (
          <div key={i} className="flex min-h-screen items-center gap-12 py-24">
            {/* Left — sticky text */}
            <div className="sticky top-1/4 flex-1 self-start">
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]),
                  y: useTransform(scrollYProgress, [start, start + 0.15], [40, 0]),
                }}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-fog">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-fog">{item.description}</p>
              </motion.div>
            </div>

            {/* Right — visual content */}
            <div className="flex-1">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
