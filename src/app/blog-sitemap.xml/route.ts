// src/app/blog-sitemap.xml/route.ts
// Auto-generated sitemap for all blog posts.
// Accessible at: https://knowxindia.com/blog-sitemap.xml
//
// Add this URL to your existing sitemap.xml as a <sitemapindex> entry,
// OR just reference /blog-sitemap.xml directly in Google Search Console.

import { getAllPosts, getAllCategories, getCategorySlug } from "@/lib/blogPosts";

export async function GET() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const postEntries = posts
    .map(
      (post) => `
  <url>
    <loc>https://knowxindia.com/blog/${post.slug}</loc>
    <lastmod>${post.datePublished}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const categoryEntries = categories
    .map(
      (cat) => `
  <url>
    <loc>https://knowxindia.com/blog/category/${getCategorySlug(cat)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://knowxindia.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${postEntries}
${categoryEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
