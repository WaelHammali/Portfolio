import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about ML, DevOps, Cloud and Software Engineering.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="px-6 pb-20 pt-32 max-w-3xl mx-auto">
      <div className="mb-12">
        <p className="text-teal-500 font-mono text-sm mb-2">// blog</p>
        <h1 className="text-5xl font-display font-semibold mb-4">Writing</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Thoughts on ML, Cloud, DevOps and building things.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400 dark:text-gray-600">
          <p className="font-mono text-sm">No posts yet — coming soon.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3 hover:border-teal-300 dark:hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-gray-400 shrink-0">{formatDate(post.date)}</span>
              </div>
              <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-teal-500">
                <span>{post.readingTime} min read</span>
                <span>·</span>
                <span className="group-hover:underline">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
