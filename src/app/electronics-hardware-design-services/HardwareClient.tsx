'use client';
import { useState } from 'react';

export default function HardwareClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);
  const openPopup = () => window.dispatchEvent(new CustomEvent('openPopup'));

  return (
    <>
      {/* ═══ 1. HERO — ELECTRONICS HARDWARE DESIGN ═══ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: 72, background: 'linear-gradient(145deg, var(--n950) 0%, #0B2545 50%, #0E3460 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 25% 50%, rgba(0,102,255,.15), transparent 70%), radial-gradient(ellipse 30% 40% at 75% 30%, rgba(0,180,216,.1), transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ position: 'absolute', top: '15%', right: '20%', width: 300, height: 300, background: 'rgba(0,102,255,.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: 250, height: 250, background: 'rgba(0,180,216,.06)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', alignItems: 'center', gap: 60 }} className="hw-hero-flex">
          <div style={{ maxWidth: 620, flex: 1 }}>
            <div className="sl lt fm" style={{ marginBottom: 24 }}>Electronics Hardware Design</div>
            <h1 className="fd" style={{ fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, color: '#fff', marginBottom: 16, letterSpacing: '-.02em' }}>
              Electronics Hardware Design<br /><span style={{ color: 'var(--tll)' }}>Services in Bangalore</span>
            </h1>
            <p className="fm" style={{ fontSize: 14, color: 'var(--tll)', marginBottom: 20, letterSpacing: '.02em' }}>
              From schematic to production — expert hardware design services.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--n300)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
              We provide end-to-end electronics hardware design services — from PCB layout and circuit design to prototyping and manufacturing support — helping you build reliable, scalable, and cost-efficient hardware products.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 32 }}>
              <button className="btn bp lg" onClick={openPopup}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="btn bw" onClick={openPopup}>Get Free Consultation</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['20+ Years Experience', 'End-to-End Design', 'Production-Ready'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--n300)', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--em)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hw-hero-visual" style={{ flex: '0 0 380px' }}>
            <svg viewBox="0 0 380 340" fill="none" width="380" height="340" style={{ maxWidth: '100%', height: 'auto' }}>
              {/* PCB Center */}
              <rect x="140" y="120" width="100" height="100" rx="8" fill="rgba(16,185,129,.12)" stroke="rgba(16,185,129,.4)" strokeWidth="2" />
              <text x="190" y="160" textAnchor="middle" fill="rgba(16,185,129,.7)" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600">PCB</text>
              <text x="190" y="175" textAnchor="middle" fill="rgba(16,185,129,.6)" fontFamily="JetBrains Mono, monospace" fontSize="8">DESIGN</text>
              
              {/* Circuit paths */}
              <circle cx="190" cy="170" r="90" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="190" cy="170" r="130" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Schematic */}
              <circle cx="80" cy="90" r="20" fill="rgba(0,102,255,.15)" stroke="rgba(0,102,255,.4)" strokeWidth="1.5" />
              <text x="80" y="88" textAnchor="middle" fill="rgba(0,102,255,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">SCHEMA</text>
              <text x="80" y="97" textAnchor="middle" fill="rgba(0,102,255,.6)" fontFamily="JetBrains Mono, monospace" fontSize="6">TIC</text>
              
              {/* Components */}
              <circle cx="300" cy="90" r="20" fill="rgba(99,102,241,.15)" stroke="rgba(99,102,241,.4)" strokeWidth="1.5" />
              <text x="300" y="92" textAnchor="middle" fill="rgba(99,102,241,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">PARTS</text>
              
              {/* Testing */}
              <circle cx="70" cy="250" r="20" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.4)" strokeWidth="1.5" />
              <text x="70" y="252" textAnchor="middle" fill="rgba(245,158,11,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">TEST</text>
              
              {/* Manufacturing */}
              <circle cx="310" cy="250" r="20" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.4)" strokeWidth="1.5" />
              <text x="310" y="252" textAnchor="middle" fill="rgba(239,68,68,.7)" fontFamily="JetBrains Mono, monospace" fontSize="7">MFG</text>
              
              {/* Connection lines */}
              <line x1="98" y1="100" x2="150" y2="135" stroke="rgba(0,102,255,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="282" y1="100" x2="230" y2="135" stroke="rgba(99,102,241,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="88" y1="240" x2="155" y2="205" stroke="rgba(245,158,11,.2)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="292" y1="240" x2="225" y2="205" stroke="rgba(239,68,68,.2)" strokeWidth="1" strokeDasharray="3 3" />
              
              <text x="190" y="315" textAnchor="middle" fill="rgba(255,255,255,.25)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing=".12em">SCHEMATIC · PCB · PROTOTYPE · TEST</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP + WHO IS THIS FOR ═══ */}
      <div className="sst">
        <div className="sst-in">
          <div><div className="ssv fd">20<span className="a">+</span></div><div className="ssl">Years Experience</div></div>
          <div><div className="ssv fd">150<span className="a">+</span></div><div className="ssl">Projects Delivered</div></div>
          <div><div className="ssv fd">6</div><div className="ssl">Industries Served</div></div>
          <div><div className="ssv fd">100<span className="a">%</span></div><div className="ssl">Design-to-Manufacturing</div></div>
        </div>
      </div>
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(217,226,236,.5)', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', fontSize: 16, fontWeight: 600, color: 'var(--n700)' }} className="fd">
          Helping startups, OEMs, and enterprises design scalable electronic hardware products.
        </p>
      </div>

      {/* ═══ 3. PROBLEM → SOLUTION ═══ */}
      <section className="sec rv">
        <div className="sec-in prob-grid-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: '#D97706', background: 'rgba(245,158,11,.08)', padding: '6px 14px', borderRadius: 6, marginBottom: 20, letterSpacing: '.04em' }}>The challenge</div>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--n900)', lineHeight: 1.2, marginBottom: 16 }}>Struggling to bring your hardware idea to life?</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Many companies face the same roadblocks: delays in PCB design iterations, component sourcing challenges, prototyping costs spiraling out of control, and difficulty finding a single partner who can handle everything from schematic to production.</p>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>You need an experienced hardware design team that owns the entire development cycle — from concept validation to manufacturing-ready files.</p>
          </div>
          <div style={{ background: 'linear-gradient(145deg, var(--n950), #0E2A4A)', borderRadius: 20, padding: 40, color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <h3 className="fd" style={{ fontWeight: 700, fontSize: 20, marginBottom: 12, position: 'relative', color: '#fff' }}>That's exactly what we do</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, position: 'relative' }}>We provide complete electronics hardware design services — one team, one streamlined process, from initial schematic to production-ready PCB files and manufacturing support.</p>
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICES — IOT STYLE WITH GRADIENT CARDS ═══ */}
      <section className="sec bg-s" id="hardware-services">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our hardware design services</div>
            <h2 className="fd">End-to-end electronics hardware design — from circuit to production</h2>
            <p>Every layer of hardware development, engineered by a single integrated team.</p>
          </div>
          <div className="g3">
            {[
              { cls: 'pcb', title: 'PCB Design & Layout', desc: 'Multi-layer PCB design with high-speed signal routing, impedance control, and thermal management for reliable performance.', tags: ['Altium', 'Multi-layer', 'DFM'], icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5"/></> },
              { cls: 'sch', title: 'Schematic Design & Circuit Simulation', desc: 'Complete circuit design with SPICE simulation, component selection, and design optimization for power efficiency and cost.', tags: ['SPICE', 'MATLAB', 'Component Selection'], icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></> },
              { cls: 'emb', title: 'Embedded Hardware Design', desc: 'ARM, FPGA, and microcontroller-based designs with firmware integration, peripheral interfaces, and power optimization.', tags: ['ARM', 'STM32', 'FPGA'], icon: <><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/></> },
              { cls: 'prt', title: 'Hardware Prototyping & Testing', desc: 'Rapid prototyping, functional testing, environmental validation, and performance optimization before mass production.', tags: ['Rapid Proto', 'Testing', 'Validation'], icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
              { cls: 'bom', title: 'Component Selection & BOM Optimization', desc: 'Strategic component sourcing, vendor management, cost optimization, and supply chain risk mitigation.', tags: ['BOM', 'Cost Optimization', 'Sourcing'], icon: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></> },
              { cls: 'cert', title: 'Product Certification Support', desc: 'Design for compliance, pre-certification testing, and documentation support for FCC, CE, RoHS, and industry standards.', tags: ['FCC', 'CE', 'RoHS'], icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
            ].map((s, i) => (
              <div className={`sv ${s.cls} rv ${i > 0 ? 'rv-d' + i : ''}`} key={s.title}>
                <div className="svi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{s.icon}</svg></div>
                <h3 className="fd">{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tg fm">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          {/* MID-PAGE CTA */}
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Need hardware design services for your product?</p>
            <button className="btn bp" onClick={openPopup}>
              Talk to Our Engineers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 5. INDUSTRIES — IOT STYLE WITH GRADIENTS ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Industries we design hardware for</div>
            <h2 className="fd">Electronics hardware solutions engineered for demanding sectors</h2>
          </div>
          <div className="g5">
            {[
              { title: 'Medical Devices', desc: 'Wearables, diagnostic equipment, patient monitoring', bg: 'linear-gradient(135deg,#991B1B,#DC2626)' },
              { title: 'Industrial Automation', desc: 'PLCs, HMI systems, sensor networks', bg: 'linear-gradient(135deg,#1E3A8A,#3B82F6)' },
              { title: 'Consumer Electronics', desc: 'Smart home devices, audio products', bg: 'linear-gradient(135deg,#065F46,#10B981)' },
              { title: 'Automotive', desc: 'Vehicle control units, infotainment systems', bg: 'linear-gradient(135deg,var(--ac),var(--acd))' },
              { title: 'Renewable Energy', desc: 'Solar inverters, energy management systems', bg: 'linear-gradient(135deg,#B45309,#F59E0B)' },
              { title: 'EV (Electric Vehicles)', desc: 'Charging infrastructure, battery management', bg: 'linear-gradient(135deg,#0E7490,#06B6D4)' },
            ].map((ind, i) => (
              <a href="#" className={`ind rv ${i > 0 ? 'rv-d' + i : ''}`} style={{ background: ind.bg }} key={ind.title}>
                <h3 className="fd">{ind.title}</h3>
                <p>{ind.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. CASE STUDIES — IOT STYLE 4-CARD GRID ═══ */}
      <section className="sec bg-s" id="hardware-case-studies">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Hardware projects we have delivered</div>
            <h2 className="fd">Real hardware products. Measurable results.</h2>
            <p>These are not concepts — every project was designed, developed, and deployed by our team.</p>
          </div>
          <div className="g4">
            {[
              { badge: 'Medical Devices', badgeCls: 'rd', title: 'Smart Wearable for Elder Fall Detection', problem: 'Elderly falls often go undetected, causing delayed emergency response and serious health risks.', solution: 'Designed a BLE-enabled wearable with accelerometer, SOS button, and real-time fall detection algorithm.', result: '95%+ detection accuracy', timeline: 'Delivered in 4–6 months', tags: ['BLE', 'Accelerometer', 'IoT'], img: '/images/medical-wearable-fall-detection-hardware.png', alt: 'Medical wearable fall detection hardware device by Knowx Innovations' },
              { badge: 'EV & Renewable', badgeCls: 'tl', title: 'Smart Meter for EV Charging Stations', problem: 'Lack of accurate, connected energy metering for EV charging infrastructure.', solution: 'Built a smart energy meter with ARM MCU, IoT connectivity, and real-time billing integration.', result: '±1% accuracy, 30% cost reduction', timeline: 'Delivered in 5–7 months', tags: ['ARM MCU', 'IoT', 'Power Electronics'], img: '/images/ev-charging-smart-meter-pcb-design.png', alt: 'EV charging smart meter PCB design and hardware by Knowx Innovations' },
              { badge: 'Industrial Automation', badgeCls: 'gn', title: 'Smart Windows for Large Godowns', problem: 'Poor ventilation and high energy costs in large storage facilities.', solution: 'Developed sensor-based automated window control with wireless connectivity and environmental monitoring.', result: '25–35% energy savings', timeline: 'Delivered in 4–6 months', tags: ['Sensors', 'Wireless', 'Automation'], img: '/images/industrial-automation-smart-window-hardware.png', alt: 'Industrial automation smart window control hardware by Knowx Innovations' },
              { badge: 'Industrial Automation', badgeCls: 'bl', title: 'BLE-Based Asset Tracking for Warehouses', problem: 'Inefficient tracking leading to misplaced assets and operational delays.', solution: 'Created low-power BLE tracking devices with gateway and cloud integration for real-time asset visibility.', result: '90%+ asset visibility', timeline: 'Delivered in 3–5 months', tags: ['BLE', 'Low Power', 'Cloud'], img: '/images/ble-asset-tracking-warehouse-hardware.png', alt: 'BLE asset tracking warehouse hardware device by Knowx Innovations' },
            ].map((cs, i) => (
              <div className={`cs rv ${i > 0 ? 'rv-d' + i : ''}`} key={cs.title}>
                <div className="cs-img" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={cs.img} alt={cs.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                </div>
                <div className="cs-body">
                  <span className={'cs-bg ' + cs.badgeCls + ' fm'}>{cs.badge}</span>
                  <h3 className="fd" style={{ marginBottom: 16 }}>{cs.title}</h3>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Problem</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.problem}</p></div>
                  <div style={{ marginBottom: 10 }}><div className="fm" style={{ fontSize: 10, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>Solution</div><p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>{cs.solution}</p></div>
                  <div className="cs-rs"><div className="cs-rl fm">Result</div><div className="cs-rv fd">{cs.result}</div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <span className="fm" style={{ fontSize: 12, fontWeight: 600, color: 'var(--ac)' }}>{cs.timeline}</span>
                  </div>
                  <div className="mt fm">{cs.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          {/* MID-PAGE CTA */}
          <div className="rv" style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontSize: 17, color: 'var(--n700)', fontWeight: 500, marginBottom: 16 }} className="fd">Have a similar hardware requirement? Let&apos;s build it.</p>
            <button className="btn bp" onClick={openPopup}>
              Start Your Hardware Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 7. PROCESS TIMELINE — HORIZONTAL 6-STEP ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Our hardware development process</div>
            <h2 className="fd">From requirement to production — a transparent 6-step process</h2>
          </div>
          <div className="pg" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
            {[
              { n: '1', title: 'Requirement Analysis', desc: 'We study your use case, define technical specs, and identify the right architecture.', color: '#F59E0B' },
              { n: '2', title: 'Schematic Design', desc: 'Circuit design, component selection, simulation, and optimization for performance.', color: '#0066FF' },
              { n: '3', title: 'PCB Layout', desc: 'Multi-layer PCB design with signal integrity, thermal management, and DFM analysis.', color: '#10B981' },
              { n: '4', title: 'Prototype Development', desc: 'Rapid prototyping, board assembly, and initial functional testing.', color: '#0891B2' },
              { n: '5', title: 'Testing & Validation', desc: 'Functional, environmental, compliance testing, and performance optimization.', color: '#7C3AED' },
              { n: '6', title: 'Manufacturing Support', desc: 'DFM analysis, production documentation, vendor coordination, and quality assurance.', color: '#EF4444' },
            ].map((step) => (
              <div className="pc rv" key={step.n} style={{ textAlign: 'center', padding: 24 }}>
                <div className="fd fm" style={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#fff', background: step.color, margin: '0 auto 16px' }}>{step.n}</div>
                <h3 className="fd" style={{ fontWeight: 700, fontSize: 15, color: 'var(--n900)', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--n600)', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. WHY CHOOSE KNOWX ═══ */}
      <section className="sec bg-s">
        <div className="sec-in">
          <div className="sh rv">
            <div className="sl fm" style={{ marginBottom: 16 }}>Why choose Knowx</div>
            <h2 className="fd">20+ years of electronics hardware design expertise</h2>
          </div>
          <div className="g3">
            {[
              { title: 'End-to-End Development', desc: 'From concept validation to production files — one team managing your entire hardware journey.', icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></> },
              { title: 'IoT & Connectivity Expertise', desc: 'Deep experience in BLE, Wi-Fi, LoRa, cellular, and cloud-connected hardware designs.', icon: <><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></> },
              { title: 'Fast Time to Market', desc: 'Average 3–7 month delivery with rapid prototyping and streamlined development process.', icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { title: 'High Accuracy & Reliability', desc: 'Proven track record of high-performance designs with rigorous testing and validation.', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
              { title: 'Cost-Optimized Designs', desc: 'Strategic component selection and BOM optimization reducing costs by up to 30%.', icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
              { title: 'Industry Standards Compliance', desc: 'Design for compliance with FCC, CE, RoHS, and industry-specific certification support.', icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></> },
            ].map((item, i) => (
              <div className={`wc rv ${i > 0 ? 'rv-d' + i : ''}`} key={item.title}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--em-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--em)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <h3 className="fd" style={{ fontWeight: 700, fontSize: 17, color: 'var(--n900)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. TECH STACK — DARK SECTION WITH COLORED PILLS ═══ */}
      <section style={{ padding: '64px 0', background: 'var(--n950)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="sec-in" style={{ position: 'relative' }}>
          <div className="sh rv" style={{ marginBottom: 16 }}>
            <div className="sl lt fm" style={{ marginBottom: 16 }}>Technology stack</div>
            <h2 className="fd" style={{ color: '#fff' }}>Built with industry-standard hardware design tools</h2>
          </div>
          <p className="rv" style={{ fontSize: 15, color: 'var(--n300)', lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
            We use proven EDA platforms, simulation tools, and testing equipment to build production-ready hardware.
          </p>
          {[
            { label: 'EDA Tools & PCB Design', pills: ['Altium Designer', 'KiCAD', 'Eagle', 'OrCAD', 'Gerber Files'], color: 'orange' },
            { label: 'Simulation & Analysis', pills: ['SPICE', 'MATLAB', 'LTspice', 'Signal Integrity', 'Thermal Analysis'], color: 'blue' },
            { label: 'Testing & Validation', pills: ['Oscilloscopes', 'Logic Analyzers', 'Spectrum Analyzers', 'Environmental Testing'], color: 'green' },
          ].map((group, i) => (
            <div className={'rv' + (i > 0 ? ' rv-d' + i : '')} key={group.label} style={{ marginBottom: 24 }}>
              <div className="fm" style={{ fontSize: 11, fontWeight: 600, color: 'var(--n400)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 12 }}>{group.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.pills.map((pill) => (
                  <span key={pill} className="fm tech-pill" style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, borderRadius: 8, color: 'rgba(255,255,255,.85)', border: '1px solid rgba(255,255,255,.12)', transition: 'all .2s', background: group.color === 'orange' ? 'rgba(245,158,11,.12)' : group.color === 'blue' ? 'rgba(0,102,255,.12)' : 'rgba(16,185,129,.12)', borderColor: group.color === 'orange' ? 'rgba(245,158,11,.25)' : group.color === 'blue' ? 'rgba(0,102,255,.25)' : 'rgba(16,185,129,.25)' }}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sh c rv">
            <div className="sl fm" style={{ marginBottom: 16, justifyContent: 'center' }}>Frequently asked questions</div>
            <h2 className="fd">Common questions about electronics hardware design</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              {
                q: 'What are electronics hardware design services?',
                a: 'Electronics hardware design services encompass end-to-end development of electronic products, including schematic design, PCB layout, circuit simulation, component selection, prototyping, testing, and manufacturing support. We help transform your concept into a production-ready hardware product.'
              },
              {
                q: 'What industries do you serve for hardware design?',
                a: 'We serve Medical Devices, Industrial Automation, Consumer Electronics, Automotive, Renewable Energy, and EV sectors. Our expertise spans wearables, IoT devices, charging infrastructure, automation systems, and custom electronic products.'
              },
              {
                q: 'How long does hardware product development take?',
                a: 'Typical hardware development projects range from 3-7 months depending on complexity. Simple IoT devices take 3-5 months, while complex systems with certifications may require 6-8 months from concept to production.'
              },
              {
                q: 'What tools and technologies do you use for hardware design?',
                a: 'We use industry-standard EDA tools including Altium Designer, KiCAD, Eagle, and OrCAD for PCB design. For simulation, we leverage SPICE, MATLAB, and LTspice. Our testing capabilities include oscilloscopes, logic analyzers, and spectrum analyzers.'
              },
              {
                q: 'Do you provide PCB design and prototyping services?',
                a: 'Yes, we offer complete PCB design services including schematic capture, multi-layer PCB layout, signal integrity analysis, and rapid prototyping. We handle everything from single-layer boards to complex multi-layer designs with high-speed interfaces.'
              },
              {
                q: 'What is the cost of electronics hardware design services?',
                a: 'Hardware design costs vary based on project complexity, number of PCB layers, component selection, and certification requirements. Contact us for a detailed quote based on your specific requirements. We offer cost-optimized designs that reduce manufacturing expenses by up to 30%.'
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid rgba(217,226,236,.5)' }}>
                <button onClick={() => toggleFaq(i)} className="faq-q" style={{ width: '100%', textAlign: 'left', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="fd" style={{ fontWeight: 600, fontSize: 17, color: 'var(--n900)', paddingRight: 20 }}>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, transition: 'transform .3s ease', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? 500 : 0, overflow: 'hidden', transition: 'max-height .4s ease' }}>
                  <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, paddingBottom: 24 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. FINAL CTA ═══ */}
      <section style={{ background: 'linear-gradient(145deg, var(--n950) 0%, #0B2545 100%)', position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', top: '10%', right: '15%', width: 280, height: 280, background: 'rgba(0,102,255,.06)', borderRadius: '50%', filter: 'blur(70px)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>Ready to Build Your Hardware Product?</h2>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--n300)', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7 }}>Talk to our hardware design experts and get a customized solution for your electronic product.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <button className="btn bp lg" onClick={openPopup}>
              Schedule Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn bw" onClick={openPopup}>Get Project Quote</button>
          </div>
        </div>
      </section>

      {/* ═══ RESPONSIVE CSS + CUSTOM HARDWARE COLORS ═══ */}
      <style jsx>{`
        .hw-hero-flex { flex-direction: row; }
        .hw-hero-visual { display: block; }
        .prob-grid-wrap { grid-template-columns: 1fr 1fr !important; }

        /* SERVICE CARDS - CUSTOM HARDWARE COLORS */
        .sv { background: #fff; border-radius: 16px; padding: 28px; transition: all .3s ease; position: relative; overflow: hidden; }
        .sv::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; }
        .sv.pcb::before { background: linear-gradient(90deg, #F59E0B, #D97706); }
        .sv.sch::before { background: linear-gradient(90deg, #0066FF, #0052CC); }
        .sv.emb::before { background: linear-gradient(90deg, #3B82F6, #2563EB); }
        .sv.prt::before { background: linear-gradient(90deg, #10B981, #059669); }
        .sv.bom::before { background: linear-gradient(90deg, #7C3AED, #6D28D9); }
        .sv.cert::before { background: linear-gradient(90deg, #EF4444, #DC2626); }
        .sv:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,23,42,.12); }
        .svi { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .sv.pcb .svi { background: rgba(245,158,11,.1); }
        .sv.pcb .svi svg { stroke: #D97706; }
        .sv.sch .svi { background: rgba(0,102,255,.1); }
        .sv.sch .svi svg { stroke: #0066FF; }
        .sv.emb .svi { background: rgba(59,130,246,.1); }
        .sv.emb .svi svg { stroke: #2563EB; }
        .sv.prt .svi { background: rgba(16,185,129,.1); }
        .sv.prt .svi svg { stroke: #059669; }
        .sv.bom .svi { background: rgba(124,58,237,.1); }
        .sv.bom .svi svg { stroke: #6D28D9; }
        .sv.cert .svi { background: rgba(239,68,68,.1); }
        .sv.cert .svi svg { stroke: #DC2626; }
        .sv h3 { font-weight: 700; font-size: 18px; color: var(--n900); margin-bottom: 12px; }
        .sv p { font-size: 15px; color: var(--n600); line-height: 1.7; margin-bottom: 16px; }
        .tg { display: flex; flex-wrap: wrap; gap: 6px; }
        .tg span { padding: 4px 12px; font-size: 11px; font-weight: 600; color: var(--n600); background: rgba(217,226,236,.4); border-radius: 6px; }

        /* INDUSTRY CARDS */
        .ind { display: block; padding: 32px; border-radius: 16px; color: #fff; text-decoration: none; transition: all .3s ease; }
        .ind:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,.2); }
        .ind h3 { font-weight: 700; font-size: 18px; margin-bottom: 8px; }
        .ind p { font-size: 14px; opacity: 0.9; line-height: 1.6; }

        /* CASE STUDY CARDS */
        .cs { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(15,23,42,.08); transition: all .3s ease; }
        .cs:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,23,42,.14); }
        .cs-img { height: 220px; background: var(--n100); }
        .cs-img img { width: 100%; height: 100%; object-fit: cover; }
        .cs-body { padding: 24px; }
        .cs-bg { display: inline-block; padding: 4px 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; border-radius: 6px; margin-bottom: 12px; }
        .cs-bg.rd { background: rgba(239,68,68,.1); color: #DC2626; }
        .cs-bg.tl { background: rgba(6,182,212,.1); color: #0891B2; }
        .cs-bg.gn { background: rgba(16,185,129,.1); color: #059669; }
        .cs-bg.bl { background: rgba(59,130,246,.1); color: #2563EB; }
        .cs h3 { font-size: 18px; font-weight: 700; color: var(--n900); }
        .cs-rs { background: rgba(217,226,236,.3); border-radius: 10px; padding: 12px 16px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; }
        .cs-rl { font-size: 11px; font-weight: 600; color: var(--n500); text-transform: uppercase; letter-spacing: .06em; }
        .cs-rv { font-size: 15px; font-weight: 700; color: var(--em); }
        .mt { display: flex; flex-wrap: wrap; gap: 6px; }
        .mt span { padding: 4px 10px; font-size: 11px; font-weight: 600; color: var(--n600); background: rgba(217,226,236,.4); border-radius: 5px; }

        /* WHY CHOOSE CARDS */
        .wc { background: #fff; border: 1px solid rgba(217,226,236,.5); border-radius: 16px; padding: 28px; transition: all .3s ease; }
        .wc:hover { border-color: var(--em); box-shadow: 0 8px 24px rgba(15,23,42,.08); transform: translateY(-2px); }

        /* PROCESS CARDS */
        .pc { background: #fff; border: 1px solid rgba(217,226,236,.5); border-radius: 16px; transition: all .3s ease; }
        .pc:hover { border-color: var(--em); box-shadow: 0 8px 20px rgba(15,23,42,.08); }

        /* TECH PILLS HOVER */
        .tech-pill:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.15); }

        /* GRID LAYOUTS */
        .g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .g4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .g5 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pg { display: grid; gap: 24px; }

        @media (max-width: 1024px) {
          .g3 { grid-template-columns: repeat(2, 1fr); }
          .g5 { grid-template-columns: repeat(2, 1fr); }
          .pg { grid-template-columns: repeat(3, 1fr) !important; }
        }

        @media (max-width: 768px) {
          .hw-hero-flex { flex-direction: column !important; gap: 40px !important; }
          .hw-hero-visual { flex: 1 1 auto !important; max-width: 100% !important; }
          .prob-grid-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
          .g3 { grid-template-columns: 1fr; }
          .g4 { grid-template-columns: 1fr; }
          .g5 { grid-template-columns: 1fr; }
          .pg { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 640px) {
          .sst-in { flex-direction: column; gap: 24px; }
          .hero-ctas { flex-direction: column; }
          .hero-ctas .btn { width: 100%; justify-content: center; }
          .pg { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
