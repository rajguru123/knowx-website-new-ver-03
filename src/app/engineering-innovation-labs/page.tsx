import type { Metadata } from "next";
import EngineeringInnovationLabsClient from "./EngineeringInnovationLabsClient";

export const metadata: Metadata = {
  title: "AICTE IDEA Lab, Makerspace & Innovation Labs for Colleges",
  description:
    "Design and set up world-class engineering innovation labs, AICTE IDEA Labs, Centres of Excellence and makerspaces in your college. Faculty training and funding support.",
  alternates: {
    canonical: "/engineering-innovation-labs/",
  },
  openGraph: {
    title:
      "AICTE IDEA Lab, Makerspace & Innovation Labs for Colleges | Knowx",
    description:
      "Helping universities and engineering colleges build world-class innovation labs, AICTE IDEA Labs, Centres of Excellence and industry-integrated learning ecosystems.",
    url: "https://knowxindia.com/engineering-innovation-labs/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/engineering-innovation-labs.jpg",
        width: 1200,
        height: 630,
        alt: "Knowx Engineering Innovation Labs — AICTE IDEA Lab, Makerspace, Centre of Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AICTE IDEA Lab, Makerspace & Innovation Labs for Colleges | Knowx",
    description:
      "Helping universities and engineering colleges build world-class innovation labs, AICTE IDEA Labs, Centres of Excellence and industry-integrated learning ecosystems.",
    images: ["/og/engineering-innovation-labs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function EngineeringInnovationLabsPage() {
  return <EngineeringInnovationLabsClient />;
}

