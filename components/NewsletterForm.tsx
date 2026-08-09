"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-sm text-lime">Thanks — you’re subscribed.</p>;
  }

  return (
    <form
      className="flex max-w-md items-center rounded-full bg-white/10 p-1.5"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="group flex shrink-0 items-center gap-2 rounded-full bg-lime py-2 pl-4 pr-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
      >
        Submit
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs text-lime transition-transform group-hover:rotate-45" aria-hidden>
          ↗
        </span>
      </button>
    </form>
  );
}
