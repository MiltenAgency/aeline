"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  /** ms per character */
  speed?: number;
  /** ms between words */
  pause?: number;
  className?: string;
  cursor?: boolean;
}

export function Typewriter({
  words,
  speed = 60,
  pause = 1800,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return (
    <span className={className}>
      {displayed}
      {cursor && (
        <span
          className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle"
          style={{ height: "1.1em" }}
        />
      )}
    </span>
  );
}
