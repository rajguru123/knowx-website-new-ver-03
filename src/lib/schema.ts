// lib/schema.ts
import { FAQS } from './fellowship-data'

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function getPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Knowx Innovations',
    url: 'https://knowxindia.com',
    description:
      'Knowx Innovations is a product development company in Bangalore offering hands-on industry training and internship programs in AI, IoT, Embedded Systems and Full Stack Development.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    telephone: '+919886094611',
    sameAs: ['https://knowxindia.com'],
  }
}

export function getCourseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Knowx Product Engineering Fellowship — Industry Training + Internship',
    description:
      'Hands-on industry training and internship in AI, IoT, Embedded Systems and Full Stack Development. Real products built inside a real engineering company in Bangalore.',
    provider: {
      '@type': 'Organization',
      name: 'Knowx Innovations',
      url: 'https://knowxindia.com',
    },
    courseMode: ['online', 'onsite'],
    educationalLevel: 'UndergraduateOrHigher',
    inLanguage: 'en',
    offers: {
      '@type': 'Offer',
      price: '20000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  }
}
