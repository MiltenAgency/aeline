import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

import {
  Reveal,
  WordByWordBlur,
  Magnetic,
  SpotlightCard,
  TiltCard,
  SlideReveal,
  LogoMarquee,
  HeroRing,
  Counter,
} from "@/components/motions";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCards } from "@/components/ServiceCards";
import { PricingCards } from "@/components/PricingCards";
import { Testimonials } from "@/components/Testimonials";
import { BlogTeasers } from "@/components/BlogTeasers";
import { CtaBanner } from "@/components/CtaBanner";
import { posts } from "@/lib/content/blog";
import { cta } from "@/lib/content/site";

const expertise = [
  {
    title: "18.5 MW Offshore Platforms",
    body: "Next-generation direct-drive offshore wind turbine platforms optimized for shallow monopiles and deepwater floating hulls.",
    images: ["/assets/img/light/hero-daylight.jpg"],
  },
  {
    title: "Carbon Aeroelastic Blades",
    body: "120m+ carbon pultrusion blades featuring passive bend-twist coupling to automatically shed peak squall loads.",
    images: ["/assets/img/light/turbine-blades-sky.jpg"],
  },
  {
    title: "Subsea HVDC Grid Systems",
    body: "Multi-gigawatt offshore converter substations and dynamic subsea export cables with ultra-low transmission loss.",
    images: ["/assets/img/light/floating-wind.jpg"],
  },
  {
    title: "Marine Installation & EPC",
    body: "Turnkey marine logistics, dynamic position vessel operations, and 24/7 offshore array telemetry supervision.",
    images: ["/assets/img/offshore/cta-bg.jpg"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="h-svh max-h-svh overflow-hidden p-3 flex flex-col">
        <div className="relative flex-1 rounded-panel overflow-visible flex flex-col justify-between">
          {/* Background image — Bright 4K Wind Turbines, Green Rolling Hills & Azure Sky */}
          <div className="absolute inset-0 overflow-hidden rounded-panel bg-[#0077b6]">
            <Image
              src="/assets/img/hero-pinterest.jpg"
              alt="Zephyr Dynamics — Offshore & Hillside Wind Energy Platforms"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 via-transparent to-lime-100/15" />
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center px-6 pt-14 sm:pt-16 max-w-4xl mx-auto my-auto text-center -translate-y-4 sm:-translate-y-6">
            {/* The Centered Slogan */}
            <Reveal delay={0.05} className="w-full flex justify-center text-center">
              <h1 className="w-full max-w-4xl mx-auto text-3xl text-white font-extrabold tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.12] text-center flex justify-center">
                <WordByWordBlur
                  text="Engineering the Next Generation of Ocean Wind"
                  className="justify-center text-center w-full"
                />
              </h1>
            </Reveal>

            {/* Centered Subtitle */}
            <Reveal delay={0.12} className="w-full flex justify-center text-center">
              <p className="mt-4 max-w-lg mx-auto text-center text-sm leading-relaxed tracking-[-0.01em] text-white font-medium sm:text-base">
                Pioneering 18.5 MW direct-drive turbine platforms, carbon aeroelastic composite blades, and deepwater subsea HVDC grid infrastructure.
              </p>
            </Reveal>

            {/* Centered Action Buttons — Unified brand blue */}
            <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center justify-center gap-4 relative z-30">
              <Magnetic>
                <Button href="/contact" variant="white">
                  Request RFP
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/our-services" variant="primary">
                  Explore Platforms
                </Button>
              </Magnetic>
            </Reveal>
          </div>

          {/* Hero Ring & Rating Note — Perfectly anchored near the bottom edge without a huge empty gap */}
          <Reveal delay={0.3} className="relative z-10 w-full pb-3 sm:pb-4 flex flex-col items-center overflow-visible pointer-events-none">
            <HeroRing translateY={60} rotateX={10} />
            <p className="mt-5 text-center text-xs text-white font-semibold tracking-wide flex items-center justify-center gap-1.5">
              <span>Over 4.8 GW Deployed Globally</span>
              <span className="inline-flex items-center gap-0.5 text-lime drop-shadow-none">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 justify-center">About us</Eyebrow>
          <h2 className="text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            An offshore engineering pioneer <br />
            dedicated to harnessing{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-white shadow-sm">
              <svg className="h-4 w-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
              </svg>
            </span>{" "}
            oceanic power <br className="hidden sm:inline" />
            <span className="text-fog font-light">with</span>{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-white shadow-sm">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
              </svg>
            </span>{" "}
            <span className="text-fog">unmatched resilience</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <SlideReveal direction="left" delay={0.08} className="h-full">
            <TiltCard className="h-full">
              <SpotlightCard className="h-full rounded-card">
                <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-card p-6">
                  <Image src="/assets/img/light/hero-daylight.jpg" alt="Offshore wind turbines across the sea" fill sizes="320px" className="object-cover" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">FLEET CAPACITY</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="relative z-10 rounded-2xl bg-lime p-5 shadow-lg">
                    <p className="font-sans text-3xl font-medium tracking-[-0.04em] text-white">
                      <Counter to={120} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs text-white/85">Offshore turbine platforms commissioned across North Sea & Atlantic arrays.</p>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </SlideReveal>

          {/* Card 2 */}
          <SlideReveal direction="left" delay={0.16} className="h-full">
            <TiltCard className="h-full">
              <SpotlightCard className="h-full rounded-card bg-mist">
                <div className="flex h-full min-h-[340px] flex-col justify-between p-6">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-fog">
                      Storm Survivability Rating
                    </span>
                    <p className="mt-4 font-sans text-4xl font-medium tracking-[-0.04em] text-ink sm:text-5xl">
                      <Counter to={100} suffix="%" />
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex -space-x-2">
                      {cta.avatars.map((a) => (
                        <Image
                          key={a}
                          src={a}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-full border-2 border-mist object-cover"
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-fog italic">
                      "Zephyr's aeroelastic blades and floating hulls weathered Category 5 squalls without a single outage hour."
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </SlideReveal>

          {/* Card 3 — Power Generated */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <SlideReveal direction="right" delay={0.24} className="flex-1">
              <TiltCard className="h-full">
                <SpotlightCard className="h-full rounded-card bg-lime text-white">
                  <div className="flex h-full min-h-[340px] flex-col justify-between p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80">
                      Clean Energy Output
                    </span>
                    <div>
                      <p className="font-sans text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                        <Counter to={48} suffix=".5 GW" />
                      </p>
                      <p className="mt-2 text-xs text-white/80">Lifetime kinetic wind power delivered directly into utility grids.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </SlideReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Engineering Services"
          title="Turnkey Offshore Engineering & Platform Innovation"
          sub="From pre-feasibility metocean modeling to heavy-lift EPC commissioning, we power utility-scale clean energy grids."
        />
        <Reveal className="mt-8 flex justify-center">
          <Magnetic>
            <Button href="/our-services" variant="primary">
              Explore Services
            </Button>
          </Magnetic>
        </Reveal>

        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Where Marine Hydrodynamics Meets Aerodynamic Precision"
          sub="We design structural systems that survive 100-year marine storms while capturing maximum kinetic energy from every ocean gust."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-6">
          {expertise.map((e, i) => {
            const layout =
              i === 0
                ? "lg:col-span-4 lg:row-span-2"
                : i === 3
                  ? "lg:col-span-6"
                  : "lg:col-span-2";

            return (
              <Reveal key={e.title} delay={i * 0.08} className={`h-full ${layout}`}>
                <SpotlightCard className="group h-full rounded-card bg-ink">
                  <div className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-card lg:min-h-0">
                    <div className="absolute inset-0 flex">
                      {e.images.map((src) => (
                        <div
                          key={src}
                          className={`relative h-full ${e.images.length > 1 ? "w-1/2" : "w-full"}`}
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        i === 3
                          ? "from-orange-950/90 via-orange-600/20"
                          : "from-ink/70 via-ink/10"
                      } to-transparent`}
                    />
                    <div className="relative z-10 p-6">
                      <h3 className="font-sans text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{e.body}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Engagement Tiers"
          title="Bankable Engineering Packages for Offshore Developers"
          sub="From initial floating LiDAR pre-feasibility to complete FEED and turnkey EPC project management."
        />
        <Reveal className="mt-8 flex justify-center">
          <Magnetic>
            <Button href="/contact" variant="primary">
              Request RFP
            </Button>
          </Magnetic>
        </Reveal>

        <div className="mt-12">
          <PricingCards />
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Technical Dossiers"
            title="Latest Offshore Research & Fleet Telemetry"
            sub="Peer-reviewed engineering insights on deepwater floaters, aeroelastic carbon blades, and subsea HVDC arrays."
            align="left"
          />
          <Magnetic>
            <Link
              href="/blog"
              className="rounded-full bg-lime hover:bg-lime-deep px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-105"
            >
              View All Articles
            </Link>
          </Magnetic>
        </div>
        <div className="mt-12">
          <BlogTeasers posts={posts.slice(0, 3)} overlay />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
