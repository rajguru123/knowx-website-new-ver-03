// components/fellowship/Outcomes.tsx
import { OUTCOMES } from '@/lib/fellowship-data'

export default function Outcomes() {
  return (
    <section style={{ background: '#F0F7F0', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#2E7D32', marginBottom: 10 }}>
            What You Get
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255' }}>
            What You Leave With
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
          className="outcomes-grid">
          {OUTCOMES.map((o) => (
            <div key={o.title} style={{
              background:   '#fff',
              border:       '1.5px solid #A5D6A7',
              borderTop:    '3px solid #2E7D32',
              borderRadius: 12,
              padding:      '28px 22px',
              transition:   'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(46,125,50,0.12)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{o.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0F2255', marginBottom: 10 }}>{o.title}</div>
              <div style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{o.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .outcomes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .outcomes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
