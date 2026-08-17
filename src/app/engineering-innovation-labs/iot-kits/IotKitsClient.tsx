"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Kits — Child page under Engineering Innovation Labs / IoT Lab Setup family
 * URL: /engineering-innovation-labs/iot-kits/
 *
 * Step 1 (updated) — Foundation build.
 *   - page.tsx metadata (separate file)
 *   - Section 1: Hero (breadcrumb + IMAGE placeholder, ready for real photo)
 *   - Section 2: Quick Answer — What Is an IoT Kit?
 *   - Section 3: Why Choose KnowX IoT Kits?
 *   - Section 4: Choose the Right IoT Kit (finder table)
 *   - Modal — fully built
 *   - Sections 5–14 — labeled placeholders
 *
 * HERO IMAGE — drop-in spec:
 *   Path:   public/images/iot-kits/hero-iot-kit.jpg
 *   Source: 1280×960px minimum (4:3 ratio), JPG
 *   Alt:    "KnowX IoT Development Kit with ESP32 board, sensors, breadboard and LCD display"
 *   To activate: uncomment the <Image> block below and delete the placeholder div.
 *
 * Each kit in Section 5 (Step 2) will get a stable id (e.g. id="esp32-professional-iot-kit")
 * so other pages (Setup, Equipment) can deep-link with #anchors once this page is live.
 */

/* 5-item trust strip — matches reference hero image exactly */
const heroTrust = [
  "Curriculum-Aligned Experiments",
  "Industry-Oriented Projects",
  "Complete Learning Resources",
  "For All Engineering Disciplines",
  "Trusted by Colleges Across India",
];

/* ─── Section 3 — Why Choose KnowX (6 pillars) ─── */
type WhyTint = "green" | "blue" | "amber" | "teal";
const whyItems: { title: string; body: string; tint: WhyTint; icon: JSX.Element }[] = [
  { title: "Hardware", body: "Development platforms, sensors, modules and connectivity hardware.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Experiments", body: "Structured practical experiments for hands-on learning.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6l-6 10a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-6-10V2"/><path d="M9 2h6M6 15h12"/></svg>) },
  { title: "Projects", body: "Mini projects, engineering projects and advanced industry-oriented applications depending on the kit.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { title: "Learning Resources", body: "Lab manuals, source code, documentation and student learning resources where included.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>) },
  { title: "Faculty Resources", body: "Instructor guides, handbooks and assessment resources depending on the kit.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M2 10v6c0 1 4 3 10 3s10-2 10-3v-6"/></svg>) },
  { title: "Technical Support", body: "Implementation and technical support for institutional deployments.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
];

/* ─── Section 4 — Choose the Right Kit finder table ─── */
const finderRows: { profile: string; focus: string; kit: string }[] = [
  { profile: "Beginners / First Year", focus: "IoT fundamentals, sensors, basic programming", kit: "IoT Starter Kit" },
  { profile: "Diploma / Polytechnic", focus: "Hands-on learning, embedded & IoT applications", kit: "IoT Starter Kit" },
  { profile: "CSE / ECE / EEE / ISE", focus: "Connected devices, cloud, APIs, dashboards, advanced IoT", kit: "ESP32 Professional IoT Kit" },
  { profile: "Advanced Projects", focus: "Complex applications, edge devices, data analytics", kit: "ESP32 Professional / Industrial IoT Kit" },
  { profile: "Industry 4.0", focus: "Industrial IoT, SCADA, predictive maintenance, smart factory", kit: "Industrial IoT Kit" },
  { profile: "AI / Computer Vision", focus: "Edge AI, machine learning, computer vision applications", kit: "Raspberry Pi Edge AI Kit" },
  { profile: "Embedded Systems", focus: "Real-time systems, RTOS, industrial applications", kit: "STM32 Embedded Systems Kit" },
];

export default function IotKitsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

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

      {/* ============================================================
          SECTION 1 — HERO (+ breadcrumb + image)
          ============================================================ */}
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

            {/* ── Hero image — placeholder, sized to real-photo spec ──
                To activate the real photo:
                1. Add public/images/iot-kits/hero-iot-kit.jpg (min 1280×960px, 4:3)
                2. Replace the placeholder div below with:

                <Image
                  src="/images/iot-kits/hero-iot-kit.jpg"
                  alt="KnowX IoT Development Kit with ESP32 board, sensors, breadboard and LCD display"
                  width={1280}
                  height={960}
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 520px"
                  className={styles.heroImage}
                />
            */}
            <div className={styles.heroRight}>
              <div className={styles.heroImagePlaceholder} role="img" aria-label="KnowX IoT Development Kit with ESP32 board, sensors, breadboard and LCD display">
                <svg viewBox="0 0 64 48" width="56" height="42" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="60" height="44" rx="4" />
                  <rect x="8" y="8" width="20" height="14" rx="2" />
                  <circle cx="44" cy="15" r="7" />
                  <path d="M2 34l14-10 10 8 8-6 14 10" />
                </svg>
                <span className={styles.heroImageLabel}>KnowX IoT Development Kit</span>
                <span className={styles.heroImageSub}>Real product photo coming soon · 1280 × 960 px</span>
              </div>
            </div>
          </div>

          {/* 5-item trust strip — full width below hero grid */}
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

      {/* ============================================================
          SECTION 2 — QUICK ANSWER: WHAT IS AN IOT KIT?
          ============================================================ */}
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

      {/* ============================================================
          SECTION 3 — WHY CHOOSE KNOWX IOT KITS?
          ============================================================ */}
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

      {/* ============================================================
          SECTION 4 — CHOOSE THE RIGHT IOT KIT (finder table)
          ============================================================ */}
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

      {/* ============================================================
          SECTIONS 5–14 — Placeholders (built in Steps 2–5)
          ============================================================ */}
      <section className={styles.placeholder} id="our-kits">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S5</div><h2 className={styles.placeholderTitle}>Our IoT Kits</h2><p className={styles.placeholderNote}>Step 2 — All 6 kit cards, each with a stable anchor id for cross-page deep-linking</p></div>
      </section>
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

      {/* ============================================================
          MODAL
          ============================================================ */}
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
