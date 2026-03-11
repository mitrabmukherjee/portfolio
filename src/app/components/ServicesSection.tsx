"use client";

import { motion } from "framer-motion";
import MorphBlob from "@/app/components/MorphBlob";
import TypewriterText from "@/app/components/TypewriterText";
import FlyInCards from "@/app/components/FlyInCards";
import TiltCard from "@/app/components/TiltCard";

const services = [
  "AI",
  "Machine Learning",
  "Deep Learning",
  "Python",
  "Data Science",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-tertiary/50 tech-grid-dense"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute right-10 top-1/3 text-primary/10">
          <MorphBlob width={120} height={120} fill="currentColor" duration={7} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="tech-label text-primary font-semibold block mb-2">skills</span>
          <h2 className="font-alice text-3xl md:text-4xl font-bold text-primary mb-3">
            Core stack
          </h2>
          <div className="text-slate-800 text-lg max-w-xl mx-auto font-medium">
            <TypewriterText
              text="Technologies and focus areas I work with."
              as="p"
              className="text-slate-800"
              duration={2}
              delay={0.4}
            />
          </div>
        </motion.div>

        <FlyInCards
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto lg:max-w-none"
        >
          {services.map((s, i) => (
            <TiltCard
              key={s}
              className="fly-in-card glass-card rounded-2xl p-6 md:p-7 flex items-center gap-4 min-h-[120px] md:min-h-[140px] relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary to-secondary opacity-80"
                aria-hidden
              />
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-mono text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-lg font-semibold text-slate-800 font-mono">{s}</span>
            </TiltCard>
          ))}
        </FlyInCards>
      </div>
    </section>
  );
}
