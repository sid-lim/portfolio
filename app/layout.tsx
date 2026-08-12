import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sid Lim — Data Engineer",
  description:
    "Portfolio of Sid Lim, a Data Engineer specializing in scalable data pipelines, analytics, and AI/ML integration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
