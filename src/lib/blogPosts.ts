// ─────────────────────────────────────────────────────────────────────────────
//  KNOWX INNOVATIONS — Blog Post Registry
//  src/lib/blogPosts.ts
//
//  HOW TO ADD A NEW POST:
//  1. Place your HTML file in:  public/blog-content/<slug>.html
//  2. Add ONE entry at the TOP of the BLOG_POSTS array below.
//  3. git pull → npm run build → pm2 restart knowx-website
// ─────────────────────────────────────────────────────────────────────────────

export type BlogCategory =
  | "Embedded AI/IoT"
  | "Product Engineering"
  | "Career & Training"
  | "Industry Trends";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  datePublished: string;
  readingTime: number;
  author: string;
  tags: string[];
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
//  BLOG POSTS — newest first
// ─────────────────────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
  slug: "internships-for-cse-students",
  title: "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026",
  excerpt: "Complete guide on internships for CSE students in Bangalore — best domains (AI, Full Stack, Data Science), skills required, top companies hiring, and how to choose the right internship.",
  category: "Career & Training",
  datePublished: "2026-06-09",
  readingTime: 10,
  author: "Bhimsen G.V.",
  tags: ["internships for cse students", "cse internships bangalore", "ai internship cse", "full stack internship", "software development internship", "data science internship", "cse career 2026"],
},
  {
    slug: "smart-agriculture-iot-projects-ai-precision-farming-projects",
    title: "Smart Agriculture IoT Projects — AI & Precision Farming Guide",
    excerpt: "Practical smart agriculture IoT project ideas using AI and precision farming techniques — with real implementation examples from Knowx Innovations.",
    category: "Embedded AI/IoT",
    datePublished: "2026-05-18",
    readingTime: 10,
    author: "Bhimsen G.V.",
    tags: ["smart agriculture", "iot", "precision farming", "ai", "embedded"],
  },
  {
    slug: "what-is-tinyml-edge-ai-microcontrollers-raspberry-pi-projects",
    title: "What is TinyML? Edge AI on Microcontrollers & Raspberry Pi Projects",
    excerpt: "A beginner's guide to TinyML and Edge AI — how to run machine learning on microcontrollers and Raspberry Pi with real project examples.",
    category: "Embedded AI/IoT",
    datePublished: "2026-05-18",
    readingTime: 11,
    author: "Bhimsen G.V.",
    tags: ["tinyml", "edge ai", "microcontrollers", "raspberry pi", "embedded ai"],
  },
  {
    slug: "embedded-systems-training-course-career-in-bangalore-2026",
    title: "Embedded Systems Training & Career Guide — Bangalore 2026",
    excerpt: "Complete guide to embedded systems training courses and career opportunities in Bangalore 2026 — from freshers to working professionals.",
    category: "Career & Training",
    datePublished: "2026-05-18",
    readingTime: 9,
    author: "Bhimsen G.V.",
    tags: ["embedded systems training", "career", "bangalore", "2026", "course"],
  },
  {
    slug: "top-iot-ai-embedded-projects-for-engineering-students-bangalore",
    title: "Top IoT, AI & Embedded Projects for Engineering Students — Bangalore",
    excerpt: "Best IoT, AI and Embedded project ideas for engineering students in Bangalore — with hardware lists, difficulty ratings and mentorship guidance.",
    category: "Embedded AI/IoT",
    datePublished: "2026-05-18",
    readingTime: 10,
    author: "Bhimsen G.V.",
    tags: ["iot projects", "ai projects", "embedded projects", "engineering students", "bangalore"],
  },
  {
    slug: "ev-battery-management-system-ai-embedded-engineers-projects",
    title: "EV Battery Management System — AI & Embedded Engineers Project Guide",
    excerpt: "Deep dive into EV battery management systems for embedded engineers — architecture, AI integration, real project examples from Knowx Innovations.",
    category: "Product Engineering",
    datePublished: "2026-05-18",
    readingTime: 12,
    author: "Bhimsen G.V.",
    tags: ["ev", "battery management system", "bms", "embedded", "ai"],
  },
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
    title: "Embedded AI vs Traditional Embedded Systems — Key Differences",
    excerpt: "What is the real difference between Embedded AI and traditional embedded systems? An honest comparison with real client upgrade stories, industry examples, and career guidance for ECE and EEE engineers in India.",
    category: "Embedded AI/IoT",
    datePublished: "2026-03-15",
    readingTime: 12,
    author: "Bhimsen G.V.",
    tags: ["embedded ai", "traditional embedded", "ece career", "tensorflow lite", "edge impulse"],
    featured: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS
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
