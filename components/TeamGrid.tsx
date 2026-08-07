import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Member } from "@/lib/content/team";

export function TeamGrid({ members }: { members: Member[] }) {
  const cols = members.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols}`}>
      {members.map((m, i) => (
        <Reveal key={m.slug} delay={i * 0.08}>
          <Link href={`/teams/${m.slug}`} className="group flex h-full flex-col rounded-card bg-mist p-4">
            <div className="flex items-start justify-between gap-3 px-1 pb-4 pt-2">
              <div>
                <h3 className="font-sans text-2xl font-medium tracking-[-0.04em] leading-tight">{m.name}</h3>
                <p className="mt-1.5 text-xs text-fog">{m.role}</p>
              </div>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs text-white transition-transform group-hover:rotate-45"
                aria-hidden
              >
                ↗
              </span>
            </div>
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-xl">
              <Image
                src={m.photo}
                alt={m.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
