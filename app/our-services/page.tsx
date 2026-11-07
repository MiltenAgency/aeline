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
        <div className="relative overflow-hidden rounded-panel bg-[#03071e]">
          <Image
            src="/assets/img/light/turbines-arc.jpg"
            alt="Offshore Wind Farm in Daylight"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Crisp clean overlay without washing out the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03071e]/70 via-[#03071e]/35 to-transparent" />
          <div className="relative px-8 pb-14 pt-36 sm:px-12 sm:pt-44">
            <Reveal>
              <h1 className="max-w-xl text-4xl text-white font-bold tracking-tight sm:text-6xl lg:leading-[1.05]">
                Engineering Next-Gen Offshore Wind Arrays
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/90">
                From floating LiDAR pre-feasibility to turnkey heavy-lift EPC and subsea HVDC grid integration.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-7">
              <Button href="/pricing">Explore Packages</Button>
              <p className="mt-5 text-xs text-white/90">
                Over 4.8 GW Deployed Globally
                <span className="mt-1 flex items-center justify-center gap-0.5 text-lime">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
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
          title="Turnkey Engineering Solutions for Utility Wind Developers"
          sub="Our multidisciplinary naval architecture and power systems teams deliver 30-year lifecycle bankability in harsh ocean environments."
        />
        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why us"
            title="We engineer solutions built to withstand extreme marine gales"
            sub="Our engineering combines high-fidelity CFD hydrodynamic modeling, continuous carbon pultrusion blades, and subsea HVDC electrical architectures to maximize uptime and minimize LCOE."
            align="left"
          />
          <Reveal delay={0.15}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-card">
              <Image
                src="/assets/img/light/turbine-blades-sky.jpg"
                alt="Aerodynamic rotor blade engineering at Zephyr Dynamics"
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
