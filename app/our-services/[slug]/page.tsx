import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { services, getService } from "@/lib/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return { title: service.name, description: service.description };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl">{service.name}</h1>
            <p className="mt-6 text-sm leading-relaxed text-fog sm:text-base">{service.description}</p>
            <div className="mt-8">
              <Button href="/contact" variant="dark">
                Get Started
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <Image
                src={service.heroImage}
                alt={service.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading eyebrow="Benefits" title={service.benefitsHeading} sub={service.benefitsIntro} />
        <div className="mt-12 grid gap-5 rounded-panel bg-mist p-5 sm:grid-cols-2">
          {service.benefits.slice(0, 2).map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-card bg-paper p-7">
                <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{b.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="h-full">
            <figure className="flex h-full flex-col justify-between gap-6 rounded-card bg-lime p-7">
              <blockquote className="font-sans text-2xl font-medium tracking-[-0.04em] leading-snug">
                “{service.quote.text}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <Image
                  src={service.quote.avatar}
                  alt={service.quote.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{service.quote.author}</p>
                  <p className="text-xs text-ink/60">{service.quote.company}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
          {service.benefits.slice(2).map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-card bg-paper p-7">
                <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{b.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="h-full sm:col-span-2">
            <div className="relative h-64 overflow-hidden rounded-card">
              <Image src={service.benefitImage} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive consulting and intelligent innovation"
          sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-card bg-mist p-7">
                <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{s.blurb}</p>
                <Link
                  href={`/our-services/${s.slug}`}
                  className="mt-6 inline-block self-start rounded-full border border-line bg-paper px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-ink hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
