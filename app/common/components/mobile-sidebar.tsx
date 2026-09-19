"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { FiArrowUpRight, FiMenu, FiX, FiPhone, FiMail, FiLock } from "react-icons/fi";
import { BrandLogo } from "./brand-logo";
import { navigation, BRIGHTHR_LOGIN_URL } from "./site-navigation";

const emptySubscribe = () => () => {};

export function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const normalizedPath = pathname?.replace(/\/+$/, "") || "/";

  return (
    <div className="min-[1025px]:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 text-slate-950 transition-colors hover:border-amber-500 hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <FiMenu aria-hidden="true" size={21} />
      </button>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 transition-[visibility] duration-300 ${
              isOpen ? "visible" : "invisible"
            }`}
            aria-hidden={!isOpen}
            inert={!isOpen}
          >
            {/* Full Screen Backdrop */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 z-40 cursor-default bg-slate-950/75 backdrop-blur-sm transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Close navigation menu"
              tabIndex={isOpen ? 0 : -1}
            />

            {/* Sidebar drawer with guaranteed solid background outside any header containment */}
            <aside
              id="mobile-navigation"
              className={`fixed right-0 top-0 bottom-0 z-50 flex h-dvh min-h-screen w-[88vw] max-w-sm flex-col border-l-4 border-amber-400 bg-[#090e0b] px-6 py-7 text-white shadow-2xl transition-transform duration-300 ease-out sm:px-7 overflow-y-auto ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ backgroundColor: "#090e0b" }}
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between">
                <BrandLogo light />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-slate-700 text-white transition-colors hover:border-amber-400 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                  aria-label="Close navigation menu"
                >
                  <FiX aria-hidden="true" size={21} />
                </button>
              </div>

              {/* Main Navigation Links */}
              <nav className="mt-8" aria-label="Mobile main navigation">
                <ul className="space-y-4">
                  {navigation.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? normalizedPath === "/"
                        : normalizedPath === item.href ||
                          normalizedPath.startsWith(`${item.href}/`);

                    return (
                      <li
                        key={item.href}
                        className={`transition-[opacity,transform] duration-300 ${
                          isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center justify-between border-b pb-3 text-xl tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${
                            isActive
                              ? "border-amber-400 font-bold text-amber-400"
                              : "border-slate-800 font-medium text-white hover:text-amber-400"
                          }`}
                        >
                          <span>{item.label}</span>
                          <FiArrowUpRight
                            aria-hidden="true"
                            size={20}
                            className={isActive ? "text-amber-400" : "text-slate-500"}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Direct Advisory Click-To-Dial & Mail Section */}
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-amber-400">
                  Direct Advisory (UK)
                </p>

                <div className="mt-4 space-y-3">
                  {/* Jai Bhola */}
                  <div>
                    <p className="text-xs font-semibold text-slate-200">Jai Bhola</p>
                    <div className="mt-1 flex flex-col gap-1 text-xs">
                      <a
                        href="tel:+447436343619"
                        className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-amber-400 active:text-amber-400"
                      >
                        <FiPhone size={13} className="shrink-0 text-amber-400" />
                        <span>+44 743 6343 619</span>
                      </a>
                      <a
                        href="mailto:ask@saps.pro"
                        className="inline-flex items-center gap-2 text-amber-400/90 hover:underline active:text-amber-300"
                      >
                        <FiMail size={13} className="shrink-0" />
                        <span>ask@saps.pro</span>
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/80" />

                  {/* Robert Taylor */}
                  <div>
                    <p className="text-xs font-semibold text-slate-200">Robert Taylor</p>
                    <div className="mt-1 flex flex-col gap-1 text-xs">
                      <a
                        href="tel:+447950721126"
                        className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-amber-400 active:text-amber-400"
                      >
                        <FiPhone size={13} className="shrink-0 text-amber-400" />
                        <span>+44 795 0721 126</span>
                      </a>
                      <a
                        href="mailto:rob@saps.pro"
                        className="inline-flex items-center gap-2 text-amber-400/90 hover:underline active:text-amber-300"
                      >
                        <FiMail size={13} className="shrink-0" />
                        <span>rob@saps.pro</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Client Login */}
              <div className="mt-auto pt-6">
                <a
                  href={BRIGHTHR_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 shadow transition-all hover:bg-amber-300 active:scale-[0.99]"
                >
                  <FiLock aria-hidden="true" size={15} />
                  <span>Client Login</span>
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </div>
  );
}