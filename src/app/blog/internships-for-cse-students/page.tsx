import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026 | Knowx",
  description:
    "Complete guide on internships for CSE students in Bangalore — best domains (AI, Full Stack, Data Science), skills required, top companies hiring, and how to choose the right internship for your career.",
  keywords: [
    "internships for cse students",
    "cse internships in bangalore",
    "ai internship for cse students",
    "full stack internship for cse students",
    "software development internship",
    "data science internship for cse students",
    "internship opportunities for cse students",
    "cse internship bangalore 2026",
    "best internship for computer science students",
    "cse student internship guide",
  ],
  alternates: {
    canonical: "https://knowxindia.com/blog/internships-for-cse-students",
  },
  openGraph: {
    title: "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026",
    description: "AI, Full Stack, Data Science — which CSE internship track is right for you? Complete guide with domain breakdowns, skills checklist, Bangalore company list, and career paths.",
    url: "https://knowxindia.com/blog/internships-for-cse-students",
    type: "article",
    locale: "en_IN",
    siteName: "Knowx Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026",
    description: "Complete CSE internship guide — domains, skills, companies, and career paths for students in Bangalore.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Internships for CSE Students: Best Domains, Skills and Career Opportunities 2026",
  description: "A complete guide for CSE students on choosing the right internship domain — AI, Full Stack, Data Science, Cloud — with skills required, Bangalore opportunities, and career path outcomes.",
  author: { "@type": "Person", name: "Bhimsen G.V.", jobTitle: "CEO", worksFor: { "@type": "Organization", name: "Knowx Innovations", url: "https://knowxindia.com" } },
  publisher: { "@type": "Organization", name: "Knowx Innovations", url: "https://knowxindia.com" },
  datePublished: "2026-06-09",
  mainEntityOfPage: "https://knowxindia.com/blog/internships-for-cse-students",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which internship is best for CSE students?", acceptedAnswer: { "@type": "Answer", text: "The best internship for CSE students depends on your career goal. AI and Machine Learning internships offer the highest salary potential and lowest competition. Full Stack Development is the most job-volume-friendly track. Choose the domain that aligns with the products you want to build." } },
    { "@type": "Question", name: "Is AI internship good for CSE students?", acceptedAnswer: { "@type": "Answer", text: "Yes — AI is the highest-demand CSE domain in India right now. AI and Full Stack job postings in India grew 35% in 2025. A well-structured AI internship where you build real products using LangChain, TensorFlow, or Python ML libraries gives you a portfolio that most BTech graduates do not have." } },
    { "@type": "Question", name: "Can first-year CSE students do an internship?", acceptedAnswer: { "@type": "Answer", text: "Most structured programs are designed for second-year students and above. However, first-year CSE students can start building foundational skills — Python, Git, basic data structures — and apply for training programs in their second semester." } },
    { "@type": "Question", name: "Are online internships useful for CSE students?", acceptedAnswer: { "@type": "Answer", text: "Yes, with one condition — the internship must involve real, deployed projects. A structured online internship where you build and push working code to GitHub is just as valuable as an on-site placement for your resume." } },
    { "@type": "Question", name: "What skills do CSE students need before applying for an internship?", acceptedAnswer: { "@type": "Answer", text: "The minimum skills expected: one programming language (Python or Java preferred), basic data structures and problem solving, Git and GitHub for version control, and a fundamental understanding of your chosen domain." } },
    { "@type": "Question", name: "How do CSE internships help in campus placements?", acceptedAnswer: { "@type": "Answer", text: "Students with internship experience consistently perform better in campus placement drives. They can speak with authority about real projects during technical interviews, and their resume stands out. Many companies extend Pre-Placement Offers (PPOs) to interns who perform well." } },
  ],
};

const faqItems = [
  { q: "Which internship is best for CSE students?", a: "The best internship depends on your career goal. AI and Machine Learning offers the highest salary potential and least competition — engineers with LangChain, TensorFlow, or Python ML skills are in short supply. Full Stack is the highest job-volume track, with React, Node.js, and API skills directly translating to placements. If you are unsure, choose the domain that aligns with the products you want to build — not just the salary numbers." },
  { q: "Is AI internship good for CSE students?", a: "Yes — AI is the highest-demand CSE domain in India right now. AI and Full Stack job postings in India grew 35% in 2025. A well-structured AI internship where you build real products using LangChain, TensorFlow, or Python ML libraries gives you a portfolio that most BTech graduates simply do not have. Bangalore companies — from Flipkart and Razorpay to hundreds of AI startups — are hiring aggressively for this skill set in 2026." },
  { q: "Can first-year CSE students do an internship?", a: "Most structured programs are designed for second-year students and above, as they require basic programming knowledge. However, first-year CSE students can start building foundational skills — Python, Git, basic data structures — and apply for training programs or junior internships in their second semester. The earlier you start building a project portfolio, the stronger your applications will be in third year." },
  { q: "Are online internships useful for CSE students?", a: "Yes, with one condition — the internship must involve real, deployed projects, not just watching lectures or completing quizzes. A structured online internship where you build and push working code to GitHub is just as valuable as an on-site placement for your resume. What recruiters assess is the quality of your portfolio and the specificity of the tools you worked with — not whether you were physically present." },
  { q: "What skills do CSE students need before applying for an internship?", a: "The minimum expected before applying: one programming language (Python or Java preferred), basic data structures and problem solving, Git and GitHub for version control, and a fundamental understanding of your chosen domain — web development, AI, or data science. Companies do not expect perfection at the internship stage — they want enough foundation to learn quickly and contribute to a real team." },
  { q: "How do CSE internships help in campus placements?", a: "Students with internship experience consistently perform better in campus placement drives — they can speak with authority about real projects in technical interviews, and their resume stands out from thousands of identical academic CVs. Many companies extend Pre-Placement Offers (PPOs) to interns who perform well, meaning a confirmed job offer before final exams. Recruiters specifically look for experienced freshers — graduates who have already operated in a professional engineering environment." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CseInternshipBlogPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
      <section style={{ background: "#0F2255" }} className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* LEFT — text */}
            <div className="flex-1 min-w-0">
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.12)", color: "#93c5fd" }}>
                  Career &amp; Training
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>· 10 min read</span>
              </div>

              {/* H1 */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                Internships for CSE Students:{" "}
                <span style={{ color: "#60a5fa" }}>Build Real-World Skills</span>{" "}
                That Employers Value
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px" }}>
                Gain hands-on experience in AI/ML, Full Stack Development, Data Science, Cloud Computing, and Software Engineering — through internship programs inside a real product engineering company in Bangalore.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/training-internship-engineering-students-bangalore"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ background: "#E85400", color: "#ffffff" }}
                >
                  Apply for Internship →
                </Link>
                <Link
                  href="/training-internship-engineering-students-bangalore"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-navy"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}
                >
                  Explore Internship Programs
                </Link>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {["Live Projects", "Industry Mentors", "Internship Certificate", "Career Guidance"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ color: "#4ade80" }}>✓</span> {t}
                  </span>
                ))}
              </div>

              {/* Company tag */}
              <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                Internship inside a product engineering company · Bangalore · Since 2005
              </p>
            </div>

            {/* RIGHT — image */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
                <Image
                  src="/images/cse-internship-hero.webp"
                  alt="CSE student working on AI and Full Stack internship project in Bangalore"
                  width={420}
                  height={336}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 rounded-lg px-3 py-2" style={{ background: "rgba(15,34,85,0.85)", backdropFilter: "blur(8px)" }}>
                  <p className="text-xs font-bold" style={{ color: "#60a5fa" }}>AI · Full Stack · Data Science</p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.6)" }}>Internship programs · Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div className="border-b" style={{ background: "#ffffff", borderColor: "#e4e4ef" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="breadcrumb" className="text-xs" style={{ color: "#777799" }}>
            <Link href="/" style={{ color: "#777799" }} className="hover:text-navy">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" style={{ color: "#777799" }} className="hover:text-navy">Blog</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "#3d3d55" }}>Internships for CSE Students</span>
          </nav>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div style={{ background: "#fafafa" }}>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-28 sm:pb-14">

          {/* ── TOC ─────────────────────────────────────────────────────── */}
          <nav aria-label="Table of contents" className="mb-10 rounded-xl px-6 py-5" style={{ background: "#eff4ff", border: "1.5px solid #c8d8f8", borderLeft: "4px solid #1a4fff" }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#1a4fff" }}>
              What this article covers
            </p>
            <ol className="space-y-2 text-sm">
              {[
                ["#why-internships", "Why CSE internships matter — the honest case"],
                ["#domains",         "Best internship domains for CSE students"],
                ["#skills",          "Skills required before applying"],
                ["#bangalore",       "Internship opportunities in Bangalore"],
                ["#projects",        "Projects that strengthen a CSE resume"],
                ["#how-to-choose",   "How to choose the right internship"],
                ["#mistakes",        "Common mistakes CSE students make"],
                ["#career-paths",    "Career paths after a CSE internship"],
                ["#faq",             "Frequently asked questions"],
              ].map(([href, label], i) => (
                <li key={href as string} className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-[11px] w-5 flex-shrink-0" style={{ color: "#1a4fff" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a href={href as string} className="leading-snug hover:underline" style={{ color: "#1a2a5e" }}>
                    {label as string}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── INTRO ───────────────────────────────────────────────────── */}
          <p className="mb-5 text-lg leading-relaxed" style={{ color: "#3d3d55" }}>
            Every CSE student eventually faces the same question — usually somewhere between second year and final year, when placements start feeling real:{" "}
            <strong style={{ color: "#18181f" }}>which internship should I do, and will it actually matter?</strong>
          </p>
          <p className="mb-5 text-lg leading-relaxed" style={{ color: "#3d3d55" }}>
            The honest answer: the internship matters less than what you build during it. Thousands of students graduate with certificates. A much smaller number graduate with a GitHub portfolio showing a working product they actually shipped. That gap — between a certificate and a demonstrable project — is what separates the candidates who get shortlisted from those who spend months waiting for callbacks.
          </p>

          {/* Callout */}
          <blockquote className="my-8 rounded-r-xl px-6 py-4" style={{ borderLeft: "4px solid #e85400", background: "#fff4ee" }}>
            <p className="text-base italic leading-relaxed" style={{ color: "#3d3d55" }}>
              Over 70% of recruiters say they prefer candidates who have completed at least one internship — but what they actually shortlist for is a portfolio of real, deployed work. The certificate is the minimum. The project is the differentiator.
            </p>
          </blockquote>

          {/* Stats */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "35%",  label: "AI & Full Stack job growth in India — 2025", top: "#1a4fff", bg: "#eff4ff" },
              { num: "₹12L+", label: "AI fresher starting salary in Bangalore",   top: "#0a7a3e", bg: "#edfaf4" },
              { num: "70%+", label: "recruiters prefer internship-experienced candidates", top: "#e85400", bg: "#fff4ee" },
            ].map((s) => (
              <div key={s.num} className="rounded-xl px-5 py-4 text-center" style={{ background: s.bg, borderTop: `3px solid ${s.top}` }}>
                <p className="text-2xl font-bold mb-1" style={{ color: s.top }}>{s.num}</p>
                <p className="text-xs leading-snug" style={{ color: "#777799" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── WHY INTERNSHIPS ─────────────────────────────────────────── */}
          <section id="why-internships" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Why internships matter for CSE students
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Your BTech degree and your classmate&apos;s BTech degree look identical on paper. The question every recruiter is actually asking is:{" "}
              <em>has this person ever applied their skills to something real?</em>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🎯", color: "#eff4ff", border: "#c8d8f8", accent: "#1a4fff", title: "Theory finally meets reality", body: "Writing Python in a lab is not the same as writing Python that processes real data in a live product. Internships are where abstract skills become concrete abilities you can explain confidently in an interview." },
                { icon: "📈", color: "#edfaf4", border: "#a0d8bc", accent: "#0a7a3e", title: "Placement edge — measurable", body: "Students with internship experience consistently perform better in campus drives. Recruiters ask follow-up questions about real projects — if you have built something, you have something specific and credible to say." },
                { icon: "💼", color: "#fff4ee", border: "#f0b890", accent: "#e85400", title: "Portfolio over certificates", body: "A GitHub repo with a deployed project says more than any certificate. Recruiters at product companies spend 30 seconds on a LinkedIn profile — a real project link is what stops the scroll." },
                { icon: "🧭", color: "#f5f0ff", border: "#d0b8f8", accent: "#6d22d4", title: "Career direction clarity", body: "Many CSE students graduate vague about whether they want AI, web, cloud, or backend. Eight weeks inside an actual engineering environment resolves that faster than four years of coursework." },
              ].map((c) => (
                <div key={c.title} className="rounded-xl px-5 py-5" style={{ background: c.color, border: `1.5px solid ${c.border}`, borderLeft: `4px solid ${c.accent}` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{c.icon}</span>
                    <p className="text-sm font-bold" style={{ color: "#0f2255" }}>{c.title}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d55" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEST DOMAINS ────────────────────────────────────────────── */}
          <section id="domains" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Best internship domains for CSE students
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              The domain you choose determines which companies shortlist you, what salary you start at, and how fast you grow. Here is an honest breakdown — tools, day-to-day work, and what each domain leads to.
            </p>

            {/* 2 featured domains */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* AI/ML */}
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #0f2255 0%, #1a4fff 100%)", color: "#fff" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#93c5fd" }}>AI &amp; Machine Learning</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>🔥 Highest demand</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                  Build LLM-powered apps, RAG pipelines, and AI-driven features. Enormous skill gap — companies cannot hire fast enough. CSE students with AI project portfolios are getting ₹12L–₹40L offers.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Python", "LangChain", "TensorFlow", "FastAPI", "RAG", "LLMs"].map((t) => (
                    <span key={t} className="rounded px-2 py-0.5 text-[11px] font-medium" style={{ background: "rgba(255,255,255,0.12)", color: "#bfdbfe" }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <strong style={{ color: "#93c5fd" }}>Leads to:</strong> ML Engineer, AI Developer, GenAI Engineer — ₹12L–₹40L PA
                </p>
              </div>

              {/* Full Stack */}
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)", color: "#fff" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6ee7b7" }}>Full Stack Development</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>⚡ Highest volume</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                  Build complete web products end-to-end — frontend, backend APIs, databases, and deployment. Real internships mean committing code to production, working in Agile sprints, and shipping features.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["React", "Node.js", "PostgreSQL", "REST APIs", "Docker", "Git"].map((t) => (
                    <span key={t} className="rounded px-2 py-0.5 text-[11px] font-medium" style={{ background: "rgba(255,255,255,0.12)", color: "#a7f3d0" }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <strong style={{ color: "#6ee7b7" }}>Leads to:</strong> Software Engineer, Full Stack Developer — ₹8L–₹25L PA
                </p>
              </div>
            </div>

            {/* 4 compact domains */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { tag: "Software Dev",  icon: "⚙️", bg: "#f8f9ff", border: "#c8d0f8", accent: "#3730a3", tools: ["Java", "C++", "Spring Boot"], outcome: "SDE-1 · ₹6L–₹20L" },
                { tag: "Data Science",  icon: "📊", bg: "#f5f0ff", border: "#d0b8f8", accent: "#6d22d4", tools: ["Python", "SQL", "Power BI"],  outcome: "Data Analyst · ₹7L–₹18L" },
                { tag: "Cloud DevOps",  icon: "☁️", bg: "#f0f9ff", border: "#bae6fd", accent: "#0369a1", tools: ["AWS", "Docker", "Terraform"], outcome: "Cloud Eng · ₹8L–₹22L" },
                { tag: "Cybersecurity", icon: "🔒", bg: "#fff1f2", border: "#fecdd3", accent: "#be123c", tools: ["Linux", "SIEM", "Ethical Hacking"], outcome: "Sec Analyst · ₹7L–₹20L" },
              ].map((d) => (
                <div key={d.tag} className="rounded-xl p-4" style={{ background: d.bg, border: `1.5px solid ${d.border}`, borderTop: `3px solid ${d.accent}` }}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-base">{d.icon}</span>
                    <p className="text-xs font-bold" style={{ color: d.accent }}>{d.tag}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {d.tools.map((t) => (
                      <span key={t} className="rounded px-1.5 py-0.5 text-[10px]" style={{ background: "#fff", border: "1px solid #e4e4ef", color: "#3d3d55" }}>{t}</span>
                    ))}
                  </div>
                  <p className="text-[11px] font-medium" style={{ color: "#777799" }}>{d.outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA 1 ───────────────────────────────────────────────────── */}
          <div className="my-10 rounded-xl px-6 py-6" style={{ background: "#eff4ff", border: "1.5px solid #c8d8f8" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1a4fff" }}>
              Knowx Product Engineering Fellowship · Bangalore
            </p>
            <p className="text-base font-semibold mb-2" style={{ color: "#0f2255" }}>
              AI and Full Stack internship tracks built for CSE students
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#3d3d55" }}>
              Both programs run inside a real product engineering company — you build actual client-grade products, not lab exercises. Internship certificate included. Online and offline batches available.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/generative-ai-product-engineer-course-internship-bangalore" className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ background: "#1a4fff" }}>
                Explore AI Track →
              </Link>
              <Link href="/full-stack-product-development-internship-course-in-bangalore" className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-50" style={{ borderColor: "#c8d8f8", color: "#0f2255", background: "#fff" }}>
                Explore Full Stack Track →
              </Link>
            </div>
          </div>

          {/* ── SKILLS ──────────────────────────────────────────────────── */}
          <section id="skills" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Skills required for CSE internships
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Companies do not expect perfection at the internship stage. They want enough foundation to learn quickly and contribute to a real team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Programming languages", color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8", items: ["Python — preferred across AI, Data Science, scripting", "Java or C++ — backend and software development", "JavaScript — mandatory for Full Stack positions", "DSA problem solving — LeetCode-level basics"] },
                { title: "Database management",   color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc", items: ["MySQL / PostgreSQL — relational fundamentals", "MongoDB — NoSQL for modern web applications", "SQL query writing — JOINs, aggregations, indexes", "Basic ORM — Sequelize, SQLAlchemy, Prisma"] },
                { title: "Version control",       color: "#6d22d4", bg: "#f5f0ff", border: "#d0b8f8", items: ["Git — commits, branches, merges, rebasing", "GitHub — pull requests, README, portfolio", "Basic CI/CD concepts — understand pipelines", "Code review etiquette — feedback loops"] },
                { title: "What differentiates you", color: "#e85400", bg: "#fff4ee", border: "#f0b890", items: ["Deployed project on GitHub with live demo link", "Domain-specific tools — LangChain, React, etc.", "Internship certificate from a recognised program", "Ability to explain what you built and why it works"] },
              ].map((g) => (
                <div key={g.title} className="rounded-xl px-5 py-4" style={{ background: g.bg, border: `1.5px solid ${g.border}` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: g.color }}>{g.title}</p>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-snug" style={{ color: "#3d3d55" }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: g.color }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── BANGALORE ───────────────────────────────────────────────── */}
          <section id="bangalore" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Internship opportunities for CSE students in Bangalore
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-4 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Bangalore is India&apos;s densest concentration of product companies, AI startups, and engineering-first organisations. Companies actively hiring CSE interns include product giants like{" "}
              <strong style={{ color: "#0f2255" }}>Flipkart, Razorpay, Swiggy, Ola, PhonePe, and Meesho</strong>. In the AI space,{" "}
              <strong style={{ color: "#0f2255" }}>Sarvam AI, Krutrim, and hundreds of AI startups</strong> in Koramangala and HSR Layout are hiring engineers who can build, not just prototype. The Whitefield and Electronic City corridors house engineering centres for{" "}
              <strong style={{ color: "#0f2255" }}>IBM, SAP, Infosys, Wipro, and Oracle</strong>.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Flipkart", "Razorpay", "Swiggy", "Ola", "PhonePe", "Meesho", "Sarvam AI", "Krutrim", "SAP", "IBM", "Oracle", "Wipro", "ISRO URSC", "Infosys"].map((c) => (
                <span key={c} className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "#f0f2ff", border: "1px solid #c8d0f8", color: "#1a2a5e" }}>{c}</span>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ────────────────────────────────────────────────── */}
          <section id="projects" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Projects that strengthen a CSE internship resume
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              What interviewers actually ask about is your project — what it does, how you built it, and what broke when you deployed it. Here are the project types that get attention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tag: "AI / ML Projects",       bg: "#eff4ff", border: "#c8d8f8", accent: "#1a4fff", examples: ["Chatbot using LangChain + RAG over a custom document", "Image classifier deployed as a FastAPI endpoint", "Sentiment analysis dashboard with real Twitter data"] },
                { tag: "Full Stack Projects",     bg: "#edfaf4", border: "#a0d8bc", accent: "#0a7a3e", examples: ["SaaS tool with auth, CRUD, and payments integration", "Real-time dashboard with WebSocket updates", "E-commerce platform with cart, orders, and admin panel"] },
                { tag: "Data Science Projects",   bg: "#f5f0ff", border: "#d0b8f8", accent: "#6d22d4", examples: ["Sales forecasting model with Pandas and Scikit-learn", "Power BI dashboard for business KPI tracking", "Customer churn prediction with explainability (SHAP)"] },
                { tag: "Cloud / DevOps Projects", bg: "#f0f9ff", border: "#bae6fd", accent: "#0369a1", examples: ["Dockerised app on AWS EC2 with CI/CD pipeline", "Serverless function handling 10K+ daily requests", "Infrastructure-as-code project using Terraform"] },
              ].map((p) => (
                <div key={p.tag} className="rounded-xl px-5 py-4" style={{ background: p.bg, border: `1.5px solid ${p.border}` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p.accent }}>{p.tag}</p>
                  <ul className="space-y-2">
                    {p.examples.map((ex) => (
                      <li key={ex} className="flex gap-2 text-sm leading-snug" style={{ color: "#3d3d55" }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: p.accent }}>→</span>{ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO CHOOSE ───────────────────────────────────────────── */}
          <section id="how-to-choose" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                How to choose the right CSE internship
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Not all internships are equal. Here is how to evaluate any program before you commit time and money to it.
            </p>
            <div className="space-y-3">
              {[
                { num: "01", title: "Live projects — non-negotiable",           color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8", body: "Ask specifically whether interns work on real, client-facing or production projects. If the answer is training modules, walk away. You want code that ships." },
                { num: "02", title: "Domain alignment with your career goal",   color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc", body: "A Full Stack internship will not help you break into AI roles, and vice versa. Choose the domain that matches where you want to be in three years." },
                { num: "03", title: "Mentor with real engineering experience",  color: "#6d22d4", bg: "#f5f0ff", border: "#d0b8f8", body: "The best internships put you in front of someone who has actually shipped products. A mentor who only teaches theory cannot show you what real problems look like." },
                { num: "04", title: "University-compliant internship certificate", color: "#b8860b", bg: "#fffbeb", border: "#fde68a", body: "If you are a pursuing student, confirm the certificate is university-compliant and accepted for academic internship submission. Not all programs provide this." },
                { num: "05", title: "Placement support — specific, not generic", color: "#e85400", bg: "#fff4ee", border: "#f0b890", body: "Ask what placement support actually means. We will help you apply is not the same as our hiring network includes these specific companies with proven outcomes." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 rounded-xl px-5 py-4" style={{ background: item.bg, border: `1.5px solid ${item.border}` }}>
                  <span className="font-mono text-sm font-bold flex-shrink-0 w-8 pt-0.5" style={{ color: item.color }}>{item.num}</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "#0f2255" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d55" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA 2 — PRIMARY ─────────────────────────────────────────── */}
          <div className="my-10 rounded-2xl px-7 py-8" style={{ background: "linear-gradient(135deg, #0f2255 0%, #1a3a6a 100%)", borderTop: "3px solid #e85400" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#e85400" }}>
              Knowx Product Engineering Fellowship · Bangalore
            </p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}>
              Live projects ✓&nbsp; Industry mentors ✓&nbsp; Internship certificate ✓&nbsp; Placement support ✓
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.72)" }}>
              Knowx Innovations is a product development company in Bangalore — not a coaching institute. Fellows work on the same architecture we build for real clients. Three domain tracks: Generative AI, Full Stack, and Embedded AI &amp; IoT. Online and offline batches. University-compliant certificate included.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["3 domain tracks", "Real client projects", "Course + Internship cert", "Placement support", "Online & offline", "Since 2005"].map((pill) => (
                <span key={pill} className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>{pill}</span>
              ))}
            </div>
            <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#e85400" }}>
              View the Fellowship →
            </Link>
          </div>

          {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Internship vs no internship — what the data shows
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <div className="overflow-x-auto rounded-xl" style={{ border: "1.5px solid #e4e4ef", boxShadow: "0 2px 16px rgba(15,34,85,0.07)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#1a2a5e" }}>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>With an internship</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#93c5fd" }}>Without an internship</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Real, deployed project experience",                    "Theory-only knowledge with no proof of application"],
                    ["Stronger, interview-ready resume",                      "Generic academic resume — same as thousands of others"],
                    ["Soft skills built in a real professional environment",  "No exposure to professional communication or team dynamics"],
                    ["Networking connections and referrals",                  "Smaller professional network — starting from zero"],
                    ["Pre-Placement Offer (PPO) potential",                   "Standard campus recruitment only — no early advantage"],
                    ["Higher starting salary packages",                       "Fewer offers and lower-value roles at entry level"],
                  ].map(([a, b], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8f9ff", borderBottom: "1px solid #e4e4ef" }}>
                      <td className="px-5 py-3 font-medium" style={{ color: "#0f2255" }}>{a}</td>
                      <td className="px-5 py-3" style={{ color: "#777799" }}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── MISTAKES ────────────────────────────────────────────────── */}
          <section id="mistakes" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Common mistakes CSE students make with internships
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <div className="space-y-3">
              {[
                { mistake: "Choosing the internship only for the certificate",             fix: "A certificate from an internship where you did nothing meaningful is almost worthless. Prioritise what you will build over the logo on the certificate." },
                { mistake: "Not maintaining a GitHub portfolio",                           fix: "Every project you build should be pushed to GitHub with a clear README. This is the single most impactful thing you can do for your resume." },
                { mistake: "Ignoring networking during the internship",                    fix: "Every senior engineer you work with is a potential future reference. Connect on LinkedIn on Day 1 — not after the internship ends." },
                { mistake: "Choosing the easiest internship to get, not the most relevant", fix: "A generic IT support role at a large company will not help you break into AI or Full Stack roles. Domain alignment matters more than brand name." },
                { mistake: "Not following up after the internship ends",                   fix: "Send a thank-you message. Ask for a recommendation letter while the work is still fresh. Most students skip this and leave real career value on the table." },
              ].map((m) => (
                <div key={m.mistake} className="flex gap-3 rounded-xl px-5 py-4" style={{ background: "#fff1f2", border: "1.5px solid #fecdd3" }}>
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "#be123c" }}>✗</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "#0f2255" }}>{m.mistake}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d55" }}>
                      <strong style={{ color: "#0f2255" }}>Instead:</strong> {m.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CAREER PATHS ────────────────────────────────────────────── */}
          <section id="career-paths" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Career paths after a CSE internship
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <div className="overflow-x-auto rounded-xl" style={{ border: "1.5px solid #e4e4ef", boxShadow: "0 2px 16px rgba(15,34,85,0.07)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#1a2a5e" }}>
                    {["Internship domain", "First role", "3–5 year role", "Fresher salary"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI / Machine Learning", "ML Engineer, AI Developer",         "AI Product Lead, ML Architect",      "₹12L – ₹40L"],
                    ["Full Stack Dev",         "Software Engineer, Full Stack Dev", "Senior SWE, Tech Lead",              "₹8L – ₹25L"],
                    ["Data Science",           "Data Analyst, BI Analyst",          "Data Scientist, Analytics Lead",     "₹7L – ₹18L"],
                    ["Cloud / DevOps",         "Cloud Engineer, DevOps Engineer",   "Solutions Architect, SRE",           "₹8L – ₹22L"],
                    ["Software Development",   "Backend Engineer, SDE-1",           "Senior SDE, Engineering Manager",   "₹6L – ₹20L"],
                    ["Cybersecurity",          "Security Analyst, SOC Analyst",     "Security Lead, CISO track",          "₹7L – ₹20L"],
                  ].map(([domain, first, later, salary], i) => (
                    <tr key={domain} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8f9ff", borderBottom: "1px solid #e4e4ef" }}>
                      <td className="px-4 py-3 font-bold" style={{ color: "#0f2255" }}>{domain}</td>
                      <td className="px-4 py-3" style={{ color: "#3d3d55" }}>{first}</td>
                      <td className="px-4 py-3" style={{ color: "#777799" }}>{later}</td>
                      <td className="px-4 py-3 font-bold" style={{ color: "#0a7a3e" }}>{salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────────────── */}
          <section id="faq" className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Frequently asked questions
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <div className="space-y-2">
              {faqItems.map((item, i) => (
                <details key={i} className="group rounded-xl" style={{ border: "1.5px solid #e4e4ef", background: "#ffffff" }}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-semibold leading-snug" style={{ color: "#0f2255" }}>{item.q}</span>
                    <span className="flex-shrink-0 text-lg font-light transition-transform duration-200 group-open:rotate-45" style={{ color: "#1a4fff" }}>+</span>
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-sm leading-relaxed" style={{ borderTop: "1px solid #e4e4ef", color: "#3d3d55" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CLOSING CTA ─────────────────────────────────────────────── */}
          <div className="mb-10 rounded-2xl px-7 py-8 text-center" style={{ background: "#0f2255" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#60a5fa" }}>
              Ready to build your CSE internship portfolio?
            </p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}>
              The right internship is not the most well-known one — it is the one where you build something real.
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              Knowx Innovations has been building real engineering products in Bangalore since 2005. Our Product Engineering Fellowship puts CSE students inside that environment — building actual client products, not lab exercises.
            </p>
            <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#e85400" }}>
              Start here →
            </Link>
          </div>

          {/* SEO tags */}
          <p className="text-[11px] leading-relaxed" style={{ color: "#ccccdd" }}>
            Tags: internships for cse students · cse internships in bangalore · ai internship for cse students · full stack internship for cse students · software development internship · data science internship · internship opportunities for cse students · cse internship bangalore 2026 · best internship for computer science students
          </p>

        </article>
      </div>

      {/* ── MOBILE STICKY BAR ───────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 px-4 py-3 sm:hidden" style={{ background: "#ffffff", borderTop: "2px solid #e85400", boxShadow: "0 -4px 20px rgba(0,0,0,0.12)" }}>
        <Link href="/training-internship-engineering-students-bangalore" className="flex-1 rounded-lg py-2.5 text-center text-sm font-bold text-white" style={{ background: "#e85400" }}>
          Explore CSE Internship Programmes
        </Link>
        <a href="https://wa.me/919886094611?text=Hi%2C%20I%20read%20the%20CSE%20internship%20guide%20and%20want%20to%20know%20more" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white" style={{ background: "#25D366" }} aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="tel:+919886094611" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: "#f5f6fa", border: "1px solid #e4e4ef", color: "#3d3d55" }} aria-label="Call us">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"/></svg>
        </a>
      </div>
    </>
  );
}
