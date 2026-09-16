import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  light?: boolean;
  className?: string;
};

export function BrandLogo({ light = false, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center transition-all hover:opacity-95 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 ${className}`}
      aria-label="SAPs.Pro home"
    >
      <Image
        src={light ? "/images/logo-dark.png" : "/images/logo-light.png"}
        alt="SAPs.Pro Financial Services UK"
        width={230}
        height={86}
        priority
        className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </Link>
  );
}