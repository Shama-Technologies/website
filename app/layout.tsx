import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import SiteNav from "../components/site/SiteNav";
import SiteFooter from "../components/site/SiteFooter";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: 'Shama | Bringing the Gospel Closer to You',
  description: 'Stream and download sermons, worship music, and podcasts on Shama — the faith-based platform for Christians to grow spiritually and connect with a global community.',
  keywords: 'christian app, sermons, gospel music, worship, podcasts, faith, nigeria, africa, christian streaming',
  metadataBase: new URL('https://shamaapp.com'),
  openGraph: {
    title: 'Shama | Bringing the Gospel Closer to You',
    description: 'Stream and download sermons, worship music, and podcasts on Shama.',
    url: 'https://shamaapp.com',
    siteName: 'Shama',
    images: [{ url: 'https://shamaapp.com/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shama | Bringing the Gospel Closer to You',
    description: 'Stream and download sermons, worship music, and podcasts on Shama.',
    images: ['https://shamaapp.com/og-image.png'],
  },
};

export const viewport = {
  themeColor: "#0B0A14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${montserrat.variable} ${jetbrains.variable} relative antialiased`}
      >
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
