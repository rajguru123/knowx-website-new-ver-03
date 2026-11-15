'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './internship.css';
import ApplyForm from './ApplyForm';
import {
  Certification, CertSample, Credibility, Curriculum, Deliverables, Faq, FinalCta, FollowStrip, Highlights, Info,
  Projects, Tech, TrustBar, Why,
} from './Sections';
import { CERTS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SOCIALS, WA_DEFAULT_URL } from './data';
import { PhoneIcon, SOCIAL_ICONS, WhatsAppIcon } from './Icons';
import { useOverlay, useReveal } from './hooks';
import { captureUtm, trackEvent } from './tracking';

const MENU_ID = 'aei-menu';

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Knowx Innovations home">
      <Image className="logo-mark" src="/images/knowx-logo.png" width={40} height={40} alt="Knowx Innovations logo" priority={priority} />
      <span className="logo-text">
        <span className="logo-name">Knowx Innovations</span>
        <span className="logo-tag">AI | Electronics | Embedded</span>
      </span>
    </a>
  );
}

export default function InternshipClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [certIndex, setCertIndex] = useState<number | null>(null);

  const openModal = useCallback(() => {
    setMenuOpen(false);
    setModalOpen(true);
    trackEvent('open_enquiry_modal');
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const closeCert = useCallback(() => setCertIndex(null), []);

  useOverlay(modalOpen, closeModal, modalRef);
  useOverlay(certIndex !== null, closeCert, lightboxRef);
  useReveal(rootRef);

  // Capture utm_* once per visit (stored in sessionStorage, included in every lead).
  useEffect(() => {
    captureUtm();
  }, []);

  // Mobile menu: close on Escape and when the screen grows past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const waClick = (location: string) => () => trackEvent('whatsapp_click', { location });

  return (
    <div className="aei-scope" ref={rootRef} id="top">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner wrap gutter">
          <Logo priority />
          <nav className="nav-links" aria-label="Page sections">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="nav-phone" href={`tel:${PHONE_TEL}`} onClick={() => trackEvent('phone_click', { location: 'navbar' })}>
              <PhoneIcon size={16} />
              {PHONE_DISPLAY}
            </a>
            <button type="button" className="btn btn-green btn-sm" onClick={openModal}>Apply for Internship</button>
            <button
              type="button"
              className="burger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`menu gutter${menuOpen ? ' open' : ''}`} id={MENU_ID}>
        <div className="wrap">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="menu-link" href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button type="button" className="btn btn-green" onClick={openModal}>Apply for Internship</button>
        </div>
      </div>

      <main>
        {/* HERO */}
        <section className="hero gutter" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-left">
              <div className="badge"><span className="dot" aria-hidden="true" />Now Accepting Applications – 2026–27 Batch</div>
              <p className="eyebrow">For ECE / EEE Engineering Students</p>
              <h1 id="hero-title">
                <span>DON&apos;T JUST COMPLETE YOUR INTERNSHIP.</span>
                <span className="accent">BUILD A REAL ELECTRONIC PRODUCT.</span>
              </h1>
              <p className="programme">AI-Powered Electronics &amp; Embedded Product Engineering Internship</p>
              <p className="lede">A structured, full-time, hands-on industry-oriented internship where engineering students learn AI-assisted electronics design, embedded firmware, PCB development, IoT and intelligent product engineering.</p>
              <div className="pills">
                <span className="pill">📅 12–16 Weeks</span>
                <span className="pill">⚡ Full-Time</span>
                <span className="pill">🔧 Hands-on Product Development</span>
                <span className="pill">🎓 ECE / EEE / Related Branches</span>
                <span className="pill">📍 Bangalore</span>
              </div>
              <div className="cta-row">
                <button type="button" className="btn btn-green" onClick={openModal}>Apply for Internship →</button>
                <button type="button" className="btn btn-outline" onClick={openModal}>Explore Curriculum</button>
              </div>
              <div className="trust">
                <span className="trust-label">Established:</span>
                <span className="tag">Est. 2005</span>
                <span className="tag">Bangalore</span>
                <span className="tag">ECE/EEE Focused</span>
                <span className="tag">Hands-on Lab</span>
              </div>
            </div>
            <aside className="hero-aside" aria-label="Apply for internship">
              <ApplyForm idPrefix="hero" onWhatsAppClick={waClick('hero_form')} />
            </aside>
          </div>
        </section>

        <TrustBar />
        <Why />
        <Highlights />
        <Projects />
        <Curriculum onApply={openModal} />
        <Tech />
        <Deliverables />
        <Certification onOpenCert={setCertIndex} />
        <Credibility />
        <Info onApply={openModal} />
        <Faq />
        <FinalCta onApply={openModal} />
        <FollowStrip />
      </main>

      {/* FOOTER */}
      <footer className="footer gutter">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo />
              <p className="foot-about">Knowx Innovations — practical learning for future electronics, embedded systems and product engineering professionals.</p>
              <p className="foot-meta">Phone: {PHONE_DISPLAY}<br />Location: Bangalore, India</p>
              <div className="foot-social">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICONS[s.id];
                  return (
                    <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Knowx on ${s.label}`} onClick={() => trackEvent('social_click', { network: s.id, location: 'footer' })}>
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
            <nav aria-label="Quick links">
              <h4>Quick Links</h4>
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
                <li><button type="button" onClick={openModal}>Apply Now</button></li>
              </ul>
            </nav>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a target="_blank" rel="noopener noreferrer" href={WA_DEFAULT_URL} onClick={waClick('footer')}>WhatsApp Us</a></li>
                <li><a href={`tel:${PHONE_TEL}`} onClick={() => trackEvent('phone_click', { location: 'footer' })}>Call {PHONE_DISPLAY}</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/privacy-policy#terms">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Knowx Innovations. All rights reserved.</span>
            <span>Prototype content and visuals are representative placeholders.</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a className="wa-fab" target="_blank" rel="noopener noreferrer" aria-label="Chat with Knowx on WhatsApp" href={WA_DEFAULT_URL} onClick={waClick('floating_button')}>
        <WhatsAppIcon size={28} />
        <span className="tip" aria-hidden="true">Chat with Knowx</span>
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="sticky-cta gutter">
        <button type="button" className="btn btn-green" onClick={openModal}>Apply for Internship →</button>
      </div>

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <div className="overlay open" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal gutter" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={modalRef} tabIndex={-1}>
            <ApplyForm idPrefix="modal" onWhatsAppClick={waClick('modal_form')} />
            <button type="button" className="modal-close" aria-label="Close application form" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}

      {/* CERTIFICATE LIGHTBOX */}
      {certIndex !== null && (
        <div className="overlay open" onClick={(e) => e.target === e.currentTarget && closeCert()}>
          <div className="lb-box gutter" role="dialog" aria-modal="true" aria-label="Certificate sample, enlarged" ref={lightboxRef} tabIndex={-1}>
            <button type="button" className="modal-close" aria-label="Close certificate preview" onClick={closeCert}>&times;</button>
            <CertSample cert={CERTS[certIndex]} />
            <p className="lb-cap">Sample only. Certificate format shown is representative and may be updated.</p>
          </div>
        </div>
      )}
    </div>
  );
}
