// app/stock-trading-course-basaveshwara-nagar-bangalore/page.tsx
import type { Metadata } from 'next'
import MbearLandingPage from '@/components/mbear/MbearLandingPage'

export const metadata: Metadata = {
  title: 'Stock Market Course in Bangalore — Free Live Masterclass | MBEAR, Basaveshwara Nagar',
  description:
    'A free, live stock market course in Bangalore — every Saturday in Basaveshwara Nagar. Taught by a market veteran with 20+ years of experience. Serving Vijayanagar, Rajajinagar, Nagarabhavi, Peenya and Mysore Road.',
  keywords: [
    'stock market course Bangalore',
    'share market trading course near me',
    'share market trading course',
    'share market trading course near Basaveshwara Nagar Bangalore',
    'stock market classes Basaveshwaranagar',
    'investment training Vijayanagar Bangalore',
    'stock market institute Nagarabhavi',
    'trading classes Mysore Road',
    'financial education Peenya',
    'free investor masterclass Bangalore',
  ],
  openGraph: {
    title: "Bangalore's Stock Market Course, Taught by a 20+ Year Market Veteran",
    description:
      'Free live investor masterclass every Saturday in Basaveshwara Nagar, Bengaluru — practical stock market education for students, professionals, homemakers and retirees.',
    url: 'https://knowxindia.com/stock-trading-course-basaveshwara-nagar-bangalore',
    siteName: 'Knowx Innovations',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBEAR — Free Stock Market Masterclass, Bangalore',
    description: 'Free live stock market course every Saturday in Basaveshwara Nagar, Bengaluru.',
  },
  alternates: {
    canonical: 'https://knowxindia.com/stock-trading-course-basaveshwara-nagar-bangalore',
  },
}

// ---- JSON-LD schema objects ----
// NOTE: these are written inline here rather than via '@/lib/schema' helpers,
// since that file's existing helpers (getFAQSchema/getPageSchema/getCourseSchema)
// are shaped around the Fellowship pages. If you'd rather keep everything routed
// through '@/lib/schema' for consistency, these three objects can be moved there
// as getLocalBusinessSchema() / getEventSchema() / getMbearFAQSchema() — happy to
// do that refactor too, just say the word.

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://knowxindia.com/stock-trading-course-basaveshwara-nagar-bangalore#business',
  name: 'MBEAR',
  description:
    'MBEAR conducts a free, live share market trading course near Basaveshwara Nagar, Bangalore, every Saturday — helping students, homemakers, working professionals and retirees invest with confidence.',
  url: 'https://knowxindia.com/stock-trading-course-basaveshwara-nagar-bangalore',
  telephone: '+91-7676601681',
  priceRange: 'Free',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, 331, Siddhaiah Puranik Rd, next to Yes Bank, 3rd Stage 4th Block, Shakthi Ganapathi Nagar',
    addressLocality: 'Basaveshwar Nagar, Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560079',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
  },
  sameAs: [
    'REPLACE_WITH_YOUR_GOOGLE_BUSINESS_PROFILE_URL',
    'https://mbear.in/',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Knowx Innovations Pvt Ltd',
    url: 'https://knowxindia.com',
  },
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: "MBEAR Free Investor's Masterclass",
  description:
    'A free, live share market trading course covering how the stock market works, investing vs trading, risk management, and long-term wealth creation.',
  startDate: '2026-07-11T10:30:00+05:30',
  endDate: '2026-07-11T12:30:00+05:30',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  isAccessibleForFree: true,
  location: {
    '@type': 'Place',
    name: 'MBEAR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, 331, Siddhaiah Puranik Rd, next to Yes Bank, 3rd Stage 4th Block, Shakthi Ganapathi Nagar',
      addressLocality: 'Basaveshwar Nagar, Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560079',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'MBEAR',
    url: 'https://knowxindia.com/stock-trading-course-basaveshwara-nagar-bangalore',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a share market trading course near me in West Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MBEAR's free share market trading course runs every Saturday at our Basaveshwara Nagar centre, conveniently reachable from Vijayanagar, Rajajinagar, Nagarabhavi, Peenya and Mysore Road.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need any prior knowledge of the stock market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None at all. The session is built for complete beginners as well as those who want to sharpen an existing understanding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MBEAR SEBI-registered — will you manage my investments or give stock tips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MBEAR is an educational session only. We do not manage money, execute trades on your behalf, or issue buy/sell recommendations. Our goal is to help you make informed decisions independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can retired individuals and homemakers attend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the session is designed for students, homemakers, working professionals and retired individuals alike.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the masterclass really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the introductory Saturday session is entirely free, with no obligation to enrol in anything further.',
      },
    },
  ],
}

export default function InvestorMasterclassPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <MbearLandingPage />
    </>
  )
}
