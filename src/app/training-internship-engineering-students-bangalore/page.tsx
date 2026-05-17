// app/training-internship-engineering-students-bangalore/page.tsx
import type { Metadata } from 'next'
import { getFAQSchema, getPageSchema, getCourseSchema } from '@/lib/schema'

import StickyNav        from '@/components/fellowship/StickyNav'
import HeroSection      from '@/components/fellowship/HeroSection'
import ProblemSection   from '@/components/fellowship/ProblemSection'
import WhatIsSection    from '@/components/fellowship/WhatIsSection'
import WhoSection       from '@/components/fellowship/WhoSection'
import TracksSection    from '@/components/fellowship/TracksSection'
import ProjectsSection  from '@/components/fellowship/ProjectsSection'
import HowItWorks       from '@/components/fellowship/HowItWorks'
import TechStack        from '@/components/fellowship/TechStack'
import WhyKnowx         from '@/components/fellowship/WhyKnowx'
import Outcomes         from '@/components/fellowship/Outcomes'
import FAQSection       from '@/components/fellowship/FAQSection'
import FooterCTA        from '@/components/fellowship/FooterCTA'
import FellowshipPopup  from '@/components/fellowship/FellowshipPopup'

export const metadata: Metadata = {
  title: 'Training & Internship for Engineering Students in Bangalore | Knowx Product Engineering Fellowship',
  description:
    'Join the Knowx Product Engineering Fellowship — hands-on industry training and internship in AI, IoT, Embedded Systems and Full Stack Development. Real products. Real company. Bangalore.',
  keywords: [
    'training internship engineering students Bangalore',
    'embedded systems training Bangalore',
    'IoT training internship',
    'AI training with real projects',
    'product engineering fellowship',
    'embedded systems course Bangalore',
    'IoT internship freshers',
    'full stack internship Bangalore',
    'internship certificate VTU',
    'hands-on engineering training Bangalore',
  ],
  openGraph: {
    title: 'Knowx Product Engineering Fellowship — Industry Training + Internship',
    description:
      'Hands-on training and internship in AI, IoT, Embedded Systems and Full Stack Development. Real products inside a real engineering company. Bangalore.',
    url: 'https://knowxindia.com/training-internship-engineering-students-bangalore',
    siteName: 'Knowx Innovations',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowx Product Engineering Fellowship',
    description: 'Real product development training and internship in Bangalore.',
  },
  alternates: {
    canonical: 'https://knowxindia.com/training-internship-engineering-students-bangalore',
  },
}

export default function PillarPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCourseSchema()) }}
      />

      {/* Page */}
      <StickyNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <WhoSection />
        <TracksSection />
        <ProjectsSection />
        <HowItWorks />
        <TechStack />
        <WhyKnowx />
        <Outcomes />
        <FAQSection />
        <FooterCTA />
      </main>

      {/* Popup — rendered once, triggered by all CTAs */}
      <FellowshipPopup />
    </>
  )
}
