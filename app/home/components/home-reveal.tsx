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

      gsap.from(".hero-copy > *", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        y: 48,
        rotate: 3,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(".reveal-item");

        gsap.fromTo(
          items,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "top 42%",
              scrub: 1.1,
            },
          },
        );

        const parallax = section.querySelector<HTMLElement>(".section-parallax");
        if (parallax) {
          gsap.fromTo(
            parallax,
            { x: () => -window.innerWidth * 0.16, yPercent: 10 },
            {
              x: () => window.innerWidth * 1.08,
              yPercent: -14,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                end: "bottom 18%",
                scrub: 1.2,
              },
            },
          );
        }

        const sectionCircle = section.querySelector<HTMLElement>(".section-circle");
        if (sectionCircle) {
          gsap.fromTo(
            sectionCircle,
            { x: () => -window.innerWidth * 0.9 },
            {
              x: () => window.innerWidth * 0.9,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 92%",
                end: "top 18%",
                scrub: 1.4,
              },
            },
          );
        }
      });

      gsap.to(".floating-card, .floating-phone", {
        y: -14,
        rotate: -1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}