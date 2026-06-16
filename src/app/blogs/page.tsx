import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogs } from "@/app/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | Mitra Brinda Mukherjee",
  description:
    "Read my latest posts, tutorials, and insights on AI and Machine Learning.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 block mb-4">
            Writing
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-alice text-primary mb-6">
            Writings &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Insights
            </span>
          </h1>
          <p className="text-xl text-primary/60 font-suse">
            Thoughts on artificial intelligence, machine learning, and the
            future of technology. I try to distill complex topics into readable
            articles.
          </p>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-secondary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-primary/50 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-primary mb-3 font-alice group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                    {blog.title}
                  </h2>
                  <p className="text-primary/60 mb-6 line-clamp-3 text-sm font-suse leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary/70 border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-500 transition-colors group/link"
                  >
                    Read Article{" "}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-primary/15 rounded-3xl bg-primary/2">
            <div className="text-5xl mb-6">✍️</div>
            <h2 className="text-2xl font-alice font-bold text-primary mb-3">Articles coming soon</h2>
            <p className="text-primary/50 font-suse max-w-md">
              I'm working on articles about AI, machine learning, and research. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
