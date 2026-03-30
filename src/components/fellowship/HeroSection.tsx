'use client'
// components/fellowship/HeroSection.tsx
import Image from 'next/image'

const TRUST_PILLS = [
  '✔ Real Product Development',
  '✔ Internship Certificate Included',
  '✔ Industry Mentors',
]

const STATS = [
  { num: '2000+', lbl: 'Engineers Trained' },
  { num: '100+',  lbl: 'Products Built' },
  { num: '10+',   lbl: 'Years Experience' },
  { num: 'Bangalore', lbl: 'India' },
]

export default function HeroSection() {
  const openPopup = () => {
    document.getElementById('fellowshipPopup')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  return (
    <section id="overview" style={{
      paddingTop:    96,   // offset for sticky nav
      paddingBottom: 0,
      background:    'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 60%, #F0F4FF 100%)',
      overflow:      'hidden',
    }}>
      <div style={{
        maxWidth: 1200,
        margin:   '0 auto',
        padding:  '48px 24px 0',
        display:  'grid',
        gridTemplateColumns: '1fr 1fr',
        gap:      48,
        alignItems: 'center',
      }}
      className="hero-grid"
      >
        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          <div style={{
            display:     'inline-flex',
            alignItems:  'center',
            gap:         8,
            background:  'rgba(232,84,0,0.08)',
            border:      '1px solid rgba(232,84,0,0.2)',
            color:       '#E85400',
            fontSize:    12,
            fontWeight:  700,
            padding:     '5px 14px',
            borderRadius:50,
            letterSpacing: 0.5,
            marginBottom: 20,
          }}>
            🏆 Real Engineering Company · Not a Training Institute
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize:   'clamp(30px, 4.5vw, 50px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color:      '#0F2255',
            marginBottom: 20,
          }}>
            Become a Product Engineer{' '}
            <span style={{ color: '#E85400' }}>
              with Knowx Engineering Fellowship
            </span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize:   18,
            color:      '#4A5568',
            lineHeight: 1.7,
            marginBottom: 28,
            maxWidth:   480,
          }}>
            Work on real AI, IoT, and embedded products inside a real
            engineering company.
          </p>

          {/* Trust pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            {TRUST_PILLS.map((p) => (
              <span key={p} style={{
                fontSize:     13,
                fontWeight:   600,
                color:        '#0F2255',
                background:   '#EEF3FF',
                padding:      '6px 14px',
                borderRadius: 50,
                border:       '1px solid #C8D8F8',
              }}>
                {p}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
            <button
              onClick={openPopup}
              style={{
                background:   '#E85400',
                color:        '#fff',
                fontSize:     16,
                fontWeight:   700,
                padding:      '15px 32px',
                borderRadius: 10,
                border:       'none',
                cursor:       'pointer',
                boxShadow:    '0 4px 18px rgba(232,84,0,0.28)',
                transition:   'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget).style.opacity = '0.88'; (e.currentTarget).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget).style.opacity = '1';    (e.currentTarget).style.transform = 'translateY(0)' }}
            >
              ⚡ Apply Now →
            </button>
            <button
              onClick={openPopup}
              style={{
                background:   'transparent',
                color:        '#0F2255',
                fontSize:     16,
                fontWeight:   700,
                padding:      '14px 32px',
                borderRadius: 10,
                border:       '2px solid #0F2255',
                cursor:       'pointer',
                transition:   'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget).style.background = '#0F2255'; (e.currentTarget).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget).style.background = 'transparent'; (e.currentTarget).style.color = '#0F2255' }}
            >
              📞 Book Free Counselling
            </button>
          </div>

          {/* Stats bar */}
          <div style={{
            display:     'flex',
            flexWrap:    'wrap',
            gap:         24,
            paddingTop:  20,
            borderTop:   '1px solid #E0E4F0',
          }}>
            {STATS.map((s) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: 'Georgia, serif',
                  fontSize:   22,
                  fontWeight: 700,
                  color:      '#E85400',
                  lineHeight: 1,
                }}>
                  {s.num}
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#8896AA', lineHeight: 1.3 }}>
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <div style={{
          position:     'relative',
          borderRadius: 16,
          overflow:     'hidden',
          boxShadow:    '0 24px 64px rgba(15,34,85,0.15)',
          lineHeight:   0,
        }}>
          <Image
            src="/images/hero-banner.png"
            alt="Knowx Product Engineering — AI IoT Embedded Systems lab"
            width={768}
            height={512}
            priority
            style={{
              width:        '100%',
              height:       'auto',
              display:      'block',
              borderRadius: 16,
            }}
          />
          {/* Overlay badge on image */}
          <div style={{
            position:   'absolute',
            bottom:     16,
            left:       16,
            background: 'rgba(15,34,85,0.85)',
            backdropFilter: 'blur(8px)',
            border:     '1px solid rgba(255,255,255,0.15)',
            borderRadius: 10,
            padding:    '10px 16px',
            color:      '#fff',
          }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>
              Live inside our lab
            </div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>
              Real Hardware · Real Projects · Real Mentors
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave spacer */}
      <div style={{ height: 48 }} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
