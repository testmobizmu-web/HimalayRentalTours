import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../posts";

type Props = {
  params: { slug: string };
};

// Optional: dynamic metadata based on the post
export function generateMetadata({ params }: Props): Metadata {
  const slug = decodeURIComponent(params.slug);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog article – Himalay Rental Tours",
      description:
        "Mauritius travel blog articles from Himalay Rental Tours: rentals, excursions and lagoon boat trips."
    };
  }

  return {
    title: `${post.title} – Himalay Rental Tours Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: Props) {
  // Make sure any encoding/decoding mismatch is removed
  const slug = decodeURIComponent(params.slug);

  const post = blogPosts.find((p) => p.slug === slug);

  // If no post found, show Next.js 404
  if (!post) {
    notFound();
  }

  return (
    <div className="pb-16 bg-white">
      {/* HEADER + BREADCRUMBS */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-50">
        <div className="mbz-container py-8 md:py-10 space-y-6">
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Home
              </Link>
              <span>›</span>
              <Link
                href="/blog"
                className="text-sky-700 font-medium hover:text-sky-900"
              >
                Blog
              </Link>
              <span>›</span>
              <span className="text-slate-500 line-clamp-1">{post.title}</span>
            </div>
            <Link
              href="/blog"
              className="text-sky-700 font-semibold hover:text-sky-900"
            >
              ← Back to blog
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800 animate-pulse">
                <span>🌴</span>
                <span>Mauritius travel article</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                {post.title}
              </h1>
              <p className="text-[11px] text-slate-500">
                {new Date(post.date).toLocaleDateString("en-MU", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                })}{" "}
                • {post.readingTime}
              </p>
              <p className="text-sm sm:text-base text-slate-700">
                {post.excerpt}
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white">
        <div className="mbz-container py-10 space-y-8">
          <article className="prose prose-sm sm:prose-base max-w-none prose-p:text-slate-700 prose-h2:text-slate-900">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {/* CTA */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
            <div className="space-y-1">
              <h2 className="font-semibold text-slate-900">
                Ready to plan your Mauritius rentals or lagoon days?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Send us a WhatsApp message with your dates and hotel area. We’ll
                reply with realistic options for rentals, excursions and boat
                trips.
              </p>
            </div>
            <a
              href="https://wa.me/23057581799?text=Hello%20Himalay%20Rental%20Tours%2C%20I%20just%20read%20your%20blog%20and%20would%20like%20help%20planning%20my%20Mauritius%20holiday."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              WhatsApp us about Mauritius
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

