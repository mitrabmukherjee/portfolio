"use client";

import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import SectionNavRail from "./components/SectionNavRail";
import NeuralBackground from "./components/NeuralBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
      </div>
      <div className="relative z-10 bg-background/50 backdrop-blur-sm">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ServicesSection />
        <ContactSection />
      </div>
      <SectionNavRail />
    </main>
  );
}
