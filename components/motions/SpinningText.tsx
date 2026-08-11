"use client";

export function SpinningText({
  text,
  radius = 60,
  className = "",
}: {
  text: string;
  radius?: number;
  className?: string;
}) {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div
      className={`relative inline-flex items-center justify-center animate-spin ${className}`}
      style={{
        width: radius * 2,
        height: radius * 2,
        animationDuration: "12s",
      }}
    >
      {characters.map((ch, i) => (
        <span
          key={i}
          className="absolute font-mono text-xs font-bold uppercase"
          style={{
            transform: `rotate(${i * angleStep}deg) translateY(-${radius}px)`,
            transformOrigin: `0 ${radius}px`,
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
