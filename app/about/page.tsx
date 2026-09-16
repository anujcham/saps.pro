import type { Metadata } from "next";
import { AboutSections } from "./components/about-sections";

export const metadata: Metadata = {
  title: "About Us | SAPs.Pro Financial Services UK",
  description: "Learn how SAPs.Pro provides dedicated financial management, hybrid tax-efficient payroll, and compliance support for growing UK businesses.",
};

export default function AboutPage() {
  return <AboutSections />;
}