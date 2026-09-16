import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiShield,
  FiDollarSign,
  FiFileText,
  FiCalendar,
  FiCheck,
} from "react-icons/fi";

const bookkeepingItems = [
  {
    title: "Transaction Recording",
    desc: "Every financial transaction recorded with precision — income, expenditure, transfers and adjustments maintained accurately at all times.",
  },
  {
    title: "Management Accounts",
    desc: "Regular reporting that gives Directors the financial insight needed to make confident, informed decisions.",
  },
  {
    title: "VAT Preparation",
    desc: "All VAT records maintained throughout the quarter, prepared and ready for accurate, on time submission.",
  },
  {
    title: "Financial Statements",
    desc: "Monthly and annual statements prepared to give you a clear, accurate picture of business performance.",
  },
  {
    title: "CIS Returns",
    desc: "Full Construction Industry Scheme compliance managed for businesses operating within the construction sector.",
  },
  {
    title: "Payroll Records",
    desc: "Payroll transactions fully integrated with your books — no duplication, no gaps, no errors.",
  },
];

const vatItems = [
  {
    title: "End-To-End Management",
    desc: "We prepare, review and submit your VAT returns accurately and on time — every quarter, without exception. No action required from your team.",
  },
  {
    title: "Making Tax Digital (MTD)",
    desc: "Fully compliant with HMRC's Making Tax Digital requirements. Your submissions are digital, auditable and always to the correct standard.",
  },
  {
    title: "Penalty Protection",
    desc: "With SAPs.Pro managing your VAT obligations, late filing and calculation errors become a thing of the past.",
  },
  {
    title: "Quarterly Record Keeping",
    desc: "All VAT records maintained and reconciled throughout the quarter — so there are no surprises when submission time comes.",
  },
];

export function ServicesSections() {
  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Services Hero */}
      <section className="relative bg-[#0c120f] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.15),transparent_40%),linear-gradient(135deg,#0a100d,#16231d)]" />
        <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
            Professional Financial Services · UK
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Specialist financial services<br />
            <span className="text-amber-400">engineered for growing SMEs.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            SAPs.Pro delivers structured, compliant, and tax-efficient solutions covering hybrid payroll, bookkeeping, and quarterly VAT returns for UK businesses with 10 to 150 employees.
          </p>
        </div>
      </section>

      {/* SERVICE 1: Hybrid Tax-Efficient Payroll (Slide 8) */}
      <section id="payroll" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-3xl border border-amber-400/30 bg-[#0c120f] p-8 text-white sm:p-14 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="inline-block rounded bg-amber-400 px-3 py-1 font-mono text-xs font-bold uppercase text-slate-950">
                  Our Core Service
                </span>
                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                  Hybrid Tax-Efficient Payroll
                </h2>
              </div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-900 text-amber-400 border border-slate-800">
                <FiDollarSign size={28} />
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              A professionally managed payroll structure that helps businesses reduce their liabilities through a tax efficient process — improving tax deductibility and ensuring full HMRC compliance.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-7">
                <div className="h-1 w-10 bg-amber-400" />
                <h3 className="mt-5 text-xl font-semibold text-white">Reduced Liabilities</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  A structured approach to workforce payroll that helps businesses manage their obligations in the most tax efficient way possible.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-7">
                <div className="h-1 w-10 bg-amber-400" />
                <h3 className="mt-5 text-xl font-semibold text-white">Full Compliance</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Every submission, every filing, every payslip managed accurately and on time — giving your business complete peace of mind.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-7">
                <div className="h-1 w-10 bg-amber-400" />
                <h3 className="mt-5 text-xl font-semibold text-white">Operational Clarity</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  One managed process replacing multiple payments, multiple submissions and the administrative burden that comes with them.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-800 pt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-amber-400">
                <FiCheckCircle size={18} />
                <span>Supporting workforce scales from 10 to 150+ staff seamlessly</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-amber-300"
              >
                Discuss Payroll Structure <FiArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: Bookkeeping (Slide 6) */}
      <section id="bookkeeping" className="scroll-mt-24 bg-white py-20 sm:py-28 border-y border-slate-200">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600">
              Service Overview
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Bookkeeping & Management Accounts
            </h2>
            <div className="mt-4 h-1 w-14 bg-amber-400" />
            <p className="mt-5 text-lg text-slate-600">
              Accurate, up to date financial records — so every decision you make is grounded in real numbers.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookkeepingItems.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition-all hover:border-amber-400 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-600">0{index + 1}</span>
                    <FiFileText className="text-slate-400" size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-amber-600 font-medium">
                  <FiCheck size={14} /> Reconciled & Audited
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE 3: VAT Returns (Slide 7) */}
      <section id="vat" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600">
              Service Overview
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Quarterly VAT Returns
            </h2>
            <div className="mt-4 h-1 w-14 bg-amber-400" />
            <p className="mt-5 text-lg text-slate-600">
              End to end VAT management — prepared, reviewed and submitted accurately and on time, every quarter.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {vatItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-amber-400"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-amber-400/20 text-amber-600">
                  <FiShield size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Statutory deadlines card from Slide 7 */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-[#0c120f] p-8 text-white">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
              <FiCalendar size={16} /> Key Statutory Compliance Deadlines
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="font-mono text-xs text-slate-400">Companies House Accounts</p>
                <p className="mt-1 text-base font-semibold text-white">9 months from year end</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="font-mono text-xs text-slate-400">HMRC Corporation Tax</p>
                <p className="mt-1 text-base font-semibold text-white">12 months from year end</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="font-mono text-xs text-slate-400">VAT Submissions</p>
                <p className="mt-1 text-base font-semibold text-white">Quarterly digital filing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-400 py-16 text-slate-950">
        <div className="mx-auto flex max-w-[94rem] flex-col items-start justify-between gap-8 px-4 sm:px-8 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to streamline your financial operations?
            </h2>
            <p className="mt-2 text-base text-slate-800">
              Speak directly with Jai Bhola or Robert Taylor for a zero-obligation review.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-slate-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-slate-900"
          >
            Book Free Consultation <FiArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
