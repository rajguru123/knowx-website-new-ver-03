"use client";

import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Lab Equipment — Child page under Engineering Innovation Labs / IoT Lab Setup
 * URL: /engineering-innovation-labs/iot-lab-equipment/
 *
 * Built complete in a single pass — all 18 sections.
 * Icon-based throughout — no images/photos (see chat rationale: category/decision
 * page, not a product catalog; icons keep it fast and consistent with the rest
 * of the site).
 */

/* ---------- shared icon helper (inline SVGs, minimal markup) ---------- */
const Icon = {
  boards: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>),
  sensors: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 1 7 0M5.5 5.5a9 9 0 0 1 13 0M15.5 15.5a5 5 0 0 1-7 0M18.5 18.5a9 9 0 0 1-13 0"/></svg>),
  comm: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>),
  edge: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>),
  industrial: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>),
  infra: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>),
  check: (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  cpu: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>),
  pi: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 8l8 8M16 8l-8 8"/></svg>),
  vision: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>),
  code: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>),
  wave: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/></svg>),
  gauge: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 12l4-4M8 12a4 4 0 1 1 8 0"/></svg>),
  dept: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
};

/* ---------- Section 4 — category grid ---------- */
type CatTint = "green" | "blue" | "amber" | "teal";
const categories: { title: string; body: string; anchor: string; tint: CatTint; icon: JSX.Element }[] = [
  { title: "IoT Development Boards", body: "ESP32, STM32, Raspberry Pi and other supported platforms.", anchor: "#dev-boards", tint: "green", icon: Icon.boards },
  { title: "Sensors & Actuators", body: "Sensors, motors, relays, servos and other modules.", anchor: "#sensors", tint: "blue", icon: Icon.sensors },
  { title: "Communication & Connectivity", body: "Connectivity and communication hardware for connected applications.", anchor: "#communication", tint: "amber", icon: Icon.comm },
  { title: "Edge Computing Devices", body: "Raspberry Pi, cameras and edge-computing platforms.", anchor: "#edge-computing", tint: "teal", icon: Icon.edge },
  { title: "Industrial IoT Equipment", body: "Industrial sensors, gateways, automation and related hardware.", anchor: "#industrial-iot", tint: "green", icon: Icon.industrial },
  { title: "Networking & Lab Infrastructure", body: "Networking, workstations, power, storage and supporting infrastructure.", anchor: "#infrastructure", tint: "blue", icon: Icon.infra },
];

/* ---------- Section 5 — Development boards ---------- */
const boards: { title: string; icon: JSX.Element; items: string[] }[] = [
  { title: "ESP32 Development Platforms", icon: Icon.wave, items: ["Wi-Fi & Bluetooth connectivity", "Sensor integration", "Embedded IoT applications", "Cloud connectivity", "MQTT protocol support", "Web & mobile app integration"] },
  { title: "STM32 Platforms", icon: Icon.cpu, items: ["Embedded systems development", "Real-time applications", "RTOS (FreeRTOS / Zephyr)", "Peripheral programming", "Industrial applications", "Automotive & control systems"] },
  { title: "Raspberry Pi Platforms", icon: Icon.pi, items: ["Edge computing", "IoT gateways", "Python development", "Computer vision", "AI & ML inference", "Linux & cloud/edge applications"] },
];

/* ---------- Section 6 — Sensors & Actuators ---------- */
const sensorGroups: { title: string; items: string[] }[] = [
  { title: "Environmental Sensors", items: ["Temperature", "Humidity", "Light", "Air quality", "Gas"] },
  { title: "Motion & Position", items: ["PIR (motion)", "Ultrasonic", "Proximity", "Position sensors"] },
  { title: "Industrial Sensors", items: ["Pressure", "Current", "Vibration", "Industrial monitoring"] },
  { title: "Actuators", items: ["DC & servo motors", "Relays", "LEDs", "Buzzers", "Other output modules"] },
];

/* ---------- Section 7 — Communication ---------- */
const commItems = ["Wi-Fi", "Bluetooth / BLE", "LoRa / LoRaWAN", "MQTT-enabled systems", "Ethernet", "Cellular connectivity (where relevant)", "Industrial communication (Modbus, RS485)"];

/* ---------- Section 9 — Industrial IoT ---------- */
const industrialItems = ["Industrial sensors", "Industrial gateways", "Automation hardware", "SCADA-related systems", "Industrial communication protocols", "Predictive maintenance hardware", "Smart manufacturing equipment"];

/* ---------- Section 10 — Infrastructure ---------- */
const infraItems = ["Student workstations", "Lab networking", "Power & connectivity", "Equipment storage", "Faculty workstation", "Demonstration areas", "Project development areas", "Installation & configuration"];

/* ---------- Section 11 — Requirements table ---------- */
const reqRows: { category: string; examples: string; purpose: string }[] = [
  { category: "Development Boards", examples: "ESP32, STM32, Raspberry Pi", purpose: "Device development" },
  { category: "Sensors", examples: "Temperature, motion, light, gas etc.", purpose: "Data acquisition" },
  { category: "Actuators", examples: "Motors, relays, servos", purpose: "Device control" },
  { category: "Communication", examples: "Wi-Fi, Bluetooth, LoRa etc.", purpose: "Connectivity" },
  { category: "Edge Devices", examples: "Raspberry Pi, cameras", purpose: "Edge processing" },
  { category: "Industrial Hardware", examples: "Sensors, gateways", purpose: "Industrial IoT" },
  { category: "Networking", examples: "Routers, switches etc.", purpose: "Connected lab" },
  { category: "Software", examples: "Development tools", purpose: "Programming / testing" },
  { category: "Workstations", examples: "Student PCs", purpose: "Development" },
  { category: "Infrastructure", examples: "Power, storage etc.", purpose: "Lab operation" },
];

/* ---------- Section 12 — By department ---------- */
type DeptTint = "green" | "blue" | "amber" | "teal";
const depts: { title: string; items: string[]; tint: DeptTint }[] = [
  { title: "CSE / ISE", items: ["Programming", "Cloud", "IoT applications", "Edge computing", "APIs", "Dashboards"], tint: "green" },
  { title: "ECE", items: ["Embedded systems", "Sensors", "Communication", "Microcontrollers", "Wireless systems"], tint: "blue" },
  { title: "EEE", items: ["Industrial IoT", "Energy monitoring", "Sensors", "Automation"], tint: "amber" },
  { title: "AI / Data Science", items: ["Edge AI", "Computer vision", "IoT data", "Intelligent systems"], tint: "teal" },
  { title: "Mechanical / Industrial", items: ["Industrial IoT", "Smart manufacturing", "Predictive maintenance", "Industry 4.0"], tint: "green" },
];

/* ---------- Section 13 — How to choose (10 questions) ---------- */
const chooseQuestions = [
  "What is the student capacity?",
  "Which departments will use the lab?",
  "What technologies are taught?",
  "How many experiments are required?",
  "Are final-year projects included?",
  "Is Industrial IoT required?",
  "Is Edge AI required?",
  "Does the institution need faculty training?",
  "Does the institution need installation?",
  "What level of technical support is required?",
];

/* ---------- Section 14 — Packages (no prices/specs) ---------- */
const packages: { title: string; body: string }[] = [
  { title: "Foundation Equipment Package", body: "For introductory IoT education — core development boards, essential sensors and basic connectivity for first-time IoT learners." },
  { title: "Professional IoT Equipment Package", body: "For engineering departments and regular laboratory use — broader platform coverage, cloud IoT integration and structured experiment support." },
  { title: "Advanced Industrial IoT Package", body: "For final-year projects, research and Industry 4.0 applications — industrial hardware, edge AI and smart manufacturing equipment." },
];

/* ---------- Section 15 — Equipment vs Kits ---------- */
const vsRows: { equipment: string; kits: string }[] = [
  { equipment: "Individual hardware / components", kits: "Ready-to-use learning package" },
  { equipment: "Used to build a laboratory", kits: "Used for structured learning / projects" },
  { equipment: "Boards, sensors, actuators, infrastructure", kits: "Hardware + experiments + projects + resources" },
  { equipment: "Mainly institutional procurement", kits: "Students, faculty, departments and colleges" },
];

/* ---------- Section 16 — Why Knowx ---------- */
const whyKnowx: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Complete Laboratory Perspective", body: "Equipment is selected with the overall laboratory in mind, not as isolated purchases.", icon: Icon.infra },
  { title: "Engineering Education Focus", body: "Hardware aligned with practical learning and project development outcomes.", icon: Icon.dept },
  { title: "Multiple Technology Platforms", body: "ESP32, STM32, Raspberry Pi and Industrial IoT technologies under one partner.", icon: Icon.boards },
  { title: "Lab Integration", body: "Equipment combined with infrastructure, installation and training as one solution.", icon: Icon.check },
  { title: "Faculty Enablement", body: "Supporting resources and training included so faculty can teach confidently.", icon: Icon.code },
  { title: "Technical Support", body: "Support throughout implementation and ongoing laboratory use.", icon: Icon.gauge },
  { title: "Pan-India Service", body: "Serving engineering institutions across India with consistent delivery.", icon: Icon.industrial },
];

/* ---------- Section 17 — FAQ (10 questions) ---------- */
const faqs: { q: string; a: string }[] = [
  { q: "What equipment is required for an IoT lab?", a: "An IoT lab typically requires development boards (ESP32, STM32, Raspberry Pi), sensors and actuators, communication modules, edge computing devices, industrial IoT hardware where relevant, networking infrastructure, software tools and student workstations. The exact mix depends on curriculum, student capacity and department focus." },
  { q: "What is included in IoT lab equipment?", a: "IoT lab equipment spans development boards, sensors and actuators, communication and connectivity modules, edge computing and AI hardware, industrial IoT equipment, and the supporting lab infrastructure — networking, workstations, power and storage — needed to run a functional laboratory." },
  { q: "Which IoT development boards are suitable for engineering colleges?", a: "ESP32 is well suited for Wi-Fi/Bluetooth IoT applications and cloud connectivity. STM32 is a strong choice for embedded systems, real-time and industrial applications. Raspberry Pi is ideal for edge computing, computer vision and AI-enabled IoT. Most labs benefit from a mix of all three based on learning objectives." },
  { q: "What sensors are required for an IoT laboratory?", a: "Sensor requirements depend on the experiments and applications your curriculum covers — common categories include environmental sensors (temperature, humidity, gas), motion and position sensors, and industrial sensors (pressure, current, vibration) for advanced or Industry 4.0 focused labs." },
  { q: "Do you provide IoT lab equipment for engineering colleges?", a: "Yes. Knowx India sources, supplies and integrates IoT lab equipment across development boards, sensors, communication modules, edge computing devices, industrial IoT hardware and lab infrastructure for engineering colleges and universities." },
  { q: "Can KnowX design a complete IoT lab equipment list?", a: "Yes. We help institutions identify the right equipment configuration based on student capacity, departments involved, curriculum focus and academic objectives — rather than offering a generic, one-size-fits-all list." },
  { q: "Do you provide IoT lab installation and training?", a: "Yes. Beyond equipment supply, we handle installation and configuration, and provide faculty training so your team can confidently run practical sessions using the supplied equipment." },
  { q: "What is the difference between IoT lab equipment and IoT kits?", a: "IoT lab equipment refers to individual hardware and infrastructure used to build a laboratory — boards, sensors, actuators and supporting systems. IoT kits are ready-to-use learning packages that combine hardware with structured experiments, projects and resources for direct classroom use." },
  { q: "Can you supply IoT lab equipment across India?", a: "Yes. Knowx India supplies and supports IoT lab equipment for engineering institutions across India, with a strong regional presence in Bangalore and Karnataka." },
  { q: "Can IoT equipment be customized for VTU engineering colleges?", a: "Yes. We help VTU-affiliated engineering colleges configure IoT lab equipment aligned to their curriculum and practical session requirements, based on actual department needs rather than a fixed package." },
];

export default function IotLabEquipmentClient() {
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
    <div className={`iole-scope ${styles.scope}`}>

      {/* ============================================================
          SECTION 1 — HERO (+ breadcrumb)
          ============================================================ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link href="/engineering-innovation-labs" className={styles.breadcrumbLink}>Engineering Innovation Labs</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>IoT Lab Equipment</span>
          </nav>

          <span className={styles.heroTag}>IoT Lab Equipment · Engineering Institutions Across India</span>
          <h1 className={styles.heroHeadline}>
            IoT Lab Equipment for{" "}
            <span className={styles.heroHeadlineAccent}>Engineering Colleges</span>
          </h1>
          <p className={styles.heroSubhead}>
            Equip your engineering laboratory with the hardware, development platforms,
            sensors, communication modules, edge devices and infrastructure required for
            practical IoT education and project-based learning.
          </p>
          <p className={styles.heroSubheadB}>
            Knowx India provides IoT laboratory equipment and integrated solutions for
            engineering colleges, universities, innovation centres and research
            environments across India.
          </p>

          <div className={styles.heroCtaRow}>
            <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Request IoT Equipment Quote</button>
            <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Talk to an IoT Lab Expert →</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — QUICK BENEFITS STRIP
          ============================================================ */}
      <section className={styles.s2} id="benefits">
        <div className={styles.s2Inner}>
          <div className={styles.s2Grid}>
            <div className={styles.s2Card}>
              <h3 className={styles.s2CardTitle}>Complete Equipment Range</h3>
              <p className={styles.s2CardBody}>From development boards and sensors to industrial IoT hardware.</p>
            </div>
            <div className={styles.s2Card}>
              <h3 className={styles.s2CardTitle}>Engineering Education Focus</h3>
              <p className={styles.s2CardBody}>Equipment selected for practical learning and project development.</p>
            </div>
            <div className={styles.s2Card}>
              <h3 className={styles.s2CardTitle}>Lab Integration</h3>
              <p className={styles.s2CardBody}>Equipment can be planned as part of a complete laboratory setup.</p>
            </div>
            <div className={styles.s2Card}>
              <h3 className={styles.s2CardTitle}>Installation &amp; Support</h3>
              <p className={styles.s2CardBody}>Implementation, configuration, training and technical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — COMPLETE IOT LAB EQUIPMENT (intro)
          ============================================================ */}
      <section className={styles.s3} id="complete-equipment">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Complete IoT Lab Equipment</h2>
          <p className={styles.s3Para}>
            An effective IoT laboratory requires more than individual development boards.
            Students need a combination of controllers, sensors, communication
            technologies, edge devices, software and supporting infrastructure to build
            complete connected applications.
          </p>
          <p className={styles.s3Para}>
            Knowx India helps engineering institutions identify and configure the
            equipment required for practical IoT learning, experimentation, projects and
            advanced applications.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — EQUIPMENT CATEGORY GRID (6 clickable cards)
          ============================================================ */}
      <section className={styles.s4} id="categories">
        <div className={styles.s4Inner}>
          <div className={styles.s4Grid}>
            {categories.map((c) => (
              <a key={c.title} href={c.anchor} className={`${styles.s4Card} ${styles[`s4Tint_${c.tint}`]}`}>
                <div className={styles.s4CardIcon} aria-hidden="true">{c.icon}</div>
                <h3 className={styles.s4CardTitle}>{c.title}</h3>
                <p className={styles.s4CardBody}>{c.body}</p>
                <span className={styles.s4CardLink}>Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — IOT DEVELOPMENT BOARDS
          ============================================================ */}
      <section className={styles.s5} id="dev-boards">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>IoT Development Boards</h2>
          <div className={styles.s5Grid}>
            {boards.map((b) => (
              <div key={b.title} className={styles.s5Card}>
                <div className={styles.s5CardIcon} aria-hidden="true">{b.icon}</div>
                <h3 className={styles.s5CardTitle}>{b.title}</h3>
                <ul className={styles.s5CardItems}>
                  {b.items.map((item) => (<li key={item} className={styles.s5CardItem}><span className={styles.s5Dot} aria-hidden="true" />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.s5CtaRow}>
            <p className={styles.s5CtaText}>Need help selecting development platforms?</p>
            <button type="button" onClick={openModal} className={styles.s5CtaPrimary}>Talk to a KnowX Lab Expert</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — SENSORS & ACTUATORS
          ============================================================ */}
      <section className={styles.s6} id="sensors">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>IoT Sensors &amp; Actuators</h2>
          <p className={styles.s6Intro}>Sensor and actuator requirements depend on the experiments and applications your curriculum covers.</p>
          <div className={styles.s6Grid}>
            {sensorGroups.map((g) => (
              <div key={g.title} className={styles.s6Card}>
                <h3 className={styles.s6CardTitle}>{g.title}</h3>
                <ul className={styles.s6CardItems}>
                  {g.items.map((item) => (<li key={item} className={styles.s6CardItem}>{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — COMMUNICATION & CONNECTIVITY
          ============================================================ */}
      <section className={styles.s7} id="communication">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>Communication &amp; Connectivity Equipment</h2>
          <p className={styles.s7Intro}>
            IoT devices need to communicate — with each other, with gateways, and with
            the cloud. The equipment below covers the connectivity technologies that
            belong in a well-equipped IoT laboratory.
          </p>
          <ul className={styles.s7Chips} aria-label="Communication and connectivity equipment">
            {commItems.map((item) => (<li key={item} className={styles.s7Chip}>{item}</li>))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 — EDGE COMPUTING & AI HARDWARE
          ============================================================ */}
      <section className={styles.s8} id="edge-computing">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>Edge Computing &amp; AI Hardware</h2>
          <div className={styles.s8Grid}>
            <div className={styles.s8Card}>
              <div className={styles.s8CardIcon} aria-hidden="true">{Icon.pi}</div>
              <h3 className={styles.s8CardTitle}>Raspberry Pi / Edge Computing</h3>
              <ul className={styles.s8CardItems}>
                {["Local processing", "IoT gateways", "Edge applications", "Python development", "Computer vision"].map((i) => (<li key={i} className={styles.s8CardItem}>{i}</li>))}
              </ul>
            </div>
            <div className={styles.s8Card}>
              <div className={styles.s8CardIcon} aria-hidden="true">{Icon.vision}</div>
              <h3 className={styles.s8CardTitle}>AI &amp; Vision Hardware</h3>
              <ul className={styles.s8CardItems}>
                {["AI cameras", "Vision modules", "Edge AI platforms"].map((i) => (<li key={i} className={styles.s8CardItem}>{i}</li>))}
              </ul>
            </div>
          </div>
          <p className={styles.s8CrossLink}>
            Looking for a complete AI laboratory?{" "}
            <button type="button" onClick={openModal} className={styles.s8CrossLinkBtn}>Explore our AI Lab Setup →</button>
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 9 — INDUSTRIAL IOT EQUIPMENT
          ============================================================ */}
      <section className={styles.s9} id="industrial-iot">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>Industrial IoT Equipment</h2>
          <p className={styles.s9Intro}>
            For institutions focused on Industry 4.0 and smart manufacturing, Knowx
            India supplies industrial-grade IoT hardware built for real factory-floor
            scenarios.
          </p>
          <ul className={styles.s9Chips} aria-label="Industrial IoT equipment">
            {industrialItems.map((item) => (<li key={item} className={styles.s9Chip}>{item}</li>))}
          </ul>
          <div className={styles.s9CtaRow}>
            <button type="button" onClick={openModal} className={styles.s9CtaPrimary}>Explore Industrial IoT Solutions →</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10 — IOT LAB INFRASTRUCTURE
          ============================================================ */}
      <section className={styles.s10} id="infrastructure">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>IoT Lab Infrastructure</h2>
          <div className={styles.s10Grid}>
            {infraItems.map((item) => (
              <div key={item} className={styles.s10Item}>
                <span className={styles.s10ItemDot} aria-hidden="true" />{item}
              </div>
            ))}
          </div>
          <p className={styles.s10Para}>
            Knowx India can help integrate equipment into a complete laboratory
            environment — rather than treating each component as an isolated purchase.
          </p>
          <div className={styles.s10CtaRow}>
            <Link href="/engineering-innovation-labs/iot-lab-setup" className={styles.s10CtaPrimary}>Complete IoT Lab Setup →</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 — EQUIPMENT REQUIRED FOR AN IOT LAB (table)
          ============================================================ */}
      <section className={styles.s11} id="requirements">
        <div className={styles.s11Inner}>
          <h2 className={styles.s11Heading}>Equipment Required for an IoT Lab</h2>
          <div className={styles.s11Table} role="table" aria-label="Equipment required for an IoT lab">
            <div className={styles.s11HeaderRow} role="row">
              <div className={`${styles.s11Cell} ${styles.s11HCat}`} role="columnheader">Equipment Category</div>
              <div className={`${styles.s11Cell} ${styles.s11HEx}`} role="columnheader">Examples</div>
              <div className={`${styles.s11Cell} ${styles.s11HPurpose}`} role="columnheader">Purpose</div>
            </div>
            {reqRows.map((row, i) => (
              <div key={row.category} className={`${styles.s11DataRow} ${i % 2 === 1 ? styles.s11RowAlt : ""}`} role="row">
                <div className={`${styles.s11Cell} ${styles.s11DCat}`} role="cell"><span className={styles.s11MobileLabel}>Category</span>{row.category}</div>
                <div className={`${styles.s11Cell} ${styles.s11DEx}`} role="cell"><span className={styles.s11MobileLabel}>Examples</span>{row.examples}</div>
                <div className={`${styles.s11Cell} ${styles.s11DPurpose}`} role="cell"><span className={styles.s11MobileLabel}>Purpose</span>{row.purpose}</div>
              </div>
            ))}
          </div>
          <div className={styles.s11CtaRow}>
            <p className={styles.s11CtaText}>Need a customized IoT lab equipment list?</p>
            <button type="button" onClick={openModal} className={styles.s11CtaPrimary}>Request a Consultation</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12 — EQUIPMENT BY ENGINEERING DEPARTMENT
          ============================================================ */}
      <section className={styles.s12} id="by-department">
        <div className={styles.s12Inner}>
          <h2 className={styles.s12Heading}>IoT Lab Equipment for Different Engineering Departments</h2>
          <div className={styles.s12Grid}>
            {depts.map((d) => (
              <div key={d.title} className={`${styles.s12Card} ${styles[`s12Tint_${d.tint}`]}`}>
                <h3 className={styles.s12CardTitle}>{d.title}</h3>
                <ul className={styles.s12CardItems}>
                  {d.items.map((item) => (<li key={item} className={styles.s12CardItem}><span className={styles.s12Dot} aria-hidden="true" />{item}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13 — HOW TO CHOOSE IOT LAB EQUIPMENT
          ============================================================ */}
      <section className={styles.s13} id="how-to-choose">
        <div className={styles.s13Inner}>
          <h2 className={styles.s13Heading}>How to Choose IoT Lab Equipment</h2>
          <ol className={styles.s13List}>
            {chooseQuestions.map((q, i) => (
              <li key={q} className={styles.s13Item}>
                <span className={styles.s13Num}>{i + 1}</span>
                <span className={styles.s13Text}>{q}</span>
              </li>
            ))}
          </ol>
          <div className={styles.s13CtaRow}>
            <button type="button" onClick={openModal} className={styles.s13CtaPrimary}>Get a Customized Equipment Recommendation</button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14 — COMPLETE IOT LAB EQUIPMENT PACKAGES
          No prices, no specs — CTA only
          ============================================================ */}
      <section className={styles.s14} id="packages">
        <div className={styles.s14Inner}>
          <h2 className={styles.s14Heading}>Complete IoT Lab Equipment Packages</h2>
          <div className={styles.s14Grid}>
            {packages.map((p) => (
              <div key={p.title} className={styles.s14Card}>
                <h3 className={styles.s14CardTitle}>{p.title}</h3>
                <p className={styles.s14CardBody}>{p.body}</p>
                <button type="button" onClick={openModal} className={styles.s14CardCta}>Request Configuration</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 15 — IOT EQUIPMENT VS IOT KITS
          ============================================================ */}
      <section className={styles.s15} id="equipment-vs-kits">
        <div className={styles.s15Inner}>
          <h2 className={styles.s15Heading}>IoT Equipment vs. IoT Kits</h2>
          <div className={styles.s15Table} role="table" aria-label="IoT equipment versus IoT kits">
            <div className={styles.s15HeaderRow} role="row">
              <div className={`${styles.s15Cell} ${styles.s15HEquip}`} role="columnheader">IoT Lab Equipment</div>
              <div className={`${styles.s15Cell} ${styles.s15HKits}`} role="columnheader">IoT Kits</div>
            </div>
            {vsRows.map((row, i) => (
              <div key={i} className={`${styles.s15DataRow} ${i % 2 === 1 ? styles.s15RowAlt : ""}`} role="row">
                <div className={`${styles.s15Cell} ${styles.s15DEquip}`} role="cell">{row.equipment}</div>
                <div className={`${styles.s15Cell} ${styles.s15DKits}`} role="cell">{row.kits}</div>
              </div>
            ))}
          </div>
          <p className={styles.s15CrossLink}>
            Looking for ready-to-use learning kits?{" "}
            <Link href="/engineering-innovation-labs/iot-kits" className={styles.s15CrossLinkBtn}>Explore IoT Kits →</Link>
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 16 — WHY CHOOSE KNOWX (dark green)
          ============================================================ */}
      <section className={styles.s16} id="why-knowx">
        <div className={styles.s16Inner}>
          <span className={styles.s16Tag}>Why Knowx India</span>
          <h2 className={styles.s16Heading}>Why Choose Knowx India for IoT Lab Equipment?</h2>
          <div className={styles.s16Grid}>
            {whyKnowx.map((w) => (
              <div key={w.title} className={styles.s16Card}>
                <div className={styles.s16CardIcon} aria-hidden="true">{w.icon}</div>
                <h3 className={styles.s16CardTitle}>{w.title}</h3>
                <p className={styles.s16CardBody}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 17 — FAQ + JSON-LD
          ============================================================ */}
      <section className={styles.s17} id="faq">
        <div className={styles.s17Inner}>
          <h2 className={styles.s17Heading}>IoT Lab Equipment — Frequently Asked Questions</h2>
          <div className={styles.s17List}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.s17Item}>
                <summary className={styles.s17Q}>
                  <span>{f.q}</span>
                  <span className={styles.s17QChevron} aria-hidden="true">+</span>
                </summary>
                <div className={styles.s17A}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>

      {/* ============================================================
          SECTION 18 — FINAL CTA
          ============================================================ */}
      <section className={styles.s18} id="cta">
        <div className={styles.s18Inner}>
          <h2 className={styles.s18Heading}>Need the Right Equipment for Your IoT Laboratory?</h2>
          <p className={styles.s18Body}>
            Tell us your institution&apos;s requirements, student capacity, departments
            and laboratory objectives. Knowx India can help you identify the appropriate
            combination of IoT development platforms, sensors, communication equipment,
            edge devices, industrial IoT hardware and laboratory infrastructure.
          </p>
          <div className={styles.s18CtaRow}>
            <button type="button" onClick={openModal} className={styles.s18CtaPrimary}>Request an IoT Equipment Quote</button>
            <Link href="/engineering-innovation-labs/iot-lab-setup" className={styles.s18CtaSecondary}>Plan My IoT Laboratory</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          MODAL
          ============================================================ */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="iole-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="iole-modal-title" className={styles.modalTitle}>Request an IoT Equipment Quote</h3>
            <p className={styles.modalSubtitle}>Share your requirements and our IoT lab team will get in touch within one working day.</p>
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
                <input type="hidden" name="subject" value="IoT Lab Equipment — Quote Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — IoT Lab Equipment page" />
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
                  <label className={styles.modalLabel}>Department(s)<input name="department" type="text" className={styles.modalInput} placeholder="ECE / CSE / EEE / ISE" /></label>
                  <label className={styles.modalLabel}>Number of Students<input name="students" type="text" className={styles.modalInput} placeholder="e.g. 60 per batch" /></label>
                </div>
                <label className={styles.modalLabel}>Equipment Requirement / Message
                  <textarea name="message" className={styles.modalTextarea} rows={3} placeholder="Development boards, sensors, industrial IoT, complete package..." />
                </label>
                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us directly by email.</div>)}
                <button type="submit" disabled={submitting} className={styles.modalSubmit}>{submitting ? "Sending..." : "Send Quote Request"}</button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about IoT lab equipment.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
