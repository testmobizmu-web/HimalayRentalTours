// components/home/BlogPreviewGrid.tsx
import Image from "next/image";
import { blogPosts } from "@/app/blog/posts";

export function BlogPreviewGrid() {
  const posts = blogPosts.slice(0, 4);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
        >
          {/* IMAGE ON TOP */}
          <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden mb-4">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24rem, 100vw"
            />
          </div>

          {/* TEXT UNDER IMAGE */}
          <p className="text-[11px] text-slate-500 mb-1">
            {new Date(post.date).toLocaleDateString("en-MU", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}{" "}
            • {post.readingTime}
          </p>

          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xs">
            {post.excerpt}
          </p>

        </article>
      ))}
    </div>
  );
}

