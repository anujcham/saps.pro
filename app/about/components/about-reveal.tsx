"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(".about-hero > *", {
        y: 38,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll(".about-reveal-item:not(.principle-card)"),
          { y: 52, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 45%",
              scrub: 1,
            },
          },
        );

        const principleCards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".principle-card"),
        );

        if (principleCards.length) {
          principleCards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const sectionCenter = card.parentElement?.clientWidth
              ? card.parentElement.clientWidth / 2
              : cardCenter;
            const rotation = index === 0 ? -9 : index === 2 ? 9 : 0;

            gsap.fromTo(
              card,
              {
                x: sectionCenter - cardCenter,
                y: index === 1 ? -34 : 26,
                z: -120,
                rotateZ: rotation,
                rotateY: index === 0 ? 8 : index === 2 ? -8 : 0,
                scale: 0.86,
                opacity: 0.72,
              },
              {
                x: 0,
                y: 0,
                z: 0,
                rotateZ: 0,
                rotateY: 0,
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 86%",
                  end: "top 42%",
                  scrub: 0.35,
                },
              },
            );
          });
        }

        const image = section.querySelector<HTMLElement>(".about-image");
        if (image) {
          gsap.to(image, {
            yPercent: -10,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
        }
      });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => context.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}