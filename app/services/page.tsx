import type { Metadata } from "next";
import { ServicesSections } from "./components/services-sections";

export const metadata: Metadata = {
  title: "Financial Services | SAPs.Pro UK",
  description:
    "Explore our core services: Hybrid Tax-Efficient Payroll, Bookkeeping, CIS Returns, and Quarterly VAT Management for UK businesses.",
};

export default function ServicesPage() {
  return <ServicesSections />;
}

