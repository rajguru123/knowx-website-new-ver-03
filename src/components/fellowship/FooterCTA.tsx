'use client'
// components/fellowship/FooterCTA.tsx

export default function FooterCTA() {
  const openPopup = () => {
    document.getElementById('fellowshipPopup')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  return (
    <section style={{
      background: 'linear-gradient(135deg, #E85400 0%, #FF7A2E 100%)',
      padding:    '56px 0',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{
          fontSize:     'clamp(24px, 3.5vw, 38px)',
          fontWeight:   800,
          color:        '#fff',
          marginBottom: 12,
          lineHeight:   1.2,
        }}>
          Ready to Become a Product Engineer?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>
          Apply now and start your journey into real product development.
          Our counsellor will call you within 24 hours.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button
            onClick={openPopup}
            style={{
              background:   '#fff',
              color:        '#E85400',
              fontSize:     16,
              fontWeight:   800,
              padding:      '15px 36px',
              borderRadius: 10,
              border:       'none',
              cursor:       'pointer',
              boxShadow:    '0 4px 20px rgba(0,0,0,0.15)',
              transition:   'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
          >
            ⚡ Apply Now →
          </button>
          <a
            href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20am%20interested%20in%20the%20Product%20Engineering%20Fellowship."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          8,
              background:   '#25D366',
              color:        '#fff',
              fontSize:     16,
              fontWeight:   700,
              padding:      '15px 32px',
              borderRadius: 10,
              textDecoration: 'none',
              boxShadow:    '0 4px 20px rgba(0,0,0,0.15)',
              transition:   'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
          >
            💬 WhatsApp Us
          </a>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
          +91 98860 94611 · Bangalore · Online & Offline Batches Available
        </p>
      </div>
    </section>
  )
}
