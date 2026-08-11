"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggeredListProps {
  items: ReactNode[];
  /** Delay between each item in seconds */
  stagger?: number;
  /** Initial y offset */
  distance?: number;
  className?: string;
  itemClassName?: string;
}

export function StaggeredList({
  items,
  stagger = 0.08,
  distance = 20,
  className = "",
  itemClassName = "",
}: StaggeredListProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className={itemClassName}
          variants={{
            hidden: { opacity: 0, y: distance },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
