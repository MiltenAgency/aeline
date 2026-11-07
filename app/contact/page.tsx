import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { contactInfo } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Learn about our journey, mission, and the team driving innovation.",
};

const socialGlyphs: Record<string, string> = {
  Instagram: "◎",
  Facebook: "ⓕ",
  LinkedIn: "in",
  X: "X",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[110rem] gap-4 px-3 pb-16 pt-8 lg:grid-cols-[1fr_1.9fr]">
      <Reveal className="h-full">
        <div className="flex h-full flex-col justify-between gap-16 rounded-panel bg-mist p-8 sm:p-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink">Reach Out Today</h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fog">
              Connect with our naval architecture and marine engineering leads to evaluate FEED packages, LiDAR metocean feasibility, or turnkey EPC platform integration.
            </p>
          </div>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-fog">Email:</dt>
              <dd className="mt-1 font-sans text-lg font-medium">
                <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-fog">
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-fog">Phone:</dt>
              <dd className="mt-1 font-sans text-lg font-medium">
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-fog">
                  {contactInfo.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-fog">Office:</dt>
              <dd className="mt-1 font-sans text-lg font-medium">
                <a
                  href={contactInfo.officeMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-fog"
                >
                  {contactInfo.office}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-fog">Follow Us:</dt>
              <dd className="mt-3 flex gap-3">
                {contactInfo.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm text-white transition-transform hover:scale-110"
                  >
                    {socialGlyphs[s.label] ?? s.label[0]}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="h-full">
        <div className="relative overflow-hidden rounded-panel">
          <Image src="/assets/img/fd0335661a75ed7c.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="relative mx-auto max-w-xl px-4 py-10 sm:py-16">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
