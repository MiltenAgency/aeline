import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCards } from "@/components/ServiceCards";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Services",
  description: "From strategy to implementation, we create solutions that deliver measurable impact.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-3 pt-3">
        <div className="relative overflow-hidden rounded-panel">
          <Image
            src="/assets/img/4aa6835db29d739c.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative px-8 pb-14 pt-36 sm:px-12 sm:pt-44">
            <Reveal>
              <h1 className="max-w-xl text-4xl text-white sm:text-6xl lg:leading-[1.05]">
                Smarter strategy. Powered by AI.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/90">
                From strategy to implementation, we create solutions that deliver measurable impact.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Button href="/pricing">Get Started</Button>
              <p className="mt-5 text-xs text-white/90">
                Rated 4.9/5 by 4.900+ clients
                <span className="ml-2 block text-lime">★★★★★</span>
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-12">
              <HeroCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive consulting and intelligent innovation"
          sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
        />
        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why us"
            title="We build solutions that create real, measurable impact"
            sub="Our approach blends strategic consulting, human-centered design, and advanced AI — giving you the clarity, tools, and confidence to thrive in the age of intelligence."
            align="left"
          />
          <Reveal delay={0.15}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-card">
              <Image
                src="/assets/img/f352c5de3475a279.webp"
                alt="Working session at Aeline"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
