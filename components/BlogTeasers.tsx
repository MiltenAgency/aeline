import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Post } from "@/lib/content/blog";

export function BlogTeasers({ posts, overlay = false }: { posts: Post[]; overlay?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.08}>
          <Link href={`/blog/${p.slug}`} className="group block">
            <div className="relative aspect-square overflow-hidden rounded-card">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {overlay ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                  <h3 className="absolute bottom-0 p-5 font-sans text-2xl font-medium tracking-[-0.04em] leading-snug text-white">
                    {p.title}
                  </h3>
                </>
              ) : (
                <span
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45"
                  aria-hidden
                >
                  ↗
                </span>
              )}
            </div>
            {!overlay && (
              <div className="pt-4">
                <p className="text-xs text-fog">{p.date}</p>
                <h3 className="mt-1.5 font-sans text-2xl font-medium tracking-[-0.04em] leading-snug">{p.title}</h3>
              </div>
            )}
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
