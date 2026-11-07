import { mockCards } from "./MockCards";

export interface HeroRingProps {
  cards?: React.ComponentType[];
  radius?: number;
  rotateX?: number;
  translateY?: number;
  cardWidth?: number;
  cardHeight?: number;
}

// Self-contained 3D rotating ring of precision telemetry cards
export function HeroRing({
  cards = mockCards,
  radius = 490,
  rotateX = 0,
  translateY = 0,
  cardWidth = 120,
  cardHeight = 120,
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
          animation: ring-spin-motion 45s linear infinite;
        }
      `}</style>

      {/* Perfectly centered 3D perspective scene */}
      <div
        className="h-[120px] w-full"
        style={{ perspective: "1800px", transform: `translateY(${translateY}px)` }}
      >
        <div
          className="relative mx-auto h-[120px] w-[120px] animate-ring-spin"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slots.map((Card, i) => (
            <div
              key={i}
              className="absolute left-0 top-0 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.32)] overflow-hidden pointer-events-auto"
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
