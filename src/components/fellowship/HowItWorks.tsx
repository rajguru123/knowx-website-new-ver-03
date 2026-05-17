// components/fellowship/HowItWorks.tsx
import { HOW_STEPS } from '@/lib/fellowship-data'

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: '#F5F6FA', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            The Process
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255' }}>
            From Enrolment to Job-Ready
          </h2>
        </div>

        {/* Single horizontal row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}
          className="how-grid">
          {HOW_STEPS.map((s, i) => (
            <div key={s.num} style={{ position: 'relative' }}>
              {/* Connector arrow between blocks */}
              {i < HOW_STEPS.length - 1 && (
                <div style={{
                  position:   'absolute',
                  right:      -12,
                  top:        '50%',
                  transform:  'translateY(-50%)',
                  zIndex:     2,
                  fontSize:   20,
                  color:      '#E85400',
                }}>
                  →
                </div>
              )}
              <div style={{
                background:   '#fff',
                border:       '1.5px solid #E0E4F0',
                borderTop:    i === 0 ? '3px solid #E85400' : `3px solid #E0E4F0`,
                borderRadius: 12,
                padding:      '28px 22px',
                margin:       '0 12px',
                height:       '100%',
                boxSizing:    'border-box',
              }}>
                <div style={{
                  display:      'inline-flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                  width:        36,
                  height:       36,
                  background:   '#0F2255',
                  color:        '#fff',
                  fontSize:     12,
                  fontWeight:   800,
                  borderRadius: 8,
                  marginBottom: 14,
                  fontFamily:   'monospace',
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#0F2255', marginBottom: 10 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .how-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .how-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
