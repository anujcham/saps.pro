import Link from "next/link";
import {
  FiArrowUpRight,
  FiShield,
  FiPhone,
  FiMail,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";
import { HomeReveal } from "./home-reveal";
import { ScrollGrid } from "./scroll-grid";
import { ClientsCarousel } from "./clients-carousel";

const realityPoints = [
  "Payroll obligations increase with every new hire",
  "VAT deadlines require consistent, accurate record keeping",
  "Workforce structure directly impacts your tax position",
];

const approachPillars = [
  {
    title: "Structured",
    subtitle: "Payroll & Compliance",
    description:
      "A structured approach to workforce payroll and financial reporting that helps businesses manage obligations in the most tax-efficient way possible.",
  },
  {
    title: "Compliant",
    subtitle: "HMRC & MTD Ready",
    description:
      "Every submission, every filing, and every payslip managed accurately and on time — giving your leadership team complete peace of mind.",
  },
  {
    title: "Trusted",
    subtitle: "UK Based Team",
    description:
      "Dedicated financial controllers and payroll specialists located right here in the UK, always accessible when critical decisions arise.",
  },
];

export function HomeSections() {
  return (
    <HomeReveal>
      <div className="overflow-hidden">
        {/* HERO SECTION (Slide 2 + Clean Background Grid Covering Full Section) */}
        <section
          className="relative isolate overflow-hidden bg-[#0c1310] text-white"
          aria-labelledby="hero-title"
        >
          {/* Subtle atmospheric gradient base */}
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_35%,rgba(245,158,11,0.18),transparent_40%),linear-gradient(115deg,#0a110e_0%,#121d17_50%,#1a2820_100%)]" />

          {/* Clean 3D Perspective Grid Animation spanning nearly the full section */}
          <ScrollGrid />

          {/* Ultra-Wide Fluid Container (max-w-[94rem]) */}
          <div className="relative z-10 mx-auto grid min-h-[720px] w-full max-w-[94rem] items-center gap-14 px-4 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-12 xl:px-16 lg:py-28 xl:py-32">
            <div className="hero-copy max-w-2xl">
              <p className="mb-6 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                Professional Financial Services · United Kingdom
              </p>

              <h1
                id="hero-title"
                className="max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]"
              >
                Structured.<br />
                Compliant.<br />
                <span className="text-amber-400">Trusted.</span>
              </h1>

              {/* Service Pills */}
              <div className="mt-7 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-amber-300">
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 backdrop-blur-sm">
                  Bookkeeping
                </span>
                <span className="text-slate-500">•</span>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 backdrop-blur-sm">
                  VAT Returns
                </span>
                <span className="text-slate-500">•</span>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 backdrop-blur-sm">
                  Hybrid Tax-Efficient Payroll
                </span>
              </div>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Supporting UK businesses from 10 to 150 employees. We deliver dedicated financial management, proactive compliance, and tax efficiency so your leadership can focus on sustainable growth.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-amber-400/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                >
                  Book A Free Consultation <FiArrowUpRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-5 py-4 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-amber-400/60 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                >
                  Explore Our Services <FiArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL (Clean Floating Compliance Card with GSAP gentle float) */}
            <div className="hero-visual relative mx-auto flex w-full max-w-[520px] items-center justify-center">
              <div className="absolute inset-[3%] rounded-3xl border border-amber-400/20" />
              <div className="absolute inset-[11%] rounded-3xl border border-white/10" />

              <div className="floating-card relative w-full overflow-hidden rounded-3xl border border-amber-400/30 bg-slate-900/95 p-6 text-white shadow-[0_30px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-7">
                {/* Card Top bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="size-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-300">
                      SAPs.Pro System
                    </span>
                  </div>
                  <span className="rounded bg-amber-400/20 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-amber-300">
                    MTD & HMRC Ready
                  </span>
                </div>

                {/* Metrics 3-Col Highlight */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-b border-slate-800/80 pb-5 text-center">
                  <div className="rounded-lg bg-black/40 p-2.5">
                    <div className="text-xl font-extrabold text-amber-400 sm:text-2xl">10-150</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Employees
                    </div>
                  </div>
                  <div className="rounded-lg bg-black/40 p-2.5">
                    <div className="text-xl font-extrabold text-amber-400 sm:text-2xl">24/7</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Support
                    </div>
                  </div>
                  <div className="rounded-lg bg-black/40 p-2.5">
                    <div className="text-xl font-extrabold text-emerald-400 sm:text-2xl">100%</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Compliant
                    </div>
                  </div>
                </div>

                {/* Live Service Checklists */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-md bg-amber-400/10 text-amber-400">
                        <FiDollarSign size={15} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Hybrid Tax-Efficient Payroll</p>
                        <p className="text-[11px] text-slate-400">Reduced liabilities & tax deductibility</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400">Active</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-md bg-amber-400/10 text-amber-400">
                        <FiFileText size={15} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Bookkeeping & CIS</p>
                        <p className="text-[11px] text-slate-400">Real-time ledger & management reports</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400">Reconciled</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-md bg-amber-400/10 text-amber-400">
                        <FiShield size={15} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Quarterly VAT Submissions</p>
                        <p className="text-[11px] text-slate-400">Zero penalty protection guaranteed</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-400">Filed On Time</span>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                  <span>Advisory: Jai Bhola & Robert Taylor</span>
                  <span className="font-mono text-amber-400">UK Registered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar (Ultra-Wide Container) */}
          <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-wrap items-center justify-between gap-x-10 gap-y-3 px-4 py-5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-slate-400 sm:px-8 lg:px-12 xl:px-16">
              <span className="text-slate-300">United Kingdom</span>
              <span>10 to 150 Employees</span>
              <span>100% HMRC Compliant</span>
              <span className="text-amber-400">www.saps.pro</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE REALITY FOR GROWING BUSINESSES (Slide 1) */}
        <section
          className="reveal-section relative overflow-hidden bg-amber-400 text-slate-950"
          aria-labelledby="reality-title"
        >
          <div className="section-circle pointer-events-none absolute -left-48 top-24 z-30 size-72 overflow-hidden rounded-full border-2 border-white/55 bg-amber-200/20 shadow-[0_0_45px_rgba(255,255,255,0.16)] backdrop-blur-[1px]">
            <div className="absolute -left-8 top-8 size-24 rounded-full bg-white/40 blur-2xl" />
            <div className="absolute inset-3 rounded-full border border-white/30" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-[94rem] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-16 lg:py-28">
            <div className="reveal-item">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-slate-900">
                The Reality For Growing Businesses
              </p>
              <h2
                id="reality-title"
                className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                Managing A Growing Workforce Is Complex.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-800">
                For businesses with 10 to 150 employees, payroll, VAT and bookkeeping obligations grow quickly. Without the right structure and support, compliance becomes a burden that pulls founders away from core operations.
              </p>

              {/* 3 Metric Cards */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-950/20 pt-6">
                <div>
                  <div className="text-3xl font-extrabold text-slate-950">10-150</div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-800">
                    Employees
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-950">24/7</div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-800">
                    Support
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-950">100%</div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-800">
                    HMRC Compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Reality points with bold highlight bars */}
            <div className="reveal-item flex flex-col justify-center space-y-6">
              {realityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-950/20 bg-amber-300/40 p-6 shadow-sm transition-transform hover:-translate-y-1 sm:p-7"
                >
                  <div className="h-1 w-12 rounded-full bg-slate-950" />
                  <p className="mt-4 text-xl font-medium tracking-tight text-slate-950 sm:text-2xl">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR APPROACH (Slide 3) */}
        <section
          className="reveal-section relative overflow-hidden bg-slate-50"
          aria-labelledby="approach-title"
        >
          <div className="section-parallax pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full border border-amber-500/10" />

          <div className="mx-auto w-full max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-28">
            <div className="reveal-item grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-400 shadow-md">
                  <FiShield aria-hidden="true" size={26} />
                </div>
                <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                  Our Approach
                </p>
                <h2
                  id="approach-title"
                  className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl"
                >
                  One Partner. Complete Financial Support.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                  SAPs.Pro provides dedicated financial management support — giving small and growing businesses the structure, compliance and clarity they need to operate with confidence.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                >
                  Book A Free Consultation <FiArrowUpRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>

            {/* 3 Pillars (Structured, Compliant, Trusted) */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {approachPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="reveal-item rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-amber-400/60 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-600">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-8 rounded-full bg-amber-400" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE SERVICES SHOWCASE (Slides 6, 7, 8) */}
        <section
          id="services"
          className="reveal-section relative overflow-hidden bg-[#0c120f] py-24 text-white sm:py-32"
          aria-labelledby="services-title"
        >
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="reveal-item max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                Core Capabilities
              </p>
              <h2
                id="services-title"
                className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                Comprehensive Financial Management For UK SMEs.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                From reducing liabilities with innovative hybrid payroll to eliminating VAT filing stress and providing board-ready bookkeeping records.
              </p>
            </div>

            {/* Service 1: Hybrid Tax-Efficient Payroll (Flagship - Slide 8) */}
            <div className="reveal-item mt-14 rounded-3xl border border-amber-400/40 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="inline-block rounded bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-slate-950">
                    Our Core Service
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Hybrid Tax-Efficient Payroll
                  </h3>
                </div>
                <div className="h-1.5 w-16 rounded-full bg-amber-400" />
              </div>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                A professionally managed payroll structure that helps businesses reduce their liabilities through a tax efficient process — improving tax deductibility and ensuring full HMRC compliance.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-400">Reduced Liabilities</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    A structured approach to workforce payroll that helps businesses manage their obligations in the most tax efficient way possible.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-400">Full Compliance</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Every submission, every filing, every payslip managed accurately and on time — giving your business complete peace of mind.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-400">Operational Clarity</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    One managed process replacing multiple payments, multiple submissions and the administrative burden that comes with them.
                  </p>
                </div>
              </div>
            </div>

            {/* Services 2 & 3: Bookkeeping (Slide 6) & VAT Returns (Slide 7) */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* Bookkeeping Card */}
              <div className="reveal-item flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                      Service
                    </span>
                    <span className="h-1 w-10 bg-amber-400" />
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold text-white">Bookkeeping</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Accurate, up to date financial records — so every decision you make is grounded in real numbers.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Transaction Recording</p>
                      <p className="mt-1 text-xs text-slate-400">Precision income, expenditure & adjustments.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Financial Statements</p>
                      <p className="mt-1 text-xs text-slate-400">Monthly and annual clarity on performance.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Management Accounts</p>
                      <p className="mt-1 text-xs text-slate-400">Director-level reporting for confident decisions.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">CIS Returns</p>
                      <p className="mt-1 text-xs text-slate-400">Full Construction Industry Scheme compliance.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">VAT Preparation</p>
                      <p className="mt-1 text-xs text-slate-400">Continuous record maintenance throughout quarters.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Payroll Records</p>
                      <p className="mt-1 text-xs text-slate-400">Seamless integration without duplication or errors.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-5">
                  <Link
                    href="/services#bookkeeping"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:underline"
                  >
                    View Bookkeeping Details <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* VAT Returns Card */}
              <div className="reveal-item flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                      Service
                    </span>
                    <span className="h-1 w-10 bg-amber-400" />
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold text-white">VAT Returns</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    End to end VAT management — prepared, reviewed and submitted accurately and on time, every quarter.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">End-To-End Management</p>
                      <p className="mt-1 text-xs text-slate-400">Accurate, punctual submissions with zero effort from your team.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Making Tax Digital</p>
                      <p className="mt-1 text-xs text-slate-400">100% digital, auditable HMRC compliant filings.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Penalty Protection</p>
                      <p className="mt-1 text-xs text-slate-400">Late filing and calculation errors become things of the past.</p>
                    </div>
                    <div className="border-l-2 border-amber-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Quarterly Record Keeping</p>
                      <p className="mt-1 text-xs text-slate-400">Continual reconciliation so submission has zero surprises.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-5">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-amber-400 font-semibold">Statutory Deadlines:</span> Companies House 9 mos · Corporation Tax 12 mos · VAT Quarterly
                  </div>
                  <Link
                    href="/services#vat"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:underline"
                  >
                    View VAT Solutions <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR CLIENTS (Slide 4) */}
        <section
          className="reveal-section relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
          aria-labelledby="clients-title"
        >
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="reveal-item max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                Our Clients
              </p>
              <h2
                id="clients-title"
                className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                Supporting UK Businesses Of Every Scale.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                SAPs.Pro works with owner-managed businesses and growing SMEs across the UK — typically between 10 and 150 employees. Our services scale with your workforce.
              </p>
            </div>

            {/* 6 Sector cards with icons & mobile/tablet carousel slider */}
            <ClientsCarousel />
          </div>
        </section>

        {/* SECTION 6: GET STARTED / LET'S TALK (Slide 5) */}
        <section
          id="contact"
          className="reveal-section relative overflow-hidden bg-[#0c120f] border-t border-slate-800/80 py-24 text-white"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="reveal-item max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                Get Started
              </p>
              <h2
                id="contact-title"
                className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
              >
                Let&apos;s Talk.
              </h2>
              <div className="mt-4 h-1 w-16 bg-amber-400" />
              <p className="mt-6 text-lg leading-7 text-slate-300">
                Free consultation. No obligation. We will review your current structure and show you clearly how SAPs.Pro can support your business.
              </p>
            </div>

            {/* Direct Contact Cards (Jai Bhola & Robert Taylor) */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Jai Bhola */}
              <div className="reveal-item rounded-2xl border border-slate-800 bg-slate-900/90 p-8 sm:p-10 shadow-lg">
                <div className="h-1 w-16 bg-amber-400" />
                <h3 className="mt-6 text-3xl font-semibold text-white">Jai Bhola</h3>
                <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Senior Advisor & Specialist
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+447436343619"
                    className="flex items-center gap-4 text-lg font-medium text-slate-200 transition-colors hover:text-amber-400"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                      <FiPhone size={18} />
                    </div>
                    +44 743 6343 619
                  </a>

                  <a
                    href="mailto:ask@saps.pro"
                    className="flex items-center gap-4 text-lg font-medium text-amber-400 transition-colors hover:underline"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                      <FiMail size={18} />
                    </div>
                    ask@saps.pro
                  </a>
                </div>
              </div>

              {/* Robert Taylor */}
              <div className="reveal-item rounded-2xl border border-slate-800 bg-slate-900/90 p-8 sm:p-10 shadow-lg">
                <div className="h-1 w-16 bg-amber-400" />
                <h3 className="mt-6 text-3xl font-semibold text-white">Robert Taylor</h3>
                <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Senior Advisor & Specialist
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+447950721126"
                    className="flex items-center gap-4 text-lg font-medium text-slate-200 transition-colors hover:text-amber-400"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                      <FiPhone size={18} />
                    </div>
                    +44 795 0721 126
                  </a>

                  <a
                    href="mailto:rob@saps.pro"
                    className="flex items-center gap-4 text-lg font-medium text-amber-400 transition-colors hover:underline"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                      <FiMail size={18} />
                    </div>
                    rob@saps.pro
                  </a>
                </div>
              </div>
            </div>

            {/* Book consultation CTA bar */}
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-8 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-xl font-semibold text-white">Prefer to submit details online?</h4>
                <p className="mt-1 text-sm text-slate-300">Share your workforce size and we will prepare tailored recommendations.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-md bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Schedule Free Review <FiArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </HomeReveal>
  );
}