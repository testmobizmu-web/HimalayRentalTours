// app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Mauritius Travel Blog – Himalay Rental Tours",
  description:
    "Short, practical blog articles from Himalay Rental Tours to help you plan rentals, excursions and lagoon boat trips in Mauritius.",
};

export default function BlogPage() {
  // Only show the first 4 posts
  const posts = blogPosts.slice(0, 4);

  return (
    <div className="pb-16 bg-white">
      {/* HEADER + BREADCRUMBS */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container py-8 md:py-10 space-y-6">
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <div className="flex items-center gap-1">
              <a
                href="/"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Home
              </a>
              <span>›</span>
              <span className="text-slate-500">Blog</span>
            </div>
            <span className="text-slate-500">
              Short guides • Mauritius rentals • Lagoon days
            </span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 animate-pulse">
              <span>📝</span>
              <span>Mauritius travel blog by Himalay Rental Tours</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Mauritius travel tips, written by a local tour operator
            </h1>
            <p className="text-sm sm:text-base text-slate-700">
              These short blog notes are here to help you understand rentals,
              excursions and lagoon boat trips in Mauritius with simple, honest
              explanations.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG LIST – image on top, text under, no buttons */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                {/* Image on top, centered */}
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                  />
                </div>

                {/* Text under image */}
                <p className="text-[11px] text-slate-500 mb-1">
                  {new Date(post.date).toLocaleDateString("en-MU", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  })}{" "}
                  • {post.readingTime}
                </p>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
