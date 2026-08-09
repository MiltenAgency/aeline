"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-card bg-paper p-8 text-center shadow-xl">
        <p className="font-sans text-2xl font-medium tracking-[-0.04em]">Message sent</p>
        <p className="mt-2 text-sm text-fog">We’ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 rounded-card bg-paper p-7 shadow-xl"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="flex flex-col gap-2 text-sm font-medium">
        Full name
        <input
          type="text"
          name="name"
          required
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-normal placeholder:text-fog/60 focus:border-ink focus:outline-none"
          placeholder="Your full name"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Email address
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-normal placeholder:text-fog/60 focus:border-ink focus:outline-none"
          placeholder="Your email address"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-normal placeholder:text-fog/60 focus:border-ink focus:outline-none"
          placeholder="Your message here..."
        />
      </label>
      <button
        type="submit"
        className="group mt-2 inline-flex items-center gap-2 self-start rounded-full bg-ink py-2 pl-5 pr-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
      >
        Submit
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-sm text-ink transition-transform group-hover:rotate-45"
          aria-hidden
        >
          ↗
        </span>
      </button>
    </form>
  );
}
