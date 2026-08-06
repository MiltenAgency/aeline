import Link from "next/link";
import { footerBlurb, footerLinks, site } from "@/lib/content/site";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="px-3 pb-3">
      <div className="rounded-panel bg-ink text-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-8 py-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <Link href="/" className="flex items-center gap-2.5 font-sans text-2xl font-bold tracking-tight text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white text-xs font-extrabold border border-white/20">
                  ▲
                </span>
                <span>Aeline</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{footerBlurb}</p>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold">Subscribe our newsletter</p>
              <NewsletterForm />
            </div>
          </div>

          <nav className="grid grid-cols-2 content-start gap-x-8 gap-y-5 lg:justify-items-start">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/80 transition-colors hover:text-lime">
                {l.label}
              </Link>
            ))}
          </nav>

        </div>
        <p className="mx-auto max-w-[1440px] px-8 pb-10 text-xs text-white/40">{site.copyright}</p>
      </div>
    </footer>
  );
}
