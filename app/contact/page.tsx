import type { Metadata } from "next";
import { ContactSections } from "./components/contact-sections";

export const metadata: Metadata = {
  title: "Enterprise Advisory & Consultation | Falcoonz PAY",
  description:
    "Schedule a direct financial architecture and payroll audit with VELI at Falcoonz PAY. Direct line: +44 7739 569783 | Info@falcoonzpay.co.uk.",
};

export default function ContactPage() {
  return <ContactSections />;
}


