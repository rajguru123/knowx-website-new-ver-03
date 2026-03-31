'use client';
import { useState } from 'react';

export default function Popup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      access_key: 'f2635df8-33a5-44ef-889c-9f823771927f',
      subject: 'New Enquiry from Knowx Website — Product Engineering',
      from_name: 'Knowx Website',
      cc: 'bhimsen.g@gmail.com',
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      message: formData.get('message'),
      page: 'Homepage — Book Consultation',
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
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`pop-overlay${isOpen ? ' show' : ''}`} onClick={handleOverlayClick}>
      <div className="pop">
        <button className="pop-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--n700)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 className="fd" style={{ marginBottom: 8 }}>Thank you!</h2>
            <p style={{ color: '#4A5568', fontSize: 15 }}>We will contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <h2 className="fd">Ready to scale your innovation?</h2>
            <p className="sub">Talk to our engineering team — we typically respond within 24 hours.</p>

            {status === 'error' && (
              <div style={{
                background: '#FFF5F5', border: '1px solid #FC8181', borderRadius: 8,
                padding: '10px 16px', marginBottom: 16, fontSize: 13, color: '#C53030',
              }}>
                Something went wrong. Please call us at +91 98860 94611 or try again.
              </div>
            )}

            <form className="pop-form" onSubmit={handleSubmit}>
              <div className="pop-row">
                <div className="pop-field">
                  <label>First Name *</label>
                  <input type="text" name="first_name" required placeholder="John" />
                </div>
                <div className="pop-field">
                  <label>Last Name *</label>
                  <input type="text" name="last_name" required placeholder="Doe" />
                </div>
              </div>
              <div className="pop-row">
                <div className="pop-field">
                  <label>Email *</label>
                  <input type="email" name="email" required placeholder="john@company.com" />
                </div>
                <div className="pop-field">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required placeholder="+91 98860 94611" />
                </div>
              </div>
              <div className="pop-field">
                <label>Company Name</label>
                <input type="text" name="company" placeholder="Your company" />
              </div>
              <div className="pop-field">
                <label>Your Message / Project Brief</label>
                <textarea name="message" placeholder="Tell us briefly about your project requirements..." />
              </div>
              <button type="submit" className="pop-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
