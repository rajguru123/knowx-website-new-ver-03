'use client'
// components/fellowship/TracksSection.tsx
import Link from 'next/link'
import { TRACKS } from '@/lib/fellowship-data'

export default function TracksSection() {
  const openPopup = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('fellowshipPopup')?.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <section id="tracks" style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            Three Tracks
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255', marginBottom: 12 }}>
            Choose Your Engineering Track
          </h2>
          <p style={{ fontSize: 15, color: '#4A5568', maxWidth: 520, margin: '0 auto' }}>
            All three tracks include real product development, internship certificate,
            and mentorship from engineers who have shipped commercially.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          className="tracks-grid">
          {TRACKS.map((t) => (
            <div key={t.id} style={{
              background:   '#fff',
              border:       `1.5px solid ${t.borderColor}`,
              borderRadius: 14,
              overflow:     'hidden',
              display:      'flex',
              flexDirection:'column',
              boxShadow:    '0 4px 20px rgba(15,34,85,0.06)',
              transition:   'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(15,34,85,0.12)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(15,34,85,0.06)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              {/* Top accent */}
              <div style={{ background: t.color, height: 5 }} />

              {/* Card header */}
              <div style={{ background: t.bgColor, padding: '24px 24px 18px' }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: t.color, marginBottom: 4 }}>
                  Track
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#0F2255', lineHeight: 1.2 }}>
                  {t.title}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#4A5568' }}>
                  {t.subtitle}
                </div>
              </div>

              {/* Tags */}
              <div style={{ padding: '16px 24px', borderBottom: '1px solid #E0E4F0', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {t.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize:     11,
                    fontWeight:   600,
                    padding:      '3px 10px',
                    borderRadius: 50,
                    background:   '#F5F6FA',
                    border:       '1px solid #E0E4F0',
                    color:        '#4A5568',
                    fontFamily:   'monospace',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                {[
                  { label: '⏱ Duration', val: t.duration },
                  { label: '🖥️ Mode',     val: t.mode },
                  { label: '💰 Fee',      val: t.fee },
                  { label: '📅 EMI',      val: t.emi },
                ].map((d) => (
                  <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: '#8896AA', fontWeight: 600 }}>{d.label}</span>
                    <span style={{ color: '#0F2255', fontWeight: 700 }}>{d.val}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href={t.href} style={{
                  display:      'block',
                  textAlign:    'center',
                  background:   t.color,
                  color:        '#fff',
                  fontSize:     14,
                  fontWeight:   700,
                  padding:      '12px',
                  borderRadius: 9,
                  textDecoration: 'none',
                  transition:   'opacity 0.2s',
                }}>
                  View Full Program →
                </Link>
                <button onClick={openPopup} style={{
                  background:   'transparent',
                  color:        t.color,
                  fontSize:     13,
                  fontWeight:   700,
                  padding:      '10px',
                  borderRadius: 9,
                  border:       `1.5px solid ${t.color}`,
                  cursor:       'pointer',
                  transition:   'all 0.2s',
                }}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .tracks-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
