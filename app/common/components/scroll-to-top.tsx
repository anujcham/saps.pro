"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_THRESHOLD = 300;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`group fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-cyan-500/30 bg-[#090e1c]/80 text-cyan-400 shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 ease-out hover:border-cyan-400 hover:bg-[#0c152a] hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050811] active:scale-95 sm:bottom-8 sm:right-8 sm:size-12 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <FiArrowUp className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
