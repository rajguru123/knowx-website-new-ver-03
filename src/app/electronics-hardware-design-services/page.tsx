import type { Metadata } from 'next';
import HardwareClient from './HardwareClient';

export const metadata: Metadata = {
  title: 'Electronics Hardware Design Services Bangalore | PCB Design',
  description: 'Expert electronics hardware design services in Bangalore. End-to-end PCB design,From schematic to production. Get free consultation.',
  keywords: [
    'electronics hardware design services',
    'PCB design services Bangalore',
    
    'circuit design and prototyping',
    
    'hardware product development services',
    'schematic design services',
    'PCB layout services India',
    'electronic product development',
    'hardware design company Bangalore'
  ],
  openGraph: {
    title: 'Electronics Hardware Design Services | Knowx Innovations',
    description: 'From schematic to production — expert hardware design services. 20+ years experience, 150+ projects delivered across 6 industries.',
    type: 'website',
    url: 'https://knowxindia.com/electronics-hardware-design-services',
    images: [
      {
        url: '/images/og-hardware-design.jpg',
        width: 1200,
        height: 630,
        alt: 'Knowx Electronics Hardware Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronics Hardware Design Services | Knowx Innovations',
    description: 'Expert PCB design, embedded systems & IoT hardware development. 20+ years experience in Bangalore.',
  },
  alternates: {
    canonical: 'https://knowxindia.com/electronics-hardware-design-services',
  },
};

export default function ElectronicsHardwareDesignPage() {
  return (
    <>
      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Electronics Hardware Design Services',
            'description': 'End-to-end electronics hardware design services including PCB design, embedded systems, circuit simulation, prototyping, and manufacturing support.',
            'provider': {
              '@type': 'Organization',
              'name': 'Knowx Innovations Pvt Ltd',
              'url': 'https://knowxindia.com',
              'logo': 'https://knowxindia.com/images/knowx-logo.png',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Bangalore',
                'addressRegion': 'Karnataka',
                'addressCountry': 'IN'
              }
            },
            'areaServed': {
              '@type': 'Country',
              'name': 'India'
            },
            'serviceType': 'Electronics Hardware Design',
            'offers': {
              '@type': 'Offer',
              'availability': 'https://schema.org/InStock'
            }
          })
        }}
      />

      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What are electronics hardware design services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Electronics hardware design services encompass end-to-end development of electronic products, including schematic design, PCB layout, circuit simulation, component selection, prototyping, testing, and manufacturing support. We help transform your concept into a production-ready hardware product.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What industries do you serve for hardware design?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We serve Medical Devices, Industrial Automation, Consumer Electronics, Automotive, Renewable Energy, and EV sectors. Our expertise spans wearables, IoT devices, charging infrastructure, automation systems, and custom electronic products.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does hardware product development take?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Typical hardware development projects range from 3-7 months depending on complexity. Simple IoT devices take 3-5 months, while complex systems with certifications may require 6-8 months from concept to production.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What tools and technologies do you use for hardware design?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We use industry-standard EDA tools including Altium Designer, KiCAD, Eagle, and OrCAD for PCB design. For simulation, we leverage SPICE, MATLAB, and LTspice. Our testing capabilities include oscilloscopes, logic analyzers, and spectrum analyzers.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you provide PCB design and prototyping services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we offer complete PCB design services including schematic capture, multi-layer PCB layout, signal integrity analysis, and rapid prototyping. We handle everything from single-layer boards to complex multi-layer designs with high-speed interfaces.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is the cost of electronics hardware design services?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Hardware design costs vary based on project complexity, number of PCB layers, component selection, and certification requirements. Contact us for a detailed quote based on your specific requirements. We offer cost-optimized designs that reduce manufacturing expenses by up to 30%.'
                }
              }
            ]
          })
        }}
      />

      <HardwareClient />
    </>
  );
}
