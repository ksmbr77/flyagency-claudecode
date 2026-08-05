import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import IconDefs from "@/components/IconDefs";
import DiagnosticoProvider from "@/components/DiagnosticoContext";
import IntroLoader from "@/components/IntroLoader";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fly Agency",
  description:
    "Marketing digital para empresas que querem crescer: tráfego pago, posicionamento de marca e estratégia comercial.",
  openGraph: {
    title: "Fly Agency · Marketing que vende de verdade.",
    description:
      "Marketing digital para empresas que querem crescer: tráfego pago, posicionamento de marca e estratégia comercial.",
    siteName: "Fly Agency",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Agency · Marketing que vende de verdade.",
    description:
      "Marketing digital para empresas que querem crescer: tráfego pago, posicionamento de marca e estratégia comercial.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="intro-skip" strategy="beforeInteractive">
          {`(function(){try{var s=sessionStorage.getItem('fly-intro-shown');var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(s||r){document.documentElement.classList.add('intro-skip');}}catch(e){}})();`}
        </Script>
        <IconDefs />
        <IntroLoader />
        <CustomCursor />
        <SmoothScroll>
          <DiagnosticoProvider>{children}</DiagnosticoProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
