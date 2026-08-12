import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal, Magnetic, BorderBeam } from "@/components/motions";
import { cta } from "@/lib/content/site";

export function CtaBanner() {
  return (
    <section className="px-3 pb-3 pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-panel">
          <BorderBeam colorFrom="#d6fd70" colorTo="#38bdf8" size={300} duration={10} />
          <Image
            src={cta.background}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative flex flex-col items-start gap-5 px-8 py-20 sm:px-12 sm:py-24 lg:max-w-2xl">
            <div className="flex items-center gap-3">
              <p className="text-sm text-white">Trusted over 5,000+</p>
              <div className="flex -space-x-2">
                {cta.avatars.map((a) => (
                  <Image
                    key={a}
                    src={a}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-white/60 object-cover"
                  />
                ))}
              </div>
            </div>
            <h2 className="text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{cta.heading}</h2>
            <p className="max-w-md text-sm leading-relaxed text-white/85">{cta.body}</p>
            <Magnetic>
              <Button href="/contact">Get Started</Button>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
