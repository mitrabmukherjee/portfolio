import type { Metadata } from "next";
import { Geist_Mono, SUSE, Alice } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Topbar from "@/app/components/Topbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner"

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
  title: "Sue Loney - Court Transcription Services",
  description:
    "Professional court transcription services specializing in criminal and civil transcripts. Accurate, reliable, and trusted by legal professionals.",
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
        <Topbar />
        <Navbar />
        {children}
        <Toaster position="top-right" richColors />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
