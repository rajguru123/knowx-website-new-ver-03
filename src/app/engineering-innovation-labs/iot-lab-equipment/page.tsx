import type { Metadata } from "next";
import IotLabEquipmentClient from "./IotLabEquipmentClient";

export const metadata: Metadata = {
  title: "IoT Lab Equipment for Engineering Colleges | KnowX India",
  description:
    "Explore IoT lab equipment for engineering colleges, including development boards, sensors, communication modules, edge devices, industrial IoT hardware and lab infrastructure.",
  alternates: {
    canonical: "/engineering-innovation-labs/iot-lab-equipment/",
  },
  openGraph: {
    title: "IoT Lab Equipment for Engineering Colleges | KnowX India",
    description:
      "Development boards, sensors, communication modules, edge computing devices, industrial IoT hardware and lab infrastructure for engineering colleges — from Knowx India.",
    url: "https://knowxindia.com/engineering-innovation-labs/iot-lab-equipment/",
    siteName: "Knowx Innovations",
    type: "website",
    images: [
      {
        url: "/og/iot-lab-equipment.jpg",
        width: 1200,
        height: 630,
        alt: "IoT Lab Equipment for Engineering Colleges — Knowx India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Lab Equipment for Engineering Colleges | KnowX India",
    description:
      "Development boards, sensors, communication modules, edge computing devices, industrial IoT hardware and lab infrastructure for engineering colleges — from Knowx India.",
    images: ["/og/iot-lab-equipment.jpg"],
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

export default function IotLabEquipmentPage() {
  return <IotLabEquipmentClient />;
}
