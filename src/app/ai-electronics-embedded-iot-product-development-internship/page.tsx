import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import InternshipClient from './InternshipClient';
import { FAQS, PAGE_URL, PHONE_TEL, SITE_URL, SOCIALS } from './data';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--aei-inter',
});

const TITLE = 'AI Electronics & Embedded Internship in Bangalore | Knowx';
const DESCRIPTION =
  '12–16 week hands-on ECE/EEE internship in Bangalore. Build a real product with STM32, ESP32, PCB design, RTOS, IoT and Edge AI at Knowx Innovations.';
const OG_IMAGE = `${SITE_URL}/images/og-ai-electronics-internship.jpg`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: PAGE_URL,
    siteName: 'Knowx Innovations',
    locale: 'en_IN',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Knowx AI Electronics & Embedded Product Engineering Internship' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

// viewportFit "cover" lets the sticky bar respect the iPhone safe area.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0A0F1E',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Knowx Innovations',
      url: SITE_URL,
      logo: `${SITE_URL}/images/knowx-logo.png`,
      telephone: PHONE_TEL,
      foundingDate: '2005',
      address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
      sameAs: SOCIALS.map((s) => s.href),
    },
    {
      '@type': 'Course',
      name: 'AI-Powered Electronics & Embedded Product Engineering Internship',
      description:
        'A 12–16 week hands-on internship for ECE/EEE students covering embedded C, STM32, ESP32, PCB design, RTOS, IoT and Edge AI, ending in a documented capstone prototype.',
      provider: { '@id': `${SITE_URL}/#organization` },
      url: PAGE_URL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <div className={inter.variable}>
      <script
        type="application/ld+json"
        // "<" is escaped so the JSON can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <InternshipClient />
    </div>
  );
}
