import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogs, getBlogById } from "@/app/data/blogs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return { title: "Not Found" };
  return {
    title: `${blog.title} | Mitra Brinda Mukherjee`,
    description: blog.summary,
  };
}

/** Very simple markdown-lite renderer: turns ## headings, ``` code blocks, and paragraphs into JSX. */
function renderContent(raw: string) {
  const blocks = raw.split("\n\n").filter(Boolean);

  return blocks.map((block, i) => {
    // Code block
    if (block.startsWith("```")) {
      const lines = block.split("\n");
      const code = lines.slice(1, lines.length - 1).join("\n");
      return (
        <pre
          key={i}
          className="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/10 overflow-x-auto text-sm font-mono text-primary/80 leading-relaxed"
        >
          <code>{code}</code>
        </pre>
      );
    }

    // H2 heading
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-10 mb-3 text-2xl font-alice font-bold text-primary"
        >
          {block.slice(3)}
        </h2>
      );
    }

    // Numbered list-ish paragraph with **bold**
    const renderedInline = renderInline(block);
    return (
      <p key={i} className="mb-4 text-primary/80 leading-8 font-suse text-base">
        {renderedInline}
      </p>
    );
  });
}

/** Render **bold** inline. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-mono text-primary/50 hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All articles
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 border border-primary/10 text-primary/60"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-alice font-bold text-primary leading-tight mb-6">
            {blog.title}
          </h1>

          <p className="text-lg text-primary/60 font-suse leading-relaxed mb-8">
            {blog.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm font-mono text-primary/40 pb-8 border-b border-primary/10">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
            <span className="ml-auto flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              Mitra Brinda Mukherjee
            </span>
          </div>
        </header>

        {/* Article body */}
        <article className="prose-custom">
          {renderContent(blog.content)}
        </article>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/60 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-500 transition-colors"
          >
            Have a question? Get in touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
