"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/app/components/TiltCard";
import ScrambleText from "@/app/components/ScrambleText";
import MorphBlob from "@/app/components/MorphBlob";
import TypewriterText from "@/app/components/TypewriterText";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-white overflow-hidden tech-grid"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-20 w-80 h-80 bg-gradient-to-r from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-l from-secondary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-20 top-1/4 text-primary/10">
          <MorphBlob width={160} height={160} fill="currentColor" duration={6} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <TiltCard className="rounded-2xl overflow-hidden" maxTilt={6}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/10 bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-lg relative overflow-hidden"
          >
          <div className="absolute left-0 top-0 bottom-0 w-1 tech-accent-bar" aria-hidden />
          <motion.div
            className="flex flex-col md:flex-row md:items-start gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            <div className="md:max-w-xl">
              <motion.span
                variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4 }}
                className="tech-label inline-flex items-center gap-2 text-primary font-semibold mb-3"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                about
              </motion.span>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
                <ScrambleText
                  text="Mitra Brinda Mukherjee"
                  as="h2"
                  className="font-alice text-3xl md:text-4xl font-bold text-primary mb-2"
                  delay={300}
                  scrambleDuration={1000}
                  enabled={typeof window !== "undefined"}
                />
              </motion.div>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className="text-lg font-semibold text-primary/90 mb-4"
              >
                AI–ML Developer
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                <TypewriterText
                  text="I'm an AI-ML Developer focused on applying machine learning and deep learning to real-world problems. I build end-to-end systems from data preparation and modelling through to deployment and evaluation."
                  as="p"
                  className="text-slate-800 leading-relaxed"
                  duration={4}
                  delay={0.3}
                />
              </motion.div>
            </div>
            <motion.div
              className="flex-shrink-0 md:pt-2"
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/contact"
                className="cta-lift group inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-md hover:shadow-lg"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
