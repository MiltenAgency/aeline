"use client";

import Link from "next/link";
import Image from "next/image";
import { footerBlurb, footerLinks, site } from "@/lib/content/site";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="px-3 pb-3">
      <div className="rounded-panel bg-lime text-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-8 py-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <Link href="/" className="flex items-center gap-3 font-sans text-2xl font-bold tracking-tight text-white group">
                <div className="relative w-8 h-8 flex items-center justify-center origin-center transition-transform duration-500 ease-out group-hover:rotate-180">
                  <Logo className="w-full h-full text-white" color="#ffffff" />
                </div>
                <span>Zephyr Dynamics</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80 font-normal">{footerBlurb}</p>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Subscribe our newsletter</p>
              <NewsletterForm />
            </div>
          </div>

          <nav className="grid grid-cols-2 content-start gap-x-8 gap-y-5 lg:justify-items-start">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white hover:underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </nav>

        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row items-center justify-between gap-4 px-8 pb-10 text-xs text-white/70 border-t border-white/20 pt-6 font-medium">
          <p>{site.copyright}</p>
          <p className="font-mono text-[11px] text-white/60">Utility-Scale Offshore Clean Energy</p>
        </div>
      </div>
    </footer>
  );
}
