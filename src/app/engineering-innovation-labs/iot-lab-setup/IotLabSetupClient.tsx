"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/iot-lab-setup/
 *
 * Step 4 — Sections 6 + 7 + 8 built.
 *   - Section 6: IoT Lab Experiments & Project-Based Learning (8 domain cards)
 *   - Section 7: IoT Lab Requirements Table (11 rows, responsive)
 *   - Section 8: IoT Lab Setup for VTU Engineering Colleges (checklist + CTA)
 * Sections 9–14 remain as placeholders.
 */

const heroTrust = [
  "Complete Lab Design & Setup",
  "IoT Equipment & Kits",
  "Curriculum Experiments",
  "Faculty Training",
  "Student Project Support",
  "Pan-India Implementation",
];

const s2Checklist = [
  "IoT laboratory planning and infrastructure design",
  "IoT development platforms and microcontroller boards",
  "Sensors, actuators, and data acquisition systems",
  "Wireless communication and connectivity modules",
  "Embedded systems and real-time computing platforms",
  "IoT project kits for hands-on student experiments",
  "Cloud IoT platforms and dashboard development tools",
  "Industrial IoT and Industry 4.0 learning systems",
  "Networking infrastructure for connected lab environments",
  "Structured IoT experiments and PBL resources",
  "Faculty training and curriculum enablement programs",
  "IoT lab installation, configuration, and commissioning",
  "Student project mentoring and technical support",
  "Ongoing lab maintenance and operational support",
];

type TagTint = "green" | "blue" | "amber" | "teal";
const s3Tags: { label: string; tint: TagTint }[] = [
  { label: "IoT", tint: "green" },
  { label: "Embedded Systems", tint: "blue" },
  { label: "Sensor Technologies", tint: "amber" },
  { label: "Wireless Communication", tint: "teal" },
  { label: "Cloud-Connected Applications", tint: "green" },
  { label: "Edge Computing", tint: "blue" },
  { label: "Industrial IoT", tint: "amber" },
  { label: "Automation", tint: "teal" },
  { label: "Data Acquisition", tint: "green" },
  { label: "AI-enabled IoT", tint: "blue" },
];

type EquipTint = "green" | "blue" | "amber" | "teal";
const s4Equipment: { title: string; body: string; items: string[]; tint: EquipTint; icon: JSX.Element }[] = [
  { title: "IoT Development Platforms", body: "Microcontroller and single-board computer platforms for building connected IoT devices.", items: ["ESP32 Wi-Fi + BLE boards", "Raspberry Pi 4 / 5", "STM32 development boards", "Arduino boards", "Jetson Nano / Orin Nano", "BeagleBone Black"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Sensors & Actuators", body: "A comprehensive sensor ecosystem for data acquisition, measurement, and device control.", items: ["Temperature & humidity sensors", "Gas & air quality sensors", "IMU & motion sensors", "LiDAR & ultrasonic", "Load cells & pressure sensors", "Soil moisture & water quality"], tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 1 7 0M5.5 5.5a9 9 0 0 1 13 0M15.5 15.5a5 5 0 0 1-7 0M18.5 18.5a9 9 0 0 1-13 0"/></svg>) },
  { title: "Communication & Connectivity", body: "Wireless and wired modules enabling device-to-device and device-to-cloud connectivity.", items: ["Wi-Fi & Bluetooth modules", "LoRa & LoRaWAN gateways", "Zigbee & Z-Wave modules", "NB-IoT & 4G LTE modules", "MQTT broker & protocol stack", "RS485 & Modbus interfaces"], tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>) },
  { title: "Edge Computing Platforms", body: "Local processing and AI inference at the edge — reducing latency, enabling real-time decisions.", items: ["NVIDIA Jetson Nano / Orin", "Raspberry Pi CM4 gateway", "AI cameras & depth sensors", "Edge vision modules", "OpenCV & TensorFlow Lite", "IoT gateway hardware"], tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Industrial IoT Equipment", body: "Industry 4.0 hardware for teaching smart factory concepts and industrial automation.", items: ["PLC & SCADA systems", "Industrial sensors & transmitters", "HMI touch panels", "Predictive maintenance kits", "Digital twin simulation tools", "Smart factory demo setups"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
  { title: "Laboratory Infrastructure", body: "Complete supporting infrastructure for a functional, safe, and well-connected IoT lab.", items: ["Student workstations & monitors", "Lab networking & Wi-Fi APs", "Structured cabling & patch panels", "UPS & power distribution", "Faculty demonstration station", "ESD mats & safety equipment"], tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>) },
];

type KitTint = "green" | "blue" | "amber" | "teal";
const s5Kits: { title: string; badge: string; idealFor: string; capabilities: string[]; tint: KitTint; imgAlt: string; imgGradient: string }[] = [
  { title: "IoT Starter Kit", badge: "Beginner", idealFor: "First-year students & IoT fundamentals courses", capabilities: ["30+ structured experiments", "10 guided mini projects", "ESP32 Wi-Fi + Bluetooth", "Plug-and-play sensor modules", "Step-by-step experiment guides", "Mobile app integration basics"], tint: "green", imgAlt: "IoT Starter Kit for engineering students — Knowx India", imgGradient: "linear-gradient(135deg,#0f766e 0%,#0d9488 100%)" },
  { title: "ESP32 Professional IoT Kit", badge: "Intermediate", idealFor: "ECE / CSE 2nd & 3rd year IoT & embedded courses", capabilities: ["60+ experiments across domains", "25 industry-grade IoT projects", "40+ sensor & actuator modules", "Cloud IoT — AWS · Azure · GCP", "MQTT · HTTP · REST protocols", "Mobile dashboard development"], tint: "blue", imgAlt: "ESP32 Professional IoT Kit — Knowx India", imgGradient: "linear-gradient(135deg,#1e3a8a 0%,#2d5cc8 100%)" },
  { title: "Industrial IoT Kit", badge: "Advanced", idealFor: "Final-year projects, Industry 4.0 & Industrial IoT labs", capabilities: ["80+ industrial experiments", "30 Industry 4.0 projects", "ESP32 + STM32 + Raspberry Pi", "SCADA & PLC integration", "Predictive maintenance demos", "Smart factory scenario kits"], tint: "amber", imgAlt: "Industrial IoT Kit for engineering colleges — Knowx India", imgGradient: "linear-gradient(135deg,#b45309 0%,#d97706 100%)" },
  { title: "Raspberry Pi Edge AI Kit", badge: "AI + IoT", idealFor: "AI & IoT programs, Edge computing & Vision labs", capabilities: ["Linux & Python environment", "AI / ML model deployment", "Computer vision with OpenCV", "Edge AI inference (TFLite)", "IoT gateway implementation", "Cloud + edge hybrid setup"], tint: "teal", imgAlt: "Raspberry Pi Edge AI Kit — Knowx India", imgGradient: "linear-gradient(135deg,#0d9488 0%,#0f766e 100%)" },
  { title: "STM32 Embedded Systems Kit", badge: "Embedded", idealFor: "Embedded systems, RTOS & industrial protocol labs", capabilities: ["Embedded C & firmware dev", "RTOS — FreeRTOS / Zephyr", "Industrial protocols (Modbus, CAN)", "Real-time system design", "Automotive & industrial use cases", "Hardware debugging & profiling"], tint: "green", imgAlt: "STM32 Embedded Systems Kit — Knowx India", imgGradient: "linear-gradient(135deg,#0f766e 0%,#1e3a8a 100%)" },
  { title: "Smart Factory Learning Platform", badge: "Industry 4.0", idealFor: "Innovation centres, CoEs & smart manufacturing labs", capabilities: ["Smart manufacturing simulation", "Digital factory modelling", "Machine vision integration", "AI predictive maintenance", "OPC-UA & Industry 4.0 stack", "Complete IIoT ecosystem demo"], tint: "blue", imgAlt: "Smart Factory Learning Platform — Knowx India", imgGradient: "linear-gradient(135deg,#1e3a8a 0%,#0d9488 100%)" },
];

/* ─── Section 6 — 8 experiment domains ─── */
type ExpTint = "green" | "blue" | "amber" | "teal";
const s6Experiments: { title: string; items: string[]; tint: ExpTint; icon: JSX.Element }[] = [
  { title: "IoT Fundamentals", items: ["Introduction to IoT architecture", "Device programming basics", "Sensor interfacing", "Basic wireless communication", "Data acquisition & logging"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>) },
  { title: "Sensor & Actuator Applications", items: ["Temperature & humidity systems", "Gas & air quality monitoring", "Motion & proximity sensing", "Actuator control systems", "Multi-sensor data fusion"], tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 1 7 0M5.5 5.5a9 9 0 0 1 13 0M15.5 15.5a5 5 0 0 1-7 0M18.5 18.5a9 9 0 0 1-13 0"/></svg>) },
  { title: "ESP32 & Embedded IoT", items: ["Wi-Fi & BLE programming", "Real-time sensor streaming", "Low-power IoT design", "OTA firmware updates", "ESP-IDF & Arduino IDE"], tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "MQTT & Cloud IoT", items: ["MQTT broker setup & publish/subscribe", "AWS IoT Core integration", "Azure IoT Hub connection", "Real-time cloud dashboards", "Alerts, rules & automation"], tint: "teal", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>) },
  { title: "Edge Computing", items: ["Local AI inference with TFLite", "OpenCV object detection", "Raspberry Pi gateway setup", "Edge-to-cloud data pipelines", "Latency & bandwidth optimisation"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Industrial IoT", items: ["PLC & SCADA integration", "Modbus & OPC-UA protocols", "Industrial sensor monitoring", "Predictive maintenance models", "Smart factory simulation"], tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
  { title: "AI + IoT (AIoT)", items: ["On-device machine learning", "Computer vision pipelines", "Anomaly detection systems", "Predictive analytics deployment", "AIoT product development"], tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.6A4 4 0 0 0 8 20v1h8v-1a4 4 0 0 0 3-6.4A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 12h6M12 9v6"/></svg>) },
  { title: "Industry 4.0", items: ["Digital twin implementation", "Smart manufacturing systems", "IIoT network design", "Quality inspection with AI", "End-to-end factory automation"], tint: "teal", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>) },
];

/* ─── Section 7 — Requirements table ─── */
const s7Requirements: { requirement: string; purpose: string }[] = [
  { requirement: "IoT Development Boards", purpose: "ESP32, STM32, Raspberry Pi, Arduino — core platforms for building and programming connected IoT devices." },
  { requirement: "Sensors", purpose: "Temperature, humidity, gas, motion, LiDAR, IMU and other sensors for real-world data acquisition." },
  { requirement: "Actuators", purpose: "Relays, servo motors, DC motors and solenoids for device control and automation experiments." },
  { requirement: "Communication Modules", purpose: "Wi-Fi, Bluetooth, LoRa, Zigbee and 4G modules for wireless device connectivity and protocol experiments." },
  { requirement: "Edge Computing Devices", purpose: "Raspberry Pi, Jetson Nano and AI cameras for local processing, edge AI and computer vision projects." },
  { requirement: "Networking Infrastructure", purpose: "Managed switches, Wi-Fi access points and cabling for building the connected lab network environment." },
  { requirement: "Software & Development Tools", purpose: "Arduino IDE, VS Code, MQTT brokers, cloud IoT platforms, TensorFlow Lite and simulation tools." },
  { requirement: "IoT Project Kits", purpose: "Purpose-built kits with hardware, sensors, modules and experiment guides for structured hands-on learning." },
  { requirement: "Student Workstations", purpose: "Computing systems for programming, simulation, dashboard development and cloud platform access." },
  { requirement: "Faculty Resources", purpose: "Experiment guides, teaching materials, project templates and faculty enablement support resources." },
  { requirement: "Lab Infrastructure", purpose: "Power distribution, UPS, benching, ESD protection, storage and safety equipment for lab operations." },
];

/* ─── Section 8 — VTU checklist ─── */
const s8VtuChecklist = [
  "IoT fundamentals — device programming, sensor interfacing, communication",
  "Sensors, embedded systems and microcontroller applications",
  "Connected device development using ESP32, STM32 and Raspberry Pi",
  "Wireless communication technologies — Wi-Fi, BLE, LoRa, MQTT",
  "Cloud IoT platforms, edge computing and data analytics",
  "Student mini projects, capstone projects and innovation activities",
  "Industry-oriented applications across ECE, CSE, EEE and AI & ML programs",
  "Faculty enablement and curriculum alignment support",
];

export default function IotLabSetupClient() {
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
    <div className={`iol-scope ${styles.scope}`}>

      {/* ── S1 HERO ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>Complete IoT Laboratory Solutions · Pan-India Implementation</span>
            <h1 className={styles.heroHeadline}>IoT Lab Setup for{" "}<span className={styles.heroHeadlineAccent}>Engineering Colleges</span></h1>
            <p className={styles.heroSubhead}>Build a practical, industry-oriented Internet of Things laboratory with the right combination of IoT hardware, development platforms, sensors, communication technologies, software, project kits and learning resources. Knowx India provides end-to-end <strong>IoT lab solutions</strong> for engineering colleges and institutions — from laboratory planning and equipment selection to installation, faculty enablement, student projects and technical support.</p>
            <div className={styles.heroCtaRow}>
              <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Request an IoT Lab Proposal</button>
              <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Talk to an IoT Lab Expert →</button>
            </div>
            <div className={styles.heroAccentBar} aria-hidden="true" />
            <ul className={styles.heroTrustStrip} aria-label="IoT lab service highlights">
              {heroTrust.map((pill, i) => (<li key={pill} className={`${styles.heroTrustPill} ${i % 2 === 0 ? styles.pillGreen : styles.pillBlue}`}>{pill}</li>))}
            </ul>
          </div>
          <div className={styles.heroRight} aria-hidden="true">
            <svg viewBox="0 0 480 500" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg} role="img" aria-label="IoT Lab ecosystem diagram">
              <g stroke="#0f766e" strokeWidth="1.5" fill="none" opacity="0.3"><line x1="80" y1="160" x2="200" y2="240"/><line x1="160" y1="100" x2="220" y2="240"/><line x1="240" y1="80" x2="240" y2="240"/><line x1="320" y1="100" x2="260" y2="240"/><line x1="400" y1="160" x2="280" y2="240"/><line x1="240" y1="290" x2="240" y2="360"/><line x1="240" y1="410" x2="120" y2="460"/><line x1="240" y1="410" x2="360" y2="460"/></g>
              <rect x="40" y="128" width="80" height="64" rx="10" fill="#0f766e"/><text x="80" y="154" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">ESP32</text><text x="80" y="170" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Wi-Fi · BLE</text><text x="80" y="184" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">IoT Platform</text>
              <rect x="120" y="68" width="80" height="64" rx="10" fill="#1e3a8a"/><text x="160" y="94" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">Raspberry Pi</text><text x="160" y="110" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Edge AI</text><text x="160" y="124" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">Vision · Gateway</text>
              <rect x="200" y="48" width="80" height="64" rx="10" fill="#0d9488"/><text x="240" y="74" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">STM32</text><text x="240" y="90" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Embedded</text><text x="240" y="104" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">RTOS · Real-Time</text>
              <rect x="280" y="68" width="80" height="64" rx="10" fill="#b45309"/><text x="320" y="94" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700">Sensors</text><text x="320" y="110" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontFamily="system-ui,sans-serif" fontSize="9">Temp · Gas · IMU</text><text x="320" y="124" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">LiDAR · Ultrasonic</text>
              <rect x="360" y="128" width="80" height="64" rx="10" fill="#1e3a8a"/><text x="400" y="151" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700">Industrial</text><text x="400" y="165" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700">IoT</text><text x="400" y="181" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="9">SCADA · PLC</text>
              <rect x="170" y="240" width="140" height="52" rx="26" fill="#0f766e"/><text x="240" y="262" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700">IoT Gateway</text><text x="240" y="280" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="10">MQTT · LoRa · BLE · 4G</text>
              <rect x="175" y="360" width="130" height="52" rx="26" fill="#1e3a8a"/><text x="240" y="382" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700">Cloud IoT</text><text x="240" y="400" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="10">AWS · Azure · GCP</text>
              <rect x="55" y="455" width="110" height="36" rx="18" fill="#fff" stroke="#0f766e" strokeWidth="1.5"/><text x="110" y="477" textAnchor="middle" fill="#0f766e" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700">Dashboard</text>
              <rect x="315" y="455" width="110" height="36" rx="18" fill="#fff" stroke="#1e3a8a" strokeWidth="1.5"/><text x="370" y="477" textAnchor="middle" fill="#1e3a8a" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700">Analytics</text>
              <rect x="100" y="10" width="280" height="30" rx="15" fill="#f0fdf9" stroke="#0f766e" strokeWidth="1.5"/><text x="240" y="30" textAnchor="middle" fill="#0f766e" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.05em">IoT INNOVATION LAB ECOSYSTEM</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── S2 COMPLETE SETUP ── */}
      <section className={styles.s2} id="complete-setup">
        <div className={styles.s2Inner}>
          <h2 className={styles.s2Heading}>Complete IoT Lab Setup for Engineering Colleges</h2>
          <div className={styles.s2Body}>
            <div className={styles.s2ImageWrap}>
              <div className={styles.s2ImagePlaceholder} role="img" aria-label="IoT lab setup at engineering college — Knowx India">
                <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="10" width="56" height="40" rx="4"/><circle cx="20" cy="26" r="6"/><path d="M4 42l14-12 10 10 8-8 14 12"/></svg>
                <span className={styles.s2ImageLabel}>IoT Lab Setup — Knowx India</span>
                <span className={styles.s2ImageSub}>Real lab photo coming soon · 1200 × 840 px</span>
              </div>
              <p className={styles.s2ImageCaption}>End-to-end IoT laboratory setup for engineering colleges — from infrastructure design to student project delivery.</p>
            </div>
            <div className={styles.s2Content}>
              <p className={styles.s2Intro}>An effective IoT laboratory needs more than a collection of development boards and sensors. It requires a carefully planned combination of hardware platforms, connectivity infrastructure, software tools, structured experiments and learning resources — all configured to support your institution's curriculum and student learning objectives.</p>
              <p className={styles.s2IntroB}>Knowx India provides complete <strong>IoT lab setup services</strong> for engineering colleges — covering every aspect of laboratory planning, equipment selection, installation, faculty training and ongoing operational support.</p>
              <div className={styles.s2ChecklistWrap}>
                <div className={styles.s2ChecklistTitle}>What Our IoT Lab Setup Covers</div>
                <ul className={styles.s2Checklist}>
                  {s2Checklist.map((item) => (<li key={item} className={styles.s2CheckItem}><span className={styles.s2CheckMark} aria-hidden="true">✓</span>{item}</li>))}
                </ul>
              </div>
              <button type="button" onClick={openModal} className={styles.s2Cta}>Discuss Your IoT Laboratory Requirements →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 WHAT IS AN IOT LAB ── */}
      <section className={styles.s3} id="what-is-iot-lab">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>What Is an IoT Laboratory?</h2>
          <div className={styles.s3Body}>
            <div className={styles.s3Content}>
              <p className={styles.s3Para}>An <strong>Internet of Things (IoT) laboratory</strong> is a practical learning environment where engineering students work with real hardware and software systems to design, build, test and deploy connected devices and applications. Unlike traditional electronics or computer science labs, an IoT lab brings together multiple technology domains — embedded systems, sensors, wireless communication, cloud computing and data analytics — in a single, integrated environment.</p>
              <p className={styles.s3Para}>Students work with physical devices like microcontrollers and single-board computers, connect them to sensors and actuators, program communication protocols, and build cloud-connected applications and dashboards. This hands-on experience prepares engineers for real-world roles in product development, industrial automation, smart systems design and emerging technology domains.</p>
              <div className={styles.s3TagsWrap}>
                <div className={styles.s3TagsTitle}>IoT Lab Technology Domains</div>
                <ul className={styles.s3Tags} aria-label="IoT lab technology domains">
                  {s3Tags.map((t) => (<li key={t.label} className={`${styles.s3Tag} ${styles[`s3Tag_${t.tint}`]}`}>{t.label}</li>))}
                </ul>
              </div>
              <p className={styles.s3ParaC}>For engineering colleges, an IoT laboratory can provide a common practical environment for classroom learning, structured experiments, mini projects, capstone projects and innovation activities — serving ECE, CSE, EEE, ISE and AI &amp; ML departments together as a shared multidisciplinary resource.</p>
            </div>
            <div className={styles.s3Diagram} aria-hidden="true">
              <div className={styles.s3DiagramLabel}>IoT Architecture Layers</div>
              <svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" className={styles.s3Svg} role="img" aria-label="IoT four-layer architecture">
                <rect x="20" y="20" width="280" height="72" rx="12" fill="#0f766e"/><text x="160" y="46" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.04em">DEVICE LAYER</text><text x="160" y="64" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="11">ESP32 · STM32 · Raspberry Pi · Arduino</text><text x="160" y="80" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="10">Sensors · Actuators · Edge Devices</text>
                <line x1="160" y1="92" x2="160" y2="118" stroke="#0f766e" strokeWidth="2" strokeDasharray="4 3"/><polygon points="153,114 160,126 167,114" fill="#0f766e"/>
                <rect x="20" y="126" width="280" height="72" rx="12" fill="#1e3a8a"/><text x="160" y="152" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.04em">NETWORK LAYER</text><text x="160" y="170" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="11">Wi-Fi · BLE · LoRa · MQTT · HTTP</text><text x="160" y="186" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="10">4G/5G · Zigbee · NB-IoT · CoAP</text>
                <line x1="160" y1="198" x2="160" y2="224" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 3"/><polygon points="153,220 160,232 167,220" fill="#1e3a8a"/>
                <rect x="20" y="232" width="280" height="72" rx="12" fill="#0d9488"/><text x="160" y="258" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.04em">CLOUD LAYER</text><text x="160" y="276" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="11">AWS IoT · Azure IoT · Google Cloud</text><text x="160" y="292" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif" fontSize="10">Data Storage · Processing · Analytics</text>
                <line x1="160" y1="304" x2="160" y2="330" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 3"/><polygon points="153,326 160,338 167,326" fill="#0d9488"/>
                <rect x="20" y="338" width="280" height="48" rx="12" fill="#b45309"/><text x="160" y="358" textAnchor="middle" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.04em">APPLICATION LAYER</text><text x="160" y="376" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui,sans-serif" fontSize="11">Dashboards · Mobile Apps · Analytics · Alerts</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── S4 EQUIPMENT ── */}
      <section className={styles.s4} id="equipment">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>IoT Lab Equipment &amp; Infrastructure</h2>
          <p className={styles.s4Intro}>The equipment required for an IoT lab depends on the institution's curriculum, student capacity, laboratory objectives and desired level of specialization. Knowx India helps engineering colleges select and integrate the right combination of platforms, sensors, communication modules and infrastructure for a fully functional IoT laboratory.</p>
          <div className={styles.s4Grid}>
            {s4Equipment.map((eq) => (
              <div key={eq.title} className={`${styles.s4Card} ${styles[`s4Tint_${eq.tint}`]}`}>
                <div className={styles.s4CardHead}><div className={styles.s4CardIcon} aria-hidden="true">{eq.icon}</div></div>
                <h3 className={styles.s4CardTitle}>{eq.title}</h3>
                <p className={styles.s4CardBody}>{eq.body}</p>
                <ul className={styles.s4CardItems}>{eq.items.map((item) => (<li key={item} className={styles.s4CardItem}><span className={styles.s4ItemDot} aria-hidden="true" />{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className={styles.s4Note}>
            <div className={styles.s4NoteIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className={styles.s4NoteBody}><strong>Complete IoT lab equipment sourcing and integration</strong> — all categories configured, installed and commissioned. Detailed specifications, quantities and platform options are provided during the proposal stage based on your college's curriculum, student batch size and academic priorities.</div>
          </div>
          <div className={styles.s4CtaRow}><button type="button" onClick={openModal} className={styles.s4CtaPrimary}>Explore IoT Lab Equipment →</button></div>
        </div>
      </section>

      {/* ── S5 IOT KITS ── */}
      <section className={styles.s5} id="iot-kits">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>IoT Kits for Engineering Students</h2>
          <p className={styles.s5Intro}>Practical learning becomes more effective when students can build, test and troubleshoot real systems. Knowx India provides purpose-built <strong>IoT project kits</strong> for engineering colleges — each kit includes development hardware, sensors, modules, and structured experiment guides mapped to engineering curriculum outcomes.</p>
          <div className={styles.s5Grid}>
            {s5Kits.map((kit) => (
              <div key={kit.title} className={`${styles.s5Card} ${styles[`s5Tint_${kit.tint}`]}`}>
                <div className={styles.s5KitImg} style={{ background: kit.imgGradient }} role="img" aria-label={kit.imgAlt}>
                  <svg viewBox="0 0 64 48" width="40" height="30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="60" height="44" rx="4"/><rect x="8" y="8" width="20" height="14" rx="2"/><circle cx="44" cy="15" r="7"/><path d="M2 34l14-10 10 8 8-6 14 10"/></svg>
                  <span className={styles.s5KitImgLabel}>{kit.title}</span>
                </div>
                <div className={styles.s5CardBody}>
                  <div className={styles.s5BadgeRow}><span className={`${styles.s5Badge} ${styles[`s5Badge_${kit.tint}`]}`}>{kit.badge}</span></div>
                  <h3 className={styles.s5CardTitle}>{kit.title}</h3>
                  <p className={styles.s5IdealFor}><span className={styles.s5IdealLabel}>Ideal for: </span>{kit.idealFor}</p>
                  <ul className={styles.s5Caps}>{kit.capabilities.map((cap) => (<li key={cap} className={styles.s5Cap}><span className={`${styles.s5CapDot} ${styles[`s5CapDot_${kit.tint}`]}`} aria-hidden="true" />{cap}</li>))}</ul>
                  <button type="button" onClick={openModal} className={`${styles.s5KitCta} ${styles[`s5KitCta_${kit.tint}`]}`}>View Details →</button>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.s5Footer}>All IoT kits include structured experiment guides, project documentation, component lists and faculty support resources. Custom kit configurations are available for specific curriculum requirements.</p>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — IOT LAB EXPERIMENTS & PBL
          8 domain cards in 4-col grid desktop
          ============================================================ */}
      <section className={styles.s6} id="experiments">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>IoT Lab Experiments &amp; Project-Based Learning</h2>
          <p className={styles.s6Intro}>
            A well-designed IoT laboratory supports a wide range of structured experiments and
            project-based learning activities — from basic sensor interfacing and wireless
            communication to advanced edge AI, industrial IoT and Industry 4.0 applications.
            Knowx India provides experiment guides, project templates and learning resources
            mapped to engineering curriculum outcomes.
          </p>

          <div className={styles.s6Grid}>
            {s6Experiments.map((exp) => (
              <div key={exp.title} className={`${styles.s6Card} ${styles[`s6Tint_${exp.tint}`]}`}>
                <div className={styles.s6CardIcon} aria-hidden="true">{exp.icon}</div>
                <h3 className={styles.s6CardTitle}>{exp.title}</h3>
                <ul className={styles.s6CardItems}>
                  {exp.items.map((item) => (
                    <li key={item} className={styles.s6CardItem}>
                      <span className={`${styles.s6ItemDot} ${styles[`s6Dot_${exp.tint}`]}`} aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.s6CtaRow}>
            <button type="button" onClick={openModal} className={styles.s6CtaPrimary}>
              Explore IoT Lab Experiments →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — IOT LAB REQUIREMENTS TABLE
          11-row responsive table (green header, alternating rows)
          ============================================================ */}
      <section className={styles.s7} id="requirements">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>IoT Lab Requirements for Engineering Colleges</h2>
          <p className={styles.s7Intro}>
            Setting up an effective <strong>IoT laboratory</strong> for an engineering college
            requires a structured combination of hardware, software, infrastructure and learning
            resources. The specific requirements depend on the institution's curriculum,
            department focus, student batch size and academic objectives.
          </p>

          <div className={styles.s7Table} role="table" aria-label="IoT lab requirements for engineering colleges">
            {/* Header row — hidden on mobile, shown on tablet+ */}
            <div className={styles.s7HeaderRow} role="row">
              <div className={`${styles.s7Cell} ${styles.s7HReq}`} role="columnheader">Requirement</div>
              <div className={`${styles.s7Cell} ${styles.s7HPurpose}`} role="columnheader">Purpose</div>
            </div>

            {s7Requirements.map((row, i) => (
              <div
                key={row.requirement}
                className={`${styles.s7DataRow} ${i % 2 === 1 ? styles.s7RowAlt : ""}`}
                role="row"
              >
                <div className={`${styles.s7Cell} ${styles.s7DReq}`} role="cell">
                  <span className={styles.s7MobileLabel}>Requirement</span>
                  {row.requirement}
                </div>
                <div className={`${styles.s7Cell} ${styles.s7DPurpose}`} role="cell">
                  <span className={styles.s7MobileLabel}>Purpose</span>
                  {row.purpose}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.s7CtaRow}>
            <button type="button" onClick={openModal} className={styles.s7CtaPrimary}>
              View IoT Lab Requirements Guide →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 — IOT LAB SETUP FOR VTU ENGINEERING COLLEGES
          No accreditation claims — capability-only, fact-based
          ============================================================ */}
      <section className={styles.s8} id="vtu">
        <div className={styles.s8Inner}>
          <div className={styles.s8Content}>
            <h2 className={styles.s8Heading}>IoT Lab Setup for VTU Engineering Colleges</h2>
            <p className={styles.s8Para}>
              Engineering colleges affiliated to Visvesvaraya Technological University (VTU) can
              establish IoT laboratories that support their academic programs across ECE, CSE, EEE,
              ISE and emerging AI &amp; IoT specializations. Knowx India works with VTU-affiliated
              institutions to plan and implement IoT laboratories aligned to their curriculum
              requirements, practical session structures and student learning outcomes.
            </p>
            <p className={styles.s8Para}>
              Our IoT lab setup for VTU engineering colleges covers the practical learning
              requirements across multiple semesters and departments — from fundamental IoT
              programming and sensor applications to advanced cloud IoT, edge computing and
              industry-oriented project development.
            </p>

            <div className={styles.s8ChecklistWrap}>
              <div className={styles.s8ChecklistTitle}>What the IoT Lab Supports for VTU Colleges</div>
              <ul className={styles.s8Checklist}>
                {s8VtuChecklist.map((item) => (
                  <li key={item} className={styles.s8CheckItem}>
                    <span className={styles.s8CheckMark} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.s8CtaRow}>
              <button type="button" onClick={openModal} className={styles.s8CtaPrimary}>
                Explore IoT Lab Setup for VTU Colleges →
              </button>
            </div>
          </div>

          {/* Right panel — visual callout */}
          <div className={styles.s8Panel} aria-hidden="true">
            <div className={styles.s8PanelTag}>VTU-Affiliated Colleges</div>
            <div className={styles.s8PanelHeading}>Departments Served</div>
            {["ECE — Electronics & Communication", "CSE — Computer Science", "EEE — Electrical & Electronics", "ISE — Information Science", "AI & ML — Artificial Intelligence", "Mechatronics & Robotics"].map((dept) => (
              <div key={dept} className={styles.s8PanelItem}>
                <span className={styles.s8PanelDot} aria-hidden="true" />{dept}
              </div>
            ))}
            <div className={styles.s8PanelDivider} />
            <div className={styles.s8PanelStat}>
              <div className={styles.s8PanelStatNum}>200<span>+</span></div>
              <div className={styles.s8PanelStatLabel}>VTU-affiliated colleges in Karnataka</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections 9–14 placeholders ── */}
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="cost">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S9</div><h2 className={styles.placeholderTitle}>How Much Does an IoT Lab Setup Cost?</h2><p className={styles.placeholderNote}>Step 5 — 12-factor chip list + quote CTA</p></div>
      </section>
      <section className={styles.placeholder} id="process">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S10</div><h2 className={styles.placeholderTitle}>IoT Lab Design, Installation &amp; Deployment</h2><p className={styles.placeholderNote}>Step 5 — 6-step process + CTA</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="why-knowx">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S11</div><h2 className={styles.placeholderTitle}>Why Choose Knowx India for IoT Lab Setup?</h2><p className={styles.placeholderNote}>Step 5 — 8 differentiator cards on dark green gradient</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderAlt}`} id="institution-types">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S12</div><h2 className={styles.placeholderTitle}>IoT Lab Solutions for Different Institution Needs</h2><p className={styles.placeholderNote}>Step 5 — 6 institution-type cards</p></div>
      </section>
      <section className={styles.placeholder} id="faq">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S13</div><h2 className={styles.placeholderTitle}>Frequently Asked Questions About IoT Lab Setup</h2><p className={styles.placeholderNote}>Step 6 — 10-question FAQ + FAQPage JSON-LD schema</p></div>
      </section>
      <section className={`${styles.placeholder} ${styles.placeholderDark}`} id="cta">
        <div className={styles.placeholderInner}><div className={styles.placeholderNum}>S14</div><h2 className={styles.placeholderTitle}>Build Your Engineering College's IoT Laboratory With Knowx</h2><p className={styles.placeholderNote}>Step 6 — Final CTA banner + flagship cross-link</p></div>
      </section>

      {/* ── MODAL ── */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="iol-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="iol-modal-title" className={styles.modalTitle}>Request an IoT Lab Proposal</h3>
            <p className={styles.modalSubtitle}>Share your requirements and our IoT lab team will get in touch within one working day.</p>
            {submitState === "success" ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessMark}>✓</div>
                <div className={styles.modalSuccessTitle}>Proposal request received</div>
                <div className={styles.modalSuccessBody}>Thank you. Our IoT lab team will reach out to you shortly.</div>
                <button type="button" className={styles.modalDoneBtn} onClick={() => setModalOpen(false)}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <input type="hidden" name="access_key" value="f2635df8-33a5-44ef-889c-9f823771927f" />
                <input type="hidden" name="subject" value="IoT Lab Setup — Proposal Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — IoT Lab Setup page" />
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
                  <label className={styles.modalLabel}>City / State<input name="city_state" type="text" className={styles.modalInput} placeholder="Bangalore, Karnataka" /></label>
                  <label className={styles.modalLabel}>Number of Students<input name="students" type="text" className={styles.modalInput} placeholder="e.g. 60 per batch" /></label>
                </div>
                <div className={styles.modalRow}>
                  <label className={styles.modalLabel}>Department(s)<input name="department" type="text" className={styles.modalInput} placeholder="ECE / CSE / EEE / ISE" /></label>
                  <label className={styles.modalLabel}>Lab Type
                    <select name="lab_type" className={styles.modalSelect}>
                      <option value="">Select lab type</option>
                      <option>IoT Starter Lab</option>
                      <option>Professional IoT Lab</option>
                      <option>Industrial IoT Lab</option>
                      <option>Edge AI + IoT Lab</option>
                      <option>Smart Factory Lab</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>
                <label className={styles.modalLabel}>Approximate Requirement / Message
                  <textarea name="message" className={styles.modalTextarea} rows={3} placeholder="New lab setup · Upgrading existing lab · AICTE IDEA Lab · Innovation Centre · Any specific requirements..." />
                </label>
                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us directly by email.</div>)}
                <button type="submit" disabled={submitting} className={styles.modalSubmit}>{submitting ? "Sending..." : "Send Proposal Request"}</button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about IoT lab setup.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
