// app/stock-trading-course-basaveshwara-nagar-bangalore/page.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
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
    {
      '@type': 'Question',
      name: 'Can I join the stock market course from Vijayanagar or Nagarabhavi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — MBEAR's Basaveshwara Nagar centre is an easy, familiar drive from both Vijayanagar (~2 km) and Nagarabhavi (~5 km), with plenty of students attending from each area every Saturday.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer stock market classes near Mysore Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — our Basaveshwara Nagar venue is roughly 4 km from Mysore Road, making it a quick and convenient trip for residents there too.',
      },
    },
  ],
}

export default function InvestorMasterclassPage() {
  return (
    <>
      {/* Google Tag Manager — scoped to just this page, not site-wide.
          Placed via next/script rather than literally in <head>/<body> since
          this page doesn't own the site's shared layout.tsx. Loads slightly
          later than Google's generic <head>-first instructions, which is the
          standard, safe adjustment for a single-page (non-site-wide) install. */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNNF97S9');`}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '934640442979770');
          fbq('track', 'PageView');`}
      </Script>

      {/* noscript fallbacks — placed at the top of this page's own content
          rather than literally after <body>, for the same single-page-scope
          reason as above. */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TNNF97S9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="gtm"
        />
      </noscript>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=934640442979770&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

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
