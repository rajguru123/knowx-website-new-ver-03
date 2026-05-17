"use client";

interface Props {
  htmlContent: string;
}

export default function BlogPostClient({ htmlContent }: Props) {
  return (
    <div
      className="blog-post-host"
      style={{ background: "#fafafa" }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
