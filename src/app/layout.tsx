import type { Metadata } from "next";
import { Geist_Mono, SUSE, Alice } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import ReCaptchaProvider from "@/app/components/ReCaptchaProvider";
import LoadingOverlay from "@/app/components/LoadingOverlay";
import PageTransitionBar from "@/app/components/PageTransitionBar";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import ScrollToTop from "@/app/components/ScrollToTop";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mitra Brinda Mukherjee - AI-ML Developer",
  description:
    "Personal portfolio of Mitra Brinda Mukherjee, an AI-ML Developer showcasing projects in AI, machine learning, deep learning, and data science.",
  icons: {
    icon: "/images/Copping-Transcription-Logo.png",
    shortcut: "/images/Copping-Transcription-Logo.png",
    apple: "/images/Copping-Transcription-Logo.png",
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
        className={`${geistMono.variable} ${suse.variable} ${alice.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingOverlay />
        <PageTransitionBar />
        <ScrollProgressBar />
        <ReCaptchaProvider>
          <Navbar />
          <div id="main-content">{children}</div>
          <ScrollToTop />
          <Toaster position="top-right" richColors />
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
