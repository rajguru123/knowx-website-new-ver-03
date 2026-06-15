import type { Metadata } from "next";
import MakersLabClient from "./MakersLabClient";

export const metadata: Metadata = {
  title: "Engineering Final Year Projects in Bangalore | MAKERSLAB by Knowx",
  description:
    "MAKERSLAB by Knowx — Bangalore's trusted engineering student project makers. Arduino, ESP32, Raspberry Pi, IoT, AI/ML, Fullstack Web projects with full mentorship, code, circuit diagrams & documentation. ECE, CSE, ISE, EEE, Mechatronics. Vijayanagar, Bangalore.",
  keywords: [
    "engineering project makers in Bangalore",
    "final year project help Bangalore",
    "Arduino project makers Bangalore",
    "ESP32 IoT project Bangalore",
    "Raspberry Pi projects Bangalore",
    "AI ML student projects Bangalore",
    "project makers near me",
    "ECE final year projects",
    "CSE final year projects",
    "VTU final year projects",
    "mini project support Bangalore",
    "IoT project developers Bangalore",
    "image processing projects Bangalore",
    "MakersLab Bangalore",
    "Knowx Innovations projects",
  ],
  authors: [{ name: "Knowx Innovations Pvt Ltd" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://knowxindia.com/makerslab-bangalore-engineering-student-projects/",
  },
  openGraph: {
    title: "MAKERSLAB by Knowx — Engineering Project Makers in Bangalore",
    description:
      "Arduino, ESP32, Raspberry Pi, IoT, AI/ML, Web projects with full mentorship & documentation. Serving ECE, CSE, ISE, EEE, Mechatronics students across Bangalore.",
    url: "https://knowxindia.com/makerslab-bangalore-engineering-student-projects/",
    siteName: "Knowx Innovations",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://knowxindia.com/makerslab/makers-logo.jpg",
        width: 1200,
        height: 630,
        alt: "MAKERSLAB by Knowx — Engineering Project Makers in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAKERSLAB by Knowx — Engineering Project Makers in Bangalore",
    description:
      "Arduino, ESP32, Raspberry Pi, IoT, AI/ML, Web projects with mentorship & documentation for engineering students in Bangalore.",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MAKERSLAB by Knowx Innovations",
  alternateName: "MakersLab Bangalore",
  description:
    "Dedicated engineering student project lab in Bangalore offering hands-on support for final year projects in IoT, AI/ML, Arduino, ESP32, Raspberry Pi, Web Development, and Embedded Systems.",
  url: "https://knowxindia.com/makerslab-bangalore-engineering-student-projects/",
  telephone: "+919886094611",
  email: "info@knowxindia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "#56/56, 2nd Floor, Pushpagiri Complex, 17th Cross, 8th Main, Vijayanagar",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.972020,
    longitude: 77.534872,
  },
  areaServed: [
    "Bangalore",
    "Vijayanagar",
    "Rajajinagar",
    "Basaveshwaranagar",
    "Malleshwaram",
    "Karnataka",
  ],
  serviceType: [
    "Arduino Projects",
    "ESP32 Projects",
    "Raspberry Pi Projects",
    "IoT Systems",
    "AI ML Projects",
    "Fullstack Web Development",
    "Image Processing Projects",
    "Mechatronics Projects",
    "Final Year Engineering Projects",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Knowx Innovations Pvt Ltd",
    url: "https://knowxindia.com",
    foundingDate: "2005",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://in.linkedin.com/company/knowx-innovations-pvt-ltd",
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MAKERSLAB and how can it help engineering students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MAKERSLAB is a dedicated engineering student project lab in Bangalore run by Knowx Innovations. We provide end-to-end support for final year engineering projects across ECE, CSE, ISE, EEE, Mechatronics, and Mechanical branches — including hardware, code, circuit diagrams, and documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of engineering projects does MAKERSLAB support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MAKERSLAB supports Arduino projects, ESP32 IoT systems, Raspberry Pi projects, AI and machine learning projects using Python and TensorFlow, YOLO-based image processing, fullstack web development with React and Node.js, data analytics, and mechatronics projects. We have completed 500+ student projects including smart agriculture, health monitoring, home automation, face recognition, and vehicle tracking systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you assist with final year engineering projects in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MAKERSLAB specialises in final year engineering projects in Bangalore. Our team handles everything from idea validation and technology selection to prototype development, testing, and documentation — making us one of the most trusted project makers for VTU, Anna University, and other university students.",
      },
    },
    {
      "@type": "Question",
      name: "I am looking for project makers near me in Bangalore. Can MAKERSLAB help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MAKERSLAB is located in Vijayanagar, Bangalore — easily accessible for students across the city. We provide in-person mentoring and hands-on lab support so you can walk in, discuss your project idea, and get started the same day.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build an IoT or AI-based project at MAKERSLAB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our IoT project developers and AI/ML mentors guide you through building complete working systems — from sensor interfacing and microcontroller programming to cloud dashboards, mobile app integration, and AI model deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What engineering branches do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support students from ECE, CSE, ISE, EEE, Mechatronics, Mechanical, Instrumentation, and Automobile Engineering branches. Whether you are doing BE, BTech, MTech, or Diploma, MAKERSLAB has the expertise to support your project.",
      },
    },
    {
      "@type": "Question",
      name: "Is documentation and mentorship included with the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every project at MAKERSLAB includes full source code, circuit diagrams, project report documentation, and presentation guidance — everything you need for your viva and final submission.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and technologies does MAKERSLAB use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with Python, TensorFlow, YOLO, OpenCV, React.js, Node.js, MongoDB, MySQL, Arduino IDE, Keil, ARM controllers, ESP32, Raspberry Pi, and Texas Instruments boards — covering the full stack from embedded hardware to cloud-connected applications.",
      },
    },
  ],
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engineering Student Project Support",
  provider: {
    "@type": "LocalBusiness",
    name: "MAKERSLAB by Knowx Innovations",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: "Bangalore",
  description:
    "End-to-end engineering project support for final year and mini projects including Arduino, ESP32, Raspberry Pi, IoT, AI/ML, Web Development, Image Processing, and Mechatronics.",
  serviceType: "Engineering Project Development",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Project Domains",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arduino & ESP32 Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Raspberry Pi Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IoT Systems with Backend Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI and Machine Learning Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fullstack Web Development Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Image and Video Processing Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mechatronics Projects" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Analytics Projects" } },
    ],
  },
};

export default function MakersLabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <MakersLabClient />
    </>
  );
}
