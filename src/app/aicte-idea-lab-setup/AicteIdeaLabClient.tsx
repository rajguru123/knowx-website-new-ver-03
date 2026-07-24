"use client";

import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * AICTE IDEA Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /aicte-idea-lab-setup/
 *
 * Step 5 — Sections 1-11 built.
 *   - Section 9 added: Student Innovation Journey (6 milestones)
 *   - Section 10 added: 10 Institutional Outcomes
 *   - Section 11 added: AICTE Compliance + NAAC/NBA Mapping table
 * Sections 12-14 remain as placeholders.
 */

const eligibilityRows: { criterion: string; requirement: string }[] = [
  { criterion: "Institution Type", requirement: "AICTE-approved engineering, technology, management, or pharmacy institution" },
  { criterion: "Recognition", requirement: "Valid AICTE approval for the current academic year" },
  { criterion: "Infrastructure", requirement: "Dedicated space of 1,500–3,000 sq. ft. for the lab" },
  { criterion: "Faculty Commitment", requirement: "At least 2 faculty members designated as IDEA Lab coordinators" },
  { criterion: "Internet", requirement: "High-speed broadband connectivity (100 Mbps or higher recommended)" },
  { criterion: "Governance", requirement: "Willingness to form an Innovation Cell / student club within the institution" },
];

type PillarTint = "green" | "blue" | "amber" | "teal";
const pillars: { n: string; title: string; tagline: string; capabilities: string[]; outcome: string; tint: PillarTint; icon: JSX.Element }[] = [
  { n: "01", title: "Advanced Fabrication & Digital Manufacturing", tagline: "From Concept to Physical Prototype", capabilities: ["CNC Machining", "Laser Cutting", "3D Printing", "Mechanical Fabrication", "Product Assembly", "Reverse Engineering"], outcome: "Build functional mechanical products with industry-grade fabrication techniques.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>) },
  { n: "02", title: "Electronics & PCB Innovation Lab", tagline: "Design · Prototype · Test", capabilities: ["PCB Design", "PCB Manufacturing", "SMT Soldering", "Embedded Electronics", "Oscilloscopes & Test Equipment", "Circuit Prototyping"], outcome: "Design and manufacture custom electronic hardware from scratch.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v4M16 3v4M3 8h4M3 16h4M17 21v-4M8 21v-4M17 8h4M17 16h4M9 9h6v6H9z"/></svg>) },
  { n: "03", title: "Robotics & Intelligent Automation", tagline: "Building Autonomous Systems", capabilities: ["Mobile Robots", "Robotic Arms", "Industrial Automation", "Sensors & Actuators", "Machine Vision", "Autonomous Control"], outcome: "Develop intelligent robotic systems for Industry 4.0 and smart automation.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 2v4M8 14h.01M16 14h.01M9 18h6M2 15v2M22 15v2"/></svg>) },
  { n: "04", title: "IoT & Smart Connected Systems", tagline: "Connecting the Physical World", capabilities: ["ESP32 · Raspberry Pi · STM32", "Wireless Communication", "Cloud IoT", "Smart Sensors", "Edge Computing", "MQTT · LoRa · BLE"], outcome: "Create connected devices for smart homes, agriculture, healthcare, and industrial IoT.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>) },
  { n: "05", title: "Artificial Intelligence & Computer Vision", tagline: "Intelligence Beyond Automation", capabilities: ["Machine Learning", "Deep Learning", "Edge AI", "Computer Vision", "AIoT Solutions", "Predictive Analytics"], outcome: "Develop AI-powered products that sense, learn, and make intelligent decisions.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.6A4 4 0 0 0 8 20v1h8v-1a4 4 0 0 0 3-6.4A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 12h6M12 9v6"/></svg>) },
  { n: "06", title: "Drone & Autonomous Aerial Systems", tagline: "Engineering the Future of Flight", capabilities: ["Drone Assembly", "Flight Controllers", "UAV Programming", "Autonomous Navigation", "GIS Mapping", "Drone Applications"], outcome: "Build and deploy drone solutions for agriculture, surveillance, logistics, and infrastructure inspection.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 8l3 3M16 8l-3 3M8 16l3-3M16 16l-3-3"/></svg>) },
];

type CategoryTint = "green" | "blue" | "amber" | "teal";
const aicteCategories: { n: string; title: string; items: string; tint: CategoryTint }[] = [
  { n: "01", title: "Digital Fabrication & Additive Manufacturing", items: "3D Printer · 3D Scanner · Laser Cutter · Vinyl Cutter", tint: "green" },
  { n: "02", title: "CNC & Precision Manufacturing", items: "CNC Router · Mini Desktop Lathe cum Milling Machine · PCB Milling Machine", tint: "blue" },
  { n: "03", title: "Mechanical Workshop", items: "Bench Grinder · Wood Lathe · Drilling Machine · Hand Drill · Portable Welding", tint: "amber" },
  { n: "04", title: "Electronics Prototyping Lab", items: "Soldering Stations (5 units) · Desoldering Station", tint: "teal" },
  { n: "05", title: "Electronic Test & Measurement", items: "Mixed Signal Oscilloscope · DSO · Function/Signal Generator · Variable DC Supply · Bench Multimeter", tint: "green" },
  { n: "06", title: "Inspection & Quality", items: "Digital Microscope · Magnifying Lamp with Stand", tint: "blue" },
  { n: "07", title: "Textile & Product Design", items: "Advanced Motorized Sewing Machine", tint: "amber" },
  { n: "08", title: "Computing & Design", items: "Networked Computer Workstations (minimum 5 systems) · Heavy Duty Laser Printer", tint: "teal" },
  { n: "09", title: "Presentation & Collaboration", items: "Smart Board · Multimedia Projector", tint: "green" },
  { n: "10", title: "Product Testing & Material Processing", items: "Microwave Oven · Laboratory Refrigerator", tint: "blue" },
  { n: "11", title: "General Workshop Tools", items: "Jigsaw · Scroll Saw · Circular Saw · Rotary Tool · Heat Gun · Screwdriver Set", tint: "amber" },
];

type DeliverTint = "green" | "blue" | "amber" | "teal";
const deliverables: { title: string; body: string; tint: DeliverTint; icon: JSX.Element }[] = [
  { title: "Consultancy", body: "Strategy, scoping, and a phased roadmap for your AICTE IDEA Lab from day one.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.5 1 2.3v1h6v-1c0-.8.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg>) },
  { title: "Proposal Development", body: "Documentation and proposal drafting aligned to AICTE and funding scheme guidelines.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>) },
  { title: "Infrastructure Design", body: "Lab layout, workflow, and workstation planning for optimal AICTE IDEA Lab utilization.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>) },
  { title: "Equipment Supply & Installation", body: "All 11 AICTE-mandated equipment categories sourced, integrated, and commissioned.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/></svg>) },
  { title: "Faculty Training & Enablement", body: "Structured programs to build innovation-led teaching, mentoring, and research capability.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { title: "Turnkey Setup", body: "End-to-end delivery — you focus on academics, we handle everything else.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="15" r="4"/><path d="M10.5 12.5L20 3M17 6l3 3M14 9l3 3"/></svg>) },
];

const s2ServiceChips = ["Consultancy", "Proposal Development", "Design & Installation", "Equipment Supply", "Turnkey Setup"];

const knowx2Domains: { title: string; items: string[]; icon: JSX.Element }[] = [
  { title: "Embedded Systems & IoT Stack", items: ["Arduino UNO / Mega", "ESP32 Development Kits", "Raspberry Pi 5", "STM32 Boards", "Jetson Nano / Orin Nano", "FPGA Development Boards"], icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "AI & Vision Systems", items: ["AI Cameras", "USB Industrial Cameras", "Depth Cameras", "Thermal Cameras", "Edge Vision Modules", "AIoT Development Kits"], icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Sensor Ecosystem", items: ["Temperature / Humidity", "Gas Sensors", "IMU / Motion Sensors", "LiDAR / Ultrasonic", "Load Cells", "Soil Moisture / Water Quality"], icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 1 7 0M5.5 5.5a9 9 0 0 1 13 0M15.5 15.5a5 5 0 0 1-7 0M18.5 18.5a9 9 0 0 1-13 0"/></svg>) },
  { title: "IoT Infrastructure", items: ["Wi-Fi Routers", "LoRa Gateways", "Zigbee Modules", "BLE Beacons", "MQTT Server", "Cloud Access"], icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M5 12l7-7M5 12l7 7M19 12l-7-7M19 12l-7 7"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="5" r="1.5" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>) },
  { title: "Safety & ESD", items: ["ESD Workstations", "Fume Extractor", "Fire Extinguishers", "First Aid Kit", "Safety Goggles", "PPE Kits"], icon: (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>) },
];

type ProjectTint = "green" | "blue" | "amber" | "teal";
const studentProjects: { title: string; body: string; tint: ProjectTint; icon: JSX.Element }[] = [
  { title: "Smart Agriculture Systems", body: "Precision farming, soil monitoring, irrigation automation.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M12 8c-3-3-6-3-9-3 0 5 3 8 9 8M12 12c3-3 6-3 9-3 0 5-3 8-9 8"/></svg>) },
  { title: "Industrial Automation", body: "PLC, SCADA, robotic arms, factory-floor process control.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
  { title: "Medical IoT Devices", body: "Patient monitoring, portable diagnostics, connected health.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>) },
  { title: "Autonomous Robots", body: "Mobile robots, SLAM navigation, delivery bots, service robots.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 2v4M8 14h.01M16 14h.01M9 18h6"/></svg>) },
  { title: "Drone Solutions", body: "Agri-spraying drones, mapping, surveillance, logistics UAVs.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 8l3 3M16 8l-3 3M8 16l3-3M16 16l-3-3"/></svg>) },
  { title: "AI Cameras", body: "Object detection, facial recognition, quality inspection.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>) },
  { title: "Electric Vehicle Systems", body: "BMS, motor control, charger design, EV telematics.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="14" height="10" rx="2"/><path d="M16 10h3l2 2v3h-5"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M7 4v3M11 4v3"/></svg>) },
  { title: "Smart City Applications", body: "Smart lighting, waste, traffic, and public infrastructure.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 21V8l6-4v17M14 21V11l6-3v13M8 8v0M8 12v0M8 16v0M17 12v0M17 16v0"/></svg>) },
  { title: "Environmental Monitoring", body: "Air quality, water quality, weather stations, climate sensors.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>) },
  { title: "Assistive Technologies", body: "Devices for accessibility, mobility aids, sensory augmentation.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2"/><path d="M12 6v10M8 22l4-6 4 6M6 12h12"/></svg>) },
];

// NEW — Section 9: Student Innovation Journey (6 milestones)
type MilestoneTint = "green" | "blue";
const milestones: { n: string; title: string; body: string; tint: MilestoneTint }[] = [
  { n: "1", title: "Ideate", body: "Design thinking, problem discovery, brainstorming, and idea validation.", tint: "green" },
  { n: "2", title: "Design & CAD", body: "3D modelling, product design, mechanical CAD, and simulation.", tint: "blue" },
  { n: "3", title: "Fabricate & PCB", body: "3D printing, laser cutting, PCB design, and physical prototyping.", tint: "green" },
  { n: "4", title: "Embedded + IoT + AI", body: "Embedded firmware, IoT integration, AI models, and edge computing.", tint: "blue" },
  { n: "5", title: "Validate", body: "Prototype testing, iteration, user feedback, and product refinement.", tint: "green" },
  { n: "6", title: "Patent · Startup · Product", body: "IP filing, incubation, market launch, and commercial deployment.", tint: "blue" },
];

// NEW — Section 10: 10 Institutional Outcomes
type OutcomeTint = "green" | "blue" | "amber" | "teal";
const outcomes: { n: string; title: string; body: string; tint: OutcomeTint }[] = [
  { n: "01", title: "Innovation Culture", body: "Campus-wide creativity, design thinking, and problem-solving culture.", tint: "green" },
  { n: "02", title: "Experiential Learning", body: "Hands-on learning beyond traditional classroom teaching methods.", tint: "blue" },
  { n: "03", title: "Industry-Ready Graduates", body: "Practical engineering and product development skills aligned to industry.", tint: "amber" },
  { n: "04", title: "Multidisciplinary Collaboration", body: "ECE, Mech, CSE, AI, EEE, Civil, MBA students solving real problems together.", tint: "teal" },
  { n: "05", title: "Product Development", body: "Complete innovation lifecycle from ideation to functional prototype.", tint: "green" },
  { n: "06", title: "Research & Innovation", body: "Applied research, patents, technology development, and publications.", tint: "blue" },
  { n: "07", title: "Entrepreneurship & Startups", body: "Infrastructure and mentoring to launch student-led startups.", tint: "amber" },
  { n: "08", title: "Industry Collaboration", body: "Sponsored projects, internships, joint innovation with industry partners.", tint: "teal" },
  { n: "09", title: "National Hackathons", body: "SIH, AICTE Innovation Challenges, ATL Marathon, Toycathon participation.", tint: "green" },
  { n: "10", title: "CoE & Institutional Reputation", body: "Regional hub for innovation, entrepreneurship, and emerging technologies.", tint: "blue" },
];

// NEW — Section 11: AICTE Compliance & Framework Alignment cards
type ComplianceTint = "green" | "blue" | "amber" | "teal";
const complianceCards: { title: string; body: string; tint: ComplianceTint; icon: JSX.Element }[] = [
  { title: "AICTE IDEA Lab Scheme", body: "Full alignment with AICTE's scheme document, mandated equipment, and lab governance requirements.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) },
  { title: "NBA Accreditation", body: "Directly supports NBA outcomes on program educational objectives, POs, and continuous improvement.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4M9 16h6"/></svg>) },
  { title: "NAAC Framework", body: "Strengthens NAAC criteria on curriculum, research, infrastructure, student progression, and best practices.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>) },
  { title: "IIC — Innovation Cell", body: "Fully integrates with the Institutional Innovation Council (IIC) mandate and quarterly reporting.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>) },
];

// NAAC Criteria mapping table rows
const naacMapping: { criterion: string; contribution: string }[] = [
  { criterion: "Criterion 1 — Curricular Aspects", contribution: "Project-based learning, industry-relevant experiential courses, POs/COs mapping to innovation modules." },
  { criterion: "Criterion 2 — Teaching-Learning & Evaluation", contribution: "Multidisciplinary hands-on projects, ICT-enabled teaching via digital fabrication and simulation." },
  { criterion: "Criterion 3 — Research, Innovations & Extension", contribution: "Direct boost to research output, patents, publications, and community innovation extension projects." },
  { criterion: "Criterion 4 — Infrastructure & Learning Resources", contribution: "State-of-the-art AICTE-mandated infrastructure across fabrication, PCB, robotics, IoT, and AI." },
  { criterion: "Criterion 5 — Student Support & Progression", contribution: "Startup incubation pathway, national hackathon exposure, and R&D placement improvement." },
  { criterion: "Criterion 7 — Institutional Values & Best Practices", contribution: "Innovation culture, industry linkages, and best practice showcasing at institutional level." },
];

export default function AicteIdeaLabClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
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
    <div className={`ail-scope ${styles.scope}`}>
      {/* Section 1 — HERO */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>AICTE IDEA Lab · Innovation Ecosystem Partner</span>
            <h1 className={styles.heroHeadline}>AICTE IDEA Lab Setup for <span className={styles.heroHeadlineAccent}>Engineering Colleges</span></h1>
            <p className={styles.heroSubhead}>End-to-end <strong>AICTE IDEA Lab turnkey solution</strong> — <strong>consultancy, design, installation</strong> across Fabrication, PCB, Robotics, IoT, AI, and Drones — with faculty training and NBA / NAAC outcome mapping.</p>
            <div className={styles.heroCtaRow}>
              <button type="button" onClick={openModal} className={styles.heroCtaPrimary}>Schedule AICTE IDEA Lab Consultation</button>
              <button type="button" onClick={openModal} className={styles.heroCtaSecondary}>Download IDEA Lab Blueprint →</button>
            </div>
            <div className={styles.heroAccentBar} aria-hidden="true" />
            <ul className={styles.heroTrustStrip} aria-label="Company trust indicators">
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>20+ Years</li>
              <li className={`${styles.heroTrustPill} ${styles.pillBlue}`}>10,000+ Students Trained</li>
              <li className={`${styles.heroTrustPill} ${styles.pillGreen}`}>1,000+ Projects Executed</li>
            </ul>
          </div>
          <div className={styles.heroRight} aria-hidden="true">
            <svg viewBox="0 0 460 480" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg} role="img" aria-label="AICTE IDEA Lab 6 Core Pillars">
              <g><rect x="10" y="10" width="140" height="140" rx="14" fill="#0f766e" /><g transform="translate(58 40)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="17" cy="17" r="8" /><path d="M17 4v6M17 24v6M4 17h6M24 17h6M8 8l4 4M22 22l4 4M8 26l4-4M22 12l4-4" /></g><text x="80" y="115" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">Fabrication</text><text x="80" y="132" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">3D · Laser · CNC</text></g>
              <g><rect x="160" y="10" width="140" height="140" rx="14" fill="#1e3a8a" /><g transform="translate(208 40)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="26" height="26" rx="2" /><path d="M9 4v3M17 4v3M25 4v3M4 9h3M4 17h3M4 25h3M25 30v-3M17 30v-3M9 30v-3M30 9h-3M30 17h-3M30 25h-3M11 11h4v4h-4zM19 15h4v4h-4z" /></g><text x="230" y="115" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">PCB</text><text x="230" y="132" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">Design · SMT · Test</text></g>
              <g><rect x="310" y="10" width="140" height="140" rx="14" fill="#b45309" /><g transform="translate(358 40)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="10" width="22" height="16" rx="2" /><path d="M17 4v6M12 16h.01M22 16h.01M13 22h8" /><path d="M4 18v4M30 18v4" /></g><text x="380" y="115" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">Robotics</text><text x="380" y="132" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">Arms · Mobile · CV</text></g>
              <g><rect x="10" y="170" width="140" height="140" rx="14" fill="#0d9488" /><g transform="translate(58 200)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14a19 19 0 0 1 30 0" /><path d="M6 18a13 13 0 0 1 22 0" /><path d="M10 22a7 7 0 0 1 14 0" /><circle cx="17" cy="27" r="1.6" fill="#ffffff" /></g><text x="80" y="275" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">IoT</text><text x="80" y="292" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">ESP · Pi · Cloud</text></g>
              <g><rect x="160" y="170" width="140" height="140" rx="14" fill="#0f766e" /><g transform="translate(208 200)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4a5 5 0 0 0-5 5v1a5 5 0 0 0-4 8 5 5 0 0 0 4 8v1a5 5 0 0 0 10 0v-1a5 5 0 0 0 4-8 5 5 0 0 0-4-8V9a5 5 0 0 0-5-5z" /><path d="M13 15h8M17 12v8" /></g><text x="230" y="275" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">AI &amp; Vision</text><text x="230" y="292" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">ML · Edge AI · CV</text></g>
              <g><rect x="310" y="170" width="140" height="140" rx="14" fill="#1e3a8a" /><g transform="translate(358 200)" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="4" /><circle cx="27" cy="7" r="4" /><circle cx="7" cy="27" r="4" /><circle cx="27" cy="27" r="4" /><path d="M10 10l4 4M24 10l-4 4M10 24l4-4M24 24l-4-4" /></g><text x="380" y="275" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">Drones</text><text x="380" y="292" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontFamily="system-ui, sans-serif" fontSize="11">UAV · GIS · Flight</text></g>
              <g><rect x="10" y="330" width="440" height="60" rx="14" fill="#f0fdf9" stroke="#0f766e" strokeWidth="1.5" /><text x="230" y="358" textAnchor="middle" fill="#0f766e" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" letterSpacing="0.06em">AICTE IDEA LAB</text><text x="230" y="376" textAnchor="middle" fill="#0b5b54" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="500">6 Innovation Pillars · 1 Ecosystem</text></g>
              <g fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600"><rect x="10" y="408" width="140" height="30" rx="15" fill="#ffffff" stroke="#e5e7eb" /><text x="80" y="427" textAnchor="middle" fill="#374151">Prototypes</text><rect x="160" y="408" width="140" height="30" rx="15" fill="#ffffff" stroke="#e5e7eb" /><text x="230" y="427" textAnchor="middle" fill="#374151">Startups</text><rect x="310" y="408" width="140" height="30" rx="15" fill="#ffffff" stroke="#e5e7eb" /><text x="380" y="427" textAnchor="middle" fill="#374151">Placements</text></g>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.s2} id="what-is">
        <div className={styles.s2Inner}>
          <h2 className={styles.s2Heading}>What is an AICTE IDEA Lab?</h2>
          <p className={styles.s2Intro}>The AICTE IDEA Lab is an initiative by the <strong>All India Council for Technical Education (AICTE)</strong> — <em>IDEA</em> stands for <strong>Idea Development, Evaluation &amp; Application</strong>. It is a multidisciplinary innovation lab set up inside AICTE-approved engineering colleges and universities to give students hands-on capability to design, prototype, validate, and commercialize real-world engineering solutions.</p>
          <p className={styles.s2Body}>Unlike conventional labs organized by a single department, an IDEA Lab is cross-disciplinary by design — bringing together <strong>fabrication, electronics, PCB manufacturing, robotics, IoT, AI, and drone technology</strong> under one roof. It aligns with NEP 2020, strengthens NBA / NAAC accreditation outcomes, and creates a real pipeline from student projects to industry-ready products, patents, and startups.</p>
          <p className={styles.s2Body}>Knowx works as your <strong>AICTE IDEA Lab consultancy partner</strong> — from <strong>proposal development</strong> and infrastructure design through equipment supply, installation, and faculty enablement — delivering a fully operational innovation lab, not just a room full of equipment.</p>
          <div className={styles.s2Features}>
            <div className={styles.s2FeatureTitle}>Core Features of an AICTE IDEA Lab</div>
            <ul className={styles.s2FeatureList}>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>Multidisciplinary — serves ECE, Mechanical, CSE, AI, EEE together</li>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>Focus on prototyping, product design, and startup culture</li>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>State-of-the-art equipment across 11 AICTE-mandated categories</li>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>Aligned with NEP 2020 and India&apos;s national innovation ecosystem</li>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>Supports R&amp;D, patents, student startups, and industry collaboration</li>
              <li><span className={styles.s2FeatureCheck} aria-hidden="true">✓</span>Directly strengthens NBA and NAAC accreditation outcomes</li>
            </ul>
          </div>
          <div className={styles.s2Services}>
            <div className={styles.s2ServiceLabel}>What Knowx Delivers</div>
            <ul className={styles.s2ChipStrip} aria-label="Knowx AICTE IDEA Lab services">
              {s2ServiceChips.map((chip) => (<li key={chip} className={styles.s2Chip}>{chip}</li>))}
            </ul>
          </div>
          <p className={styles.s2Pillar}>Part of the complete <Link href="/engineering-innovation-labs" className={styles.s2PillarLink}>Engineering Innovation Ecosystem →</Link></p>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.s3} id="eligibility">
        <div className={styles.s3Inner}>
          <h2 className={styles.s3Heading}>Is Your College Eligible for an AICTE IDEA Lab?</h2>
          <p className={styles.s3Intro}>A quick self-assessment of what AICTE and Knowx look for before an IDEA Lab is set up in your engineering college or university.</p>
          <div className={styles.s3Table} role="table" aria-label="AICTE IDEA Lab eligibility criteria">
            <div className={styles.s3HeaderRow} role="row"><div className={`${styles.s3Cell} ${styles.s3HParam}`} role="columnheader">Parameter</div><div className={`${styles.s3Cell} ${styles.s3HReq}`} role="columnheader">Requirement</div></div>
            {eligibilityRows.map((row, i) => (
              <div key={row.criterion} className={`${styles.s3DataRow} ${i % 2 === 1 ? styles.s3RowAlt : ""}`} role="row">
                <div className={`${styles.s3Cell} ${styles.s3DParam}`} role="cell"><span className={styles.s3MobileLabel}>Parameter</span>{row.criterion}</div>
                <div className={`${styles.s3Cell} ${styles.s3DReq}`} role="cell"><span className={styles.s3MobileLabel}>Requirement</span>{row.requirement}</div>
              </div>
            ))}
          </div>
          <div className={styles.s3Tip}>
            <div className={styles.s3TipIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.5 1 2.3v1h6v-1c0-.8.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg></div>
            <div className={styles.s3TipBody}><strong>Tip for Principals:</strong> Institutions with strong NAAC / NBA scores and a track record of research publications are viewed favourably during AICTE review. An AICTE IDEA Lab can directly strengthen your NAAC score under Criterion 3 — Research, Innovations, and Extension.</div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className={styles.s4} id="pillars">
        <div className={styles.s4Inner}>
          <h2 className={styles.s4Heading}>The 6 Core Innovation Pillars</h2>
          <p className={styles.s4Intro}>An AICTE IDEA Lab is more than a lab — it is a multi-disciplinary innovation ecosystem organized around six capability pillars. Each pillar equips students with a distinct engineering domain, together delivering complete product development capability inside your engineering college.</p>
          <div className={styles.s4Grid}>
            {pillars.map((p) => (
              <div key={p.n} className={`${styles.s4Card} ${styles[`s4Tint_${p.tint}`]}`}>
                <div className={styles.s4CardHead}><div className={styles.s4CardIcon} aria-hidden="true">{p.icon}</div><span className={styles.s4CardNum}>{p.n}</span></div>
                <h3 className={styles.s4CardTitle}>{p.title}</h3>
                <div className={styles.s4CardTagline}>{p.tagline}</div>
                <ul className={styles.s4CardCaps}>{p.capabilities.map((c) => (<li key={c}><span className={styles.s4CapDot} aria-hidden="true" />{c}</li>))}</ul>
                <div className={styles.s4CardOutcome}><span className={styles.s4OutcomeLabel}>Outcome</span><span className={styles.s4OutcomeText}>{p.outcome}</span></div>
              </div>
            ))}
          </div>
          <p className={styles.s4Footer}>Six pillars, one ecosystem — a complete platform to turn engineering students into product engineers, researchers, and startup founders.</p>
        </div>
      </section>

      {/* Section 5 */}
      <section className={styles.s5} id="infrastructure">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>State-of-the-Art AICTE-Compliant Infrastructure</h2>
          <p className={styles.s5Intro}>A complete AICTE IDEA Lab covers <strong>11 mandated equipment categories</strong> — from digital fabrication and precision manufacturing to electronics test benches and product design workstations. Knowx sources, integrates, and commissions the full stack, aligned to AICTE and BIS standards.</p>
          <div className={styles.s5Grid}>
            {aicteCategories.map((c) => (
              <div key={c.n} className={`${styles.s5Card} ${styles[`s5Tint_${c.tint}`]}`}>
                <div className={styles.s5CardNum}>{c.n}</div>
                <div className={styles.s5CardBody}><h3 className={styles.s5CardTitle}>{c.title}</h3><p className={styles.s5CardItems}>{c.items}</p></div>
              </div>
            ))}
          </div>
          <div className={styles.s5Note}>
            <div className={styles.s5NoteIcon} aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className={styles.s5NoteBody}><strong>Complete AICTE IDEA Lab equipment list covered</strong> — all 11 mandated categories. Detailed specifications, brand options, and quantities are shared during consultation based on your college&apos;s space, budget, and academic priorities.</div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className={styles.s6} id="what-we-deliver">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>What We Deliver</h2>
          <p className={styles.s6Intro}>A complete end-to-end AICTE IDEA Lab service — from initial consultancy and proposal development through equipment supply, installation, faculty training, and turnkey handover.</p>
          <div className={styles.s6Grid}>
            {deliverables.map((d) => (
              <div key={d.title} className={`${styles.s6Card} ${styles[`s6Tint_${d.tint}`]}`}>
                <div className={styles.s6CardIcon} aria-hidden="true">{d.icon}</div>
                <h3 className={styles.s6CardTitle}>{d.title}</h3>
                <p className={styles.s6CardBody}>{d.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.s6Footer}>One partner. One accountable timeline. A fully operational <strong>AICTE IDEA Lab</strong> at your college — designed, installed, trained, and handed over.</p>
        </div>
      </section>

      {/* Section 7 — Beyond AICTE / Knowx 2.0 */}
      <section className={styles.s7} id="beyond-aicte">
        <div className={styles.s7Inner}>
          <span className={styles.s7Tag}>Beyond AICTE Minimum</span>
          <h2 className={styles.s7Heading}>Knowx IDEA Lab 2.0 — Next-Generation Innovation Ecosystem</h2>
          <p className={styles.s7Intro}>The AICTE IDEA Lab standard is a strong foundation — Knowx goes further. Our IDEA Lab 2.0 upgrades the baseline with modern embedded, AI, IoT, and safety extensions that reflect what industry actually uses in 2026. Same AICTE compliance. Higher capability. Longer relevance.</p>
          <div className={styles.s7Grid}>
            {knowx2Domains.map((d) => (
              <div key={d.title} className={styles.s7Card}>
                <div className={styles.s7CardIcon} aria-hidden="true">{d.icon}</div>
                <h3 className={styles.s7CardTitle}>{d.title}</h3>
                <ul className={styles.s7CardList}>{d.items.map((item) => (<li key={item}>{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className={styles.s7Statement}><strong>Meets AICTE compliance. Built for what industry actually uses in 2026.</strong></div>
        </div>
      </section>

      {/* Section 8 — What Students Build */}
      <section className={styles.s8} id="student-projects">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>What Students Build</h2>
          <p className={styles.s8Intro}>Real projects across ten domains — from smart agriculture and industrial automation to autonomous robots, drones, and AI cameras. Every project category maps to a real industry problem and gives students end-to-end product development experience inside the AICTE IDEA Lab.</p>
          <div className={styles.s8Grid}>
            {studentProjects.map((p) => (
              <div key={p.title} className={`${styles.s8Tile} ${styles[`s8Tint_${p.tint}`]}`}>
                <div className={styles.s8TileIcon} aria-hidden="true">{p.icon}</div>
                <h3 className={styles.s8TileTitle}>{p.title}</h3>
                <p className={styles.s8TileBody}>{p.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.s8Footer}>Each project category is aligned to real market demand — agri-tech, industrial IoT, healthcare, mobility, and public infrastructure — so students graduate with portfolio-ready work, not lab kits.</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 9 — STUDENT INNOVATION JOURNEY                         */}
      {/* ============================================================ */}
      <section className={styles.s9} id="student-journey">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>Student Innovation Journey</h2>
          <p className={styles.s9Intro}>
            Every student in the AICTE IDEA Lab follows a structured innovation journey — from
            idea to prototype to patent, startup, or commercial product. Six milestones,
            multidisciplinary by design, mapped to real industry outcomes.
          </p>

          <ol className={styles.s9Flow} aria-label="Student innovation journey milestones">
            {milestones.map((m, i, arr) => (
              <li key={m.n} className={styles.s9Milestone}>
                <div className={`${styles.s9Card} ${styles[`s9Tint_${m.tint}`]}`}>
                  <div className={styles.s9Num}>{m.n}</div>
                  <div className={styles.s9Title}>{m.title}</div>
                  <div className={styles.s9Body}>{m.body}</div>
                </div>
                {i < arr.length - 1 && (<span className={styles.s9Arrow} aria-hidden="true">→</span>)}
              </li>
            ))}
          </ol>

          <p className={styles.s9Footer}>
            A complete innovation journey — turning engineering students into product
            engineers, researchers, and startup founders.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 10 — 10 INSTITUTIONAL OUTCOMES                         */}
      {/* ============================================================ */}
      <section className={styles.s10} id="institutional-outcomes">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>10 Institutional Outcomes</h2>
          <p className={styles.s10Intro}>
            An AICTE IDEA Lab is not just a facility — it is an institutional transformation.
            Ten measurable outcomes that principals, HoDs, and management can point to when
            accreditors, industry partners, and parents ask what the college is doing
            differently.
          </p>

          <div className={styles.s10Grid}>
            {outcomes.map((o) => (
              <div key={o.n} className={`${styles.s10Card} ${styles[`s10Tint_${o.tint}`]}`}>
                <div className={styles.s10Num}>{o.n}</div>
                <div className={styles.s10Body}>
                  <h3 className={styles.s10Title}>{o.title}</h3>
                  <p className={styles.s10Desc}>{o.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.s10Footer}>
            Ten outcomes. One institutional transformation. Real, measurable, defensible.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 11 — AICTE COMPLIANCE & NAAC/NBA MAPPING               */}
      {/* ============================================================ */}
      <section className={styles.s11} id="compliance">
        <div className={styles.s11Inner}>
          <h2 className={styles.s11Heading}>AICTE Compliance &amp; NAAC / NBA Framework Mapping</h2>
          <p className={styles.s11Intro}>
            The AICTE IDEA Lab is more than infrastructure — it is a strategic accreditation
            asset. Every element aligns with AICTE guidelines, NBA outcomes, NAAC criteria,
            and the Institutional Innovation Council (IIC) mandate.
          </p>

          {/* 4 alignment cards */}
          <div className={styles.s11Grid}>
            {complianceCards.map((c) => (
              <div key={c.title} className={`${styles.s11Card} ${styles[`s11Tint_${c.tint}`]}`}>
                <div className={styles.s11CardIcon} aria-hidden="true">{c.icon}</div>
                <h3 className={styles.s11CardTitle}>{c.title}</h3>
                <p className={styles.s11CardBody}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* NAAC criteria mapping table */}
          <div className={styles.s11NaacHeading}>How an AICTE IDEA Lab Strengthens Your NAAC Score</div>

          <div className={styles.s11Table} role="table" aria-label="AICTE IDEA Lab NAAC criteria mapping">
            <div className={styles.s11HeaderRow} role="row">
              <div className={`${styles.s11Cell} ${styles.s11HCrit}`} role="columnheader">NAAC Criterion</div>
              <div className={`${styles.s11Cell} ${styles.s11HContrib}`} role="columnheader">IDEA Lab Contribution</div>
            </div>
            {naacMapping.map((row, i) => (
              <div key={row.criterion} className={`${styles.s11DataRow} ${i % 2 === 1 ? styles.s11RowAlt : ""}`} role="row">
                <div className={`${styles.s11Cell} ${styles.s11DCrit}`} role="cell">
                  <span className={styles.s11MobileLabel}>NAAC Criterion</span>{row.criterion}
                </div>
                <div className={`${styles.s11Cell} ${styles.s11DContrib}`} role="cell">
                  <span className={styles.s11MobileLabel}>IDEA Lab Contribution</span>{row.contribution}
                </div>
              </div>
            ))}
          </div>

          <p className={styles.s11Footer}>
            An AICTE IDEA Lab strengthens 6 of the 7 NAAC criteria — a strategic accreditation
            investment, not just a lab.
          </p>
        </div>
      </section>

      {/* Sections 12–14 — placeholders */}
      <section className={styles.section} id="timeline"><h2 className={styles.placeholder}>12. Implementation Timeline &amp; Funding — TODO (Step 6)</h2></section>
      <section className={styles.section} id="faq"><h2 className={styles.placeholder}>13. FAQ — TODO (Step 6)</h2></section>
      <section className={styles.section} id="cta"><h2 className={styles.placeholder}>14. Final CTA — TODO (Step 6)</h2></section>

      {/* MODAL */}
      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="ail-modal-title">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Close">×</button>
            <h3 id="ail-modal-title" className={styles.modalTitle}>Schedule AICTE IDEA Lab Consultation</h3>
            <p className={styles.modalSubtitle}>Share a few details and our AICTE IDEA Lab team will get in touch within one working day.</p>
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
                <input type="hidden" name="subject" value="AICTE IDEA Lab — Consultation Request" />
                <input type="hidden" name="from_name" value="knowxindia.com — AICTE IDEA Lab page" />
                <div className={styles.modalRow}><label className={styles.modalLabel}>Full Name<input required name="name" type="text" className={styles.modalInput} placeholder="Your name" /></label><label className={styles.modalLabel}>Role<input name="role" type="text" className={styles.modalInput} placeholder="Principal / HoD / IIC Coordinator" /></label></div>
                <label className={styles.modalLabel}>Institution<input required name="institution" type="text" className={styles.modalInput} placeholder="Engineering college / university name" /></label>
                <div className={styles.modalRow}><label className={styles.modalLabel}>Email<input required name="email" type="email" className={styles.modalInput} placeholder="you@institution.edu" /></label><label className={styles.modalLabel}>Phone<input required name="phone" type="tel" className={styles.modalInput} placeholder="Contact number" /></label></div>
                <label className={styles.modalLabel}>What stage are you at?<textarea name="message" className={styles.modalTextarea} rows={3} placeholder="Exploring AICTE IDEA Lab · Applied for AICTE grant · Ready to set up · Have PM-USHA funding..." /></label>
                {submitState === "error" && (<div className={styles.modalError}>Something went wrong. Please try again or reach us by email.</div>)}
                <button type="submit" disabled={submitting} className={styles.modalSubmit}>{submitting ? "Sending..." : "Send Request"}</button>
                <p className={styles.modalFinePrint}>By submitting, you agree to be contacted by Knowx Innovations about AICTE IDEA Lab setup.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
