"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content/site";

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
            : "bg-paper/90 backdrop-blur-lg border border-line/50 shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/img/e71483bf6a2851df.svg"
            alt="Aeline"
            width={90}
            height={30}
            className={overlay && !open ? "brightness-0 invert" : ""}
            priority
          />
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
            className="rounded-full bg-lime px-6 py-3 font-mono text-[13px] font-bold uppercase tracking-widest text-ink transition-all hover:scale-105 hover:shadow-md"
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
              className="mt-3 rounded-full bg-lime px-5 py-3.5 text-center font-mono text-sm font-bold uppercase tracking-widest text-ink"
            >
              Contact us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
