import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { posts } from "@/lib/content/blog";
import { team } from "@/lib/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us", "/our-services", "/pricing", "/blog", "/contact", "/teams"];

  return [
    ...staticRoutes.map((r) => ({ url: `${site.url}${r}`, priority: r === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/our-services/${s.slug}`, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, priority: 0.6 })),
    ...team.map((m) => ({ url: `${site.url}/teams/${m.slug}`, priority: 0.5 })),
  ];
}
