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
    <footer className="border-t border-slate-800 bg-[#0c120f] text-slate-300">
      <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-12 px-4 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-4">
            <BrandLogo light />
            <p className="text-sm leading-6 text-slate-400">
              Structured. Compliant. Trusted. Dedicated financial management support giving UK businesses with 10 to 150 employees complete compliance and peace of mind.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <span className="inline-flex items-center gap-1.5"><FiShield size={14} /> 100% HMRC Compliant</span>
              <span className="inline-flex items-center gap-1.5"><FiClock size={14} /> 24/7 Support</span>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Financial Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts Col */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Direct Advisory
            </h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Jai Bhola</p>
                <a
                  href="tel:+447436343619"
                  className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400"
                >
                  <FiPhone size={13} className="text-amber-400" /> +44 743 6343 619
                </a>
                <a
                  href="mailto:ask@saps.pro"
                  className="mt-0.5 flex items-center gap-2 text-xs text-amber-400/90 hover:underline"
                >
                  <FiMail size={13} /> ask@saps.pro
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Robert Taylor</p>
                <a
                  href="tel:+447950721126"
                  className="mt-0.5 flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400"
                >
                  <FiPhone size={13} className="text-amber-400" /> +44 795 0721 126
                </a>
                <a
                  href="mailto:rob@saps.pro"
                  className="mt-0.5 flex items-center gap-2 text-xs text-amber-400/90 hover:underline"
                >
                  <FiMail size={13} /> rob@saps.pro
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Compliance */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-slate-800/80 bg-slate-900/60 p-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                <FiCheckCircle className="text-amber-400" size={14} /> MTD Ready
              </span>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                Auditable digital VAT & payroll submissions to HMRC standard.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory timeline note from Slide 7 */}
        <div className="rounded-lg border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Statutory Timelines:</span> Companies House: 9 months from year end · HMRC Corporation Tax: 12 months from year end · VAT: Quarterly submissions.
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 SAPs.Pro (www.saps.pro). Professional Financial Services · United Kingdom.</p>
          <div className="flex items-center gap-6">
            <span>Supporting UK Businesses 10–150 Employees</span>
          </div>
        </div>
      </div>
    </footer>
  );
}