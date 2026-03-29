'use client'
// components/fellowship/FellowshipPopup.tsx
import { useState, useEffect } from 'react'

const TRACKS_OPTIONS = [
  'Embedded AI & IoT Product Engineer',
  'Generative AI Product Engineer',
  'Full Stack Product Engineer',
  'Not Decided Yet — Need Guidance',
]

const MODE_OPTIONS = ['Online', 'Offline — Bangalore']

type FormState = {
  name: string
  phone: string
  email: string
  track: string
  mode: string
  org: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

export default function FellowshipPopup() {
  const [view, setView]       = useState<'form' | 'success' | 'error'>('form')
  const [loading, setLoading] = useState(false)
  const [form, setForm]       = useState<FormState>({
    name: '', phone: '', email: '', track: '', mode: '', org: '', message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closePopup = () => {
    document.getElementById('fellowshipPopup')?.classList.remove('open')
    document.body.style.overflow = ''
    setTimeout(() => { setView('form'); setForm({ name:'',phone:'',email:'',track:'',mode:'',org:'',message:'' }); setErrors({}) }, 300)
  }

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim())                           e.name  = 'Please enter your full name'
    if (!/^[6-9][0-9]{9}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (!form.track)                                  e.track = 'Please select a track'
    if (!form.mode)                                   e.mode  = 'Please select a mode'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/submit-lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:         form.name.trim(),
          phone:        form.phone.trim(),
          email:        form.email.trim(),
          course:       form.track,
          mode:         form.mode,
          organisation: form.org.trim(),
          message:      form.message.trim(),
          source:       'Pillar Page — Fellowship',
        }),
      })
      const data = await res.json()
      setView(res.ok && data.success ? 'success' : 'error')
    } catch {
      setView('error')
    } finally {
      setLoading(false)
    }
  }

  const waLink = `https://wa.me/919886094611?text=${encodeURIComponent(
    `Hi Knowx, I just applied for the ${form.track || 'Product Engineering Fellowship'}. Please share details.`
  )}`

  return (
    <div
      id="fellowshipPopup"
      onClick={(e) => { if (e.target === e.currentTarget) closePopup() }}
      style={{
        display:        'none',
        position:       'fixed',
        inset:          0,
        background:     'rgba(10,15,40,0.72)',
        backdropFilter: 'blur(4px)',
        zIndex:         9999,
        alignItems:     'center',
        justifyContent: 'center',
        padding:        16,
      }}
      className="popup-overlay"
    >
      <div style={{
        background:   '#fff',
        borderRadius: 14,
        width:        '100%',
        maxWidth:     560,
        maxHeight:    '92vh',
        overflowY:    'auto',
        boxShadow:    '0 20px 60px rgba(0,0,0,0.3)',
        animation:    'popupSlideUp 0.22s ease',
      }}>
        {/* Header */}
        <div style={{
          background:   '#0F2255',
          padding:      '18px 24px 14px',
          borderRadius: '14px 14px 0 0',
          display:      'flex',
          alignItems:   'flex-start',
          justifyContent: 'space-between',
          gap:          12,
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 3 }}>
              Apply for the Fellowship
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              Our counsellor will call you within 24 hours.
            </div>
          </div>
          <button
            onClick={closePopup}
            aria-label="Close"
            style={{
              background:   'rgba(255,255,255,0.1)',
              border:       'none',
              color:        '#fff',
              fontSize:     14,
              width:        28,
              height:       28,
              borderRadius: '50%',
              cursor:       'pointer',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              flexShrink:   0,
              marginTop:    2,
            }}
          >
            ✕
          </button>
        </div>

        {/* Form view */}
        {view === 'form' && (
          <form onSubmit={handleSubmit} style={{ padding: '20px 24px 24px' }} noValidate>
            {/* Row 1: Name + Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}
              className="form-row">
              <Field label="Full Name *" error={errors.name}>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle(!!errors.name)}
                />
              </Field>
              <Field label="Mobile / WhatsApp *" error={errors.phone}>
                <div style={{ display: 'flex', alignItems: 'center', border: `1.5px solid ${errors.phone ? '#E85400' : '#E0E4F0'}`, borderRadius: 8, background: '#FAFBFF', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 10px', fontSize: 12, fontWeight: 700, color: '#0F2255', background: '#EEF3FF', borderRight: '1px solid #E0E4F0', flexShrink: 0 }}>
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    maxLength={10}
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '') }))}
                    style={{ flex: 1, border: 'none', background: 'transparent', padding: '9px 12px', fontSize: 14, fontFamily: 'inherit', outline: 'none', color: '#0F2255' }}
                  />
                </div>
              </Field>
            </div>

            {/* Row 2: Email + Track */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}
              className="form-row">
              <Field label="Email Address *" error={errors.email}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle(!!errors.email)}
                />
              </Field>
              <Field label="Track Interested *" error={errors.track}>
                <select
                  value={form.track}
                  onChange={e => setForm(f => ({ ...f, track: e.target.value }))}
                  style={{ ...inputStyle(!!errors.track), cursor: 'pointer' }}
                >
                  <option value="">Select a track</option>
                  {TRACKS_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
            </div>

            {/* Row 3: Mode + Org */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}
              className="form-row">
              <Field label="Preferred Mode *" error={errors.mode}>
                <div style={{ display: 'flex', gap: 10 }}>
                  {MODE_OPTIONS.map(m => (
                    <label key={m} style={{ flex: 1, cursor: 'pointer' }}>
                      <input type="radio" name="mode" value={m} checked={form.mode === m}
                        onChange={() => setForm(f => ({ ...f, mode: m }))}
                        style={{ display: 'none' }} />
                      <div style={{
                        textAlign:  'center',
                        padding:    '9px 6px',
                        border:     `1.5px solid ${form.mode === m ? '#E85400' : '#E0E4F0'}`,
                        borderRadius: 8,
                        fontSize:   12,
                        fontWeight: 700,
                        color:      form.mode === m ? '#E85400' : '#4A5568',
                        background: form.mode === m ? '#FFF4EE' : '#FAFBFF',
                        transition: 'all 0.15s',
                      }}>
                        {m === 'Online' ? '🌐 Online' : '🏫 Offline'}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.mode && <div style={{ fontSize: 11, color: '#E85400', marginTop: 3, fontWeight: 600 }}>{errors.mode}</div>}
              </Field>
              <Field label="College / Organisation">
                <input
                  type="text"
                  placeholder="e.g. VTU, Bosch"
                  value={form.org}
                  onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                  style={inputStyle(false)}
                />
              </Field>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0F2255', marginBottom: 5 }}>
                Your Message
              </label>
              <textarea
                placeholder="Any questions or specific requirements?"
                rows={2}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle(false), resize: 'none' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width:        '100%',
                background:   loading ? '#ccc' : 'linear-gradient(135deg, #E85400, #FF7A2E)',
                color:        '#fff',
                fontSize:     15,
                fontWeight:   800,
                padding:      '14px',
                borderRadius: 10,
                border:       'none',
                cursor:       loading ? 'not-allowed' : 'pointer',
                boxShadow:    '0 4px 16px rgba(232,84,0,0.25)',
                transition:   'opacity 0.2s',
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                gap:          8,
              }}
            >
              {loading ? (
                <><span style={{ animation: 'spin 0.7s linear infinite', display: 'inline-block' }}>⟳</span> Submitting...</>
              ) : (
                '⚡ Apply for the Fellowship'
              )}
            </button>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#8896AA', marginTop: 10 }}>
              🔒 Your details are safe. We never share your information.
            </p>
          </form>
        )}

        {/* Success view */}
        {view === 'success' && (
          <div style={{ padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#0F2255', marginBottom: 10 }}>You&apos;re all set!</div>
            <div style={{ fontSize: 15, color: '#4A5568', lineHeight: 1.7, marginBottom: 28, maxWidth: 340, margin: '0 auto 28px' }}>
              Thank you, <strong>{form.name}</strong>. Our counsellor will call{' '}
              <strong>+91 {form.phone}</strong> within 24 hours.
            </div>
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                gap:          8,
                background:   '#25D366',
                color:        '#fff',
                fontSize:     14,
                fontWeight:   700,
                padding:      '12px 24px',
                borderRadius: 10,
                textDecoration: 'none',
                marginBottom: 16,
              }}>
              💬 Get Details on WhatsApp
            </a>
            <br />
            <button onClick={closePopup}
              style={{ background: 'none', border: '1.5px solid #E0E4F0', color: '#8896AA', fontSize: 13, fontWeight: 600, padding: '9px 20px', borderRadius: 8, cursor: 'pointer', marginTop: 8 }}>
              Close
            </button>
          </div>
        )}

        {/* Error view */}
        {view === 'error' && (
          <div style={{ padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>⚠️</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0F2255', marginBottom: 10 }}>Something went wrong</div>
            <div style={{ fontSize: 14, color: '#4A5568', marginBottom: 24 }}>
              Please call or WhatsApp us directly:<br />
              <strong style={{ fontSize: 18, color: '#0F2255' }}>+91 98860 94611</strong>
            </div>
            <button onClick={() => setView('form')}
              style={{ background: '#E85400', color: '#fff', fontSize: 14, fontWeight: 700, padding: '12px 28px', borderRadius: 10, border: 'none', cursor: 'pointer' }}>
              Try Again
            </button>
          </div>
        )}
      </div>

      <style>{`
        .popup-overlay.open { display: flex !important; animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes popupSlideUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @media(max-width:520px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0F2255', marginBottom: 5 }}>
        {label}
      </label>
      {children}
      {error && <div style={{ fontSize: 11, color: '#E85400', marginTop: 3, fontWeight: 600 }}>{error}</div>}
    </div>
  )
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width:        '100%',
    padding:      '9px 12px',
    border:       `1.5px solid ${hasError ? '#E85400' : '#E0E4F0'}`,
    borderRadius: 8,
    fontSize:     14,
    fontFamily:   'inherit',
    color:        '#0F2255',
    background:   '#FAFBFF',
    outline:      'none',
    boxSizing:    'border-box',
    transition:   'border-color 0.18s',
  }
}
