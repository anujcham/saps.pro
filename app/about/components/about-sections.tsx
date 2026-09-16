import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiShield, FiUsers } from "react-icons/fi";
import { AboutReveal } from "./about-reveal";

const principles = [
  {
    number: "01",
    icon: FiShield,
    title: "Structured by Design",
    text: "Workforce payroll and management records structured to optimize tax deductibility and scale cleanly as you grow from 10 to 150 staff.",
  },
  {
    number: "02",
    icon: FiCheck,
    title: "100% HMRC Compliant",
    text: "Full digital integration with Making Tax Digital (MTD) and zero-tolerance for late filing penalties or calculation errors.",
  },
  {
    number: "03",
    icon: FiUsers,
    title: "Trusted Senior Advisors",
    text: "Direct, personal access to dedicated UK financial directors — Jai Bhola and Robert Taylor — ready with real-time strategic counsel.",
  },
];

export function AboutSections() {
  return (
    <AboutReveal>
      <div className="overflow-hidden">
        {/* About Hero */}
        <section className="relative bg-[#0c120f] text-white" aria-labelledby="about-title">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_30%),linear-gradient(130deg,#0a100d,#16231d)]" />
          <div className="about-hero relative mx-auto flex min-h-[560px] w-full max-w-[94rem] flex-col justify-end px-4 py-20 sm:px-8 lg:min-h-[620px] lg:px-12 xl:px-16 lg:py-28">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
              <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
              About SAPs.Pro
            </p>
            <h1
              id="about-title"
              className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[6rem]"
            >
              Structure, compliance & clarity<br />
              <span className="text-amber-400">for growing UK enterprises.</span>
            </h1>
            <div className="mt-9 flex max-w-2xl items-start gap-5 border-l-2 border-amber-400/80 pl-5 text-base leading-7 text-slate-300 sm:text-lg">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-amber-400" />
              SAPs.Pro provides dedicated financial management support — giving small and growing UK businesses the operational structure and confidence they need to succeed.
            </div>
          </div>
        </section>

        {/* Story / Mission Section */}
        <section className="about-reveal bg-slate-50" aria-labelledby="story-title">
          <div className="mx-auto grid w-full max-w-[94rem] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 xl:px-16 lg:py-28">
            <div className="about-reveal-item">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                Our Purpose
              </p>
              <h2
                id="story-title"
                className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl"
              >
                Financial management should drive growth, not administrative drag.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                When a UK company expands from 10 to 150 employees, the complexity of payroll obligations, quarterly VAT deadlines, and HMRC regulations accelerates drastically.
              </p>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                Without a unified partner, founders spend precious hours reconciling conflicting data. We replace confusion with a singular, tax-efficient framework that protects your business and positions it for profitability.
              </p>
            </div>

            <div className="about-reveal-item relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              <Image
                className="about-image object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern corporate financial district in London"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-md bg-amber-400 px-4 py-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-950 shadow">
                HMRC & MTD Ready · United Kingdom
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="about-reveal bg-amber-400 text-slate-950" aria-labelledby="principles-title">
          <div className="mx-auto w-full max-w-[94rem] px-4 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-28">
            <div className="about-reveal-item flex flex-col justify-between gap-6 border-b border-slate-950/20 pb-10 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-slate-900">
                  What Guides Us
                </p>
                <h2
                  id="principles-title"
                  className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
                >
                  Our Standards Of Excellence.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate-800">
                Three foundational commitments that ensure your business stays protected, optimized, and compliant.
              </p>
            </div>

            <div className="grid divide-y divide-slate-950/20 [perspective:1000px] md:grid-cols-3 md:divide-x md:divide-y-0">
              {principles.map(({ number, icon: Icon, title, text }) => (
                <article
                  key={number}
                  className="about-reveal-item principle-card will-change-transform py-8 md:px-8 md:first:pl-0 md:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-slate-900">{number}</span>
                    <Icon aria-hidden="true" size={26} className="text-slate-950" />
                  </div>
                  <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-950">{title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-800">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About CTA */}
        <section className="about-reveal bg-[#0c120f] text-white" aria-labelledby="about-cta-title">
          <div className="mx-auto flex w-full max-w-[94rem] flex-col gap-10 px-4 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16 lg:py-28">
            <div className="about-reveal-item">
              <div className="flex items-center gap-3 text-amber-400">
                <FiCheck aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em]">
                  Start With Clarity
                </span>
              </div>
              <h2
                id="about-cta-title"
                className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
              >
                Let&apos;s review your current financial structure.
              </h2>
            </div>
            <Link
              href="/contact"
              className="about-reveal-item inline-flex shrink-0 items-center gap-3 rounded-md bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg transition-transform hover:-translate-y-1 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
            >
              Book A Free Consultation <FiArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </div>
    </AboutReveal>
  );
}