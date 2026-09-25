import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiShield, FiZap, FiActivity, FiLock, FiCpu } from "react-icons/fi";
import { AboutReveal } from "./about-reveal";

const principles = [
  {
    number: "01",
    icon: FiCpu,
    tag: "ALGORITHMIC",
    title: "Algorithmic Structuring",
    text: "Workforce payroll and director distributions dynamically modeled in real time to optimize corporate tax deductibility under UK statutory law.",
  },
  {
    number: "02",
    icon: FiZap,
    tag: "HIGH SPEED",
    title: "Direct Clearing Rails",
    text: "Direct integration with UK Faster Payments eliminates legacy 3-day BACS waiting periods, executing batch wages in under two seconds 24/7/365.",
  },
  {
    number: "03",
    icon: FiShield,
    tag: "ZERO PENALTY",
    title: "Continuous Audit Shield",
    text: "Full digital integration with HMRC Making Tax Digital (MTD) and Real-Time Information (RTI) ensuring zero late penalties or audit discrepancies.",
  },
];

const capabilities = [
  {
    title: "Sub-2s Settlement",
    desc: "Instant batch wage execution across UK clearing banks.",
    icon: FiZap,
  },
  {
    title: "100% RTI Compliance",
    desc: "Direct API dispatch to HMRC upon every payroll release.",
    icon: FiLock,
  },
  {
    title: "Tamper-Proof Audit",
    desc: "Cryptographic logging and continuous ledger alignment.",
    icon: FiActivity,
  },
];

export function AboutSections() {
  return (
    <AboutReveal>
      <div className="min-h-screen bg-[#03060c] text-slate-100 overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
        {/* 1. ABOUT HERO */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-cyan-500/15" aria-labelledby="about-title">
          {/* Ambient Cyber Backdrops */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/2 -right-32 size-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#050d1a_1px,transparent_1px),linear-gradient(to_bottom,#050d1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

          <div className="about-hero relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
              ABOUT FALCOONZ PAY · FINTECH INFRASTRUCTURE
            </div>

            <h1
              id="about-title"
              className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
            >
              Algorithmic Speed. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Absolute Statutory Compliance.
              </span>
            </h1>

            <div className="mt-8 flex max-w-3xl items-start gap-4 border-l-2 border-cyan-400/80 pl-5 text-base sm:text-lg leading-relaxed text-slate-300">
              Falcoonz PAY delivers next-generation financial rails for UK enterprises — replacing sluggish bureaus with real-time disbursals, automated tax efficiency, and uninterrupted ledger sync.
            </div>

            {/* Quick Hero Badges */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="flex items-center gap-3.5 rounded-2xl border border-cyan-500/20 bg-slate-950/60 p-4.5 backdrop-blur-xl"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{cap.title}</p>
                      <p className="text-xs text-slate-400">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. STORY / MISSION SECTION */}
        <section className="about-reveal py-20 sm:py-28 relative" aria-labelledby="story-title">
          <div className="mx-auto grid w-full max-w-[94rem] gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 xl:px-16">
            <div className="about-reveal-item lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-300">
                OUR MISSION & ARCHITECTURE
              </div>

              <h2
                id="story-title"
                className="mt-5 text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white"
              >
                Financial rails should accelerate growth, not create administrative drag.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
                When a UK enterprise expands from 10 to 150+ employees, the complexity of payroll obligations, dividend modeling, quarterly VAT deadlines, and HMRC regulations accelerates drastically.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Legacy payroll bureaus still operate on rigid 3-day BACS cycles and manual spreadsheets, forcing founders to lock operating capital days in advance. We built Falcoonz PAY to replace friction with instant execution: automated wage disbursals in seconds, zero late penalties, and continuous ledger alignment.
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-cyan-500/15 pt-6">
                <div className="size-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Engineered specifically for UK enterprises and corporate scale
                </p>
              </div>
            </div>

            <div className="about-reveal-item lg:col-span-6 relative aspect-[4/3] overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#070d1a] shadow-[0_0_50px_rgba(0,240,255,0.1)]">
              <Image
                className="about-image object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern corporate financial district in London"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03060c] via-[#03060c]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-cyan-400/40 bg-slate-950/85 px-4.5 py-3 backdrop-blur-xl shadow-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                  HMRC & MTD Direct Integration
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-400/30">
                  UNITED KINGDOM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GUIDING STANDARDS / 3D FAN-OUT CARDS */}
        <section className="about-reveal py-20 sm:py-28 relative bg-[#040814] border-y border-cyan-500/15" aria-labelledby="principles-title">
          <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="about-reveal-item flex flex-col justify-between gap-6 border-b border-cyan-500/20 pb-10 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                  WHAT GUIDES OUR CODE & SERVICE
                </p>
                <h2
                  id="principles-title"
                  className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white"
                >
                  Our Standards Of Excellence.
                </h2>
              </div>
              <p className="max-w-sm text-sm sm:text-base leading-relaxed text-slate-400">
                Three architectural commitments that ensure your business stays protected, optimized, and scalable.
              </p>
            </div>

            {/* 3D Perspective Fan-out cards animated via GSAP about-reveal.tsx */}
            <div className="mt-12 grid gap-6 [perspective:1000px] md:grid-cols-3">
              {principles.map(({ number, icon: Icon, tag, title, text }) => (
                <article
                  key={number}
                  className="about-reveal-item principle-card will-change-transform rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#081224] to-[#040914] p-7 sm:p-9 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]"
                >
                  <div className="flex items-center justify-between border-b border-cyan-500/15 pb-5">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded px-2.5 py-1">
                      {number}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-bold">
                      {tag}
                    </span>
                  </div>

                  <div className="mt-6 flex size-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>

                  <div className="mt-8 flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold border-t border-cyan-500/15 pt-4">
                    <FiCheck size={14} /> Guaranteed SLA
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ABOUT CTA */}
        <section className="about-reveal py-20 sm:py-28 relative" aria-labelledby="about-cta-title">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,240,255,0.1),transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#060c18] to-[#09152b] p-8 sm:p-14 text-center lg:flex-row lg:text-left shadow-[0_0_60px_rgba(0,240,255,0.15)]">
              <div className="about-reveal-item max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
                  <FiCheck className="size-3.5 text-cyan-400" />
                  START WITH TOTAL VISIBILITY
                </div>
                <h2
                  id="about-cta-title"
                  className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
                >
                  Let&apos;s review your current financial architecture.
                </h2>
                <p className="mt-3 text-base text-slate-300">
                  Schedule a direct, zero-obligation payroll structure and tax efficiency audit with our UK financial directors.
                </p>
              </div>

              <Link
                href="/contact"
                className="about-reveal-item inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:-translate-y-1"
              >
                <span>Book Architecture Consultation</span>
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AboutReveal>
  );
}