"use client";

import Link from "next/link";
import styles from "./styles.module.css";

/**
 * Engineering Innovation Labs — Flagship pillar page
 * URL: /engineering-innovation-labs/
 *
 * Step 5 — Sections 6, 7, 8 built.
 * Sections 9–16 remain as TODO placeholders.
 */

const comparisonRows = [
  { criterion: "Scope of Work", vendor: "Equipment supply only", knowx: "End-to-end innovation ecosystem" },
  { criterion: "Faculty Training", vendor: "Not included", knowx: "Structured faculty development programs" },
  { criterion: "Curriculum Alignment", vendor: "None", knowx: "CDIO + OBE mapping" },
  { criterion: "Student Projects", vendor: "Generic kits", knowx: "Real industry projects" },
  { criterion: "Industry Connect", vendor: "None", knowx: "Built-in industry partnerships" },
  { criterion: "Post-Setup Support", vendor: "Warranty only", knowx: "Continuous mentorship" },
  { criterion: "Outcome Focus", vendor: "Installation complete", knowx: "Placements + startups + research" },
];

// Palette rotation for Section 6 (green / blue / amber)
type Tint = "green" | "blue" | "amber";
type Alignment = "green" | "blue" | "amber" | "teal";

const labs: { title: string; body: string; tint: Tint; icon: JSX.Element }[] = [
  {
    title: "AICTE IDEA Lab",
    body: "Innovation, Design & Entrepreneurship Advancement lab aligned to AICTE guidelines.",
    tint: "green",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.5 1 2.3v1h6v-1c0-.8.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg>),
  },
  {
    title: "Centre of Excellence",
    body: "A dedicated, deep-focus facility built around one strategic technology domain.",
    tint: "blue",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V3h12v6"/><path d="M6 9a6 6 0 0 0 12 0"/><path d="M8 21h8M12 15v6"/></svg>),
  },
  {
    title: "Embedded Systems Lab",
    body: "Microcontroller and firmware development for real-time embedded applications.",
    tint: "amber",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>),
  },
  {
    title: "IoT Lab",
    body: "Connected sensor networks, edge devices, and cloud dashboards for smart systems.",
    tint: "green",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>),
  },
  {
    title: "AI & ML Lab",
    body: "GPU-enabled workstations for machine learning, computer vision, and generative AI.",
    tint: "blue",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.6A4 4 0 0 0 8 20v1h8v-1a4 4 0 0 0 3-6.4A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 12h6M12 9v6"/></svg>),
  },
  {
    title: "Robotics Lab",
    body: "Design, build, and program autonomous mobile and industrial robotic platforms.",
    tint: "amber",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 2v4M8 14h.01M16 14h.01M9 18h6"/></svg>),
  },
  {
    title: "PCB Design Lab",
    body: "Schematic capture, layout, and prototype fabrication for real hardware products.",
    tint: "green",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v4M16 3v4M3 8h4M3 16h4M17 21v-4M8 21v-4M17 8h4M17 16h4"/></svg>),
  },
  {
    title: "Drone Technology Lab",
    body: "UAV design, flight control, and payload systems for agri, survey, and defence.",
    tint: "blue",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 8l3 3M16 8l-3 3M8 16l3-3M16 16l-3-3"/></svg>),
  },
  {
    title: "EV Technology Lab",
    body: "Battery, BMS, motor drives, and vehicle control systems for the EV ecosystem.",
    tint: "amber",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="14" height="10" rx="2"/><path d="M16 10h3l2 2v3h-5"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M7 4v3M11 4v3"/></svg>),
  },
  {
    title: "Industry 4.0 Lab",
    body: "PLC, SCADA, digital twin, and industrial IoT for smart factory implementation.",
    tint: "green",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>),
  },
  {
    title: "Digital Manufacturing Lab",
    body: "3D printing, CNC, CAD/CAM, and rapid prototyping for design-to-product workflows.",
    tint: "blue",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v6H6z"/><path d="M4 9h16v5H4z"/><path d="M9 14v6h6v-6"/></svg>),
  },
  {
    title: "Innovation Makerspace",
    body: "A shared hands-on space for cross-disciplinary tinkering, prototyping, and clubs.",
    tint: "amber",
    icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>),
  },
];

// Section 7 alignment cards
const alignmentCards: { title: string; body: string; tint: Alignment; icon: JSX.Element }[] = [
  {
    title: "CDIO",
    body: "Conceive – Design – Implement – Operate. A globally adopted engineering education framework focused on real-world engineering practice.",
    tint: "green",
    icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>),
  },
  {
    title: "Outcome-Based Education",
    body: "Curriculum mapped to measurable student outcomes — aligned with NBA and NAAC accreditation requirements.",
    tint: "blue",
    icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
  },
  {
    title: "Project-Based Learning",
    body: "Learning through real, sustained projects that build product-engineering intuition — not just exam preparation.",
    tint: "amber",
    icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4"/><path d="M9 16h6"/></svg>),
  },
  {
    title: "Industry 4.0",
    body: "Curriculum and lab design aligned with smart manufacturing, digital twin, industrial IoT, and cyber-physical systems.",
    tint: "teal",
    icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>),
  },
];

// Section 8 tech tiles — 16 items, 4-color rotation
type TileTint = "green" | "blue" | "amber" | "teal";
const techTiles: { name: string; tint: TileTint }[] = [
  { name: "STM32", tint: "green" },
  { name: "ESP32", tint: "blue" },
  { name: "Raspberry Pi", tint: "amber" },
  { name: "Arduino", tint: "teal" },
  { name: "Jetson", tint: "green" },
  { name: "PLC", tint: "blue" },
  { name: "Robotics", tint: "amber" },
  { name: "Drones", tint: "teal" },
  { name: "AI / ML", tint: "green" },
  { name: "TensorFlow", tint: "blue" },
  { name: "Computer Vision", tint: "amber" },
  { name: "IoT Protocols", tint: "teal" },
  { name: "Wireless (WiFi / GPRS)", tint: "green" },
  { name: "VLSI Tools", tint: "blue" },
  { name: "Mobile Apps", tint: "amber" },
  { name: "Cloud", tint: "teal" },
];

export default function EngineeringInnovationLabsClient() {
  return (
    <div className={`eil-scope ${styles.scope}`}>
      {/* ============================================================ */}
      {/* Section 1 — HERO                                              */}
      {/* ============================================================ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>Since 2005 · Trusted Product Engineering Partner</span>

            <h1 className={styles.heroHeadline}>
              Future-Ready Engineering{" "}
              <span className={styles.heroHeadlineAccent}>Innovation Ecosystem</span>
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

            <ul className={styles.heroTrustStrip} aria-label="Company trust indicators">
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>20+ Years</li>
              <li className={`${styles.heroTrustPill} ${styles.pillBlue}`}>10,000+ Students Trained</li>
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>1,000+ Projects Executed</li>
            </ul>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <svg viewBox="0 0 500 520" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg} role="img" aria-label="Knowx Innovation Ecosystem diagram">
              <g stroke="#0f766e" strokeWidth="2" fill="none" opacity="0.35">
                <path d="M 250 60 L 250 130" />
                <path d="M 200 175 Q 110 220 90 265" />
                <path d="M 300 175 Q 390 220 410 265" />
                <path d="M 90 315 Q 150 360 220 380" />
                <path d="M 410 315 Q 350 360 280 380" />
                <path d="M 220 425 Q 170 460 160 480" />
                <path d="M 280 425 Q 330 460 340 480" />
              </g>
              <g><rect x="180" y="18" width="140" height="52" rx="26" fill="#1e3a8a" /><text x="250" y="50" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="16" fontWeight="600">University</text></g>
              <g><rect x="165" y="128" width="170" height="52" rx="26" fill="#0f766e" /><text x="250" y="160" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="16" fontWeight="600">Innovation Labs</text></g>
              <g><rect x="20" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#0f766e" strokeWidth="2" /><text x="90" y="297" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="15" fontWeight="600">Students</text></g>
              <g><rect x="340" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" /><text x="410" y="297" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="15" fontWeight="600">Faculty</text></g>
              <g><rect x="200" y="380" width="100" height="46" rx="23" fill="#1e3a8a" /><text x="250" y="409" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Industry</text></g>
              <g><rect x="90" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#0f766e" strokeWidth="2" /><text x="155" y="505" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Startups</text></g>
              <g><rect x="280" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" /><text x="345" y="505" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontSize="14" fontWeight="600">Placements</text></g>
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
            <div className={`${styles.s2Panel} ${styles.s2PanelBlue}`}>
              <div className={styles.s2Icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v8L5 20a2 2 0 0 0 1.75 3h10.5A2 2 0 0 0 19 20l-5-9V3"/><path d="M7 16h10"/></svg>
              </div>
              <h3 className={styles.s2PanelTitle}>Traditional Engineering</h3>
              <ul className={styles.s2PanelList}>
                <li>Theory</li><li>Lab Experiments</li><li>Exams</li><li>Limited Innovation</li>
              </ul>
            </div>
            <div className={`${styles.s2Panel} ${styles.s2PanelGreen}`}>
              <div className={styles.s2Icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><path d="M12 6v4M12 14v4M6 12h4M14 12h4"/></svg>
              </div>
              <h3 className={styles.s2PanelTitle}>Innovation Ecosystem</h3>
              <ul className={styles.s2PanelList}>
                <li>Product Development</li><li>Industry Projects</li><li>AI &amp; Robotics</li><li>Startups &amp; Research</li><li>Internships</li>
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
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg></div>
              <h3 className={styles.s3CardTitle}>Infrastructure Design</h3>
              <p className={styles.s3CardBody}>Lab layouts, workflows, and workstation planning built around learning outcomes — not equipment catalogues.</p>
            </div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
              <h3 className={styles.s3CardTitle}>Equipment Integration</h3>
              <p className={styles.s3CardBody}>Hardware, software, and tooling curated and integrated as a working system — ready for students to use from day one.</p>
            </div>
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
              <h3 className={styles.s3CardTitle}>Faculty Development</h3>
              <p className={styles.s3CardBody}>Structured programs that turn faculty into innovation mentors — aligned with AICTE, NBA, and OBE frameworks.</p>
            </div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"/><path d="M12 17v4"/><path d="M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1.5-1 2.5H9c0-1-.3-1.9-1-2.5A6 6 0 0 1 12 3z"/></svg></div>
              <h3 className={styles.s3CardTitle}>Student Innovation</h3>
              <p className={styles.s3CardBody}>Real projects, not kit assemblies — students design, prototype, and ship product-grade work through their engineering years.</p>
            </div>
            <div className={`${styles.s3Card} ${styles.cardGreen}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg></div>
              <h3 className={styles.s3CardTitle}>Industry Collaboration</h3>
              <p className={styles.s3CardBody}>Live industry projects, expert mentors, and R&amp;D linkages that make your labs relevant to how products are actually built.</p>
            </div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}>
              <div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
              <h3 className={styles.s3CardTitle}>Internship &amp; Placement Support</h3>
              <p className={styles.s3CardBody}>Structured internship pipelines and placement pathways into product, R&amp;D, and deep-tech engineering roles.</p>
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
          <p className={styles.s4Subtitle}>From Vision to Placements — One Connected System</p>
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
                {i < arr.length - 1 && (<span className={styles.s4Arrow} aria-hidden="true">→</span>)}
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
      {/* Section 5 — WHY CHOOSE US (Comparison Table)                   */}
      {/* ============================================================ */}
      <section className={styles.s5} id="comparison">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>Why Choose Us for Your Lab Setup</h2>
          <p className={styles.s5Intro}>
            See how a complete innovation ecosystem partner compares to a
            typical lab equipment vendor — across scope, faculty development,
            curriculum alignment, and student outcomes.
          </p>
          <div className={styles.s5Table} role="table" aria-label="Comparison table">
            <div className={styles.s5HeaderRow} role="row">
              <div className={`${styles.s5Cell} ${styles.s5HCriteria}`} role="columnheader">Criteria</div>
              <div className={`${styles.s5Cell} ${styles.s5HVendor}`} role="columnheader">Typical Lab Vendor</div>
              <div className={`${styles.s5Cell} ${styles.s5HKnowx}`} role="columnheader">Knowx Innovation Ecosystem</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.criterion} className={`${styles.s5DataRow} ${i % 2 === 1 ? styles.s5RowAlt : ""}`} role="row">
                <div className={`${styles.s5Cell} ${styles.s5DCriteria}`} role="cell">
                  <span className={styles.s5MobileLabel}>Criteria</span>{row.criterion}
                </div>
                <div className={`${styles.s5Cell} ${styles.s5DVendor}`} role="cell">
                  <span className={styles.s5MobileLabel}>Typical Lab Vendor</span>
                  <span className={styles.s5Mark} aria-hidden="true">✗</span><span>{row.vendor}</span>
                </div>
                <div className={`${styles.s5Cell} ${styles.s5DKnowx}`} role="cell">
                  <span className={styles.s5MobileLabel}>Knowx Innovation Ecosystem</span>
                  <span className={styles.s5Mark} aria-hidden="true">✓</span><span>{row.knowx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — INNOVATION SOLUTIONS (12 Lab Cards)                */}
      {/* ============================================================ */}
      <section className={styles.s6} id="innovation-solutions">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>A Complete Catalogue of Innovation Labs</h2>
          <p className={styles.s6Intro}>
            From AICTE IDEA Labs and Centres of Excellence to Robotics, AI, IoT, Drone, EV, PCB Design, Digital Manufacturing, and Innovation Makerspaces — configured individually or bundled into a full engineering innovation ecosystem for your college or university.
          </p>

          <div className={styles.s6Grid}>
            {labs.map((lab) => (
              <div key={lab.title} className={`${styles.s6Card} ${styles[`s6Tint_${lab.tint}`]}`}>
                <div className={styles.s6CardIcon} aria-hidden="true">{lab.icon}</div>
                <h3 className={styles.s6CardTitle}>{lab.title}</h3>
                <p className={styles.s6CardBody}>{lab.body}</p>
                <a href="#" className={styles.s6CardLink}>Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — GLOBAL ENGINEERING EDUCATION ALIGNMENT             */}
      {/* ============================================================ */}
      <section className={styles.s7} id="global-alignment">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>Inspired by Global Engineering Education Best Practices</h2>
          <p className={styles.s7Intro}>
            Our labs and curricula draw on internationally recognized engineering
            education frameworks — adapted for Indian institutions, AICTE guidelines,
            and NBA/NAAC outcomes.
          </p>

          <div className={styles.s7Grid}>
            {alignmentCards.map((card) => (
              <div key={card.title} className={`${styles.s7Card} ${styles[`s7Tint_${card.tint}`]}`}>
                <div className={styles.s7CardIcon} aria-hidden="true">{card.icon}</div>
                <h3 className={styles.s7CardTitle}>{card.title}</h3>
                <p className={styles.s7CardBody}>{card.body}</p>
              </div>
            ))}
          </div>

          <p className={styles.s7Footer}>
            We integrate internationally recognized engineering education
            principles into practical implementation for Indian institutions.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 8 — TECHNOLOGIES WE WORK WITH                          */}
      {/* ============================================================ */}
      <section className={styles.s8} id="technologies">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>Technologies We Work With</h2>
          <p className={styles.s8Intro}>
            A working stack that spans hardware boards, embedded platforms,
            IoT protocols, wireless communication, VLSI tools, AI/ML, mobile
            apps, robotics, drones, and cloud — all integrated into student
            projects and industry-grade prototypes.
          </p>

          <div className={styles.s8Grid}>
            {techTiles.map((t) => (
              <div key={t.name} className={`${styles.s8Tile} ${styles[`s8Tint_${t.tint}`]}`}>
                <span className={styles.s8TileText}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sections 9–16 — placeholders                                   */}
      {/* ============================================================ */}
      <section className={styles.section} id="student-journey">
        <h2 className={styles.placeholder}>9. Student Innovation Journey — TODO</h2>
      </section>
      <section className={styles.section} id="faculty-enablement">
        <h2 className={styles.placeholder}>10. Faculty Enablement — TODO</h2>
      </section>
      <section className={styles.section} id="funding-guidance">
        <h2 className={styles.placeholder}>11. Funding &amp; Implementation Guidance — TODO</h2>
      </section>
      <section className={styles.section} id="customer-logos">
        <h2 className={styles.placeholder}>12. We Have Setup Labs In (Customer Logos) — TODO</h2>
      </section>
      <section className={styles.section} id="gallery">
        <h2 className={styles.placeholder}>13. Gallery — TODO</h2>
      </section>
      <section className={styles.section} id="reviews">
        <h2 className={styles.placeholder}>14. Reviews / Testimonials — TODO</h2>
      </section>
      <section className={styles.section} id="metrics-cta">
        <h2 className={styles.placeholder}>15. Success Metrics + Consultation CTA — TODO</h2>
      </section>
      <section className={styles.section} id="faq">
        <h2 className={styles.placeholder}>16. FAQ — TODO</h2>
      </section>
    </div>
  );
}
