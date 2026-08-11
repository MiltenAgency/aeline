"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedSubscribeButton({
  subscribeText = "Subscribe",
  subscribedText = "Subscribed ✓",
  className = "",
}: {
  subscribeText?: string;
  subscribedText?: string;
  className?: string;
}) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <button
      onClick={() => setIsSubscribed(!isSubscribed)}
      className={`relative h-10 w-36 overflow-hidden rounded-full font-medium text-sm transition duration-300 ${
        isSubscribed ? "bg-lime text-black" : "bg-white text-black hover:bg-neutral-200"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isSubscribed ? "subscribed" : "subscribe"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center font-mono uppercase tracking-wider text-xs"
        >
          {isSubscribed ? subscribedText : subscribeText}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
