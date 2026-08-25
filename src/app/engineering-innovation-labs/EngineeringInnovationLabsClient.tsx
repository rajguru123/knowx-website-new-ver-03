"use client";

import Link from "next/link";
import { useRef, useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * Engineering Innovation Labs — Flagship pillar page
 * URL: /engineering-innovation-labs/
 * Step 8 — AICTE IDEA Lab card cross-linked to /aicte-idea-lab-setup child page.
 * All other 11 lab cards unchanged.
 */

/* ============================ DATA ============================ */

const comparisonRows = [
  { criterion: "Scope of Work", vendor: "Equipment supply only", knowx: "End-to-end innovation ecosystem" },
  { criterion: "Faculty Training", vendor: "Not included", knowx: "Structured faculty development programs" },
  { criterion: "Curriculum Alignment", vendor: "None", knowx: "CDIO + OBE mapping" },
  { criterion: "Student Projects", vendor: "Generic kits", knowx: "Real industry projects" },
  { criterion: "Industry Connect", vendor: "None", knowx: "Built-in industry partnerships" },
  { criterion: "Post-Setup Support", vendor: "Warranty only", knowx: "Continuous mentorship" },
  { criterion: "Outcome Focus", vendor: "Installation complete", knowx: "Placements + startups + research" },
];

type Tint = "green" | "blue" | "amber";
type Alignment = "green" | "blue" | "amber" | "teal";

const labs: { title: string; body: string; tint: Tint; icon: JSX.Element; href?: string }[] = [
  { title: "AICTE IDEA Lab", body: "Innovation, Design & Entrepreneurship Advancement lab aligned to AICTE guidelines.", tint: "green", href: "/aicte-idea-lab-setup", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.5 1 2.3v1h6v-1c0-.8.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg>) },
  { title: "Centre of Excellence", body: "A dedicated, deep-focus facility built around one strategic technology domain.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V3h12v6"/><path d="M6 9a6 6 0 0 0 12 0"/><path d="M8 21h8M12 15v6"/></svg>) },
  { title: "Embedded Systems Lab", body: "Microcontroller and firmware development for real-time embedded applications.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>) },
  { title: "IoT Lab", body: "Connected sensor networks, edge devices, and cloud dashboards for smart systems.", tint: "green", href: "/engineering-innovation-labs/iot-lab-setup", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>) },
  { title: "AI & ML Lab", body: "GPU-enabled workstations for machine learning, computer vision, and generative AI.", tint: "blue", href: "/engineering-innovation-labs/ai-lab-setup", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.6A4 4 0 0 0 8 20v1h8v-1a4 4 0 0 0 3-6.4A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 12h6M12 9v6"/></svg>) },
  { title: "Robotics Lab", body: "Design, build, and program autonomous mobile and industrial robotic platforms.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 2v4M8 14h.01M16 14h.01M9 18h6"/></svg>) },
  { title: "PCB Design Lab", body: "Schematic capture, layout, and prototype fabrication for real hardware products.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v4M16 3v4M3 8h4M3 16h4M17 21v-4M8 21v-4M17 8h4M17 16h4"/></svg>) },
  { title: "Drone Technology Lab", body: "UAV design, flight control, and payload systems for agri, survey, and defence.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 8l3 3M16 8l-3 3M8 16l3-3M16 16l-3-3"/></svg>) },
  { title: "EV Technology Lab", body: "Battery, BMS, motor drives, and vehicle control systems for the EV ecosystem.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="14" height="10" rx="2"/><path d="M16 10h3l2 2v3h-5"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M7 4v3M11 4v3"/></svg>) },
  { title: "Industry 4.0 Lab", body: "PLC, SCADA, digital twin, and industrial IoT for smart factory implementation.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
  { title: "Digital Manufacturing Lab", body: "3D printing, CNC, CAD/CAM, and rapid prototyping for design-to-product workflows.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v6H6z"/><path d="M4 9h16v5H4z"/><path d="M9 14v6h6v-6"/></svg>) },
  { title: "Innovation Makerspace", body: "A shared hands-on space for cross-disciplinary tinkering, prototyping, and clubs.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
];

const alignmentCards: { title: string; body: string; tint: Alignment; icon: JSX.Element }[] = [
  { title: "CDIO", body: "Conceive – Design – Implement – Operate. A globally adopted engineering education framework focused on real-world engineering practice.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>) },
  { title: "Outcome-Based Education", body: "Curriculum mapped to measurable student outcomes — aligned with NBA and NAAC accreditation requirements.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>) },
  { title: "Project-Based Learning", body: "Learning through real, sustained projects that build product-engineering intuition — not just exam preparation.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4"/><path d="M9 16h6"/></svg>) },
  { title: "Industry 4.0", body: "Curriculum and lab design aligned with smart manufacturing, digital twin, industrial IoT, and cyber-physical systems.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>) },
];

type TileTint = "green" | "blue" | "amber" | "teal";
const techTiles: { name: string; tint: TileTint }[] = [
  { name: "STM32", tint: "green" }, { name: "ESP32", tint: "blue" }, { name: "Raspberry Pi", tint: "amber" }, { name: "Arduino", tint: "teal" },
  { name: "Jetson", tint: "green" }, { name: "PLC", tint: "blue" }, { name: "Robotics", tint: "amber" }, { name: "Drones", tint: "teal" },
  { name: "AI / ML", tint: "green" }, { name: "TensorFlow", tint: "blue" }, { name: "Computer Vision", tint: "amber" }, { name: "IoT Protocols", tint: "teal" },
  { name: "Wireless (WiFi / GPRS)", tint: "green" }, { name: "VLSI Tools", tint: "blue" }, { name: "Mobile Apps", tint: "amber" }, { name: "Cloud", tint: "teal" },
];

type MilestoneTint = "green" | "blue";
const milestones: { n: string; year: string; title: string; body: string; tint: MilestoneTint }[] = [
  { n: "1", year: "Year 1", title: "Skill Building", body: "Electronics, coding, and hands-on lab fundamentals in makerspace environments.", tint: "green" },
  { n: "2", year: "Year 2", title: "Mini Projects", body: "Team-based innovation projects mapped to real engineering problems.", tint: "blue" },
  { n: "3", year: "Year 3", title: "Product Development", body: "Industry-grade prototypes in IoT, robotics, AI, and embedded systems labs.", tint: "green" },
  { n: "4", year: "Year 3–4", title: "Industry Internship", body: "Structured internships with the Knowx industry partner network.", tint: "blue" },
  { n: "5", year: "Year 4", title: "Startup Incubation", body: "Innovation lab-to-startup pathway with mentorship and IP support.", tint: "green" },
  { n: "6", year: "Post-Grad", title: "Placement", body: "Career-ready engineers placed in product, R&D, and deep-tech roles.", tint: "blue" },
];

type FacTint = "green" | "blue";
const facultyItems: { code: string; title: string; body: string; tint: FacTint }[] = [
  { code: "FW", title: "Faculty Workshops", body: "Domain workshops in AI, IoT, robotics, EV, and embedded systems.", tint: "green" },
  { code: "CM", title: "Curriculum Mapping", body: "Aligning your curriculum with CDIO, OBE, and Industry 4.0 frameworks.", tint: "blue" },
  { code: "RG", title: "Research Guidance", body: "Research direction, publications, and funded project support.", tint: "green" },
  { code: "IC", title: "Innovation Challenges", body: "Structured innovation contests inside your college makerspace.", tint: "blue" },
  { code: "HK", title: "Hackathons", body: "National-standard hackathons hosted inside your IDEA Lab.", tint: "green" },
  { code: "PS", title: "Patent Support", body: "Guidance on ideation, patent drafting, and IP protection.", tint: "blue" },
  { code: "CN", title: "Consultancy", body: "Faculty-led industry consultancy models that generate revenue for the department.", tint: "green" },
];

type FundTint = "green" | "blue" | "amber";
const fundingRoutes: { title: string; body: string; tint: FundTint; icon: JSX.Element }[] = [
  { title: "AICTE IDEA Lab Grant", body: "Approved institutions can access AICTE's structured grant support for IDEA Lab setup, with defined milestones and outcomes.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-8h6v8"/></svg>) },
  { title: "CSR Partnerships", body: "Structured proposals for industry CSR funding — position your lab as an impact-driven skilling initiative.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>) },
  { title: "Alumni & Trust Funding", body: "Alumni networks, trust boards, and philanthropic capital channelled into named labs and long-term innovation programs.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>) },
  { title: "Phased Capex Model", body: "Roll out labs in phases — start with a core setup, expand across departments as outcomes and enrolment grow.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 5-5"/></svg>) },
  { title: "Institutional Budget", body: "Direct capex allocation from institutional reserves — often blended with grants and CSR to accelerate rollout.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h2M12 15h5"/></svg>) },
  { title: "Government Schemes", body: "State and central schemes for innovation, skilling, and startup incubation — aligned with your lab's strategic focus.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4-9 4-9-4 9-4z"/><path d="M3 10l9 4 9-4"/><path d="M3 14l9 4 9-4"/></svg>) },
];

/* SECTION 12 — Customer logos (10 placeholders) */
const customerLogos = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, label: `Client Logo ${i + 1}` }));

/* SECTION 13 — Gallery photos (12 placeholders) */
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Sample photo — replace with real lab image`,
  caption: `Lab image ${i + 1}`,
}));

/* SECTION 14 — Testimonials (6 placeholders) */
const testimonials = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  quote: "Testimonial placeholder — real quote pending from partner institution. This card demonstrates the layout and typography that will hold the real endorsement once collected.",
  name: `Placeholder Name ${i + 1}`,
  role: i === 0 ? "Principal" : i === 1 ? "Head of Department" : i === 2 ? "Faculty Coordinator" : i === 3 ? "Innovation Cell Lead" : i === 4 ? "Student Ambassador" : "Placement Officer",
  institution: `Engineering Institution ${i + 1}`,
}));

/* SECTION 16 — FAQ */
const faqs: { q: string; a: string }[] = [
  { q: "What is an AICTE IDEA Lab, and how does Knowx help engineering colleges set one up?", a: "An AICTE IDEA Lab (Innovation, Design & Entrepreneurship Advancement Lab) is a scheme by AICTE to help engineering colleges build multidisciplinary innovation labs that foster hands-on problem solving, product development, and entrepreneurship. Knowx helps institutions design, procure, integrate, and operationalise IDEA Labs aligned to AICTE guidelines — covering infrastructure design, curated equipment, faculty training, curriculum mapping, and student project pipelines. Our approach goes beyond installation: we help your college run the lab as a real innovation ecosystem tied to CDIO, OBE, and industry outcomes." },
  { q: "How is a Centre of Excellence different from a regular engineering lab or makerspace?", a: "A regular lab typically supports curriculum experiments. A makerspace supports open, cross-disciplinary tinkering. A Centre of Excellence (CoE) is a deep-focus facility built around one strategic technology domain — say EV, IoT, Robotics, or AI — with advanced equipment, research direction, industry partnerships, and student-to-startup pathways. Knowx designs CoEs for engineering colleges and universities that want to lead in a specific domain rather than just teach it, and we integrate CoEs, IDEA Labs, and Makerspaces into a single connected innovation ecosystem." },
  { q: "What is the typical cost range for setting up an innovation lab or IDEA Lab in an engineering college?", a: "Costs vary significantly based on lab type, scale, and technology domain. A focused IoT or embedded systems lab may start from a few tens of lakhs, while a full AICTE IDEA Lab or a Centre of Excellence for AI, EV, or Robotics can range from ₹60 lakhs to several crores depending on equipment depth and infrastructure. Knowx typically helps colleges phase the rollout — a strong core setup first, expanded through AICTE grants, CSR partnerships, alumni funding, and institutional budgets over 12–24 months." },
  { q: "How long does it take to set up a complete engineering innovation ecosystem?", a: "A basic lab setup (design, procurement, integration, and initial faculty training) typically takes 3 to 6 months. A full engineering innovation ecosystem — spanning IDEA Lab, CoEs, faculty enablement, curriculum mapping, student project pipelines, and industry linkages — is usually rolled out in phases over 6 to 18 months. Knowx follows a 4-phase model: Discovery, Design & Funding, Setup & Integration, and Faculty Training & Rollout, with clear milestones at each stage." },
  { q: "Is faculty training and curriculum development included in the lab setup?", a: "Yes — this is a defining part of the Knowx approach. Every lab setup includes structured faculty development programs aligned to AICTE, NBA, and OBE frameworks, along with curriculum mapping for the domain (IoT, Robotics, AI, EV, Industry 4.0, PCB Design, Embedded Systems, or Digital Manufacturing). Faculty are the true multipliers of any innovation lab, so we invest in workshops, research guidance, hackathon hosting, patent support, and consultancy models — helping your teaching team lead innovation, not just deliver theory." },
  { q: "What funding options are available for engineering colleges to set up innovation labs?", a: "Colleges typically use a mix of funding routes: AICTE IDEA Lab grants for approved institutions, industry CSR partnerships, alumni and trust donations, phased institutional capex, and state or central government schemes for skilling, innovation, and startup incubation. Knowx helps you structure a funding mix suited to your college's strategic priorities and prepares proposals, budgets, and rollout plans that reduce the burden on any single funding source." },
  { q: "How does Knowx provide post-setup support, maintenance, and student mentorship?", a: "Unlike a typical lab vendor whose responsibility ends at installation, Knowx provides continuous mentorship after setup. This includes ongoing faculty upskilling, refresh cycles on hardware and software, remote and on-site technical support, mentoring for student innovation projects, hackathon and internship connections through our industry network, and periodic reviews of lab outcomes tied to your OBE and NBA targets. Our goal is to keep the innovation ecosystem alive year after year, not just handed over." },
  { q: "How can our college or university get started with Knowx?", a: "The easiest way to start is to schedule a free consultation with our team — we'll review your college's current lab infrastructure, faculty capabilities, funding position, and strategic goals, and propose a phased innovation ecosystem plan tailored to your institution. From there we help with the AICTE IDEA Lab application, CoE design, CSR proposal drafting, and rollout planning. You can use the Schedule a Consultation button on this page, and one of our engineering education partners will get in touch within one working day." },
];

/* ============================ COMPONENT ============================ */

export default function EngineeringInnovationLabsClient() {
  const logosRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const scrollBy = (ref: React.RefObject<HTMLDivElement>, dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const distance = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: distance * dir, behavior: "smooth" });
  };

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      if (json.success) {
        setSubmitState("success");
        form.reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    } finally {
      setSubmitting(false);
    }
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

  return (
    <div className={`eil-scope ${styles.scope}`}>
      {/* Section 1 — HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>Since 2005 · Trusted Product Engineering Partner</span>
            <h1 className={styles.heroHeadline}>Future-Ready Engineering{" "}<span className={styles.heroHeadlineAccent}>Innovation Ecosystem</span></h1>
            <p className={styles.heroSubhead}>Helping Universities &amp; Engineering Colleges Build World-Class Innovation Centers, AICTE IDEA Labs, Makerspaces, Centres of Excellence and Industry-Integrated Learning Environments.</p>
            <div className={styles.heroCtaRow}>
              <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Schedule Free Consultation</button>
              <Link href="#metrics-cta" className={styles.heroCtaSecondary}>Download Ecosystem Brochure →</Link>
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
              <g stroke="#0f766e" strokeWidth="2" fill="none" opacity="0.35"><path d="M 250 60 L 250 130"/><path d="M 200 175 Q 110 220 90 265"/><path d="M 300 175 Q 390 220 410 265"/><path d="M 90 315 Q 150 360 220 380"/><path d="M 410 315 Q 350 360 280 380"/><path d="M 220 425 Q 170 460 160 480"/><path d="M 280 425 Q 330 460 340 480"/></g>
              <g><rect x="180" y="18" width="140" height="52" rx="26" fill="#1e3a8a"/><text x="250" y="50" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">University</text></g>
              <g><rect x="165" y="128" width="170" height="52" rx="26" fill="#0f766e"/><text x="250" y="160" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">Innovation Labs</text></g>
              <g><rect x="20" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#0f766e" strokeWidth="2"/><text x="90" y="297" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">Students</text></g>
              <g><rect x="340" y="265" width="140" height="52" rx="26" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2"/><text x="410" y="297" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">Faculty</text></g>
              <g><rect x="200" y="380" width="100" height="46" rx="23" fill="#1e3a8a"/><text x="250" y="409" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Industry</text></g>
              <g><rect x="90" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#0f766e" strokeWidth="2"/><text x="155" y="505" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Startups</text></g>
              <g><rect x="280" y="478" width="130" height="42" rx="21" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2"/><text x="345" y="505" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Placements</text></g>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.s2} id="education-changing">
        <div className={styles.s2Inner}>
          <h2 className={styles.s2Heading}>Universities Need More Than Laboratories</h2>
          <p className={styles.s2Intro}>Engineering education is evolving from lab-based learning to innovation-led, industry-integrated ecosystems that build product engineers, startup founders, and research leaders.</p>
          <div className={styles.s2Panels}>
            <div className={`${styles.s2Panel} ${styles.s2PanelBlue}`}>
              <div className={styles.s2Icon} aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6"/><path d="M10 3v8L5 20a2 2 0 0 0 1.75 3h10.5A2 2 0 0 0 19 20l-5-9V3"/><path d="M7 16h10"/></svg></div>
              <h3 className={styles.s2PanelTitle}>Traditional Engineering</h3>
              <ul className={styles.s2PanelList}><li>Theory</li><li>Lab Experiments</li><li>Exams</li><li>Limited Innovation</li></ul>
            </div>
            <div className={`${styles.s2Panel} ${styles.s2PanelGreen}`}>
              <div className={styles.s2Icon} aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><path d="M12 6v4M12 14v4M6 12h4M14 12h4"/></svg></div>
              <h3 className={styles.s2PanelTitle}>Innovation Ecosystem</h3>
              <ul className={styles.s2PanelList}><li>Product Development</li><li>Industry Projects</li><li>AI &amp; Robotics</li><li>Startups &amp; Research</li><li>Internships</li></ul>
            </div>
          </div>
          <p className={styles.s2Quote}>“Tomorrow&apos;s engineers must build products — not just complete experiments.”</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.s3} id="why-knowx">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Why Knowx — Beyond Lab Setup</h2>
          <p className={styles.s3Subtitle}>We help institutions create complete innovation ecosystems — infrastructure, faculty capability, student projects, industry access, and placement outcomes, all working together.</p>
          <div className={styles.s3Grid}>
            <div className={`${styles.s3Card} ${styles.cardGreen}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg></div><h3 className={styles.s3CardTitle}>Infrastructure Design</h3><p className={styles.s3CardBody}>Lab layouts, workflows, and workstation planning built around learning outcomes — not equipment catalogues.</p></div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><h3 className={styles.s3CardTitle}>Equipment Integration</h3><p className={styles.s3CardBody}>Hardware, software, and tooling curated and integrated as a working system — ready for students to use from day one.</p></div>
            <div className={`${styles.s3Card} ${styles.cardGreen}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><h3 className={styles.s3CardTitle}>Faculty Development</h3><p className={styles.s3CardBody}>Structured programs that turn faculty into innovation mentors — aligned with AICTE, NBA, and OBE frameworks.</p></div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"/><path d="M12 17v4"/><path d="M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1.5-1 2.5H9c0-1-.3-1.9-1-2.5A6 6 0 0 1 12 3z"/></svg></div><h3 className={styles.s3CardTitle}>Student Innovation</h3><p className={styles.s3CardBody}>Real projects, not kit assemblies — students design, prototype, and ship product-grade work through their engineering years.</p></div>
            <div className={`${styles.s3Card} ${styles.cardGreen}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg></div><h3 className={styles.s3CardTitle}>Industry Collaboration</h3><p className={styles.s3CardBody}>Live industry projects, expert mentors, and R&amp;D linkages that make your labs relevant to how products are actually built.</p></div>
            <div className={`${styles.s3Card} ${styles.cardBlue}`}><div className={styles.s3CardIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><h3 className={styles.s3CardTitle}>Internship &amp; Placement Support</h3><p className={styles.s3CardBody}>Structured internship pipelines and placement pathways into product, R&amp;D, and deep-tech engineering roles.</p></div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className={styles.s4} id="ecosystem-model">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>Our Ecosystem Model</h2>
          <p className={styles.s4Subtitle}>From Vision to Placements — One Connected System</p>
          <ol className={styles.s4Flow}>
            {[{ n: "01", label: "Vision" },{ n: "02", label: "Infrastructure" },{ n: "03", label: "Faculty Development" },{ n: "04", label: "Innovation Labs" },{ n: "05", label: "Industry Projects" },{ n: "06", label: "Research" },{ n: "07", label: "Startups" },{ n: "08", label: "Placements" }].map((stage, i, arr) => (
              <li key={stage.n} className={styles.s4Stage}>
                <div className={styles.s4StageInner}><span className={styles.s4StageNum}>{stage.n}</span><span className={styles.s4StageLabel}>{stage.label}</span></div>
                {i < arr.length - 1 && (<span className={styles.s4Arrow} aria-hidden="true">→</span>)}
              </li>
            ))}
          </ol>
          <p className={styles.s4Footer}>Every layer feeds the next — building a self-sustaining innovation engine inside your engineering college or university.</p>
        </div>
      </section>

      {/* Section 5 */}
      <section className={styles.s5} id="comparison">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>Why Choose Us for Your Lab Setup</h2>
          <p className={styles.s5Intro}>See how a complete innovation ecosystem partner compares to a typical lab equipment vendor — across scope, faculty development, curriculum alignment, and student outcomes.</p>
          <div className={styles.s5Table} role="table" aria-label="Comparison table">
            <div className={styles.s5HeaderRow} role="row">
              <div className={`${styles.s5Cell} ${styles.s5HCriteria}`} role="columnheader">Criteria</div>
              <div className={`${styles.s5Cell} ${styles.s5HVendor}`} role="columnheader">Typical Lab Vendor</div>
              <div className={`${styles.s5Cell} ${styles.s5HKnowx}`} role="columnheader">Knowx Innovation Ecosystem</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.criterion} className={`${styles.s5DataRow} ${i % 2 === 1 ? styles.s5RowAlt : ""}`} role="row">
                <div className={`${styles.s5Cell} ${styles.s5DCriteria}`} role="cell"><span className={styles.s5MobileLabel}>Criteria</span>{row.criterion}</div>
                <div className={`${styles.s5Cell} ${styles.s5DVendor}`} role="cell"><span className={styles.s5MobileLabel}>Typical Lab Vendor</span><span className={styles.s5Mark} aria-hidden="true">✗</span><span>{row.vendor}</span></div>
                <div className={`${styles.s5Cell} ${styles.s5DKnowx}`} role="cell"><span className={styles.s5MobileLabel}>Knowx Innovation Ecosystem</span><span className={styles.s5Mark} aria-hidden="true">✓</span><span>{row.knowx}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Innovation Solutions (12 lab cards) */}
      {/* AICTE IDEA Lab card is cross-linked to /aicte-idea-lab-setup child page. */}
      <section className={styles.s6} id="innovation-solutions">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>A Complete Catalogue of Innovation Labs</h2>
          <p className={styles.s6Intro}>From AICTE IDEA Labs and Centres of Excellence to Robotics, AI, IoT, Drone, EV, PCB Design, Digital Manufacturing, and Innovation Makerspaces — configured individually or bundled into a full engineering innovation ecosystem for your college or university.</p>
          <div className={styles.s6Grid}>
            {labs.map((lab) => (
              <div key={lab.title} className={`${styles.s6Card} ${styles[`s6Tint_${lab.tint}`]}`}>
                <div className={styles.s6CardIcon} aria-hidden="true">{lab.icon}</div>
                <h3 className={styles.s6CardTitle}>{lab.title}</h3>
                <p className={styles.s6CardBody}>{lab.body}</p>
                {lab.href ? (
                  <Link href={lab.href} className={styles.s6CardLink}>Learn More →</Link>
                ) : (
                  <a href="#" className={styles.s6CardLink}>Learn More →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className={styles.s7} id="global-alignment">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>Inspired by Global Engineering Education Best Practices</h2>
          <p className={styles.s7Intro}>Our labs and curricula draw on internationally recognized engineering education frameworks — adapted for Indian institutions, AICTE guidelines, and NBA/NAAC outcomes.</p>
          <div className={styles.s7Grid}>
            {alignmentCards.map((card) => (
              <div key={card.title} className={`${styles.s7Card} ${styles[`s7Tint_${card.tint}`]}`}>
                <div className={styles.s7CardIcon} aria-hidden="true">{card.icon}</div>
                <h3 className={styles.s7CardTitle}>{card.title}</h3>
                <p className={styles.s7CardBody}>{card.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.s7Footer}>We integrate internationally recognized engineering education principles into practical implementation for Indian institutions.</p>
        </div>
      </section>

      {/* Section 8 */}
      <section className={styles.s8} id="technologies">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>Technologies We Work With</h2>
          <p className={styles.s8Intro}>A working stack that spans hardware boards, embedded platforms, IoT protocols, wireless communication, VLSI tools, AI/ML, mobile apps, robotics, drones, and cloud — all integrated into student projects and industry-grade prototypes.</p>
          <div className={styles.s8Grid}>
            {techTiles.map((t) => (<div key={t.name} className={`${styles.s8Tile} ${styles[`s8Tint_${t.tint}`]}`}><span className={styles.s8TileText}>{t.name}</span></div>))}
          </div>
        </div>
      </section>

      {/* Section 9 */}
      <section className={styles.s9} id="student-journey">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>Student Innovation Journey</h2>
          <p className={styles.s9Intro}>A structured student innovation journey inside your engineering college — from foundational skill building to product development, industry internships, startup incubation, and placements. Every milestone is aligned with AICTE IDEA Lab outcomes, OBE goals, and industry-ready engineering education.</p>
          <ol className={styles.s9Flow} aria-label="Student innovation journey milestones">
            {milestones.map((m, i, arr) => (
              <li key={m.n} className={styles.s9Milestone}>
                <div className={`${styles.s9Card} ${styles[`s9Tint_${m.tint}`]}`}>
                  <div className={styles.s9Num}>{m.n}</div>
                  <div className={styles.s9Year}>{m.year}</div>
                  <div className={styles.s9Title}>{m.title}</div>
                  <div className={styles.s9Body}>{m.body}</div>
                </div>
                {i < arr.length - 1 && (<span className={styles.s9Arrow} aria-hidden="true">→</span>)}
              </li>
            ))}
          </ol>
          <p className={styles.s9Footer}>A complete innovation ecosystem journey that transforms every engineering student into an industry-ready product engineer.</p>
        </div>
      </section>

      {/* Section 10 */}
      <section className={styles.s10} id="faculty-enablement">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>Faculty Enablement</h2>
          <p className={styles.s10Intro}>Faculty are the true multipliers of every innovation lab. Our faculty enablement programs help engineering college teachers build innovation-led teaching capabilities, integrate AICTE and OBE frameworks, and lead student projects, hackathons, research, and industry consultancy inside their institutions.</p>
          <div className={styles.s10Grid}>
            {facultyItems.map((f) => (
              <div key={f.code} className={`${styles.s10Card} ${styles[`s10Tint_${f.tint}`]}`}>
                <div className={styles.s10Code} aria-hidden="true">{f.code}</div>
                <div className={styles.s10Body}><h3 className={styles.s10Title}>{f.title}</h3><p className={styles.s10Desc}>{f.body}</p></div>
              </div>
            ))}
          </div>
          <p className={styles.s10Footer}>Empowering engineering faculty to lead the transformation from teaching-only roles to innovation, research, and industry-driven education leadership.</p>
        </div>
      </section>

      {/* Section 11 */}
      <section className={styles.s11} id="funding-guidance">
        <div className={styles.s11Inner}>
          <h2 className={styles.s11Heading}>How Institutions Fund Their Innovation Labs</h2>
          <p className={styles.s11Intro}>Innovation lab and AICTE IDEA Lab setup is rarely funded from a single source. We help engineering colleges and universities structure a mix of government grants, CSR partnerships, alumni contributions, and phased capex — matched to your institution's strategic priorities.</p>
          <div className={styles.s11Grid}>
            {fundingRoutes.map((f) => (
              <div key={f.title} className={`${styles.s11Card} ${styles[`s11Tint_${f.tint}`]}`}>
                <div className={styles.s11CardIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.s11CardTitle}>{f.title}</h3>
                <p className={styles.s11CardBody}>{f.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.s11Timeline}>
            <div className={styles.s11TimelineTitle}>Typical Implementation Timeline</div>
            <ol className={styles.s11TimelineFlow}>
              <li className={styles.s11TimelineStep}><span className={styles.s11TimelinePhase}>Phase 1</span><span className={styles.s11TimelineLabel}>Discovery &amp; Scoping</span><span className={styles.s11TimelineWeeks}>2–4 weeks</span></li>
              <li className={styles.s11TimelineStep}><span className={styles.s11TimelinePhase}>Phase 2</span><span className={styles.s11TimelineLabel}>Lab Design &amp; Funding Mix</span><span className={styles.s11TimelineWeeks}>4–8 weeks</span></li>
              <li className={styles.s11TimelineStep}><span className={styles.s11TimelinePhase}>Phase 3</span><span className={styles.s11TimelineLabel}>Setup &amp; Integration</span><span className={styles.s11TimelineWeeks}>8–16 weeks</span></li>
              <li className={styles.s11TimelineStep}><span className={styles.s11TimelinePhase}>Phase 4</span><span className={styles.s11TimelineLabel}>Faculty Training &amp; Rollout</span><span className={styles.s11TimelineWeeks}>Ongoing</span></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 12 — CUSTOMER LOGOS (slider)                            */}
      {/* ============================================================ */}
      <section className={styles.s12} id="customer-logos">
        <div className={styles.s12Inner}>
          <h2 className={styles.s12Heading}>Trusted by Leading Engineering Institutions</h2>
          <p className={styles.s12Intro}>Engineering colleges, universities, and technical institutes across India that partner with Knowx to build innovation labs, AICTE IDEA Labs, Centres of Excellence, and makerspaces.</p>

          <div className={styles.sliderWrap}>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`} aria-label="Scroll logos left" onClick={() => scrollBy(logosRef, -1)}>‹</button>
            <div ref={logosRef} className={styles.sliderTrack} role="list">
              {customerLogos.map((logo) => (
                <div key={logo.id} className={`${styles.slide} ${styles.logoSlide}`} role="listitem">
                  <div className={styles.logoBox}>
                    <span className={styles.logoLabel}>{logo.label}</span>
                    <span className={styles.logoSubLabel}>Placeholder — replace with real logo</span>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowRight}`} aria-label="Scroll logos right" onClick={() => scrollBy(logosRef, 1)}>›</button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 13 — GALLERY (slider)                                   */}
      {/* ============================================================ */}
      <section className={styles.s13} id="gallery">
        <div className={styles.s13Inner}>
          <h2 className={styles.s13Heading}>Inside Our Labs</h2>
          <p className={styles.s13Intro}>A look at innovation labs, AICTE IDEA Labs, makerspaces, and Centres of Excellence set up across engineering colleges — where students build real products, faculty run research programs, and industry projects come alive.</p>

          <div className={styles.sliderWrap}>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`} aria-label="Scroll gallery left" onClick={() => scrollBy(galleryRef, -1)}>‹</button>
            <div ref={galleryRef} className={styles.sliderTrack} role="list">
              {galleryItems.map((g) => (
                <div key={g.id} className={`${styles.slide} ${styles.gallerySlide}`} role="listitem">
                  <div className={styles.galleryBox}>
                    <div className={styles.galleryPlaceholder} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    </div>
                    <div className={styles.galleryCaption}>{g.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowRight}`} aria-label="Scroll gallery right" onClick={() => scrollBy(galleryRef, 1)}>›</button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 14 — REVIEWS / TESTIMONIALS (slider)                    */}
      {/* ============================================================ */}
      <section className={styles.s14} id="reviews">
        <div className={styles.s14Inner}>
          <h2 className={styles.s14Heading}>What Our Partner Institutions Say</h2>
          <p className={styles.s14Intro}>Voices from principals, HoDs, faculty coordinators, and student innovators at engineering colleges partnering with Knowx to build long-term innovation ecosystems.</p>

          <div className={styles.sliderWrap}>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`} aria-label="Scroll reviews left" onClick={() => scrollBy(reviewsRef, -1)}>‹</button>
            <div ref={reviewsRef} className={styles.sliderTrack} role="list">
              {testimonials.map((t) => (
                <div key={t.id} className={`${styles.slide} ${styles.reviewSlide}`} role="listitem">
                  <div className={styles.reviewBox}>
                    <div className={styles.reviewMark} aria-hidden="true">“</div>
                    <p className={styles.reviewQuote}>{t.quote}</p>
                    <div className={styles.reviewMeta}>
                      <div className={styles.reviewName}>{t.name}</div>
                      <div className={styles.reviewRole}>{t.role}</div>
                      <div className={styles.reviewInstitution}>{t.institution}</div>
                    </div>
                    <div className={styles.reviewPlaceholderTag}>Placeholder testimonial</div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowRight}`} aria-label="Scroll reviews right" onClick={() => scrollBy(reviewsRef, 1)}>›</button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 15 — SUCCESS METRICS + CONSULTATION CTA                 */}
      {/* ============================================================ */}
      <section className={styles.s15} id="metrics-cta">
        <div className={styles.s15Counters}>
          <div className={styles.s15CountersInner}>
            <h2 className={styles.s15CountersHeading}>Two Decades of Engineering Innovation Impact</h2>
            <div className={styles.s15CountersGrid}>
              <div className={styles.s15Counter}>
                <div className={styles.s15CounterNum}>20<span className={styles.s15CounterPlus}>+</span></div>
                <div className={styles.s15CounterLabel}>Years in Business</div>
              </div>
              <div className={styles.s15Counter}>
                <div className={styles.s15CounterNum}>10,000<span className={styles.s15CounterPlus}>+</span></div>
                <div className={styles.s15CounterLabel}>Students Trained</div>
              </div>
              <div className={styles.s15Counter}>
                <div className={styles.s15CounterNum}>1,000<span className={styles.s15CounterPlus}>+</span></div>
                <div className={styles.s15CounterLabel}>Projects Executed</div>
              </div>
            </div>
            <div className={styles.s15Underline} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.s15Banner}>
          <div className={styles.s15BannerInner}>
            <h3 className={styles.s15BannerHeading}>Ready to Transform Your Engineering Campus?</h3>
            <p className={styles.s15BannerBody}>Talk to our team about designing an AICTE IDEA Lab, Centre of Excellence, or complete engineering innovation ecosystem for your institution.</p>
            <div className={styles.s15CtaRow}>
              <button type="button" onClick={openModal} className={styles.s15CtaPrimary}>Schedule a Consultation</button>
              <button type="button" onClick={openModal} className={styles.s15CtaSecondary}>Download Brochure →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 16 — FAQ                                                */}
      {/* ============================================================ */}
      <section className={styles.s16} id="faq">
        <div className={styles.s16Inner}>
          <h2 className={styles.s16Heading}>Frequently Asked Questions</h2>
          <p className={styles.s16Intro}>Answers to common questions from principals, HoDs, and administrators evaluating an innovation ecosystem partner for their engineering college or university.</p>

          <div className={styles.s16List}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.s16Item}>
                <summary className={styles.s16Q}>
                  <span>{f.q}</span>
                  <span className={styles.s16QChevron} aria-hidden="true">+</span>
                </summary>
                <div className={styles.s16A}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* ============================================================ */}
      {/* CONSULTATION MODAL                                              */}
      {/* ============================================================ */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="eil-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="eil-modal-title" className={styles.modalTitle}>Schedule a Free Consultation</h3>
            <p className={styles.modalSubtitle}>Share a few details and our engineering education team will get in touch within one working day.</p>

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
                <input type="hidden" name="subject" value="Engineering Innovation Labs — Consultation Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — Engineering Innovation Labs page" />

                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Full Name<input required name="name" type="text" className={styles.modalInput} placeholder="Your name" /></label>
                  <label className={styles.modalLabel}>Role<input name="role" type="text" className={styles.modalInput} placeholder="Principal / HoD / Faculty" /></label>
                </div>
                <label className={styles.modalLabel}>Institution<input required name="institution" type="text" className={styles.modalInput} placeholder="Engineering college / university name" /></label>
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Email<input required name="email" type="email" className={styles.modalInput} placeholder="you@institution.edu" /></label>
                  <label className={styles.modalLabel}>Phone<input required name="phone" type="tel" className={styles.modalInput} placeholder="Contact number" /></label>
                </div>
                <label className={styles.modalLabel}>What are you looking to set up?<textarea name="message" className={styles.modalTextarea} rows={3} placeholder="AICTE IDEA Lab, CoE, Robotics Lab, Makerspace, faculty training..." /></label>

                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us by email.</div>)}

                <button type="submit" disabled={submitting} className={styles.modalSubmit}>
                  {submitting ? "Sending..." : "Send Request"}
                </button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about engineering innovation lab setup.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
