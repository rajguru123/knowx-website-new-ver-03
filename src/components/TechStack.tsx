// components/fellowship/TechStack.tsx
import { TECH_STACK } from '@/lib/fellowship-data'

export default function TechStack() {
  return (
    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            Technology
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255' }}>
            Tools & Technologies You Will Work With
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {TECH_STACK.map((row) => (
            <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{
                minWidth:     120,
                fontSize:     12,
                fontWeight:   700,
                color:        '#8896AA',
                textTransform:'uppercase',
                letterSpacing:1,
                flexShrink:   0,
              }}>
                {row.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {row.items.map((item) => (
                  <span key={item} style={{
                    fontSize:     13,
                    fontWeight:   600,
                    padding:      '6px 14px',
                    borderRadius: 50,
                    background:   '#F5F6FA',
                    border:       '1.5px solid #E0E4F0',
                    color:        '#0F2255',
                    fontFamily:   'monospace',
                    transition:   'all 0.15s',
                    cursor:       'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#FFF4EE';
                    (e.currentTarget as HTMLElement).style.borderColor = '#F0C8A0';
                    (e.currentTarget as HTMLElement).style.color = '#E85400';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#F5F6FA';
                    (e.currentTarget as HTMLElement).style.borderColor = '#E0E4F0';
                    (e.currentTarget as HTMLElement).style.color = '#0F2255';
                  }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
