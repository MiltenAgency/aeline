"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CardStackItem {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
}

export function CardStack({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: CardStackItem[];
  offset?: number;
  scaleFactor?: number;
}) {
  const [cards, setCards] = useState<CardStackItem[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards: CardStackItem[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-80 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-zinc-900 h-60 w-80 md:h-60 md:w-96 rounded-3xl p-6 shadow-xl border border-white/10 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
          >
            <div className="text-white/80">{card.content}</div>
            <div>
              <p className="text-white font-medium">{card.name}</p>
              <p className="text-white/40 text-xs">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
