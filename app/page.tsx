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
    title: "Automation & optimization",
    body: "Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.",
    images: ["/assets/img/0782534ad3211488.webp", "/assets/img/31a055c60d61e195.webp"],
  },
  {
    title: "Data analytics & insights",
    body: "Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling.",
    images: ["/assets/img/0ef854dabf740543.webp"],
  },
  {
    title: "Digital transformation",
    body: "We guide organizations through full-scale digital evolution — modernizing systems, processes, and decision-making frameworks.",
    images: ["/assets/img/287ae4b58fe484fd.webp"],
  },
  {
    title: "Experience intelligence",
    body: "Combine data and design to deliver smarter, more personalized digital experiences that connect with users.",
    images: ["/assets/img/343ad639d6186a22.webp", "/assets/img/e7029c64832e9412.webp"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="px-3 pt-3">
        <div className="relative min-h-[640px] rounded-panel sm:min-h-[720px]">
          {/* Background image — separate div so overflow-hidden doesn't clip the 3D ring */}
          <div className="absolute inset-0 overflow-hidden rounded-panel">
            <Image
              src="/assets/img/hero-bg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-20 flex flex-col items-center px-6 pt-20 pb-44 text-center sm:pt-28">
            {/* Text + Buttons */}
            <Reveal>
              <h1 className="max-w-2xl text-4xl text-white text-center sm:text-6xl lg:text-[3.75rem] lg:leading-[4.5rem]">
                <WordByWordBlur text="Building the future with AI and strategy" />
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-base leading-6 tracking-[-0.02em] text-white/80">
                We help organizations unlock growth and efficiency <br className="hidden sm:inline" /> through data-driven consulting and intelligent automation.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Button href="/contact" variant="glass">
                  View demo
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/our-services">Get Started</Button>
              </Magnetic>
            </Reveal>
          </div>

          {/* Hero Ring — Absolutely positioned at the bottom so it doesn't inflate container height */}
          <Reveal delay={0.3} className="absolute bottom-6 inset-x-0 z-10 w-full">
            <HeroRing />
            <p className="mt-3 text-center text-xs text-white/90">
              Rated 4.9/5 by 4.900+ clients <span className="ml-2 text-lime">★★★★★</span>
            </p>
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 justify-center">About us</Eyebrow>
          <h2 className="text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            A global consulting partner <br />
            dedicated to building{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 align-middle text-sm text-white">
              ◔
            </span>{" "}
            smarter <br className="hidden sm:inline" />
            <span className="text-fog font-light">and</span>{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-ink">
              💡
            </span>{" "}
            <span className="text-fog">more adaptive</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <SlideReveal direction="left" delay={0.08} className="h-full">
            <TiltCard className="h-full">
              <SpotlightCard className="h-full rounded-card">
                <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-card p-6">
                  <Image src="/assets/img/50e9e6d1dec0f446.webp" alt="" fill sizes="320px" className="object-cover" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">IPSUM</span>
                    <span className="text-lg text-white">📊</span>
                  </div>
                  <div className="relative z-10 rounded-2xl bg-white p-5 shadow-lg">
                    <p className="font-sans text-3xl font-medium tracking-[-0.04em] text-ink">
                      <Counter to={120} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs text-fog">Collaborating with leading AI and cloud technology providers.</p>
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
                      Commitment to measurable
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
                      "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </SlideReveal>

          {/* Cards 3 & 4 — stacked vertically in the third column */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            {/* Card 3 — Data Points (lime) — on top */}
            <SlideReveal direction="right" delay={0.24} className="flex-1">
              <TiltCard className="h-full">
                <SpotlightCard className="h-full rounded-card bg-lime">
                  <div className="flex h-full min-h-[160px] flex-col justify-between p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70">
                      Data Points
                    </span>
                    <div>
                      <p className="font-sans text-4xl font-medium tracking-[-0.04em] text-ink sm:text-5xl">
                        <Counter to={570} suffix="K+" />
                      </p>
                      <p className="mt-2 text-xs text-ink/70">Analyzed monthly to power smarter business strategies.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </SlideReveal>

            {/* Card 4 — Continents (dark) — below */}
            <SlideReveal direction="right" delay={0.32} className="flex-1">
              <TiltCard className="h-full">
                <SpotlightCard className="h-full rounded-card bg-ink text-white">
                  <BorderBeam colorFrom="#d6fd70" colorTo="#38bdf8" duration={8} />
                  <div className="flex h-full min-h-[160px] flex-col justify-between p-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
                      Continents
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-white">🌐</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-white">🌍</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs border border-white/20 text-white">🌎</span>
                      </div>
                      <p className="font-sans text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                        <Counter to={20} suffix="+" />
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
          eyebrow="Services"
          title="Comprehensive consulting and intelligent innovation"
          sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
        />
        <Reveal className="mt-8 flex justify-center">
          <Magnetic>
            <Button href="/our-services" variant="primary">
              Get Started
            </Button>
          </Magnetic>
        </Reveal>

        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Expertise"
          title="Where human insight meets intelligent technology"
          sub="We help businesses harness technology not to replace human creativity, but to amplify it — enabling smarter decisions and faster."
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
                        className="h-auto max-h-[80%] w-auto max-w-[45%] object-contain drop-shadow-lg"
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
          eyebrow="Pricing"
          title="Flexible Plans Built for Every Stage of Growth"
          sub="Whether you’re just starting your AI journey or scaling enterprise-wide innovation, we offer tailored solutions that grow with you."
        />
        <Reveal className="mt-8 flex justify-center">
          <Magnetic>
            <Button href="/contact" variant="dark">
              Get Started
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
            eyebrow="Blog and articles"
            title="Latest insights and trends"
            sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
            align="left"
          />
          <Magnetic>
            <Link
              href="/blog"
              className="rounded-full bg-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
            >
              View All
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
