import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://www.khurshidlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Khurshid Lab | Cancer Research & RNA Biology",
    template: "%s | Khurshid Lab",
  },
  description:
    "The Khurshid Lab at Sanford Research investigates dysregulated alternative splicing in cancer, contributing to tumor progression and therapy resistance.",
  keywords: [
    "cancer research",
    "alternative splicing",
    "RNA biology",
    "pediatric cancer",
    "Safiya Khurshid",
    "Sanford Research",
    "MDM2",
    "p53",
    "RNA splicing cancer",
  ],
  authors: [{ name: "Safiya Khurshid", url: siteUrl }],
  creator: "Khurshid Lab",
  publisher: "Sanford Research",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khurshid Lab",
    title: "Khurshid Lab | Cancer Research & RNA Biology",
    description:
      "The Khurshid Lab at Sanford Research investigates dysregulated alternative splicing in cancer, contributing to tumor progression and therapy resistance.",
    images: [
      {
        url: "/images/khurshid-lab-team.png",
        width: 1200,
        height: 630,
        alt: "Khurshid Lab — Cancer Research & RNA Biology at Sanford Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khurshid Lab | Cancer Research & RNA Biology",
    description:
      "The Khurshid Lab at Sanford Research investigates dysregulated alternative splicing in cancer, contributing to tumor progression and therapy resistance.",
    images: ["/images/khurshid-lab-team.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Khurshid Lab",
  url: siteUrl,
  description:
    "The Khurshid Lab at Sanford Research investigates dysregulated alternative splicing in cancer, contributing to tumor progression and therapy resistance.",
  foundingLocation: {
    "@type": "Place",
    name: "Sanford Research, Sioux Falls, SD",
  },
  member: {
    "@type": "Person",
    name: "Safiya Khurshid",
    jobTitle: "Principal Investigator",
    affiliation: {
      "@type": "Organization",
      name: "Sanford Research",
    },
  },
  knowsAbout: [
    "Alternative RNA Splicing",
    "Cancer Biology",
    "Pediatric Cancer",
    "MDM2",
    "p53 Pathway",
    "RNA Binding Proteins",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
