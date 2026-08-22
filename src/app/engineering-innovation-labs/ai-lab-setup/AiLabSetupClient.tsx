"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * AI Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/ai-lab-setup/
 *
 * Step 1 — Foundation build.
 *   - page.tsx metadata (separate file)
 *   - Section 1: Hero (breadcrumb + image placeholder, ready for real photo)
 *   - Section 2: What Is an AI Lab? (Quick Answer block)
 *   - Modal — fully built
 *   - Sections 3–16 — labeled placeholders
 *
 * HERO IMAGE — drop-in spec:
 *   Path:   public/images/ai-lab/hero-ai-lab.jpg
 *   Source: 1280×960px minimum (4:3 ratio), JPG
 *   Alt:    "KnowX AI Lab setup with NVIDIA Jetson, camera module and live computer vision output"
 *
 * CSS scope: .aik-scope
 */

const heroTrust = [
  "Multiple AI Platforms",
  "Hands-On Experiments",
  "Industry-Oriented Projects",
  "Faculty Training",
  "Complete Implementation",
];

export default function AiLabSetupClient() {
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
    <div className={`aik-scope ${styles.scope}`}>

      {/* SECTION 1 — HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link href="/engineering-innovation-labs" className={styles.breadcrumbLink}>Engineering Innovation Labs</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>AI Lab Setup</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.heroTag}>Complete AI Lab Setup · Engineering Colleges &amp; Universities</span>
              <h1 className={styles.heroHeadline}>
                AI Lab Setup for{" "}
                <span className={styles.heroHeadlineAccent}>Engineering Colleges &amp; Universities</span>
              </h1>
              <p className={styles.heroSubhead}>
                Build a future-ready artificial intelligence laboratory with AI
                learning kits, computing platforms, computer vision systems,
                Edge AI hardware, experiments, projects and faculty resources
                designed for hands-on engineering education.
              </p>
              <div className={styles.heroCtaRow}>
                <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Request AI Lab Proposal</button>
                <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Talk to an AI Lab Expert →</button>
              </div>
            </div>

            <div className={styles.heroRight}>
  <Image
    src="/images/ai-lab/hero-ai-lab.jpg"
    alt="KnowX AI Lab setup with NVIDIA Jetson, camera module and live computer vision output"
    width={1280}
    height={960}
    priority
    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 520px"
    className={styles.heroImage}
  />
</div>

          <ul className={styles.heroTrustStrip} aria-label="AI lab highlights">
            {heroTrust.map((item) => (
              <li key={item} className={styles.heroTrustItem}>
                <span className={styles.heroTrustDot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS AN AI LAB? */}
      <section className={styles.s2} id="what-is-ai-lab">
        <div className={styles.s2Inner}>
          <div className={styles.s2Icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></svg>
          </div>
          <div className={styles.s2Content}>
            <h2 className={styles.s2Heading}>What Is an AI Lab?</h2>
            <p className={styles.s2Body}>
              An AI laboratory is a practical learning environment where students
              develop, train, test and deploy artificial intelligence applications
              using computing hardware, AI software, datasets, development tools
              and hands-on projects. A modern engineering AI lab can include
              machine learning, deep learning, computer vision, generative AI,
              Edge AI, robotics and AIoT platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholders S3–S16 */}
      <section className={styles.placeholder} id="ai-lab-solutions">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S3</div><h2 className={styles.placeholderTitle}>Complete AI Lab Solutions</h2><p className={styles.placeholderNote}>Next — 6 cards: ML, Deep Learning, Computer Vision, Generative AI, Edge AI, Robotics/Physical AI</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="ai-lab-kits">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S4</div><h2 className={styles.placeholderTitle}>AI Lab Kits</h2><p className={styles.placeholderNote}>Next — Knowx Edge AI &amp; Computer Vision Kit (reused) + NVIDIA Jetson Orin Nano Super Edge AI Kit (new)</p></div>
      </section>
      <section className={styles.placeholder} id="ai-learning-path">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S5</div><h2 className={styles.placeholderTitle}>AI Learning Path</h2><p className={styles.placeholderNote}>Next — progression diagram</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="ai-lab-experiments">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S6</div><h2 className={styles.placeholderTitle}>AI Lab Experiments</h2><p className={styles.placeholderNote}>Next — 5 domains</p></div>
      </section>
      <section className={styles.placeholder} id="ai-projects">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S7</div><h2 className={styles.placeholderTitle}>AI Projects for Engineering Students</h2><p className={styles.placeholderNote}>Next — by difficulty</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="ai-lab-equipment">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S8</div><h2 className={styles.placeholderTitle}>AI Lab Equipment</h2><p className={styles.placeholderNote}>Next — equipment categories</p></div>
      </section>
      <section className={styles.placeholder} id="ai-software-stack">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S9</div><h2 className={styles.placeholderTitle}>AI Software &amp; Development Stack</h2><p className={styles.placeholderNote}>Next — tools and frameworks</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="ai-lab-finder">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S10</div><h2 className={styles.placeholderTitle}>AI Lab for Departments &amp; Academic Levels</h2><p className={styles.placeholderNote}>Next — finder matrix</p></div>
      </section>
      <section className={styles.placeholder} id="ai-lab-implementation">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S11</div><h2 className={styles.placeholderTitle}>Complete AI Lab Implementation</h2><p className={styles.placeholderNote}>Next — 9-step process</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="rpi-vs-jetson">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S12</div><h2 className={styles.placeholderTitle}>Raspberry Pi vs NVIDIA Jetson for AI Education</h2><p className={styles.placeholderNote}>Next — comparison table</p></div>
      </section>
      <section className={styles.placeholder} id="faculty-training">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S13</div><h2 className={styles.placeholderTitle}>Faculty Training &amp; Curriculum</h2><p className={styles.placeholderNote}>Next — training resources</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="why-knowx">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S14</div><h2 className={styles.placeholderTitle}>Why Choose Knowx?</h2><p className={styles.placeholderNote}>Next — differentiators (dark green)</p></div>
      </section>
      <section className={styles.placeholder} id="faq">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S15</div><h2 className={styles.placeholderTitle}>AI Lab FAQ</h2><p className={styles.placeholderNote}>Next — 10 questions + JSON-LD</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="cta">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S16</div><h2 className={styles.placeholderTitle}>Request AI Lab Proposal</h2><p className={styles.placeholderNote}>Next — final CTA + cross-links</p></div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="aik-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="aik-modal-title" className={styles.modalTitle}>Request AI Lab Proposal</h3>
            <p className={styles.modalSubtitle}>Share your requirements and our AI lab team will get in touch within one working day.</p>
            {submitState === "success" ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessMark}>✓</div>
                <div className={styles.modalSuccessTitle}>Proposal request received</div>
                <div className={styles.modalSuccessBody}>Thank you. Our AI lab team will reach out to you shortly.</div>
                <button type="button" className={styles.modalDoneBtn} onClick={() => setModalOpen(false)}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <input type="hidden" name="access_key" value="f2635df8-33a5-44ef-889c-9f823771927f" />
                <input type="hidden" name="subject" value="AI Lab Setup — Proposal Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — AI Lab Setup page" />
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
                  <label className={styles.modalLabel}>Department<input name="department" type="text" className={styles.modalInput} placeholder="CSE / AI & DS / ECE / EEE" /></label>
                  <label className={styles.modalLabel}>Number of Students<input name="students" type="text" className={styles.modalInput} placeholder="e.g. 60 per batch" /></label>
                </div>
                <label className={styles.modalLabel}>AI Lab Requirement / Message
                  <textarea name="message" className={styles.modalTextarea} rows={3} placeholder="New AI lab · Edge AI kits · GenAI · Computer vision · Not sure yet..." />
                </label>
                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us directly by email.</div>)}
                <button type="submit" disabled={submitting} className={styles.modalSubmit}>{submitting ? "Sending..." : "Send Proposal Request"}</button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about AI lab setup.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
