"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // used for gallery + tools
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "What We Offer", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tools", href: "#tools" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const BANNER_SLIDES = [
  {
    img: "/makerslab/images/banner-1.jpg",
    heading: "Prototype Your Ideas with Arduino, ESP32 & Raspberry Pi",
    sub: "IoT, Automation, and Embedded projects — with full student mentorship.",
  },
  {
    img: "/makerslab/images/banner-2.jpg",
    heading: "Build Smart AI & ML Projects That Matter",
    sub: "From prediction to vision — hands-on learning with top AI tools and expert guidance.",
  },
  {
    img: "/makerslab/images/banner-3.jpg",
    heading: "Web & App Projects, Done the Right Way",
    sub: "Fullstack, mobile, and cloud app development support for engineering students.",
  },
];

const SERVICE_COLORS = [
  { grad: "linear-gradient(135deg, #FFF3EC 0%, #FFE4D0 100%)", iconBg: "#FF6B1A", iconColor: "#fff", titleColor: "#C2440A", descColor: "#7A3010", border: "#FFCBA8" },
  { grad: "linear-gradient(135deg, #EEF4FF 0%, #DBEAFE 100%)", iconBg: "#3B82F6", iconColor: "#fff", titleColor: "#1D4ED8", descColor: "#1E3A6E", border: "#BFDBFE" },
  { grad: "linear-gradient(135deg, #EDFBF4 0%, #D1FAE5 100%)", iconBg: "#10B981", iconColor: "#fff", titleColor: "#065F46", descColor: "#064E3B", border: "#A7F3D0" },
  { grad: "linear-gradient(135deg, #FDF4FF 0%, #F3E8FF 100%)", iconBg: "#A855F7", iconColor: "#fff", titleColor: "#7E22CE", descColor: "#581C87", border: "#E9D5FF" },
  { grad: "linear-gradient(135deg, #FFFBEC 0%, #FEF3C7 100%)", iconBg: "#F59E0B", iconColor: "#fff", titleColor: "#92400E", descColor: "#78350F", border: "#FDE68A" },
  { grad: "linear-gradient(135deg, #FFF0F3 0%, #FFE4E6 100%)", iconBg: "#F43F5E", iconColor: "#fff", titleColor: "#BE123C", descColor: "#9F1239", border: "#FECDD3" },
  { grad: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)", iconBg: "#14B8A6", iconColor: "#fff", titleColor: "#0F766E", descColor: "#134E4A", border: "#99F6E4" },
];

const SERVICES = [
  { emoji: "🔌", title: "Arduino / ESP32 / Raspberry Pi / TI Boards", desc: "Microcontroller programming, sensor interfacing, embedded firmware development", category: "Embedded" },
  { emoji: "🧠", title: "AI & Machine Learning", desc: "Python, TensorFlow, YOLO, scikit-learn — model training to deployment", category: "AI" },
  { emoji: "📡", title: "IoT Systems with Backend", desc: "Real-time dashboards, MQTT, cloud integration, mobile apps", category: "IoT" },
  { emoji: "💻", title: "Fullstack Web & App Development", desc: "React, Node.js, MongoDB, REST APIs, responsive design", category: "Web" },
  { emoji: "📊", title: "Data Analytics Projects", desc: "Python, pandas, matplotlib, Power BI visualisations", category: "AI" },
  { emoji: "📷", title: "AI-based Image & Video Processing", desc: "OpenCV, face recognition, object detection, YOLO real-time systems", category: "AI" },
  { emoji: "⚙️", title: "Mechatronics — Mech + Electronics", desc: "Robotics, automation, motor control, sensor fusion", category: "Embedded" },
];

type GalleryCategory = "All" | "Arduino" | "AI" | "IoT" | "Web";

const GALLERY: {
  img: string; alt: string; title: string; subtitle: string;
  category: GalleryCategory; tall?: boolean;
}[] = [
  { img: "/makerslab/images/food-spoilage-detection.webp", alt: "Food spoilage detection Arduino project Bangalore", title: "Food Spoilage Detection", subtitle: "Arduino Project", category: "Arduino", tall: true },
  { img: "/makerslab/images/gsm-based-project.webp", alt: "Women safety GSM project Bangalore", title: "Women's Safety Device", subtitle: "GSM Based Project", category: "IoT" },
  { img: "/makerslab/images/raspbery-pi-projects.webp", alt: "Traffic management Raspberry Pi project", title: "Traffic Management System", subtitle: "Raspberry Pi Project", category: "AI" },
  { img: "/makerslab/images/esp-32-project.webp", alt: "Autonomous robot ESP32 project Bangalore", title: "Autonomous Robot", subtitle: "ESP32 Project", category: "Arduino" },
  { img: "/makerslab/images/ai-project.webp", alt: "Agriculture automation AI project Bangalore", title: "Agriculture Automation", subtitle: "AI / ML Project", category: "AI", tall: true },
  { img: "/makerslab/images/health-monitoring-projects.webp", alt: "Health monitoring ESP32 project Bangalore", title: "Health Monitoring System", subtitle: "ESP32 Based", category: "IoT" },
  { img: "/makerslab/images/contactless-iot-doorbell.webp", alt: "Contactless IoT doorbell Raspberry Pi project", title: "Contactless IoT Doorbell", subtitle: "Raspberry Pi Project", category: "IoT" },
  { img: "/makerslab/images/arduino-based-project.webp", alt: "Arduino based engineering project Bangalore", title: "Arduino Based Project", subtitle: "Embedded Systems", category: "Arduino" },
  { img: "/makerslab/images/asset-monitoring-system.webp", alt: "Smart theft prevention asset monitoring IoT project", title: "Smart Theft Prevention", subtitle: "Asset Monitoring System", category: "IoT" },
  { img: "/makerslab/images/engineering-iot-project.webp", alt: "Smart public toilet monitoring IoT project Bangalore", title: "Smart Toilet Monitoring", subtitle: "IoT Project", category: "IoT" },
  { img: "/makerslab/images/raspberry-projects.webp", alt: "Raspberry Pi engineering project Bangalore", title: "Raspberry Pi Vision System", subtitle: "Image Processing", category: "AI" },
  { img: "/makerslab/images/electronic-based-projects.webp", alt: "Electronics based engineering project Bangalore", title: "Electronics Based Project", subtitle: "Circuit Design", category: "Arduino" },
];

const TOOLS = [
  { name: "Python", img: "/makerslab/tools/python-logo.png" },
  { name: "TensorFlow", img: "/makerslab/tools/tensor-flow.png" },
  { name: "YOLO", img: "/makerslab/tools/yolo.png" },
  { name: "OpenCV", img: "/makerslab/tools/open-cv.png" },
  { name: "React.js", img: "/makerslab/tools/react-js.png" },
  { name: "Raspberry Pi", img: "/makerslab/tools/raspberry-pi.png" },
  { name: "ESP32", img: "/makerslab/tools/esp-32.png" },
  { name: "MySQL", img: "/makerslab/tools/my-sql.png" },
  { name: "MongoDB", img: "/makerslab/tools/mongo-db.png" },
  { name: "Keil", img: "/makerslab/tools/keil.png" },
  { name: "ARM", img: "/makerslab/tools/arm-controller.png" },
  { name: "Texas Instruments", img: "/makerslab/tools/texas-instruments.png" },
];

const FAQS = [
  { q: "What is MAKERSLAB and how can it help engineering students?", a: "MAKERSLAB is a dedicated engineering student project lab in Bangalore run by Knowx Innovations. We provide end-to-end support for final year engineering projects across ECE, CSE, ISE, EEE, Mechatronics, and Mechanical branches — including hardware, code, circuit diagrams, and complete documentation." },
  { q: "What types of engineering projects does MAKERSLAB support?", a: "MAKERSLAB supports Arduino projects, ESP32 IoT systems, Raspberry Pi projects, AI and machine learning projects using Python and TensorFlow, YOLO-based image processing, fullstack web development with React and Node.js, data analytics, and mechatronics projects. We have completed 500+ student projects including smart agriculture, health monitoring, home automation, face recognition, and vehicle tracking systems." },
  { q: "Do you assist with final year engineering projects in Bangalore?", a: "Yes. MAKERSLAB specialises in final year engineering projects in Bangalore. Our team handles everything from idea validation and technology selection to prototype development, testing, and documentation — making us one of the most trusted project makers for VTU, Anna University, and other university students." },
  { q: "I am looking for project makers near me in Bangalore. Can MAKERSLAB help?", a: "Yes. MAKERSLAB is located in Vijayanagar, Bangalore — easily accessible for students across the city. We provide in-person mentoring and hands-on lab support so you can walk in, discuss your project idea, and get started the same day." },
  { q: "Can I build an IoT or AI-based project at MAKERSLAB?", a: "Absolutely. Our IoT project developers and AI/ML mentors guide you through building complete working systems — from sensor interfacing and microcontroller programming to cloud dashboards, mobile app integration, and AI model deployment." },
  { q: "What engineering branches do you support?", a: "We support students from ECE, CSE, ISE, EEE, Mechatronics, Mechanical, Instrumentation, and Automobile Engineering branches. Whether you are doing BE, BTech, MTech, or Diploma, MAKERSLAB has the expertise to support your project." },
  { q: "Is documentation and mentorship included?", a: "Yes. Every project at MAKERSLAB includes full source code, circuit diagrams, project report documentation, and presentation guidance — everything you need for your viva and final submission." },
  { q: "What tools and technologies does MAKERSLAB use?", a: "We work with Python, TensorFlow, YOLO, OpenCV, React.js, Node.js, MongoDB, MySQL, Arduino IDE, Keil, ARM controllers, ESP32, Raspberry Pi, and Texas Instruments boards — covering the full stack from embedded hardware to cloud-connected applications." },
];

const GALLERY_CATEGORIES: GalleryCategory[] = ["All", "Arduino", "AI", "IoT", "Web"];

const STATS = [
  { num: "500+", label: "Projects Completed" },
  { num: "20+", label: "Years Experience" },
  { num: "100+", label: "Real Client Products" },
  { num: "All Branches", label: "ECE · CSE · ISE · EEE" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function MakersLabClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: "", branch: "", mobile: "", idea: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const nextSlide = useCallback(() => setActiveSlide((s) => (s + 1) % BANNER_SLIDES.length), []);
  const prevSlide = () => setActiveSlide((s) => (s - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 4500);
    return () => clearInterval(t);
  }, [nextSlide]);

  const filteredGallery = activeCategory === "All" ? GALLERY : GALLERY.filter((g) => g.category === activeCategory);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f2635df8-33a5-44ef-889c-9f823771927f",
          subject: "New Enquiry from MAKERSLAB – Student Projects",
          from_name: "MAKERSLAB by Knowx",
          name: formState.name,
          branch: formState.branch,
          mobile: formState.mobile,
          project_idea: formState.idea,
          redirect: "false",
        }),
      });
      const data = await res.json();
      if (data.success) { setFormStatus("success"); setFormState({ name: "", branch: "", mobile: "", idea: "" }); }
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  }

  return (
    <div style={{ fontFamily: "'Barlow', 'Segoe UI', sans-serif", background: "#fff", fontSize: 16 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        .ml-nav-link { color: #aaa; font-size: 14px; cursor: pointer; transition: color 0.2s; background: none; border: none; padding: 0; font-family: inherit; }
        .ml-nav-link:hover { color: #FF6B1A; }

        .ml-svc-card { background: #fff; border: 1px solid #f0f0f0; border-radius: 16px; padding: 28px 24px; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .ml-svc-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.09); transform: translateY(-4px); border-color: #e8e8e8; }

        .ml-gal-item { position: relative; border-radius: 12px; overflow: hidden; background: #f0f0f0; cursor: pointer; }
        .ml-gal-item:hover .ml-gal-overlay { opacity: 1; }
        .ml-gal-overlay { position: absolute; inset: 0; background: rgba(255,107,26,0.9); opacity: 0; transition: opacity 0.3s; display: flex; flex-direction: column; justify-content: flex-end; padding: 20px; }

        .ml-tool-chip { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: #fff; border: 1.5px solid #f0f0f0; border-radius: 16px; padding: 20px 16px; min-width: 110px; transition: border-color 0.2s, box-shadow 0.2s; }
        .ml-tool-chip:hover { border-color: #FF6B1A; box-shadow: 0 4px 16px rgba(255,107,26,0.1); }

        .ml-faq-row { border: 1.5px solid #eee; border-radius: 12px; overflow: hidden; transition: border-color 0.2s; margin-bottom: 10px; }
        .ml-faq-row.open { border-color: #FF6B1A; box-shadow: 0 4px 20px rgba(255,107,26,0.08); }
        .ml-faq-btn { width: 100%; text-align: left; background: none; border: none; padding: 20px 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px; font-family: inherit; }

        .ml-input { width: 100%; background: #fff; border: 1.5px solid #e8e8e8; border-radius: 10px; color: #111; padding: 14px 16px; font-size: 16px; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .ml-input::placeholder { color: #bbb; }
        .ml-input:focus { border-color: #FF6B1A; }

        .ml-submit-btn { width: 100%; background: #FF6B1A; color: white; border: none; border-radius: 40px; padding: 16px 24px; font-size: 16px; font-weight: 700; font-family: inherit; cursor: pointer; transition: background 0.2s, transform 0.1s; letter-spacing: 0.3px; }
        .ml-submit-btn:hover { background: #e55a0d; }
        .ml-submit-btn:active { transform: scale(0.98); }
        .ml-submit-btn:disabled { background: #ccc; cursor: not-allowed; }

        .ml-cat-btn { padding: 9px 22px; border-radius: 40px; font-size: 14px; font-family: inherit; cursor: pointer; transition: all 0.2s; border: 1.5px solid #eee; background: #fff; color: #666; font-weight: 500; }
        .ml-cat-btn.active { background: #FF6B1A; border-color: #FF6B1A; color: white; font-weight: 700; }
        .ml-cat-btn:not(.active):hover { border-color: #FF6B1A; color: #FF6B1A; }

        .ml-slide { position: absolute; inset: 0; transition: opacity 0.8s ease; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .ml-fade-up { animation: fadeInUp 0.4s ease both; }

        @media (max-width: 768px) {
          .ml-hide-mob { display: none !important; }
          .ml-show-mob { display: flex !important; }
          .ml-2col { grid-template-columns: 1fr !important; }
          .ml-4col { grid-template-columns: 1fr 1fr !important; }
          .ml-3col { grid-template-columns: 1fr 1fr !important; }
          .ml-tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ background: "#0f0f0f", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/makerslab-bangalore-engineering-student-projects/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative", width: 140, height: 44, flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/makerslab/makers-logo.jpg" alt="MAKERSLAB by Knowx Innovations" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </Link>
          <div className="ml-hide-mob" style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className="ml-nav-link" onClick={() => scrollTo(l.href.slice(1))}>{l.label}</button>
            ))}
          </div>
          <button className="ml-hide-mob" onClick={() => scrollTo("contact")} style={{ background: "#FF6B1A", color: "white", border: "none", borderRadius: 40, padding: "10px 22px", fontSize: 14, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
            Get Your Project →
          </button>
          <button className="ml-show-mob" style={{ display: "none", background: "none", border: "none", color: "#FF6B1A", fontSize: 26, cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "#1a1a1a", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className="ml-nav-link" style={{ fontSize: 16, textAlign: "left" }} onClick={() => scrollTo(l.href.slice(1))}>{l.label}</button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{ background: "#FF6B1A", color: "white", border: "none", borderRadius: 40, padding: "12px 20px", fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
              Get Your Project →
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO CAROUSEL ── */}
      <section style={{ position: "relative", height: "clamp(480px, 60vw, 640px)", overflow: "hidden", background: "#111" }}>
        {BANNER_SLIDES.map((slide, i) => (
          <div key={i} className="ml-slide" style={{ opacity: activeSlide === i ? 1 : 0, zIndex: activeSlide === i ? 1 : 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.img} alt={slide.heading} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading={i === 0 ? "eager" : "lazy"} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.3) 100%)" }} />
          </div>
        ))}

        {/* Hero text */}
        <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
            <div style={{ display: "inline-block", background: "rgba(255,107,26,0.2)", border: "1px solid rgba(255,107,26,0.5)", color: "#FF6B1A", fontSize: 12, padding: "5px 16px", borderRadius: 40, marginBottom: 20, letterSpacing: 2 }}>
              BANGALORE'S ENGINEERING PROJECT LAB
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, maxWidth: 620, marginBottom: 16 }}>
              {BANNER_SLIDES[activeSlide].heading}
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", maxWidth: 500, marginBottom: 32, lineHeight: 1.7 }}>
              {BANNER_SLIDES[activeSlide].sub}
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("contact")} style={{ background: "#FF6B1A", color: "white", border: "none", borderRadius: 40, padding: "14px 32px", fontSize: 16, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
                Start Your Project →
              </button>
              <button onClick={() => scrollTo("gallery")} style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 40, padding: "14px 28px", fontSize: 16, fontFamily: "inherit", cursor: "pointer" }}>
                See Student Projects
              </button>
            </div>
          </div>
        </div>

        {/* Arrows */}
        {["prev","next"].map((dir) => (
          <button key={dir} onClick={dir === "prev" ? prevSlide : nextSlide}
            style={{ position: "absolute", top: "50%", [dir === "prev" ? "left" : "right"]: 20, transform: "translateY(-50%)", zIndex: 20, background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {dir === "prev" ? "‹" : "›"}
          </button>
        ))}

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", gap: 8 }}>
          {BANNER_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)}
              style={{ width: i === activeSlide ? 24 : 8, height: 8, borderRadius: 4, background: i === activeSlide ? "#FF6B1A" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", padding: "14px 40px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, color: "#FF6B1A", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#FF6B1A", padding: "13px 24px", display: "flex", gap: 0, overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {["Arduino & ESP32", "Raspberry Pi", "AI / ML Projects", "IoT Systems", "Fullstack Web", "End-to-end Support", "All Engineering Branches"].map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center", padding: "4px 16px", whiteSpace: "nowrap" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", marginRight: 16 }}>·</span>}
            <span style={{ fontSize: 14, color: "white", fontWeight: 600 }}>{item}</span>
          </div>
        ))}
      </div>

      {/* ── INTRO ── */}
      <section style={{ padding: "72px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="ml-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Who We Are</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", marginBottom: 20, lineHeight: 1.2 }}>
              Bangalore's most trusted engineering student project makers
            </h2>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              Welcome to MakersLab, your one-stop destination for engineering student project makers in Bangalore. We are a dedicated makerspace offering hands-on support for final year engineering projects across IoT, AI/ML, Web Development, and Embedded Systems.
            </p>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              Whether you're searching for <strong style={{ color: "#111" }}>project makers near me</strong>, or need expert guidance on Arduino/ESP32, Raspberry Pi, TI microcontrollers, or AI-based image processing projects, we've got you covered.
            </p>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.9 }}>
              We support students from all engineering branches — ECE, CSE, ISE, EEE, Mechatronics, Mechanical, and Instrumentation — whether you need a <strong style={{ color: "#111" }}>mini project</strong>, a <strong style={{ color: "#111" }}>major final year project</strong>, or a working <strong style={{ color: "#111" }}>proof-of-concept prototype</strong>.
            </p>
          </div>
          <div style={{ background: "#fafafa", border: "1.5px solid #f0f0f0", borderRadius: 20, padding: 32 }}>
            <div style={{ fontSize: 14, color: "#888", marginBottom: 20, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Why students choose MAKERSLAB</div>
            {[
              "Real engineers mentor your project — not students or interns",
              "20+ years building actual IoT, AI, and embedded products",
              "Hardware + Software + Documentation — all included",
              "500+ student projects completed across all branches",
              "Walk-in at Vijayanagar, Bangalore — or connect on WhatsApp",
              "Backed by Knowx Innovations, established 2005",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 0", borderBottom: "1px solid #f0f0f0", fontSize: 15, color: "#333", lineHeight: 1.6 }}>
                <span style={{ color: "#FF6B1A", fontWeight: 800, marginTop: 1, flexShrink: 0, fontSize: 17 }}>✓</span>
                {item}
              </div>
            ))}
            <button onClick={() => scrollTo("contact")} style={{ marginTop: 24, background: "#FF6B1A", color: "white", border: "none", borderRadius: 40, padding: "14px 24px", fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", width: "100%" }}>
              Talk to Us on WhatsApp →
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#f7f8fa", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>What We Build</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", marginBottom: 10 }}>
            Project domains we specialise in
          </h2>
          <p style={{ fontSize: 16, color: "#777", marginBottom: 40, maxWidth: 560 }}>
            Every domain handled with real hardware, working code, and proper documentation for your viva and submission.
          </p>
          <div className="ml-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {SERVICES.map((s, i) => {
              const c = SERVICE_COLORS[i % SERVICE_COLORS.length];
              return (
                <div key={s.title} className="ml-svc-card" style={{ background: c.grad, border: `1.5px solid ${c.border}`, borderRadius: 16, padding: "28px 24px", transition: "box-shadow 0.25s, transform 0.25s" }}>
                  <div style={{ width: 56, height: 56, background: c.iconBg, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 18, boxShadow: `0 4px 14px ${c.border}` }}>
                    {s.emoji}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: c.titleColor, marginBottom: 10, lineHeight: 1.4 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: c.descColor, lineHeight: 1.7, opacity: 0.9 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO CAN BENEFIT ── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="ml-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div style={{ background: "#111", borderRadius: 20, padding: 40, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(255,107,26,0.07)", borderRadius: "50%" }} />
              <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 14, textTransform: "uppercase", fontWeight: 600 }}>Who We Serve</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 38, fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
                Built for students.<br /><span style={{ color: "#FF6B1A" }}>Backed by experts.</span>
              </div>
              {["BE / BTech — CSE, ECE, EEE, ISE, Mech, Mechatronics", "MTech / Diploma students", "VTU, Anna University, and all university affiliations", "Engineering graduates building portfolios", "Budding entrepreneurs and ideators"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: "1px solid #1f1f1f", fontSize: 15, color: "#bbb", lineHeight: 1.6 }}>
                  <span style={{ color: "#FF6B1A", flexShrink: 0, fontWeight: 700 }}>→</span>{item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Your Project, Our Expertise</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#111", marginBottom: 18, lineHeight: 1.2 }}>
                Have an idea but don't know where to start?
              </h2>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.9, marginBottom: 18 }}>
                We also support students who have their own project idea but need technical guidance to make it real. Our <strong style={{ color: "#111" }}>project mentors in Bangalore</strong> work with you step by step — from selecting the right microcontroller or tech stack, to building, testing, and presenting a project that stands out.
              </p>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.9 }}>
                Whether you are in your 3rd semester or final year, from VTU, Anna University, or any other university — MAKERSLAB is ready to help you build a project you are proud to present.
              </p>
              <button onClick={() => scrollTo("contact")} style={{ marginTop: 28, background: "transparent", color: "#FF6B1A", border: "2px solid #FF6B1A", borderRadius: 40, padding: "13px 28px", fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
                Share Your Project Idea →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ background: "#f7f8fa", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Project Gallery</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", marginBottom: 24 }}>
            See what our students have built
          </h2>
          <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            {GALLERY_CATEGORIES.map((cat) => (
              <button key={cat} className={`ml-cat-btn${activeCategory === cat ? " active" : ""}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </div>
          <div className="ml-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {filteredGallery.map((item, i) => (
              <div key={item.img + i} className="ml-gal-item ml-fade-up" style={{ gridRow: item.tall ? "span 2" : "span 1" }}>
                <div style={{ position: "relative", width: "100%", paddingBottom: item.tall ? "130%" : "75%" }}>
                  <Image src={item.img} alt={item.alt} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="ml-gal-overlay">
                  <div style={{ fontSize: 16, fontWeight: 700, color: "white", lineHeight: 1.3 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          {activeCategory !== "All" && filteredGallery.length === 0 && (
            <div style={{ textAlign: "center", padding: "48px", color: "#aaa", fontSize: 16 }}>More {activeCategory} projects coming soon.</div>
          )}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" style={{ padding: "72px 24px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600, textAlign: "center" }}>Tools & Technologies We Work With</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, color: "#111", marginBottom: 12, textAlign: "center" }}>
            We work with the tools of the future
          </h2>
          <p style={{ fontSize: 16, color: "#888", marginBottom: 40, textAlign: "center" }}>
            15+ industry-standard tools across AI, IoT, Embedded, and Web development.
          </p>
        </div>

        {/* Slow scrolling ticker */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          {/* Fade edges */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div style={{ display: "flex", gap: 20, animation: "ml-ticker-slow 40s linear infinite", width: "max-content", padding: "8px 0" }}>
            {[...TOOLS, ...TOOLS, ...TOOLS].map((t, i) => (
              <div key={t.name + i} style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 12, background: "#fff", border: "1.5px solid #f0f0f0", borderRadius: 16,
                padding: "24px 20px", minWidth: 130, transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                <div style={{ width: 64, height: 64, position: "relative", flexShrink: 0 }}>
                  <Image src={t.img} alt={t.name} fill sizes="64px" style={{ objectFit: "contain" }} />
                </div>
                <span style={{ fontSize: 14, color: "#333", fontWeight: 600, textAlign: "center", whiteSpace: "nowrap" }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes ml-ticker-slow {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: "#f7f8fa", padding: "72px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600, textAlign: "center" }}>FAQ</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", marginBottom: 10, textAlign: "center" }}>
            Common questions from students
          </h2>
          <p style={{ fontSize: 16, color: "#888", marginBottom: 40, textAlign: "center" }}>Direct answers — no jargon.</p>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className={`ml-faq-row${openFaq === i ? " open" : ""}`}>
                <button className="ml-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#111", lineHeight: 1.5 }}>{faq.q}</span>
                  <span style={{ color: "#FF6B1A", fontSize: 24, fontWeight: 300, flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#555", lineHeight: 1.9 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#FFF8F3", padding: "72px 24px", borderTop: "3px solid #FF6B1A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Start Your Project</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, color: "#111", marginBottom: 40 }}>
            Tell us your project idea — we'll WhatsApp you back
          </h2>
          <div className="ml-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input className="ml-input" type="text" placeholder="Your Name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
              <input className="ml-input" type="text" placeholder="Branch (ECE / CSE / ISE / Mech...)" required value={formState.branch} onChange={(e) => setFormState({ ...formState, branch: e.target.value })} />
              <input className="ml-input" type="tel" placeholder="WhatsApp / Mobile Number" required value={formState.mobile} onChange={(e) => setFormState({ ...formState, mobile: e.target.value })} />
              <textarea className="ml-input" placeholder="Describe your project idea (Arduino, IoT, AI, Web...)" required rows={4} value={formState.idea} onChange={(e) => setFormState({ ...formState, idea: e.target.value })} />
              <button type="submit" className="ml-submit-btn" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Submit — We'll Contact You →"}
              </button>
              {formStatus === "success" && (
                <div style={{ background: "#EDFBF4", border: "1.5px solid #10B981", color: "#065F46", padding: "14px 18px", borderRadius: 10, fontSize: 15 }}>
                  ✓ Thank you! We will WhatsApp you within a few hours.
                </div>
              )}
              {formStatus === "error" && (
                <div style={{ background: "#FFF0F3", border: "1.5px solid #F43F5E", color: "#9F1239", padding: "14px 18px", borderRadius: 10, fontSize: 15 }}>
                  Something went wrong. Please call us: <strong>+91 98860 94611</strong>
                </div>
              )}
            </form>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { icon: "📍", label: "Address", value: "Knowx Innovations Pvt Ltd\n#56/56, 2nd Floor, Pushpagiri Complex,\n17th Cross, 8th Main, Vijayanagar,\nBangalore – 560040" },
                { icon: "📞", label: "Call / WhatsApp", value: "+91 98860 94611", link: "tel:+919886094611" },
                { icon: "✉️", label: "Email", value: "info@knowxindia.com", link: "mailto:info@knowxindia.com" },
              ].map((info) => (
                <div key={info.label} style={{ display: "flex", gap: 18 }}>
                  <div style={{ width: 48, height: 48, background: "#fff", border: "1.5px solid #FFE0CC", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: "#999", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{info.label}</div>
                    {info.link ? (
                      <a href={info.link} style={{ fontSize: 16, color: "#FF6B1A", textDecoration: "none", fontWeight: 600 }}>{info.value}</a>
                    ) : (
                      <div style={{ fontSize: 15, color: "#444", whiteSpace: "pre-line", lineHeight: 1.8 }}>{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1.5px solid #FFE0CC" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9193628822!2d77.5335!3d12.9753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddbad7bbaf5%3A0x7ec1d2f962e75fe9!2sKnowx%20Innovations%20Private%20Limited!5e0!3m2!1sen!2sin!4v1748000000000!5m2!1sen!2sin"
                  width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="MAKERSLAB by Knowx Innovations — #56/56, 17th Cross, 8th Main, Vijayanagar, Bangalore 560040" />
              </div>
              <a href="https://maps.app.goo.gl/yU5o4sRry2Jn2PxbA" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", marginTop: 10, textAlign: "center", fontSize: 13, color: "#FF6B1A", textDecoration: "none", fontWeight: 600 }}>
                📍 Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2d2d2d", borderTop: "3px solid #FF6B1A" }}>
        <div className="ml-3col" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ position: "relative", width: 160, height: 52, marginBottom: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/makerslab/makers-logo.jpg" alt="MAKERSLAB by Knowx Innovations" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(1.1)" }} />
            </div>
            <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, marginBottom: 14 }}>BY KNOWX INNOVATIONS PVT LTD</div>
            <div style={{ fontSize: 14, color: "#bbb", lineHeight: 1.9 }}>Vijayanagar, Bangalore – 560040<br />Engineering student project support since 2005.</div>
            <div style={{ fontSize: 13, color: "#999", marginTop: 18 }}>© {new Date().getFullYear()} Knowx Innovations Pvt Ltd. All rights reserved.</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 1, marginBottom: 16, textTransform: "uppercase", fontWeight: 600 }}>Project Domains</div>
            {["Arduino Projects", "AI / ML Projects", "IoT Systems", "Raspberry Pi Projects", "Fullstack Web", "Mechatronics"].map((l) => (
              <div key={l} style={{ fontSize: 14, color: "#bbb", marginBottom: 10 }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#FF6B1A", letterSpacing: 1, marginBottom: 16, textTransform: "uppercase", fontWeight: 600 }}>Knowx Innovations</div>
            {[
              { label: "About Us", href: "https://knowxindia.com/about-us.php" },
              { label: "Training Programs", href: "https://knowxindia.com/training-internship-engineering-students-bangalore" },
              { label: "Internships", href: "https://knowxindia.com/internships-in-bangalore/" },
              { label: "IoT Services", href: "https://knowxindia.com/iot-product-development/" },
              { label: "Contact", href: "https://knowxindia.com/contact.php" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ display: "block", fontSize: 14, color: "#bbb", marginBottom: 10, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #444", padding: "16px 24px", textAlign: "center", fontSize: 12, color: "#888" }}>
          Engineering Student Projects in Bangalore · MAKERSLAB by Knowx · Vijayanagar · 560040
        </div>
      </footer>

    </div>
  );
}
