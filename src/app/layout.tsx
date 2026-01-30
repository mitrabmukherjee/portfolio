import type { Metadata } from "next";
import { Geist_Mono, SUSE, Alice } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Topbar from "@/app/components/Topbar";
import Footer from "@/app/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import ReCaptchaProvider from "@/app/components/ReCaptchaProvider";
import LoadingOverlay from "@/app/components/LoadingOverlay";

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
  title: "Deanna Copping - Court Transcription Services",
  description:
    "Professional court transcription services specializing in criminal proceedings, Charter applications, and appellate work. Accurate, reliable, and trusted by legal professionals.",
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
        <LoadingOverlay />
        <ReCaptchaProvider>
          <Topbar />
          <Navbar />
          {children}
          <Toaster position="top-right" richColors />
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
