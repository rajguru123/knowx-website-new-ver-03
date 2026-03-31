'use client';
import { useState } from 'react';

export default function FellowshipPopup() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const openPopup = () => {
    document.getElementById('fellowshipPopup')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    document.getElementById('fellowshipPopup')?.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => setStatus('idle'), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      access_key: 'f2635df8-33a5-44ef-889c-9f823771927f',
      subject: 'New Enquiry — Knowx Product Engineering Fellowship',
      from_name: 'Knowx Fellowship Page',
      cc: 'bhimsen.g@gmail.com',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      track: formData.get('track'),
      college: formData.get('college'),
      message: formData.get('message'),
      page: 'Fellowship Pillar Page — Apply Now',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          closePopup();
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id="fellowshipPopup" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15,34,85,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, opacity: 0, pointerEvents: 'none',
      transition: 'opacity 0.3s',
    }}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: '36px 32px',
        maxWidth: 480, width: '90%', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 24px 64px rgba(15,34,85,0.25)', position: 'relative',
      }}>
        {/* Close button */}
        <button onClick={closePopup} style={{
          position: 'absolute', top: 14, right: 14, background: 'none',
          border: 'none', cursor: 'pointer', fontSize: 22, color: '#8896AA',
        }}>✕</button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0F2255', marginBottom: 8 }}>
              Thank you!
            </h3>
            <p style={{ fontSize: 15, color: '#4A5568' }}>
              Our counsellor will call you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              display: 'inline-block', background: 'rgba(232,84,0,0.08)',
              border: '1px solid rgba(232,84,0,0.2)', color: '#E85400',
              fontSize: 11, fontWeight: 700, padding: '4px 12px',
              borderRadius: 50, marginBottom: 16,
            }}>
              ⚡ Limited Seats · Next Batch Starting Soon
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0F2255', marginBottom: 6 }}>
              Apply for the Fellowship
            </h3>
            <p style={{ fontSize: 14, color: '#4A5568', marginBottom: 20 }}>
              Our counsellor will call you within 24 hours to discuss your goals.
            </p>

            {status === 'error' && (
              <div style={{
                background: '#FFF5F5', border: '1px solid #FC8181', borderRadius: 8,
                padding: '10px 16px', marginBottom: 16, fontSize: 13, color: '#C53030',
              }}>
                Something went wrong. Please call us at +91 98860 94611 or try again.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                  Full Name *
                </label>
                <input name="name" type="text" required placeholder="Your full name" style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                  boxSizing: 'border-box',
                }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                    Email *
                  </label>
                  <input name="email" type="email" required placeholder="you@email.com" style={{
                    width: '100%', padding: '10px 14px', borderRadius: 8,
                    border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                    boxSizing: 'border-box',
                  }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                    Phone / WhatsApp *
                  </label>
                  <input name="phone" type="tel" required placeholder="+91 98860 94611" style={{
                    width: '100%', padding: '10px 14px', borderRadius: 8,
                    border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                    boxSizing: 'border-box',
                  }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                  Interested Track *
                </label>
                <select name="track" required style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                  background: '#fff', boxSizing: 'border-box',
                }}>
                  <option value="">Select a track</option>
                  <option value="Embedded AI & IoT">Embedded AI & IoT Product Engineer</option>
                  <option value="Generative AI">Generative AI Product Engineer</option>
                  <option value="Full Stack">Full Stack Product Engineer</option>
                  <option value="Not decided">Not decided — need counselling</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                  College / Organisation
                </label>
                <input name="college" type="text" placeholder="Your college or company" style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                  boxSizing: 'border-box',
                }} />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#0F2255', display: 'block', marginBottom: 4 }}>
                  Your Message
                </label>
                <textarea name="message" placeholder="Any questions or details..." rows={3} style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #E0E4F0', fontSize: 14, outline: 'none',
                  resize: 'vertical', boxSizing: 'border-box',
                }} />
              </div>

              <button type="submit" disabled={status === 'sending'} style={{
                background: '#E85400', color: '#fff', fontSize: 15, fontWeight: 700,
                padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
              }}>
                {status === 'sending' ? 'Sending...' : '⚡ Submit Application'}
              </button>

              <p style={{ fontSize: 11, color: '#8896AA', textAlign: 'center' }}>
                🔒 Your details are safe. We never share your information.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        #fellowshipPopup.open {
          opacity: 1 !important;
          pointer-events: all !important;
        }
      `}</style>
    </div>
  );
}
