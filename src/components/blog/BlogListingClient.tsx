"use client";

import Link from "next/link";
import { type BlogPost, type BlogCategory, formatDate } from "@/lib/blogPosts";

interface Props {
  posts: BlogPost[];
  categoryColors: Record<BlogCategory, { bg: string; text: string; border: string }>;
  title?: string;
}

export default function BlogListingClient({ posts, categoryColors, title }: Props) {
  if (posts.length === 0) {
    return (
      <p style={{ color: "#777799", textAlign: "center", padding: "48px 0" }}>
        No posts in this category yet. Check back soon.
      </p>
    );
  }

  return (
    <>
      {title && (
        <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#0f2255", marginBottom: "28px" }}>
          {title}
        </h2>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
        {posts.map((post) => {
          const colors = categoryColors[post.category];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e4e4ef", padding: "28px", height: "100%", display: "flex", flexDirection: "column", boxShadow: "0 2px 12px rgba(15,34,85,0.05)" }}>
                <div style={{ marginBottom: "14px" }}>
                  <span style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, borderRadius: "10px", padding: "3px 10px", fontSize: "11px", fontWeight: 600 }}>
                    {post.category}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "18px", fontWeight: 700, color: "#0f2255", lineHeight: 1.3, marginBottom: "10px" }}>
                  {post.title}
                </h3>
                <p style={{ color: "#3d3d55", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#777799", borderTop: "1px solid #f0f0f8", paddingTop: "14px" }}>
                  <span>{formatDate(post.datePublished)}</span>
                  <span>{post.readingTime} min</span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      <p style={{ textAlign: "center", color: "#777799", fontSize: "14px", marginTop: "40px" }}>
        Showing {posts.length} article{posts.length !== 1 ? "s" : ""}
      </p>
    </>
  );
}
