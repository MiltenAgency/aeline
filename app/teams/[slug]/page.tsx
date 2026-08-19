import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { team, getMember } from "@/lib/content/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getMember(params.slug);
  if (!member) return {};
  return { title: `${member.name} — ${member.role}`, description: member.bio };
}

const socialGlyphs = ["in", "𝕏", "◎"];

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = getMember(params.slug);
  if (!member) notFound();

  const others = team.filter((m) => m.slug !== member.slug);

  return (
    <>
      <section className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 pt-8 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="relative min-h-96 overflow-hidden rounded-panel bg-mist">
            <Image
              src={member.portrait}
              alt={member.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="h-full">
          <div className="flex h-full flex-col justify-between gap-14 rounded-panel bg-mist p-8 sm:p-10">
            <div>
              <h1 className="text-3xl sm:text-4xl">{member.name}</h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">{member.bio}</p>
            </div>
            <div>
              <ul className="flex flex-wrap gap-6">
                {member.socials.map((s, i) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-fog"
                    >
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[10px] text-white"
                        aria-hidden
                      >
                        {socialGlyphs[i % socialGlyphs.length]}
                      </span>
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="dark">
                  Contact me
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Team"
          title="Meet our team"
          sub="The minds behind Ailine's vision and execution."
        />
        <div className="mt-12">
          <TeamGrid members={others} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
