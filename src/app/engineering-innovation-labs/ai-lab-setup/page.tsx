import type { Metadata } from "next";
import AiLabSetupClient from "./AiLabSetupClient";

export const metadata: Metadata = {
  title: "AI Lab Setup for Engineering Colleges & Universities | KnowX India",
  description:
    "Build a complete AI lab for engineering colleges and universities with AI kits, GPU computing, Raspberry Pi, NVIDIA Jetson, computer vision, machine learning, generative AI, experiments and projects.",
  alternates: {
    canonical: "/engineering-innovation-labs/ai-lab-setup/",
  },
  openGraph: {
    title: "AI Lab Setup for Engineering Colleges & Universities | KnowX India",
    description:
      "Complete AI lab solutions — machine learning, deep learning, computer vision, generative AI, Edge AI and robotics — combining AI kits, equipment, experiments, projects and faculty training for engineering colleges.",
    url: "https://knowxindia.com/engineering-innovation-labs/ai-lab-setup/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/ai-lab-setup.jpg",
        width: 1200,
        height: 630,
        alt: "AI Lab Setup for Engineering Colleges & Universities — Knowx India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lab Setup for Engineering Colleges & Universities | KnowX India",
    description:
      "Complete AI lab solutions — machine learning, deep learning, computer vision, generative AI, Edge AI and robotics — combining AI kits, equipment, experiments, projects and faculty training for engineering colleges.",
    images: ["/og/ai-lab-setup.jpg"],
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

export default function AiLabSetupPage() {
  return <AiLabSetupClient />;
}
