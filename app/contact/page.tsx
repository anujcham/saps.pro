import type { Metadata } from "next";
import { ContactSections } from "./components/contact-sections";

export const metadata: Metadata = {
  title: "Contact & Free Consultation | SAPs.Pro UK",
  description:
    "Book a free, no-obligation consultation with SAPs.Pro. Speak directly with Jai Bhola (+44 743 6343 619) or Robert Taylor (+44 795 0721 126).",
};

export default function ContactPage() {
  return <ContactSections />;
}

