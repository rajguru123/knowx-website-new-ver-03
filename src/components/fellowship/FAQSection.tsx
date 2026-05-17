'use client'
// components/fellowship/FAQSection.tsx
import { useState } from 'react'
import { FAQS } from '@/lib/fellowship-data'

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  // Split into two columns
  const left  = FAQS.slice(0, 4)
  const right = FAQS.slice(4)

  return (
    <section id="faq" style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E85400', marginBottom: 10 }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#0F2255', marginBottom: 12 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 15, color: '#4A5568', maxWidth: 480, margin: '0 auto' }}>
            Everything you need to know before applying to the
            Knowx Product Engineering Fellowship.
          </p>
        </div>

        {/* 2-column FAQ grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          className="faq-grid">
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {left.map((f, i) => (
              <FAQItem key={i} index={i} faq={f} open={open} toggle={toggle} />
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {right.map((f, i) => (
              <FAQItem key={i + 4} index={i + 4} faq={f} open={open} toggle={toggle} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ fontSize: 15, color: '#4A5568', marginBottom: 16 }}>
            Still have questions? Our counsellor will call you within 24 hours.
          </p>
          <a
            href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20have%20a%20question%20about%20the%20Product%20Engineering%20Fellowship."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          8,
              background:   '#25D366',
              color:        '#fff',
              fontSize:     15,
              fontWeight:   700,
              padding:      '13px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              boxShadow:    '0 4px 16px rgba(37,211,102,0.25)',
            }}
          >
            💬 WhatsApp Your Question →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function FAQItem({
  index, faq, open, toggle
}: {
  index: number
  faq: { q: string; a: string }
  open: number | null
  toggle: (i: number) => void
}) {
  const isOpen = open === index
  return (
    <div style={{
      border:       '1.5px solid',
      borderColor:  isOpen ? '#E85400' : '#E0E4F0',
      borderRadius: 10,
      overflow:     'hidden',
      transition:   'border-color 0.2s',
    }}>
      <button
        onClick={() => toggle(index)}
        aria-expanded={isOpen}
        style={{
          width:          '100%',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            12,
          padding:        '16px 20px',
          background:     isOpen ? '#FFF4EE' : '#fff',
          border:         'none',
          cursor:         'pointer',
          textAlign:      'left',
          transition:     'background 0.2s',
        }}
      >
        <span style={{
          fontSize:   14,
          fontWeight: 700,
          color:      '#0F2255',
          lineHeight: 1.4,
        }}>
          {faq.q}
        </span>
        <span style={{
          fontSize:    18,
          fontWeight:  400,
          color:       '#E85400',
          flexShrink:  0,
          transform:   isOpen ? 'rotate(45deg)' : 'rotate(0)',
          transition:  'transform 0.2s',
          lineHeight:  1,
        }}>
          +
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding:    '0 20px 18px',
          fontSize:   14,
          color:      '#4A5568',
          lineHeight: 1.75,
          background: '#FFF8F5',
          borderTop:  '1px solid #F0C8A0',
          paddingTop: 14,
        }}>
          {faq.a}
        </div>
      )}
    </div>
  )
}
