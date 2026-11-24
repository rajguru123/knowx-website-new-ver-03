'use client';

import { useState, type FormEvent } from 'react';
import { BRANCHES, MODES, PROGRAMME_NAME, WA_DEFAULT_URL, YEARS } from './data';
import { CheckIcon, WhatsAppIcon } from './Icons';
import { getUtm, sendToWeb3Forms, submitToBigin, trackEvent, trackLeadSubmission, type LeadData } from './tracking';

type Fields = { name: string; phone: string; email: string; college: string; branch: string; year: string; mode: string };
type Errors = Partial<Record<keyof Fields, boolean>>;

const EMPTY: Fields = { name: '', phone: '', email: '', college: '', branch: '', year: '', mode: MODES[0] };
const FIELD_ORDER: (keyof Fields)[] = ['name', 'phone', 'email', 'college', 'branch', 'year'];

/** Accepts +91 / 91 / 0 prefixes and spaces or dashes. Returns the 10-digit mobile number. */
function cleanPhone(v: string) {
  let d = v.replace(/\D/g, '');
  if (d.length > 10 && d.startsWith('91')) d = d.slice(2);
  else if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d;
}

function validate(f: Fields): Errors {
  const email = f.email.trim();
  return {
    name: f.name.trim().length < 2,
    phone: !/^[6-9]\d{9}$/.test(cleanPhone(f.phone)),
    email: email !== '' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email), // optional, but must be valid when given
    college: !f.college.trim(),
    branch: !f.branch,
    year: !f.year,
  };
}

type Props = {
  /** Unique prefix so the hero form and the modal form never share element ids. */
  idPrefix: string;
  onWhatsAppClick?: () => void;
};

export default function ApplyForm({ idPrefix, onWhatsAppClick }: Props) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [waUrl, setWaUrl] = useState('https://wa.me/919886094611');

  const id = (k: string) => `${idPrefix}-${k}`;

  function set<K extends keyof Fields>(k: K, v: string) {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const errs = validate(values);
    setErrors(errs);
    const firstBad = FIELD_ORDER.find((k) => errs[k]);
    if (firstBad) {
      (e.currentTarget.elements.namedItem(firstBad) as HTMLElement | null)?.focus();
      return;
    }

    setSubmitting(true);
    const lead: LeadData = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      college: values.college.trim(),
      branch: values.branch,
      year: values.year,
      mode: values.mode,
      programme: PROGRAMME_NAME,
      page_url: window.location.href.split('#')[0],
      submitted_at: new Date().toISOString(),
      ...getUtm(),
    };

    void submitToBigin(lead); // TODO: Bigin CRM, see tracking.ts
    trackLeadSubmission(lead);
    const emailed = await sendToWeb3Forms(lead);
    if (!emailed) trackEvent('lead_email_failed');

    const text =
      `Hi Knowx, I have applied for the ${PROGRAMME_NAME}.\n` +
      `Name: ${lead.name}\nCollege: ${lead.college}\nBranch: ${lead.branch}\nYear: ${lead.year}\nPreferred Mode: ${lead.mode}\n` +
      'Please share the next steps.';
    const url = `https://wa.me/919886094611?text=${encodeURIComponent(text)}`;
    setWaUrl(url);
    setDone(true);
    setSubmitting(false);
    // Phones may block a pop-up that opens after a delay. The "Continue on WhatsApp" button below is the fallback.
    window.setTimeout(() => {
      window.open(url, '_blank', 'noopener');
    }, 1000);
  }

  const field = (k: keyof Fields) => ({
    id: id(k),
    name: k,
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? id(`${k}-err`) : undefined,
  });

  return (
    <div className={`form-card${done ? ' done' : ''}`}>
      <p className="card-title" id={id('title')}>Apply for the Internship</p>
      <p className="card-sub">Takes under a minute. Our team will contact you.</p>

      <form className="apply-form" onSubmit={onSubmit} noValidate aria-labelledby={id('title')}>
        <div className={`field${errors.name ? ' invalid' : ''}`}>
          <label htmlFor={id('name')}>Full Name</label>
          <input {...field('name')} type="text" placeholder="Your full name" autoComplete="name" value={values.name} onChange={(e) => set('name', e.target.value)} />
          <span className="err" id={id('name-err')}>Please enter your full name (at least 2 characters).</span>
        </div>
        <div className={`field${errors.phone ? ' invalid' : ''}`}>
          <label htmlFor={id('phone')}>Mobile / WhatsApp Number</label>
          <input {...field('phone')} type="tel" inputMode="tel" placeholder="+91 XXXXX XXXXX" autoComplete="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} />
          <span className="err" id={id('phone-err')}>Enter a valid 10-digit Indian mobile number.</span>
        </div>
        <div className={`field${errors.email ? ' invalid' : ''}`}>
          <label htmlFor={id('email')}>Email (optional)</label>
          <input {...field('email')} type="email" placeholder="you@college.edu" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} />
          <span className="err" id={id('email-err')}>Enter a valid email address.</span>
        </div>
        <div className={`field${errors.college ? ' invalid' : ''}`}>
          <label htmlFor={id('college')}>College / University</label>
          <input {...field('college')} type="text" placeholder="Your college name" autoComplete="organization" value={values.college} onChange={(e) => set('college', e.target.value)} />
          <span className="err" id={id('college-err')}>Please enter your college name.</span>
        </div>
        <div className="row2">
          <div className={`field${errors.branch ? ' invalid' : ''}`}>
            <label htmlFor={id('branch')}>Engineering Branch</label>
            <select {...field('branch')} value={values.branch} onChange={(e) => set('branch', e.target.value)}>
              <option value="">Select</option>
              {BRANCHES.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <span className="err" id={id('branch-err')}>Select your branch.</span>
          </div>
          <div className={`field${errors.year ? ' invalid' : ''}`}>
            <label htmlFor={id('year')}>Current Year</label>
            <select {...field('year')} value={values.year} onChange={(e) => set('year', e.target.value)}>
              <option value="">Select</option>
              {YEARS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <span className="err" id={id('year-err')}>Select your year.</span>
          </div>
        </div>
        <div className="field">
          <label htmlFor={id('mode')}>Preferred Mode</label>
          <select {...field('mode')} value={values.mode} onChange={(e) => set('mode', e.target.value)}>
            {MODES.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-green submit" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Apply for Internship →'}
        </button>
        <a className="wa-link" target="_blank" rel="noopener noreferrer" href={WA_DEFAULT_URL} onClick={onWhatsAppClick}>
          <WhatsAppIcon size={18} />
          Or chat on WhatsApp
        </a>
        <p className="privacy">
          Your details are used only to contact you about this internship. See our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </form>

      <div className="success" role="status" aria-live="polite">
        <div className="check">
          <CheckIcon size={30} />
        </div>
        <h3>Application Received!</h3>
        <p>Thank you! Our internship counsellor will contact you on WhatsApp shortly.</p>
        <a className="btn btn-green" target="_blank" rel="noopener noreferrer" href={waUrl} onClick={onWhatsAppClick}>
          Continue on WhatsApp
        </a>
      </div>
    </div>
  );
}
