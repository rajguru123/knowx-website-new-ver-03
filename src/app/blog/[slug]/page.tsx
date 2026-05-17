import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { getAllPosts, getPostBySlug, formatDate, type BlogCategory } from "@/lib/blogPosts";
import { CATEGORY_COLORS } from "../page";
import BlogPostClient from "@/components/blog/BlogPostClient";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Knowx Innovations Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://knowxindia.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://knowxindia.com/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      siteName: "Knowx Innovations",
      publishedTime: post.datePublished,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function getPostHtml(slug: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "public", "blog-content", `${slug}.html`);
    if (!fs.existsSync(filePath)) return null;
    let html = fs.readFileSync(filePath, "utf-8");
    const styleMatches = html.match(/<style[\s\S]*?<\/style>/gi) ?? [];
    const styles = styleMatches.join("\n");
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : html;
    return styles + "\n" + bodyContent;
  } catch {
    return null;
  }
}

function ArticleSchema({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `https://knowxindia.com/blog/${post.slug}`,
    datePublished: post.datePublished,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Knowx Innovations", url: "https://knowxindia.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const htmlContent = getPostHtml(params.slug);
  if (!htmlContent) notFound();
  const colors = CATEGORY_COLORS[post.category as BlogCategory];
  const related = getAllPosts().filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleSchema slug={params.slug} />
      <main style={{ background: "#fafafa", minHeight: "100vh" }}>

        <div style={{ background: "#ffffff", borderBottom: "1px solid #e4e4ef", padding: "14px 24px" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <nav aria-label="breadcrumb" style={{ fontSize: "13px", color: "#777799" }}>
              <Link href="/" style={{ color: "#777799", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 6px" }}>›</span>
              <Link href="/blog" style={{ color: "#777799", textDecoration: "none" }}>Blog</Link>
              <span style={{ margin: "0 6px" }}>›</span>
              <span style={{ color: "#3d3d55" }}>{post.category}</span>
            </nav>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "12px", color: "#777799" }}>
              <span style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, borderRadius: "10px", padding: "2px 10px", fontWeight: 600, fontSize: "11px" }}>{post.category}</span>
              <span>By {post.author}</span>
              <span>{formatDate(post.datePublished)}</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>

        <BlogPostClient htmlContent={htmlContent} />

        {related.length > 0 && (
          <section style={{ background: "#ffffff", borderTop: "1px solid #e4e4ef", padding: "56px 24px" }}>
            <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
              <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#0f2255", marginBottom: "28px" }}>Related Articles</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
                {related.map((rp) => {
                  const rc = CATEGORY_COLORS[rp.category as BlogCategory];
                  return (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                      <article style={{ border: "1px solid #e4e4ef", borderRadius: "10px", padding: "20px", background: "#fafafa" }}>
                        <span style={{ background: rc.bg, color: rc.text, border: `1px solid ${rc.border}`, borderRadius: "8px", padding: "2px 8px", fontSize: "10px", fontWeight: 600, display: "inline-block", marginBottom: "10px" }}>{rp.category}</span>
                        <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "15px", fontWeight: 700, color: "#0f2255", lineHeight: 1.35, marginBottom: "6px" }}>{rp.title}</h3>
                        <p style={{ fontSize: "12px", color: "#777799" }}>{formatDate(rp.datePublished)} · {rp.readingTime} min</p>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <div style={{ textAlign: "center", padding: "40px 24px 64px" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0f2255", color: "#ffffff", padding: "12px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
            ← Back to All Articles
          </Link>
        </div>

      </main>
    </>
  );
}
