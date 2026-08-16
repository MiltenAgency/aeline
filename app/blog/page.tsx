import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogTeasers } from "@/components/BlogTeasers";
import { CtaBanner } from "@/components/CtaBanner";
import { posts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Exploring the latest trends in AI, consulting, and business transformation.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-12 pt-16">
        <SectionHeading
          eyebrow="Blog and articles"
          title="Latest insights and trends"
          sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
          align="left"
        />

        <Reveal className="mt-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-card">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <div>
              <p className="text-sm text-fog">{featured.date}</p>
              <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-fog">
                <h2 className="mt-3 text-2xl sm:text-3xl">{featured.title}</h2>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-fog">{featured.intro}</p>
              <div className="mt-6">
                <Button href={`/blog/${featured.slug}`}>Learn more</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16">
        <SectionHeading
          eyebrow="Published"
          title="Recent published"
          sub="Exploring the latest trends in AI, consulting, and business transformation."
          align="left"
        />
        <div className="mt-12">
          <BlogTeasers posts={rest} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
