import type { Metadata } from "next";
import Link from "next/link";
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
    title:
      "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026",
    description:
      "AI, Full Stack, Data Science — which CSE internship track is right for you? Complete guide with domain breakdowns, skills checklist, Bangalore company list, and career paths.",
    url: "https://knowxindia.com/blog/internships-for-cse-students",
    type: "article",
    locale: "en_IN",
    siteName: "Knowx Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Internships for CSE Students: Best Domains, Skills & Career Opportunities 2026",
    description:
      "Complete CSE internship guide — domains, skills, companies, and career paths for students in Bangalore.",
  },
};

// ─── JSON-LD SCHEMAS ──────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Internships for CSE Students: Best Domains, Skills and Career Opportunities 2026",
  description:
    "A complete guide for CSE students on choosing the right internship domain — AI, Full Stack, Data Science, Cloud — with skills required, Bangalore opportunities, and career path outcomes.",
  author: {
    "@type": "Person",
    name: "Bhimsen G.V.",
    jobTitle: "CEO",
    worksFor: {
      "@type": "Organization",
      name: "Knowx Innovations",
      url: "https://knowxindia.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Knowx Innovations",
    url: "https://knowxindia.com",
  },
  datePublished: "2026-06-09",
  mainEntityOfPage:
    "https://knowxindia.com/blog/internships-for-cse-students",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which internship is best for CSE students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best internship for CSE students depends on your career goal. AI and Machine Learning internships offer the highest salary potential and lowest competition — engineers with LangChain, TensorFlow, or Python ML skills are in extremely short supply. Full Stack Development is the most job-volume-friendly track, with React, Node.js, and API skills directly translating to placements at product companies. If you are unsure, choose the domain that aligns with the kind of products you want to build — not just the salary numbers.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI internship good for CSE students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AI is the highest-demand CSE domain in India right now. AI and Full Stack job postings in India grew 35% in 2025. A well-structured AI internship where you build real products using LangChain, TensorFlow, or Python ML libraries gives you a portfolio that most BTech graduates do not have. Bangalore companies — from Flipkart and Razorpay to hundreds of AI startups — are hiring aggressively for this skill set in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can first-year CSE students do an internship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most structured internship programs are designed for second-year students and above, as they require at least basic programming knowledge. However, first-year CSE students can start building foundational skills — Python, Git, basic data structures — and apply for training programs or junior internships in their second semester. The earlier you start building a project portfolio, the stronger your internship applications will be in third year.",
      },
    },
    {
      "@type": "Question",
      name: "Are online internships useful for CSE students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with one condition — the internship must involve real, deployed projects, not just watching lectures or completing quizzes. A structured online internship where you build and push working code to GitHub is just as valuable as an on-site placement for your resume. What recruiters assess is the quality of your portfolio and the specificity of the tools you worked with — not whether you were physically present.",
      },
    },
    {
      "@type": "Question",
      name: "What skills do CSE students need before applying for an internship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum skills expected before applying for a CSE internship are: one programming language (Python or Java preferred), basic data structures and problem solving, Git and GitHub for version control, and a fundamental understanding of your chosen domain — whether that is web development, AI, or data science. Companies do not expect perfection at the internship stage — they want to see that you have enough foundation to learn quickly and contribute to a real team.",
      },
    },
    {
      "@type": "Question",
      name: "How do CSE internships help in campus placements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students with internship experience consistently perform better in campus placement drives for two reasons: they can speak with authority about real projects during technical interviews, and their resume stands out from thousands of identical academic CVs. Many companies also extend Pre-Placement Offers (PPOs) to interns who perform well — meaning you could have a confirmed job offer before your final exams. In the current market, recruiters specifically look for experienced freshers — graduates who have operated in a professional engineering environment.",
      },
    },
  ],
};

const faqItems = [
  {
    q: "Which internship is best for CSE students?",
    a: "The best internship depends on your career goal. AI and Machine Learning offers the highest salary potential and least competition — engineers with LangChain, TensorFlow, or Python ML skills are in short supply. Full Stack is the highest job-volume track, with React, Node.js, and API skills directly translating to placements. If you are unsure, choose the domain that aligns with the products you want to build — not just the salary numbers.",
  },
  {
    q: "Is AI internship good for CSE students?",
    a: "Yes — AI is the highest-demand CSE domain in India right now. AI and Full Stack job postings in India grew 35% in 2025. A well-structured AI internship where you build real products using LangChain, TensorFlow, or Python ML libraries gives you a portfolio that most BTech graduates simply do not have. Bangalore companies — from Flipkart and Razorpay to hundreds of AI startups — are hiring aggressively for this skill set in 2026.",
  },
  {
    q: "Can first-year CSE students do an internship?",
    a: "Most structured programs are designed for second-year students and above, as they require basic programming knowledge. However, first-year CSE students can start building foundational skills — Python, Git, basic data structures — and apply for training programs or junior internships in their second semester. The earlier you start building a project portfolio, the stronger your applications will be in third year.",
  },
  {
    q: "Are online internships useful for CSE students?",
    a: "Yes, with one condition — the internship must involve real, deployed projects, not just watching lectures or completing quizzes. A structured online internship where you build and push working code to GitHub is just as valuable as an on-site placement for your resume. What recruiters assess is the quality of your portfolio and the specificity of the tools you worked with — not whether you were physically present.",
  },
  {
    q: "What skills do CSE students need before applying for an internship?",
    a: "The minimum expected before applying: one programming language (Python or Java preferred), basic data structures and problem solving, Git and GitHub for version control, and a fundamental understanding of your chosen domain — web development, AI, or data science. Companies do not expect perfection at the internship stage — they want enough foundation to learn quickly and contribute to a real team.",
  },
  {
    q: "How do CSE internships help in campus placements?",
    a: "Students with internship experience consistently perform better in campus placement drives — they can speak with authority about real projects in technical interviews, and their resume stands out from thousands of identical academic CVs. Many companies extend Pre-Placement Offers (PPOs) to interns who perform well, meaning a confirmed job offer before final exams. Recruiters specifically look for experienced freshers — graduates who have already operated in a professional engineering environment.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CseInternshipBlogPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-28 sm:pb-14">

        {/* ── TOC ─────────────────────────────────────────────────────────── */}
        <nav
          aria-label="Table of contents"
          className="mb-10 rounded-xl border border-blue-100 bg-blue-50 px-6 py-5"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
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
                <span className="mt-0.5 font-mono text-[11px] text-blue-400 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={href as string}
                  className="text-slate-700 hover:text-blue-600 transition-colors leading-snug"
                >
                  {label as string}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p className="mb-5 text-lg leading-relaxed text-slate-600">
          Every CSE student eventually faces the same question — usually
          somewhere between second year and final year, when placements start
          feeling real:{" "}
          <strong className="text-slate-900">
            which internship should I do, and will it actually matter?
          </strong>
        </p>
        <p className="mb-5 text-lg leading-relaxed text-slate-600">
          The honest answer: the internship matters less than what you build
          during it. Thousands of students graduate with internship certificates.
          A much smaller number graduate with a GitHub portfolio showing a
          working product they actually shipped. That gap — between a certificate
          and a demonstrable project — is what separates the candidates who get
          shortlisted from those who spend months waiting for callbacks.
        </p>

        <blockquote className="my-8 border-l-4 border-orange-400 bg-orange-50 px-6 py-4 rounded-r-xl">
          <p className="text-base text-slate-700 leading-relaxed italic">
            Over 70% of recruiters say they prefer candidates who have completed
            at least one internship — but what they actually shortlist for is a
            portfolio of real, deployed work. The certificate is the minimum.
            The project is the differentiator.
          </p>
        </blockquote>

        {/* ── STATS ───────────────────────────────────────────────────────── */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              num: "35%",
              label: "AI & Full Stack job growth in India — 2025",
              color: "text-blue-600",
              bg: "bg-blue-50",
              border: "border-t-2 border-blue-400",
            },
            {
              num: "₹12L+",
              label: "AI fresher starting salary in Bangalore",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-t-2 border-emerald-400",
            },
            {
              num: "70%+",
              label: "recruiters prefer internship-experienced candidates",
              color: "text-orange-600",
              bg: "bg-orange-50",
              border: "border-t-2 border-orange-400",
            },
          ].map((s) => (
            <div
              key={s.num}
              className={`rounded-xl ${s.bg} ${s.border} px-5 py-4 text-center`}
            >
              <p className={`text-2xl font-bold ${s.color} mb-1`}>{s.num}</p>
              <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── WHY INTERNSHIPS ─────────────────────────────────────────────── */}
        <section id="why-internships" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Why internships matter for CSE students
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-6 text-base leading-relaxed text-slate-600">
            Your BTech degree and your classmate&apos;s BTech degree look
            identical on paper. Same university, similar CGPA, same syllabus.
            The question every recruiter is actually asking when they read a CSE
            resume is:{" "}
            <em>has this person ever applied their skills to something real?</em>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Theory finally meets reality",
                body: "Writing Python in a lab is not the same as writing Python that processes real data in a live product. Internships are where abstract skills become concrete abilities you can explain confidently in an interview.",
              },
              {
                title: "Placement edge — measurable, not theoretical",
                body: "Students with internship experience consistently perform better in campus drives. Recruiters ask follow-up questions about real projects — if you have built something, you have something specific and credible to say.",
              },
              {
                title: "Portfolio over certificates",
                body: "A GitHub repo with a deployed project says more about your ability than any certificate. Recruiters at product companies spend 30 seconds on a LinkedIn profile — a real project link is what stops the scroll.",
              },
              {
                title: "Career direction clarity",
                body: "Many CSE students graduate vague about whether they want AI, web, cloud, or backend. Eight weeks inside an actual engineering environment resolves that faster than four years of coursework.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <p className="mb-1 text-sm font-semibold text-slate-900">
                  {c.title}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BEST DOMAINS ────────────────────────────────────────────────── */}
        <section id="domains" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Best internship domains for CSE students
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-6 text-base leading-relaxed text-slate-600">
            The domain you choose determines which companies shortlist you, what
            salary you start at, and how fast you grow. Here is an honest
            breakdown — tools, day-to-day work, and what each domain leads to.
          </p>

          <div className="space-y-4">
            {/* AI / ML */}
            <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 px-5 py-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  AI &amp; Machine Learning
                </span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                  Highest demand · 2026
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                You build models, fine-tune LLMs, create RAG pipelines, and
                deploy AI-powered features into real products. Day-to-day work
                includes data preprocessing, model training, prompt engineering,
                and API integration. The skill gap here is enormous — companies
                cannot hire fast enough.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "LangChain", "TensorFlow", "FastAPI", "RAG", "LLMs"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                <strong className="text-slate-700">Leads to:</strong> ML
                Engineer, AI Product Engineer, Generative AI Developer —
                ₹12L–₹40L PA fresher range
              </p>
            </div>

            {/* Full Stack */}
            <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  Full Stack Development
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  Highest job volume
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                You build complete web products — frontend interfaces, backend
                APIs, databases, and deployment pipelines. Real internships mean
                committing code to production, working in Agile sprints, and
                getting code reviewed by senior engineers.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["React", "Node.js", "PostgreSQL", "REST APIs", "Docker", "Git"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                <strong className="text-slate-700">Leads to:</strong> Software
                Engineer, Full Stack Developer, Backend Engineer — ₹8L–₹25L PA
              </p>
            </div>

            {/* Other 4 domains */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  tag: "Software Development",
                  border: "border-slate-400",
                  bg: "bg-slate-50",
                  tools: ["Java", "C++", "Spring Boot", "Microservices"],
                  outcome: "Backend Developer, SDE-1 — ₹6L–₹20L PA",
                },
                {
                  tag: "Data Science",
                  border: "border-violet-400",
                  bg: "bg-violet-50",
                  tools: ["Python", "SQL", "Power BI", "Pandas", "Scikit-learn"],
                  outcome: "Data Analyst, Data Scientist — ₹7L–₹18L PA",
                },
                {
                  tag: "Cloud Computing",
                  border: "border-sky-400",
                  bg: "bg-sky-50",
                  tools: ["AWS", "Azure", "Docker", "Terraform", "DevOps"],
                  outcome: "Cloud Engineer, DevOps Engineer — ₹8L–₹22L PA",
                },
                {
                  tag: "Cybersecurity",
                  border: "border-red-400",
                  bg: "bg-red-50",
                  tools: ["Network Security", "Ethical Hacking", "SIEM", "Linux"],
                  outcome: "Security Analyst, Pen Tester — ₹7L–₹20L PA",
                },
              ].map((d) => (
                <div
                  key={d.tag}
                  className={`rounded-xl border-l-4 ${d.border} ${d.bg} px-4 py-4`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    {d.tag}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {d.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">{d.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA 1 — after domains ────────────────────────────────────────── */}
        <div className="my-10 rounded-xl border border-blue-200 bg-blue-50 px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Knowx Product Engineering Fellowship · Bangalore
          </p>
          <p className="text-base font-semibold text-slate-900 mb-2">
            AI and Full Stack tracks built for CSE students
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            Both programs run inside a real product engineering company — you
            build actual client-grade products, not lab exercises. Internship
            certificate included. Online and offline batches available.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/generative-ai-product-engineer-course-internship-bangalore"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Explore AI Track →
            </Link>
            <Link
              href="/full-stack-product-development-internship-course-in-bangalore"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Explore Full Stack Track →
            </Link>
          </div>
        </div>

        {/* ── SKILLS ──────────────────────────────────────────────────────── */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Skills required for CSE internships
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            Companies do not expect perfection at the internship stage. What
            they want is enough foundation to learn quickly and contribute to a
            real team. Here is the baseline across domains — and what separates
            average applications from strong ones.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Programming languages",
                color: "text-blue-600",
                items: [
                  "Python — preferred across AI, Data Science, and scripting",
                  "Java or C++ — backend and software development roles",
                  "JavaScript — mandatory for Full Stack positions",
                  "Problem solving and DSA — LeetCode-level basics",
                ],
              },
              {
                title: "Database management",
                color: "text-emerald-600",
                items: [
                  "MySQL / PostgreSQL — relational fundamentals",
                  "MongoDB — NoSQL for modern web applications",
                  "SQL query writing — JOINs, aggregations, indexes",
                  "Basic ORM usage — Sequelize, SQLAlchemy, Prisma",
                ],
              },
              {
                title: "Version control",
                color: "text-violet-600",
                items: [
                  "Git — commits, branches, merges, rebasing",
                  "GitHub — pull requests, README, portfolio",
                  "Basic CI/CD concepts — understand pipelines",
                  "Code review etiquette — commenting, feedback loops",
                ],
              },
              {
                title: "What actually differentiates you",
                color: "text-orange-600",
                items: [
                  "A deployed project on GitHub with a live demo link",
                  "Domain-specific tool exposure — LangChain, React, etc.",
                  "Internship certificate from a recognised program",
                  "Ability to explain what you built and why it works",
                ],
              },
            ].map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${g.color}`}
                >
                  {g.title}
                </p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-600 leading-snug"
                    >
                      <span className="mt-1 text-slate-300 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── BANGALORE ───────────────────────────────────────────────────── */}
        <section id="bangalore" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Internship opportunities for CSE students in Bangalore
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            Bangalore is India&apos;s densest concentration of product
            companies, AI startups, and engineering-first organisations. For a
            CSE student, there is no better city to do your first serious
            internship — the depth of the talent network and the quality of
            engineering culture here is unmatched in India.
          </p>
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            Companies actively hiring CSE interns and freshers include product
            giants like{" "}
            <strong className="text-slate-900">
              Flipkart, Razorpay, Swiggy, Ola, PhonePe, and Meesho
            </strong>{" "}
            — all headquartered or heavily staffed in Bangalore. In the AI
            space, companies like{" "}
            <strong className="text-slate-900">
              Sarvam AI, Krutrim, and hundreds of early-stage AI startups
            </strong>{" "}
            in Koramangala and HSR Layout are hiring engineering interns who can
            build, not just prototype.
          </p>
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            For Full Stack and software roles, the Whitefield and Electronic
            City corridors house engineering centres for{" "}
            <strong className="text-slate-900">
              IBM, SAP, Infosys, Wipro, and Oracle
            </strong>
            , alongside a dense cluster of SaaS startups whose entire product
            teams are Bangalore-based.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Flipkart", "Razorpay", "Swiggy", "Ola", "PhonePe",
              "Meesho", "Sarvam AI", "Krutrim", "SAP", "IBM",
              "Oracle", "Wipro", "ISRO URSC", "Infosys",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ────────────────────────────────────────────────────── */}
        <section id="projects" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Projects that strengthen a CSE internship resume
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            A certificate from an internship where you did nothing meaningful is
            worth less than you think. What interviewers actually ask about is
            your project — what it does, how you built it, and what broke when
            you deployed it. Here are the project types that get attention.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                tag: "AI / ML projects",
                bg: "bg-blue-50",
                border: "border-blue-200",
                examples: [
                  "Chatbot using LangChain + RAG over a custom document",
                  "Image classifier deployed as a FastAPI endpoint",
                  "Sentiment analysis dashboard with real Twitter data",
                ],
              },
              {
                tag: "Full stack projects",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
                examples: [
                  "SaaS tool with auth, CRUD, and payments integration",
                  "Real-time dashboard with WebSocket updates",
                  "E-commerce platform with cart, orders, and admin panel",
                ],
              },
              {
                tag: "Data science projects",
                bg: "bg-violet-50",
                border: "border-violet-200",
                examples: [
                  "Sales forecasting model with Pandas and Scikit-learn",
                  "Power BI dashboard for business KPI tracking",
                  "Customer churn prediction with explainability (SHAP)",
                ],
              },
              {
                tag: "Cloud / DevOps projects",
                bg: "bg-sky-50",
                border: "border-sky-200",
                examples: [
                  "Dockerised app deployed on AWS EC2 with CI/CD pipeline",
                  "Serverless function handling 10K+ daily requests",
                  "Infrastructure-as-code project using Terraform",
                ],
              },
            ].map((p) => (
              <div
                key={p.tag}
                className={`rounded-xl border ${p.border} ${p.bg} px-5 py-4`}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  {p.tag}
                </p>
                <ul className="space-y-2">
                  {p.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex gap-2 text-sm text-slate-700 leading-snug"
                    >
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">
                        →
                      </span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO CHOOSE ───────────────────────────────────────────────── */}
        <section id="how-to-choose" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            How to choose the right CSE internship
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <p className="mb-5 text-base leading-relaxed text-slate-600">
            Not all internships are equal. Spending eight weeks doing
            administrative work or watching recorded lectures is not going to
            help your career. Here is how to evaluate any program before you
            commit time and money to it.
          </p>
          <div className="space-y-3">
            {[
              {
                num: "01",
                title: "Live projects — non-negotiable",
                body: "Ask specifically whether interns work on real, client-facing or production projects. If the answer is training modules or internal practice tasks, that is not a meaningful internship. You want code that ships.",
              },
              {
                num: "02",
                title: "Domain alignment with your career goal",
                body: "A Full Stack internship will not help you break into AI roles, and vice versa. Choose the domain that matches where you want to be in three years — not the one that seems easiest to get.",
              },
              {
                num: "03",
                title: "Mentor with real engineering experience",
                body: "The best internships put you in front of someone who has actually shipped products in the industry. A mentor who only teaches theory cannot tell you what real engineering problems look like.",
              },
              {
                num: "04",
                title: "Internship certificate universities accept",
                body: "If you are a pursuing student, confirm the completion certificate is university-compliant and accepted for academic internship submission. Not all programs provide this.",
              },
              {
                num: "05",
                title: "Placement support — specific, not generic",
                body: "Ask what placement support actually means. We will help you apply is not the same as our hiring network includes these specific companies with proven placement outcomes.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <span className="font-mono text-sm font-bold text-blue-300 flex-shrink-0 w-8 pt-0.5">
                  {item.num}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA 2 — primary conversion ───────────────────────────────────── */}
        <div className="my-10 rounded-xl border-2 border-blue-500 bg-white px-6 py-7">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Knowx Product Engineering Fellowship · Bangalore
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Live projects ✓&nbsp; Industry mentors ✓&nbsp; Internship
            certificate ✓&nbsp; Placement support ✓
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            Knowx Innovations is a product development company in Bangalore —
            not a coaching institute. Fellows work on the same architecture we
            build for real clients. Three domain tracks for CSE students:
            Generative AI, Full Stack, and Embedded AI &amp; IoT. Online and
            offline batches. University-compliant internship certificate
            included.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              "3 domain tracks",
              "Real client projects",
              "Course + Internship cert",
              "Placement support",
              "Online & offline",
              "Since 2005",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
              >
                {pill}
              </span>
            ))}
          </div>
          <Link
            href="/training-internship-engineering-students-bangalore"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
          >
            View the Fellowship →
          </Link>
        </div>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Internship vs no internship — what the data shows
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-800">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white">
                    With an internship
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Without an internship
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Real, deployed project experience", "Theory-only knowledge with no proof of application"],
                  ["Stronger, interview-ready resume", "Generic academic resume — same as thousands of others"],
                  ["Soft skills built in a real professional environment", "No exposure to professional communication or team dynamics"],
                  ["Networking connections and referrals", "Smaller professional network — starting from zero post-graduation"],
                  ["Pre-Placement Offer (PPO) potential", "Standard campus recruitment only — no early advantage"],
                  ["Higher starting salary packages", "Fewer offers and lower-value roles at entry level"],
                ].map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3 text-slate-800 font-medium">{a}</td>
                    <td className="px-5 py-3 text-slate-400">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── MISTAKES ────────────────────────────────────────────────────── */}
        <section id="mistakes" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Common mistakes CSE students make with internships
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <div className="space-y-3">
            {[
              {
                mistake: "Choosing the internship only for the certificate",
                fix: "A certificate from an internship where you did nothing meaningful is almost worthless. Prioritise what you will build over the logo on the certificate.",
              },
              {
                mistake: "Not maintaining a GitHub portfolio",
                fix: "Every project you build during your internship should be pushed to GitHub with a clear README. This is the single most impactful thing you can do for your resume.",
              },
              {
                mistake: "Ignoring networking during the internship",
                fix: "Every senior engineer you work with is a potential future reference or referral source. Connect on LinkedIn on Day 1 — not after the internship ends.",
              },
              {
                mistake: "Choosing the easiest internship to get, not the most relevant",
                fix: "A generic IT support internship at a large company will not help you break into AI or Full Stack roles. Domain alignment matters more than brand name.",
              },
              {
                mistake: "Not following up after the internship ends",
                fix: "Send a thank-you message. Stay connected. Ask for a recommendation letter while the work is still fresh. Most students skip this and leave real career value on the table.",
              },
            ].map((m) => (
              <div
                key={m.mistake}
                className="flex gap-3 rounded-xl border border-red-100 bg-red-50 px-5 py-4"
              >
                <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">
                  ✗
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    {m.mistake}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    <strong className="text-slate-700">Instead:</strong>{" "}
                    {m.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CAREER PATHS ────────────────────────────────────────────────── */}
        <section id="career-paths" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Career paths after a CSE internship
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-800">
                  {[
                    "Internship domain",
                    "First role",
                    "3–5 year role",
                    "Fresher salary",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["AI / Machine Learning", "ML Engineer, AI Developer",       "AI Product Lead, ML Architect",      "₹12L – ₹40L"],
                  ["Full Stack Dev",        "Software Engineer, Full Stack Dev", "Senior SWE, Tech Lead",              "₹8L – ₹25L"],
                  ["Data Science",          "Data Analyst, BI Analyst",          "Data Scientist, Analytics Lead",     "₹7L – ₹18L"],
                  ["Cloud / DevOps",        "Cloud Engineer, DevOps Engineer",   "Solutions Architect, SRE",           "₹8L – ₹22L"],
                  ["Software Development",  "Backend Engineer, SDE-1",           "Senior SDE, Engineering Manager",   "₹6L – ₹20L"],
                  ["Cybersecurity",         "Security Analyst, SOC Analyst",     "Security Lead, CISO track",          "₹7L – ₹20L"],
                ].map(([domain, first, later, salary], i) => (
                  <tr
                    key={domain}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-800">{domain}</td>
                    <td className="px-4 py-3 text-slate-600">{first}</td>
                    <td className="px-4 py-3 text-slate-500">{later}</td>
                    <td className="px-4 py-3 font-medium text-emerald-700">{salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mb-5 h-px bg-slate-200" />
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white open:border-blue-200 open:bg-blue-50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 text-lg font-light text-blue-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-blue-100 px-5 pb-5 pt-3 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CLOSING CTA ─────────────────────────────────────────────────── */}
        <div className="mb-10 rounded-xl bg-slate-900 px-7 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
            Ready to build your CSE internship portfolio?
          </p>
          <h3 className="text-xl font-bold text-white mb-3">
            The right internship is not the most well-known one — it is the one
            where you build something real.
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-lg mx-auto">
            Knowx Innovations has been building real engineering products in
            Bangalore since 2005. Our Product Engineering Fellowship puts CSE
            students inside that environment — building actual client products,
            not lab exercises.
          </p>
          <Link
            href="/training-internship-engineering-students-bangalore"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-7 py-3 text-sm font-bold text-white hover:bg-blue-400 transition-colors"
          >
            Start here →
          </Link>
        </div>

        {/* SEO keyword footer */}
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Tags: internships for cse students · cse internships in bangalore ·
          ai internship for cse students · full stack internship for cse
          students · software development internship · data science internship ·
          internship opportunities for cse students · cse internship bangalore
          2026 · best internship for computer science students
        </p>
      </article>

      {/* ── MOBILE STICKY BAR ───────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 border-t-2 border-blue-500 bg-white px-4 py-3 sm:hidden shadow-lg">
        <Link
          href="/training-internship-engineering-students-bangalore"
          className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-bold text-white"
        >
          Explore CSE Internship Programmes
        </Link>
        <a
          href="https://wa.me/919886094611?text=Hi%2C%20I%20read%20the%20CSE%20internship%20guide%20and%20want%20to%20know%20more"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="tel:+919886094611"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
          </svg>
        </a>
      </div>
    </>
  );
}
