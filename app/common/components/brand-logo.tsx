import Link from "next/link";

type BrandLogoProps = {
  light?: boolean;
};

export function BrandLogo({ light = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
      aria-label="SAPs.Pro home"
    >
      {/* Umbrella Icon Badge */}
      <span
        className={`flex size-11 items-center justify-center rounded-xl border p-2 transition-transform hover:scale-105 ${
          light
            ? "border-amber-400/30 bg-black/60 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            : "border-slate-900/10 bg-slate-950 text-amber-400 shadow-sm"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7"
          aria-hidden="true"
        >
          {/* Canopy segments: Left yellow, Center black/slate, Right yellow */}
          <path
            d="M16 5C9.37 5 4 10.37 4 17C7.5 16 11 17.5 16 14C21 17.5 24.5 16 28 17C28 10.37 22.63 5 16 5Z"
            fill="#FBBF24"
          />
          <path
            d="M16 5C13.5 8 12.5 13 12 16.5C14.5 15.2 17.5 15.2 20 16.5C19.5 13 18.5 8 16 5Z"
            fill="#1E293B"
          />
          {/* Umbrella tip */}
          <path
            d="M16 2.5V5"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Umbrella shaft and J-hook handle */}
          <path
            d="M16 15V24.5C16 26.4 14.4 28 12.5 28C10.6 28 9 26.4 9 24.5"
            stroke={light ? "#FBBF24" : "#FBBF24"}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span>
        <span
          className={`block font-mono text-[0.58rem] font-bold uppercase tracking-[0.24em] ${
            light ? "text-amber-400" : "text-amber-600"
          }`}
        >
          Financial Services · UK
        </span>
        <span
          className={`block text-xl font-bold tracking-tight ${
            light ? "text-white" : "text-slate-950"
          }`}
        >
          SAPs<span className="text-amber-500">.</span>Pro
        </span>
      </span>
    </Link>
  );
}