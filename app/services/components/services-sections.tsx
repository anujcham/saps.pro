"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiFileText,
  FiCalendar,
  FiCheck,
  FiLayers,
  FiRefreshCw,
  FiLock,
  FiActivity,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

const bookkeepingItems = [
  {
    code: "REC-01",
    title: "Precision Transaction Ledger",
    desc: "Every corporate disbursement, income stream, and inter-account transfer recorded with sub-pixel ledger accuracy in real time.",
    tag: "Real-Time Ledger",
  },
  {
    code: "MGT-02",
    title: "Real-Time Management Accounts",
    desc: "Live visibility and monthly financial modeling that gives Directors the exact metrics needed to steer corporate growth.",
    tag: "Director Insights",
  },
  {
    code: "VAT-03",
    title: "Continuous VAT Ledger Alignment",
    desc: "Automated input/output VAT record tracking maintained continuously, ready for zero-friction quarterly submission.",
    tag: "MTD Compliant",
  },
  {
    code: "STM-04",
    title: "Audited Financial Statements",
    desc: "Monthly and annual balance sheets and profit & loss statements formatted for statutory audits and investor reporting.",
    tag: "Audit Ready",
  },
  {
    code: "CIS-05",
    title: "CIS Construction Submissions",
    desc: "Full Construction Industry Scheme deductions, verification of subcontractors, and monthly HMRC CIS300 compliance.",
    tag: "Subcontractor Safe",
  },
  {
    code: "SYN-06",
    title: "Bi-Directional Payroll Sync",
    desc: "Disbursal batch data synchronizes directly with your corporate books — zero manual re-entry, zero ledger gaps.",
    tag: "Zero-Lag Sync",
  },
];

const vatItems = [
  {
    title: "Automated MTD Return Filing",
    desc: "We prepare, mathematically verify, and submit your VAT returns directly via HMRC's Making Tax Digital API every quarter.",
    icon: FiShield,
  },
  {
    title: "Continuous Record Reconciliation",
    desc: "Transactions are categorized and matched continuously throughout the quarter, preventing quarter-end reconcilation panics.",
    icon: FiRefreshCw,
  },
  {
    title: "Zero-Penalty Safe Harbor",
    desc: "Automated compliance checks and early audit reviews eliminate late-filing fees, incorrect assessment surcharges, and HMRC penalties.",
    icon: FiLock,
  },
  {
    title: "Direct Digital Audit Trails",
    desc: "Every digital calculation is stored with tamper-proof timestamps and cryptographic log entries, readily auditable for HMRC inspections.",
    icon: FiActivity,
  },
];

const bpaComparison = [
  {
    metric: "Disbursal Speed",
    legacy: "3 Business Days (Slow BACS cycle)",
    falcoonz: "< 2 Seconds (Direct UK Faster Payments)",
    advantage: true,
  },
  {
    metric: "Cut-Off Times",
    legacy: "Rigid 3:00 PM bank cut-offs",
    falcoonz: "24/7/365 Real-Time Processing",
    advantage: true,
  },
  {
    metric: "HMRC RTI Filing",
    legacy: "Manual batch exports & separate uploads",
    falcoonz: "Instant API dispatch upon payroll release",
    advantage: true,
  },
  {
    metric: "Tax Optimization",
    legacy: "Fixed static salary bands",
    falcoonz: "Dynamic hybrid salary/dividend modeling",
    advantage: true,
  },
];

export function ServicesSections() {
  return (
    <div className="min-h-screen bg-[#03060c] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. SERVICES HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-cyan-500/10">
        {/* Ambient Cyber Backdrops */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 -right-24 size-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#050d1a_1px,transparent_1px),linear-gradient(to_bottom,#050d1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Main 2-Column Hero: Left Headline/Summary, Right 2x2 Metric Cards */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Headline and Context */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
                <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
                FALCOONZ FINANCIAL RAILS · UK SCALE
              </div>

              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                High-Throughput <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Financial Rails.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Engineered for UK enterprises with 10 to 150+ staff. We replaced sluggish legacy bureaus with algorithmic tax efficiency, instant Faster Payments wage disbursals, and automated HMRC compliance.
              </p>
            </div>

            {/* Right Column: 2 Cards in each row (2x2 grid) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-cyan-400/40">
                <p className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider">Settlement Time</p>
                <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">&lt; 2.0s</p>
                <p className="mt-1 text-xs text-slate-400">Direct UK Faster Payments</p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-cyan-400/40">
                <p className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider">HMRC Precision</p>
                <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">100%</p>
                <p className="mt-1 text-xs text-slate-400">RTI & MTD automated filing</p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-cyan-400/40">
                <p className="font-mono text-[11px] text-purple-400 font-bold uppercase tracking-wider">BACS Latency</p>
                <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">0 Days</p>
                <p className="mt-1 text-xs text-slate-400">No 3-day banking delays</p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-cyan-400/40">
                <p className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider">Batch Capacity</p>
                <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">150+ Staff</p>
                <p className="mt-1 text-xs text-slate-400">Scalable parallel execution</p>
              </div>
            </div>
          </div>

          {/* The smaller ones below in a single row */}
          <div className="mt-12 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
              Explore Rails:
            </span>
            <a
              href="#payroll"
              className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-4 py-2 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              #01 Hybrid Payroll
            </a>
            <a
              href="#disbursals"
              className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-4 py-2 text-xs font-mono font-semibold text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            >
              #02 Faster Payments
            </a>
            <a
              href="#bookkeeping"
              className="rounded-xl border border-purple-500/30 bg-purple-950/20 px-4 py-2 text-xs font-mono font-semibold text-purple-300 hover:bg-purple-500/10 transition-colors"
            >
              #03 Precision Ledger
            </a>
            <a
              href="#compliance"
              className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-4 py-2 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              #04 MTD & Deadlines
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICE 01: HYBRID TAX-EFFICIENT PAYROLL */}
      <section id="payroll" className="scroll-mt-24 py-20 sm:py-28 relative">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#091122]/90 to-[#040813] p-6 sm:p-12 lg:p-14 shadow-[0_0_50px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/15 pb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold uppercase text-cyan-300">
                  <FiLayers size={14} />
                  Core Rail · 01
                </span>
                <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Hybrid Tax-Efficient Payroll
                </h2>
              </div>
              <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <FiZap size={26} />
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
              We mathematically optimize payroll structures to minimize unnecessary National Insurance and corporate tax drag while staying 100% compliant with UK statutory regulations. Your staff receive payslips immediately with zero errors.
            </p>

            {/* 3 Pillar Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-xl">
                <div className="size-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                  01
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Dynamic Tax Optimization</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Intelligently model salary, dividend distributions, and allowable employee expense deductions in full alignment with HMRC guidelines to lower effective tax liability.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-xl">
                <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                  02
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Instant RTI Synchronization</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Every wage cycle triggers direct Real-Time Information (RTI) dispatches to HMRC on or before payday. No forgotten filings, no penalty notices, and no manual spreadsheets.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-xl">
                <div className="size-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 font-mono text-xs font-bold">
                  03
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Digital Employee Portal</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Automated, branded digital payslips delivered via secure portal or encrypted email directly to employees, reducing internal HR queries to zero.
                </p>
              </div>
            </div>

            {/* Bottom Specs Bar */}
            <div className="mt-12 border-t border-cyan-500/15 pt-8 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-sm text-cyan-300">
                <FiCheckCircle className="size-5 text-emerald-400 shrink-0" />
                <span>Supports multi-tier director dividends, salaried staff, and flexible contractors seamlessly</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:-translate-y-0.5"
              >
                <span>Structure Your Payroll Architecture</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE 02: INSTANT FASTER PAYMENTS DISBURSAL */}
      <section id="disbursals" className="scroll-mt-24 py-20 sm:py-28 relative bg-[#040814] border-y border-cyan-500/15">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                HIGH SPEED RAIL · 02
              </div>

              <h2 className="mt-5 text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Sub-Second Disbursals. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Zero 3-Day Waiting.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                Legacy UK payroll bureaus still run on 3-day BACS cycles requiring funds to be locked days before payday. Falcoonz PAY utilizes the modern UK Faster Payments rail for instant, automated disbursals across entire workforces in under two seconds.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <FiCheck size={14} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Cash Flow Retention</h3>
                    <p className="text-sm text-slate-400">Retain working capital in your corporate account until the actual moment of pay release instead of days prior.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <FiCheck size={14} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">24/7/365 Execution</h3>
                    <p className="text-sm text-slate-400">Weekends, bank holidays, and odd hours handled without penalty or delayed wages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <FiCheck size={14} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Instant Confirmation Callbacks</h3>
                    <p className="text-sm text-slate-400">Real-time webhooks and settlement status per employee account.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Rail Comparison Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-slate-950/80 p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-5">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Infrastructure Comparison
                </h3>
                <span className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-cyan-300">
                  FALCOONZ VS LEGACY
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {bpaComparison.map((item) => (
                  <div
                    key={item.metric}
                    className="rounded-2xl border border-slate-800 bg-[#070d1a] p-4.5 transition-all hover:border-cyan-500/40"
                  >
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.metric}
                    </p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-rose-400/80">
                        <FiAlertCircle className="size-4 shrink-0" />
                        <span className="line-through">{item.legacy}</span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold text-emerald-400">
                        <FiCheck className="size-4 shrink-0" />
                        <span>{item.falcoonz}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
                <p className="font-mono text-xs text-emerald-300">
                  ⚡ Average Settlement Speed: <span className="font-black text-white">1.84 Seconds</span> across UK Clearing Banks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE 03: CONTINUOUS LEDGER & MANAGEMENT ACCOUNTS */}
      <section id="bookkeeping" className="scroll-mt-24 py-20 sm:py-28 relative">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
              <FiFileText size={14} />
              SERVICE SUITE · 03
            </div>

            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Continuous Ledger & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
                Management Accounts.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Real-time corporate financial visibility. We replace end-of-year catch-up chaos with automated continuous ledger management so every leadership decision is backed by verified numbers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookkeepingItems.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/80 to-[#060a16] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded px-2.5 py-1">
                      {item.code}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold border-t border-slate-800 pt-4">
                  <FiCheck size={14} /> Verified & Reconciled
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE 04: MTD VAT & STATUTORY RADAR */}
      <section id="compliance" className="scroll-mt-24 py-20 sm:py-28 relative bg-[#040814] border-t border-cyan-500/15">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
              <FiShield size={14} />
              REGULATORY RAIL · 04
            </div>

            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Quarterly MTD VAT & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Statutory Compliance Radar.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Full-spectrum compliance covering Making Tax Digital (MTD) VAT returns, HMRC audit trails, and automated alerts for key statutory milestones.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vatItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-7 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:-translate-y-1"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Statutory Deadlines Radar HUD */}
          <div className="mt-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#070e1c] via-[#050a14] to-[#081220] p-7 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                <FiCalendar className="size-4 text-cyan-400" />
                <span>Statutory Compliance Radar · Key UK Deadlines</span>
              </div>
              <span className="rounded-md border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase text-emerald-300">
                Zero Late-Penalty Guarantee
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="font-mono text-xs text-slate-400">Companies House Accounts</p>
                <p className="mt-2 text-xl font-bold text-white">9 Months</p>
                <p className="mt-1 text-xs text-cyan-400">From corporate financial year end</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="font-mono text-xs text-slate-400">HMRC Corporation Tax</p>
                <p className="mt-2 text-xl font-bold text-white">12 Months</p>
                <p className="mt-1 text-xs text-emerald-400">CT600 return filing window</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="font-mono text-xs text-slate-400">Digital VAT Returns</p>
                <p className="mt-2 text-xl font-bold text-white">Quarterly MTD</p>
                <p className="mt-1 text-xs text-purple-400">1 calendar month + 7 days</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="font-mono text-xs text-slate-400">CIS Monthly Submissions</p>
                <p className="mt-2 text-xl font-bold text-white">19th Monthly</p>
                <p className="mt-1 text-xs text-cyan-400">Subcontractor deductions filing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION: ADVISORY ONBOARDING */}
      <section className="relative overflow-hidden py-20 sm:py-24 border-t border-cyan-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,240,255,0.12),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#060c18] to-[#0a1426] p-8 sm:p-14 text-center lg:flex-row lg:text-left shadow-[0_0_60px_rgba(0,240,255,0.15)]">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Ready to upgrade your enterprise financial rails?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300">
                Connect directly with our UK senior financial directors for a free, zero-obligation architecture and tax deductibility audit.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:-translate-y-1"
            >
              <span>Schedule Architecture Review</span>
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
