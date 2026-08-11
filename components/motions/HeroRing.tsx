import { mockCards } from "./MockCards";

export interface HeroRingProps {
  cards?: React.ComponentType[];
  radius?: number;
  rotateX?: number;
  translateY?: number;
  cardWidth?: number;
  cardHeight?: number;
}

// Self-contained 3D rotating ring of coded UI cards
export function HeroRing({
  cards = mockCards,
  radius = 490,
  rotateX = 10,
  translateY = 60,
  cardWidth = 110,
  cardHeight = 110,
}: HeroRingProps) {
  const slots = [...cards, ...cards, ...cards];
  const n = slots.length;

  return (
    <div className="relative w-[70vw] mx-auto overflow-visible" aria-hidden>
      <style>{`
        @keyframes ring-spin-motion {
          from { transform: rotateX(${rotateX}deg) rotateY(0deg); }
          to { transform: rotateX(${rotateX}deg) rotateY(-360deg); }
        }
        .animate-ring-spin {
          animation: ring-spin-motion 40s linear infinite;
        }
      `}</style>

      {/* translateY pushes the whole 3D scene downward visually so near-side
          cards that project upward (due to rotateX tilt) land below the text,
          without any overflow clipping altering the card sizes */}
      <div
        className="h-40 w-full"
        style={{ perspective: "1800px", transform: `translateY(${translateY}px)` }}
      >
        <div
          className="relative mx-auto h-full w-[140px] animate-ring-spin"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slots.map((Card, i) => (
            <div
              key={i}
              className="absolute inset-x-0 top-3 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-hidden"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `rotateY(${(360 / n) * i}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
