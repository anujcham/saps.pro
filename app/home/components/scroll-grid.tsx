"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollGrid() {
  const grid = useRef<HTMLDivElement>(null);
  const horizon = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.to(grid.current, {
        rotateX: 68,
        rotateZ: -7,
        scale: 1.4,
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: grid.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(horizon.current, {
        yPercent: 45,
        scaleX: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: grid.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle warm radial ambiance across the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(245,158,11,0.12),transparent_65%)]" />

      {/* Horizon glow line positioned higher so grid covers nearly the entire hero section */}
      <div
        ref={horizon}
        className="absolute left-1/2 top-[22%] h-px w-[140%] -translate-x-1/2 bg-amber-400/40 shadow-[0_0_28px_6px_rgba(245,158,11,0.25)]"
      />

      {/* 3D Perspective grid starting near the top to cover almost full hero section */}
      <div
        ref={grid}
        className="absolute -left-[35%] top-[6%] h-[140%] w-[170%] origin-top [transform:perspective(520px)_rotateX(66deg)_rotateZ(-7deg)] [background-image:linear-gradient(rgba(245,158,11,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.18)_1px,transparent_1px)] [background-size:72px_58px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_82%,transparent_100%)]"
      />
    </div>
  );
}