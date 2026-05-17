'use client'
// components/fellowship/WhyKnowx.tsx
import { WHY_KNOWX } from '@/lib/fellowship-data'

export default function WhyKnowx() {
  return (
    <section style={{ background: '#0F2255', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            Why Knowx
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#fff' }}>
            Not a Training Institute — A Product Engineering Company
          </h2>
        </div>

        {/* Single horizontal bar */}
        <div style={{
          display:      'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border:       '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14,
          overflow:     'hidden',
          marginBottom: 48,
        }} className="why-grid">
          {WHY_KNOWX.map((w, i) => (
            <div key={w.title} style={{
              padding:     '32px 24px',
              borderRight: i < WHY_KNOWX.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              background:  'rgba(255,255,255,0.03)',
              transition:  'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{w.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{w.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{w.desc}</div>
            </div>
          ))}
        </div>

        {/* Numbers row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {[
            { num: '2000+', lbl: 'Engineers Trained' },
            { num: '100+',  lbl: 'Products Built'    },
            { num: '10+',   lbl: 'Years Experience'  },
          ].map((s) => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: '#E85400', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
