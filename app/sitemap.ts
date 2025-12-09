// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.himalayrentaltours.mu";

  const routes = [
    "",
    "/about-us",
    "/rentals",
    "/excursions",
    "/boat-trips",
    "/contact-us",
    "/rental-policy",
    "/excursions-policy",
    "/boat-trips-policy",
    "/terms-and-conditions",
    "/blog",
  ];

  const now = new Date();

  // Main/static pages
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly", // literal type OK
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts – adjust slugs to match your blog
  const blogSlugs = [
    "mauritius-scooter-rental-tips",
    "planning-mauritius-excursions",
    "mauritius-lagoon-boat-trips",
    "mauritius-driving-basic-rules",
  ];

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
