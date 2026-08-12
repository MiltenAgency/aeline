"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalTypewriterPreloaderProps {
  onComplete?: () => void;
  className?: string;
}

export function TerminalTypewriterPreloader({
  onComplete,
  className = "",
}: TerminalTypewriterPreloaderProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const sequence = [
    "> INITIALIZING AELINE CORE...",
    "> CONNECTING NEURAL PIPELINES...",
    "> MOUNTING MOTION PRIMITIVES...",
    "> SYSTEM READY. LAUNCHING...",
  ];

  useEffect(() => {
    sequence.forEach((line, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, line]);
        if (idx === sequence.length - 1) {
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 500);
        }
      }, (idx + 1) * 400);
    });
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black p-6 font-mono text-sm text-lime ${className}`}
        >
          <div className="w-full max-w-md space-y-2">
            {logs.map((log, i) => (
              <p key={i} className="leading-relaxed">
                {log}
              </p>
            ))}
            <span className="inline-block h-4 w-2 animate-pulse bg-lime" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
