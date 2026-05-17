'use client'
// components/fellowship/WhoSection.tsx
import { WHO_CARDS } from '@/lib/fellowship-data'

export default function WhoSection() {
  return (
    <section style={{ background: '#F5F6FA', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            Who Should Apply
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255' }}>
            Who Is This Fellowship For?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
          className="who-grid">
          {WHO_CARDS.map((c) => (
            <div key={c.title} style={{
              background:   '#fff',
              border:       '1.5px solid #E0E4F0',
              borderRadius: 12,
              padding:      '28px 22px',
              transition:   'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(15,34,85,0.1)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0F2255', marginBottom: 12 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {c.lines.map((l) => (
                  <li key={l} style={{ fontSize: 13, color: '#4A5568', display: 'flex', alignItems: 'flex-start', gap: 7, lineHeight: 1.5 }}>
                    <span style={{ color: '#E85400', fontSize: 10, marginTop: 3, flexShrink: 0 }}>✦</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .who-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .who-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
