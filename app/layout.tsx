import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/app/common/components/site-footer";
import { SiteHeader } from "@/app/common/components/site-header";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Falcoonz PAY | Smart Payroll & Intelligent Financial Infrastructure",
  description: "Next-generation payroll engineering, tax-efficient workforce financial management, and real-time compliance for forward-thinking enterprises.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        <SiteHeader />
        <main className="flex flex-1 flex-col pt-18 sm:pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
