import { mockCards } from "./MockCards";

// Self-contained auto-scrolling marquee strip of cards
export function HeroCarousel({ cards = mockCards }: { cards?: React.ComponentType[] }) {
  const row = [...cards, ...cards];
  return (
    <div aria-hidden>
      <style>{`
        @keyframes marquee-motion {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-motion {
          animation: marquee-motion 30s linear infinite;
        }
      `}</style>
      <div className="flex w-max animate-marquee-motion items-stretch gap-2">
        {row.map((Card, i) => (
          <div key={i} className="h-36 w-40 shrink-0 drop-shadow-xl">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
}
