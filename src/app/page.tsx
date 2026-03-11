"use client";

import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ReachOutSection from "./components/ReachOutSection";
import SectionNavRail from "./components/SectionNavRail";

export default function Home() {
  return (
    <main id="top" className="min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <ServicesSection />
      <ReachOutSection />
      <SectionNavRail />
    </main>
  );
}
