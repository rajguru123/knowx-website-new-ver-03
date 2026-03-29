'use client'
// components/fellowship/StickyNav.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Overview',    href: '#overview'  },
  { label: 'Tracks',      href: '#tracks'    },
  { label: 'Projects',    href: '#projects'  },
  { label: 'How It Works',href: '#how'       },
  { label: 'FAQ',         href: '#faq'       },
]

export default function StickyNav() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openPopup = () => {
    document.getElementById('fellowshipPopup')?.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  return (
    <nav style={{
      position:   'fixed',
      top:        0,
      left:       0,
      right:      0,
      zIndex:     1000,
      background: '#fff',
      boxShadow:  scrolled ? '0 2px 20px rgba(15,34,85,0.1)' : 'none',
      borderBottom: scrolled ? 'none' : '1px solid #E0E4F0',
      transition: 'box-shadow 0.3s',
    }}>
      <div style={{
        maxWidth:      1200,
        margin:        '0 auto',
        padding:       '0 24px',
        height:        64,
        display:       'flex',
        alignItems:    'center',
        justifyContent:'space-between',
        gap:           16,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontWeight: 800,
            fontSize:   18,
            color:      '#0F2255',
            letterSpacing: '-0.5px',
          }}>
            KNOWX
          </span>
          <span style={{
            fontSize:   11,
            fontWeight: 600,
            color:      '#8896AA',
            paddingLeft: 8,
            borderLeft: '1px solid #E0E4F0',
          }}>
            Product Engineering
          </span>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontSize:     13,
              fontWeight:   600,
              color:        '#4A5568',
              padding:      '8px 14px',
              borderRadius: 8,
              textDecoration: 'none',
              transition:   'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#0F2255'; (e.target as HTMLElement).style.background = '#F5F6FA' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = '#4A5568'; (e.target as HTMLElement).style.background = 'transparent' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href="https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20am%20interested%20in%20the%20Product%20Engineering%20Fellowship."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:      'flex',
              alignItems:   'center',
              gap:          6,
              background:   '#25D366',
              color:        '#fff',
              fontSize:     13,
              fontWeight:   700,
              padding:      '8px 16px',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            💬 WhatsApp
          </a>
          <button
            onClick={openPopup}
            style={{
              background:   '#E85400',
              color:        '#fff',
              fontSize:     13,
              fontWeight:   700,
              padding:      '8px 18px',
              borderRadius: 8,
              border:       'none',
              cursor:       'pointer',
              whiteSpace:   'nowrap',
            }}
          >
            Apply Now →
          </button>
          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display:    'none',
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              fontSize:   22,
              color:      '#0F2255',
            }}
            className="hamburger"
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background:   '#fff',
          borderTop:    '1px solid #E0E4F0',
          padding:      '16px 24px',
          display:      'flex',
          flexDirection:'column',
          gap:          4,
        }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:     15,
                fontWeight:   600,
                color:        '#0F2255',
                padding:      '10px 0',
                borderBottom: '1px solid #F5F6FA',
                textDecoration: 'none',
              }}>
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openPopup() }}
            style={{
              marginTop:    12,
              background:   '#E85400',
              color:        '#fff',
              fontSize:     15,
              fontWeight:   700,
              padding:      '12px',
              borderRadius: 10,
              border:       'none',
              cursor:       'pointer',
              width:        '100%',
            }}>
            Apply Now →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
