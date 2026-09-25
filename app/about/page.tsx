import type { Metadata } from "next";
import { AboutSections } from "./components/about-sections";

export const metadata: Metadata = {
  title: "About Falcoonz PAY | High-Speed Payroll & Disbursal Rails",
  description:
    "Learn how Falcoonz PAY is transforming UK enterprise payroll and financial operations with instant Faster Payments disbursals, algorithmic tax optimization, and continuous HMRC compliance.",
};

export default function AboutPage() {
  return <AboutSections />;
}