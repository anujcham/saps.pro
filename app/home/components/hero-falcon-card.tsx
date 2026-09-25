"use client";

import { useEffect, useRef } from "react";
import { FiWifi, FiCheckCircle } from "react-icons/fi";

export function HeroFalconCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    let bounds: DOMRect;

    const onMouseEnter = () => {
      bounds = container.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = container.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const rotateX = ((mouseY - centerY) / centerY) * -12;
      const rotateY = ((mouseX - centerX) / centerX) * 14;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const onMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="traveling-card-container relative mx-auto w-full max-w-[450px] py-1"
    >
      {/* Dynamic Cyan/Emerald Ambient Glow behind card */}
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-500/25 via-teal-500/20 to-emerald-500/25 blur-xl opacity-75" />

      {/* 3D Traveling Card Element */}
      <div
        id="traveling-card"
        ref={cardRef}
        className="traveling-card relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#0c162d]/95 via-[#070d1d]/98 to-[#040813] p-5 sm:p-6 text-white shadow-[0_20px_50px_rgba(0,240,255,0.16),0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Holographic Sheen Layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.15),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_50%)]" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-cyan-300">
              Falcoonz Secure Pay
            </span>
          </div>
          <FiWifi size={17} className="text-cyan-400/80 rotate-90" />
        </div>

        {/* Smart EMV Chip & Badge */}
        <div className="relative z-10 mt-4 flex items-center justify-between">
          {/* Gold & Titanium EMV Chip */}
          <div className="relative size-10 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-0.5 shadow-inner border border-amber-300/60">
            <div className="size-full rounded-md border border-amber-800/40 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5 opacity-90">
              <div className="border-r border-b border-amber-900/40" />
              <div className="border-b border-amber-900/40" />
              <div className="border-r border-amber-900/40" />
              <div />
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
            <FiCheckCircle size={12} className="text-emerald-400" />
            <span>INSTANT DISBURSAL</span>
          </div>
        </div>

        {/* Live Payroll Amount Ticker */}
        <div className="relative z-10 mt-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Current Payroll Cycle Volume
          </p>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
              £148,920.00
            </span>
            <span className="font-mono text-[11px] font-bold text-cyan-400">GBP</span>
          </div>
        </div>

        {/* Card Footer: Cardholder & Network */}
        <div className="relative z-10 mt-5 flex items-end justify-between border-t border-slate-800/80 pt-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
              Enterprise Account
            </p>
            <p className="font-mono text-[11px] font-bold tracking-wider text-slate-200 uppercase">
              Falcon Enterprise Global
            </p>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-sans text-[11px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              FALCOONZ
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400">
              NETWORK
            </span>
          </div>
        </div>

        {/* Corner 3D highlight */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 size-32 rounded-full bg-cyan-500/20 blur-xl" />
      </div>
    </div>
  );
}
