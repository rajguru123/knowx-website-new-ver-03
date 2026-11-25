'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './internship.css';
import ApplyForm from './ApplyForm';
import HeroVisual from './HeroVisual';
import { Apply, Curriculum, FinalCta, FollowStrip, How, Outcomes, Products, Tech, TrustBar, Why, WhyKnowx } from './Sections';
import { ADDRESS, EMAIL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SOCIALS, WA_DEFAULT_URL } from './data';
import { PhoneIcon, SOCIAL_ICONS, WhatsAppIcon } from './Icons';
import { useOverlay, useReveal } from './hooks';
import { captureUtm, trackEvent } from './tracking';

const MENU_ID = 'aia-menu';

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Knowx Innovations home">
      <Image className="logo-mark" src="/images/knowx-logo.png" width={40} height={40} alt="Knowx Innovations logo" priority={priority} />
      <span className="logo-text">
        <span className="logo-name">Knowx Innovations</span>
        <span className="logo-tag">AI | Agentic AI | Product Engineering</span>
      </span>
    </a>
  );
}

export default function InternshipClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setMenuOpen(false);
    setModalOpen(true);
    trackEvent('open_enquiry_modal');
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useOverlay(modalOpen, closeModal, modalRef);
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
    <div className="aia-scope" ref={rootRef} id="top">
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
        {/* HERO: copy on the left, product composition on the right (apply form lives in the popup) */}
        <section className="hero gutter" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-left">
              <p className="programme">AI &amp; Agentic AI Product Engineering Internship</p>
              <h1 id="hero-title">
                <span>Don&apos;t Just Use AI.</span>
                <span className="accent">Build AI Products.</span>
              </h1>
              <p className="lede">Learn to design, develop and deploy intelligent applications using Generative AI, LLMs, RAG and Agentic AI.</p>
              <p className="sup">Build practical AI products. Work with modern engineering tools. Develop a portfolio that demonstrates what you can actually do.</p>
              <div className="pills">
                <span className="pill">12 Weeks</span>
                <span className="pill">Full-Time</span>
                <span className="pill">Hands-on Projects</span>
                <span className="pill">Industry Mentorship</span>
              </div>
              <div className="cta-row">
                <button type="button" className="btn btn-green btn-lg" onClick={openModal}>Apply for Internship →</button>
                <a className="btn btn-outline btn-lg" href="#products">Explore the Six AI Products</a>
              </div>
              <p className="hero-note">
                <span>Offline (Bangalore) &amp; Online</span>
                <span>Approved for VTU &amp; other technical university students</span>
              </p>
            </div>
            <HeroVisual />
          </div>
        </section>

        <TrustBar />
        <Why />
        <Tech />
        <Products />
        <Curriculum onApply={openModal} />
        <Outcomes />
        <How />
        <WhyKnowx />
        <Apply />
        <FinalCta onApply={openModal} />
        <FollowStrip />
      </main>

      {/* FOOTER */}
      <footer className="footer gutter">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Logo />
              <p className="foot-about">Knowx Innovations Pvt. Ltd. A Bangalore-based technology and product engineering company.</p>
              <p className="foot-meta">{ADDRESS}<br /><a href="https://knowxindia.com">https://knowxindia.com</a></p>
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
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><a href={`tel:${PHONE_TEL}`} onClick={() => trackEvent('phone_click', { location: 'footer' })}>{PHONE_DISPLAY}</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href={WA_DEFAULT_URL} onClick={waClick('footer')}>WhatsApp Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/privacy-policy#terms">Terms &amp; Conditions</a></li>
                <li><button type="button" onClick={openModal}>Apply Now</button></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Knowx Innovations Pvt. Ltd. All rights reserved.</span>
            <span>Product tracks are internship project concepts.</span>
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
    </div>
  );
}
