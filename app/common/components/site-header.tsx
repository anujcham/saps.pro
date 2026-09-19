"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLock } from "react-icons/fi";
import { BrandLogo } from "./brand-logo";
import { HeaderScrollEffect } from "./header-scroll-effect";
import { MobileSidebar } from "./mobile-sidebar";
import { navigation, BRIGHTHR_LOGIN_URL } from "./site-navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/+$/, "") || "/";

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md" data-site-header data-scrolled="false">
      <HeaderScrollEffect />
      <div className="site-header__inner mx-auto flex min-h-20 w-full max-w-[94rem] items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12 xl:px-16">
        <BrandLogo />

        <nav className="hidden min-[1025px]:block" aria-label="Main navigation">
          <ul className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2 text-sm font-semibold">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? normalizedPath === "/"
                  : normalizedPath === item.href ||
                  normalizedPath.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative py-2 transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${isActive
                        ? "font-bold text-amber-600"
                        : "text-slate-700 hover:text-amber-600"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-amber-500 transition-transform duration-300 ease-out ${isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 min-[1025px]:flex">
          <a
            href={BRIGHTHR_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
          >
            <FiLock aria-hidden="true" size={14} />
            <span>Login</span>
          </a>
        </div>
        <MobileSidebar />
      </div>
    </header>
  );
}