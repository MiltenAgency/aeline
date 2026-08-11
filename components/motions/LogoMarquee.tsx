const defaultLogos = ["✳", "❋", "✦", "◈", "❖", "✺", "◉"];

export function LogoMarquee({
  logos = defaultLogos,
  speed = 80,
}: {
  logos?: string[];
  speed?: number;
}) {
  const row = [...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden py-14" aria-hidden>
      <style>{`
        @keyframes marquee-logo-motion {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: marquee-logo-motion ${speed}s linear infinite;
        }
      `}</style>
      <div className="flex w-max animate-logo-marquee items-center gap-24">
        {row.map((glyph, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap text-ink/70 transition-opacity">
            <span className="text-xl leading-none">{glyph}</span>
            <span className="font-sans text-2xl font-bold tracking-[-0.04em]">Logoipsum</span>
          </span>
        ))}
      </div>
    </div>
  );
}
