"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Kits — Child page under Engineering Innovation Labs / IoT Lab Setup family
 * URL: /engineering-innovation-labs/iot-kits/
 *
 * FINAL BUILD — all 14 sections complete.
 *   9  Compare IoT Kits (full inline table)
 *   10 IoT Kits vs Individual IoT Equipment (real cross-link)
 *   11 Faculty Resources & Training
 *   12 How to Choose an IoT Kit (10-question checklist)
 *   13 FAQ (14 questions) + FAQPage + BreadcrumbList + ItemList JSON-LD
 *   14 Final CTA + cross-links to Setup & Equipment pages
 */

const heroTrust = [
  "Curriculum-Aligned Experiments",
  "Industry-Oriented Projects",
  "Complete Learning Resources",
  "For All Engineering Disciplines",
  "Trusted by Colleges Across India",
];

type WhyTint = "green" | "blue" | "amber" | "teal";
const whyItems: { title: string; body: string; tint: WhyTint; icon: JSX.Element }[] = [
  { title: "Hardware", body: "Development platforms, sensors, modules and connectivity hardware.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Experiments", body: "Structured practical experiments for hands-on learning.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6l-6 10a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-6-10V2"/><path d="M9 2h6M6 15h12"/></svg>) },
  { title: "Projects", body: "Mini projects, engineering projects and advanced industry-oriented applications depending on the kit.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { title: "Learning Resources", body: "Lab manuals, source code, documentation and student learning resources where included.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>) },
  { title: "Faculty Resources", body: "Instructor guides, handbooks and assessment resources depending on the kit.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M2 10v6c0 1 4 3 10 3s10-2 10-3v-6"/></svg>) },
  { title: "Technical Support", body: "Implementation and technical support for institutional deployments.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
];

const finderRows: { profile: string; focus: string; kit: string }[] = [
  { profile: "Beginners / First Year", focus: "IoT fundamentals, sensors, basic programming", kit: "IoT Starter Kit" },
  { profile: "Diploma / Polytechnic", focus: "Hands-on learning, embedded & IoT applications", kit: "IoT Starter Kit" },
  { profile: "CSE / ECE / EEE / ISE", focus: "Connected devices, cloud, APIs, dashboards, advanced IoT", kit: "ESP32 Professional IoT Kit" },
  { profile: "Advanced Projects", focus: "Complex applications, edge devices, data analytics", kit: "ESP32 Professional / Industrial IoT Kit" },
  { profile: "Industry 4.0", focus: "Industrial IoT, SCADA, predictive maintenance, smart factory", kit: "Industrial IoT Kit" },
  { profile: "AI / Computer Vision", focus: "Edge AI, computer vision, voice AI, robotics applications", kit: "Knowx Edge AI & Computer Vision Kit" },
  { profile: "Embedded Systems", focus: "Real-time systems, RTOS, industrial applications", kit: "STM32 Embedded Systems Kit" },
];

type KitTint = "green" | "blue" | "amber" | "teal";
type Kit = { id: string; title: string; badge: string; imgSrc: string; imgAlt: string; facts: string[]; tint: KitTint; popular?: boolean; };

const kits: Kit[] = [
  { id: "iot-starter-kit", title: "IoT Starter Kit", badge: "Beginners", imgSrc: "/images/iot-kits/kit-iot-starter.jpg", imgAlt: "IoT Starter Kit — ESP32 based development kit for engineering students", facts: ["ESP32 based", "30+ Experiments", "10 Mini Projects", "Wi-Fi & Bluetooth", "Beginner Friendly", "Manual & Source Code"], tint: "green" },
  { id: "esp32-professional-iot-kit", title: "ESP32 Professional IoT Kit", badge: "Most Popular", imgSrc: "/images/iot-kits/kit-esp32-professional.jpg", imgAlt: "ESP32 Professional IoT Kit — 60+ experiments and 25 industry projects", facts: ["60+ Experiments", "25 Industry Projects", "40+ Modules", "MQTT, HTTP/REST", "Cloud & Dashboards", "Manual & Source Code"], tint: "green", popular: true },
  { id: "industrial-iot-kit", title: "Industrial IoT Kit", badge: "Advanced", imgSrc: "/images/iot-kits/kit-industrial-iot.jpg", imgAlt: "Industrial IoT Kit — ESP32, STM32 and Raspberry Pi for Industry 4.0 projects", facts: ["80+ Experiments", "30 Industry 4.0 Projects", "ESP32, STM32, RPi", "Industrial Sensors", "SCADA / Cloud", "Manual & Source Code"], tint: "amber" },
  { id: "edge-ai-computer-vision-kit", title: "Knowx Edge AI & Computer Vision Kit", badge: "Powered by Raspberry Pi", imgSrc: "/images/iot-kits/kit-edge-ai-computer-vision.jpg", imgAlt: "Knowx Edge AI & Computer Vision Kit — Raspberry Pi based kit for AI, vision, voice and robotics projects", facts: ["50+ Hands-On Experiments", "25+ AI & Edge Projects", "Computer Vision + Voice AI", "Robotics + IoT", "450+ Components & Accessories", "Complete Manual with Source Code"], tint: "teal" },
  { id: "stm32-embedded-systems-kit", title: "STM32 Embedded Systems Kit", badge: "Embedded", imgSrc: "/images/iot-kits/kit-stm32-embedded.jpg", imgAlt: "STM32 Embedded Systems Kit — real-time systems and industrial embedded applications", facts: ["STM32 Platform", "Embedded C / C++", "RTOS & Peripherals", "Industrial Comms", "Automotive Applications", "Manual & Source Code"], tint: "blue" },
  { id: "smart-factory-learning-platform", title: "Smart Factory Learning Platform", badge: "Industry 4.0", imgSrc: "/images/iot-kits/kit-smart-factory.jpg", imgAlt: "Smart Factory Learning Platform — Industry 4.0 digital factory and predictive maintenance kit", facts: ["Industry 4.0 Platform", "Digital Factory Simulation", "Machine Vision", "Predictive Maintenance", "Smart Manufacturing", "Manual & Source Code"], tint: "amber" },
];

const projectCategories: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Smart Home Automation", body: "Connected lighting, appliance control, and home monitoring systems.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>) },
  { title: "Environmental Monitoring", body: "Air quality, temperature, humidity and weather station projects.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>) },
  { title: "Industrial Monitoring", body: "Machine health, vibration, and process monitoring applications.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
  { title: "Cloud Connected Applications", body: "Dashboards, mobile apps and remote monitoring over the cloud.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>) },
  { title: "Edge AI & Computer Vision", body: "Object detection, face recognition and on-device AI inference.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Predictive Maintenance", body: "Sensor-driven failure prediction and equipment health analytics.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 5-5"/></svg>) },
  { title: "Smart Factory Solutions", body: "Digital twins, machine vision and Industry 4.0 automation projects.", icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>) },
];

const deptFinder: { dept: string; kit: string }[] = [
  { dept: "CSE / ISE Students", kit: "ESP32 Professional IoT Kit" },
  { dept: "ECE Students", kit: "ESP32 Professional / STM32 Embedded Systems Kit" },
  { dept: "EEE Students", kit: "Industrial IoT Kit" },
  { dept: "AI / Data Science Students", kit: "Knowx Edge AI & Computer Vision Kit" },
  { dept: "Mechanical / Industrial Students", kit: "Smart Factory Learning Platform" },
];
const levelFinder: { level: string; kit: string }[] = [
  { level: "First Year Engineering", kit: "IoT Starter Kit" },
  { level: "Diploma / Polytechnic", kit: "IoT Starter Kit" },
  { level: "Undergraduate Students", kit: "ESP32 Professional IoT Kit" },
  { level: "Final Year Projects", kit: "Industrial IoT Kit / Edge AI Kit" },
  { level: "Research & Innovation", kit: "Smart Factory Learning Platform" },
];

const includedColA = ["Development Board & Modules", "Sensors & Actuators", "Communication Modules", "Software, Code & Libraries", "Experiments & Projects"];
const includedColB = ["Manuals & Documentation", "Circuit Diagrams", "Faculty Resources", "Assessment Resources", "Technical Support"];

const compareRows: { kit: string; experiments: string; projects: string; platform: string; bestFor: string }[] = [
  { kit: "IoT Starter Kit", experiments: "30+", projects: "10", platform: "ESP32", bestFor: "Beginners" },
  { kit: "ESP32 Professional IoT Kit", experiments: "60+", projects: "25", platform: "ESP32", bestFor: "UG Students" },
  { kit: "Industrial IoT Kit", experiments: "80+", projects: "30", platform: "ESP32 / STM32 / RPi", bestFor: "Industry 4.0" },
  { kit: "Knowx Edge AI & Computer Vision Kit", experiments: "50+", projects: "25+", platform: "Raspberry Pi", bestFor: "AI / CV" },
  { kit: "STM32 Embedded Systems Kit", experiments: "40+", projects: "15", platform: "STM32", bestFor: "Embedded Systems" },
  { kit: "Smart Factory Learning Platform", experiments: "35+", projects: "20", platform: "Multi-Platform", bestFor: "Industry 4.0 / Research" },
];

const facultyResources: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Instructor Guides", body: "Step-by-step teaching guides for every experiment and project.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M2 10v6c0 1 4 3 10 3s10-2 10-3v-6"/></svg>) },
  { title: "Lab Manuals", body: "Structured manuals mapped to curriculum outcomes.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>) },
  { title: "Source Code Repository", body: "Complete, tested source code for all experiments and projects.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>) },
  { title: "Assessment Resources", body: "Question banks, rubrics and evaluation templates.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4"/><path d="M9 16h6"/></svg>) },
  { title: "Presentation Decks", body: "Ready-to-use classroom slides for each module.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>) },
  { title: "Faculty Training & Support", body: "Onboarding sessions and technical support for teaching staff.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
];

const chooseQuestions = [
  "What is the student capacity / batch size?",
  "Which department(s) will use the kit?",
  "What is the students' academic level?",
  "How many experiments are required?",
  "Are mini or final-year projects included?",
  "Is Industrial IoT or Industry 4.0 required?",
  "Is Edge AI or Computer Vision required?",
  "Does the department already have a preferred platform?",
  "Is faculty training required?",
  "What level of ongoing technical support is needed?",
];

const faqs: { q: string; a: string }[] = [
  { q: "What is an IoT kit?", a: "An IoT kit is a ready-to-use hardware and learning package that enables students to build, test and demonstrate Internet of Things applications. It typically includes development boards, sensors, communication modules, software resources, experiments, projects and learning materials." },
  { q: "What is included in a Knowx IoT kit?", a: "Most Knowx IoT kits include a development board, sensors and actuators, communication modules, software and source code, structured experiments and projects, and a complete manual. Faculty resources and assessment materials are included depending on the kit." },
  { q: "Which IoT kit is best for beginners?", a: "The IoT Starter Kit is designed for first-year and diploma/polytechnic students, covering IoT fundamentals, basic sensor interfacing and beginner-friendly mini projects on the ESP32 platform." },
  { q: "Which IoT kit is best for final-year engineering projects?", a: "The Industrial IoT Kit and the Knowx Edge AI & Computer Vision Kit are best suited for final-year and advanced projects, covering industrial applications, edge AI, computer vision and Industry 4.0 use cases." },
  { q: "What is the Knowx Edge AI & Computer Vision Kit?", a: "The Knowx Edge AI & Computer Vision Kit is a Raspberry Pi based kit with 50+ hands-on experiments and 25+ AI and edge projects covering computer vision, voice AI, robotics and IoT, with 450+ components and a complete manual with source code." },
  { q: "Do IoT kits include source code and manuals?", a: "Yes. Every Knowx IoT kit includes a complete manual with source code, so students and faculty can follow structured experiments and projects without needing to write code from scratch." },
  { q: "Can IoT kits be used for VTU engineering colleges?", a: "Yes. Knowx IoT kits can support the practical and project requirements of VTU-affiliated engineering colleges across ECE, CSE, EEE, ISE and AI & ML programs." },
  { q: "What is the difference between an IoT kit and IoT lab equipment?", a: "IoT lab equipment refers to individual hardware components used to build a laboratory from scratch. An IoT kit is a ready-to-use package combining hardware with structured experiments, projects and learning resources for direct classroom use." },
  { q: "Do you provide faculty training for IoT kits?", a: "Yes. Faculty resources including instructor guides, lab manuals, presentation decks and training support are available to help teaching staff run practical sessions confidently." },
  { q: "Can Knowx recommend the right kit for our department?", a: "Yes. Share your student capacity, department, academic level and objectives, and our team will recommend the appropriate kit or combination of kits for your institution." },
  { q: "Are IoT kits suitable for research and innovation centres?", a: "Yes. The Smart Factory Learning Platform and Industrial IoT Kit are well suited for innovation centres and research programs focused on Industry 4.0 and advanced applications." },
  { q: "Can institutions order multiple different IoT kits together?", a: "Yes. Many institutions combine kits — for example, IoT Starter Kits for first-year batches alongside ESP32 Professional or Industrial IoT Kits for senior students and project work." },
  { q: "Do you provide institutional quotes for bulk orders?", a: "Yes. Knowx India provides institutional quotes based on student batch size, department requirements and the specific kits selected. Use the Request Institutional Quote button on this page to get started." },
  { q: "Can you supply IoT kits across India?", a: "Yes. Knowx India supplies and supports IoT kits for engineering institutions across India, with a strong regional presence in Bangalore and Karnataka." },
];

export default function IotKitsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [lightboxKit, setLightboxKit] = useState<Kit | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setModalOpen(false); setLightboxKit(null); }
    };
    if (modalOpen || lightboxKit) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, lightboxKit]);

  useEffect(() => {
    document.body.style.overflow = modalOpen || lightboxKit ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen, lightboxKit]);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSubmitState("idle");
    setModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setSubmitState("success"); form.reset(); }
      else setSubmitState("error");
    } catch { setSubmitState("error"); }
    finally { setSubmitting(false); }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://knowxindia.com/" },
      { "@type": "ListItem", position: 2, name: "Engineering Innovation Labs", item: "https://knowxindia.com/engineering-innovation-labs" },
      { "@type": "ListItem", position: 3, name: "IoT Kits", item: "https://knowxindia.com/engineering-innovation-labs/iot-kits" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: kits.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: k.title,
      url: `https://knowxindia.com/engineering-innovation-labs/iot-kits/#${k.id}`,
    })),
  };

  return (
    <div className={`iok-scope ${styles.scope}`}>

      {/* S1 HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link href="/engineering-innovation-labs" className={styles.breadcrumbLink}>Engineering Innovation Labs</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>IoT Kits</span>
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.heroTag}>Hands-On IoT Learning · Engineering Students &amp; Colleges</span>
              <h1 className={styles.heroHeadline}>IoT Kits for Engineering{" "}<span className={styles.heroHeadlineAccent}>Students &amp; Colleges</span></h1>
              <p className={styles.heroSubhead}>Build practical IoT skills with ready-to-use kits including development boards, sensors, communication modules, experiments, projects and learning resources.</p>
              <div className={styles.heroCtaRow}>
                <a href="#our-kits" className={styles.heroCtaPrimary}>Explore IoT Kits</a>
                <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Request Institutional Quote</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image src="/images/iot-kits/hero-iot-kit.jpg" alt="KnowX IoT Development Kit with ESP32 board, sensors, breadboard and LCD display" width={1280} height={960} priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 520px" className={styles.heroImage} />
            </div>
          </div>
          <ul className={styles.heroTrustStrip} aria-label="IoT kit highlights">
            {heroTrust.map((item) => (<li key={item} className={styles.heroTrustItem}><span className={styles.heroTrustDot} aria-hidden="true" />{item}</li>))}
          </ul>
        </div>
      </section>

      {/* S2 QUICK ANSWER */}
      <section className={styles.s2} id="quick-answer">
        <div className={styles.s2Inner}>
          <div className={styles.s2Icon} aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></svg></div>
          <div className={styles.s2Content}>
            <h2 className={styles.s2Heading}>What Is an IoT Kit?</h2>
            <p className={styles.s2Body}>An IoT kit is a ready-to-use hardware and learning package that enables students to build, test and demonstrate Internet of Things applications. It typically includes development boards, sensors, communication modules, software resources, experiments, projects and learning materials.</p>
          </div>
        </div>
      </section>

      {/* S3 WHY CHOOSE KNOWX */}
      <section className={styles.s3} id="why-knowx">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Why Choose Knowx IoT Kits?</h2>
          <div className={styles.s3Grid}>
            {whyItems.map((w) => (
              <div key={w.title} className={`${styles.s3Card} ${styles[`s3Tint_${w.tint}`]}`}>
                <div className={styles.s3CardIcon} aria-hidden="true">{w.icon}</div>
                <h3 className={styles.s3CardTitle}>{w.title}</h3>
                <p className={styles.s3CardBody}>{w.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.s3Institutional}>Knowx IoT kits can be deployed for engineering departments, laboratory batches, practical courses, project development, innovation centres and advanced technology programs — supporting batch-level practical training, department laboratories, mini and final-year projects, and Industry 4.0 programs.</p>
        </div>
      </section>

      {/* S4 CHOOSE THE RIGHT KIT */}
      <section className={styles.s4} id="choose-right-kit">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>Choose the Right IoT Kit</h2>
          <p className={styles.s4Intro}>A quick reference to help you match your student profile, focus area and objectives to the right Knowx IoT kit.</p>
          <div className={styles.s4Table} role="table" aria-label="Choose the right IoT kit">
            <div className={styles.s4HeaderRow} role="row">
              <div className={`${styles.s4Cell} ${styles.s4HProfile}`} role="columnheader">Profile</div>
              <div className={`${styles.s4Cell} ${styles.s4HFocus}`} role="columnheader">Focus</div>
              <div className={`${styles.s4Cell} ${styles.s4HKit}`} role="columnheader">Recommended Kit</div>
            </div>
            {finderRows.map((row, i) => (
              <div key={row.profile} className={`${styles.s4DataRow} ${i % 2 === 1 ? styles.s4RowAlt : ""}`} role="row">
                <div className={`${styles.s4Cell} ${styles.s4DProfile}`} role="cell"><span className={styles.s4MobileLabel}>Profile</span>{row.profile}</div>
                <div className={`${styles.s4Cell} ${styles.s4DFocus}`} role="cell"><span className={styles.s4MobileLabel}>Focus</span>{row.focus}</div>
                <div className={`${styles.s4Cell} ${styles.s4DKit}`} role="cell"><span className={styles.s4MobileLabel}>Recommended Kit</span><strong>{row.kit}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 OUR IOT KITS */}
      <section className={styles.s5} id="our-kits">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>Our IoT Kits</h2>
          <p className={styles.s5Intro}>Six purpose-built IoT kits spanning first-year fundamentals through Industry 4.0 and Edge AI. Each kit includes hardware, structured experiments, projects, and a complete manual with source code. Click any image to view it larger.</p>
          <div className={styles.s5Grid}>
            {kits.map((kit) => (
              <div key={kit.id} id={kit.id} className={`${styles.s5Card} ${kit.popular ? styles.s5CardPopular : ""}`}>
                {kit.popular && <span className={styles.s5PopularTag}>Most Popular</span>}
                <button type="button" className={styles.s5ImgBtn} onClick={() => setLightboxKit(kit)} aria-label={`View larger image of ${kit.title}`}>
                  <Image src={kit.imgSrc} alt={kit.imgAlt} width={320} height={320} loading="lazy" sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px" className={styles.s5Img} />
                  <span className={styles.s5ImgZoom} aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg></span>
                </button>
                <div className={styles.s5CardBody}>
                  <div className={styles.s5BadgeRow}><span className={`${styles.s5Badge} ${styles[`s5Badge_${kit.tint}`]}`}>{kit.badge}</span></div>
                  <h3 className={styles.s5CardTitle}>{kit.title}</h3>
                  <ul className={styles.s5Facts}>{kit.facts.map((f) => (<li key={f} className={styles.s5Fact}><span className={`${styles.s5FactDot} ${styles[`s5FactDot_${kit.tint}`]}`} aria-hidden="true" />{f}</li>))}</ul>
                  <button type="button" onClick={openModal} className={`${styles.s5Cta} ${styles[`s5Cta_${kit.tint}`]}`}>View {kit.title.split(" ")[0]} Kit →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6 STUDENT PROJECTS */}
      <section className={styles.s6} id="student-projects">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>What Can Students Build With IoT Kits?</h2>
          <p className={styles.s6Intro}>IoT kits support a wide range of practical projects across application domains — from home automation and environmental monitoring to industrial systems, edge AI and Industry 4.0 manufacturing.</p>
          <div className={styles.s6Grid}>
            {projectCategories.map((p) => (
              <div key={p.title} className={styles.s6Card}>
                <div className={styles.s6CardIcon} aria-hidden="true">{p.icon}</div>
                <h3 className={styles.s6CardTitle}>{p.title}</h3>
                <p className={styles.s6CardBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S7 KIT FINDER */}
      <section className={styles.s7} id="kit-finder">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>IoT Kits by Department &amp; Academic Level</h2>
          <p className={styles.s7Intro}>A quick way to find the right starting point based on your department or your students&apos; academic level.</p>
          <div className={styles.s7Panels}>
            <div className={styles.s7Panel}>
              <h3 className={styles.s7PanelTitle}>By Engineering Department</h3>
              <ul className={styles.s7PanelList}>{deptFinder.map((row) => (<li key={row.dept} className={styles.s7PanelItem}><span className={styles.s7PanelLabel}>{row.dept}</span><span className={styles.s7PanelArrow} aria-hidden="true">→</span><span className={styles.s7PanelKit}>{row.kit}</span></li>))}</ul>
            </div>
            <div className={styles.s7Panel}>
              <h3 className={styles.s7PanelTitle}>By Academic Level</h3>
              <ul className={styles.s7PanelList}>{levelFinder.map((row) => (<li key={row.level} className={styles.s7PanelItem}><span className={styles.s7PanelLabel}>{row.level}</span><span className={styles.s7PanelArrow} aria-hidden="true">→</span><span className={styles.s7PanelKit}>{row.kit}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* S8 WHAT'S INCLUDED */}
      <section className={styles.s8} id="whats-included">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>What&apos;s Included in an IoT Kit?</h2>
          <p className={styles.s8Intro}>Exact contents vary by kit — the checklist below covers what a Knowx IoT kit typically includes.</p>
          <div className={styles.s8Grid}>
            <ul className={styles.s8List}>{includedColA.map((item) => (<li key={item} className={styles.s8Item}><span className={styles.s8Check} aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>{item}</li>))}</ul>
            <ul className={styles.s8List}>{includedColB.map((item) => (<li key={item} className={styles.s8Item}><span className={styles.s8Check} aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>{item}</li>))}</ul>
          </div>
          <p className={styles.s8Note}>* Exact inclusions depend on the specific kit — see individual kit cards above for details.</p>
        </div>
      </section>

      {/* SECTION 9 — COMPARE IOT KITS */}
      <section className={styles.s9} id="compare-kits">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>Compare IoT Kits</h2>
          <p className={styles.s9Intro}>A side-by-side comparison of experiments, projects, platform and best-fit use case across all six Knowx IoT kits.</p>
          <div className={styles.s9TableWrap}>
            <table className={styles.s9Table}>
              <thead>
                <tr>
                  <th className={styles.s9Th}>Kit</th>
                  <th className={styles.s9Th}>Experiments</th>
                  <th className={styles.s9Th}>Projects</th>
                  <th className={styles.s9Th}>Platform</th>
                  <th className={styles.s9Th}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.kit} className={i % 2 === 1 ? styles.s9RowAlt : ""}>
                    <td className={`${styles.s9Td} ${styles.s9TdKit}`}>{row.kit}</td>
                    <td className={styles.s9Td}>{row.experiments}</td>
                    <td className={styles.s9Td}>{row.projects}</td>
                    <td className={styles.s9Td}>{row.platform}</td>
                    <td className={styles.s9Td}>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.s9CtaRow}>
            <button type="button" onClick={openModal} className={styles.s9CtaPrimary}>Get a Kit Recommendation</button>
          </div>
        </div>
      </section>

      {/* SECTION 10 — KITS VS EQUIPMENT */}
      <section className={styles.s10} id="kits-vs-equipment">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>IoT Kits vs. Individual IoT Equipment</h2>
          <div className={styles.s10Table} role="table" aria-label="IoT kits versus individual IoT equipment">
            <div className={styles.s10HeaderRow} role="row">
              <div className={`${styles.s10Cell} ${styles.s10HKits}`} role="columnheader">IoT Kits</div>
              <div className={`${styles.s10Cell} ${styles.s10HEquip}`} role="columnheader">Individual IoT Equipment</div>
            </div>
            <div className={styles.s10DataRow} role="row">
              <div className={styles.s10Cell} role="cell">Ready-to-use learning package</div>
              <div className={styles.s10Cell} role="cell">Individual hardware / components</div>
            </div>
            <div className={`${styles.s10DataRow} ${styles.s10RowAlt}`} role="row">
              <div className={styles.s10Cell} role="cell">Used for structured learning / projects</div>
              <div className={styles.s10Cell} role="cell">Used to build a laboratory</div>
            </div>
            <div className={styles.s10DataRow} role="row">
              <div className={styles.s10Cell} role="cell">Hardware + experiments + projects + resources</div>
              <div className={styles.s10Cell} role="cell">Boards, sensors, actuators, infrastructure</div>
            </div>
            <div className={`${styles.s10DataRow} ${styles.s10RowAlt}`} role="row">
              <div className={styles.s10Cell} role="cell">Students, faculty, departments and colleges</div>
              <div className={styles.s10Cell} role="cell">Mainly institutional procurement</div>
            </div>
          </div>
          <p className={styles.s10CrossLink}>
            Building a laboratory from scratch?{" "}
            <Link href="/engineering-innovation-labs/iot-lab-equipment" className={styles.s10CrossLinkAnchor}>Explore IoT Lab Equipment →</Link>
          </p>
        </div>
      </section>

      {/* SECTION 11 — FACULTY RESOURCES */}
      <section className={styles.s11} id="faculty-resources">
        <div className={styles.s11Inner}>
          <h2 className={styles.s11Heading}>Faculty Resources &amp; Training</h2>
          <p className={styles.s11Intro}>Every Knowx IoT kit is backed by resources that help faculty teach confidently and run practical sessions smoothly.</p>
          <div className={styles.s11Grid}>
            {facultyResources.map((f) => (
              <div key={f.title} className={styles.s11Card}>
                <div className={styles.s11CardIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.s11CardTitle}>{f.title}</h3>
                <p className={styles.s11CardBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — HOW TO CHOOSE */}
      <section className={styles.s12} id="how-to-choose">
        <div className={styles.s12Inner}>
          <h2 className={styles.s12Heading}>How to Choose an IoT Kit</h2>
          <ol className={styles.s12List}>
            {chooseQuestions.map((q, i) => (
              <li key={q} className={styles.s12Item}>
                <span className={styles.s12Num}>{i + 1}</span>
                <span className={styles.s12Text}>{q}</span>
              </li>
            ))}
          </ol>
          <div className={styles.s12CtaRow}>
            <button type="button" onClick={openModal} className={styles.s12CtaPrimary}>Get a Customized Kit Recommendation</button>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <section className={styles.s13} id="faq">
        <div className={styles.s13Inner}>
          <h2 className={styles.s13Heading}>IoT Kits — Frequently Asked Questions</h2>
          <div className={styles.s13List}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.s13Item}>
                <summary className={styles.s13Q}>
                  <span>{f.q}</span>
                  <span className={styles.s13QChevron} aria-hidden="true">+</span>
                </summary>
                <div className={styles.s13A}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section className={styles.s14} id="cta">
        <div className={styles.s14Inner}>
          <h2 className={styles.s14Heading}>Need Help Choosing the Right IoT Kit?</h2>
          <p className={styles.s14Body}>Tell us your department, student level, batch size and learning objectives. Our experts will recommend the best-fit IoT kit for your requirements.</p>
          <div className={styles.s14CtaRow}>
            <button type="button" onClick={openModal} className={styles.s14CtaPrimary}>Get Kit Recommendation</button>
            <button type="button" onClick={openModal} className={styles.s14CtaSecondary}>Request Institutional Quote</button>
          </div>
          <p className={styles.s14Link}>
            Also explore the{" "}
            <Link href="/engineering-innovation-labs/iot-lab-setup" className={styles.s14LinkAnchor}>Complete IoT Lab Setup</Link>
            {" "}and{" "}
            <Link href="/engineering-innovation-labs/iot-lab-equipment" className={styles.s14LinkAnchor}>IoT Lab Equipment</Link>
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxKit && (
        <div className={styles.lightboxBackdrop} onClick={() => setLightboxKit(null)} role="dialog" aria-modal="true" aria-label={`${lightboxKit.title} — enlarged image`}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.lightboxClose} onClick={() => setLightboxKit(null)} aria-label="Close">×</button>
            <Image src={lightboxKit.imgSrc} alt={lightboxKit.imgAlt} width={900} height={900} sizes="(max-width: 900px) 90vw, 900px" className={styles.lightboxImg} />
            <p className={styles.lightboxCaption}>{lightboxKit.title}</p>
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="iok-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="iok-modal-title" className={styles.modalTitle}>Request Institutional Quote</h3>
            <p className={styles.modalSubtitle}>Share your requirements and our team will get in touch within one working day.</p>
            {submitState === "success" ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessMark}>✓</div>
                <div className={styles.modalSuccessTitle}>Request received</div>
                <div className={styles.modalSuccessBody}>Thank you. Our team will reach out to you shortly.</div>
                <button type="button" className={styles.modalDoneBtn} onClick={() => setModalOpen(false)}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <input type="hidden" name="access_key" value="f2635df8-33a5-44ef-889c-9f823771927f" />
                <input type="hidden" name="subject" value="IoT Kits — Institutional Quote Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — IoT Kits page" />
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Full Name<input required name="name" type="text" className={styles.modalInput} placeholder="Your name" /></label>
                  <label className={styles.modalLabel}>Role<input name="role" type="text" className={styles.modalInput} placeholder="Principal / HoD / Lab In-charge" /></label>
                </div>
                <label className={styles.modalLabel}>Institution<input required name="institution" type="text" className={styles.modalInput} placeholder="Engineering college / university name" /></label>
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Email<input required name="email" type="email" className={styles.modalInput} placeholder="you@institution.edu" /></label>
                  <label className={styles.modalLabel}>Phone<input required name="phone" type="tel" className={styles.modalInput} placeholder="Contact number" /></label>
                </div>
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Department<input name="department" type="text" className={styles.modalInput} placeholder="ECE / CSE / EEE / ISE" /></label>
                  <label className={styles.modalLabel}>Number of Students<input name="students" type="text" className={styles.modalInput} placeholder="e.g. 60 per batch" /></label>
                </div>
                <label className={styles.modalLabel}>Which Kit(s) / Requirement
                  <textarea name="message" className={styles.modalTextarea} rows={3} placeholder="IoT Starter Kit, ESP32 Professional, Industrial IoT, not sure yet..." />
                </label>
                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us directly by email.</div>)}
                <button type="submit" disabled={submitting} className={styles.modalSubmit}>{submitting ? "Sending..." : "Send Quote Request"}</button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about IoT kits.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
