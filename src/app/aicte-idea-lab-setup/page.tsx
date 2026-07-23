
import type { Metadata } from "next";
import AicteIdeaLabClient from "./AicteIdeaLabClient";

export const metadata: Metadata = {
  title: "AICTE IDEA Lab Setup for Engineering Colleges | Knowx",
  description:
    "Complete AICTE IDEA Lab setup for engineering colleges — Fabrication, PCB, Robotics, IoT, AI, Drones, faculty training and NBA/NAAC outcome mapping.",
  alternates: {
    canonical: "/aicte-idea-lab-setup/",
  },
  openGraph: {
    title:
      "AICTE IDEA Lab Setup for Engineering Colleges | Knowx",
    description:
      "End-to-end AICTE-compliant IDEA Lab implementation — infrastructure, equipment, faculty training, and student innovation programs for engineering colleges.",
    url: "https://knowxindia.com/aicte-idea-lab-setup/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/aicte-idea-lab-setup.jpg",
        width: 1200,
        height: 630,
        alt: "AICTE IDEA Lab Setup — Fabrication, PCB, Robotics, IoT, AI, Drones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AICTE IDEA Lab Setup for Engineering Colleges | Knowx",
    description:
      "End-to-end AICTE-compliant IDEA Lab implementation — infrastructure, equipment, faculty training, and student innovation programs for engineering colleges.",
    images: ["/og/aicte-idea-lab-setup.jpg"],
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

export default function AicteIdeaLabPage() {
  return <AicteIdeaLabClient />;
}
