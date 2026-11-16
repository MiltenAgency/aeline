import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { LogoMarquee } from "@/components/LogoMarquee";
import { team } from "@/lib/content/team";
import { cta, marqueeWords } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Zephyr Dynamics is an offshore wind turbine engineering firm dedicated to pioneering deepwater floating platforms, aeroelastic blades, and subsea grid networks.",
};

const journey = [
  { year: "2017", body: "Founded by marine architects and aerodynamicists in Boston to engineer hydrodynamic floating wind platforms." },
  { year: "2019", body: "Completed our first commercial 500 MW offshore array Front-End Engineering Design (FEED) in the North Sea." },
  { year: "2022", body: "Unveiled our proprietary 18.5 MW direct-drive platform and 126-meter aeroelastic carbon composite blades." },
  { year: "2025", body: "Surpassed 4.8 GW of engineered offshore wind assets connected directly to utility grids worldwide." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-lime border border-lime/20">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                Over 4.8 GW Deployed Globally
              </span>
              <div className="flex -space-x-2">
                {cta.avatars.map((a) => (
                  <Image
                    key={a}
                    src={a}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full border-2 border-paper object-cover"
                  />
                ))}
              </div>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-bold tracking-tight text-ink">
              Harnessing Oceanic Power at Utility Scale
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-fog sm:text-base">
              Zephyr Dynamics is an industrial offshore engineering and clean-tech firm dedicated to pioneering deepwater floating platforms, high-capacity nacelles, and subsea grid networks.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Request RFP
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.9fr]">
          <Reveal className="h-full">
            <div className="relative min-h-72 overflow-hidden rounded-card">
              <Image
                src="/assets/img/light/hero-daylight.jpg"
                alt="Deep Ocean Wind Platform"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.08} className="h-full">
              <div className="flex h-full items-center justify-center gap-4 rounded-card bg-mist p-6 overflow-hidden">
                <div className="relative h-44 w-1/2 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/img/light/turbine-blades-sky.jpg"
                    alt="Offshore Turbine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 w-1/2 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/img/light/floating-wind.jpg"
                    alt="Floating Wind"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 rounded-card bg-lime text-white p-6 shadow-md">
                <p className="text-sm font-mono uppercase tracking-wider text-white/80">IEC 61400-3 Class T</p>
                <div>
                  <p className="font-sans text-[44px] font-bold leading-none tracking-tight">100%</p>
                  <p className="mt-3 text-sm text-white/85">
                    Extreme marine storm survivability rating across all commercial deployments.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-card">
                <Image
                  src="/assets/img/light/turbines-arc.jpg"
                  alt="Offshore Array"
                  width={1920}
                  height={553}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/35 flex flex-wrap content-center items-center justify-center gap-2 px-10">
                  {marqueeWords.map((w) => (
                    <span
                      key={w}
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 justify-center">About us</Eyebrow>
          <h2 className="text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            An offshore engineering pioneer dedicated to harnessing{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-white shadow-sm">
              <svg className="h-4 w-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
              </svg>
            </span>{" "}
            oceanic power <span className="text-fog">with</span>{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-white shadow-sm">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
              </svg>
            </span>{" "}
            <span className="text-fog">unmatched resilience</span>
          </h2>
        </Reveal>
      </section>

      <LogoMarquee />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading eyebrow="Team" title="Marine Architects & Engineers" align="left" />
            <Reveal className="mt-6">
              <Button href="/contact">Contact Our Team</Button>
            </Reveal>
          </div>
        </div>
        <div className="mt-12">
          <TeamGrid members={team} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our journey"
            title="Our Journey Toward Clean Ocean Energy"
            sub="From our early days designing hydrodynamic scale models to becoming a trusted engineering partner for global offshore wind developers, our journey is defined by deep ocean precision."
            align="left"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-card bg-mist p-5 border border-slate-200">
                  <p className="rounded-xl bg-ink py-2.5 text-center font-mono text-xl font-bold tracking-tight text-white">
                    {j.year}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-fog">{j.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
