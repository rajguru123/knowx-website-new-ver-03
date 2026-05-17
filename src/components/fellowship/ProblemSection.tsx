// components/fellowship/ProblemSection.tsx
export default function ProblemSection() {
  const cards = [
    { icon: '🏫', title: 'Universities', desc: 'Teach theory, not product development. Syllabi designed 15 years ago.' },
    { icon: '💼', title: 'Internships',  desc: 'Give busywork — not real engineering. Students observe, not build.' },
    { icon: '🏢', title: 'Job Market',   desc: 'Wants builders who have shipped products — not degree holders alone.' },
  ]

  return (
    <section style={{ background: '#FFF8F5', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 12 }}>
          Why Most Engineering Graduates Struggle
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#0F2255', marginBottom: 48, lineHeight: 1.25 }}>
          95% of Engineering Students Graduate<br />
          Without Building a Single Real Product
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}
          className="problem-grid">
          {cards.map((c) => (
            <div key={c.title} style={{
              background: '#fff',
              border:     '1.5px solid #F0C8A0',
              borderRadius: 12,
              padding:    '28px 24px',
              textAlign:  'center',
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0F2255', marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.65 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{
          display:    'inline-block',
          background: '#fff',
          border:     '1.5px solid #E0E4F0',
          borderLeft: '4px solid #E85400',
          borderRadius: 10,
          padding:    '18px 28px',
          maxWidth:   680,
          textAlign:  'left',
        }}>
          <p style={{ fontSize: 15, color: '#4A5568', lineHeight: 1.7, fontStyle: 'italic' }}>
            "Send us engineers who have built real-time products with their hands — not just degree holders."
          </p>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#8896AA', marginTop: 8 }}>
            — Hiring managers at Bosch, Tata Elxsi and EV startups in Bangalore
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .problem-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
