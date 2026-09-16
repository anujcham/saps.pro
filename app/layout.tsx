import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/app/common/components/site-footer";
import { SiteHeader } from "@/app/common/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAPs.Pro | Structured. Compliant. Trusted. UK Financial Services",
  description: "Dedicated financial management support, hybrid tax-efficient payroll, bookkeeping, and VAT returns for UK businesses with 10 to 150 employees.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-slate-50 text-slate-950">
        <SiteHeader />
        <main className="flex flex-1 flex-col pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
