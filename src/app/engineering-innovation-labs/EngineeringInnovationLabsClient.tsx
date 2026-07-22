"use client";

import Link from "next/link";
import styles from "./styles.module.css";

/**
 * Engineering Innovation Labs — Flagship pillar page
 * URL: /engineering-innovation-labs/
 *
 * Step 3 — Sections 1 (hero polish), 2, 3, 4 built.
 * Sections 5–16 remain as TODO placeholders.
 */
export default function EngineeringInnovationLabsClient() {
  return (
    <div className={`eil-scope ${styles.scope}`}>
      {/* ============================================================ */}
      {/* Section 1 — HERO                                              */}
      {/* ============================================================ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          {/* LEFT COLUMN */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroHeadline}>
              Future-Ready Engineering{" "}
              <span className={styles.heroHeadlineAccent}>
                Innovation Ecosystem
              </span>
            </h1>

            <p className={styles.heroSubhead}>
              Helping Universities &amp; Engineering Colleges Build World-Class
              Innovation Centers, AICTE IDEA Labs, Makerspaces, Centres of
              Excellence and Industry-Integrated Learning Environments.
            </p>

            <div className={styles.heroCtaRow}>
              <Link href="#metrics-cta" className={styles.heroCtaPrimary}>
                Schedule Free Consultation
              </Link>
              <Link href="#metrics-cta" className={styles.heroCtaSecondary}>
                Download Ecosystem Brochure →
              </Link>
            </div>

            <div className={styles.heroAccentBar} aria-hidden="true" />

            <ul
              className={styles.heroTrustStrip}
              aria-label="Company trust indicators"
            >
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>
                Since 2005
              </li>
              <li className={`${styles.heroTrustPill} ${styles.pillBlue}`}>
                20+ Years
              </li>
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>
                10,000+ Students Trained
              </li>
              <li className={`${styles.heroTrustPill} ${styles.pillBlue}`}>
                1,000+ Projects Executed
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN — Ecosystem SVG diagram */}
          <div className={styles.heroRight} aria-hidden="true">
            <svg
              viewBox="0 0 500 520"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.heroSvg}
              role="img"
              aria-label="Knowx Innovation Ecosystem: University to Innovation Labs to Students, Faculty, Industry, Startups and Placements"
            >
              <g stroke="#0f766e" strokeWidth="2" fill="none" opacity="0.35">
                <path d="M 250 60 L 250 130" />
                <path d="M 200 175 Q 110 220 90 265" />
                <path d="M 300 175 Q 390 220 410 265" />
                <path d="M 90 315 Q 150 360 220 380" />
                <path d="M 410 315 Q 350 360 280 380" />
                <path d="M 220 425 Q 170 460 160 480" />
                <path d="M 280 425 Q 330 460 340 480" />
              </g>

              <g>
                <rect x="180" y="18" width="140" height="52" rx="26" fill="#1e3a8a" />
                <text x="250" y="50" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="16" fontWeight="600">University</text>
              </g>
              <g>
                <rect x="165" y="128" width="170" height="52" rx="26" fill="#0f766e" />
                <text x="250" y="160" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="16" fontWeight="600">Innovation Labs</text>
              </g>
              <g>
                <rect x="20" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#0f766e" strokeWidth="2" />
                <text x="90" y="297" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="15" fontWeight="600">Students</text>
              </g>
              <g>
                <rect x="340" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                <text x="410" y="297" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="15" fontWeight="600">Faculty</text>
              </g>
              <g>
                <rect x="200" y="380" width="100" height="46" rx="23" fill="#1e3a8a" />
                <text x="250" y="409" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Industry</text>
              </g>
              <g>
                <rect x="90" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#0f766e" strokeWidth="2" />
                <text x="155" y="505" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Startups</text>
              </g>
              <g>
                <rect x="280" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                <text x="345" y="505" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Placements</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — UNIVERSITIES NEED MORE THAN LABORATORIES           */}
      {/* ============================================================ */}
      <section className={styles.s2} id="education-changing">
        <div className={styles.s2Inner}>
          <h2 className={styles.s2Heading}>Universities Need More Than Laboratories</h2>
          <p className={styles.s2Intro}>
            Engineering education is evolving from lab-based learning to
            innovation-led, industry-integrated ecosystems that build product
            engineers, startup founders, and research leaders.
          </p>

          <div className={styles.s2Panels}>
            {/* LEFT PANEL — Traditional Engineering */}
            <div className={`${styles.s2Panel} ${styles.s2PanelBlue}`}>
              <div className={styles.s2Icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3h6" />
                  <path d="M10 3v8L5 20a2 2 0 0 0 1.75 3h10.5A2 2 0 0 0 19 20l-5-9V3" />
                  <path d="M7 16h10" />
                </svg>
              </div>
              <h3 className={styles.s2PanelTitle}>Traditional Engineering</h3>
              <ul className={styles.s2PanelList}>
                <li>Theory</li>
                <li>Lab Experiments</li>
                <li>Exams</li>
                <li>Limited Innovation</li>
              </ul>
            </div>

            {/* RIGHT PANEL — Innovation Ecosystem */}
            <div className={`${styles.s2Panel} ${styles.s2PanelGreen}`}>
              <div className={styles.s2Icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="4" cy="12" r="2" />
                  <circle cx="20" cy="12" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <path d="M12 6v4M12 14v4M6 12h4M14 12h4" />
                </svg>
              </div>
              <h3 className={styles.s2PanelTitle}>Innovation Ecosystem</h3>
              <ul className={styles.s2PanelList}>
                <li>Product Development</li>
                <li>Industry Projects</li>
                <li>AI &amp; Robotics</li>
                <li>Startups &amp; Research</li>
                <li>Internships</li>
              </ul>
            </div>
          </div>

          <p className={styles.s2Quote}>
            “Tomorrow&apos;s engineers must build products — not just complete experiments.”
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — WHY KNOWX (Beyond Lab Setup)                       */}
      {/* ============================================================ */}
      <section className={styles.s3} id="why-knowx">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Why Knowx — Beyond Lab Setup</h2>
          <p className={styles.s3Subtitle}>
            We help institutions create complete innovation ecosystems — infrastructure,
            faculty capability, student projects, industry access, and placement outcomes,
            all working together.
          </p>

          <div className={styles.s3Grid}>
            {/* Card 1 — green */}
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Infrastructure Design</h3>
              <p className={styles.s3CardBody}>
                Lab layouts, workflows, and workstation planning built around
                learning outcomes — not equipment catalogues.
              </p>
            </div>

            {/* Card 2 — blue */}
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Equipment Integration</h3>
              <p className={styles.s3CardBody}>
                Hardware, software, and tooling curated and integrated as a
                working system — ready for students to use from day one.
              </p>
            </div>

            {/* Card 3 — green */}
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Faculty Development</h3>
              <p className={styles.s3CardBody}>
                Structured programs that turn faculty into innovation mentors —
                aligned with AICTE, NBA, and OBE frameworks.
              </p>
            </div>

            {/* Card 4 — blue */}
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21h6" />
                  <path d="M12 17v4" />
                  <path d="M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1.5-1 2.5H9c0-1-.3-1.9-1-2.5A6 6 0 0 1 12 3z" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Student Innovation</h3>
              <p className={styles.s3CardBody}>
                Real projects, not kit assemblies — students design, prototype,
                and ship product-grade work through their engineering years.
              </p>
            </div>

            {/* Card 5 — green */}
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Industry Collaboration</h3>
              <p className={styles.s3CardBody}>
                Live industry projects, expert mentors, and R&amp;D linkages that
                make your labs relevant to how products are actually built.
              </p>
            </div>

            {/* Card 6 — blue */}
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className={styles.s3CardTitle}>Internship &amp; Placement Support</h3>
              <p className={styles.s3CardBody}>
                Structured internship pipelines and placement pathways into
                product, R&amp;D, and deep-tech engineering roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — OUR ECOSYSTEM MODEL                                */}
      {/* ============================================================ */}
      <section className={styles.s4} id="ecosystem-model">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>Our Ecosystem Model</h2>
          <p className={styles.s4Subtitle}>
            From Vision to Placements — One Connected System
          </p>

          <ol className={styles.s4Flow}>
            {[
              { n: "01", label: "Vision" },
              { n: "02", label: "Infrastructure" },
              { n: "03", label: "Faculty Development" },
              { n: "04", label: "Innovation Labs" },
              { n: "05", label: "Industry Projects" },
              { n: "06", label: "Research" },
              { n: "07", label: "Startups" },
              { n: "08", label: "Placements" },
            ].map((stage, i, arr) => (
              <li key={stage.n} className={styles.s4Stage}>
                <div className={styles.s4StageInner}>
                  <span className={styles.s4StageNum}>{stage.n}</span>
                  <span className={styles.s4StageLabel}>{stage.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className={styles.s4Arrow} aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>

          <p className={styles.s4Footer}>
            Every layer feeds the next — building a self-sustaining innovation
            engine inside your engineering college or university.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sections 5–16 — placeholders                                   */}
      {/* ============================================================ */}
      <section className={styles.section} id="comparison">
        <h2 className={styles.placeholder}>
          5. Why Choose Us — Comparison Table — TODO (Step 4)
        </h2>
      </section>

      <section className={styles.section} id="innovation-solutions">
        <h2 className={styles.placeholder}>
          6. Innovation Solutions — Catalogue of Labs — TODO (Step 5)
        </h2>
      </section>

      <section className={styles.section} id="global-alignment">
        <h2 className={styles.placeholder}>
          7. Global Engineering Education Alignment — TODO (Step 6)
        </h2>
      </section>

      <section className={styles.section} id="technologies">
        <h2 className={styles.placeholder}>
          8. Technologies We Work With — TODO (Step 6)
        </h2>
      </section>

      <section className={styles.section} id="student-journey">
        <h2 className={styles.placeholder}>
          9. Student Innovation Journey — TODO (Step 6)
        </h2>
      </section>

      <section className={styles.section} id="faculty-enablement">
        <h2 className={styles.placeholder}>
          10. Faculty Enablement — TODO (Step 7)
        </h2>
      </section>

      <section className={styles.section} id="funding-guidance">
        <h2 className={styles.placeholder}>
          11. Funding &amp; Implementation Guidance — TODO (Step 7)
        </h2>
      </section>

      <section className={styles.section} id="customer-logos">
        <h2 className={styles.placeholder}>
          12. We Have Setup Labs In (Customer Logos) — TODO (Step 8)
        </h2>
      </section>

      <section className={styles.section} id="gallery">
        <h2 className={styles.placeholder}>13. Gallery — TODO (Step 8)</h2>
      </section>

      <section className={styles.section} id="reviews">
        <h2 className={styles.placeholder}>
          14. Reviews / Testimonials — TODO (Step 8)
        </h2>
      </section>

      <section className={styles.section} id="metrics-cta">
        <h2 className={styles.placeholder}>
          15. Success Metrics + Consultation CTA — TODO (Step 9)
        </h2>
      </section>

      <section className={styles.section} id="faq">
        <h2 className={styles.placeholder}>16. FAQ — TODO (Step 9)</h2>
      </section>
    </div>
  );
}
