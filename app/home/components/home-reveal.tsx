"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      // Hero content entrance
      gsap.from(".hero-copy > *", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        y: 48,
        rotate: 4,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
      });

      // Section items reveal on scroll
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(".reveal-item");

        gsap.fromTo(
          items,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 45%",
              scrub: 1.1,
            },
          },
        );
      });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}