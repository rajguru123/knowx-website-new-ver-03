"use client";

import Link from "next/link";
import styles from "./styles.module.css";

/**
 * Engineering Innovation Labs — Flagship pillar page
 * URL: /engineering-innovation-labs/
 *
 * Step 2 — Hero section built.
 * Sections 2–16 remain as TODO placeholders.
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
              <li className={styles.heroTrustPill}>Since 2005</li>
              <li className={styles.heroTrustPill}>20+ Years</li>
              <li className={styles.heroTrustPill}>10,000+ Students Trained</li>
              <li className={styles.heroTrustPill}>1,000+ Projects Executed</li>
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
              {/* Connecting lines (drawn first so nodes sit on top) */}
              <g stroke="#0f766e" strokeWidth="2" fill="none" opacity="0.35">
                <path d="M 250 60 L 250 130" />
                <path d="M 200 175 Q 110 220 90 265" />
                <path d="M 300 175 Q 390 220 410 265" />
                <path d="M 90 315 Q 150 360 220 380" />
                <path d="M 410 315 Q 350 360 280 380" />
                <path d="M 220 425 Q 170 460 160 480" />
                <path d="M 280 425 Q 330 460 340 480" />
              </g>

              {/* University (top, blue) */}
              <g>
                <rect
                  x="180"
                  y="18"
                  width="140"
                  height="52"
                  rx="26"
                  fill="#1e3a8a"
                />
                <text
                  x="250"
                  y="50"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="16"
                  fontWeight="600"
                >
                  University
                </text>
              </g>

              {/* Innovation Labs (center, green) */}
              <g>
                <rect
                  x="165"
                  y="128"
                  width="170"
                  height="52"
                  rx="26"
                  fill="#0f766e"
                />
                <text
                  x="250"
                  y="160"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="16"
                  fontWeight="600"
                >
                  Innovation Labs
                </text>
              </g>

              {/* Students (left, green outline) */}
              <g>
                <rect
                  x="20"
                  y="265"
                  width="140"
                  height="52"
                  rx="26"
                  fill="#ffffff"
                  stroke="#0f766e"
                  strokeWidth="2"
                />
                <text
                  x="90"
                  y="297"
                  textAnchor="middle"
                  fill="#0f766e"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="15"
                  fontWeight="600"
                >
                  Students
                </text>
              </g>

              {/* Faculty (right, blue outline) */}
              <g>
                <rect
                  x="340"
                  y="265"
                  width="140"
                  height="52"
                  rx="26"
                  fill="#ffffff"
                  stroke="#1e3a8a"
                  strokeWidth="2"
                />
                <text
                  x="410"
                  y="297"
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="15"
                  fontWeight="600"
                >
                  Faculty
                </text>
              </g>

              {/* Industry (center, blue) */}
              <g>
                <rect
                  x="200"
                  y="380"
                  width="100"
                  height="46"
                  rx="23"
                  fill="#1e3a8a"
                />
                <text
                  x="250"
                  y="409"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="14"
                  fontWeight="600"
                >
                  Industry
                </text>
              </g>

              {/* Startups (bottom left, green outline) */}
              <g>
                <rect
                  x="90"
                  y="478"
                  width="130"
                  height="42"
                  rx="21"
                  fill="#ffffff"
                  stroke="#0f766e"
                  strokeWidth="2"
                />
                <text
                  x="155"
                  y="505"
                  textAnchor="middle"
                  fill="#0f766e"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="14"
                  fontWeight="600"
                >
                  Startups
                </text>
              </g>

              {/* Placements (bottom right, blue outline) */}
              <g>
                <rect
                  x="280"
                  y="478"
                  width="130"
                  height="42"
                  rx="21"
                  fill="#ffffff"
                  stroke="#1e3a8a"
                  strokeWidth="2"
                />
                <text
                  x="345"
                  y="505"
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontSize="14"
                  fontWeight="600"
                >
                  Placements
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sections 2–16 — placeholders                                  */}
      {/* ============================================================ */}
      <section className={styles.section} id="education-changing">
        <h2 className={styles.placeholder}>
          2. Engineering Education Is Changing — TODO (Step 3)
        </h2>
      </section>

      <section className={styles.section} id="why-knowx">
        <h2 className={styles.placeholder}>
          3. Why Knowx — Beyond Lab Setup — TODO (Step 3)
        </h2>
      </section>

      <section className={styles.section} id="ecosystem-model">
        <h2 className={styles.placeholder}>
          4. Our Ecosystem Model — TODO (Step 3)
        </h2>
      </section>

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
