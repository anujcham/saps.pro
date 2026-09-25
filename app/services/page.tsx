import type { Metadata } from "next";
import { ServicesSections } from "./components/services-sections";

export const metadata: Metadata = {
  title: "Enterprise Payroll & Financial Rails | Falcoonz PAY",
  description:
    "Explore Falcoonz PAY core financial rails: Automated Hybrid Payroll, Instant Faster Payments Disbursals, Real-time MTD, and Continuous Ledger Compliance for UK enterprises.",
};

export default function ServicesPage() {
  return <ServicesSections />;
}


