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
        className="inline-flex size-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900/60 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
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
              className={`fixed inset-0 z-40 cursor-default bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Close navigation menu"
              tabIndex={isOpen ? 0 : -1}
            />

            {/* Sidebar drawer with guaranteed solid background outside any header containment */}
            <aside
              id="mobile-navigation"
              className={`fixed inset-y-0 right-0 z-50 flex h-full max-h-[100dvh] w-[88vw] max-w-sm flex-col border-l-2 border-cyan-400/40 bg-[#050811] text-white shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                backgroundColor: "#050811",
                height: "100dvh",
                maxHeight: "100dvh",
              }}
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer Header */}
              <div className="flex shrink-0 items-center justify-between px-6 pt-6 pb-2 sm:px-7">
                <BrandLogo />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-800 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  aria-label="Close navigation menu"
                >
                  <FiX aria-hidden="true" size={21} />
                </button>
              </div>

              {/* Scrollable Middle Content (Nav Links & Direct Advisory) */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-4 sm:px-7">
                {/* Main Navigation Links */}
                <nav aria-label="Mobile main navigation">
                  <ul className="space-y-3 sm:space-y-4">
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
                            className={`flex items-center justify-between border-b pb-3 text-lg sm:text-xl tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${
                              isActive
                                ? "border-cyan-400 font-bold text-cyan-400"
                                : "border-slate-900 font-medium text-slate-300 hover:text-cyan-400"
                            }`}
                          >
                            <span>{item.label}</span>
                            <FiArrowUpRight
                              aria-hidden="true"
                              size={20}
                              className={isActive ? "text-cyan-400" : "text-slate-500"}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Direct Advisory Click-To-Dial & Mail Section */}
                <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 backdrop-blur-sm">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                    Falcoonz Advisory Desk (UK)
                  </p>

                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-200">UK Financial Advisory</p>
                      <div className="mt-1 flex flex-col gap-1.5 text-xs">
                        <a
                          href="tel:+442080000000"
                          className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-cyan-400 active:text-cyan-400"
                        >
                          <FiPhone size={13} className="shrink-0 text-cyan-400" />
                          <span>+44 (0) 20 8000 0000</span>
                        </a>
                        <a
                          href="mailto:support@falcoonzpay.com"
                          className="inline-flex items-center gap-2 text-cyan-400/90 hover:underline active:text-cyan-300"
                        >
                          <FiMail size={13} className="shrink-0" />
                          <span>support@falcoonzpay.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Employee Login - Pinned above phone bottom bar & safe area */}
              <div
                className="shrink-0 border-t border-slate-900/90 bg-[#050811] px-6 pt-3.5 pb-8 sm:px-7"
                style={{
                  paddingBottom: "max(2rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))",
                }}
              >
                <a
                  href={BRIGHTHR_LOGIN_URL}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_28px_rgba(0,240,255,0.55)] active:scale-[0.99]"
                >
                  <FiLock aria-hidden="true" size={15} />
                  <span>Employee Login</span>
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </div>
  );
}