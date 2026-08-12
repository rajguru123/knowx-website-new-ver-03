"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/iot-lab-setup/
 *
 * Step 1 — Foundation build.
 *   - page.tsx metadata (separate file)
 *   - Hero section (S1) — fully built
 *   - Modal — fully built with extended IoT-specific fields
 *   - Sections 2–14 — labeled placeholders ready for content steps
 *
 * Image placeholders:
 *   S2  → public/images/iot-lab/lab-setup.jpg       (1200×840px)
 *   S5  → public/images/iot-lab/kit-starter.jpg     (640×400px)
 *         public/images/iot-lab/kit-esp32.jpg
 *         public/images/iot-lab/kit-industrial.jpg
 *         public/images/iot-lab/kit-raspberry.jpg
 *         public/images/iot-lab/kit-stm32.jpg
 *         public/images/iot-lab/kit-smartfactory.jpg
 *
 * CSS scope: .iol-scope
 */

/* ─── Hero trust strip pills ─── */
const heroTrust = [
  "Complete Lab Design & Setup",
  "IoT Equipment & Kits",
  "Curriculum Experiments",
  "Faculty Training",
  "Student Project Support",
  "Pan-India Implementation",
];

export default function IotLabSetupClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  /* ── Keyboard close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  /* ── Body scroll lock ── */
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
    <div className={`iol-scope ${styles.scope}`}>

      {/* ============================================================
          SECTION 1 — HERO
          Primary keyword: IoT Lab Setup for Engineering Colleges
          ============================================================ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>
              Complete IoT Laboratory Solutions · Pan-India Implementation
            </span>

            <h1 className={styles.heroHeadline}>
              IoT Lab Setup for{" "}
              <span className={styles.heroHeadlineAccent}>Engineering Colleges</span>
            </h1>

            <p className={styles.heroSubhead}>
              Build a practical, industry-oriented Internet of Things laboratory with the right
              combination of IoT hardware, development platforms, sensors, communication
              technologies, software, project kits and learning resources. Knowx India provides
              end-to-end <strong>IoT lab solutions</strong> for engineering colleges and
              institutions — from laboratory planning and equipment selection to installation,
              faculty enablement, student projects and technical support.
            </p>

            <div className={styles.heroCtaRow}>
              <button
                type="button"
                onClick={openModal}
                className={styles.heroCtaPrimary}
              >
                Request an IoT Lab Proposal
              </button>
              <button
                type="button"
                onClick={openModal}
                className={styles.heroCtaSecondary}
              >
                Talk to an IoT Lab Expert →
              </button>
            </div>

            <div className={styles.heroAccentBar} aria-hidden="true" />

            <ul className={styles.heroTrustStrip} aria-label="IoT lab service highlights">
              {heroTrust.map((pill, i) => (
                <li
                  key={pill}
                  className={`${styles.heroTrustPill} ${
                    i % 2 === 0 ? styles.pillGreen : styles.pillBlue
                  }`}
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero SVG — IoT Ecosystem Diagram */}
          <div className={styles.heroRight} aria-hidden="true">
            <svg
              viewBox="0 0 480 500"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.heroSvg}
              role="img"
              aria-label="IoT Lab ecosystem diagram — devices, gateway, cloud, dashboard"
            >
              {/* ── Connection lines ── */}
              <g stroke="#0f766e" strokeWidth="1.5" fill="none" opacity="0.3">
                <line x1="80" y1="160" x2="200" y2="240" />
                <line x1="160" y1="100" x2="220" y2="240" />
                <line x1="240" y1="80" x2="240" y2="240" />
                <line x1="320" y1="100" x2="260" y2="240" />
                <line x1="400" y1="160" x2="280" y2="240" />
                <line x1="240" y1="290" x2="240" y2="360" />
                <line x1="240" y1="410" x2="120" y2="460" />
                <line x1="240" y1="410" x2="360" y2="460" />
              </g>

              {/* ── Device layer (5 nodes) ── */}
              {/* ESP32 */}
              <rect x="40" y="128" width="80" height="64" rx="10" fill="#0f766e" />
              <text x="80" y="154" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">ESP32</text>
              <text x="80" y="170" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Wi-Fi · BLE</text>
              <text x="80" y="184" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">IoT Platform</text>

              {/* Raspberry Pi */}
              <rect x="120" y="68" width="80" height="64" rx="10" fill="#1e3a8a" />
              <text x="160" y="94" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">Raspberry Pi</text>
              <text x="160" y="110" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Edge AI</text>
              <text x="160" y="124" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">Vision · Gateway</text>

              {/* STM32 */}
              <rect x="200" y="48" width="80" height="64" rx="10" fill="#0d9488" />
              <text x="240" y="74" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">STM32</text>
              <text x="240" y="90" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Embedded</text>
              <text x="240" y="104" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">RTOS · Real-Time</text>

              {/* Sensors */}
              <rect x="280" y="68" width="80" height="64" rx="10" fill="#b45309" />
              <text x="320" y="94" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">Sensors</text>
              <text x="320" y="110" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Temp · Humidity</text>
              <text x="320" y="124" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">Gas · LiDAR · IMU</text>

              {/* Industrial IoT */}
              <rect x="360" y="128" width="80" height="64" rx="10" fill="#1e3a8a" />
              <text x="400" y="151" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700">Industrial</text>
              <text x="400" y="165" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700">IoT</text>
              <text x="400" y="181" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">SCADA · PLC</text>

              {/* ── Gateway / Processing ── */}
              <rect x="170" y="240" width="140" height="52" rx="26" fill="#0f766e" />
              <text x="240" y="262" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700">IoT Gateway</text>
              <text x="240" y="280" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="10">MQTT · LoRa · BLE · 4G</text>

              {/* ── Cloud ── */}
              <rect x="175" y="360" width="130" height="52" rx="26" fill="#1e3a8a" />
              <text x="240" y="382" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700">Cloud IoT</text>
              <text x="240" y="400" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="10">AWS · Azure · GCP</text>

              {/* ── Dashboard + Startup ── */}
              <rect x="55" y="455" width="110" height="36" rx="18" fill="#fff" stroke="#0f766e" strokeWidth="1.5" />
              <text x="110" y="477" textAnchor="middle" fill="#0f766e" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700">Dashboard</text>

              <rect x="315" y="455" width="110" height="36" rx="18" fill="#fff" stroke="#1e3a8a" strokeWidth="1.5" />
              <text x="370" y="477" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700">Analytics</text>

              {/* ── Label ── */}
              <rect x="100" y="10" width="280" height="30" rx="15" fill="#f0fdf9" stroke="#0f766e" strokeWidth="1.5" />
              <text x="240" y="30" textAnchor="middle" fill="#0f766e" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.05em">IoT INNOVATION LAB ECOSYSTEM</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTIONS 2–14 — Placeholders (built in Steps 2–6)
          ============================================================ */}

      <section className={styles.placeholder} id="complete-setup">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S2</div>
          <h2 className={styles.placeholderTitle}>Complete IoT Lab Setup for Engineering Colleges</h2>
          <p className={styles.placeholderNote}>Step 2 — Lab photo (left) + 14-item service checklist (right) + CTA</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="what-is-iot-lab">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S3</div>
          <h2 className={styles.placeholderTitle}>What Is an IoT Laboratory?</h2>
          <p className={styles.placeholderNote}>Step 2 — 2 paras + 10-domain tag cloud + IoT architecture SVG</p>
        </div>
      </section>

      <section className={styles.placeholder} id="equipment">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S4</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Equipment &amp; Infrastructure</h2>
          <p className={styles.placeholderNote}>Step 3 — 6 equipment category cards + CTA</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="iot-kits">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S5</div>
          <h2 className={styles.placeholderTitle}>IoT Kits for Engineering Students</h2>
          <p className={styles.placeholderNote}>Step 3 — 6 kit cards with image placeholders + capabilities + modal CTA</p>
        </div>
      </section>

      <section className={styles.placeholder} id="experiments">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S6</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Experiments &amp; Project-Based Learning</h2>
          <p className={styles.placeholderNote}>Step 4 — 8 experiment domain cards + CTA</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="requirements">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S7</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Requirements for Engineering Colleges</h2>
          <p className={styles.placeholderNote}>Step 4 — 11-row requirements table (responsive) + CTA</p>
        </div>
      </section>

      <section className={styles.placeholder} id="vtu">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S8</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Setup for VTU Engineering Colleges</h2>
          <p className={styles.placeholderNote}>Step 4 — 2 paras + 8-item checklist + VTU CTA (no accreditation claims)</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="cost">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S9</div>
          <h2 className={styles.placeholderTitle}>How Much Does an IoT Lab Setup Cost?</h2>
          <p className={styles.placeholderNote}>Step 5 — 12-factor chip list + no price figures + quote CTA</p>
        </div>
      </section>

      <section className={styles.placeholder} id="process">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S10</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Design, Installation &amp; Deployment</h2>
          <p className={styles.placeholderNote}>Step 5 — 6-step implementation process cards + CTA</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="why-knowx">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S11</div>
          <h2 className={styles.placeholderTitle}>Why Choose Knowx India for IoT Lab Setup?</h2>
          <p className={styles.placeholderNote}>Step 5 — 8 differentiator cards on dark green gradient background</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="institution-types">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S12</div>
          <h2 className={styles.placeholderTitle}>IoT Lab Solutions for Different Institution Needs</h2>
          <p className={styles.placeholderNote}>Step 5 — 6 institution-type cards (Foundation / CSE+ECE / AI+IoT / Final Year / Innovation / Research)</p>
        </div>
      </section>

      <section className={styles.placeholder} id="faq">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S13</div>
          <h2 className={styles.placeholderTitle}>Frequently Asked Questions About IoT Lab Setup</h2>
          <p className={styles.placeholderNote}>Step 6 — 10-question FAQ accordion + FAQPage JSON-LD schema</p>
        </div>
      </section>

      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="cta">
        <div className={styles.placeholderInner}>
          <div className={styles.placeholderNum}>S14</div>
          <h2 className={styles.placeholderTitle}>Build Your Engineering College's IoT Laboratory With Knowx</h2>
          <p className={styles.placeholderNote}>Step 6 — Final CTA banner (dark green) + modal + flagship cross-link</p>
        </div>
      </section>

      {/* ============================================================
          CONSULTATION MODAL — Extended fields for IoT Lab enquiry
          ============================================================ */}
      {modalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="iol-modal-title"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <h3 id="iol-modal-title" className={styles.modalTitle}>
              Request an IoT Lab Proposal
            </h3>
            <p className={styles.modalSubtitle}>
              Share your requirements and our IoT lab team will get in touch within one working day.
            </p>

            {submitState === "success" ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessMark}>✓</div>
                <div className={styles.modalSuccessTitle}>Proposal request received</div>
                <div className={styles.modalSuccessBody}>
                  Thank you. Our IoT lab team will reach out to you shortly.
                </div>
                <button
                  type="button"
                  className={styles.modalDoneBtn}
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <input type="hidden" name="access_key" value="f2635df8-33a5-44ef-889c-9f823771927f" />
                <input type="hidden" name="subject" value="IoT Lab Setup — Proposal Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — IoT Lab Setup page" />

                {/* Row 1 — Name + Role */}
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>
                    Full Name
                    <input required name="name" type="text" className={styles.modalInput} placeholder="Your name" />
                  </label>
                  <label className={styles.modalLabel}>
                    Role
                    <input name="role" type="text" className={styles.modalInput} placeholder="Principal / HoD / Lab In-charge" />
                  </label>
                </div>

                {/* Institution */}
                <label className={styles.modalLabel}>
                  Institution
                  <input required name="institution" type="text" className={styles.modalInput} placeholder="Engineering college / university name" />
                </label>

                {/* Row 2 — Email + Phone */}
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>
                    Email
                    <input required name="email" type="email" className={styles.modalInput} placeholder="you@institution.edu" />
                  </label>
                  <label className={styles.modalLabel}>
                    Phone
                    <input required name="phone" type="tel" className={styles.modalInput} placeholder="Contact number" />
                  </label>
                </div>

                {/* Row 3 — City/State + Students */}
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>
                    City / State
                    <input name="city_state" type="text" className={styles.modalInput} placeholder="Bangalore, Karnataka" />
                  </label>
                  <label className={styles.modalLabel}>
                    Number of Students
                    <input name="students" type="text" className={styles.modalInput} placeholder="e.g. 60 per batch" />
                  </label>
                </div>

                {/* Row 4 — Department + Lab Type */}
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>
                    Department(s)
                    <input name="department" type="text" className={styles.modalInput} placeholder="ECE / CSE / EEE / ISE" />
                  </label>
                  <label className={styles.modalLabel}>
                    Lab Type
                    <select name="lab_type" className={styles.modalSelect}>
                      <option value="">Select lab type</option>
                      <option value="IoT Starter Lab">IoT Starter Lab</option>
                      <option value="Professional IoT Lab">Professional IoT Lab</option>
                      <option value="Industrial IoT Lab">Industrial IoT Lab</option>
                      <option value="Edge AI + IoT Lab">Edge AI + IoT Lab</option>
                      <option value="Smart Factory Lab">Smart Factory Lab</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>
                </div>

                {/* Message */}
                <label className={styles.modalLabel}>
                  Approximate Requirement / Message
                  <textarea
                    name="message"
                    className={styles.modalTextarea}
                    rows={3}
                    placeholder="New lab setup · Upgrading existing lab · AICTE IDEA Lab · Innovation Centre · Any specific requirements..."
                  />
                </label>

                {submitState === "error" && (
                  <div className={styles.modalError}>
                    Something went wrong. Please try again or reach us directly by email.
                  </div>
                )}

                <button type="submit" disabled={submitting} className={styles.modalSubmit}>
                  {submitting ? "Sending..." : "Send Proposal Request"}
                </button>
                <p className={styles.modalFinePrint}>
                  By submitting, you agree to be contacted by Knowx Innovations about IoT lab setup.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
