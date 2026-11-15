'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import Image from 'next/image';
import {
  CERTS, CREDIBILITY_POINTS, DELIVERABLES, FAQS, HIGHLIGHTS, INFO_ITEMS, PHASES, PROJECTS, SOCIALS, TECH, TECH_MARKS,
  WA_DEFAULT_URL, type Cert,
} from './data';
import {
  ArrowLeftIcon, ArrowRightIcon, CalendarIcon, CapIcon, CheckIcon, ChipIcon, PinIcon, PlayIcon, SOCIAL_ICONS, UserIcon,
} from './Icons';
import { trackEvent } from './tracking';

type ApplyProps = { onApply: () => void };

/* ---------- TRUST BAR ---------- */
export function TrustBar() {
  const items = [
    { Icon: CalendarIcon, value: 'Est. 2005', label: 'Industry Experience' },
    { Icon: PinIcon, value: 'Bangalore', label: 'Innovation Hub' },
    { Icon: ChipIcon, value: 'Product Labs', label: 'Hands-on Learning' },
    { Icon: CapIcon, value: 'ECE / EEE', label: 'Focused Programme' },
  ];
  return (
    <section className="trust-bar gutter" aria-label="Knowx at a glance">
      <div className="wrap trust-grid">
        {items.map(({ Icon, value, label }) => (
          <div className="ti" key={value}>
            <Icon size={26} />
            <div>
              <div className="ti-v">{value}</div>
              <div className="ti-l">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WHY KNOWX ---------- */
export function Why() {
  const cards = [
    { icon: '🔬', title: 'Real Lab Experience', text: 'Learn in a hands-on electronics environment with development boards, sensors, modules, measurement tools and practical product workflows.' },
    { icon: '🧠', title: 'AI-Assisted Engineering', text: 'Use modern AI tools responsibly for circuit research, firmware development, debugging, documentation and product ideation.' },
    { icon: '🚀', title: 'Build a Portfolio Product', text: 'Graduate with documented projects, GitHub-ready code, design files, demonstrations and confidence for engineering interviews.' },
  ];
  return (
    <section className="sec bg-1 gutter" id="why" aria-labelledby="why-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">Why Knowx Innovations</p>
          <h2 className="title" id="why-title">An Internship Where You Build, Test and Learn.</h2>
          <p className="desc">Move beyond observation-based internships. At Knowx, you work in a practical product development environment designed around real electronics engineering workflows.</p>
        </div>
        <div className="why-grid" data-reveal>
          {cards.map((c, i) => (
            <article className="card why-card" key={c.title}>
              <span className="why-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="ico" aria-hidden="true">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROGRAMME HIGHLIGHTS ---------- */
export function Highlights() {
  return (
    <section className="sec bg-2 gutter" id="highlights" aria-labelledby="hl-title">
      <div className="wrap">
        <div className="sec-head m-center" data-reveal>
          <p className="over">What You Will Learn</p>
          <h2 className="title" id="hl-title">From Circuit Idea to Intelligent Product.</h2>
          <p className="desc">A structured learning path that connects electronics, firmware, IoT, PCB design and AI-enabled engineering.</p>
        </div>
        <div className="hl-grid" data-reveal>
          {HIGHLIGHTS.map((h) => (
            <article className="card hl-card" key={h.title}>
              <div className="ico" aria-hidden="true">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCT SHOWCASE (horizontal rail) ---------- */
function CircuitArt() {
  return (
    <svg className="circ" viewBox="0 0 340 188" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <path d="M0 48H64L84 68H128M0 140H52L72 120H120M340 40H270L252 58H214M340 150H296L276 130H222M170 0V32M170 188V156" />
      {[[64, 48], [128, 68], [52, 140], [270, 40], [214, 58], [296, 150], [170, 32], [170, 156]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
      ))}
    </svg>
  );
}

export function Projects() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const r = railRef.current;
    if (!r) return;
    setAtStart(r.scrollLeft <= 2);
    setAtEnd(r.scrollLeft + r.clientWidth >= r.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  function step(dir: 1 | -1) {
    const r = railRef.current;
    if (!r) return;
    const card = r.querySelector<HTMLElement>('.pcard');
    const w = card ? card.getBoundingClientRect().width + 20 : 340;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    r.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <section className="sec bg-1 gutter" id="projects" aria-labelledby="proj-title">
      <div className="wrap">
        <div className="rail-head" data-reveal>
          <div className="sec-head">
            <p className="over">Product Showcase</p>
            <h2 className="title" id="proj-title">The Kind of Products You Can Learn to Build.</h2>
            <p className="desc">Representative product-development directions. Final project scope depends on programme batch, hardware availability and mentor guidance.</p>
          </div>
          <div className="rail-btns">
            <button type="button" className="rail-btn" aria-label="Scroll projects left" aria-controls="aei-rail" disabled={atStart} onClick={() => step(-1)}>
              <ArrowLeftIcon size={18} />
            </button>
            <button type="button" className="rail-btn" aria-label="Scroll projects right" aria-controls="aei-rail" disabled={atEnd} onClick={() => step(1)}>
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
        <div className="rail" id="aei-rail" ref={railRef} onScroll={update} role="region" aria-label="Product showcase, scrollable" tabIndex={0}>
          {PROJECTS.map((p, i) => (
            <article className="card pcard" key={p.title}>
              <div className={`pviz${i % 2 ? ' flip' : ''}`} style={{ '--a': i % 2 === 0 ? '0,229,255' : '0,200,83' } as CSSProperties}>
                <CircuitArt />
                <span className="ph">Concept / Placeholder</span>
                <span className="pdev" aria-hidden="true">{p.icon}</span>
              </div>
              <div className="pbody">
                <span className="pcat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="pfoot">
                  <div className="ptags">
                    {p.tags.map((t) => (
                      <span className="ptag" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="plink">Explore Project →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
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
    if (focus) document.getElementById(`aei-ptab-${i}`)?.focus();
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
    <section className="sec bg-2 gutter" id="curriculum" aria-labelledby="cur-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">12-Week Curriculum</p>
          <h2 className="title" id="cur-title">A Structured Path From Fundamentals to Product Prototype.</h2>
          <p className="desc">Every week combines technical concepts, guided lab work, tools and a practical deliverable.</p>
        </div>

        {/* Phase tabs show on mobile only. Desktop shows all three phases in one linear list. */}
        <div className="ptabs" role="tablist" aria-label="Curriculum phases" onKeyDown={onTabKey}>
          {PHASES.map((p, i) => (
            <button
              key={p.n}
              type="button"
              role="tab"
              className="ptab"
              id={`aei-ptab-${i}`}
              aria-controls={`aei-phase-${i}`}
              aria-selected={activePhase === i}
              tabIndex={activePhase === i ? 0 : -1}
              onClick={() => selectPhase(i)}
            >
              Phase {p.n}
            </button>
          ))}
        </div>

        {PHASES.map((p, pi) => (
          <section
            key={p.n}
            className={`phase${activePhase === pi ? ' active' : ''}`}
            id={`aei-phase-${pi}`}
            role="tabpanel"
            aria-labelledby={`aei-ptab-${pi}`}
          >
            <header className="phase-head">
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <span className="chip">{p.weeks}</span>
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
                      id={`aei-wb-${idx}`}
                      aria-expanded={open}
                      aria-controls={`aei-wp-${idx}`}
                      onClick={() => setOpenWeek(open ? null : idx)}
                    >
                      <span className="wk-n">Week {idx + 1}</span>
                      <span className="wk-t">{w.title}</span>
                      <span className="wk-i" aria-hidden="true" />
                    </button>
                  </h4>
                  <div className="wk-p" id={`aei-wp-${idx}`} role="region" aria-labelledby={`aei-wb-${idx}`} hidden={!open}>
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

        <div className="cta-center">
          <button type="button" className="btn btn-green btn-lg" onClick={onApply}>Apply to Build Your Product →</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY STACK ---------- */
function techMark(name: string) {
  if (TECH_MARKS[name]) return TECH_MARKS[name];
  const w = name.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase();
}

export function Tech() {
  return (
    <section className="sec bg-1 gutter" id="tech" aria-labelledby="tech-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">Tools &amp; Technologies</p>
          <h2 className="title" id="tech-title">Learn With the Tools Used in Modern Product Development.</h2>
          <p className="desc">The programme is designed to introduce practical engineering workflows, not just theory.</p>
        </div>
        <div className="tech-grid" data-reveal>
          {TECH.map((c) => (
            <article className="card tech-cat" key={c.title}>
              <h3>{c.title}</h3>
              <div className="tiles">
                {c.items.map((t) => (
                  <div className="tile" key={t}>
                    <span className="mk" aria-hidden="true">{techMark(t)}</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DELIVERABLES ---------- */
export function Deliverables() {
  return (
    <section className="sec bg-2 gutter" id="deliverables" aria-labelledby="del-title">
      <div className="wrap deliv-grid" data-reveal>
        <div className="sec-head">
          <p className="over">What You Take Away</p>
          <h2 className="title" id="del-title">More Than a Certificate. Evidence of What You Can Build.</h2>
          <p className="desc">Your work is structured to help you demonstrate engineering ability in interviews, higher studies applications and early-career opportunities.</p>
        </div>
        <div>
          <ul className="checks">
            {DELIVERABLES.map((d) => (
              <li key={d.title}>
                <span className="tick" aria-hidden="true"><CheckIcon size={14} /></span>
                <div>
                  <strong>{d.title}</strong>
                  <span>{d.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="callout">Your final output depends on participation, chosen project scope, lab access and successful completion of programme requirements.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATION ---------- */
export function CertSample({ cert }: { cert: Cert }) {
  const sig = (
    <svg viewBox="0 0 80 30" aria-hidden="true" focusable="false">
      <path d="M3 22C10 4 16 28 26 12S42 24 54 10 68 22 77 14" />
    </svg>
  );
  return (
    <div className="cert">
      <div className="cert-f1" />
      <div className="cert-f2" />
      <div className="cert-wm" aria-hidden="true">SAMPLE</div>
      <div className="cert-body">
        <div className="cert-logo">
          <Image className="cert-mark" src="/images/knowx-logo.png" width={40} height={40} alt="" />
          <span className="cert-brand">KNOWX INNOVATIONS</span>
        </div>
        <div>
          <div className="cert-kicker">Certificate</div>
          <div className="cert-title">{cert.title}</div>
          <div className="cert-sub">{cert.subtitle}</div>
        </div>
        <div className="cert-line">This is to certify that</div>
        <div className="cert-name">Student Name</div>
        <div className="cert-line">has met the programme requirements at Knowx Innovations, Bangalore.</div>
        <div className="cert-sign">
          <div>{sig}<span>Programme Director</span></div>
          <div className="cert-seal">EST.<br />2005</div>
          <div>{sig}<span>Lead Mentor</span></div>
        </div>
      </div>
    </div>
  );
}

export function Certification({ onOpenCert }: { onOpenCert: (i: number) => void }) {
  return (
    <section className="sec bg-1 gutter" id="certification" aria-labelledby="cert-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">Certification</p>
          <h2 className="title" id="cert-title">Document Your Practical Learning Journey.</h2>
          <p className="desc">Students who meet attendance, project and programme completion requirements receive a Knowx internship completion certificate.</p>
        </div>
        <div className="cert-grid" data-reveal>
          {CERTS.map((c, i) => (
            <div key={c.title}>
              <button type="button" className="cert-btn" aria-label={`Enlarge sample: ${c.title}`} onClick={() => onOpenCert(i)}>
                <CertSample cert={c} />
              </button>
              <span className="cert-hint">Click to enlarge</span>
            </div>
          ))}
        </div>
        <p className="disclaimer">Certificate format shown is representative and may be updated.</p>
      </div>
    </section>
  );
}

/* ---------- CREDIBILITY / MENTORSHIP ---------- */
export function Credibility() {
  const [note, setNote] = useState('');
  return (
    <section className="sec bg-2 gutter" id="credibility" aria-label="Knowx mentors and credibility">
      <div className="wrap cred-grid" data-reveal>
        <article className="card mentor">
          <div className="avatar" aria-hidden="true"><UserIcon size={42} /></div>
          <h2 className="mentor-name">Knowx Engineering Mentor Team</h2>
          <p className="role">Product Development, Embedded Systems &amp; Electronics Training</p>
          <p className="txt">Knowx Innovations has supported engineering learners through practical, industry-oriented technical programmes since 2005.</p>
          <ul>
            {CREDIBILITY_POINTS.map((t) => (
              <li key={t}><CheckIcon size={16} />{t}</li>
            ))}
          </ul>
        </article>
        <div>
          <button
            type="button"
            className="video"
            aria-label="Watch: What You Will Build at Knowx. Mentor introduction video placeholder"
            onClick={() => setNote('Video link will be added here.')}
          >
            <span className="play" aria-hidden="true"><PlayIcon size={30} /></span>
            <span className="vcap">
              <strong>Watch: What You Will Build at Knowx</strong>
              <span>Mentor introduction video placeholder</span>
            </span>
          </button>
          <p className="vnote" role="status" aria-live="polite">{note}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- INTERNSHIP INFORMATION ---------- */
export function Info({ onApply }: ApplyProps) {
  return (
    <section className="sec bg-1 gutter" id="internship-info" aria-labelledby="info-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">Programme Information</p>
          <h2 className="title" id="info-title">Designed for Students Ready to Build.</h2>
          <p className="desc">Please apply to check eligibility, batch availability, exact schedules and current programme details.</p>
        </div>
        <div className="info-grid" data-reveal>
          {INFO_ITEMS.map((i) => (
            <article className="card info" key={i.title}>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </article>
          ))}
        </div>
        <div className="cta-center">
          <button type="button" className="btn btn-green btn-lg" onClick={onApply}>Check Eligibility →</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0); // only one item open at a time
  return (
    <section className="sec bg-2 gutter" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <p className="over">Frequently Asked Questions</p>
          <h2 className="title" id="faq-title">Questions Before You Apply?</h2>
          <p className="desc">If you need more information, submit an enquiry and our team will assist you on WhatsApp.</p>
        </div>
        <div className="faq-list" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq${isOpen ? ' open' : ''}`} key={f.q}>
                <h3>
                  <button type="button" className="faq-btn" id={`aei-fq-${i}`} aria-expanded={isOpen} aria-controls={`aei-fa-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>{f.q}</span>
                    <span className="wk-i" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`aei-fa-${i}`} role="region" aria-labelledby={`aei-fq-${i}`} hidden={!isOpen}>{f.a}</div>
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
        <p className="over">Your Next Step</p>
        <h2 className="title" id="final-title">
          <span>Stop Watching Projects Online.</span>
          <span>Start Building One.</span>
        </h2>
        <p className="desc">Apply now to speak with the Knowx team, understand the programme and find the right internship track for your engineering goals.</p>
        <div className="final-cta">
          <button type="button" className="btn btn-green btn-lg" onClick={onApply}>Apply for Internship →</button>
          <a className="btn btn-wa btn-lg" target="_blank" rel="noopener noreferrer" href={WA_DEFAULT_URL} onClick={() => trackEvent('whatsapp_click', { location: 'final_cta' })}>
            Chat on WhatsApp
          </a>
        </div>
        <small>Free to apply · No payment required to submit an enquiry</small>
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
