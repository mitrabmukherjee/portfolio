"use client";

import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ReachOutSection from "./components/ReachOutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <ServicesSection />
      <ReachOutSection />
    </main>
  );
}
