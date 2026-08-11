"use client";

export function ShinyText({
  text,
  speed = 3,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shiny ${className}`}
      style={{
        animation: `shiny-sweep ${speed}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes shiny-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      {text}
    </span>
  );
}
