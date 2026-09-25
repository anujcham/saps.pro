import Link from "next/link";
import { FiMail, FiPhone, FiShield, FiClock, FiCheckCircle } from "react-icons/fi";
import { BrandLogo } from "./brand-logo";

const footerServices = [
  { label: "Hybrid Tax-Efficient Payroll", href: "/services#payroll" },
  { label: "Bookkeeping & Management Accounts", href: "/services#bookkeeping" },
  { label: "VAT Returns & Penalty Protection", href: "/services#vat" },
  { label: "CIS Returns Compliance", href: "/services#cis" },
];

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact & Consultation", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#03060d] text-slate-300">
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-12 px-4 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-4">
            <BrandLogo light />
            <p className="text-sm leading-relaxed text-slate-400">
              Intelligent. Frictionless. Autonomous. Next-generation payroll architecture and instant Faster Payments rails giving UK enterprises with 10 to 150+ staff complete compliance and financial velocity.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
              <span className="inline-flex items-center gap-1.5"><FiShield size={14} /> 100% HMRC Compliant</span>
              <span className="inline-flex items-center gap-1.5"><FiClock size={14} /> 24/7 Platform</span>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Platform &amp; Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts Col */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Enterprise Desks
            </h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Enterprise Onboarding</p>
                <a
                  href="tel:+442080000000"
                  className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
                >
                  <FiPhone size={13} className="text-cyan-400" /> +44 (0) 20 8000 0000
                </a>
                <a
                  href="mailto:enterprise@falcoonzpay.com"
                  className="mt-0.5 flex items-center gap-2 text-xs text-cyan-400/90 hover:underline"
                >
                  <FiMail size={13} /> enterprise@falcoonzpay.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Client Advisory Desk</p>
                <a
                  href="tel:+442080000001"
                  className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
                >
                  <FiPhone size={13} className="text-cyan-400" /> +44 (0) 20 8000 0001
                </a>
                <a
                  href="mailto:support@falcoonzpay.com"
                  className="mt-0.5 flex items-center gap-2 text-xs text-cyan-400/90 hover:underline"
                >
                  <FiMail size={13} /> support@falcoonzpay.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Compliance */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                <FiCheckCircle className="text-cyan-400" size={14} /> MTD &amp; RTI Automated
              </span>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                Auditable digital VAT &amp; direct Faster Payments rails to HMRC standards.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory timeline note */}
        <div className="rounded-xl border border-cyan-500/15 bg-slate-900/50 px-4 py-3 text-xs text-slate-400">
          <span className="font-semibold text-cyan-300">Statutory Timelines:</span> Companies House: 9 months from year end · HMRC Corporation Tax: 12 months from year end · VAT: Quarterly digital submissions.
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cyan-500/15 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Falcoonz PAY (www.falcoonzpay.com). Next-Gen Fintech &amp; Payroll Infrastructure · United Kingdom.</p>
          <div className="flex items-center gap-6">
            <span className="text-cyan-400/80 font-mono">10 to 150+ Enterprise Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}