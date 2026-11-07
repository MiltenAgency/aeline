import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

import {
  Reveal,
  WordByWordBlur,
  Magnetic,
  SpotlightCard,
  TiltCard,
  BorderBeam,
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
    images: ["/assets/img/light/hero-daylight.jpg", "/assets/img/light/turbines-arc.jpg"],
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
    images: ["/assets/img/light/clean-horizon.jpg", "/assets/img/light/bright-ocean.jpg"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="p-3 h-screen max-h-screen overflow-hidden flex flex-col">
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
            {/* High-contrast gradient vignette providing crystal-clear legibility for white text while keeping the sunny landscape vibrant */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/45 via-transparent to-[#020b1a]/55" />
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center px-6 pt-14 sm:pt-16 max-w-4xl mx-auto my-auto text-center -translate-y-4 sm:-translate-y-6">
            {/* The Centered Slogan */}
            <Reveal delay={0.05} className="w-full flex justify-center text-center">
              <h1 className="w-full max-w-4xl mx-auto text-3xl text-white font-extrabold tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.12] text-center flex justify-center drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
                <WordByWordBlur
                  text="Engineering the Next Generation of Ocean Wind"
                  className="justify-center text-center w-full"
                />
              </h1>
            </Reveal>

            {/* Centered Subtitle */}
            <Reveal delay={0.12} className="w-full flex justify-center text-center">
              <p className="mt-4 max-w-lg mx-auto text-center text-sm leading-relaxed tracking-[-0.01em] text-white font-medium sm:text-base drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
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
            <HeroRing translateY={-32} rotateX={0} />
            <p className="mt-5 text-center text-xs text-white font-semibold tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] flex items-center justify-center gap-1.5">
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
                  <Image src="/assets/img/light/turbines-arc.jpg" alt="Offshore Wind Array in Daylight" fill sizes="320px" className="object-cover" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">FLEET CAPACITY</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="relative z-10 rounded-2xl bg-white p-5 shadow-lg">
                    <p className="font-sans text-3xl font-medium tracking-[-0.04em] text-ink">
                      <Counter to={120} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs text-fog">Offshore turbine platforms commissioned across North Sea & Atlantic arrays.</p>
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

          {/* Cards 3 & 4 — stacked vertically in the third column */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            {/* Card 3 — Power Generated (lime) — on top */}
            <SlideReveal direction="right" delay={0.24} className="flex-1">
              <TiltCard className="h-full">
                <SpotlightCard className="h-full rounded-card bg-lime text-white">
                  <div className="flex h-full min-h-[160px] flex-col justify-between p-6">
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

            {/* Card 4 — Maritime Basins (dark) — below */}
            <SlideReveal direction="right" delay={0.32} className="flex-1">
              <TiltCard className="h-full">
                <SpotlightCard className="h-full rounded-card bg-ink text-white">
                  <BorderBeam colorFrom="#34d399" colorTo="#10b981" duration={8} />
                  <div className="flex h-full min-h-[160px] flex-col justify-between p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
                      Deepwater Basins
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-emerald-400">
                          <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12c3-3 6-3 10 0s7 3 10 0M2 17c3-3 6-3 10 0s7 3 10 0" />
                          </svg>
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-sky-400">
                          <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="5" r="3" />
                            <line x1="12" y1="22" x2="12" y2="8" />
                            <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                          </svg>
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-lime">
                          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
                          </svg>
                        </span>
                      </div>
                      <p className="font-sans text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                        <Counter to={16} suffix="+" />
                      </p>
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
        <div className="mt-12 grid gap-5 rounded-panel bg-mist p-5 sm:grid-cols-2">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08} className="h-full">
              <SpotlightCard className="h-full rounded-card bg-paper">
                <div className="flex h-full flex-col p-6">
                  <div className="flex aspect-[16/9] items-center justify-center gap-4 overflow-hidden rounded-xl bg-mist px-6">
                    {e.images.map((src) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={280}
                        height={200}
                        className="h-auto max-h-[80%] w-auto max-w-[45%] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                  <h3 className="mt-6 text-center font-sans text-2xl font-medium tracking-[-0.04em]">{e.title}</h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-fog">{e.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
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
