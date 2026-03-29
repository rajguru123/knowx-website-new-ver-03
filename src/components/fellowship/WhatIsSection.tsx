// components/fellowship/WhatIsSection.tsx
import { COMPARISON_TABLE } from '@/lib/fellowship-data'

export default function WhatIsSection() {
  return (
    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{
        maxWidth: 1200,
        margin:   '0 auto',
        padding:  '0 24px',
        display:  'grid',
        gridTemplateColumns: '1fr 1fr',
        gap:      64,
        alignItems: 'center',
      }} className="whatis-grid">

        {/* LEFT */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 12 }}>
            What Is This Program
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255', marginBottom: 20, lineHeight: 1.25 }}>
            Learn Inside a Real Engineering Company
          </h2>
          <p style={{ fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
            The Knowx Product Engineering Fellowship is a hands-on, industry-integrated
            program where you work on production-grade products alongside experienced
            engineers — the same products we build for our paying clients.
          </p>
          <p style={{ fontSize: 15, color: '#4A5568', lineHeight: 1.8, marginBottom: 28 }}>
            This is not a classroom. This is not a simulation. You solve real engineering
            problems that real companies bring to Knowx — and you build a portfolio that
            no competitor can replicate.
          </p>
          <div style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          8,
            background:   '#FFF4EE',
            border:       '1.5px solid #F0C8A0',
            borderRadius: 10,
            padding:      '12px 18px',
            fontSize:     13,
            fontWeight:   700,
            color:        '#E85400',
          }}>
            🏭 Bangalore · 10+ Years · 100+ Products Built
          </div>
        </div>

        {/* RIGHT — Comparison table */}
        <div>
          <div style={{
            borderRadius: 12,
            overflow:     'hidden',
            border:       '1.5px solid #E0E4F0',
            boxShadow:    '0 8px 32px rgba(15,34,85,0.07)',
          }}>
            {/* Header row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}>
              <div style={{ background: '#F5F6FA', padding: '14px 20px', fontSize: 13, fontWeight: 700, color: '#8896AA', textAlign: 'center' }}>
                Others
              </div>
              <div style={{ background: '#0F2255', padding: '14px 20px', fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'center' }}>
                ⚡ Knowx
              </div>
            </div>
            {/* Data rows */}
            {COMPARISON_TABLE.map((row, i) => (
              <div key={i} style={{
                display:     'grid',
                gridTemplateColumns: '1fr 1fr',
                borderTop:   '1px solid #E0E4F0',
              }}>
                <div style={{
                  padding:    '14px 20px',
                  fontSize:   14,
                  color:      '#8896AA',
                  display:    'flex',
                  alignItems: 'center',
                  gap:        8,
                  background: i % 2 === 0 ? '#fff' : '#FAFBFF',
                }}>
                  <span style={{ color: '#ccc', fontSize: 12 }}>✗</span> {row.others}
                </div>
                <div style={{
                  padding:    '14px 20px',
                  fontSize:   14,
                  color:      '#0F2255',
                  fontWeight: 600,
                  display:    'flex',
                  alignItems: 'center',
                  gap:        8,
                  background: i % 2 === 0 ? '#FFF4EE' : '#FFF8F5',
                }}>
                  <span style={{ color: '#E85400', fontSize: 12 }}>✓</span> {row.knowx}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .whatis-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
