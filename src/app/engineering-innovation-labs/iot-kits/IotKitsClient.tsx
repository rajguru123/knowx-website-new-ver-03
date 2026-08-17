"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Kits — Child page under Engineering Innovation Labs / IoT Lab Setup family
 * URL: /engineering-innovation-labs/iot-kits/
 *
 * Step 2 — Section 5 built: Our IoT Kits (all 6 cards + click-to-enlarge lightbox).
 * Sections 6–14 remain as placeholders.
 *
 * KIT IMAGES — drop-in spec (per kit):
 *   Path:   public/images/iot-kits/kit-<slug>.jpg
 *   Source: 1200×1200px (1:1 square), JPG
 *   Same file powers both the 320×320 card thumbnail and the up-to-900×900 lightbox.
 *
 * Each kit has a stable id (e.g. id="esp32-professional-iot-kit") for cross-page
 * deep-linking from the Setup and Equipment pages.
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

/* SECTION 5 — Our IoT Kits (6 cards) */
type KitTint = "green" | "blue" | "amber" | "teal";
type Kit = {
  id: string;
  title: string;
  badge: string;
  imgSrc: string;
  imgAlt: string;
  facts: string[];
  tint: KitTint;
  popular?: boolean;
};

const kits: Kit[] = [
  {
    id: "iot-starter-kit",
    title: "IoT Starter Kit",
    badge: "Beginners",
    imgSrc: "/images/iot-kits/kit-iot-starter.jpg",
    imgAlt: "IoT Starter Kit — ESP32 based development kit for engineering students",
    facts: ["ESP32 based", "30+ Experiments", "10 Mini Projects", "Wi-Fi & Bluetooth", "Beginner Friendly", "Manual & Source Code"],
    tint: "green",
  },
  {
    id: "esp32-professional-iot-kit",
    title: "ESP32 Professional IoT Kit",
    badge: "Most Popular",
    imgSrc: "/images/iot-kits/kit-esp32-professional.jpg",
    imgAlt: "ESP32 Professional IoT Kit — 60+ experiments and 25 industry projects",
    facts: ["60+ Experiments", "25 Industry Projects", "40+ Modules", "MQTT, HTTP/REST", "Cloud & Dashboards", "Manual & Source Code"],
    tint: "green",
    popular: true,
  },
  {
    id: "industrial-iot-kit",
    title: "Industrial IoT Kit",
    badge: "Advanced",
    imgSrc: "/images/iot-kits/kit-industrial-iot.jpg",
    imgAlt: "Industrial IoT Kit — ESP32, STM32 and Raspberry Pi for Industry 4.0 projects",
    facts: ["80+ Experiments", "30 Industry 4.0 Projects", "ESP32, STM32, RPi", "Industrial Sensors", "SCADA / Cloud", "Manual & Source Code"],
    tint: "amber",
  },
  {
    id: "edge-ai-computer-vision-kit",
    title: "Knowx Edge AI & Computer Vision Kit",
    badge: "Powered by Raspberry Pi",
    imgSrc: "/images/iot-kits/kit-edge-ai-computer-vision.jpg",
    imgAlt: "Knowx Edge AI & Computer Vision Kit — Raspberry Pi based kit for AI, vision, voice and robotics projects",
    facts: ["50+ Hands-On Experiments", "25+ AI & Edge Projects", "Computer Vision + Voice AI", "Robotics + IoT", "450+ Components & Accessories", "Complete Manual with Source Code"],
    tint: "teal",
  },
  {
    id: "stm32-embedded-systems-kit",
    title: "STM32 Embedded Systems Kit",
    badge: "Embedded",
    imgSrc: "/images/iot-kits/kit-stm32-embedded.jpg",
    imgAlt: "STM32 Embedded Systems Kit — real-time systems and industrial embedded applications",
    facts: ["STM32 Platform", "Embedded C / C++", "RTOS & Peripherals", "Industrial Comms", "Automotive Applications", "Manual & Source Code"],
    tint: "blue",
  },
  {
    id: "smart-factory-learning-platform",
    title: "Smart Factory Learning Platform",
    badge: "Industry 4.0",
    imgSrc: "/images/iot-kits/kit-smart-factory.jpg",
    imgAlt: "Smart Factory Learning Platform — Industry 4.0 digital factory and predictive maintenance kit",
    facts: ["Industry 4.0 Platform", "Digital Factory Simulation", "Machine Vision", "Predictive Maintenance", "Smart Manufacturing", "Manual & Source Code"],
    tint: "amber",
  },
];

export default function IotKitsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [lightboxKit, setLightboxKit] = useState<Kit | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        setLightboxKit(null);
      }
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
              <h1 className={styles.heroHeadline}>
                IoT Kits for Engineering{" "}
                <span className={styles.heroHeadlineAccent}>Students &amp; Colleges</span>
              </h1>
              <p className={styles.heroSubhead}>
                Build practical IoT skills with ready-to-use kits including
                development boards, sensors, communication modules, experiments,
                projects and learning resources.
              </p>
              <div className={styles.heroCtaRow}>
                <a href="#our-kits" className={styles.heroCtaPrimary}>Explore IoT Kits</a>
                <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Request Institutional Quote</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image
                src="/images/iot-kits/hero-iot-kit.jpg"
                alt="KnowX IoT Development Kit with ESP32 board, sensors, breadboard and LCD display"
                width={1280}
                height={960}
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 520px"
                className={styles.heroImage}
              />
            </div>
          </div>

          <ul className={styles.heroTrustStrip} aria-label="IoT kit highlights">
            {heroTrust.map((item) => (
              <li key={item} className={styles.heroTrustItem}>
                <span className={styles.heroTrustDot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* S2 QUICK ANSWER */}
      <section className={styles.s2} id="quick-answer">
        <div className={styles.s2Inner}>
          <div className={styles.s2Icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></svg>
          </div>
          <div className={styles.s2Content}>
            <h2 className={styles.s2Heading}>What Is an IoT Kit?</h2>
            <p className={styles.s2Body}>
              An IoT kit is a ready-to-use hardware and learning package that
              enables students to build, test and demonstrate Internet of Things
              applications. It typically includes development boards, sensors,
              communication modules, software resources, experiments, projects
              and learning materials.
            </p>
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
          <p className={styles.s3Institutional}>
            Knowx IoT kits can be deployed for engineering departments,
            laboratory batches, practical courses, project development,
            innovation centres and advanced technology programs — supporting
            batch-level practical training, department laboratories, mini and
            final-year projects, and Industry 4.0 programs.
          </p>
        </div>
      </section>

      {/* S4 CHOOSE THE RIGHT KIT */}
      <section className={styles.s4} id="choose-right-kit">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>Choose the Right IoT Kit</h2>
          <p className={styles.s4Intro}>
            A quick reference to help you match your student profile, focus
            area and objectives to the right Knowx IoT kit.
          </p>
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

      {/* SECTION 5 — OUR IOT KITS */}
      <section className={styles.s5} id="our-kits">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>Our IoT Kits</h2>
          <p className={styles.s5Intro}>
            Six purpose-built IoT kits spanning first-year fundamentals through
            Industry 4.0 and Edge AI. Each kit includes hardware, structured
            experiments, projects, and a complete manual with source code.
            Click any image to view it larger.
          </p>

          <div className={styles.s5Grid}>
            {kits.map((kit) => (
              <div key={kit.id} id={kit.id} className={`${styles.s5Card} ${kit.popular ? styles.s5CardPopular : ""}`}>
                {kit.popular && <span className={styles.s5PopularTag}>Most Popular</span>}

                <button type="button" className={styles.s5ImgBtn} onClick={() => setLightboxKit(kit)} aria-label={`View larger image of ${kit.title}`}>
                  <Image
                    src={kit.imgSrc}
                    alt={kit.imgAlt}
                    width={320}
                    height={320}
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className={styles.s5Img}
                  />
                  <span className={styles.s5ImgZoom} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>
                  </span>
                </button>

                <div className={styles.s5CardBody}>
                  <div className={styles.s5BadgeRow}>
                    <span className={`${styles.s5Badge} ${styles[`s5Badge_${kit.tint}`]}`}>{kit.badge}</span>
                  </div>
                  <h3 className={styles.s5CardTitle}>{kit.title}</h3>
                  <ul className={styles.s5Facts}>
                    {kit.facts.map((f) => (
                      <li key={f} className={styles.s5Fact}>
                        <span className={`${styles.s5FactDot} ${styles[`s5FactDot_${kit.tint}`]}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button type="button" onClick={openModal} className={`${styles.s5Cta} ${styles[`s5Cta_${kit.tint}`]}`}>
                    View {kit.title.split(" ")[0]} Kit →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholders S6–S14 */}
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="student-projects">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S6</div><h2 className={styles.placeholderTitle}>What Can Students Build With IoT Kits?</h2><p className={styles.placeholderNote}>Step 3 — Beginner / Connected / Advanced project categories</p></div>
      </section>
      <section className={styles.placeholder} id="kit-finder">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S7</div><h2 className={styles.placeholderTitle}>IoT Kits by Department &amp; Academic Level</h2><p className={styles.placeholderNote}>Step 3 — Combined department × level finder matrix</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="whats-included">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S8</div><h2 className={styles.placeholderTitle}>What's Included in an IoT Kit?</h2><p className={styles.placeholderNote}>Step 3 — Category checklist with "depending on the kit" accuracy notes</p></div>
      </section>
      <section className={styles.placeholder} id="compare-kits">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S9</div><h2 className={styles.placeholderTitle}>Compare IoT Kits</h2><p className={styles.placeholderNote}>Step 4 — Full inline comparison table, not gated</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="kits-vs-equipment">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S10</div><h2 className={styles.placeholderTitle}>IoT Kits vs Individual IoT Equipment</h2><p className={styles.placeholderNote}>Step 4 — Real cross-link to IoT Lab Equipment page</p></div>
      </section>
      <section className={styles.placeholder} id="faculty-resources">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S11</div><h2 className={styles.placeholderTitle}>Faculty Resources &amp; Training</h2><p className={styles.placeholderNote}>Step 4 — Manuals, guides, source code, assessment resources</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="how-to-choose">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S12</div><h2 className={styles.placeholderTitle}>How to Choose an IoT Kit</h2><p className={styles.placeholderNote}>Step 4 — 10-question decision checklist</p></div>
      </section>
      <section className={styles.placeholder} id="faq">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S13</div><h2 className={styles.placeholderTitle}>Frequently Asked Questions</h2><p className={styles.placeholderNote}>Step 5 — 14 questions + FAQPage + BreadcrumbList + ItemList JSON-LD</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="cta">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S14</div><h2 className={styles.placeholderTitle}>Get an IoT Kit Recommendation</h2><p className={styles.placeholderNote}>Step 5 — Final CTA banner + cross-links to Setup &amp; Equipment pages</p></div>
      </section>

      {/* LIGHTBOX */}
      {lightboxKit && (
        <div className={styles.lightboxBackdrop} onClick={() => setLightboxKit(null)} role="dialog" aria-modal="true" aria-label={`${lightboxKit.title} — enlarged image`}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.lightboxClose} onClick={() => setLightboxKit(null)} aria-label="Close">×</button>
            <Image
              src={lightboxKit.imgSrc}
              alt={lightboxKit.imgAlt}
              width={900}
              height={900}
              sizes="(max-width: 900px) 90vw, 900px"
              className={styles.lightboxImg}
            />
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
