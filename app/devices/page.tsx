import type { Metadata } from "next";
import DeviceShowcase from "@/components/DeviceShowcase";

export const metadata: Metadata = {
  title: "SATO Ramen Bowl · Devices",
  description: "The SATO homepage on mobile, tablet and desktop.",
};

export default function DevicesPage() {
  return <DeviceShowcase src="/" />;
}
