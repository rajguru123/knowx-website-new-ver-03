// src/app/blog/category/[cat]/page.tsx
// Category filtered listing — e.g. /blog/category/embedded-ai-iot

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllCategories,
  getPostsByCategory,
  getCategorySlug,
  type BlogCategory,
} from "@/lib/blogPosts";
import { CATEGORY_COLORS } from "../../page";
import BlogListingClient from "@/components/blog/BlogListingClient";

// Map URL slug back to category name
function getCategoryFromSlug(slug: string): BlogCategory | null {
  const all = getAllCategories();
  return all.find((c) => getCategorySlug(c) === slug) ?? null;
}

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ cat: getCategorySlug(cat) }));
}

export async function generateMetadata({
  params,
}: {
  params: { cat: string };
}): Promise<Metadata> {
  const category = getCategoryFromSlug(params.cat);
  if (!category) return {};
  return {
    title: `${category} Articles | Knowx Innovations Blog`,
    description: `All articles about ${category} from Knowx Innovations — practical engineering insights from Bangalore.`,
    alternates: {
      canonical: `https://knowxindia.com/blog/category/${params.cat}`,
    },
  };
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const category = getCategoryFromSlug(params.cat);
  if (!category) notFound();

  const posts = getPostsByCategory(category);
  const colors = CATEGORY_COLORS[category];

  return (
    <main style={{ background: "#fafafa", minHeight: "100vh" }}>

      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2255 0%, #1a2a5e 100%)",
          padding: "56px 24px 48px",
          textAlign: "center",
        }}
      >
        <nav aria-label="breadcrumb" style={{ fontSize: "13px", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#475569", margin: "0 8px" }}>›</span>
          <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#475569", margin: "0 8px" }}>›</span>
          <span style={{ color: "#cbd5e1" }}>{category}</span>
        </nav>

        <span
          style={{
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            borderRadius: "20px",
            padding: "4px 16px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "16px",
          }}
        >
          {category}
        </span>

        <h1
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "12px",
          }}
        >
          {category} Articles
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "16px" }}>
          {posts.length} article{posts.length !== 1 ? "s" : ""} in this category
        </p>
      </section>

      {/* Posts */}
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <BlogListingClient posts={posts} categoryColors={CATEGORY_COLORS} />

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/blog"
            style={{
              color: "#1a4fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            ← View All Categories
          </Link>
        </div>
      </div>
    </main>
  );
}
