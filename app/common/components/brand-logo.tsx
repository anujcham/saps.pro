import Link from "next/link";

type BrandLogoProps = {
  light?: boolean;
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center gap-3 transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${className}`}
      aria-label="Falcoonz PAY Home"
    >
      {/* 3D Geometric Falcon Emblem */}
      <div className="relative flex size-10 sm:size-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-emerald-500/20 p-2 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_28px_rgba(0,240,255,0.45)]">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="falcon-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#00ff9d" />
            </linearGradient>
            <linearGradient id="falcon-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Aerodynamic Falcon Wings / Chevron */}
          <path
            d="M20 5 L35 15 L28 20 L20 12 L12 20 L5 15 Z"
            fill="url(#falcon-cyan)"
            className="drop-shadow-[0_2px_8px_rgba(0,240,255,0.6)]"
          />
          <path
            d="M20 14 L32 23 L26 28 L20 20 L14 28 L8 23 Z"
            fill="url(#falcon-dark)"
          />
          <path
            d="M20 22 L27 30 L20 36 L13 30 Z"
            fill="url(#falcon-cyan)"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold tracking-[-0.03em] text-lg sm:text-xl text-white font-sans">
            FALCOONZ
          </span>
          <span className="rounded bg-gradient-to-r from-cyan-500 to-emerald-400 px-1.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            PAY
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-400/80">
          Smart Payroll & Payments
        </span>
      </div>
    </Link>
  );
}