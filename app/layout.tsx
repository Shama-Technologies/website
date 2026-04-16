import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/layout/Navbar";
// import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative maxContainer antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
