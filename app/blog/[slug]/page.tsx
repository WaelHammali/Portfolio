import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="px-6 pb-20 pt-32 max-w-3xl mx-auto">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-teal-500 transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/>
        </svg>
        Back to blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-5">{post.description}</p>
        <div className="flex items-center gap-3 text-sm font-mono text-gray-400">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <hr className="border-gray-100 dark:border-white/8 mb-10" />

      {/* Content */}
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [rehypePrettyCode, {
                  theme: { dark: "github-dark-dimmed", light: "github-light" },
                  keepBackground: false,
                }],
              ],
            },
          }}
        />
      </article>
    </div>
  );
}
