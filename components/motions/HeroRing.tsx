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
          animation: ring-spin-motion 45s linear infinite;
        }
        .ring-card {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }
        .ring-card > * {
          box-shadow: none;
          padding: 8px;
        }
        .ring-card p,
        .ring-card span {
          white-space: nowrap;
        }
        .ring-card [class~="text-[17px]"] {
          font-size: 13px;
        }
        .ring-card [class~="text-[8.5px]"] {
          font-size: 7px;
        }
        .ring-card [class~="text-[8px]"] {
          font-size: 7px;
        }
        .ring-card svg {
          width: 10px;
          height: 10px;
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
              className="ring-card absolute left-0 top-0 overflow-hidden rounded-xl pointer-events-auto"
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
