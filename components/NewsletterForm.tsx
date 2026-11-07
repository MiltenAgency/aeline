"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-sm font-semibold text-white">Thanks — you’re subscribed.</p>;
  }

  return (
    <form
      className="flex max-w-md items-center rounded-full bg-black/15 border border-white/20 p-1.5 focus-within:border-white/40 transition-colors"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none font-medium"
      />
      <button
        type="submit"
        className="group flex shrink-0 items-center gap-2 rounded-full bg-white hover:bg-slate-100 py-2 pl-4 pr-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#03071e] transition-all hover:scale-105 shadow-sm"
      >
        Submit
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-[#03071e] transition-transform group-hover:rotate-45" aria-hidden>
          ↗
        </span>
      </button>
    </form>
  );
}
