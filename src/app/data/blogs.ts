export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

// ─── Add your blog posts here when ready to publish ────────────────────────────
// Each entry becomes a card on /blogs and a full page at /blogs/<id>
//
// Template:
// {
//   id: "my-post-slug",            // URL: /blogs/my-post-slug
//   title: "My Post Title",
//   summary: "One sentence summary shown on the listing page.",
//   date: "June 17, 2026",
//   readTime: "5 min read",
//   tags: ["AI", "Research"],
//   content: `Your article content here.
//
// ## Section Heading
//
// Paragraph text. Use **bold** for emphasis.
//
// \`\`\`python
// # code blocks are supported
// print("hello world")
// \`\`\`
// `,
// },

export const blogs: BlogPost[] = [
  // ─── Paste your blog entries above this line ────────────────────────────────
];

export function getBlogById(id: string): BlogPost | undefined {
  return blogs.find((b) => b.id === id);
}
