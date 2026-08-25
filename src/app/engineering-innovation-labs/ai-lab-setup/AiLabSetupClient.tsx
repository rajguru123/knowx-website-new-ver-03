"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * AI Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/ai-lab-setup/
 *
 * FINAL BUILD — all 16 sections complete.
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

type PhaseTint = "green" | "blue" | "amber" | "teal";
const learningPhases: { phase: string; tint: PhaseTint; steps: string[] }[] = [
  { phase: "Foundation", tint: "green", steps: ["AI Fundamentals", "Python for AI"] },
  { phase: "Core AI", tint: "blue", steps: ["Machine Learning", "Deep Learning"] },
  { phase: "Advanced AI", tint: "amber", steps: ["Computer Vision", "Generative AI"] },
  { phase: "Applied AI", tint: "teal", steps: ["Edge AI", "Physical AI / Robotics", "Industry Applications"] },
];

type ExpTint = "green" | "blue" | "amber" | "teal";
const experimentDomains: { title: string; items: string[]; tint: ExpTint; icon: JSX.Element }[] = [
  { title: "Foundation Experiments", items: ["Python programming basics", "Data handling with NumPy/Pandas", "Data visualization", "Basic statistics for AI"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>) },
  { title: "Computer Vision Experiments", items: ["Image classification", "Object detection", "Face & gesture recognition", "Real-time video processing"], tint: "amber", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Edge AI Experiments", items: ["Model deployment on Raspberry Pi", "GPU-accelerated inference on Jetson", "Real-time edge inference", "Sensor + AI integration"], tint: "teal", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Generative AI Experiments", items: ["Prompt engineering", "Text generation with LLMs", "Conversational AI applications", "AI-assisted content generation"], tint: "blue", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>) },
  { title: "Robotics & Physical AI Experiments", items: ["Vision-guided robotic control", "Sensor fusion", "Autonomous navigation basics", "AI-driven motor control"], tint: "green", icon: (<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="12" height="10" rx="2"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/><path d="M9 8V5a3 3 0 0 1 6 0v3M4 13h2M18 13h2"/></svg>) },
];

type TierTint = "green" | "blue" | "amber" | "teal";
const projectTiers: { tier: string; tint: TierTint; projects: string[] }[] = [
  { tier: "Beginner", tint: "green", projects: ["Simple image classifiers", "Basic computer vision apps", "Rule-based chatbots", "Sentiment analysis tools"] },
  { tier: "Intermediate", tint: "blue", projects: ["Real-time object detection", "Voice-controlled assistants", "Recommendation systems", "Face recognition attendance"] },
  { tier: "Advanced", tint: "amber", projects: ["Custom model training & fine-tuning", "Multi-sensor data fusion", "Autonomous navigation basics", "Edge-deployed vision pipelines"] },
  { tier: "Industry-Oriented", tint: "teal", projects: ["Predictive maintenance AI", "Smart factory vision systems", "GenAI-powered applications", "AIoT integrated solutions"] },
];

type EquipTint = "green" | "blue" | "amber" | "teal";
const equipmentCategories: { title: string; body: string; tint: EquipTint; icon: JSX.Element }[] = [
  { title: "AI Computing", body: "GPU and CPU platforms for model training and inference.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>) },
  { title: "Vision Hardware", body: "Cameras, depth sensors and vision modules.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>) },
  { title: "Edge AI Devices", body: "NVIDIA Jetson and Raspberry Pi based Edge AI platforms.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Embedded & Robotics", body: "Sensors, motors, actuators and robotics platforms.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="12" height="10" rx="2"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/><path d="M9 8V5a3 3 0 0 1 6 0v3M4 13h2M18 13h2"/></svg>) },
  { title: "Networking", body: "Connectivity infrastructure for connected AI systems.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a15.3 15.3 0 0 1 20 0"/><path d="M5 15a10 10 0 0 1 14 0"/><path d="M8.5 18a5 5 0 0 1 7 0"/><circle cx="12" cy="21" r="1"/></svg>) },
  { title: "Lab Infrastructure", body: "Workstations, power, storage and lab setup essentials.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>) },
];

type StackTint = "green" | "blue" | "amber" | "teal";
const softwareStack: { category: string; tint: StackTint; tools: string[] }[] = [
  { category: "Programming & Core", tint: "green", tools: ["Python", "NumPy", "Pandas"] },
  { category: "Deep Learning Frameworks", tint: "blue", tools: ["PyTorch", "TensorFlow"] },
  { category: "Vision & AI Libraries", tint: "amber", tools: ["OpenCV", "YOLO", "MediaPipe"] },
  { category: "Acceleration & Deployment", tint: "teal", tools: ["CUDA", "TensorRT"] },
  { category: "Development Tools", tint: "green", tools: ["Jupyter Notebook", "VS Code"] },
];

const deptFinder: { dept: string; focus: string }[] = [
  { dept: "CSE / ISE Students", focus: "Machine Learning + Deep Learning" },
  { dept: "ECE Students", focus: "Embedded AI + Edge AI Kit" },
  { dept: "EEE Students", focus: "Industrial AI & Automation" },
  { dept: "AI & Data Science Students", focus: "Full-stack ML, DL & Generative AI" },
  { dept: "Mechanical / Industrial Students", focus: "Robotics & Physical AI" },
];
const levelFinder: { level: string; focus: string }[] = [
  { level: "First Year Engineering", focus: "AI Fundamentals" },
  { level: "Undergraduate (2nd–3rd Year)", focus: "Machine Learning + Computer Vision" },
  { level: "Final Year Projects", focus: "Generative AI + Edge AI + Advanced Projects" },
  { level: "Research & Innovation Centres", focus: "Jetson Kit + GPU Computing" },
];

type ImplTint = "green" | "blue" | "amber" | "teal";
const implementationSteps: { title: string; body: string; tint: ImplTint }[] = [
  { title: "Requirement Assessment", body: "Understand student capacity, departments and academic objectives.", tint: "green" },
  { title: "Lab Design & Layout Planning", body: "Plan workstation layout, networking and power requirements.", tint: "blue" },
  { title: "Hardware Procurement", body: "Source AI kits, computing platforms and vision hardware.", tint: "amber" },
  { title: "Software Installation & Configuration", body: "Set up frameworks, libraries and development environments.", tint: "teal" },
  { title: "Network & Infrastructure Setup", body: "Configure connectivity, storage and lab infrastructure.", tint: "green" },
  { title: "Experiment & Curriculum Mapping", body: "Align experiments and projects with academic curriculum.", tint: "blue" },
  { title: "Faculty Training", body: "Onboard teaching staff with guides, manuals and hands-on sessions.", tint: "amber" },
  { title: "Pilot Batch Testing", body: "Run a pilot batch to validate experiments and workflows.", tint: "teal" },
  { title: "Full Deployment & Ongoing Support", body: "Roll out across batches with continued technical support.", tint: "green" },
];

const comparisonRows: { aspect: string; rpi: string; jetson: string }[] = [
  { aspect: "AI Performance", rpi: "CPU-based, limited AI acceleration", jetson: "67 TOPS, GPU-accelerated" },
  { aspect: "Best For", rpi: "Learning fundamentals, IoT + AI, lightweight vision", jetson: "Deep learning, real-time vision, LLMs" },
  { aspect: "CUDA Support", rpi: "No", jetson: "Yes" },
  { aspect: "Relative Cost", rpi: "Lower", jetson: "Moderate" },
  { aspect: "Ideal Level", rpi: "Beginner to Intermediate", jetson: "Advanced, Final-Year, Research" },
  { aspect: "Software Stack", rpi: "Python, TensorFlow Lite, OpenCV", jetson: "PyTorch, TensorFlow, CUDA, TensorRT" },
];

const facultyResources: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Instructor Guides", body: "Step-by-step teaching guides for every experiment and project.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M2 10v6c0 1 4 3 10 3s10-2 10-3v-6"/></svg>) },
  { title: "Lab Manuals & Curriculum Mapping", body: "Structured manuals mapped to curriculum outcomes.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>) },
  { title: "Source Code Repository", body: "Complete, tested source code for all experiments and projects.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>) },
  { title: "Assessment Resources", body: "Question banks, rubrics and evaluation templates.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4"/><path d="M9 16h6"/></svg>) },
  { title: "Presentation Decks", body: "Ready-to-use classroom slides for each module.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>) },
  { title: "Faculty Training & Workshops", body: "Onboarding sessions and technical support for teaching staff.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
];

const whyKnowx: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Complete AI Lab Perspective", body: "AI labs planned as a complete ecosystem, not isolated hardware purchases.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>) },
  { title: "Multiple AI Platforms", body: "Raspberry Pi and NVIDIA Jetson under one partner, spanning fundamentals to advanced deep learning.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Engineering Education Focus", body: "Experiments and projects aligned with practical learning outcomes.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M2 10v6c0 1 4 3 10 3s10-2 10-3v-6"/></svg>) },
  { title: "Hands-On Experiments & Projects", body: "From foundational ML to Generative AI, Edge AI and robotics.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6l-6 10a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-6-10V2"/><path d="M9 2h6M6 15h12"/></svg>) },
  { title: "Faculty Enablement", body: "Guides, manuals, source code and training so faculty can teach confidently.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
  { title: "Technical Support", body: "Support throughout implementation and ongoing lab operation.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 12l4-4M8 12a4 4 0 1 1 8 0"/></svg>) },
  { title: "Pan-India Service", body: "Serving engineering institutions across India with consistent delivery.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20V10l-6 4V10l-6 4V6L2 10v10z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>) },
];

const faqs: { q: string; a: string }[] = [
  { q: "What is an AI lab?", a: "An AI lab is a practical learning environment where students develop, train, test and deploy artificial intelligence applications using computing hardware, AI software, datasets, development tools and hands-on projects. A modern engineering AI lab spans machine learning, deep learning, computer vision, generative AI, Edge AI and robotics." },
  { q: "What equipment is needed for an AI lab?", a: "An AI lab typically needs AI computing hardware (GPU/CPU platforms), vision hardware such as cameras and sensors, Edge AI devices like NVIDIA Jetson and Raspberry Pi, embedded and robotics components, networking infrastructure, and student workstations. The exact configuration depends on department focus and student capacity." },
  { q: "Which is better for AI education — Raspberry Pi or NVIDIA Jetson?", a: "Both serve different purposes. Raspberry Pi is well suited for learning AI fundamentals, lightweight computer vision and IoT-integrated AI at a lower cost. NVIDIA Jetson, particularly the Orin Nano Super, offers GPU-accelerated deep learning, real-time vision and LLM deployment, making it better suited for advanced, final-year and research-level work." },
  { q: "What AI kits does Knowx provide?", a: "Knowx provides two Edge AI kit tiers: the Knowx Edge AI & Computer Vision Kit, powered by Raspberry Pi, with 50+ experiments covering vision, voice AI and robotics; and the NVIDIA Jetson Orin Nano Super Edge AI Kit, offering GPU-accelerated deep learning, computer vision and generative AI capabilities for advanced coursework." },
  { q: "What software is used in an AI lab?", a: "A Knowx AI lab uses Python as the core programming language, deep learning frameworks including PyTorch and TensorFlow, vision libraries such as OpenCV, YOLO and MediaPipe, acceleration tools like CUDA and TensorRT for Jetson-based deployments, and development environments including Jupyter Notebook and VS Code." },
  { q: "Can AI labs be set up for VTU or AICTE-affiliated colleges?", a: "Yes. Knowx AI lab setups can be configured to align with the practical, project and curriculum requirements of VTU and AICTE-affiliated engineering colleges across departments such as CSE, ECE, EEE, ISE and AI & Data Science." },
  { q: "Do you provide faculty training for AI labs?", a: "Yes. Faculty resources including instructor guides, lab manuals mapped to curriculum, source code repositories, assessment resources, presentation decks and hands-on training workshops are provided to help teaching staff run AI lab sessions confidently." },
  { q: "What AI projects can students build?", a: "Students can build projects ranging from beginner-level image classifiers and chatbots, to intermediate real-time object detection and voice assistants, to advanced custom model training and autonomous navigation, up to industry-oriented predictive maintenance and smart factory vision systems." },
  { q: "How is an AI lab different from an IoT lab?", a: "An IoT lab focuses on connected sensor networks, edge devices and cloud dashboards for smart systems. An AI lab focuses on machine learning, deep learning, computer vision, generative AI and Edge AI model development and deployment. The two labs complement each other, and many institutions set up both." },
  { q: "Do you provide institutional proposals for AI lab setup?", a: "Yes. Share your institution's department, student capacity, academic level and objectives using the Request AI Lab Proposal option on this page, and the Knowx AI lab team will prepare a tailored proposal within one working day." },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://knowxindia.com/" },
      { "@type": "ListItem", position: 2, name: "Engineering Innovation Labs", item: "https://knowxindia.com/engineering-innovation-labs" },
      { "@type": "ListItem", position: 3, name: "AI Lab Setup", item: "https://knowxindia.com/engineering-innovation-labs/ai-lab-setup" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: aiKits.map((k, i) => ({ "@type": "ListItem", position: i + 1, name: k.title, url: `https://knowxindia.com/engineering-innovation-labs/ai-lab-setup/#ai-lab-kits` })),
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

      {/* S5 AI LEARNING PATH */}
      <section className={styles.s5} id="ai-learning-path">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>AI Learning Path</h2>
          <p className={styles.s5Intro}>A structured progression from AI fundamentals to industry-ready applications — the same pathway a Knowx AI lab is designed to support.</p>
          <div className={styles.s5PhaseGrid}>
            {learningPhases.map((p, pi) => (
              <div key={p.phase} className={`${styles.s5Phase} ${styles[`s5Phase_${p.tint}`]}`}>
                <div className={styles.s5PhaseHeader}>
                  <span className={`${styles.s5PhaseNum} ${styles[`s5PhaseNum_${p.tint}`]}`}>{pi + 1}</span>
                  <h3 className={styles.s5PhaseTitle}>{p.phase}</h3>
                </div>
                <div className={styles.s5PhaseSteps}>{p.steps.map((step) => (<div key={step} className={styles.s5StepChip}>{step}</div>))}</div>
                {pi < learningPhases.length - 1 && <div className={`${styles.s5PhaseArrow} ${styles[`s5PhaseArrow_${p.tint}`]}`} aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6 AI LAB EXPERIMENTS */}
      <section className={styles.s6} id="ai-lab-experiments">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>AI Lab Experiments</h2>
          <p className={styles.s6Intro}>Experiments span five domains — from foundational programming to advanced Edge AI, generative AI and physical robotics.</p>
          <div className={styles.s6Grid}>
            {experimentDomains.map((d) => (
              <div key={d.title} className={`${styles.s6Card} ${styles[`s6CardTint_${d.tint}`]}`}>
                <div className={`${styles.s6CardIcon} ${styles[`s6CardIcon_${d.tint}`]}`} aria-hidden="true">{d.icon}</div>
                <h3 className={styles.s6CardTitle}>{d.title}</h3>
                <ul className={styles.s6CardItems}>{d.items.map((item) => (<li key={item} className={styles.s6CardItem}><span className={`${styles.s6Dot} ${styles[`s6Dot_${d.tint}`]}`} aria-hidden="true" />{item}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S7 AI PROJECTS */}
      <section className={styles.s7} id="ai-projects">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>AI Projects for Engineering Students</h2>
          <p className={styles.s7Intro}>Projects scale from beginner-friendly classifiers to industry-oriented AI systems, matching student progression through the lab.</p>
          <div className={styles.s7Grid}>
            {projectTiers.map((t) => (
              <div key={t.tier} className={`${styles.s7Card} ${styles[`s7CardTint_${t.tint}`]}`}>
                <div className={`${styles.s7TierHeader} ${styles[`s7TierHeader_${t.tint}`]}`}>{t.tier}</div>
                <ul className={styles.s7List}>{t.projects.map((p) => (<li key={p} className={styles.s7Item}><span className={`${styles.s7Dot} ${styles[`s7Dot_${t.tint}`]}`} aria-hidden="true" />{p}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8 AI LAB EQUIPMENT */}
      <section className={styles.s8} id="ai-lab-equipment">
        <div className={styles.s8Inner}>
          <h2 className={styles.s8Heading}>AI Lab Equipment</h2>
          <p className={styles.s8Intro}>Core equipment categories that make up a complete AI laboratory, from computing hardware to lab infrastructure.</p>
          <div className={styles.s8Grid}>
            {equipmentCategories.map((c) => (
              <div key={c.title} className={styles.s8Card}>
                <div className={`${styles.s8CardIcon} ${styles[`s8CardIcon_${c.tint}`]}`} aria-hidden="true">{c.icon}</div>
                <h3 className={styles.s8CardTitle}>{c.title}</h3>
                <p className={styles.s8CardBody}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — AI SOFTWARE & DEVELOPMENT STACK */}
      <section className={styles.s9} id="ai-software-stack">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>AI Software &amp; Development Stack</h2>
          <p className={styles.s9Intro}>The complete software stack used across Knowx AI labs, from core programming to GPU acceleration and deployment.</p>
          <div className={styles.s9Grid}>
            {softwareStack.map((s) => (
              <div key={s.category} className={`${styles.s9Card} ${styles[`s9CardTint_${s.tint}`]}`}>
                <h3 className={styles.s9CardTitle}>{s.category}</h3>
                <div className={styles.s9Chips}>{s.tools.map((tool) => (<span key={tool} className={`${styles.s9Chip} ${styles[`s9Chip_${s.tint}`]}`}>{tool}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — AI LAB FINDER */}
      <section className={styles.s10} id="ai-lab-finder">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>AI Lab for Departments &amp; Academic Levels</h2>
          <p className={styles.s10Intro}>A quick way to find the right AI lab focus based on your department or student academic level.</p>
          <div className={styles.s10Panels}>
            <div className={`${styles.s10Panel} ${styles.s10PanelGreen}`}>
              <h3 className={styles.s10PanelTitle}>By Engineering Department</h3>
              <ul className={styles.s10PanelList}>{deptFinder.map((row) => (<li key={row.dept} className={styles.s10PanelItem}><span className={styles.s10PanelLabel}>{row.dept}</span><span className={styles.s10PanelArrow} aria-hidden="true">→</span><span className={styles.s10PanelFocus}>{row.focus}</span></li>))}</ul>
            </div>
            <div className={`${styles.s10Panel} ${styles.s10PanelBlue}`}>
              <h3 className={styles.s10PanelTitle}>By Academic Level</h3>
              <ul className={styles.s10PanelList}>{levelFinder.map((row) => (<li key={row.level} className={styles.s10PanelItem}><span className={styles.s10PanelLabel}>{row.level}</span><span className={styles.s10PanelArrow} aria-hidden="true">→</span><span className={styles.s10PanelFocus}>{row.focus}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — IMPLEMENTATION */}
      <section className={styles.s11} id="ai-lab-implementation">
        <div className={styles.s11Inner}>
          <h2 className={styles.s11Heading}>Complete AI Lab Implementation</h2>
          <p className={styles.s11Intro}>A structured 9-step process from initial assessment to full deployment and ongoing support.</p>
          <div className={styles.s11Grid}>
            {implementationSteps.map((step, i) => (
              <div key={step.title} className={`${styles.s11Card} ${styles[`s11CardTint_${step.tint}`]}`}>
                <span className={`${styles.s11Num} ${styles[`s11Num_${step.tint}`]}`}>{i + 1}</span>
                <h3 className={styles.s11CardTitle}>{step.title}</h3>
                <p className={styles.s11CardBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — RPI VS JETSON */}
      <section className={styles.s12} id="rpi-vs-jetson">
        <div className={styles.s12Inner}>
          <h2 className={styles.s12Heading}>Raspberry Pi vs NVIDIA Jetson for AI Education</h2>
          <p className={styles.s12Intro}>Both platforms serve engineering AI education — the right choice depends on the learning stage and application.</p>
          <div className={styles.s12TableWrap}>
            <table className={styles.s12Table}>
              <thead>
                <tr>
                  <th className={styles.s12Th}>Aspect</th>
                  <th className={`${styles.s12Th} ${styles.s12ThGreen}`}>Raspberry Pi</th>
                  <th className={`${styles.s12Th} ${styles.s12ThBlue}`}>NVIDIA Jetson Orin Nano Super</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 1 ? styles.s12RowAlt : ""}>
                    <td className={`${styles.s12Td} ${styles.s12TdAspect}`}>{row.aspect}</td>
                    <td className={styles.s12Td}>{row.rpi}</td>
                    <td className={styles.s12Td}>{row.jetson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FACULTY TRAINING */}
      <section className={styles.s13} id="faculty-training">
        <div className={styles.s13Inner}>
          <h2 className={styles.s13Heading}>Faculty Training &amp; Curriculum</h2>
          <p className={styles.s13Intro}>Every Knowx AI lab is backed by resources that help faculty teach confidently and run AI lab sessions smoothly.</p>
          <div className={styles.s13Grid}>
            {facultyResources.map((f) => (
              <div key={f.title} className={styles.s13Card}>
                <div className={styles.s13CardIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.s13CardTitle}>{f.title}</h3>
                <p className={styles.s13CardBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — WHY CHOOSE KNOWX */}
      <section className={styles.s14} id="why-knowx">
        <div className={styles.s14Inner}>
          <span className={styles.s14Tag}>Why Knowx India</span>
          <h2 className={styles.s14Heading}>Why Choose Knowx for AI Lab Setup?</h2>
          <div className={styles.s14Grid}>
            {whyKnowx.map((w) => (
              <div key={w.title} className={styles.s14Card}>
                <div className={styles.s14CardIcon} aria-hidden="true">{w.icon}</div>
                <h3 className={styles.s14CardTitle}>{w.title}</h3>
                <p className={styles.s14CardBody}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15 — FAQ */}
      <section className={styles.s15} id="faq">
        <div className={styles.s15Inner}>
          <h2 className={styles.s15Heading}>AI Lab Setup — Frequently Asked Questions</h2>
          <div className={styles.s15List}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.s15Item}>
                <summary className={styles.s15Q}>
                  <span>{f.q}</span>
                  <span className={styles.s15QChevron} aria-hidden="true">+</span>
                </summary>
                <div className={styles.s15A}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </section>

      {/* SECTION 16 — FINAL CTA */}
      <section className={styles.s16} id="cta">
        <div className={styles.s16Inner}>
          <h2 className={styles.s16Heading}>Ready to Build Your AI Lab?</h2>
          <p className={styles.s16Body}>Tell us your institution&apos;s department, student level, batch size and objectives. Our AI lab team will prepare a tailored proposal covering AI kits, computing hardware, experiments, projects and faculty training.</p>
          <div className={styles.s16CtaRow}>
            <button type="button" onClick={openModal} className={styles.s16CtaPrimary}>Request AI Lab Proposal</button>
            <button type="button" onClick={openModal} className={styles.s16CtaSecondary}>Talk to an AI Lab Expert</button>
          </div>
          <p className={styles.s16Link}>
            Also explore our{" "}
            <Link href="/engineering-innovation-labs/iot-lab-setup" className={styles.s16LinkAnchor}>IoT Lab Setup</Link>
            {", "}
            <Link href="/engineering-innovation-labs/iot-lab-equipment" className={styles.s16LinkAnchor}>IoT Lab Equipment</Link>
            {" and "}
            <Link href="/engineering-innovation-labs/iot-kits" className={styles.s16LinkAnchor}>IoT Kits</Link>
          </p>
        </div>
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
