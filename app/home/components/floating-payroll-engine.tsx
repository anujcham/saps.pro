"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiZap } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/**
 * 3D Floating Payroll Engine Asset
 * Starts in Section 3 ("Autonomous Systems. Engineered For Enterprise Scale.")
 * Smoothly floats down with the scroll into Section 4 ("Comprehensive Financial & Settlement Architecture.")
 * Fixes in Section 4 on continued downward scroll; floats back up to Section 3 on upward scroll.
 */
export function FloatingPayrollEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const assetEl = visualRef.current;
    const container = containerRef.current;
    if (!assetEl || !container) return;

    const mm = gsap.matchMedia();

    // Desktop: Smooth floating scroll animation from Section 3 to Section 4
    mm.add("(min-width: 1024px)", () => {
      const scrollAnim = gsap.to(assetEl, {
        x: () => {
          const target = document.getElementById("services-engine-dock");
          if (!target || !assetEl) return 0;
          const tRect = target.getBoundingClientRect();
          const aRect = assetEl.getBoundingClientRect();
          const curX = (gsap.getProperty(assetEl, "x") as number) || 0;
          return tRect.left - (aRect.left - curX) + (tRect.width - aRect.width) / 2;
        },
        y: () => {
          const target = document.getElementById("services-engine-dock");
          if (!target || !assetEl) return 0;
          const tRect = target.getBoundingClientRect();
          const aRect = assetEl.getBoundingClientRect();
          const curY = (gsap.getProperty(assetEl, "y") as number) || 0;
          return tRect.top - (aRect.top - curY) + (tRect.height - aRect.height) / 2;
        },
        scale: 1.02,
        rotateY: 6,
        rotateZ: -1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#section-architecture",
          start: "top 30%", // Visibly floats as user scrolls on Section 3
          endTrigger: "#services",
          end: "top 30%", // Completes float and settles when Section 4 arrives at same position
          scrub: 1, // Fluid 1-to-1 scrub matching scroll velocity
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollAnim.kill();
      };
    });

    // Subtle 3D mouse hover tilt
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(assetEl, {
        rotationY: x * 0.035,
        rotationX: -y * 0.035,
        transformPerspective: 900,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    const onMouseLeave = () => {
      gsap.to(assetEl, {
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
        duration: 0.8,
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      mm.revert();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="engine-origin-anchor"
      className="relative z-40 flex w-full max-w-[460px] min-h-[340px] lg:min-h-[420px] items-center justify-center py-4 lg:py-0"
    >
      {/* Ambient Volumetric Backlight */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/15 to-emerald-400/10 blur-3xl animate-pulse" />

      {/* Floating 3D Visual Asset */}
      <div
        ref={visualRef}
        id="floating-payroll-asset"
        className="relative z-50 flex flex-col items-center will-change-transform"
      >
        <div className="relative size-[280px] sm:size-[360px] lg:size-[420px] transition-transform duration-500">
          <Image
            src="/images/payroll-engine-3d.png"
            alt="Falcoonz PAY Autonomous 3D Payroll & Faster Payments Engine"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
            className="object-contain drop-shadow-[0_20px_45px_rgba(0,240,255,0.4)]"
            priority
          />
        </div>

        {/* Live Engine Status Badge */}
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
            AUTONOMOUS PAYROLL ENGINE · ACTIVE
          </span>
          <FiZap className="text-cyan-400" size={12} />
        </div>
      </div>
    </div>
  );
}

/**
 * Section 4 Destination Dock (where the engine sets and fixes)
 */
export function ServicesEngineDock() {
  return (
    <div
      id="services-engine-dock"
      className="relative hidden lg:flex min-h-[340px] lg:min-h-[420px] w-full max-w-[460px] items-center justify-center rounded-3xl border border-cyan-500/20 bg-slate-900/20 backdrop-blur-sm p-4 transition-all duration-500"
    >
      {/* Subtle Glowing Landing Perimeter */}
      <div className="pointer-events-none absolute inset-3 rounded-2xl border border-dashed border-cyan-500/25" />
      <span className="pointer-events-none absolute left-4 top-4 font-mono text-xs text-cyan-400/40 font-bold">┌</span>
      <span className="pointer-events-none absolute right-4 top-4 font-mono text-xs text-cyan-400/40 font-bold">┐</span>
      <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs text-cyan-400/40 font-bold">└</span>
      <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-xs text-cyan-400/40 font-bold">┘</span>
    </div>
  );
}
