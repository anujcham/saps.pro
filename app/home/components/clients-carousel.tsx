"use client";

import { useRef, useState, useEffect } from "react";
import {
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCoffee,
  FiShoppingBag,
  FiHome,
  FiBriefcase,
  FiAward,
  FiUser,
} from "react-icons/fi";

const sectors = [
  {
    name: "Hospitality & Leisure",
    desc: "Restaurants, hotels, bars & event venues with variable shifts.",
    icon: FiCoffee,
  },
  {
    name: "Food, Beverage & Retail",
    desc: "Fast-moving inventory, high-volume transactions & staff rotas.",
    icon: FiShoppingBag,
  },
  {
    name: "Construction & Property",
    desc: "Specialist CIS returns, subcontractors & project cashflow.",
    icon: FiHome,
  },
  {
    name: "Corporate & Enterprise",
    desc: "Scalable financial oversight, audits & corporate tax planning.",
    icon: FiBriefcase,
  },
  {
    name: "Professional Services",
    desc: "Consultancies, legal, design & tech firms requiring precision.",
    icon: FiAward,
  },
  {
    name: "Owner-Managed Enterprises",
    desc: "Hands-on founders looking to reclaim time from admin burdens.",
    icon: FiUser,
  },
];

export function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approximate active slide
    const slideWidth = el.clientWidth * 0.85;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), sectors.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".carousel-card");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-14">
      {/* Slider controls for mobile & tablet (< lg) */}
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
          Swipe to explore ({activeIndex + 1}/{sectors.length})
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous client sector"
            className="flex size-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-white transition-colors hover:border-amber-400 hover:text-amber-400 disabled:opacity-40"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next client sector"
            className="flex size-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-white transition-colors hover:border-amber-400 hover:text-amber-400 disabled:opacity-40"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards container: Swipeable Carousel on Mobile/Tablet (< lg), 3-col Grid on Laptop/PC (>= lg) */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 lg:pt-0 lg:snap-none"
      >
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <div
              key={sector.name}
              className="carousel-card reveal-item group flex w-[85vw] max-w-[340px] shrink-0 snap-center flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-7 shadow-lg transition-all hover:border-amber-400/60 hover:bg-slate-900 sm:w-[60vw] sm:max-w-[380px] md:w-[46vw] lg:w-auto lg:max-w-none lg:shrink lg:snap-align-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Yellowish Circle with Dark Icon */}
                  <span className="flex size-11 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-[0_0_16px_rgba(245,158,11,0.45)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <span className="rounded bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-300">
                    10–150 Staff
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-amber-300">
                  {sector.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {sector.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-800/80 pt-4 font-mono text-xs text-amber-400">
                <FiCheck size={14} className="text-amber-400" />
                <span>Full statutory compliance</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination dots on mobile & tablet */}
      <div className="mt-4 flex items-center justify-center gap-1.5 lg:hidden">
        {sectors.map((sector, i) => (
          <button
            key={sector.name}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === i ? "w-6 bg-amber-400" : "w-1.5 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

