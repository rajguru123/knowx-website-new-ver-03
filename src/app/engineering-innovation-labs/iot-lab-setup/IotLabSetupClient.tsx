"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import styles from "./styles.module.css";

/**
 * IoT Lab Setup — Child page under Engineering Innovation Labs pillar
 * URL: /engineering-innovation-labs/iot-lab-setup/
 *
 * Step 6 — FINAL STEP. All 14 sections built. Page content-complete.
 *   - Section 13: FAQ (10 questions) + FAQPage JSON-LD schema
 *   - Section 14: Final CTA banner + flagship cross-link
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
const s5Kits: { title: string; badge: string; idealFor: string; capabilities: string[]; tint: KitTint; imgSrc: string; imgAlt: string; href: string }[] = [
  { title: "IoT Starter Kit", badge: "Beginner", idealFor: "First-year students & IoT fundamentals courses", capabilities: ["30+ structured experiments", "10 guided mini projects", "ESP32 Wi-Fi + Bluetooth", "Plug-and-play sensor modules", "Step-by-step experiment guides", "Mobile app integration basics"], tint: "green", imgSrc: "/images/iot-kits/kit-iot-starter.jpg", imgAlt: "IoT Starter Kit for engineering students — Knowx India", href: "/engineering-innovation-labs/iot-kits#iot-starter-kit" },
  { title: "ESP32 Professional IoT Kit", badge: "Intermediate", idealFor: "ECE / CSE 2nd & 3rd year IoT & embedded courses", capabilities: ["60+ experiments across domains", "25 industry-grade IoT projects", "40+ sensor & actuator modules", "Cloud IoT — AWS · Azure · GCP", "MQTT · HTTP · REST protocols", "Mobile dashboard development"], tint: "blue", imgSrc: "/images/iot-kits/kit-esp32-professional.jpg", imgAlt: "ESP32 Professional IoT Kit — Knowx India", href: "/engineering-innovation-labs/iot-kits#esp32-professional-iot-kit" },
  { title: "Industrial IoT Kit", badge: "Advanced", idealFor: "Final-year projects, Industry 4.0 & Industrial IoT labs", capabilities: ["80+ industrial experiments", "30 Industry 4.0 projects", "ESP32 + STM32 + Raspberry Pi", "SCADA & PLC integration", "Predictive maintenance demos", "Smart factory scenario kits"], tint: "amber", imgSrc: "/images/iot-kits/kit-industrial-iot.jpg", imgAlt: "Industrial IoT Kit for engineering colleges — Knowx India", href: "/engineering-innovation-labs/iot-kits#industrial-iot-kit" },
  { title: "Raspberry Pi Edge AI Kit", badge: "AI + IoT", idealFor: "AI & IoT programs, Edge computing & Vision labs", capabilities: ["Linux & Python environment", "AI / ML model deployment", "Computer vision with OpenCV", "Edge AI inference (TFLite)", "IoT gateway implementation", "Cloud + edge hybrid setup"], tint: "teal", imgSrc: "/images/iot-kits/kit-edge-ai-computer-vision.jpg", imgAlt: "Raspberry Pi Edge AI Kit — Knowx India", href: "/engineering-innovation-labs/iot-kits#edge-ai-computer-vision-kit" },
  { title: "STM32 Embedded Systems Kit", badge: "Embedded", idealFor: "Embedded systems, RTOS & industrial protocol labs", capabilities: ["Embedded C & firmware dev", "RTOS — FreeRTOS / Zephyr", "Industrial protocols (Modbus, CAN)", "Real-time system design", "Automotive & industrial use cases", "Hardware debugging & profiling"], tint: "green", imgSrc: "/images/iot-kits/kit-stm32-embedded.jpg", imgAlt: "STM32 Embedded Systems Kit — Knowx India", href: "/engineering-innovation-labs/iot-kits#stm32-embedded-systems-kit" },
  { title: "Smart Factory Learning Platform", badge: "Industry 4.0", idealFor: "Innovation centres, CoEs & smart manufacturing labs", capabilities: ["Smart manufacturing simulation", "Digital factory modelling", "Machine vision integration", "AI predictive maintenance", "OPC-UA & Industry 4.0 stack", "Complete IIoT ecosystem demo"], tint: "blue", imgSrc: "/images/iot-kits/kit-smart-factory.jpg", imgAlt: "Smart Factory Learning Platform — Knowx India", href: "/engineering-innovation-labs/iot-kits#smart-factory-learning-platform" },
];

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

const s9Factors = [
  "Number of students",
  "Number of workstations",
  "IoT platforms chosen",
  "Sensors & modules required",
  "Project kits needed",
  "Networking infrastructure",
  "Edge computing hardware",
  "Industrial IoT equipment",
  "Software & licenses",
  "Installation & commissioning",
  "Faculty training program",
  "Ongoing technical support",
];

const s10Steps: { n: string; title: string; body: string }[] = [
  { n: "1", title: "Requirement Analysis", body: "We understand your student capacity, curriculum, technology requirements and learning objectives." },
  { n: "2", title: "Lab Planning & Design", body: "We design the equipment layout, infrastructure plan and mapped learning outcomes for your IoT lab." },
  { n: "3", title: "Equipment & Kit Selection", body: "We finalise platforms, sensors, kits, software and infrastructure suited to your institution's needs." },
  { n: "4", title: "Installation & Configuration", body: "We deploy, install and configure all lab equipment and systems ready for classroom use." },
  { n: "5", title: "Faculty Training", body: "We deliver relevant training and resources so faculty can run practical sessions confidently." },
  { n: "6", title: "Student & Technical Support", body: "We provide ongoing support for practical learning, student projects and day-to-day lab operations." },
];

const s11Why: { title: string; body: string; icon: JSX.Element }[] = [
  { title: "Complete Laboratory Solutions", body: "End-to-end IoT lab setup — planning, equipment, installation, training and support under one partner.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/></svg>) },
  { title: "Engineering-Focused Learning", body: "Curriculum-mapped experiments and projects designed specifically for engineering outcomes.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { title: "Multiple Technology Platforms", body: "ESP32, STM32, Raspberry Pi and Industrial IoT — a complete multi-platform learning ecosystem.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>) },
  { title: "Project-Based Learning", body: "Real, structured projects that build practical engineering skills — not just theoretical exposure.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 10l2 2 4-4"/><path d="M9 16h6"/></svg>) },
  { title: "Faculty Enablement", body: "Structured training programs that turn faculty into confident IoT lab instructors and mentors.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>) },
  { title: "Industry-Oriented Applications", body: "Projects and use cases mapped to real industry problems — agri-tech, healthcare, manufacturing.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>) },
  { title: "Pan-India Support", body: "Implementation and technical support delivered to engineering colleges across India.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>) },
  { title: "Bangalore & Karnataka Focus", body: "Deep regional presence and faster on-ground support for colleges across Karnataka.", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/></svg>) },
];

type InstTint = "green" | "blue" | "amber" | "teal";
const s12Institutions: { title: string; body: string; tint: InstTint; icon: JSX.Element }[] = [
  { title: "First-Year & Foundation Programs", body: "IoT fundamentals, sensor basics and beginner-friendly guided mini projects for early-year students.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { title: "CSE, ECE, EEE & ISE Programs", body: "Embedded IoT, connectivity protocols, cloud integration and structured project development.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v4M16 3v4M3 8h4M3 16h4M17 21v-4M8 21v-4M17 8h4M17 16h4"/></svg>) },
  { title: "AI & IoT Programs", body: "Edge AI, computer vision and intelligent IoT systems for specialised AI & ML curricula.", tint: "amber", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 6.6A4 4 0 0 0 8 20v1h8v-1a4 4 0 0 0 3-6.4A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 12h6M12 9v6"/></svg>) },
  { title: "Final-Year Projects", body: "Advanced platforms, project kits and industry-grade applications for capstone project work.", tint: "teal", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.5 1 2.3v1h6v-1c0-.8.4-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg>) },
  { title: "Innovation Centres", body: "Advanced IoT, Edge AI, Industrial IoT and Industry 4.0 systems for innovation-focused centres.", tint: "green", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>) },
  { title: "Research Centres", body: "Advanced hardware, industrial applications and specialised environments for applied research.", tint: "blue", icon: (<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>) },
];

/* ─── Section 13 — FAQ (10 questions from doc) ─── */
const faqs: { q: string; a: string }[] = [
  {
    q: "What is an IoT lab?",
    a: "An IoT (Internet of Things) lab is a practical learning environment where engineering students work with microcontrollers, sensors, actuators, communication modules and cloud platforms to design, build and deploy connected devices and applications. It brings together embedded systems, wireless communication, cloud computing and data analytics in a single, hands-on learning space.",
  },
  {
    q: "What equipment is required for an IoT lab?",
    a: "A typical IoT lab requires development boards (ESP32, STM32, Raspberry Pi, Arduino), sensors and actuators, communication modules (Wi-Fi, BLE, LoRa, Zigbee), edge computing devices, networking infrastructure, software and development tools, IoT project kits, student workstations, and supporting lab infrastructure. The exact equipment list depends on your curriculum and student capacity.",
  },
  {
    q: "How much does an IoT lab setup cost?",
    a: "IoT lab setup cost varies based on student capacity, number of workstations, choice of platforms, sensor requirements, project kits, networking, edge computing hardware, and the level of specialization required. There is no single fixed package — Knowx India works with institutions to scope the right configuration and provide a transparent quote based on actual requirements.",
  },
  {
    q: "What is included in an IoT lab setup for engineering colleges?",
    a: "A complete IoT lab setup from Knowx India includes laboratory planning and design, IoT development platforms, sensors and communication modules, cloud IoT and edge computing systems, structured experiments and project-based learning resources, lab infrastructure, faculty training and enablement, installation and commissioning, and ongoing student and technical support.",
  },
  {
    q: "Do you provide IoT lab equipment for engineering colleges?",
    a: "Yes. Knowx India sources, supplies and integrates the complete range of IoT lab equipment — development platforms, sensors, actuators, communication modules, edge computing devices, industrial IoT hardware and laboratory infrastructure — configured to your institution's curriculum and student batch size.",
  },
  {
    q: "Do you provide IoT kits for engineering students?",
    a: "Yes. We provide purpose-built IoT project kits including the IoT Starter Kit, ESP32 Professional IoT Kit, Industrial IoT Kit, Raspberry Pi Edge AI Kit, STM32 Embedded Systems Kit and Smart Factory Learning Platform — each with structured experiment guides mapped to engineering curriculum outcomes.",
  },
  {
    q: "Can you set up an IoT lab for VTU engineering colleges?",
    a: "Yes. Knowx India works with VTU-affiliated engineering colleges to plan and implement IoT laboratories that support ECE, CSE, EEE, ISE and AI & ML programs — aligned to VTU curriculum requirements, practical session structures and student learning outcomes across multiple semesters.",
  },
  {
    q: "Do you provide faculty training for IoT laboratories?",
    a: "Yes. Faculty training and enablement is a core part of every IoT lab setup. We deliver structured training programs so faculty can confidently run practical sessions, guide student projects, and use the lab's platforms, sensors and cloud tools effectively in classroom teaching.",
  },
  {
    q: "What IoT projects can engineering students build?",
    a: "Students can build a wide range of projects — smart agriculture systems, home automation, health monitoring devices, industrial automation demos, environmental monitoring, smart city applications, predictive maintenance systems, edge AI vision projects, and Industry 4.0 smart factory simulations — depending on the lab configuration and kit selection.",
  },
  {
    q: "Do you provide IoT lab installation and technical support?",
    a: "Yes. Knowx India handles complete installation, configuration and commissioning of all IoT lab equipment, followed by ongoing technical support, maintenance assistance and student project mentoring to keep your laboratory fully operational.",
  },
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

      {/* ── S2 ── */}
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

      {/* ── S3 ── */}
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

      {/* ── S4 ── */}
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

      {/* ── S5 ── */}
      <section className={styles.s5} id="iot-kits">
        <div className={styles.s5Inner}>
          <h2 className={styles.s5Heading}>IoT Kits for Engineering Students</h2>
          <p className={styles.s5Intro}>Practical learning becomes more effective when students can build, test and troubleshoot real systems. Knowx India provides purpose-built <strong>IoT project kits</strong> for engineering colleges — each kit includes development hardware, sensors, modules, and structured experiment guides mapped to engineering curriculum outcomes.</p>
          <div className={styles.s5Grid}>
            {s5Kits.map((kit) => (
              <div key={kit.title} className={`${styles.s5Card} ${styles[`s5Tint_${kit.tint}`]}`}>
                <Image src={kit.imgSrc} alt={kit.imgAlt} width={320} height={200} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" className={styles.s5KitImg} />
                <div className={styles.s5CardBody}>
                  <div className={styles.s5BadgeRow}><span className={`${styles.s5Badge} ${styles[`s5Badge_${kit.tint}`]}`}>{kit.badge}</span></div>
                  <h3 className={styles.s5CardTitle}>{kit.title}</h3>
                  <p className={styles.s5IdealFor}><span className={styles.s5IdealLabel}>Ideal for: </span>{kit.idealFor}</p>
                  <ul className={styles.s5Caps}>{kit.capabilities.map((cap) => (<li key={cap} className={styles.s5Cap}><span className={`${styles.s5CapDot} ${styles[`s5CapDot_${kit.tint}`]}`} aria-hidden="true" />{cap}</li>))}</ul>
                  <Link href={kit.href} className={`${styles.s5KitCta} ${styles[`s5KitCta_${kit.tint}`]}`}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.s5Footer}>All IoT kits include structured experiment guides, project documentation, component lists and faculty support resources. Custom kit configurations are available for specific curriculum requirements.</p>
        </div>
      </section>

      {/* ── S6 ── */}
      <section className={styles.s6} id="experiments">
        <div className={styles.s6Inner}>
          <h2 className={styles.s6Heading}>IoT Lab Experiments &amp; Project-Based Learning</h2>
          <p className={styles.s6Intro}>A well-designed IoT laboratory supports a wide range of structured experiments and project-based learning activities — from basic sensor interfacing and wireless communication to advanced edge AI, industrial IoT and Industry 4.0 applications. Knowx India provides experiment guides, project templates and learning resources mapped to engineering curriculum outcomes.</p>
          <div className={styles.s6Grid}>
            {s6Experiments.map((exp) => (
              <div key={exp.title} className={`${styles.s6Card} ${styles[`s6Tint_${exp.tint}`]}`}>
                <div className={styles.s6CardIcon} aria-hidden="true">{exp.icon}</div>
                <h3 className={styles.s6CardTitle}>{exp.title}</h3>
                <ul className={styles.s6CardItems}>{exp.items.map((item) => (<li key={item} className={styles.s6CardItem}><span className={`${styles.s6ItemDot} ${styles[`s6Dot_${exp.tint}`]}`} aria-hidden="true" />{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className={styles.s6CtaRow}><button type="button" onClick={openModal} className={styles.s6CtaPrimary}>Explore IoT Lab Experiments →</button></div>
        </div>
      </section>

      {/* ── S7 ── */}
      <section className={styles.s7} id="requirements">
        <div className={styles.s7Inner}>
          <h2 className={styles.s7Heading}>IoT Lab Requirements for Engineering Colleges</h2>
          <p className={styles.s7Intro}>Setting up an effective <strong>IoT laboratory</strong> for an engineering college requires a structured combination of hardware, software, infrastructure and learning resources. The specific requirements depend on the institution's curriculum, department focus, student batch size and academic objectives.</p>
          <div className={styles.s7Table} role="table" aria-label="IoT lab requirements for engineering colleges">
            <div className={styles.s7HeaderRow} role="row">
              <div className={`${styles.s7Cell} ${styles.s7HReq}`} role="columnheader">Requirement</div>
              <div className={`${styles.s7Cell} ${styles.s7HPurpose}`} role="columnheader">Purpose</div>
            </div>
            {s7Requirements.map((row, i) => (
              <div key={row.requirement} className={`${styles.s7DataRow} ${i % 2 === 1 ? styles.s7RowAlt : ""}`} role="row">
                <div className={`${styles.s7Cell} ${styles.s7DReq}`} role="cell"><span className={styles.s7MobileLabel}>Requirement</span>{row.requirement}</div>
                <div className={`${styles.s7Cell} ${styles.s7DPurpose}`} role="cell"><span className={styles.s7MobileLabel}>Purpose</span>{row.purpose}</div>
              </div>
            ))}
          </div>
          <div className={styles.s7CtaRow}><button type="button" onClick={openModal} className={styles.s7CtaPrimary}>View IoT Lab Requirements Guide →</button></div>
        </div>
      </section>

      {/* ── S8 ── */}
      <section className={styles.s8} id="vtu">
        <div className={styles.s8Inner}>
          <div className={styles.s8Content}>
            <h2 className={styles.s8Heading}>IoT Lab Setup for VTU Engineering Colleges</h2>
            <p className={styles.s8Para}>Engineering colleges affiliated to Visvesvaraya Technological University (VTU) can establish IoT laboratories that support their academic programs across ECE, CSE, EEE, ISE and emerging AI &amp; IoT specializations. Knowx India works with VTU-affiliated institutions to plan and implement IoT laboratories aligned to their curriculum requirements, practical session structures and student learning outcomes.</p>
            <p className={styles.s8Para}>Our IoT lab setup for VTU engineering colleges covers the practical learning requirements across multiple semesters and departments — from fundamental IoT programming and sensor applications to advanced cloud IoT, edge computing and industry-oriented project development.</p>
            <div className={styles.s8ChecklistWrap}>
              <div className={styles.s8ChecklistTitle}>What the IoT Lab Supports for VTU Colleges</div>
              <ul className={styles.s8Checklist}>{s8VtuChecklist.map((item) => (<li key={item} className={styles.s8CheckItem}><span className={styles.s8CheckMark} aria-hidden="true">✓</span>{item}</li>))}</ul>
            </div>
            <div className={styles.s8CtaRow}><button type="button" onClick={openModal} className={styles.s8CtaPrimary}>Explore IoT Lab Setup for VTU Colleges →</button></div>
          </div>
          <div className={styles.s8Panel} aria-hidden="true">
            <div className={styles.s8PanelTag}>VTU-Affiliated Colleges</div>
            <div className={styles.s8PanelHeading}>Departments Served</div>
            {["ECE — Electronics & Communication", "CSE — Computer Science", "EEE — Electrical & Electronics", "ISE — Information Science", "AI & ML — Artificial Intelligence", "Mechatronics & Robotics"].map((dept) => (
              <div key={dept} className={styles.s8PanelItem}><span className={styles.s8PanelDot} aria-hidden="true" />{dept}</div>
            ))}
            <div className={styles.s8PanelDivider} />
            <div className={styles.s8PanelStat}>
              <div className={styles.s8PanelStatNum}>200<span>+</span></div>
              <div className={styles.s8PanelStatLabel}>VTU-affiliated colleges in Karnataka</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S9 ── */}
      <section className={styles.s9} id="cost">
        <div className={styles.s9Inner}>
          <h2 className={styles.s9Heading}>How Much Does an IoT Lab Setup Cost?</h2>
          <p className={styles.s9Body}>The cost of setting up an IoT laboratory varies significantly based on the institution's requirements — there is no single fixed package that fits every engineering college. Knowx India works with institutions to identify the right configuration for their student capacity, curriculum focus and academic objectives, rather than offering a one-size-fits-all product.</p>
          <div className={styles.s9FactorsWrap}>
            <div className={styles.s9FactorsTitle}>Factors That Influence IoT Lab Setup Cost</div>
            <ul className={styles.s9Chips} aria-label="Factors influencing IoT lab setup cost">{s9Factors.map((f) => (<li key={f} className={styles.s9Chip}>{f}</li>))}</ul>
          </div>
          <p className={styles.s9Closing}>Knowx can help institutions identify the appropriate configuration for their student capacity and academic objectives — with transparent scoping before any commitment.</p>
          <div className={styles.s9CtaRow}><button type="button" onClick={openModal} className={styles.s9CtaPrimary}>Request an IoT Lab Setup Quote</button></div>
        </div>
      </section>

      {/* ── S10 ── */}
      <section className={styles.s10} id="process">
        <div className={styles.s10Inner}>
          <h2 className={styles.s10Heading}>IoT Lab Design, Installation &amp; Deployment</h2>
          <p className={styles.s10Intro}>A structured six-step process that takes your IoT laboratory from initial requirement analysis through to fully operational, faculty-trained, student-ready deployment.</p>
          <ol className={styles.s10Steps} aria-label="IoT lab implementation process">
            {s10Steps.map((step, i, arr) => (
              <li key={step.n} className={styles.s10Step}>
                <div className={styles.s10StepCard}>
                  <div className={styles.s10StepNum}>{step.n}</div>
                  <h3 className={styles.s10StepTitle}>{step.title}</h3>
                  <p className={styles.s10StepBody}>{step.body}</p>
                </div>
                {i < arr.length - 1 && (<span className={styles.s10StepArrow} aria-hidden="true">→</span>)}
              </li>
            ))}
          </ol>
          <div className={styles.s10CtaRow}><button type="button" onClick={openModal} className={styles.s10CtaPrimary}>Plan Your IoT Laboratory With Knowx</button></div>
        </div>
      </section>

      {/* ── S11 ── */}
      <section className={styles.s11} id="why-knowx">
        <div className={styles.s11Inner}>
          <span className={styles.s11Tag}>Why Knowx India</span>
          <h2 className={styles.s11Heading}>Why Choose Knowx India for IoT Lab Setup?</h2>
          <p className={styles.s11Intro}>A dedicated partner for engineering colleges building practical, industry-relevant IoT laboratories — from first conversation through years of operational support.</p>
          <div className={styles.s11Grid}>
            {s11Why.map((w) => (
              <div key={w.title} className={styles.s11Card}>
                <div className={styles.s11CardIcon} aria-hidden="true">{w.icon}</div>
                <h3 className={styles.s11CardTitle}>{w.title}</h3>
                <p className={styles.s11CardBody}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S12 ── */}
      <section className={styles.s12} id="institution-types">
        <div className={styles.s12Inner}>
          <h2 className={styles.s12Heading}>IoT Lab Solutions for Different Institution Needs</h2>
          <p className={styles.s12Intro}>Every engineering college has a different mix of departments, student levels and academic priorities. Knowx India configures IoT lab solutions to match your institution's specific stage and focus area.</p>
          <div className={styles.s12Grid}>
            {s12Institutions.map((inst) => (
              <div key={inst.title} className={`${styles.s12Card} ${styles[`s12Tint_${inst.tint}`]}`}>
                <div className={styles.s12CardIcon} aria-hidden="true">{inst.icon}</div>
                <h3 className={styles.s12CardTitle}>{inst.title}</h3>
                <p className={styles.s12CardBody}>{inst.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13 — FAQ
          10 questions + FAQPage JSON-LD schema
          ============================================================ */}
      <section className={styles.s13} id="faq">
        <div className={styles.s13Inner}>
          <h2 className={styles.s13Heading}>IoT Lab Setup — Frequently Asked Questions</h2>
          <p className={styles.s13Intro}>
            Answers to common questions from principals, HoDs and lab in-charges evaluating an
            IoT lab implementation partner for their engineering college.
          </p>

          <div className={styles.s13List}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.s13Item}>
                <summary className={styles.s13Q}>
                  <span>{f.q}</span>
                  <span className={styles.s13QChevron} aria-hidden="true">+</span>
                </summary>
                <div className={styles.s13A}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* ============================================================
          SECTION 14 — FINAL CTA BANNER
          Dark green gradient + flagship cross-link
          ============================================================ */}
      <section className={styles.s14} id="cta">
        <div className={styles.s14Inner}>
          <h2 className={styles.s14Heading}>Build Your Engineering College&apos;s IoT Laboratory With Knowx</h2>
          <p className={styles.s14Body}>
            Whether you are planning a new IoT laboratory or upgrading an existing lab, Knowx
            India can help you design, equip, install and operationalise a practical,
            industry-oriented IoT lab — with faculty training and ongoing support built in.
          </p>
          <div className={styles.s14CtaRow}>
            <button type="button" onClick={openModal} className={styles.s14CtaPrimary}>
              Request an IoT Lab Proposal
            </button>
            <button type="button" onClick={openModal} className={styles.s14CtaSecondary}>
              Speak With Our IoT Lab Team →
            </button>
          </div>
          <p className={styles.s14Link}>
            Part of the complete{" "}
            <Link href="/engineering-innovation-labs" className={styles.s14LinkAnchor}>
              Engineering Innovation Ecosystem →
            </Link>
          </p>
        </div>
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
