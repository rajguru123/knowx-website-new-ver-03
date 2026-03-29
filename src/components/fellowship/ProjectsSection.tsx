'use client'
// components/fellowship/ProjectsSection.tsx
import { useState } from 'react'
import { TRACKS } from '@/lib/fellowship-data'

export default function ProjectsSection() {
  const [active, setActive] = useState(0)
  const track = TRACKS[active]

  return (
    <section id="projects" style={{ background: '#0F2255', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            Real Products
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Build Real Products —<br />Not Assignments. Not Simulations.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto' }}>
            Every project is based on real client work at Knowx. You work on the same architecture
            our commercial clients paid for.
          </p>
        </div>

        {/* Tab row — single horizontal row */}
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            12,
          marginBottom:   40,
          flexWrap:       'wrap',
        }}>
          {TRACKS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          8,
                padding:      '12px 28px',
                borderRadius: 50,
                border:       `2px solid ${active === i ? t.color : 'rgba(255,255,255,0.2)'}`,
                background:   active === i ? t.color : 'transparent',
                color:        active === i ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize:     14,
                fontWeight:   700,
                cursor:       'pointer',
                transition:   'all 0.2s',
              }}
            >
              <span>{t.icon}</span>
              <span>{t.title}</span>
            </button>
          ))}
        </div>

        {/* Projects for active tab — 3 cards in a row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="projects-cards-grid">
          {track.projects.map((p, i) => (
            <div key={i} style={{
              background:   'rgba(255,255,255,0.05)',
              border:       `1.5px solid rgba(255,255,255,0.1)`,
              borderTop:    `3px solid ${track.color}`,
              borderRadius: 12,
              padding:      '24px',
              transition:   'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
            >
              <div style={{
                display:      'inline-block',
                background:   track.color,
                color:        '#fff',
                fontSize:     11,
                fontWeight:   700,
                padding:      '3px 10px',
                borderRadius: 50,
                marginBottom: 12,
              }}>
                {track.title}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.35 }}>
                {p.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.points.map((pt) => (
                  <li key={pt} style={{
                    fontSize:   13,
                    color:      'rgba(255,255,255,0.65)',
                    display:    'flex',
                    alignItems: 'flex-start',
                    gap:        8,
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: track.color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>✦</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div style={{
          marginTop:    32,
          background:   'rgba(232,84,0,0.15)',
          border:       '1px solid rgba(232,84,0,0.3)',
          borderRadius: 12,
          padding:      '18px 28px',
          textAlign:    'center',
          fontSize:     14,
          color:        'rgba(255,255,255,0.85)',
          fontStyle:    'italic',
        }}>
          These are not invented exercises. Knowx builds these for real clients —
          fellows work on the same architecture.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .projects-cards-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
