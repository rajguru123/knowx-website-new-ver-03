'use client'

// components/mbear/MbearLandingPage.tsx
import { useEffect, useRef, useState } from 'react'
import './mbear.css'

const WEB3FORMS_ACCESS_KEY = 'f2635df8-33a5-44ef-889c-9f823771927f' // Knowx's existing key — swap for a dedicated MBEAR key later if you want registrations in a separate inbox
const WHATSAPP_NUMBER = '917676601681' // using 7676601681 as primary — swap to 9886094611 if you'd rather

export default function MbearLandingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  // Reveal-on-scroll
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add('in')
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(false)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      setSubmitted(true)

      // Fire conversion events for ad platforms — this is what lets Meta/Google
      // Ads learn which campaigns actually produce registrations, not just clicks.
      if (typeof window !== 'undefined') {
        const w = window as any
        if (typeof w.fbq === 'function') {
          w.fbq('track', 'Lead')
        }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({ event: 'mbear_registration_submitted' })
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div className="mb-scope" ref={rootRef}>
      {/* ===================== NAV ===================== */}
      <nav className="nav">
        <div className="container">
          <div className="nav__mark">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon points="50,6 90,73 10,73" stroke="#D9A94A" strokeWidth="4" />
              <polygon points="50,94 10,27 90,27" stroke="#D9A94A" strokeWidth="4" />
            </svg>
            <span className="nav__word">MBEAR</span>
          </div>
          <div className="nav__links">
            <a href="#outcomes">Why Attend</a>
            <a href="#mentor">Mentor</a>
            <a href="#local">Localities</a>
            <a href="#faq">FAQ</a>
          </div>
          <button className="btn btn--primary nav__cta" onClick={() => setModalOpen(true)}>
            Reserve Free Seat
          </button>
        </div>
      </nav>

      {/* ===================== HERO ===================== */}
      <header className="hero">
        <svg className="hero__hex" viewBox="0 0 100 100" fill="none">
          <polygon points="50,6 90,73 10,73" stroke="#D9A94A" strokeWidth="1.2" />
          <polygon points="50,94 10,27 90,27" stroke="#D9A94A" strokeWidth="1.2" />
        </svg>
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Free · Live · Every Saturday</span>
            <p className="hero__locality">
              Basaveshwara Nagar · Vijayanagar · Rajajinagar · Nagarabhavi · Peenya · Mysore Road
            </p>
            <h1>
              Master the Stock Market.
              <br />
              Build Wealth with Confidence.
            </h1>
            <p className="hero__kicker">Taught by a Market Veteran with 20+ Years of Experience</p>
            <p className="hero__sub">
              MBEAR empowers students, working professionals, homemakers, and retirees with practical
              stock market education, live market sessions, and expert mentorship to make informed
              investment decisions and build long-term wealth with confidence.
            </p>
            <div className="hero__meta">
              <span>◐ Every Saturday</span>
              <span>10:30 AM – 12:30 PM</span>
              <span>MBEAR, Basaveshwara Nagar</span>
            </div>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
                Reserve My Free Seat
              </button>
              <a className="btn btn--ghost-ink" href="#outcomes">
                See what you'll learn ↓
              </a>
            </div>
            <p className="hero__seats">
              <b>16 of 30</b> seats reserved for this Saturday's session
            </p>
            <p className="hero__trustline">
              Educational session only. MBEAR does not manage your money or give buy/sell
              recommendations — we help you understand the market well enough to decide for yourself.
            </p>
          </div>
          <div className="hero__photo-panel">
            <svg
              className="hero__photo-chart"
              viewBox="0 0 400 340"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="fillgrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D9A94A" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#D9A94A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="chart-fill"
                d="M0,260 L40,255 L80,235 L120,245 L160,200 L200,210 L240,150 L280,165 L320,90 L360,100 L400,40 L400,340 L0,340 Z"
                fill="url(#fillgrad)"
              />
              <path
                className="chart-line"
                d="M0,260 L40,255 L80,235 L120,245 L160,200 L200,210 L240,150 L280,165 L320,90 L360,100 L400,40"
              />
            </svg>
            <div className="hero__photo-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mbear/mentor-photo.jpg"
                alt="MBEAR founder-mentor, 20+ years of stock market training experience in Bengaluru"
                loading="eager"
              />
            </div>
            <p className="hero__photo-caption">
              MBEAR's founder-mentor conducting a live stock market training session — 20+ years
              teaching investors across Bengaluru
            </p>
          </div>
        </div>
      </header>

      {/* ===================== TRUST BAR ===================== */}
      <div className="trust">
        <div className="trust__item trust__item--brass">
          <b>20+</b>years mentor experience
        </div>
        <div className="trust__item trust__item--pine">
          <b>5.0★</b>rated on Google (6 reviews)
        </div>
        <div className="trust__item trust__item--ember">
          Students · Homemakers · Professionals · Retired
        </div>
        <div className="trust__item trust__item--ink">Serving West Bengaluru</div>
      </div>

      {/* ===================== PAIN POINTS ===================== */}
      <section className="section">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Take stock</span>
            <h2>Are You Ready to Take Control of Your Financial Future?</h2>
          </div>
          <div className="pains reveal">
            <div className="pain v1">
              <span className="icon">💰</span>
              <span>Is your salary no longer enough to achieve your financial goals?</span>
            </div>
            <div className="pain v2">
              <span className="icon">📉</span>
              <span>Are your savings losing value due to inflation?</span>
            </div>
            <div className="pain v3">
              <span className="icon">📊</span>
              <span>Confused about where and how to start investing?</span>
            </div>
            <div className="pain v4">
              <span className="icon">⚠️</span>
              <span>Worried about making the wrong investment decisions?</span>
            </div>
            <div className="pain v5">
              <span className="icon">📈</span>
              <span>Want to build long-term wealth through smart investing?</span>
            </div>
            <div className="pain v6">
              <span className="icon">💼</span>
              <span>Looking for an additional source of income and greater financial freedom?</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUTCOMES ===================== */}
      <section className="section" id="outcomes" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Free Investor's Masterclass</span>
            <h2>What You'll Learn in the FREE Investor's Masterclass</h2>
            <p>Gain practical knowledge and proven strategies to make smarter investment decisions with confidence.</p>
          </div>
          <div className="outcomes reveal">
            <div className="outcome v1">
              <span className="outcome__icon">📈</span>
              <h3>Understand How the Stock Market Really Works</h3>
              <p>Build a strong foundation in stock market investing and market fundamentals.</p>
            </div>
            <div className="outcome v2">
              <span className="outcome__icon">📊</span>
              <h3>Investing vs. Trading – Choose the Right Approach</h3>
              <p>Learn the key differences and discover which strategy aligns with your financial goals.</p>
            </div>
            <div className="outcome v3">
              <span className="outcome__icon">🔍</span>
              <h3>How Professional Investors Analyze the Market</h3>
              <p>Understand the basics of market trends, company analysis, and informed decision-making.</p>
            </div>
            <div className="outcome v4">
              <span className="outcome__icon">🛡️</span>
              <h3>Risk Management &amp; Capital Protection</h3>
              <p>Learn how disciplined investors manage risk and avoid common investment mistakes.</p>
            </div>
            <div className="outcome v5">
              <span className="outcome__icon">💼</span>
              <h3>Portfolio Building &amp; Diversification</h3>
              <p>Discover how to build a balanced investment portfolio for long-term financial growth.</p>
            </div>
            <div className="outcome v6">
              <span className="outcome__icon">🎯</span>
              <h3>Long-Term Wealth Creation Strategies</h3>
              <p>Understand the principles of compounding, financial planning, and sustainable wealth creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MENTOR ===================== */}
      <section className="section section--ink" id="mentor">
        <div className="container">
          <div className="mentor">
            <div>
              <div className="mentor__frame reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mbear/mentor-photo.jpg"
                  alt="MBEAR founder-mentor conducting stock market training"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="mentor__play" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#0A1B30">
                    <polygon points="3,1 15,8 3,15" />
                  </svg>
                </div>
              </div>
              <p className="mentor__cred">
                20+ Years — Market Research · Investment Strategy · Trading Psychology · Portfolio Management
              </p>
            </div>
            <div className="reveal">
              <span className="eyebrow">Learn from a market veteran</span>
              <blockquote>
                "The goal is not to predict the market — it's to make informed decisions, with discipline
                and knowledge."
              </blockquote>
              <button className="btn btn--ghost-ink" onClick={() => setModalOpen(true)}>
                Reserve My Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== AUDIENCE ===================== */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Who this is for</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700 }}>Who Should Attend?</h2>
          </div>
        </div>
        <div className="container" style={{ padding: '0 28px' }}>
          <div className="audience reveal">
            <div className="audience__item v1">
              <span className="icon">🎓</span>
              <span className="label">Students — Build Financial Literacy Early</span>
            </div>
            <div className="audience__item v2">
              <span className="icon">💼</span>
              <span className="label">Professionals — Grow Wealth Alongside Salary</span>
            </div>
            <div className="audience__item v3">
              <span className="icon">👩</span>
              <span className="label">Homemakers — Become Financially Independent</span>
            </div>
            <div className="audience__item v4">
              <span className="icon">👴</span>
              <span className="label">Retired — Manage Retirement Investments Wisely</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DIFFERENTIATORS ===================== */}
      <section className="section section--ink">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Why MBEAR</span>
            <h2>A Practical Stock Market Course for Beginners &amp; Working Professionals in Bangalore</h2>
            <p>Structured learning, not tip-based trading — research-led, with no promises we can't keep.</p>
          </div>
          <div className="diff reveal">
            <div className="diff__item">
              <h3>Practical, not theoretical</h3>
              <p>Every concept is tied to a real market example from the same week.</p>
            </div>
            <div className="diff__item">
              <h3>Live market analysis</h3>
              <p>You watch the reasoning happen, not just the conclusion.</p>
            </div>
            <div className="diff__item">
              <h3>Beginner-friendly pace</h3>
              <p>No assumed vocabulary — every term is explained as it's introduced.</p>
            </div>
            <div className="diff__item">
              <h3>Honest about risk</h3>
              <p>We teach risk management before returns, deliberately.</p>
            </div>
            <div className="diff__item">
              <h3>No false promises</h3>
              <p>No guaranteed-return language — the market doesn't offer that, and neither do we.</p>
            </div>
            <div className="diff__item">
              <h3>Long-term focus</h3>
              <p>Built around compounding and discipline, not short-term wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LOCAL ===================== */}
      <section className="section" id="local">
        <div className="container">
          <div className="local">
            <div className="reveal">
              <span className="eyebrow">Conveniently located</span>
              <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)', marginTop: 12 }}>
                In the heart of Basaveshwara Nagar — an easy Saturday morning for West Bengaluru.
              </h2>
              <p style={{ marginTop: 18, fontSize: 16 }}>
                Whether you're coming from Vijayanagar, Rajajinagar, Nagarabhavi, Mysore Road or Peenya,
                the venue sits within a short, familiar drive — no need to cross town on a Saturday morning.
              </p>
              <div className="chips">
                <div className="chip"><b>~2 km</b> Vijayanagar</div>
                <div className="chip"><b>~3 km</b> Rajajinagar</div>
                <div className="chip"><b>~4 km</b> Mysore Road</div>
                <div className="chip"><b>~5 km</b> Nagarabhavi</div>
                <div className="chip"><b>~6 km</b> Peenya</div>
              </div>
              <a
                className="btn btn--ghost-paper"
                style={{ marginTop: 28 }}
                href="https://www.google.com/maps/search/?api=1&query=MBEAR+Basaveshwar+Nagar+Bengaluru"
                target="_blank"
                rel="noopener"
              >
                Get Directions on Google Maps
              </a>
            </div>
            <div className="mapframe reveal">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=2nd%20Floor%2C%20331%2C%20Siddhaiah%20Puranik%20Rd%2C%20Basaveshwar%20Nagar%2C%20Bengaluru%2C%20560079&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="MBEAR location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SESSION DETAILS ===================== */}
      <section className="section section--ink" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="rule" style={{ marginBottom: 56 }} />
          <div className="details reveal">
            <div className="details__item">
              <span className="icon">🗓️</span>
              <div className="val">
                <strong>Every Saturday</strong>
                10:30 AM – 12:30 PM
              </div>
            </div>
            <div className="details__item">
              <span className="icon">📍</span>
              <div className="val">
                <strong>MBEAR</strong>
                2nd Floor, 331, Siddhaiah Puranik Road, Basaveshwar Nagar
              </div>
            </div>
            <div className="details__item">
              <span className="icon">📞</span>
              <div className="val">
                <strong>7676601681</strong>
                9886094611
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section">
        <div className="container">
          <div className="rating-badge reveal">
            <div className="num">5.0</div>
            <div className="txt">
              ★★★★★
              <br />
              Based on 6 Google reviews
            </div>
          </div>
          <div className="reviews-slider">
            <button
              type="button"
              className="slider-arrow slider-arrow--prev"
              aria-label="Previous reviews"
              onClick={() => reviewsRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            >
              ‹
            </button>
            <div className="reviews reveal" ref={reviewsRef}>
            <div className="review">
              <div className="review__stars">★★★★★</div>
              <p>
                Hi, I recently joined Mbear for the stock trading mentorship program. The classes are
                very nice and they explain everything clearly step by step with lot of patience. Trainers
                are very friendly and supportive. It is a great place to learn stock trading.
              </p>
              <div className="review__who">— Google review</div>
            </div>
            <div className="review">
              <div className="review__stars">★★★★★</div>
              <p>
                I recently completed Trading Floor at Mbear. It was a great learning experience with
                friendly guidance and very clear explanations. Thank you so much sir for the support and
                motivation.
              </p>
              <div className="review__who">— Google review</div>
            </div>
            <div className="review">
              <div className="review__stars">★★★★★</div>
              <p>
                I joined the AI Incorporated stock trading classes at Mbear, and my experience has been
                really good. The trainers explain everything very clearly in a friendly and easy to
                understand way. They patiently clear every doubt and make learning stock trading simple
                even for beginners.
              </p>
              <div className="review__who">— Google review</div>
            </div>
            <div className="review">
              <div className="review__stars">★★★★★</div>
              <p>
                I joined the MCX commodity trading course at Mbear, and everything was explained in a
                very clear and easy to understand way. The training is excellent and very helpful. I had
                a great learning experience.
              </p>
              <div className="review__who">— Google review</div>
            </div>
            </div>
            <button
              type="button"
              className="slider-arrow slider-arrow--next"
              aria-label="Next reviews"
              onClick={() => reviewsRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section" id="faq">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq reveal">
            <details>
              <summary>
                Is there a share market trading course near me in West Bangalore?
                <span className="ind">▾</span>
              </summary>
              <p>
                Yes — MBEAR's free share market trading course runs every Saturday at our Basaveshwara
                Nagar centre, conveniently reachable from Vijayanagar, Rajajinagar, Nagarabhavi, Peenya
                and Mysore Road.
              </p>
            </details>
            <details>
              <summary>
                Do I need any prior knowledge of the stock market?
                <span className="ind">▾</span>
              </summary>
              <p>
                None at all. The session is built for complete beginners as well as those wanting to
                sharpen an existing understanding.
              </p>
            </details>
            <details>
              <summary>
                Is MBEAR SEBI-registered — will you manage my investments or give stock tips?
                <span className="ind">▾</span>
              </summary>
              <p>
                No. MBEAR is an educational session only. We do not manage money, execute trades, or
                issue buy/sell recommendations — our goal is to help you make informed decisions
                independently.
              </p>
            </details>
            <details>
              <summary>
                Can retired individuals and homemakers attend?
                <span className="ind">▾</span>
              </summary>
              <p>
                Yes — the session is designed for students, homemakers, working professionals and
                retired individuals alike.
              </p>
            </details>
            <details>
              <summary>
                Is the masterclass really free?
                <span className="ind">▾</span>
              </summary>
              <p>Yes. The introductory Saturday session is entirely free, with no obligation to enrol in anything further.</p>
            </details>
            <details>
              <summary>
                Can I bring a family member or friend?
                <span className="ind">▾</span>
              </summary>
              <p>Absolutely — we'd just ask that they reserve their own seat, since space is limited to 30 per batch.</p>
            </details>
            <details>
              <summary>
                Can I join the stock market course from Vijayanagar or Nagarabhavi?
                <span className="ind">▾</span>
              </summary>
              <p>
                Yes — MBEAR's Basaveshwara Nagar centre is an easy, familiar drive from both Vijayanagar
                (~2 km) and Nagarabhavi (~5 km), with plenty of students attending from each area every
                Saturday.
              </p>
            </details>
            <details>
              <summary>
                Do you offer stock market classes near Mysore Road?
                <span className="ind">▾</span>
              </summary>
              <p>
                Yes — our Basaveshwara Nagar venue is roughly 4 km from Mysore Road, making it a quick
                and convenient trip for residents there too.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="section section--ink final">
        <div className="container">
          <span className="eyebrow">Ready when you are</span>
          <h2>Learn to read the market — not guess at it.</h2>
          <p className="sub">
            Free live masterclass, every Saturday in Basaveshwara Nagar. Thirty seats a batch. No
            investment advice, no obligation — just a clearer way to think about your money.
          </p>
          <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
            Reserve My Free Seat
          </button>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer>
        <div className="container">
          <div className="foot__grid">
            <div>
              <span className="nav__word" style={{ color: '#F6F2E9' }}>MBEAR</span>
              <p style={{ marginTop: 14, maxWidth: '34ch' }}>
                An initiative of Knowx Innovations Pvt Ltd. Proudly serving Basaveshwara Nagar,
                Vijayanagar, Rajajinagar, Nagarabhavi, Peenya and Mysore Road.
              </p>
            </div>
            <div>
              <h4>Visit</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=MBEAR+Basaveshwar+Nagar+Bengaluru"
                target="_blank"
                rel="noopener"
              >
                2nd Floor, 331 Siddhaiah Puranik Rd, next to Yes Bank, Basaveshwara Nagar, Bengaluru 560079
              </a>
              <a href="tel:+917676601681">7676601681</a>
              <a href="tel:+919886094611">9886094611</a>
            </div>
            <div>
              <h4>More</h4>
              <a href="#faq">FAQ</a>
              <a href="https://knowxindia.com" target="_blank" rel="noopener">Knowx Innovations</a>
              <a href="REPLACE_WITH_YOUR_GOOGLE_BUSINESS_PROFILE_URL" target="_blank" rel="noopener">View us on Google</a>
            </div>
          </div>
          <div className="foot__bottom">
            <span>© 2026 MBEAR, an initiative of Knowx Innovations Pvt Ltd.</span>
            <span>Educational sessions only — not investment advice.</span>
          </div>
        </div>
      </footer>

      {/* ===================== MOBILE STICKY CTA ===================== */}
      <div className="mobile-cta">
        <span>16 of 30 seats reserved</span>
        <button className="btn btn--primary" onClick={() => setModalOpen(true)}>Reserve Seat</button>
      </div>

      {/* ===================== FLOATING WHATSAPP BUTTON ===================== */}
      <a
        className="whatsapp-fab"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20MBEAR%27s%20free%20stock%20market%20masterclass.`}
        target="_blank"
        rel="noopener"
        aria-label="Chat with MBEAR on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="#fff">
          <path d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.9c1.9 1 4 1.6 6 1.6 6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3zm0 22.7c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.2 1.1 1.1-4.1-.2-.4c-1.1-1.7-1.7-3.7-1.7-5.7C5.2 9.5 10 4.7 16 4.7S26.8 9.5 26.8 15.5 22 25.7 16 25.7zm6.1-8.3c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.1.8.3 1.5.5 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z" />
        </svg>
      </a>

      {/* ===================== MODAL / REGISTRATION FORM ===================== */}
      <div className={`modal-backdrop${modalOpen ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
        <div className="modal">
          <button className="modal__close" aria-label="Close" onClick={closeModal}>✕</button>
          {!submitted ? (
            <div>
              <h3>Reserve your free seat</h3>
              <p>This Saturday, 10:30 AM – 12:30 PM · Basaveshwara Nagar. Only 30 seats per batch.</p>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New MBEAR Masterclass Registration" />
                <div className="field">
                  <label htmlFor="mb-name">Name</label>
                  <input id="mb-name" name="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="mb-phone">Phone</label>
                  <input id="mb-phone" name="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="mb-email">Email</label>
                  <input id="mb-email" name="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="mb-occupation">Occupation</label>
                  <select id="mb-occupation" name="occupation" required defaultValue="">
                    <option value="">Select one</option>
                    <option>Student</option>
                    <option>Homemaker</option>
                    <option>Working Professional</option>
                    <option>Retired</option>
                  </select>
                </div>
                <button className="btn btn--primary" type="submit" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Confirm My Free Seat'}
                </button>
                {submitError && (
                  <p className="modal__note">
                    Something went wrong — please call/WhatsApp 7676601681 to reserve your seat.
                  </p>
                )}
                <p className="modal__note">
                  Educational session only — no investment advice given. We'll confirm by WhatsApp/SMS.
                </p>
              </form>
            </div>
          ) : (
            <div className="form-success show">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#1F5D50" strokeWidth="2" />
                <path d="M12 20l6 6 10-12" stroke="#1F5D50" strokeWidth="2.4" fill="none" />
              </svg>
              <h3>Seat reserved</h3>
              <p>We'll confirm the details by WhatsApp or SMS shortly. See you Saturday.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
