import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal, Magnetic, BorderBeam } from "@/components/motions";
import { cta } from "@/lib/content/site";

export function CtaBanner() {
  return (
    <section className="px-3 pb-3 pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-panel bg-[#03071e]">
          <BorderBeam colorFrom="#ffb366" colorTo="#ff6a00" size={300} duration={10} />
          <Image
            src={cta.background}
            alt="Offshore Wind Array"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03071e]/65 via-[#03071e]/25 to-transparent" />
          <div className="relative z-10 flex flex-col items-start gap-5 px-8 py-20 sm:px-12 sm:py-24 lg:max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 border border-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {cta.eyebrow}
              </span>
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
            <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{cta.heading}</h2>
            <p className="max-w-md text-sm leading-relaxed text-white/90">{cta.body}</p>
            <Magnetic>
              <Button href="/contact">Request Engineering Consultation</Button>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
