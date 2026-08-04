import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Fly Agency",
  description: "Landing page da Fly Agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
