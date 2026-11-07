"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlay = pathname === "/" || pathname === "/our-services";

  useEffect(() => setOpen(false), [pathname]);

  const linkColor =
    overlay && !open
      ? "text-white/80 hover:text-white"
      : "text-ink/60 hover:text-ink";

  return (
    <header
      className={`${
        overlay ? "absolute" : "sticky top-0"
      } inset-x-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl px-6 py-4 sm:px-10 sm:py-5 ${
          overlay
            ? ""
            : "bg-paper border border-line/50 shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center origin-center transition-transform duration-500 ease-out group-hover:rotate-180">
            <Logo className="w-full h-full" />
          </div>
          <span
            className={`font-sans text-lg sm:text-xl font-extrabold tracking-tight transition-colors ${
              overlay && !open ? "text-white" : "text-ink"
            }`}
          >
            Zephyr<span className="text-[#10b981]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[13px] font-semibold uppercase tracking-widest transition-colors ${
                pathname === item.href
                  ? overlay
                    ? "text-white"
                    : "text-ink"
                  : linkColor
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-lime px-6 py-3 font-mono text-[13px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              overlay && !open ? "bg-white" : "bg-ink"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              overlay && !open ? "bg-white" : "bg-ink"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
              overlay && !open ? "bg-white" : "bg-ink"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-4 mb-3 flex flex-col gap-1 rounded-card border border-line bg-paper p-5 shadow-2xl lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 font-mono text-sm font-semibold uppercase tracking-widest transition-colors ${
                  pathname === item.href
                    ? "bg-mist text-ink"
                    : "text-fog hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-full bg-lime px-5 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-95"
            >
              Contact us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
