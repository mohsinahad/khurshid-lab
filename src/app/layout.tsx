import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Khurshid Lab | Cancer Research & RNA Biology",
  description:
    "The Khurshid Lab at Sanford Research investigates dysregulated alternative splicing in cancer, contributing to tumor progression and therapy resistance.",
  keywords: [
    "cancer research",
    "alternative splicing",
    "RNA biology",
    "pediatric cancer",
    "Safiya Khurshid",
    "Sanford Research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
