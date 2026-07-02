import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tjanster",
    "/om-oss",
    "/presentkort",
    "/boka",
    "/kontakt",
    "/garanti",
    "/villkor",
  ];
  const servicePages = services.map((s) => `/tjanster/${s.slug}`);

  return [...routes, ...servicePages].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
