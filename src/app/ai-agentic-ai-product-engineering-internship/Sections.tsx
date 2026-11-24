'use client';

import { useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import {
  ELIGIBLE_BRANCHES, FAQS, HIGHLIGHTS, KNOWX_POINTS, LEARN_MODES, LOOK_FOR, OUTCOMES, PATHWAYS, PHASES, PHOTOS,
  PORTFOLIO_ROWS, PRODUCTS, SOCIALS, STEPS, TECH, TRUST, WA_DEFAULT_URL,
} from './data';
import { SOCIAL_ICONS } from './Icons';
import { trackEvent } from './tracking';

type ApplyProps = { onApply: () => void };

/* ---------- TRUST BAR ---------- */
export function TrustBar() {
  return (
    <section className="tbar gutter" aria-label="Knowx at a glance">
      <div className="wrap trust-grid">
        {TRUST.map((t) => (
          <div className="ti" key={t.value}>
            <span className="ti-mark" aria-hidden="true">{t.mark}</span>
            <div>
              <div className="ti-v">{t.value}</div>
              <div className="ti-l">{t.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WHY THIS INTERNSHIP ---------- */
export function Why() {
  return (
    <section className="sec gutter" id="why" aria-labelledby="why-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">Why this internship</p>
          <h2 className="title" id="why-title">Companies Don&apos;t Need More AI Users. They Need AI Builders.</h2>
          <p className="desc">Knowing how to use AI tools is not enough. This programme trains you to engineer the products behind them.</p>
        </div>
        <div className="grid3" data-reveal>
          {HIGHLIGHTS.map((h, i) => (
            <article className="card" key={h.title}>
              <span className="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY STACK ---------- */
export function Tech() {
  return (
    <section className="sec alt gutter" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">What you will learn</p>
          <h2 className="title" id="stack-title">One Stack. From Python to Production.</h2>
          <p className="desc">The technologies behind modern AI products, learned in the order you will actually use them.</p>
        </div>
        <div className="stack" data-reveal>
          {TECH.map((c) => (
            <article className={`card stack-card${c.wide ? ' wide' : ''}`} key={c.title}>
              <h3 className="stack-h">{c.title}</h3>
              <div className="tags">
                {c.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SIX PRODUCT TRACKS ---------- */
export function Products() {
  return (
    <section className="sec gutter" id="products" aria-labelledby="prod-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">Six AI product tracks</p>
          <h2 className="title" id="prod-title">Six AI Products. Pick Your Track.</h2>
          <p className="desc">Choose one product inspired by real business, healthcare, education, manufacturing or community needs, and build it end to end.</p>
        </div>
        <div className="pgrid" id="aia-pgrid" data-reveal>
          {PRODUCTS.map((p) => (
            <article className="card pcard" key={p.n} style={{ ['--ac' as string]: p.accent }}>
              <div className="pbody">
                <span className="pno">PRODUCT {p.n}</span>
                <h3>{p.name}</h3>
                <span className="ptag">{p.tag}</span>
                <p>{p.text}</p>
                <ul>
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <details className="more">
                  <summary>See all features</summary>
                  <ul>
                    {p.features.slice(3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </details>
                {p.note && <div className="note">{p.note}</div>}
              </div>
            </article>
          ))}
        </div>
        <p className="swipehint">Swipe to see all six →</p>
        <p className="disclaimer">
          Internship product development concepts, not commercially deployed products. Each intern or team chooses one track; everyone follows the same 12-week curriculum.
        </p>
      </div>
    </section>
  );
}

/* ---------- CURRICULUM ---------- */
export function Curriculum({ onApply }: ApplyProps) {
  const [activePhase, setActivePhase] = useState(0);
  const [openWeek, setOpenWeek] = useState<number | null>(0); // first week open by default
  const phaseStart = PHASES.map((_, i) => PHASES.slice(0, i).reduce((n, p) => n + p.items.length, 0));

  function selectPhase(i: number, focus = false) {
    setActivePhase(i);
    setOpenWeek(phaseStart[i]); // keep one week open inside the visible phase
    if (focus) document.getElementById(`aia-ptab-${i}`)?.focus();
  }

  function onTabKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      selectPhase((activePhase + 1) % PHASES.length, true);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      selectPhase((activePhase + PHASES.length - 1) % PHASES.length, true);
    }
  }

  return (
    <section className="sec alt gutter" id="curriculum" aria-labelledby="cur-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">12-week curriculum</p>
          <h2 className="title" id="cur-title">From Python Programmer to AI Product Engineer.</h2>
          <p className="desc">Every week combines technical concepts, guided lab work, tools and a practical deliverable.</p>
        </div>

        {/* Phase tabs show on tablet and mobile only. Desktop shows all three phases in one list. */}
        <div className="ptabs" role="tablist" aria-label="Curriculum phases" onKeyDown={onTabKey}>
          {PHASES.map((p, i) => (
            <button
              key={p.n}
              type="button"
              role="tab"
              className="ptab"
              id={`aia-ptab-${i}`}
              aria-controls={`aia-phase-${i}`}
              aria-selected={activePhase === i}
              tabIndex={activePhase === i ? 0 : -1}
              onClick={() => selectPhase(i)}
            >
              Phase {p.n}
            </button>
          ))}
        </div>

        <div className="phases">
          {PHASES.map((p, pi) => (
            <section
              key={p.n}
              className={`phase${activePhase === pi ? ' active' : ''}`}
              id={`aia-phase-${pi}`}
              role="tabpanel"
              aria-labelledby={`aia-ptab-${pi}`}
            >
              <header className="phase-head">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <span className="pchip">{p.weeks}</span>
              </header>
              {p.items.map((w, wi) => {
                const idx = phaseStart[pi] + wi;
                const open = openWeek === idx;
                return (
                  <div className={`wk${open ? ' open' : ''}`} key={w.title}>
                    <h4 className="wk-h">
                      <button
                        type="button"
                        className="wk-btn"
                        id={`aia-wb-${idx}`}
                        aria-expanded={open}
                        aria-controls={`aia-wp-${idx}`}
                        onClick={() => setOpenWeek(open ? null : idx)}
                      >
                        <span className="wk-n">Week {idx + 1}</span>
                        <span className="wk-t">{w.title}</span>
                      </button>
                    </h4>
                    <div className="wk-p" id={`aia-wp-${idx}`} role="region" aria-labelledby={`aia-wb-${idx}`} hidden={!open}>
                      <div className="wk-c">
                        <h5>Topics</h5>
                        <ul>{w.topics.map((t) => <li key={t}>{t}</li>)}</ul>
                      </div>
                      <div className="wk-c">
                        <h5>Lab Exercises</h5>
                        <ul>{w.lab.map((t) => <li key={t}>{t}</li>)}</ul>
                      </div>
                      <div className="wk-c">
                        <h5>Tools</h5>
                        <ul>{w.tools.map((t) => <li key={t}>{t}</li>)}</ul>
                      </div>
                      <div className="wk-c">
                        <h5>Weekly Deliverable</h5>
                        <p>{w.deliverable}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          ))}
        </div>

        <div className="cta-center">
          <button type="button" className="btn btn-green btn-lg" onClick={onApply}>Apply to Build Your Product →</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- OUTCOMES + CAREER PATHWAYS ---------- */
export function Outcomes() {
  return (
    <section className="sec gutter" id="outcomes" aria-labelledby="out-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">What you will have built</p>
          <h2 className="title" id="out-title">Finish with Proof, Not Just a Certificate.</h2>
          <p className="desc">Tangible work you can show: code, deployments, documentation and a portfolio.</p>
        </div>
        <div className="out-grid" data-reveal>
          <ul className="ticks">
            {OUTCOMES.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <div className="port" aria-hidden="true">
            <div className="port-bar"><i /><i /><i /><span>your-portfolio / github.com/you</span></div>
            {PORTFOLIO_ROWS.map((r) => (
              <div className="port-row" key={r.name}>
                <b>{r.name}</b>
                <em>{r.status}</em>
              </div>
            ))}
          </div>
        </div>
        <div className="path" data-reveal>
          <h3>Pathways this programme prepares you for</h3>
          <p>Builds foundational, practical skills for these entry-level pathways. It does not guarantee employment or placement.</p>
          <div className="tags center">
            {PATHWAYS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW YOU WILL LEARN ---------- */
export function How() {
  return (
    <section className="sec alt gutter" id="how" aria-labelledby="how-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">How you will learn</p>
          <h2 className="title" id="how-title">Learn by Building. Grow Through Mentorship.</h2>
          <p className="desc">Every week follows the same loop used by product teams.</p>
        </div>
        <ol className="steps" data-reveal>
          {STEPS.map((s, i) => (
            <li className="step" key={s}>
              <b>{i + 1}</b>
              <span>{s}</span>
            </li>
          ))}
        </ol>
        <div className="split" data-reveal>
          <div className="split-bar" role="img" aria-label="Approximate split: 70 percent hands-on development, 20 percent guided practice and review, 10 percent concept learning">
            <div style={{ flex: 70, background: 'var(--blue)' }}>~70% Hands-on development</div>
            <div style={{ flex: 20, background: 'var(--cyan)' }}>~20% Practice</div>
            <div style={{ flex: 10, background: 'var(--vio)' }}>~10%</div>
          </div>
          <p>Approximate split: 70% hands-on development · 20% guided practice and review · 10% concept learning</p>
        </div>
        <div className="grid3" data-reveal>
          {LEARN_MODES.map((m) => (
            <article className="card" key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY KNOWX ---------- */
export function WhyKnowx() {
  return (
    <section className="sec gutter" id="knowx" aria-labelledby="knowx-title">
      <div className="wrap knowx-grid" data-reveal>
        <div>
          <p className="over left">Why Knowx Innovations</p>
          <h2 className="title left" id="knowx-title">Learn from a Team That Ships Products.</h2>
          <p className="desc left">
            Knowx Innovations is a Bangalore-based technology and product engineering company, established in 2005, with experience in:
          </p>
          <div className="tags big">
            {KNOWX_POINTS.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
        </div>
        <div className="photos">
          {PHOTOS.map((p) =>
            p.src ? (
              <div className="photo" key={p.alt}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 980px) 45vw, 280px" style={{ objectFit: 'cover' }} loading="lazy" />
              </div>
            ) : (
              <div className="photo ph" key={p.alt} role="img" aria-label={`Placeholder: ${p.alt}`}>
                {p.placeholder}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO CAN APPLY + FAQ ---------- */
export function Apply() {
  const [open, setOpen] = useState<number | null>(0); // only one FAQ open at a time
  return (
    <section className="sec alt gutter" id="faq" aria-labelledby="elig-title">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="over">Who can apply</p>
          <h2 className="title" id="elig-title">Open to Engineering Students Ready to Build.</h2>
          <p className="desc">Approved internship for VTU and other technical university students. Offline (Bangalore) and online options available.</p>
        </div>
        <div className="elig" data-reveal>
          <article className="card">
            <h3>Eligible branches</h3>
            <div className="tags">
              {ELIGIBLE_BRANCHES.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </article>
          <article className="card">
            <h3>What we look for</h3>
            <ul className="plain">
              {LOOK_FOR.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="sec-head faq-head" data-reveal>
          <h2 className="title" id="faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq${isOpen ? ' open' : ''}`} key={f.q}>
                <h3>
                  <button type="button" className="faq-btn" id={`aia-fq-${i}`} aria-expanded={isOpen} aria-controls={`aia-fa-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>{f.q}</span>
                  </button>
                </h3>
                <div className="faq-a" id={`aia-fa-${i}`} role="region" aria-labelledby={`aia-fq-${i}`} hidden={!isOpen}>{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
export function FinalCta({ onApply }: ApplyProps) {
  return (
    <section className="final gutter" id="apply" aria-labelledby="final-title">
      <div className="final-inner" data-reveal>
        <p className="over">Your next step</p>
        <h2 className="title" id="final-title">Your AI Engineering Journey Starts Here.</h2>
        <p className="desc">Don&apos;t stop at learning AI tools. Develop the skills to design, build and deploy intelligent applications.</p>
        <div className="final-cta">
          <button type="button" className="btn btn-green btn-lg" onClick={onApply}>Apply for the AI &amp; Agentic AI Product Engineering Internship</button>
          <a className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer" href={WA_DEFAULT_URL} onClick={() => trackEvent('whatsapp_click', { location: 'final_cta' })}>
            Talk to the Knowx Team
          </a>
        </div>
        <small>Submit an enquiry and our team will contact you on WhatsApp.</small>
      </div>
    </section>
  );
}

/* ---------- FOLLOW STRIP (SOCIAL) ---------- */
export function FollowStrip() {
  return (
    <section className="follow gutter" aria-labelledby="follow-title">
      <div className="wrap follow-inner">
        <div>
          <h2 id="follow-title">See What We Build</h2>
          <p>Watch lab builds, student projects and behind-the-scenes work from the Knowx team.</p>
        </div>
        <div className="socials">
          {SOCIALS.map((s) => {
            const Icon = SOCIAL_ICONS[s.id];
            return (
              <a
                key={s.id}
                className={`soc${s.id === 'instagram' ? ' primary' : ''}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('social_click', { network: s.id, location: 'follow_strip' })}
              >
                <Icon size={20} />
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
