import type { Metadata } from "next";
import IotKitsClient from "./IotKitsClient";

export const metadata: Metadata = {
  title: "IoT Kits for Engineering Students & Colleges | KnowX India",
  description:
    "Explore IoT kits for engineering students and colleges, with development hardware, sensors, experiments, projects and learning resources for hands-on IoT education.",
  alternates: {
    canonical: "/engineering-innovation-labs/iot-kits/",
  },
  openGraph: {
    title: "IoT Kits for Engineering Students & Colleges | KnowX India",
    description:
      "KnowX IoT kits combine development platforms, sensors, communication modules, structured experiments and project-based learning support for engineering colleges.",
    url: "https://knowxindia.com/engineering-innovation-labs/iot-kits/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/iot-kits.jpg",
        width: 1200,
        height: 630,
        alt: "IoT Kits for Engineering Students & Colleges — Knowx India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Kits for Engineering Students & Colleges | KnowX India",
    description:
      "KnowX IoT kits combine development platforms, sensors, communication modules, structured experiments and project-based learning support for engineering colleges.",
    images: ["/og/iot-kits.jpg"],
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

export default function IotKitsPage() {
  return <IotKitsClient />;
}
