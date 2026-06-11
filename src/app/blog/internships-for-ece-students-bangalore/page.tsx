import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Internships for ECE Students: Embedded Systems, IoT, VLSI & Career Guide 2026 | Knowx",
  description:
    "Complete guide on internships for ECE students in Bangalore — best domains (Embedded AI, IoT, VLSI, PCB Design, Edge AI), skills required, top companies hiring, and how to choose the right internship.",
  keywords: [
    "internships for ece students",
    "ece internships in bangalore",
    "embedded systems internship",
    "iot internship for ece students",
    "vlsi internship bangalore",
    "internship for electronics and communication engineering students",
    "electronics internship for students",
    "embedded ai internship",
    "edge ai internship",
    "pcb design internship",
    "internship opportunities for ece students",
    "semiconductor internship bangalore",
  ],
  alternates: {
    canonical: "https://knowxindia.com/blog/internships-for-ece-students-bangalore",
  },
  openGraph: {
    title: "Internships for ECE Students: Embedded Systems, IoT, VLSI & Career Guide 2026",
    description: "Embedded AI, IoT, VLSI — which ECE internship track is right for you? Complete guide with domain breakdowns, skills checklist, Bangalore company list, and career paths.",
    url: "https://knowxindia.com/blog/internships-for-ece-students-bangalore",
    type: "article",
    locale: "en_IN",
    siteName: "Knowx Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internships for ECE Students: Embedded Systems, IoT, VLSI & Career Guide 2026",
    description: "Complete ECE internship guide — domains, skills, companies, and career paths for students in Bangalore.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Internships for ECE Students: Embedded Systems, IoT, VLSI and Career Guide 2026",
  description: "A complete guide for ECE students on choosing the right internship domain — Embedded AI, IoT, VLSI, PCB Design, Edge AI — with skills required, Bangalore opportunities, and career path outcomes.",
  author: { "@type": "Person", name: "Bhimsen G.V.", jobTitle: "CEO", worksFor: { "@type": "Organization", name: "Knowx Innovations", url: "https://knowxindia.com" } },
  publisher: { "@type": "Organization", name: "Knowx Innovations", url: "https://knowxindia.com" },
  datePublished: "2026-06-11",
  mainEntityOfPage: "https://knowxindia.com/blog/internships-for-ece-students-bangalore",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which internship is best for ECE students?", acceptedAnswer: { "@type": "Answer", text: "The best internship for ECE students is in Embedded AI and IoT — it directly uses ECE hardware skills (microcontrollers, sensors, protocols) while adding high-demand AI capabilities. Engineers with Embedded AI skills are commanding ₹8L–₹20L packages as freshers. VLSI is the best choice for students targeting semiconductor companies like Qualcomm, Intel, and Texas Instruments." } },
    { "@type": "Question", name: "Is embedded systems internship good for ECE students?", acceptedAnswer: { "@type": "Answer", text: "Yes — embedded systems is the most natural internship domain for ECE students. It directly applies your electronics, programming, and hardware knowledge to real products. A structured embedded systems internship where you build real firmware and deploy IoT systems gives you a portfolio that mechanical and software students simply cannot replicate." } },
    { "@type": "Question", name: "What is the salary after an ECE internship in embedded systems?", acceptedAnswer: { "@type": "Answer", text: "ECE freshers with traditional embedded skills earn ₹3L–₹6L PA. With IoT and RTOS skills this rises to ₹6L–₹12L. Embedded AI engineers — combining hardware with TensorFlow Lite, Edge Impulse, and IoT — earn ₹8L–₹20L as freshers. Engineers who complete structured programs with a real product portfolio consistently land in the upper end of this range." } },
    { "@type": "Question", name: "What skills do ECE students need for an internship?", acceptedAnswer: { "@type": "Answer", text: "The minimum expected: C and Embedded C programming, one microcontroller platform (Arduino, STM32, or ESP32), basic electronics — reading schematics, using oscilloscope, understanding circuits, and communication protocols — I2C, SPI, UART. For Embedded AI roles, add Python, TensorFlow Lite basics, and MQTT for IoT connectivity." } },
    { "@type": "Question", name: "Can ECE students get software company internships?", acceptedAnswer: { "@type": "Answer", text: "Yes, but ECE students compete directly against CSE students for software roles — and CSE graduates typically have stronger software fundamentals. The smarter strategy for ECE students is to target domains where their hardware and electronics background is a genuine advantage: Embedded Systems, IoT, VLSI, Edge AI, and semiconductor companies. These roles have less competition and pay equally well or better." } },
    { "@type": "Question", name: "Which companies hire ECE interns in Bangalore?", acceptedAnswer: { "@type": "Answer", text: "Top companies hiring ECE interns in Bangalore include Bosch, Texas Instruments, Qualcomm, Intel, Tata Elxsi, Ather Energy, Ola Electric, L&T Technology Services, Honeywell, ABB, Siemens, and hundreds of IoT and EV startups in Whitefield, Electronic City, and Marathahalli. Product engineering companies like Knowx Innovations also hire ECE interns for live client projects in healthcare IoT, EV, and industrial automation." } },
  ],
};

const faqItems = [
  { q: "Which internship is best for ECE students?", a: "The best internship for ECE students is in Embedded AI and IoT — it directly uses your hardware skills while adding high-demand AI capabilities. Engineers with Embedded AI skills are commanding ₹8L–₹20L packages as freshers. VLSI is the best choice for students targeting semiconductor companies like Qualcomm, Intel, and Texas Instruments." },
  { q: "Is embedded systems internship good for ECE students?", a: "Yes — embedded systems is the most natural internship domain for ECE students. It directly applies your electronics, programming, and hardware knowledge to real products. A structured internship where you build real firmware and deploy IoT systems gives you a portfolio that mechanical and software students simply cannot replicate." },
  { q: "What is the salary after an ECE internship in embedded systems?", a: "ECE freshers with traditional embedded skills earn ₹3L–₹6L PA. With IoT and RTOS skills this rises to ₹6L–₹12L. Embedded AI engineers — combining hardware with TensorFlow Lite, Edge Impulse, and IoT — earn ₹8L–₹20L as freshers. Engineers who complete structured programs with a real product portfolio consistently land in the upper end of this range." },
  { q: "What skills do ECE students need for an internship?", a: "The minimum expected: C and Embedded C programming, one microcontroller platform (Arduino, STM32, or ESP32), basic electronics — reading schematics, using oscilloscope, understanding circuits — and communication protocols: I2C, SPI, UART. For Embedded AI roles, add Python, TensorFlow Lite basics, and MQTT for IoT connectivity." },
  { q: "Can ECE students get software company internships?", a: "Yes, but ECE students compete directly against CSE students for software roles. The smarter strategy is to target domains where your hardware background is a genuine advantage: Embedded Systems, IoT, VLSI, Edge AI, and semiconductor companies. These roles have less competition and pay equally well or better." },
  { q: "Which companies hire ECE interns in Bangalore?", a: "Top companies hiring ECE interns in Bangalore include Bosch, Texas Instruments, Qualcomm, Intel, Tata Elxsi, Ather Energy, Ola Electric, L&T Technology Services, Honeywell, ABB, Siemens, and hundreds of IoT and EV startups in Whitefield, Electronic City, and Marathahalli." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function EceInternshipBlogPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#0F2255" }} className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* LEFT */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(255,255,255,0.12)", color: "#93c5fd" }}>
                  Career &amp; Training
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>· 10 min read · By Bhimsen G.V.</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                Internships for ECE Students:{" "}
                <span style={{ color: "#60a5fa" }}>Gain Industry Experience</span>{" "}
                Through Real-World Projects
              </h1>
              <p className="text-sm sm:text-base mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px" }}>
                Explore opportunities in Embedded Systems, IoT, VLSI, PCB Design, and Edge AI — while building practical skills that employers in Bangalore&apos;s semiconductor and product engineering ecosystem value.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90" style={{ background: "#E85400", color: "#ffffff" }}>
                  Apply for Internship →
                </Link>
                <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}>
                  Talk to a Mentor
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
                {["Live Projects", "Industry Mentors", "Internship Certificate", "Career Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ color: "#4ade80" }}>✓</span> {t}
                  </span>
                ))}
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                Internship inside a product engineering company · Bangalore · Since 2005
              </p>
            </div>

            {/* RIGHT — placeholder, replace with Image once you have the file */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a3a6a 0%, #0a1a3a 100%)", height: "280px", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
               <Image
  src="/images/ece-internship-hero.webp"
  alt="ECE student working on embedded systems and IoT internship in Bangalore"
  width={400}
  height={280}
  className="w-full h-auto object-cover"
  priority
/>
                <div className="absolute bottom-3 left-3 rounded-lg px-3 py-2" style={{ background: "rgba(15,34,85,0.85)", backdropFilter: "blur(8px)" }}>
                  <p className="text-xs font-bold" style={{ color: "#60a5fa" }}>Embedded AI · IoT · VLSI</p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.6)" }}>ECE internship programs · Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ───────────────────────────────────────────────────── */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e4e4ef" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="breadcrumb" className="text-xs" style={{ color: "#777799" }}>
            <Link href="/" className="hover:underline" style={{ color: "#777799" }}>Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:underline" style={{ color: "#777799" }}>Blog</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "#3d3d55" }}>Internships for ECE Students</span>
          </nav>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div style={{ background: "#fafafa" }}>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 pb-28 sm:pb-14">

          {/* TOC */}
          <nav aria-label="Table of contents" className="mb-10 rounded-xl px-6 py-5" style={{ background: "#eff4ff", border: "1.5px solid #c8d8f8", borderLeft: "4px solid #1a4fff" }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#1a4fff" }}>What this article covers</p>
            <ol className="space-y-2 text-sm">
              {[
                ["#why-internships", "Why ECE internships matter — the honest case"],
                ["#domains",         "Best internship domains for ECE students"],
                ["#skills",          "Skills required before applying"],
                ["#projects",        "Top projects for ECE students"],
                ["#bangalore",       "Internship opportunities in Bangalore"],
                ["#how-to-choose",   "How to choose the right ECE internship"],
                ["#mistakes",        "Common mistakes ECE students make"],
                ["#career-paths",    "Career paths after an ECE internship"],
                ["#faq",             "Frequently asked questions"],
              ].map(([href, label], i) => (
                <li key={href as string} className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-[11px] w-5 flex-shrink-0" style={{ color: "#1a4fff" }}>{String(i + 1).padStart(2, "0")}</span>
                  <a href={href as string} className="leading-snug hover:underline" style={{ color: "#1a2a5e" }}>{label as string}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* INTRO */}
          <p className="mb-5 text-lg leading-relaxed" style={{ color: "#3d3d55" }}>
            ECE students face a challenge most CSE students do not — the degree is broad. Electronics, communication, embedded systems, VLSI, signal processing, IoT. The question is never just{" "}
            <strong style={{ color: "#18181f" }}>which internship to do</strong> — it is{" "}
            <strong style={{ color: "#18181f" }}>which domain to commit to.</strong>
          </p>
          <p className="mb-5 text-lg leading-relaxed" style={{ color: "#3d3d55" }}>
            The good news: ECE students have a structural advantage that most people overlook. The combination of hardware knowledge and software skills — when developed properly — opens doors that are simply closed to CSE graduates. An ECE student who can write firmware, debug a PCB, deploy Edge AI on a microcontroller, and connect it to the cloud is a genuinely rare profile in today&apos;s job market.
          </p>

          <blockquote className="my-8 rounded-r-xl px-6 py-4" style={{ borderLeft: "4px solid #e85400", background: "#fff4ee" }}>
            <p className="text-base italic leading-relaxed" style={{ color: "#3d3d55" }}>
              The engineers getting the highest ECE fresher packages in 2026 are not the ones who only know microcontrollers. They are the ones who combine hardware depth with AI and IoT skills — a combination that ECE students are uniquely positioned to develop.
            </p>
          </blockquote>

          {/* Stats */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "40%",  label: "growth in embedded & IoT job postings India 2025", top: "#1a4fff", bg: "#eff4ff" },
              { num: "₹8L+", label: "Embedded AI engineer fresher salary — Bangalore",  top: "#0a7a3e", bg: "#edfaf4" },
              { num: "500+", label: "ECE-hiring companies in Bangalore ecosystem",        top: "#e85400", bg: "#fff4ee" },
            ].map((s) => (
              <div key={s.num} className="rounded-xl px-5 py-4 text-center" style={{ background: s.bg, borderTop: `3px solid ${s.top}` }}>
                <p className="text-2xl font-bold mb-1" style={{ color: s.top }}>{s.num}</p>
                <p className="text-xs leading-snug" style={{ color: "#777799" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* WHY INTERNSHIPS */}
          <section id="why-internships" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Why internships matter for ECE students
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              An ECE degree teaches you the principles. An internship teaches you how those principles behave when silicon meets reality — when the sensor drifts, when the firmware crashes at 3am, when the PCB trace burns out during testing. That gap between classroom and industry is where most ECE graduates struggle — and where a good internship makes all the difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🔬", color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8", title: "Industry exposure — hardware meets real constraints", body: "Lab components behave perfectly. Industry components do not. An internship teaches you real tolerances, supply chain decisions, and why engineers choose one component over another at scale." },
                { icon: "🛠", color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc", title: "Practical learning that coursework cannot replicate", body: "Flashing firmware onto a real development board and watching it control an actual motor or transmit real sensor data to a cloud dashboard is a fundamentally different experience from a simulation." },
                { icon: "📄", color: "#b8860b", bg: "#fffbeb", border: "#fde68a", title: "Resume that stands out from 10,000 ECE graduates", body: "Every ECE graduate has a degree. Very few have a GitHub portfolio with deployed embedded AI projects, a verified internship certificate, and a specific domain story to tell in an interview." },
                { icon: "🎯", color: "#be123c", bg: "#fff1f2", border: "#fecdd3", title: "Placement advantage that is measurable, not theoretical", body: "Companies hiring embedded engineers specifically ask about real projects. If you have built a working system — not a simulation — you have something concrete to demonstrate. That changes the interview dynamic entirely." },
              ].map((c) => (
                <div key={c.title} className="rounded-xl px-5 py-5" style={{ background: c.bg, border: `1.5px solid ${c.border}`, borderLeft: `4px solid ${c.color}` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{c.icon}</span>
                    <p className="text-sm font-bold" style={{ color: "#0f2255" }}>{c.title}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d55" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOMAINS */}
          <section id="domains" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Best internship domains for ECE students
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              ECE students typically search for internships by domain — not just by &quot;ECE internship.&quot; The domain you choose determines your career trajectory, salary ceiling, and which companies shortlist you. Here is an honest breakdown of the three highest-value domains for ECE students in 2026.
            </p>

            {/* Embedded AI — featured */}
            <div className="rounded-2xl p-6 mb-5" style={{ background: "linear-gradient(135deg, #0f2255 0%, #1a3a6a 100%)", boxShadow: "0 4px 24px rgba(15,34,85,0.2)" }}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#93c5fd" }}>Embedded AI &amp; IoT Internship</span>
                  <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "#e85400", color: "#fff" }}>🔥 Knowx Programme</span>
                </div>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>Highest demand · 2026</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                Most embedded courses stop at microcontrollers and protocols. The Knowx Embedded AI &amp; IoT programme goes further — you build <strong style={{ color: "#60a5fa" }}>10 real AI-powered embedded and IoT hardware products</strong>, deploy Edge AI on actual devices, and connect them to cloud dashboards — in 12 weeks. Graduates enter the workforce with a GitHub portfolio, a verified certificate, and an internship credential — ready for roles paying ₹8L–₹20L.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Arduino", "STM32", "ESP32", "Sensors", "Firmware", "Edge AI", "IoT Protocols", "TFLite", "MQTT"].map((t) => (
                  <span key={t} className="rounded px-2 py-0.5 text-[11px] font-medium" style={{ background: "rgba(255,255,255,0.1)", color: "#bfdbfe" }}>{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/embedded-ai-iot-product-engineer-course-internship-bangalore" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#e85400" }}>
                  View Embedded AI Programme →
                </Link>
                <p className="text-xs self-center" style={{ color: "rgba(255,255,255,0.5)" }}>Online &amp; offline · 12 weeks · Internship cert included</p>
              </div>
            </div>

            {/* IoT + VLSI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* IoT */}
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6ee7b7" }}>IoT Internship</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>Connected Devices</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                  You build smart device networks — sensors collecting real-world data, microcontrollers processing it, and cloud platforms visualising and acting on it. Day-to-day work involves writing MQTT clients, building REST APIs, configuring AWS IoT or Azure IoT Hub, and debugging connectivity issues on real hardware.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["MQTT", "AWS IoT", "Sensors", "REST APIs", "Node-RED", "ESP32"].map((t) => (
                    <span key={t} className="rounded px-2 py-0.5 text-[11px] font-medium" style={{ background: "rgba(255,255,255,0.12)", color: "#a7f3d0" }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <strong style={{ color: "#6ee7b7" }}>Leads to:</strong> IoT Engineer, Firmware Developer — ₹6L–₹15L PA
                </p>
                <Link href="/embedded-ai-iot-product-engineer-course-internship-bangalore" className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  Explore IoT Track →
                </Link>
              </div>

              {/* VLSI */}
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #451a03 0%, #78350f 100%)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#fcd34d" }}>VLSI Internship</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>Semiconductor</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.82)" }}>
                  You work on digital circuit design, verification, and simulation — the foundational work that goes into every chip manufactured at scale. Day-to-day involves writing RTL in Verilog or VHDL, running functional simulations, and working on synthesis and timing analysis.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["Verilog", "VHDL", "FPGA", "ASIC", "RTL Design", "Cadence"].map((t) => (
                    <span key={t} className="rounded px-2 py-0.5 text-[11px] font-medium" style={{ background: "rgba(255,255,255,0.12)", color: "#fde68a" }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <strong style={{ color: "#fcd34d" }}>Leads to:</strong> VLSI Design Engineer, Verification Engineer — ₹6L–₹18L PA
                </p>
                <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  Explore VLSI Track →
                </Link>
              </div>
            </div>

            {/* PCB + Edge AI compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tag: "PCB Design Internship",  icon: "🔧", bg: "#f8f9ff", border: "#c8d0f8", top: "#3730a3", tools: ["KiCad", "Altium", "Eagle", "LTSpice"], outcome: "Hardware Engineer, PCB Designer — ₹5L–₹15L PA" },
                { tag: "Edge AI Internship",      icon: "🧠", bg: "#fff1f2", border: "#fecdd3", top: "#be123c", tools: ["TFLite", "Edge Impulse", "OpenCV", "ONNX"], outcome: "Edge AI Engineer, Vision Engineer — ₹8L–₹20L PA" },
              ].map((d) => (
                <div key={d.tag} className="rounded-xl p-4" style={{ background: d.bg, border: `1.5px solid ${d.border}`, borderTop: `3px solid ${d.top}` }}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-base">{d.icon}</span>
                    <p className="text-xs font-bold" style={{ color: d.top }}>{d.tag}</p>
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

          {/* CTA 1 — after domains */}
          <div className="my-10 rounded-xl px-6 py-5" style={{ background: "#eff4ff", border: "1.5px solid #c8d8f8" }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#1a4fff" }}>Knowx Embedded AI &amp; IoT Programme · Bangalore</p>
                <p className="text-sm font-semibold mb-1" style={{ color: "#0f2255" }}>12 weeks · 10 real products · Course + Internship certificate</p>
                <p className="text-xs" style={{ color: "#3d3d55" }}>Online and offline batches · University-compliant certificate · Since 2005</p>
              </div>
              <Link href="/embedded-ai-iot-product-engineer-course-internship-bangalore" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white flex-shrink-0 transition-opacity hover:opacity-90" style={{ background: "#1a4fff" }}>
                View Programme →
              </Link>
            </div>
          </div>

          {/* SKILLS */}
          <section id="skills" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Skills required for ECE internships
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Companies hiring ECE interns do not expect you to be an expert. They expect you to have enough foundation to learn fast and contribute to a real team. Here is the baseline — and what separates average applications from strong ones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Programming", color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8", items: ["C and Embedded C — fundamental, non-negotiable", "Python — for AI, automation, and scripting", "Basics of C++ — useful for STM32 and Arduino", "Git and GitHub — version control for all projects"] },
                { title: "Hardware skills", color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc", items: ["Reading and interpreting circuit schematics", "Using oscilloscope, multimeter, logic analyser", "Basic PCB layout understanding — Gerber files", "Soldering and component-level troubleshooting"] },
                { title: "Protocols & connectivity", color: "#6d22d4", bg: "#f5f0ff", border: "#d0b8f8", items: ["I2C, SPI, UART — the three you must know cold", "MQTT — essential for any IoT role", "CAN bus — critical for automotive and EV internships", "Wi-Fi / Bluetooth stack basics — ESP32 ecosystem"] },
                { title: "What actually differentiates you", color: "#e85400", bg: "#fff4ee", border: "#f0b890", items: ["A deployed embedded project on GitHub with README", "Edge AI experience — TFLite or Edge Impulse", "Domain exposure — EV, healthcare IoT, industrial", "Internship certificate from a recognised programme"] },
              ].map((g) => (
                <div key={g.title} className="rounded-xl px-5 py-4" style={{ background: g.bg, border: `1.5px solid ${g.border}` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: g.color }}>{g.title}</p>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-snug" style={{ color: "#3d3d55" }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: g.color }}>·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Top projects for ECE students
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              The projects below are not invented for this article — they are real project categories that Knowx has built for industry clients. ECE students who build in these domains are working on the same architecture as production systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Smart Agriculture IoT / AI Projects",    href: "/blog/smart-agriculture-iot-projects-ai-precision-farming-projects", bg: "#edfaf4", border: "#a0d8bc", accent: "#0a7a3e", desc: "Soil sensors, crop health monitoring, AI-based yield prediction, automated irrigation. Real deployed systems with cloud dashboards." },
                { title: "Smart Energy Monitoring & Renewables",   href: "/blog/top-iot-ai-embedded-projects-for-engineering-students-bangalore",   bg: "#eff4ff", border: "#c8d8f8", accent: "#1a4fff", desc: "AI-powered energy meters, solar panel monitoring, power consumption prediction. Combines embedded hardware with data analytics." },
                { title: "Edge AI Device Projects",                href: "/blog/what-is-tinyml-edge-ai-microcontrollers-raspberry-pi-projects",      bg: "#fff1f2", border: "#fecdd3", accent: "#be123c", desc: "TinyML on microcontrollers, gesture recognition, object detection on Raspberry Pi. The highest-demand ECE project category in 2026." },
                { title: "Industrial Automation Projects",         href: "/blog/top-iot-ai-embedded-projects-for-engineering-students-bangalore",   bg: "#fff4ee", border: "#f0b890", accent: "#e85400", desc: "Predictive maintenance, conveyor belt monitoring, PLC integration, IIoT dashboards. Direct path to Bosch, Siemens, and ABB roles." },
              ].map((p) => (
                <Link key={p.title} href={p.href} className="block rounded-xl px-5 py-4 transition-opacity hover:opacity-90" style={{ background: p.bg, border: `1.5px solid ${p.border}` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p.accent }}>{p.title}</p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#3d3d55" }}>{p.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: p.accent }}>Read project guide →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* BANGALORE */}
          <section id="bangalore" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Internship opportunities for ECE students in Bangalore
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-4 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Bangalore is India&apos;s embedded systems capital — not just its IT capital. The concentration of semiconductor, automotive, aerospace, and IoT companies makes it the single best city in India to build an ECE career. Companies actively hiring ECE interns include semiconductor giants{" "}
              <strong style={{ color: "#0f2255" }}>Texas Instruments, Qualcomm, and Intel</strong>, automotive leaders{" "}
              <strong style={{ color: "#0f2255" }}>Bosch and Tata Elxsi</strong>, EV companies{" "}
              <strong style={{ color: "#0f2255" }}>Ather Energy and Ola Electric</strong>, and industrial companies{" "}
              <strong style={{ color: "#0f2255" }}>Honeywell, ABB, and Siemens</strong>.
            </p>
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Beyond the large companies, Bangalore&apos;s dense startup ecosystem — particularly in Whitefield, Electronic City, and Marathahalli — has hundreds of IoT, EV, and embedded AI product companies building the next generation of smart devices. These startups often offer ECE interns more hands-on responsibility and broader exposure than large corporate programmes.{" "}
              <strong style={{ color: "#0f2255" }}>Knowx Innovations</strong>, for instance, runs a dedicated internship fellowship where ECE students work on live client projects across healthcare IoT, EV battery management, industrial automation, and smart agriculture.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Texas Instruments", "Qualcomm", "Intel", "Bosch", "Tata Elxsi", "Ather Energy", "Ola Electric", "Honeywell", "ABB", "Siemens", "L&T Technology", "ISRO URSC", "Knowx Innovations"].map((c) => (
                <span key={c} className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "#f0f2ff", border: "1px solid #c8d0f8", color: "#1a2a5e" }}>{c}</span>
              ))}
            </div>
            {/* CTA 2 — after Bangalore */}
            <div className="rounded-xl px-5 py-4" style={{ background: "#edfaf4", border: "1.5px solid #a0d8bc" }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: "#0f2255" }}>
                  Start your ECE internship journey in Bangalore — inside a real product engineering company.
                </p>
                <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white flex-shrink-0 transition-opacity hover:opacity-90" style={{ background: "#0a7a3e" }}>
                  Apply Now →
                </Link>
              </div>
            </div>
          </section>

          {/* HOW TO CHOOSE */}
          <section id="how-to-choose" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                How to choose the right ECE internship
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <p className="mb-5 text-base leading-relaxed" style={{ color: "#3d3d55" }}>
              Not all ECE internships are equal. Here is how to evaluate any programme before you commit.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { num: "01", color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8", title: "Domain relevance — ECE skills must be used", body: "A software testing internship at an IT company is not an ECE internship. The programme must use your electronics, hardware, or firmware knowledge. If you are writing test scripts for a web app, your ECE degree is not an advantage — it is irrelevant." },
                { num: "02", color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc", title: "Live projects — hardware must ship", body: "Ask directly: do interns work on real, client-facing products? If the answer is simulation software or internal training modules, that is not a live project. You want something you can hold, demonstrate, and push to GitHub." },
                { num: "03", color: "#6d22d4", bg: "#f5f0ff", border: "#d0b8f8", title: "Mentor with hardware engineering experience", body: "A software engineer cannot mentor you on PCB layout, firmware debugging, or sensor calibration. Confirm that the mentor has shipped real embedded products — not just taught theory." },
                { num: "04", color: "#b8860b", bg: "#fffbeb", border: "#fde68a", title: "University-compliant internship certificate", body: "If you are a pursuing BE or BTech student, the certificate must be accepted for academic internship submission. Confirm this explicitly — not all programmes provide university-compliant documentation." },
                { num: "05", color: "#e85400", bg: "#fff4ee", border: "#f0b890", title: "Portfolio and placement support", body: "The best internships help you document your work — a GitHub repository, a project report, a demo video. Ask whether placement support means actual introductions to companies or just generic resume advice." },
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
            {/* CTA 3 — after how-to-choose */}
            <div className="rounded-xl px-5 py-4" style={{ background: "#eff4ff", border: "1.5px solid #c8d8f8" }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm font-semibold" style={{ color: "#0f2255" }}>
                  Knowx Fellowship ticks all five criteria — live hardware projects, industry mentors, university certificate, placement support.
                </p>
                <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white flex-shrink-0 transition-opacity hover:opacity-90" style={{ background: "#1a4fff" }}>
                  View Fellowship →
                </Link>
              </div>
            </div>
          </section>

          {/* CTA 4 — portfolio conversion */}
          <div className="my-10 rounded-2xl px-7 py-8" style={{ background: "linear-gradient(135deg, #0f2255 0%, #1a3a6a 100%)", borderTop: "3px solid #e85400" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#e85400" }}>Build a Portfolio That Recruiters Notice</p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}>
              The best internships are not just about certificates. They build proof.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.72)" }}>
              Knowx Innovations is a product development company in Bangalore — not a coaching institute. ECE fellows work on the same hardware architecture we build for real clients: healthcare IoT wearables, EV battery management systems, industrial predictive maintenance, and AI-powered energy meters. You leave with a GitHub portfolio, a verified internship credential, and a story to tell in every interview.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["10 real products", "Internship certificate", "GitHub portfolio", "Placement support", "Online & offline", "Since 2005"].map((pill) => (
                <span key={pill} className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>{pill}</span>
              ))}
            </div>
            <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#e85400" }}>
              Start Your Internship Journey →
            </Link>
          </div>

          {/* MISTAKES */}
          <section id="mistakes" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Common mistakes ECE students make with internships
              </h2>
            </div>
            <div className="mb-5 h-px" style={{ background: "#e4e4ef" }} />
            <div className="space-y-3">
              {[
                { mistake: "Choosing a software internship because it seems easier to get",         fix: "ECE students competing for software roles go up against thousands of CSE graduates with stronger fundamentals. Your hardware background is a genuine advantage in embedded, IoT, and VLSI roles — use it." },
                { mistake: "Accepting an internship with no live hardware work",                    fix: "If you are not touching real components, writing real firmware, or deploying to a real device — it is not an ECE internship. A simulation-only programme does not build the portfolio you need." },
                { mistake: "Not pushing projects to GitHub",                                        fix: "Your hardware project lives on a bench. Your GitHub repo lives everywhere. Document every project — schematic, firmware, demo video, README. This is what recruiters actually look at." },
                { mistake: "Picking the internship with the biggest company name",                  fix: "A large IT company intern who spent 8 weeks testing software has less to show than a student who spent 8 weeks at a small IoT startup and shipped a real product. Output matters more than logo." },
                { mistake: "Not getting a university-compliant certificate",                        fix: "If your university requires an internship submission and the certificate is not in the right format, the entire internship is wasted for academic purposes. Confirm certificate format before joining." },
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

          {/* CAREER PATHS */}
          <section id="career-paths" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Career paths after an ECE internship
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
                    ["Embedded AI & IoT",    "Embedded AI Engineer, IoT Developer",       "Embedded Architect, AI Product Lead",       "₹8L – ₹20L"],
                    ["IoT Engineering",      "IoT Engineer, Firmware Developer",           "IoT Solutions Architect, Tech Lead",        "₹6L – ₹15L"],
                    ["VLSI Design",          "VLSI Design Engineer, Verification Eng.",   "Senior RTL Designer, DFT Engineer",         "₹6L – ₹18L"],
                    ["PCB Design",           "Hardware Engineer, PCB Designer",            "Hardware Architect, Product Lead",          "₹5L – ₹15L"],
                    ["Edge AI",              "Edge AI Engineer, Vision Engineer",          "AI Systems Architect, Computer Vision Lead", "₹8L – ₹20L"],
                    ["Embedded Systems",     "Firmware Engineer, SWE Embedded",           "Senior Embedded Engineer, BSP Lead",        "₹5L – ₹16L"],
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

          {/* INTERNAL LINKS — related blogs */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-6 rounded-sm flex-shrink-0" style={{ background: "#e85400" }} />
              <h2 className="text-xl font-bold" style={{ color: "#0f2255", fontFamily: "Georgia, serif" }}>
                Related guides for ECE students
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Internships for CSE Students",               href: "/blog/internships-for-cse-students",                                           cat: "Career & Training", color: "#1a4fff", bg: "#eff4ff", border: "#c8d8f8" },
                { title: "Top IoT, AI & Embedded Projects — Bangalore", href: "/blog/top-iot-ai-embedded-projects-for-engineering-students-bangalore",        cat: "Embedded AI/IoT",   color: "#0a7a3e", bg: "#edfaf4", border: "#a0d8bc" },
                { title: "What is TinyML? Edge AI on Microcontrollers", href: "/blog/what-is-tinyml-edge-ai-microcontrollers-raspberry-pi-projects",          cat: "Embedded AI/IoT",   color: "#be123c", bg: "#fff1f2", border: "#fecdd3" },
                { title: "EV Battery Management System Guide",          href: "/blog/ev-battery-management-system-ai-embedded-engineers-projects",            cat: "Product Engineering", color: "#e85400", bg: "#fff4ee", border: "#f0b890" },
              ].map((r) => (
                <Link key={r.title} href={r.href} className="block rounded-xl px-5 py-4 transition-opacity hover:opacity-90" style={{ background: r.bg, border: `1.5px solid ${r.border}` }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block" style={{ color: r.color }}>{r.cat}</span>
                  <p className="text-sm font-semibold" style={{ color: "#0f2255" }}>{r.title}</p>
                  <span className="text-xs mt-1 block" style={{ color: r.color }}>Read guide →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12 scroll-mt-20">
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

          {/* CLOSING CTA 5 */}
          <div className="mb-10 rounded-2xl px-7 py-8 text-center" style={{ background: "#0f2255" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#60a5fa" }}>
              Ready to build your ECE internship portfolio?
            </p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}>
              ECE students who build real products get hired. Students who only have certificates wait.
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              Knowx Innovations has been building real embedded and IoT products in Bangalore since 2005. Our Product Engineering Fellowship puts ECE students inside that environment — working on actual client projects across healthcare, EV, industrial automation, and smart agriculture.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/embedded-ai-iot-product-engineer-course-internship-bangalore" className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#e85400" }}>
                View Embedded AI Programme →
              </Link>
              <Link href="/training-internship-engineering-students-bangalore" className="inline-flex items-center gap-2 rounded-lg border px-7 py-3 text-sm font-semibold transition-colors" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}>
                Explore All Tracks
              </Link>
            </div>
          </div>

          {/* SEO tags */}
          <p className="text-[11px] leading-relaxed" style={{ color: "#ccccdd" }}>
            Tags: internships for ece students · ece internships in bangalore · embedded systems internship · iot internship · vlsi internship bangalore · internship for electronics and communication engineering students · embedded ai internship · edge ai internship · pcb design internship · semiconductor internship bangalore
          </p>

        </article>
      </div>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 px-4 py-3 sm:hidden" style={{ background: "#ffffff", borderTop: "2px solid #e85400", boxShadow: "0 -4px 20px rgba(0,0,0,0.12)" }}>
        <Link href="/training-internship-engineering-students-bangalore" className="flex-1 rounded-lg py-2.5 text-center text-sm font-bold text-white" style={{ background: "#e85400" }}>
          Explore ECE Internship Programmes
        </Link>
        <a href="https://wa.me/919886094611?text=Hi%2C%20I%20read%20the%20ECE%20internship%20guide%20and%20want%20to%20know%20more" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white" style={{ background: "#25D366" }} aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="tel:+919886094611" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: "#f5f6fa", border: "1px solid #e4e4ef" }} aria-label="Call">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"/></svg>
        </a>
      </div>
    </>
  );
}
