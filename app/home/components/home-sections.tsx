import Link from "next/link";
import {
  FiArrowUpRight,
  FiShield,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { HomeReveal } from "./home-reveal";
import { HeroCyberCanvas } from "./hero-cyber-canvas";
import { ClientsCarousel } from "./clients-carousel";
import { HeroFalconCard } from "./hero-falcon-card";
import { CurtainRevealSection } from "./curtain-reveal-section";
import {
  FloatingPayrollEngine,
  ServicesEngineDock,
} from "./floating-payroll-engine";

const realityPoints = [
  "Manual payroll burdens compound exponentially with every new hire",
  "Fragmented banking rails cause painful 3-day wage settlement delays",
  "Static salary structures overlook UK tax-efficiency opportunities",
];

const approachPillars = [
  {
    title: "Intelligent Payroll",
    subtitle: "Hybrid Tax Efficiency",
    description:
      "Dynamically model salary, dividends, and benefits to optimize tax deductibility and eliminate excess employer NI legally.",
  },
  {
    title: "Instant Disbursals",
    subtitle: "Faster Payments Rails",
    description:
      "Direct integration with UK Faster Payments infrastructure. Batch disburse multi-staff wages in seconds 24/7/365.",
  },
  {
    title: "Zero-Defect Audit",
    subtitle: "HMRC & MTD Direct",
    description:
      "Automated Real-Time Information (RTI) submissions, CIS filings, and quarterly VAT reconciliations with audit-proof compliance.",
  },
];

export function HomeSections() {
  return (
    <HomeReveal>
      <div className="overflow-hidden">
        {/* HERO SECTION — Falcoonz PAY Cyber Centerpiece */}
        <section
          className="hero-section relative isolate overflow-hidden bg-[#050811] text-white"
          aria-labelledby="hero-title"
        >
          {/* Cyan/Mint Atmospheric Glow Background */}
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_35%,rgba(0,240,255,0.14),transparent_45%),linear-gradient(135deg,#03060d_0%,#070d1a_50%,#091224_100%)]" />

          {/* High-Velocity Financial Network Canvas Animation */}
          <HeroCyberCanvas />

          {/* Ultra-Wide Fluid Container (max-w-[94rem]) */}
          <div className="relative z-10 mx-auto grid min-h-[480px] lg:min-h-[520px] w-full max-w-[94rem] items-center gap-10 px-4 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.14fr_0.86fr] lg:gap-14 lg:px-12 xl:px-16 lg:py-12 xl:py-14">
            <div className="hero-copy max-w-2xl">
              <p className="mb-4 flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
                FALCOONZ PAY · NEXT-GEN FINTECH & SMART PAYROLL (UK)
              </p>

              <h1
                id="hero-title"
                className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem]"
              >
                Intelligent.<br />
                Frictionless.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Autonomous.
                </span>
              </h1>

              {/* Service Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[11px] font-semibold text-cyan-300">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                  Smart Hybrid Payroll
                </span>
                <span className="text-slate-600">•</span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                  Instant Faster Payments
                </span>
                <span className="text-slate-600">•</span>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                  HMRC & MTD Direct Engine
                </span>
              </div>

              <p className="mt-5 max-w-lg text-sm sm:text-[15px] leading-relaxed text-slate-300">
                Engineered for forward-thinking UK enterprises with 10 to 150+ staff. We combine intelligent tax-efficient payroll architecture with real-time settlement rails and zero-defect compliance.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  Launch Consultation <FiArrowUpRight aria-hidden="true" size={17} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-slate-900/60 px-4.5 py-3 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400/70 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  Explore Capabilities <FiArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL — Interactive 3D Card & Traveling Asset */}
            <div className="hero-visual relative mx-auto flex w-full max-w-[460px] items-center justify-center">
              <HeroFalconCard />
            </div>
          </div>

          {/* Bottom Bar Indicator */}
          <div className="border-t border-cyan-500/15 bg-black/40 backdrop-blur-sm">
            <div className="relative z-10 mx-auto flex w-full max-w-[94rem] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 sm:px-8 lg:px-12 xl:px-16">
              <span className="text-cyan-300">United Kingdom</span>
              <span>10 to 150+ Employees</span>
              <span>100% HMRC Compliant</span>
              <span className="text-cyan-400 font-bold">FALCOONZ PAY PLATFORM</span>
            </div>
          </div>
        </section>

        {/* SIGNATURE SCROLL REVEAL: Split Curtain / Door Open Transition (Image 1 Reference) */}
        <CurtainRevealSection />

        {/* SECTION 2: THE ENTERPRISE PAYROLL BOTTLENECK (Cyber Obsidian Redesign) */}
        <section
          className="reveal-section relative isolate overflow-hidden border-y border-cyan-500/20 bg-[#070d1a] py-20 text-white sm:py-24 lg:py-28"
          aria-labelledby="reality-title"
        >
          {/* Ambient Glow & Grid Lines */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_40%,rgba(0,240,255,0.08),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(0,255,157,0.06),transparent_50%)]" />

          <div className="relative z-20 mx-auto grid w-full max-w-[94rem] gap-12 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 xl:px-16">
            <div className="reveal-item">
              <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                <span className="inline-block size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                The Enterprise Payroll Bottleneck
              </p>
              <h2
                id="reality-title"
                className="mt-5 max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl text-white"
              >
                Managing A Growing Workforce Shouldn&apos;t Slow Innovation.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                For UK enterprises with 10 to 150+ staff, outdated payroll bureaus and fragmented banking rails create painful settlement delays, unnecessary tax exposure, and administrative friction.
              </p>

              {/* 3 Metric Cards */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-cyan-500/20 pt-6">
                <div className="rounded-xl border border-cyan-500/15 bg-slate-900/60 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 sm:text-3xl font-mono">
                    10-150+
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Employees
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-500/15 bg-slate-900/60 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 sm:text-3xl font-mono">
                    &lt; 2s
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Disbursals
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-500/15 bg-slate-900/60 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 sm:text-3xl font-mono">
                    100%
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    HMRC Compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Reality points with cyber glass highlight cards */}
            <div className="reveal-item flex flex-col justify-center space-y-4">
              {realityPoints.map((point, idx) => (
                <div
                  key={point}
                  className="group relative rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      CHALLENGE 0{idx + 1}
                    </span>
                    <div className="h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-16 transition-all duration-300" />
                  </div>
                  <p className="mt-3 text-lg font-medium tracking-tight text-slate-100 sm:text-xl">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: FALCOONZ ARCHITECTURE & ENGINE */}
        <section
          id="section-architecture"
          className="reveal-section relative z-30 overflow-visible bg-[#040711] py-20 text-white sm:py-24 lg:py-28"
          aria-labelledby="approach-title"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(0,240,255,0.06),transparent_50%)]" />

          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <FiShield aria-hidden="true" size={26} />
                </div>
                <p className="mt-7 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                  <span className="size-1.5 rounded-full bg-cyan-400" />
                  Falcoonz Architecture &amp; Engine
                </p>
                <h2
                  id="approach-title"
                  className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
                >
                  Autonomous Systems. Engineered For Enterprise Scale.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                  Falcoonz PAY bridges intelligent tax modeling with UK banking networks — giving enterprises unified payroll execution, instant disbursals, and guaranteed audit readiness.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  >
                    Launch Enterprise Review <FiArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                </div>
              </div>

              {/* 3D Floating Payroll Engine Origin (Starts Here in Section 3, Floats Down to Section 4) */}
              <div className="flex justify-center lg:justify-end">
                <FloatingPayrollEngine />
              </div>
            </div>

            {/* 3 Pillars (Intelligent Payroll, Instant Disbursals, Zero-Defect Audit) */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {approachPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="reveal-item group rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-14 transition-all duration-300" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE SERVICES SHOWCASE */}
        <section
          id="services"
          className="reveal-section relative z-20 overflow-visible bg-[#050811] py-24 text-white sm:py-32"
          aria-labelledby="services-title"
        >
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className="reveal-item max-w-2xl">
                <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                  <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                  Core Capabilities · High-Speed Rails
                </p>
                <h2
                  id="services-title"
                  className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
                >
                  Comprehensive Financial &amp; Settlement Architecture.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  From optimizing tax deductibility through intelligent hybrid payroll structures to continuous MTD VAT reconciliations and instantaneous Faster Payments disbursals.
                </p>
              </div>

              {/* Section 4 Destination Dock (3D Engine Floats In From Section 3 And Fixes Here) */}
              <div className="flex justify-center lg:justify-end">
                <ServicesEngineDock />
              </div>
            </div>

            {/* Service 1: Hybrid Tax-Efficient Payroll (Flagship) */}
            <div className="reveal-item mt-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-[#070d1a] to-slate-950 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,240,255,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-6">
                <div>
                  <span className="inline-block rounded bg-gradient-to-r from-cyan-400 to-teal-300 px-3 py-1 font-mono text-[10px] font-bold uppercase text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    Flagship Engine
                  </span>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Smart Hybrid Tax-Efficient Payroll
                  </h3>
                </div>
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              </div>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                A modern algorithmic payroll structure that empowers UK enterprises to optimize workforce liabilities legally — elevating deductibility while maintaining automated, flawless HMRC compliance.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-cyan-400">Reduced Liabilities</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Precision salary-dividend modeling that legally reduces employer NI contributions and enhances workforce net take-home.
                  </p>
                </div>

                <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-teal-300">Real-Time RTI &amp; MTD</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Every filing and payslip transmitted directly through automated HMRC API connections on scheduled payroll dates.
                  </p>
                </div>

                <div className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-emerald-400">Instant Batch Disbursal</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Replace multi-day BACS cycles with direct UK Faster Payments integration — reaching employee accounts within seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Services 2 & 3: Bookkeeping & VAT Returns */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* Bookkeeping Card */}
              <div className="reveal-item flex flex-col justify-between rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] sm:p-10">
                <div>
                  <div className="flex items-center justify-between border-b border-cyan-500/20 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Core Service
                    </span>
                    <span className="h-1 w-10 rounded-full bg-cyan-400" />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-white">Bookkeeping &amp; Management Accounts</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Accurate, live ledger sync and board-ready reporting — ensuring executive decisions are backed by real-time financial data.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Transaction Recording</p>
                      <p className="mt-1 text-xs text-slate-400">Precision income, expenditure &amp; adjustments.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Financial Statements</p>
                      <p className="mt-1 text-xs text-slate-400">Monthly and annual clarity on performance.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Management Accounts</p>
                      <p className="mt-1 text-xs text-slate-400">Director-level reporting for confident decisions.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">CIS Returns</p>
                      <p className="mt-1 text-xs text-slate-400">Full Construction Industry Scheme compliance.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Continuous Reconciliation</p>
                      <p className="mt-1 text-xs text-slate-400">Daily bank feed synchronisation with zero backlogs.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Payroll Integration</p>
                      <p className="mt-1 text-xs text-slate-400">Automated journal postings without double-handling.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-cyan-500/20 pt-5">
                  <Link
                    href="/services#bookkeeping"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
                  >
                    View Bookkeeping Details <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* VAT Returns Card */}
              <div className="reveal-item flex flex-col justify-between rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] sm:p-10">
                <div>
                  <div className="flex items-center justify-between border-b border-cyan-500/20 pb-5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Core Service
                    </span>
                    <span className="h-1 w-10 rounded-full bg-cyan-400" />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-white">VAT Compliance &amp; MTD Returns</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    End-to-end VAT preparation, digital auditing, and timely submissions — with guaranteed penalty protection.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">End-To-End Management</p>
                      <p className="mt-1 text-xs text-slate-400">Accurate, punctual submissions with zero administrative burden.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Making Tax Digital</p>
                      <p className="mt-1 text-xs text-slate-400">100% digital, auditable HMRC compliant filings.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Penalty Protection</p>
                      <p className="mt-1 text-xs text-slate-400">Late filing and calculation errors eliminated completely.</p>
                    </div>
                    <div className="border-l-2 border-cyan-400/80 pl-3">
                      <p className="text-xs font-semibold text-white">Quarterly Audits</p>
                      <p className="mt-1 text-xs text-slate-400">Continual reconciliation so submission has zero surprises.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-cyan-500/20 pt-5">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-semibold">Statutory Deadlines:</span> Companies House 9 mos · Corporation Tax 12 mos · VAT Quarterly
                  </div>
                  <Link
                    href="/services#vat"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
                  >
                    View VAT Solutions <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INDUSTRY SECTORS */}
        <section
          id="sectors-section"
          className="reveal-section relative overflow-visible bg-[#03060d] py-24 text-white sm:py-32"
          aria-labelledby="clients-title"
        >
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="reveal-item max-w-3xl">
              <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                Industry Sectors
              </p>
              <h2
                id="clients-title"
                className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
              >
                Powering UK Businesses Across Key Sectors.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                Falcoonz PAY serves owner-managed businesses, technology companies, and high-growth SMEs across the UK — typically between 10 and 150+ employees.
              </p>
            </div>

            {/* 6 Sector cards with icons & mobile/tablet carousel slider */}
            <ClientsCarousel />
          </div>
        </section>

        {/* SECTION 6: GET STARTED / ADVISORY DESK */}
        <section
          id="contact"
          className="reveal-section relative isolate overflow-hidden bg-[#070d1a] border-t border-cyan-500/20 py-24 text-white"
          aria-labelledby="contact-title"
        >
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.08),transparent_60%)]" />

          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              {/* Left Column: Editorial Headline & Online Specification Review Box */}
              <div className="reveal-item flex flex-col justify-between">
                <div>
                  <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                    <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                    Direct Enterprise Advisory
                  </p>
                  <h2
                    id="contact-title"
                    className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
                  >
                    Let&apos;s Accelerate Your Payroll.
                  </h2>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                    Complimentary infrastructure review. Connect directly with our payroll architects to evaluate your workforce structure, reduce costs, and upgrade to instant settlement rails.
                  </p>
                </div>

                {/* Online Review CTA Box */}
                <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-emerald-500/10 p-6 backdrop-blur-md sm:p-8">
                  <h4 className="text-xl font-bold text-white">Prefer to submit specifications online?</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Share your workforce size and current payroll cycle for an instant architecture assessment from our technical team.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                    >
                      Schedule Free Review <FiArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Cards Stacked Vertically (Up / Down) */}
              <div className="reveal-item flex flex-col gap-6">
                {/* Enterprise Onboarding Desk */}
                <div className="group rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] sm:p-8">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:w-24 transition-all duration-300" />
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">Enterprise Onboarding Desk</h3>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                    New Client Architecture &amp; Migration
                  </p>

                  <div className="mt-6 space-y-3.5">
                    <a
                      href="tel:+442080000000"
                      className="flex items-center gap-4 text-base font-medium text-slate-200 transition-colors hover:text-cyan-300 sm:text-lg"
                    >
                      <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <FiPhone size={18} />
                      </div>
                      +44 (0) 20 8000 0000
                    </a>

                    <a
                      href="mailto:enterprise@falcoonzpay.com"
                      className="flex items-center gap-4 text-base font-medium text-cyan-400 transition-colors hover:underline sm:text-lg"
                    >
                      <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <FiMail size={18} />
                      </div>
                      enterprise@falcoonzpay.com
                    </a>
                  </div>
                </div>

                {/* Client Advisory Desk */}
                <div className="group rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] sm:p-8">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-teal-300 to-emerald-400 group-hover:w-24 transition-all duration-300" />
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">Client Advisory Desk</h3>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-teal-300">
                    Technical Compliance &amp; Specialist Support
                  </p>

                  <div className="mt-6 space-y-3.5">
                    <a
                      href="tel:+442080000001"
                      className="flex items-center gap-4 text-base font-medium text-slate-200 transition-colors hover:text-cyan-300 sm:text-lg"
                    >
                      <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <FiPhone size={18} />
                      </div>
                      +44 (0) 20 8000 0001
                    </a>

                    <a
                      href="mailto:support@falcoonzpay.com"
                      className="flex items-center gap-4 text-base font-medium text-cyan-400 transition-colors hover:underline sm:text-lg"
                    >
                      <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <FiMail size={18} />
                      </div>
                      support@falcoonzpay.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeReveal>
  );
}