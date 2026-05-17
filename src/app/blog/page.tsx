// src/app/blog/page.tsx
// Blog listing page — accessible at /blog
// Server Component: SEO metadata generated at build time

import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllPosts,
  getAllCategories,
  getCategorySlug,
  getFeaturedPost,
  formatDate,
  type BlogCategory,
} from "@/lib/blogPosts";
import BlogListingClient from "@/components/blog/BlogListingClient";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Blog — Engineering Insights, AI Career Guides & Product Development | Knowx Innovations",
  description:
    "Engineering insights, AI career guides, and product development stories from Knowx Innovations — a product engineering company and fellowship training program in Bangalore since 2005. For ECE, EEE, and CSE engineers.",
  alternates: {
    canonical: "https://knowxindia.com/blog",
  },
  openGraph: {
    title: "Knowx Innovations Blog — Engineering, AI Careers & Product Development",
    description:
      "Engineering insights, AI career guides, and product development stories for ECE, EEE, and CSE engineers. From a team that builds real products and runs fellowship training programs in Bangalore.",
    url: "https://knowxindia.com/blog",
    type: "website",
    locale: "en_IN",
    siteName: "Knowx Innovations",
  },
};

// ── JSON-LD Schema ────────────────────────────────────────────────────────────
function BlogListingSchema() {
  const posts = getAllPosts();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Knowx Innovations Blog",
    description:
      "Embedded AI, IoT, Product Engineering, and Career guidance from Knowx Innovations, Bangalore.",
    url: "https://knowxindia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Knowx Innovations",
      url: "https://knowxindia.com",
    },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `https://knowxindia.com/blog/${p.slug}`,
      datePublished: p.datePublished,
      author: {
        "@type": "Person",
        name: p.author,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Category colour map ───────────────────────────────────────────────────────
export const CATEGORY_COLORS: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  "Embedded AI/IoT":    { bg: "#eff4ff", text: "#1a4fff", border: "#c7d7fe" },
  "Product Engineering":{ bg: "#fff4ee", text: "#e85400", border: "#fed7aa" },
  "Career & Training":  { bg: "#edfaf4", text: "#0a7a3e", border: "#bbf7d0" },
  "Industry Trends":    { bg: "#f5f0ff", text: "#6d22d4", border: "#ddd6fe" },
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const featured = getFeaturedPost();

  return (
    <>
      <BlogListingSchema />

      <main style={{ background: "#fafafa", minHeight: "100vh" }}>

        {/* ── Page Header ───────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0f2255 0%, #1a2a5e 60%, #0f2255 100%)",
            padding: "64px 24px 56px",
            textAlign: "center",
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="breadcrumb"
            style={{ marginBottom: "20px", fontSize: "13px" }}
          >
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "#475569", margin: "0 8px" }}>›</span>
            <span style={{ color: "#cbd5e1" }}>Blog</span>
          </nav>

          <div
            style={{
              display: "inline-block",
              background: "rgba(26,79,255,0.15)",
              border: "1px solid rgba(26,79,255,0.3)",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#93bbff",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Insights & Guides
          </div>

          <h1
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "16px",
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            Engineering Insights, AI Career Guides &amp; Product Development Stories
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
          >
            From a product engineering company and fellowship training program in Bangalore since 2005 —
            built for ECE, EEE, and CSE engineers.{" "}
            {allPosts.length} articles and growing.
          </p>

          {/* Category pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Link
              href="/blog"
              style={{
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                background: "#1a4fff",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${getCategorySlug(cat)}`}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.08)",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Content ───────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* Featured post hero */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}
            >
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e4e4ef",
                  padding: "clamp(28px, 4vw, 48px)",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "32px",
                  alignItems: "center",
                  boxShadow: "0 4px 24px rgba(15,34,85,0.08)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 40px rgba(15,34,85,0.14)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px rgba(15,34,85,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        background: "#fff4ee",
                        color: "#e85400",
                        border: "1px solid #fed7aa",
                        borderRadius: "12px",
                        padding: "3px 12px",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      ★ Featured
                    </span>
                    <span
                      style={{
                        background: CATEGORY_COLORS[featured.category].bg,
                        color: CATEGORY_COLORS[featured.category].text,
                        border: `1px solid ${CATEGORY_COLORS[featured.category].border}`,
                        borderRadius: "12px",
                        padding: "3px 12px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {featured.category}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: 700,
                      color: "#0f2255",
                      lineHeight: 1.25,
                      marginBottom: "12px",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p style={{ color: "#3d3d55", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ display: "flex", gap: "20px", fontSize: "13px", color: "#777799" }}>
                    <span>By {featured.author}</span>
                    <span>{formatDate(featured.datePublished)}</span>
                    <span>{featured.readingTime} min read</span>
                  </div>
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a4fff, #0f2255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  →
                </div>
              </article>
            </Link>
          )}

          {/* Post grid — client component for search/filter later */}
          <BlogListingClient posts={allPosts} categoryColors={CATEGORY_COLORS} />
        </div>
      </main>
    </>
  );
}
