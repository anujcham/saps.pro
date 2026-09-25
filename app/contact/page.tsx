import type { Metadata } from "next";
import { ContactSections } from "./components/contact-sections";

export const metadata: Metadata = {
  title: "Enterprise Advisory & Consultation | Falcoonz PAY",
  description:
    "Schedule a direct financial architecture and payroll audit with Falcoonz PAY UK senior advisors. Direct lines: +44 743 6343 619 / +44 795 0721 126.",
};

export default function ContactPage() {
  return <ContactSections />;
}


