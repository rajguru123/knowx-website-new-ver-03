"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "What We Offer", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tools", href: "#tools" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: "🔌",
    title: "Arduino / ESP32 / Raspberry Pi / TI Boards",
    desc: "Microcontroller programming, sensor interfacing, embedded firmware",
    category: "Embedded",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    desc: "Python, TensorFlow, YOLO, scikit-learn — model training to deployment",
    category: "AI",
  },
  {
    icon: "📡",
    title: "IoT Systems with Backend",
    desc: "Real-time dashboards, MQTT, cloud integration, mobile apps",
    category: "IoT",
  },
  {
    icon: "💻",
    title: "Fullstack Web & App Development",
    desc: "React, Node.js, MongoDB, REST APIs, responsive design",
    category: "Web",
  },
  {
    icon: "📊",
    title: "Data Analytics Projects",
    desc: "Python, pandas, matplotlib, Power BI visualisations",
    category: "AI",
  },
  {
    icon: "📷",
    title: "AI-based Image & Video Processing",
    desc: "OpenCV, face recognition, object detection, YOLO real-time systems",
    category: "AI",
  },
  {
    icon: "⚙️",
    title: "Mechatronics — Mech + Electronics",
    desc: "Robotics, automation, motor control, sensor fusion",
    category: "Embedded",
  },
];

type GalleryCategory = "All" | "Arduino" | "AI" | "IoT" | "Web";

const GALLERY: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  tall?: boolean;
}[] = [
  {
    img: "/makerslab/images/food-spoilage-detection.webp",
    alt: "Food spoilage detection Arduino project Bangalore",
    title: "Food Spoilage Detection",
    subtitle: "Arduino Project",
    category: "Arduino",
    tall: true,
  },
  {
    img: "/makerslab/images/gsm-based-project.webp",
    alt: "Women safety GSM project Bangalore",
    title: "Women's Safety Device",
    subtitle: "GSM Based Project",
    category: "IoT",
  },
  {
    img: "/makerslab/images/raspbery-pi-projects.webp",
    alt: "Traffic management Raspberry Pi project",
    title: "Traffic Management System",
    subtitle: "Raspberry Pi Project",
    category: "AI",
  },
  {
    img: "/makerslab/images/esp-32-project.webp",
    alt: "Autonomous robot ESP32 project Bangalore",
    title: "Autonomous Robot",
    subtitle: "ESP32 Project",
    category: "Arduino",
  },
  {
    img: "/makerslab/images/ai-project.webp",
    alt: "Agriculture automation AI project Bangalore",
    title: "Agriculture Automation",
    subtitle: "AI / ML Project",
    category: "AI",
    tall: true,
  },
  {
    img: "/makerslab/images/health-monitoring-projects.webp",
    alt: "Health monitoring ESP32 project Bangalore",
    title: "Health Monitoring System",
    subtitle: "ESP32 Based",
    category: "IoT",
  },
  {
    img: "/makerslab/images/contactless-iot-doorbell.webp",
    alt: "Contactless IoT doorbell Raspberry Pi project",
    title: "Contactless IoT Doorbell",
    subtitle: "Raspberry Pi Project",
    category: "IoT",
  },
  {
    img: "/makerslab/images/arduino-based-project.webp",
    alt: "Arduino based engineering project Bangalore",
    title: "Arduino Based Project",
    subtitle: "Embedded Systems",
    category: "Arduino",
  },
  {
    img: "/makerslab/images/asset-monitoring-system.webp",
    alt: "Smart theft prevention asset monitoring IoT project",
    title: "Smart Theft Prevention",
    subtitle: "Asset Monitoring System",
    category: "IoT",
  },
  {
    img: "/makerslab/images/engineering-iot-project.webp",
    alt: "Smart public toilet monitoring IoT project Bangalore",
    title: "Smart Toilet Monitoring",
    subtitle: "IoT Project",
    category: "IoT",
  },
  {
    img: "/makerslab/images/raspberry-projects.webp",
    alt: "Raspberry Pi engineering project Bangalore",
    title: "Raspberry Pi Vision System",
    subtitle: "Image Processing",
    category: "AI",
  },
  {
    img: "/makerslab/images/electronic-based-projects.webp",
    alt: "Electronics based engineering project Bangalore",
    title: "Electronics Based Project",
    subtitle: "Circuit Design",
    category: "Arduino",
  },
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
  {
    q: "What is MAKERSLAB and how can it help engineering students?",
    a: "MAKERSLAB is a dedicated engineering student project lab in Bangalore run by Knowx Innovations. We provide end-to-end support for final year engineering projects across ECE, CSE, ISE, EEE, Mechatronics, and Mechanical branches — including hardware, code, circuit diagrams, and complete documentation.",
  },
  {
    q: "What types of engineering projects does MAKERSLAB support?",
    a: "MAKERSLAB supports Arduino projects, ESP32 IoT systems, Raspberry Pi projects, AI and machine learning projects using Python and TensorFlow, YOLO-based image processing, fullstack web development with React and Node.js, data analytics, and mechatronics projects. We have completed 500+ student projects including smart agriculture, health monitoring, home automation, face recognition, and vehicle tracking systems.",
  },
  {
    q: "Do you assist with final year engineering projects in Bangalore?",
    a: "Yes. MAKERSLAB specialises in final year engineering projects in Bangalore. Our team handles everything from idea validation and technology selection to prototype development, testing, and documentation — making us one of the most trusted project makers for VTU, Anna University, and other university students.",
  },
  {
    q: "I am looking for project makers near me in Bangalore. Can MAKERSLAB help?",
    a: "Yes. MAKERSLAB is located in Vijayanagar, Bangalore — easily accessible for students across the city. We provide in-person mentoring and hands-on lab support so you can walk in, discuss your project idea, and get started the same day.",
  },
  {
    q: "Can I build an IoT or AI-based project at MAKERSLAB?",
    a: "Absolutely. Our IoT project developers and AI/ML mentors guide you through building complete working systems — from sensor interfacing and microcontroller programming to cloud dashboards, mobile app integration, and AI model deployment.",
  },
  {
    q: "What engineering branches do you support?",
    a: "We support students from ECE, CSE, ISE, EEE, Mechatronics, Mechanical, Instrumentation, and Automobile Engineering branches. Whether you are doing BE, BTech, MTech, or Diploma, MAKERSLAB has the expertise to support your project.",
  },
  {
    q: "Is documentation and mentorship included?",
    a: "Yes. Every project at MAKERSLAB includes full source code, circuit diagrams, project report documentation, and presentation guidance — everything you need for your viva and final submission.",
  },
  {
    q: "What tools and technologies does MAKERSLAB use?",
    a: "We work with Python, TensorFlow, YOLO, OpenCV, React.js, Node.js, MongoDB, MySQL, Arduino IDE, Keil, ARM controllers, ESP32, Raspberry Pi, and Texas Instruments boards — covering the full stack from embedded hardware to cloud-connected applications.",
  },
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
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "", branch: "", mobile: "", idea: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const filteredGallery =
    activeCategory === "All"
      ? GALLERY
      : GALLERY.filter((g) => g.category === activeCategory);

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
          subject: "New Enquiry from MAKERSLAB – MakersLab Projects",
          from_name: "MAKERSLAB by Knowx",
          name: formState.name,
          branch: formState.branch,
          mobile: formState.mobile,
          project_idea: formState.idea,
          redirect: "false",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus("success");
        setFormState({ name: "", branch: "", mobile: "", idea: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div style={{ fontFamily: "'Barlow', 'Segoe UI', sans-serif", background: "#fff" }}>

      {/* ── GOOGLE FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@500;600;700&display=swap');

        * { box-sizing: border-box; }

        .ml-nav-link {
          color: #aaa;
          font-size: 13px;
          cursor: pointer;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
        }
        .ml-nav-link:hover { color: #FF6B1A; }

        .ml-hero-bg {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1109 100%);
          position: relative;
          overflow: hidden;
        }
        .ml-hero-bg::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -10%;
          width: 60%;
          height: 160%;
          background: radial-gradient(ellipse, rgba(255,107,26,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .ml-svc-card {
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 20px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          background: #fff;
        }
        .ml-svc-card:hover {
          border-color: #FF6B1A;
          box-shadow: 0 4px 24px rgba(255,107,26,0.1);
          transform: translateY(-2px);
        }

        .ml-gal-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          background: #f5f5f5;
          cursor: pointer;
        }
        .ml-gal-item:hover .ml-gal-overlay { opacity: 1; }
        .ml-gal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,107,26,0.88);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px;
        }

        .ml-tool-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 40px;
          padding: 8px 16px;
          white-space: nowrap;
          transition: border-color 0.2s;
        }
        .ml-tool-chip:hover { border-color: #FF6B1A; }

        .ml-faq-row {
          border: 1px solid #eee;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .ml-faq-row.open { border-color: #FF6B1A; }

        .ml-faq-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 16px 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .ml-input {
          width: 100%;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          color: #fff;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }
        .ml-input::placeholder { color: #555; }
        .ml-input:focus { border-color: #FF6B1A; }

        .ml-submit-btn {
          width: 100%;
          background: #FF6B1A;
          color: white;
          border: none;
          border-radius: 40px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .ml-submit-btn:hover { background: #e55a0d; }
        .ml-submit-btn:active { transform: scale(0.98); }
        .ml-submit-btn:disabled { background: #555; cursor: not-allowed; }

        .ml-cat-btn {
          padding: 7px 18px;
          border-radius: 40px;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid #eee;
          background: #fff;
          color: #666;
        }
        .ml-cat-btn.active {
          background: #FF6B1A;
          border-color: #FF6B1A;
          color: white;
          font-weight: 600;
        }
        .ml-cat-btn:not(.active):hover { border-color: #FF6B1A; color: #FF6B1A; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ml-fade { animation: fadeIn 0.35s ease both; }

        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ml-ticker-inner {
          display: flex;
          gap: 12px;
          animation: ticker 28s linear infinite;
          width: max-content;
        }
        .ml-ticker-wrap { overflow: hidden; }

        @media (max-width: 768px) {
          .ml-hide-mobile { display: none !important; }
          .ml-show-mobile { display: flex !important; }
          .ml-hero-grid { grid-template-columns: 1fr !important; }
          .ml-services-grid { grid-template-columns: 1fr 1fr !important; }
          .ml-about-grid { grid-template-columns: 1fr !important; }
          .ml-contact-grid { grid-template-columns: 1fr !important; }
          .ml-footer-grid { grid-template-columns: 1fr !important; }
          .ml-gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .ml-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        background: "#0f0f0f",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/makerslab-bangalore-engineering-student-projects/" style={{ textDecoration: "none" }}>
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#FF6B1A",
                letterSpacing: 3,
                lineHeight: 1,
              }}>MAKERSLAB</div>
              <div style={{ fontSize: 9, color: "#555", letterSpacing: 3, textTransform: "uppercase" }}>
                by Knowx Innovations
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="ml-hide-mobile" style={{ display: "flex", gap: 28 }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className="ml-nav-link" onClick={() => scrollTo(l.href.slice(1))}>
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            className="ml-hide-mobile"
            onClick={() => scrollTo("contact")}
            style={{
              background: "#FF6B1A",
              color: "white",
              border: "none",
              borderRadius: 40,
              padding: "9px 20px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Get Your Project →
          </button>

          {/* Hamburger */}
          <button
            className="ml-show-mobile"
            style={{ display: "none", background: "none", border: "none", color: "#FF6B1A", fontSize: 24, cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#1a1a1a", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className="ml-nav-link" style={{ fontSize: 15, textAlign: "left" }} onClick={() => scrollTo(l.href.slice(1))}>
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{ background: "#FF6B1A", color: "white", border: "none", borderRadius: 40, padding: "10px 20px", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", textAlign: "center" }}
            >
              Get Your Project →
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="ml-hero-bg" style={{ padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,107,26,0.12)",
            border: "1px solid rgba(255,107,26,0.35)",
            color: "#FF6B1A",
            fontSize: 11,
            padding: "5px 14px",
            borderRadius: 40,
            marginBottom: 20,
            letterSpacing: 1.5,
          }}>
            BANGALORE'S ENGINEERING PROJECT LAB
          </div>

          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            maxWidth: 700,
            marginBottom: 16,
          }}>
            MAKERSLAB –{" "}
            <span style={{ color: "#FF6B1A" }}>The best place</span>{" "}
            for engineering student project support in Bangalore.
          </h1>

          <p style={{ fontSize: 18, color: "#888", maxWidth: 560, marginBottom: 12, lineHeight: 1.6 }}>
            Get your projects made in Arduino, ESP32, Raspberry Pi, IoT, AI, ML, and more.
          </p>
          <p style={{ fontSize: 14, color: "#666", maxWidth: 580, marginBottom: 32, lineHeight: 1.7 }}>
            Backed by Knowx Innovations — 20+ years of real product engineering, 100+ client projects, and a team that knows the difference between a working prototype and a presentation slide.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "#FF6B1A", color: "white", border: "none",
                borderRadius: 40, padding: "14px 28px", fontSize: 15,
                fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
              }}
            >
              Start Your Project →
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              style={{
                background: "transparent", color: "#aaa",
                border: "1px solid #333", borderRadius: 40,
                padding: "14px 28px", fontSize: 15, fontFamily: "inherit", cursor: "pointer",
              }}
            >
              See Student Projects
            </button>
          </div>

          {/* Stats */}
          <div
            className="ml-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              marginTop: 48,
              paddingTop: 40,
              borderTop: "1px solid #222",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#FF6B1A",
                }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{
        background: "#FF6B1A",
        padding: "12px 24px",
        display: "flex",
        gap: 0,
        overflowX: "auto",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {["Arduino & ESP32", "Raspberry Pi", "AI / ML Projects", "IoT Systems", "Fullstack Web", "End-to-end Support", "All Engineering Branches"].map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 16px", whiteSpace: "nowrap" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", marginRight: 8 }}>·</span>}
            <span style={{ fontSize: 13, color: "white", fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>

      {/* ── INTRO / WHO WE ARE ── */}
      <section style={{ padding: "64px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="ml-hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}
        >
          <div>
            <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
              Who We Are
            </div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#111",
              marginBottom: 16,
              lineHeight: 1.2,
            }}>
              Bangalore's most trusted engineering student project makers
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
              Welcome to MakersLab, your one-stop destination for engineering student project makers in Bangalore. We are a dedicated makerspace for engineering students offering hands-on support for final year engineering projects across domains like IoT, AI/ML, Web Development, and Embedded Systems.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
              Whether you're searching for <strong>project makers near me</strong>, or need expert guidance on Arduino/ESP32, Raspberry Pi, TI microcontrollers, or AI-based image processing projects, we've got you covered. Our experienced team of IoT project developers, AI/ML project mentors, and web development experts ensure that your academic ideas evolve into industry-grade prototypes.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
              We support students from all engineering branches — ECE, CSE, ISE, EEE, Mechatronics, Mechanical, and Instrumentation — whether you need a <strong>mini project</strong>, a <strong>major final year project</strong>, or a working <strong>proof-of-concept prototype</strong> for your startup idea. Our lab in Vijayanagar, Bangalore is equipped to handle everything from microcontroller programming and sensor interfacing to cloud-connected IoT dashboards and deep learning model deployment.
            </p>
          </div>
          <div style={{
            background: "#fafafa",
            border: "1px solid #f0f0f0",
            borderRadius: 16,
            padding: 28,
          }}>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 16, fontWeight: 500 }}>
              Why students choose MAKERSLAB
            </div>
            {[
              "Real engineers mentor your project — not students or interns",
              "20+ years building actual IoT, AI, and embedded products for clients",
              "Hardware + Software + Documentation — all included",
              "500+ student projects completed across all branches",
              "Walk-in at Vijayanagar, Bangalore — or connect on WhatsApp",
              "Backed by Knowx Innovations, established 2005",
            ].map((item) => (
              <div key={item} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
                fontSize: 14,
                color: "#333",
                lineHeight: 1.5,
              }}>
                <span style={{ color: "#FF6B1A", fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                marginTop: 20,
                background: "#FF6B1A",
                color: "white",
                border: "none",
                borderRadius: 40,
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Talk to Us on WhatsApp →
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#fafafa", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
            What We Build
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "#111",
            marginBottom: 8,
          }}>
            Project domains we specialise in
          </h2>
          <p style={{ fontSize: 15, color: "#777", marginBottom: 36, maxWidth: 560 }}>
            Every domain handled with real hardware, working code, and proper documentation for your viva and submission.
          </p>
          <div
            className="ml-services-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
          >
            {SERVICES.map((s) => (
              <div key={s.title} className="ml-svc-card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 6, lineHeight: 1.4 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN BENEFIT ── */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="ml-about-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
          >
            <div style={{
              background: "#111",
              borderRadius: 16,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 160, height: 160,
                background: "rgba(255,107,26,0.08)",
                borderRadius: "50%",
              }} />
              <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>
                Who We Serve
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 40,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 20,
              }}>
                Built for students.<br />
                <span style={{ color: "#FF6B1A" }}>Backed by experts.</span>
              </div>
              {[
                "BE / BTech — CSE, ECE, EEE, ISE, Mech, Mechatronics",
                "MTech / Diploma students",
                "VTU, Anna University, and all university affiliations",
                "Engineering graduates building portfolios",
                "Budding entrepreneurs and ideators",
              ].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "8px 0", borderBottom: "1px solid #222",
                  fontSize: 13, color: "#aaa", lineHeight: 1.5,
                }}>
                  <span style={{ color: "#FF6B1A", flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
                Your Project, Our Expertise
              </div>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 700,
                color: "#111",
                marginBottom: 16,
                lineHeight: 1.2,
              }}>
                Have an idea but don't know where to start?
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                We also support students who have their own project idea but need technical guidance to make it real. Our <strong>project mentors in Bangalore</strong> work with you step by step — from selecting the right microcontroller or tech stack, to building, testing, and presenting a project that stands out.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                Whether you are in your 3rd semester or final year, whether you are from VTU, Anna University, or any other university, MAKERSLAB is ready to help you build a project you are proud to present.
              </p>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  marginTop: 24,
                  background: "transparent",
                  color: "#FF6B1A",
                  border: "2px solid #FF6B1A",
                  borderRadius: 40,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                Share Your Project Idea →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ background: "#fafafa", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
            Project Gallery
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "#111",
            marginBottom: 24,
          }}>
            See what our students have built
          </h2>

          {/* Category Filter */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`ml-cat-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div
            className="ml-gallery-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
          >
            {filteredGallery.map((item, i) => (
              <div
                key={item.img + i}
                className="ml-gal-item ml-fade"
                style={{ gridRow: item.tall ? "span 2" : "span 1" }}
              >
                <div style={{ position: "relative", width: "100%", paddingBottom: item.tall ? "130%" : "75%" }}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="ml-gal-overlay">
                  <div style={{ fontSize: 14, fontWeight: 700, color: "white", lineHeight: 1.3 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeCategory !== "All" && filteredGallery.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", color: "#888", fontSize: 15 }}>
              More {activeCategory} projects coming soon.
            </div>
          )}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" style={{ padding: "48px 24px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 24, textTransform: "uppercase", textAlign: "center" }}>
            Tools & Technologies We Work With
          </div>
          <div className="ml-ticker-wrap">
            <div className="ml-ticker-inner">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <div key={t.name + i} className="ml-tool-chip">
                  <div style={{ width: 28, height: 28, position: "relative", flexShrink: 0 }}>
                    <Image src={t.img} alt={t.name} fill sizes="28px" style={{ objectFit: "contain" }} />
                  </div>
                  <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: "#fafafa", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase", textAlign: "center" }}>
            FAQ
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "#111",
            marginBottom: 8,
            textAlign: "center",
          }}>
            Common questions from students
          </h2>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 36, textAlign: "center" }}>
            Direct answers — no jargon.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`ml-faq-row${openFaq === i ? " open" : ""}`}>
                <button
                  className="ml-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#111", lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    color: "#FF6B1A",
                    fontSize: 20,
                    fontWeight: 300,
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: openFaq === i ? "rotate(45deg)" : "none",
                  }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#555", lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#0f0f0f", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#FF6B1A", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
            Start Your Project
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 36,
          }}>
            Tell us your project idea — we'll WhatsApp you back
          </h2>
          <div
            className="ml-contact-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          >
            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                className="ml-input"
                type="text"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
              <input
                className="ml-input"
                type="text"
                placeholder="Branch (ECE / CSE / ISE / Mech...)"
                required
                value={formState.branch}
                onChange={(e) => setFormState({ ...formState, branch: e.target.value })}
              />
              <input
                className="ml-input"
                type="tel"
                placeholder="WhatsApp / Mobile Number"
                required
                value={formState.mobile}
                onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
              />
              <textarea
                className="ml-input"
                placeholder="Describe your project idea (Arduino, IoT, AI, Web...)"
                required
                rows={4}
                value={formState.idea}
                onChange={(e) => setFormState({ ...formState, idea: e.target.value })}
              />
              <button
                type="submit"
                className="ml-submit-btn"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Submit — We'll Contact You →"}
              </button>
              {formStatus === "success" && (
                <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80", padding: "12px 16px", borderRadius: 8, fontSize: 14 }}>
                  ✓ Thank you! We will WhatsApp you within a few hours.
                </div>
              )}
              {formStatus === "error" && (
                <div style={{ background: "rgba(255,107,26,0.1)", border: "1px solid rgba(255,107,26,0.3)", color: "#FF6B1A", padding: "12px 16px", borderRadius: 8, fontSize: 14 }}>
                  Something went wrong. Please call us directly: +91 98860 94611
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "Knowx Innovations Pvt Ltd\n#56/56, 2nd Floor, Pushpagiri Complex, 17th Cross, 8th Main, Vijayanagar, Bangalore – 560040",
                },
                {
                  icon: "📞",
                  label: "Call / WhatsApp",
                  value: "+91 98860 94611",
                  link: "tel:+919886094611",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "info@knowxindia.com",
                  link: "mailto:info@knowxindia.com",
                },
              ].map((info) => (
                <div key={info.label} style={{ display: "flex", gap: 16 }}>
                  <div style={{
                    width: 40, height: 40, background: "rgba(255,107,26,0.1)",
                    borderRadius: 10, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 18, flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>{info.label}</div>
                    {info.link ? (
                      <a href={info.link} style={{ fontSize: 15, color: "#FF6B1A", textDecoration: "none" }}>
                        {info.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 14, color: "#aaa", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div style={{ borderRadius: 12, overflow: "hidden", marginTop: 8 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9973588001353!2d77.53487287472076!3d12.972020487343409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddbad7bbaf5%3A0x7ec1d2f962e75fe9!2sKnowx%20Innovations%20Private%20Limited!5e0!3m2!1sen!2sin!4v1759822188730!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAKERSLAB by Knowx Innovations — Vijayanagar, Bangalore"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <div
          className="ml-footer-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 24px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 40,
          }}
        >
          <div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#FF6B1A",
              letterSpacing: 3,
            }}>MAKERSLAB</div>
            <div style={{ fontSize: 11, color: "#444", letterSpacing: 2, marginBottom: 12 }}>
              BY KNOWX INNOVATIONS PVT LTD
            </div>
            <div style={{ fontSize: 13, color: "#444", lineHeight: 1.8 }}>
              Vijayanagar, Bangalore – 560040<br />
              Engineering student project support since 2005.
            </div>
            <div style={{ fontSize: 12, color: "#333", marginTop: 16 }}>
              © {new Date().getFullYear()} Knowx Innovations Pvt Ltd. All rights reserved.
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, marginBottom: 14, textTransform: "uppercase" }}>
              Project Domains
            </div>
            {["Arduino Projects", "AI / ML Projects", "IoT Systems", "Raspberry Pi Projects", "Fullstack Web", "Mechatronics"].map((l) => (
              <div key={l} style={{ fontSize: 13, color: "#444", marginBottom: 8 }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 1, marginBottom: 14, textTransform: "uppercase" }}>
              Knowx Innovations
            </div>
            {[
              { label: "About Us", href: "https://www.knowxindia.com/about-us.php" },
              { label: "Training Programs", href: "https://www.knowxindia.com/training-internship-engineering-students-bangalore" },
              { label: "Internships", href: "https://www.knowxindia.com/internships-in-bangalore/" },
              { label: "IoT Services", href: "https://www.knowxindia.com/iot-product-development/" },
              { label: "Contact", href: "https://www.knowxindia.com/contact.php" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ display: "block", fontSize: 13, color: "#444", marginBottom: 8, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: "1px solid #111",
          padding: "14px 24px",
          textAlign: "center",
          fontSize: 11,
          color: "#333",
        }}>
          Engineering Student Projects in Bangalore · MAKERSLAB by Knowx · Vijayanagar · 560040
        </div>
      </footer>

    </div>
  );
}
