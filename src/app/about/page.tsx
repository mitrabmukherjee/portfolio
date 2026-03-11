"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Users, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/app/components/TiltCard";
import FlyInCards from "@/app/components/FlyInCards";
import TypewriterText from "@/app/components/TypewriterText";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

const sections = [
  {
    icon: Brain,
    title: "Applied ML & Deep Learning",
    items: [
      "Automated YARA rule generation for malware detection",
      "Deep learning pipelines for deepfake identification (CNNs)",
      "Automated systems for promoter identification (CEFs)",
    ],
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Responsible & Explainable AI",
    items: [
      "Detecting misuse of AI with robust & explainable models",
      "Combining detection, motivation & explainability frameworks",
      "Collaborative research and model evaluation practices",
    ],
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Quality & Collaboration",
    items: [
      "Structured collaboration and strategic thinking",
      "High-impact AI solutions through effective teamwork",
      "Research-driven development",
    ],
    delay: 0.3,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden tech-grid">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-20 w-[28rem] h-[28rem] bg-gradient-to-r from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/3 w-[32rem] h-[32rem] bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Hero block */}
      <section className="relative pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="tech-label inline-flex items-center gap-2 text-primary font-semibold mb-4"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                about
              </motion.span>
              <h1 className="font-alice text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                AI–ML Developer
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <TypewriterText
                  text="Building intelligent systems for real-world AI: automated malware analysis, deepfake detection, and explainable machine learning."
                  as="p"
                  className="text-lg md:text-xl text-slate-800 leading-relaxed"
                  duration={3.5}
                  delay={0.4}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold bg-primary text-white shadow-lg hover:bg-secondary hover:text-primary hover:shadow-xl transition-all duration-300 border-2 border-primary hover:border-secondary"
              >
                View projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section cards */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <FlyInCards className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map(({ icon: Icon, title, items, delay }, i) => (
              <TiltCard key={title} className="rounded-2xl overflow-hidden h-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: delay + i * 0.08 }}
                  className="group relative rounded-2xl border border-primary/10 bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full overflow-hidden fly-in-card glass-card"
                >
                <div className="absolute left-0 top-0 bottom-0 w-1 tech-accent-bar opacity-80" aria-hidden />
                <div className="mb-5 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-primary/70 absolute top-6 right-6">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-xl font-bold text-primary mb-4 font-mono">{title}</h2>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-800 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                </motion.div>
              </TiltCard>
            ))}
          </FlyInCards>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl bg-primary/5 border border-primary/10 p-8 md:p-10 text-center overflow-hidden"
            >
            <div className="absolute left-0 right-0 top-0 h-1 tech-accent-bar" aria-hidden />
            <div className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-6">
              <TypewriterText
                text="Dedicated to structured collaboration, strategic thinking, and delivering high-impact AI solutions through effective teamwork and research-driven development."
                as="p"
                className="text-slate-800"
                duration={4}
                delay={0.3}
              />
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-secondary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
