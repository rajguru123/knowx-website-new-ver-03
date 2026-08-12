
import type { Metadata } from "next";
import IotLabSetupClient from "./IotLabSetupClient";

export const metadata: Metadata = {
  title: "IoT Lab Setup for Engineering Colleges | Knowx India",
  description:
    "Complete IoT lab setup for engineering colleges — development kits, sensors, cloud, industrial IoT, faculty training and project-based learning from Knowx India.",
  alternates: {
    canonical: "/engineering-innovation-labs/iot-lab-setup/",
  },
  openGraph: {
    title: "IoT Lab Setup for Engineering Colleges | Knowx India",
    description:
      "End-to-end IoT laboratory solutions — ESP32, Raspberry Pi, STM32, Industrial IoT, edge computing, faculty training and student project support for engineering colleges.",
    url: "https://knowxindia.com/engineering-innovation-labs/iot-lab-setup/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/iot-lab-setup.jpg",
        width: 1200,
        height: 630,
        alt: "IoT Lab Setup for Engineering Colleges — Knowx India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Lab Setup for Engineering Colleges | Knowx India",
    description:
      "End-to-end IoT laboratory solutions — ESP32, Raspberry Pi, STM32, Industrial IoT, edge computing, faculty training and student project support for engineering colleges.",
    images: ["/og/iot-lab-setup.jpg"],
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

export default function IotLabSetupPage() {
  return <IotLabSetupClient />;
}
