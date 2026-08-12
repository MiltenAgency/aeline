import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
import { testimonials } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="What they say about us?"
        sub="Here’s what they shared about their experience working with our team."
        align="left"
      />
      <Reveal className="mt-6">
        <Carousel ariaLabel="Client testimonials">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative flex aspect-[3/4] w-[85vw] max-w-[420px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-card sm:w-[45vw] lg:w-[29vw]"
            >
              <Image
                src={t.photo}
                alt={t.author}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/75" />
              <div className="relative p-5">
                <Image src={t.logo} alt={t.company} width={110} height={28} className="h-6 w-auto" />
              </div>
              <figcaption className="relative p-5 text-white">
                <p className="font-sans text-2xl leading-none" aria-hidden>
                  ”
                </p>
                <blockquote className="mt-2 font-sans text-xl font-medium leading-7 tracking-[-0.04em]">“{t.text}”</blockquote>
                <p className="mt-3 text-right text-xs text-white/80">
                  – {t.author} , {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Reveal>
    </section>
  );
}
