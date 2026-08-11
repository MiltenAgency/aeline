"use client";

import { useRef } from "react";

export function Carousel({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth / 2;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-ink hover:text-white"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-ink hover:text-white"
        >
          →
        </button>
      </div>
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
