// ─────────────────────────────────────────────────────────────────────────────
//  KNOWX INNOVATIONS — Blog Post Registry
//  src/lib/blogPosts.ts
//
//  HOW TO ADD A NEW POST:
//  1. Place your HTML file in:  public/blog-content/<slug>.html
//  2. Add ONE entry to the BLOG_POSTS array below.
//  3. git add → git commit → git push → SSH → git pull → npm run build → pm2 restart knowx
// ─────────────────────────────────────────────────────────────────────────────

export type BlogCategory =
  | "Embedded AI/IoT"
  | "Product Engineering"
  | "Career & Training"
  | "Industry Trends";

export interface BlogPost {
  slug: string;           // MUST match the HTML filename: public/blog-content/<slug>.html
  title: string;          // Full article title
  excerpt: string;        // 1–2 sentence summary shown on listing page
  category: BlogCategory; // Pick one of the four categories above
  datePublished: string;  // ISO format: "2026-03-15"
  readingTime: number;    // Estimated minutes (count words ÷ 200)
  author: string;         // "Bhimsen G.V." or team member name
  tags: string[];         // Keywords for related posts (future feature)
  featured?: boolean;     // true = shown in hero slot on /blog
}

// ─────────────────────────────────────────────────────────────────────────────
//  BLOG POSTS — Add new entries at the TOP of this array (newest first)
// ─────────────────────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-embedded-ai-projects-ece-engineering-students-2026",
    title: "Top Embedded AI Projects for ECE Engineering Students 2026",
    excerpt: "Practical Embedded AI project ideas for ECE students — with hardware requirements, difficulty levels, and real implementation guidance from Knowx Innovations.",
    category: "Embedded AI/IoT",
    datePublished: "2026-05-17",
    readingTime: 10,
    author: "Bhimsen G.V.",
    tags: ["embedded ai projects", "ece students", "engineering projects", "2026", "bangalore"],
  },
  {
    slug: "embedded-ai-iot-training-bangalore-guide",
  {
    slug: "embedded-ai-iot-training-bangalore-guide",
    title: "Embedded AI vs Traditional Embedded Systems — Key Differences",
    excerpt:
      "What is the real difference between Embedded AI and traditional embedded systems? An honest comparison with real client upgrade stories, industry examples, and career guidance for ECE and EEE engineers in India.",
    category: "Embedded AI/IoT",
    datePublished: "2026-03-15",
    readingTime: 12,
    author: "Bhimsen G.V.",
    tags: ["embedded ai", "traditional embedded", "ece career", "tensorflow lite", "edge impulse"],
    featured: true,
  },
  // ── PASTE NEW ENTRIES ABOVE THIS LINE ──────────────────────────────────────
  // {
  //   slug: "your-new-post-slug",
  //   title: "Your Post Title",
  //   excerpt: "Short description shown on listing page.",
  //   category: "Industry Trends",
  //   datePublished: "2026-06-01",
  //   readingTime: 8,
  //   author: "Bhimsen G.V.",
  //   tags: ["iot", "2026"],
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS (used by page.tsx files — do not modify)
// ─────────────────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
}

export function getAllCategories(): BlogCategory[] {
  return ["Embedded AI/IoT", "Product Engineering", "Career & Training", "Industry Trends"];
}

export function getCategorySlug(category: BlogCategory): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
