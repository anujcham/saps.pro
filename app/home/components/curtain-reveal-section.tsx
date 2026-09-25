"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCpu, FiTrendingUp, FiLock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CurtainRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const centerSeamRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const leftDoor = leftDoorRef.current;
    const rightDoor = rightDoorRef.current;
    const centerSeam = centerSeamRef.current;
    const content = contentRef.current;

    if (!container || !leftDoor || !rightDoor || !centerSeam || !content) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Split open the left and right curtain panels like doors
      tl.to(
        leftDoor,
        {
          xPercent: -102,
          ease: "power2.inOut",
        },
        0
      )
        .to(
          rightDoor,
          {
            xPercent: 102,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          centerSeam,
          {
            opacity: 0,
            scaleY: 0,
            ease: "power1.out",
          },
          0
        )
        // Zoom and reveal the underlying content
        .fromTo(
          content,
          {
            scale: 0.88,
            opacity: 0.4,
            filter: "blur(6px)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
          },
          0.1
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="curtain-stage relative h-screen h-[100dvh] w-full overflow-hidden bg-[#03060c] text-white"
    >
      {/* 1. Underlying Revealed Content (Revealed when curtains part) */}
      <div
        ref={contentRef}
        className="curtain-content relative z-10 flex size-full flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-16 sm:pt-0 pb-4 sm:pb-0"
      >
        <div className="relative mx-auto w-full max-w-[88rem]">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-72 sm:size-96 rounded-full bg-cyan-500/15 blur-3xl" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 sm:px-4 sm:py-1.5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-cyan-300">
              <span className="size-1.5 sm:size-2 rounded-full bg-cyan-400 animate-ping" />
              Inside The Falcoonz Engine
            </div>

            <h2 className="mt-2 sm:mt-6 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-[1.05]">
              Automated Payroll. <br className="hidden xs:inline sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Frictionless Disbursals.
              </span>
            </h2>

            <p className="mt-1.5 sm:mt-5 text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We replaced legacy bureau delays with smart real-time execution. Direct HMRC compliance, instant automated payslips, and continuous VAT ledger alignment built for UK enterprises.
            </p>
          </div>

          {/* 3 Interactive Feature Pillars */}
          <div className="mt-3 sm:mt-12 grid gap-2.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Pillar 1 */}
            <div className="group relative rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-[#060a16] p-3 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
              <div className="flex sm:block items-center sm:items-start gap-3">
                <div className="size-9 sm:size-12 shrink-0 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                  <FiCpu className="size-4 sm:size-[22px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-xl font-bold text-white sm:mt-5">Hybrid Tax Optimization</h3>
                  <p className="mt-0.5 sm:mt-2 text-xs sm:text-sm leading-snug sm:leading-relaxed text-slate-400 line-clamp-2 sm:line-clamp-none">
                    Dynamically model salary, dividends, and benefits in accordance with UK statutory laws, lowering effective corporate tax liability safely.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-[#060a16] p-3 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
              <div className="flex sm:block items-center sm:items-start gap-3">
                <div className="size-9 sm:size-12 shrink-0 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  <FiTrendingUp className="size-4 sm:size-[22px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-xl font-bold text-white sm:mt-5">Instant Faster Payments</h3>
                  <p className="mt-0.5 sm:mt-2 text-xs sm:text-sm leading-snug sm:leading-relaxed text-slate-400 line-clamp-2 sm:line-clamp-none">
                    Disburse batch wages across 150+ staff in seconds with direct UK Faster Payments integration, eliminating 3-day BACS waiting times.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/90 to-[#060a16] p-3 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
              <div className="flex sm:block items-center sm:items-start gap-3">
                <div className="size-9 sm:size-12 shrink-0 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 transition-transform duration-300 group-hover:scale-110">
                  <FiLock className="size-4 sm:size-[22px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-xl font-bold text-white sm:mt-5">Automated MTD & RTI</h3>
                  <p className="mt-0.5 sm:mt-2 text-xs sm:text-sm leading-snug sm:leading-relaxed text-slate-400 line-clamp-2 sm:line-clamp-none">
                    Never miss an HMRC filing deadline. Continuous Making Tax Digital compliance with full audit logs and tamper-proof records.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-3.5 sm:mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:-translate-y-0.5"
            >
              <span>Explore All Financial Capabilities</span>
              <FiArrowRight className="size-3.5 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Left Split Door / Curtain Panel */}
      <div
        ref={leftDoorRef}
        className="pointer-events-none absolute inset-y-0 left-0 z-30 flex w-1/2 flex-col justify-center border-r-2 border-cyan-400/50 bg-[#070d1a] px-4 sm:px-14 shadow-[15px_0_45px_rgba(0,0,0,0.85)]"
      >
        <div className="max-w-md self-end text-right">
          <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-400">
            FALCOONZ ARCHITECTURE
          </p>
          <p className="mt-2 sm:mt-3 text-2xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
            NEXT-GEN <br />
            <span className="text-cyan-400">SPEED</span>
          </p>
        </div>
      </div>

      {/* 3. Right Split Door / Curtain Panel */}
      <div
        ref={rightDoorRef}
        className="pointer-events-none absolute inset-y-0 right-0 z-30 flex w-1/2 flex-col justify-center border-l-2 border-cyan-400/50 bg-[#070d1a] px-4 sm:px-14 shadow-[-15px_0_45px_rgba(0,0,0,0.85)]"
      >
        <div className="max-w-md self-start text-left">
          <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400">
            ENTERPRISE GRADE
          </p>
          <p className="mt-2 sm:mt-3 text-2xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
            COMPLIANCE <br />
            <span className="text-emerald-400">UNLOCKED</span>
          </p>
        </div>
      </div>

      {/* 4. Center Glowing Seam Indicator */}
      <div
        ref={centerSeamRef}
        className="pointer-events-none absolute inset-y-0 left-1/2 z-35 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-10 sm:size-12 items-center justify-center rounded-full border border-cyan-400/80 bg-slate-950 shadow-[0_0_25px_#00f0ff]">
          <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
      </div>
    </div>
  );
}

