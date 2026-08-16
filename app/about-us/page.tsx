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
    "We are a consulting and AI innovation firm dedicated to helping organizations think smarter, move faster, and grow stronger.",
};

const journey = [
  { year: "2017", body: "We started as a small consulting team focused on business strategy and process optimization." },
  { year: "2019", body: "As tech advanced, we expanded our expertise into digital strategy and data analytics for all projects." },
  { year: "2021", body: "Seeing the potential of AI, we evolved to include automation, analytics, and smart systems for clients." },
  { year: "2023", body: "We partnered with forward-thinking clients to design data-driven strategies and AI-powered frameworks." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="text-sm text-fog">Trusted over 5,000+</p>
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
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Empowering businesses through strategy and AI
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-fog">
              We are a consulting and AI innovation firm dedicated to helping organizations think smarter, move
              faster, and grow stronger.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="dark">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.9fr]">
          <Reveal className="h-full">
            <div className="relative min-h-72 overflow-hidden rounded-card">
              <Image
                src="/assets/img/50e9e6d1dec0f446.webp"
                alt="Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.08} className="h-full">
              <div className="flex h-full items-center justify-center gap-4 rounded-card bg-mist p-6">
                <Image
                  src="/assets/img/0782534ad3211488.webp"
                  alt=""
                  width={180}
                  height={220}
                  className="h-auto w-2/5 object-contain drop-shadow-lg"
                />
                <Image
                  src="/assets/img/31a055c60d61e195.webp"
                  alt=""
                  width={180}
                  height={220}
                  className="h-auto w-2/5 object-contain drop-shadow-lg"
                />
              </div>
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 rounded-card bg-lime p-6">
                <p className="text-sm text-ink/70">Commitment to measurable</p>
                <div>
                  <p className="font-sans text-[40px] font-medium leading-[48px] tracking-[-0.06em]">100%</p>
                  <p className="mt-2 text-sm text-ink/70">
                    Collaborating with leading AI and cloud technology providers.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-card">
                <Image
                  src="/assets/img/b686ed6e2ec234f8.webp"
                  alt=""
                  width={1920}
                  height={553}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-2 px-10">
                  {marqueeWords.map((w) => (
                    <span
                      key={w}
                      className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm"
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
          <Eyebrow className="mb-5">About us</Eyebrow>
          <h2 className="text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            A global consulting partner dedicated to building{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 align-middle text-sm text-white">
              ◔
            </span>{" "}
            smarter <span className="text-fog">and</span>{" "}
            <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime align-middle text-sm text-ink">
              ⚲
            </span>{" "}
            <span className="text-fog">more adaptive</span>
          </h2>
        </Reveal>
      </section>

      <LogoMarquee />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading eyebrow="Team" title="Meet our team" align="left" />
            <Reveal className="mt-6">
              <Button href="/contact">Contact us</Button>
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
            title="Our journey toward intelligent transformation"
            sub="From our early days as a small consulting team to becoming a trusted AI partner for global organizations, our journey has been driven by curiosity, collaboration, and impact."
            align="left"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-card bg-mist p-5">
                  <p className="rounded-xl bg-ink py-2.5 text-center font-sans text-2xl font-medium tracking-[-0.04em] text-white">
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
