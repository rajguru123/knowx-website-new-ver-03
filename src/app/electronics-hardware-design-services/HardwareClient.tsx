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

      {/* ═══ 4. SERVICES ═══ */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Our Electronics Hardware Design Services</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>End-to-end hardware design capabilities to transform your concept into a production-ready product.</p>
          </div>
          <div className="serv-grid">
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(16,185,129,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5"/></svg>
              </div>
              <h3 className="serv-ttl fd">PCB Design & Layout</h3>
              <p className="serv-txt">Multi-layer PCB design with high-speed signal routing, impedance control, and thermal management for reliable performance.</p>
            </div>
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(0,102,255,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,102,255,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="serv-ttl fd">Schematic Design & Circuit Simulation</h3>
              <p className="serv-txt">Complete circuit design with SPICE simulation, component selection, and design optimization for power efficiency and cost.</p>
            </div>
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(99,102,241,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/></svg>
              </div>
              <h3 className="serv-ttl fd">Embedded Hardware Design</h3>
              <p className="serv-txt">ARM, FPGA, and microcontroller-based designs with firmware integration, peripheral interfaces, and power optimization.</p>
            </div>
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(245,158,11,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="serv-ttl fd">Hardware Prototyping & Testing</h3>
              <p className="serv-txt">Rapid prototyping, functional testing, environmental validation, and performance optimization before mass production.</p>
            </div>
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(239,68,68,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="serv-ttl fd">Component Selection & BOM Optimization</h3>
              <p className="serv-txt">Strategic component sourcing, vendor management, cost optimization, and supply chain risk mitigation.</p>
            </div>
            <div className="serv-card">
              <div className="serv-ic" style={{ background: 'rgba(0,180,216,.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,180,216,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="serv-ttl fd">Product Certification Support</h3>
              <p className="serv-txt">Design for compliance, pre-certification testing, and documentation support for FCC, CE, RoHS, and industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. INDUSTRIES ═══ */}
      <section className="sec rv">
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Industries We Serve</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>Delivering specialized hardware design solutions across diverse sectors.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(239,68,68,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>Medical Devices</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>Wearables, diagnostic equipment, patient monitoring systems, and medical IoT devices.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(99,102,241,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>Industrial Automation</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>PLCs, HMI systems, sensor networks, and industrial control hardware.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(16,185,129,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>Consumer Electronics</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>Smart home devices, audio products, gadgets, and connected consumer products.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0,102,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,102,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 15 17 21 7 21 12 15"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>Automotive</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>Vehicle control units, infotainment systems, ADAS modules, and automotive electronics.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(245,158,11,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>Renewable Energy</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>Solar inverters, energy management systems, power electronics, and monitoring hardware.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 16, padding: 28, transition: 'all .3s ease' }} className="ind-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0,180,216,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,180,216,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17v-4.5M7 8.5V7M12 17v-7M12 7V5M17 17v-3M17 11V9M3 3v16a2 2 0 0 0 2 2h16"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 8 }}>EV (Electric Vehicles)</h3>
              <p style={{ fontSize: 14, color: 'var(--n600)', lineHeight: 1.6 }}>Charging infrastructure, battery management systems, power electronics, and EV components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. CASE STUDIES — 4 PROJECTS ═══ */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Real-World Hardware Projects</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>See how we've helped companies across industries bring their hardware products to life.</p>
          </div>
          
          {/* Case Study 1: Fall Detection */}
          <div className="case-study-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: '#DC2626', background: 'rgba(239,68,68,.08)', padding: '5px 12px', borderRadius: 5, marginBottom: 16, letterSpacing: '.04em' }}>MEDICAL DEVICES</div>
              <h3 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--n900)', marginBottom: 16 }}>Smart Wearable for Elder Fall Detection</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>🧩 Problem</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Elderly falls often go undetected, causing delayed emergency response and serious health risks.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>⚙️ Solution</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Designed a BLE-enabled wearable with accelerometer, SOS button, and real-time fall detection algorithm.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>📊 Impact</div>
                <ul style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>95%+ detection accuracy</li>
                  <li>60% faster emergency response</li>
                  <li>7–10 days battery life</li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(217,226,236,.3)', borderRadius: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)' }}>Timeline: 4–6 months</span>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,23,42,.12)' }}>
              <img src="/images/case-studies/elder-fall-detection-wearable.png" alt="Smart Wearable Fall Detection Device" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          {/* Case Study 2: EV Charging (Reversed layout) */}
          <div className="case-study-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,23,42,.12)', order: -1 }} className="cs-img-mobile">
              <img src="/images/case-studies/ev-charging-smart-meter.png" alt="Smart Meter for EV Charging Stations" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: '#0891B2', background: 'rgba(0,180,216,.08)', padding: '5px 12px', borderRadius: 5, marginBottom: 16, letterSpacing: '.04em' }}>EV & RENEWABLE ENERGY</div>
              <h3 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--n900)', marginBottom: 16 }}>Smart Meter for EV Charging Stations</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>🧩 Problem</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Lack of accurate, connected energy metering for EV charging infrastructure.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>⚙️ Solution</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Built a smart energy meter with ARM MCU, IoT connectivity, and real-time billing integration.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>📊 Impact</div>
                <ul style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>±1% accuracy in energy measurement</li>
                  <li>30% operational cost reduction</li>
                  <li>Scalable across multiple stations</li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(217,226,236,.3)', borderRadius: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)' }}>Timeline: 5–7 months</span>
              </div>
            </div>
          </div>

          {/* Case Study 3: Smart Windows */}
          <div className="case-study-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: '#7C3AED', background: 'rgba(99,102,241,.08)', padding: '5px 12px', borderRadius: 5, marginBottom: 16, letterSpacing: '.04em' }}>INDUSTRIAL AUTOMATION</div>
              <h3 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--n900)', marginBottom: 16 }}>Smart Windows for Large Godowns</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>🧩 Problem</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Poor ventilation and high energy costs in large storage facilities.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>⚙️ Solution</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Developed sensor-based automated window control with wireless connectivity and environmental monitoring.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>📊 Impact</div>
                <ul style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>25–35% energy savings</li>
                  <li>20% reduction in product damage</li>
                  <li>Fully automated ventilation control</li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(217,226,236,.3)', borderRadius: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)' }}>Timeline: 4–6 months</span>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,23,42,.12)' }}>
              <img src="/images/case-studies/smart-window-automation-system.png" alt="Smart Window Automation System" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          {/* Case Study 4: Asset Tracking (Reversed layout) */}
          <div className="case-study-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,23,42,.12)', order: -1 }} className="cs-img-mobile">
              <img src="/images/case-studies/ble-asset-tracking-device.png" alt="BLE Asset Tracking Device" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <div className="fm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: '#059669', background: 'rgba(16,185,129,.08)', padding: '5px 12px', borderRadius: 5, marginBottom: 16, letterSpacing: '.04em' }}>INDUSTRIAL AUTOMATION</div>
              <h3 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--n900)', marginBottom: 16 }}>BLE-Based Asset Tracking for Warehouses</h3>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>🧩 Problem</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Inefficient tracking leading to misplaced assets and operational delays.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>⚙️ Solution</div>
                <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7, marginBottom: 16 }}>Created low-power BLE tracking devices with gateway and cloud integration for real-time asset visibility.</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)', marginBottom: 8 }}>📊 Impact</div>
                <ul style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>90%+ asset visibility</li>
                  <li>50% faster asset retrieval</li>
                  <li>1–2 year battery life</li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(217,226,236,.3)', borderRadius: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--n700)' }}>Timeline: 3–5 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. PROCESS TIMELINE ═══ */}
      <section className="sec rv">
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Our Hardware Development Process</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>A proven 6-step approach from concept to production-ready hardware.</p>
          </div>
          <div className="proc-timeline">
            <div className="proc-step">
              <div className="proc-num fd">01</div>
              <h3 className="proc-ttl fd">Requirement Analysis</h3>
              <p className="proc-txt">Understanding project goals, constraints, specifications, and defining success criteria.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num fd">02</div>
              <h3 className="proc-ttl fd">Schematic Design</h3>
              <p className="proc-txt">Circuit design, component selection, simulation, and design optimization for performance.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num fd">03</div>
              <h3 className="proc-ttl fd">PCB Layout</h3>
              <p className="proc-txt">Multi-layer PCB design with signal integrity, thermal management, and DFM analysis.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num fd">04</div>
              <h3 className="proc-ttl fd">Prototype Development</h3>
              <p className="proc-txt">Rapid prototyping, board assembly, and initial functional testing.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num fd">05</div>
              <h3 className="proc-ttl fd">Testing & Validation</h3>
              <p className="proc-txt">Functional testing, environmental validation, compliance testing, and performance optimization.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num fd">06</div>
              <h3 className="proc-ttl fd">Manufacturing Support</h3>
              <p className="proc-txt">DFM analysis, production documentation, vendor coordination, and quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. WHY CHOOSE KNOWX ═══ */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Why Choose Knowx for Hardware Design?</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>Over two decades of expertise delivering production-ready hardware solutions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(0,102,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(0,102,255,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>End-to-End Development</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>From concept validation to production files — one team managing your entire hardware journey.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(16,185,129,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>IoT & Connectivity Expertise</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>Deep experience in BLE, Wi-Fi, LoRa, cellular, and cloud-connected hardware designs.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(245,158,11,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>Fast Time to Market</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>Average 3–7 month delivery with rapid prototyping and streamlined development process.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(99,102,241,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>High Accuracy & Reliability</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>Proven track record of high-performance designs with rigorous testing and validation.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(239,68,68,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>Cost-Optimized Designs</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>Strategic component selection and BOM optimization reducing costs by up to 30%.</p>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #F8FAFC, #F1F5F9)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,226,236,.5)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(0,180,216,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(0,180,216,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <h3 className="fd" style={{ fontWeight: 600, fontSize: 18, color: 'var(--n900)', marginBottom: 10 }}>Industry Standards Compliance</h3>
              <p style={{ fontSize: 15, color: 'var(--n600)', lineHeight: 1.7 }}>Design for compliance with FCC, CE, RoHS, and industry-specific certification support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. TECH STACK ═══ */}
      <section className="sec rv">
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Tools & Technologies</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>Industry-standard design tools and advanced testing equipment for professional hardware development.</p>
          </div>
          <div style={{ marginBottom: 40 }}>
            <h3 className="fd" style={{ fontWeight: 600, fontSize: 16, color: 'var(--n700)', marginBottom: 20, textAlign: 'center' }}>EDA Tools & PCB Design</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              {['Altium Designer', 'KiCAD', 'Eagle', 'OrCAD'].map(tech => (
                <div key={tech} className="tech-badge" style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 600, color: 'var(--n700)', transition: 'all .3s ease' }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 40 }}>
            <h3 className="fd" style={{ fontWeight: 600, fontSize: 16, color: 'var(--n700)', marginBottom: 20, textAlign: 'center' }}>Simulation & Analysis</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              {['SPICE', 'MATLAB', 'LTspice', 'Signal Integrity Analysis'].map(tech => (
                <div key={tech} className="tech-badge" style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 600, color: 'var(--n700)', transition: 'all .3s ease' }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="fd" style={{ fontWeight: 600, fontSize: 16, color: 'var(--n700)', marginBottom: 20, textAlign: 'center' }}>Testing & Validation</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              {['Oscilloscopes', 'Logic Analyzers', 'Spectrum Analyzers', 'Environmental Testing'].map(tech => (
                <div key={tech} className="tech-badge" style={{ background: '#fff', border: '1px solid rgba(217,226,236,.6)', borderRadius: 10, padding: '12px 24px', fontSize: 14, fontWeight: 600, color: 'var(--n700)', transition: 'all .3s ease' }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="sec-in">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <h2 className="fd" style={{ fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--n900)', marginBottom: 16 }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: 17, color: 'var(--n600)', lineHeight: 1.7 }}>Everything you need to know about our electronics hardware design services.</p>
          </div>
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
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

      {/* ═══ RESPONSIVE CSS ═══ */}
      <style jsx>{`
        .hw-hero-flex { flex-direction: row; }
        .hw-hero-visual { display: block; }
        .prob-grid-wrap { grid-template-columns: 1fr 1fr !important; }
        .serv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .serv-card { background: #fff; border: 1px solid rgba(217,226,236,.5); border-radius: 16px; padding: 28px; transition: all .3s ease; }
        .serv-card:hover { border-color: var(--em); box-shadow: 0 12px 28px rgba(15,23,42,.1); transform: translateY(-2px); }
        .serv-ic { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .serv-ttl { font-weight: 600; font-size: 18px; color: var(--n900); margin-bottom: 12px; }
        .serv-txt { font-size: 15px; color: var(--n600); line-height: 1.7; }
        .ind-card:hover { box-shadow: 0 12px 28px rgba(15,23,42,.08); transform: translateY(-2px); }
        .case-study-row { grid-template-columns: 1fr 1fr !important; }
        .cs-img-mobile { order: 0; }
        .proc-timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .proc-step { background: #fff; border: 1px solid rgba(217,226,236,.5); border-radius: 16px; padding: 32px; transition: all .3s ease; }
        .proc-step:hover { border-color: var(--em); box-shadow: 0 8px 20px rgba(15,23,42,.08); }
        .proc-num { font-size: 32px; font-weight: 700; color: var(--em); margin-bottom: 16px; }
        .proc-ttl { font-weight: 600; font-size: 18px; color: var(--n900); margin-bottom: 10px; }
        .proc-txt { font-size: 14px; color: var(--n600); line-height: 1.7; }
        .tech-badge:hover { border-color: var(--em); box-shadow: 0 4px 12px rgba(15,23,42,.08); transform: translateY(-1px); }
        .faq-q:hover span { color: var(--em); }

        @media (max-width: 1024px) {
          .serv-grid { grid-template-columns: repeat(2, 1fr); }
          .proc-timeline { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hw-hero-flex { flex-direction: column !important; gap: 40px !important; }
          .hw-hero-visual { flex: 1 1 auto !important; max-width: 100% !important; }
          .prob-grid-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
          .serv-grid { grid-template-columns: 1fr; }
          .case-study-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cs-img-mobile { order: -1 !important; }
          .proc-timeline { grid-template-columns: 1fr; gap: 24px; }
        }

        @media (max-width: 640px) {
          .sst-in { flex-direction: column; gap: 24px; }
          .hero-ctas { flex-direction: column; }
          .hero-ctas .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
