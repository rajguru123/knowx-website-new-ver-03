"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * AI Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/ai-lab-setup/
 *
 * Step 3 — Section 5 (AI Learning Path) + Section 6 (AI Lab Experiments) built.
 * Sections 7–16 remain as placeholders.
 */

const heroTrust = [
  "Multiple AI Platforms",
  "Hands-On Experiments",
  "Industry-Oriented Projects",
  "Faculty Training",
  "Complete Implementation",
];

type SolTint = "green" | "blue" | "amber" | "teal";
const aiSolutions: { title: string; body: string; tint: SolTint; icon: JSX.Element }[] = [
  { title: "Machine Learning", body: "Python, datasets, model development, classification and prediction.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 5-5"/></svg>) },
  { title: "Deep Learning", body: "Neural networks, training and inference.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><circle cx="18" cy="15" r="2"/><path d="M8 6l8 3M8 12l8-3M8 12l8 3M8 18l8-3"/></svg>) },
  { title: "Computer Vision", body: "OpenCV, object detection, image classification and tracking.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Generative AI", body: "LLMs, prompt engineering, AI applications and conversational systems.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>) },
  { title: "Edge AI", body: "Raspberry Pi and NVIDIA Jetson-based AI deployment.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Robotics & Physical AI", body: "Vision, sensors, motors and intelligent physical systems.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="12" height="10" rx="2"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/><path d="M9 8V5a3 3 0 0 1 6 0v3M4 13h2M18 13h2"/></svg>) },
];

type KitTint = "green" | "blue";
const aiKits: { title: string; badge: string; imgSrc: string; imgAlt: string; facts: string[]; progression: string; tint: KitTint }[] = [
  { title: "Knowx Edge AI & Computer Vision Kit", badge: "Powered by Raspberry Pi", imgSrc: "/images/iot-kits/kit-edge-ai-computer-vision.jpg", imgAlt: "Knowx Edge AI & Computer Vision Kit — Raspberry Pi based AI kit", facts: ["50+ Hands-On Experiments", "25+ AI & Edge Projects", "Computer Vision + Voice AI", "Robotics + IoT", "450+ Components & Accessories", "Complete Manual with Source Code"], progression: "Python → Vision → Voice → AI → Physical AI", tint: "green" },
  { title: "NVIDIA Jetson Orin Nano Super Edge AI Kit", badge: "Powered by NVIDIA Jetson", imgSrc: "/images/ai-lab/kit-jetson-orin-nano-super.jpg", imgAlt: "NVIDIA Jetson Orin Nano Super Edge AI Kit for engineering colleges", facts: ["67 TOPS AI Performance", "CUDA + TensorRT Acceleration", "Deep Learning & YOLO Vision", "LLM & Vision-Language Models", "GPU-Accelerated Robotics & Edge AI", "Complete Manual with Source Code"], progression: "Python → CUDA → Computer Vision → Deep Learning → Edge AI", tint: "blue" },
];

/* ─── Section 5 — AI Learning Path (progression) ─── */
const learningPath: string[] = [
  "AI Fundamentals",
  "Python for AI",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Generative AI",
  "Edge AI",
  "Physical AI / Robotics",
  "Industry Applications",
];

/* ─── Section 6 — AI Lab Experiments (5 domains) ─── */
type ExpTint = "green" | "blue" | "amber" | "teal";
const experimentDomains: { title: string; items: string[]; tint: ExpTint }[] = [
  { title: "Foundation Experiments", items: ["Python programming basics", "Data handling with NumPy/Pandas", "Data visualization", "Basic statistics for AI"], tint: "green" },
  { title: "Computer Vision Experiments", items: ["Image classification", "Object detection", "Face & gesture recognition", "Real-time video processing"], tint: "amber" },
  { title: "Edge AI Experiments", items: ["Model deployment on Raspberry Pi", "GPU-accelerated inference on Jetson", "Real-time edge inference", "Sensor + AI integration"], tint: "teal" },
  { title: "Generative AI Experiments", items: ["Prompt engineering", "Text generation with LLMs", "Conversational AI applications", "AI-assisted content generation"], tint: "blue" },
  { title: "Robotics & Physical AI Experiments", items: ["Vision-guided robotic control", "Sensor fusion", "Autonomous navigation basics", "AI-driven motor control"], tint: "green" },
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

      {/* S1 HERO */}
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
              <h1 className={styles.heroHeadline}>AI Lab Setup for{" "}<span className={styles.heroHeadlineAccent}>Engineering Colleges &amp; Universities</span></h1>
              <p className={styles.heroSubhead}>Build a future-ready artificial intelligence laboratory with AI learning kits, computing platforms, computer vision systems, Edge AI hardware, experiments, projects and faculty resources designed for hands-on engineering education.</p>
              <div className={styles.heroCtaRow}>
                <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Request AI Lab Proposal</button>
                <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Talk to an AI Lab Expert →</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image src="/images/ai-lab/hero-ai-lab.jpg" alt="KnowX AI Lab setup with NVIDIA Jetson, camera module and live computer vision output" width={1280} height={960} priority sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 520px" className={styles.heroImage} />
            </div>
          </div>
          <ul className={styles.heroTrustStrip} aria-label="AI lab highlights">
            {heroTrust.map((item) => (<li key={item} className={styles.heroTrustItem}><span className={styles.heroTrustDot} aria-hidden="true" />{item}</li>))}
          </ul>
        </div>
      </section>

      {/* S2 WHAT IS AN AI LAB */}
      <section className={styles.s2} id="what-is-ai-lab">
        <div className={styles.s2Inner}>
          <div className={styles.s2Icon} aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></svg></div>
          <div className={styles.s2Content}>
            <h2 className={styles.s2Heading}>What Is an AI Lab?</h2>
            <p className={styles.s2Body}>An AI laboratory is a practical learning environment where students develop, train, test and deploy artificial intelligence applications using computing hardware, AI software, datasets, development tools and hands-on projects. A modern engineering AI lab can include machine learning, deep learning, computer vision, generative AI, Edge AI, robotics and AIoT platforms.</p>
          </div>
        </div>
      </section>

      {/* S3 COMPLETE AI LAB SOLUTIONS */}
      <section className={styles.s3} id="ai-lab-solutions">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Complete AI Lab Solutions</h2>
          <p className={styles.s3Intro}>A modern AI laboratory spans multiple technology pillars — from foundational machine learning to advanced Edge AI and physical robotics.</p>
          <div className={styles.s3Grid}>
            {aiSolutions.map((s) => (
              <div key={s.title} className={`${styles.s3Card} ${styles[`s3Tint_${s.tint}`]}`}>
                <div className={styles.s3CardIcon} aria-hidden="true">{s.icon}</div>
                <h3 className={styles.s3CardTitle}>{s.title}</h3>
                <p className={styles.s3CardBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4 AI LAB KITS */}
      <section className={styles.s4} id="ai-lab-kits">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>AI Lab Kits</h2>
          <p className={styles.s4Intro}>Two Edge AI kit tiers designed to take students from AI fundamentals to GPU-accelerated deep learning and deployment.</p>
          <div className={styles.s4Grid}>
            {aiKits.map((kit) => (
              <div key={kit.title} className={`${styles.s4Card} ${styles[`s4CardTint_${kit.tint}`]}`}>
                <div className={styles.s4CardImgWrap}>
                  <Image src={kit.imgSrc} alt={kit.imgAlt} width={400} height={400} loading="lazy" sizes="(max-width: 768px) 100vw, 400px" className={styles.s4CardImg} />
                </div>
                <div className={styles.s4CardBody}>
                  <span className={`${styles.s4Badge} ${styles[`s4Badge_${kit.tint}`]}`}>{kit.badge}</span>
                  <h3 className={styles.s4CardTitle}>{kit.title}</h3>
                  <ul className={styles.s4Facts}>{kit.facts.map((f) => (<li key={f} className={styles.s4Fact}><span className={`${styles.s4FactDot} ${styles[`s4FactDot_${kit.tint}`]}`} aria-hidden="true" />{f}</li>))}</ul>
                  <p className={styles.s4Progression}><span className={styles.s4ProgressionLabel}>Learning progression:</span> {kit.progression}</p>
                  <button type="button" onClick={openModal} className={`${styles.s4Cta} ${styles[`s4Cta_${kit.tint}`]}`}>Request AI Lab Proposal</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — AI LEARNING PATH
          ============================================================ */}
      <section className={styles.s5} id="ai-learning-path">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>AI Learning Path</h2>
          <p className={styles.s5Intro}>
            A structured progression from AI fundamentals to industry-ready
            applications — the same pathway a Knowx AI lab is designed to
            support.
          </p>
          <div className={styles.s5Path} role="list" aria-label="AI learning path">
            {learningPath.map((step, i) => (
              <div key={step} className={styles.s5Step} role="listitem">
                <div className={styles.s5StepNum}>{i + 1}</div>
                <div className={styles.s5StepLabel}>{step}</div>
                {i < learningPath.length - 1 && <div className={styles.s5StepArrow} aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — AI LAB EXPERIMENTS
          ============================================================ */}
      <section className={styles.s6} id="ai-lab-experiments">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>AI Lab Experiments</h2>
          <p className={styles.s6Intro}>
            Experiments span five domains — from foundational programming to
            advanced Edge AI, generative AI and physical robotics.
          </p>
          <div className={styles.s6Grid}>
            {experimentDomains.map((d) => (
              <div key={d.title} className={`${styles.s6Card} ${styles[`s6Tint_${d.tint}`]}`}>
                <h3 className={styles.s6CardTitle}>{d.title}</h3>
                <ul className={styles.s6CardItems}>
                  {d.items.map((item) => (<li key={item} className={styles.s6CardItem}><span className={`${styles.s6Dot} ${styles[`s6Dot_${d.tint}`]}`} aria-hidden="true" />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholders S7–S16 */}
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
