import { mockCards } from "./MockCards";

// Self-contained auto-scrolling marquee strip of cards
export function HeroCarousel({ cards = mockCards }: { cards?: React.ComponentType[] }) {
  const row = [...cards, ...cards];
  return (
    <div aria-hidden className="hero-carousel">
      <div className="hero-carousel-marquee flex w-max items-stretch gap-4">
        {row.map((Card, i) => (
          <div
            key={i}
            className="hero-carousel-card h-36 w-44 shrink-0 [&>*]:rounded-2xl [&>*]:shadow-none sm:h-40 sm:w-48"
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
}
