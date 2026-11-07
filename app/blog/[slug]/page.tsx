import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogTeasers } from "@/components/BlogTeasers";
import { CtaBanner } from "@/components/CtaBanner";
import { posts, getPost, otherPosts } from "@/lib/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.intro,
    openGraph: { title: post.title, description: post.intro, images: [post.cover] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const [bulletsHeading, ...bulletsLeadRest] = post.bulletsLead.split(" — ");

  return (
    <>
      <article className="mx-auto max-w-[1440px] px-4 pb-24 pt-16">
        <Reveal>
          <Eyebrow className="mb-5">{post.date}</Eyebrow>
          <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fog">{post.intro}</p>
        </Reveal>
        <Reveal className="my-10">
          <div className="relative aspect-[21/9] overflow-hidden rounded-card">
            <Image src={post.cover} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Reveal>
        <div className="mx-auto max-w-2xl space-y-8 lg:ml-[8.5rem]">
          <p className="text-sm leading-relaxed text-ink/80">{post.lead}</p>
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">{s.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{s.body}</p>
            </section>
          ))}
          <section>
            <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">{bulletsHeading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{bulletsLeadRest.join(" — ")}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {post.bullets.map((b) => (
                <li key={b} className="text-sm leading-relaxed text-ink/80">
                  {b}
                </li>
              ))}
            </ul>
          </section>
          {post.outro && <p className="text-sm leading-relaxed text-ink/80">{post.outro}</p>}
        </div>
      </article>

      <section className="mx-auto max-w-[1440px] px-4 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blog and articles"
            title="Latest insights and trends"
            sub="Whether you’re optimizing today or building for tomorrow we help you move faster with confidence."
            align="left"
          />
          <Button href="/blog" variant="primary">
            View All
          </Button>
        </div>
        <div className="mt-12">
          <BlogTeasers posts={otherPosts(post.slug, 3)} overlay />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
