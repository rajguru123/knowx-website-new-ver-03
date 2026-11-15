// Analytics, UTM capture and lead submission helpers.
// GA4 (G-2VF7B0DZKH) is already installed in layout.tsx, so window.gtag exists on this route.

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type UtmKey = (typeof UTM_KEYS)[number];

export type LeadData = {
  name: string;
  phone: string;
  college: string;
  branch: string;
  duration: string;
  page_url: string;
  submitted_at: string;
} & Record<UtmKey, string>;

type AnyFn = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: AnyFn;
    fbq?: AnyFn;
  }
}

const UTM_STORAGE_KEY = 'knowx_utm';

/** Call once on page load. Reads utm_* from the URL and keeps them in sessionStorage for the visit. */
export function captureUtm(): Partial<Record<UtmKey, string>> {
  if (typeof window === 'undefined') return {};
  const found: Partial<Record<UtmKey, string>> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
      return found;
    }
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Partial<Record<UtmKey, string>>) : {};
  } catch {
    return found;
  }
}

export function getUtm(): Record<UtmKey, string> {
  const u = captureUtm();
  return {
    utm_source: u.utm_source ?? '',
    utm_medium: u.utm_medium ?? '',
    utm_campaign: u.utm_campaign ?? '',
    utm_content: u.utm_content ?? '',
    utm_term: u.utm_term ?? '',
  };
}

/** Generic event. GA4 works today. Meta Pixel fires once fbq is loaded (see README). */
export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', eventName, parameters); // GA4
    window.fbq?.('trackCustom', eventName, parameters); // TODO: Meta Pixel. Load the pixel base code with your Pixel ID first.
  } catch {
    /* tracking must never break the page */
  }
}

export function trackLeadSubmission(formData: LeadData) {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', 'generate_lead', {
      branch: formData.branch,
      duration: formData.duration,
      utm_source: formData.utm_source,
      utm_medium: formData.utm_medium,
      utm_campaign: formData.utm_campaign,
      utm_content: formData.utm_content,
    });
    window.fbq?.('track', 'Lead', { content_name: 'AI Electronics Internship' }); // TODO: Meta Pixel standard Lead event
  } catch {
    /* ignore */
  }
}

/**
 * TODO: Bigin CRM integration.
 * Send formData (lead fields + UTM values) to a Bigin webhook or to your own API route,
 * for example POST /api/bigin-lead, which then calls the Bigin API with a server-side token.
 * Never put a Bigin API key in client code.
 */
export async function submitToBigin(formData: LeadData): Promise<{ ok: boolean; connected: boolean }> {
  if (process.env.NODE_ENV !== 'production') console.debug('[submitToBigin] not connected yet', formData);
  return { ok: true, connected: false };
}

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'f2635df8-33a5-44ef-889c-9f823771927f';

/** Emails the lead through Web3Forms. Waits at most ~4s, never throws. */
export async function sendToWeb3Forms(d: LeadData): Promise<boolean> {
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), 4000);
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New internship application: ${d.name}`,
        from_name: 'Knowx Internship Landing Page',
        botcheck: '',
        ...d,
      }),
      signal: ctrl.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
  }
}
