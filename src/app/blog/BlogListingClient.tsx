"use client";
// src/components/blog/BlogPostClient.tsx
//
// Renders your standalone HTML blog post content inside a scoped container.
// The HTML carries its own <style> tags (Lora font, sidebar, FAQ, etc.)
// so they are preserved exactly as you wrote them — no restyling needed.
//
// The site navbar and footer are provided by the Next.js layout.tsx (ClientShell),
// so this component only renders the article body content.

interface Props {
  htmlContent: string;
}

export default function BlogPostClient({ htmlContent }: Props) {
  return (
    <div
      // "blog-post-host" scopes any accidental global style leakage.
      // Your article CSS is already scoped to your own class names.
      className="blog-post-host"
      style={{
        // No padding here — your HTML has its own .page-layout with max-width
        background: "#fafafa",
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
