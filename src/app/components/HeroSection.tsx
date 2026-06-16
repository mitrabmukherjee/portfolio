"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrambleText from "@/app/components/ScrambleText";
import MorphBlob from "@/app/components/MorphBlob";
import TypewriterText from "@/app/components/TypewriterText";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Decorative morph blob */}
      <div className="absolute top-20 right-10 md:right-32 z-[-1] pointer-events-none opacity-30">
        <MorphBlob width={300} height={300} fill="var(--secondary)" duration={8} />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          style={{ y: yShift, opacity: opacityFade }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Text */}
          <div className="flex flex-col z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="tech-label inline-block text-primary/60 font-mono mb-4 px-3 py-1 rounded-full border border-primary/20 bg-secondary/10">
                AI / ML Portfolio
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ScrambleText
                text="Mitra Brinda Mukherjee"
                as="h1"
                className="font-alice text-5xl md:text-6xl lg:text-7xl text-primary font-bold leading-[1.1] mb-2"
                delay={200}
                scrambleDuration={1200}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-mono tracking-wide font-bold"
            >
              <TypewriterText
                text="Building intelligent systems & applied AI"
                as="span"
                duration={2.0}
                delay={0.8}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 max-w-lg"
            >
              <p className="text-base md:text-lg text-primary/70 leading-relaxed font-suse">
                Pioneering solutions in automated malware analysis, deepfake detection, and building generative models for real-world impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex gap-4"
            >
              <Link
                href="/projects"
                className="cta-lift group inline-flex items-center gap-2 bg-primary text-background px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                View selected works
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end z-10 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-3xl -rotate-6 scale-105 pointer-events-none" />
              <div className="absolute inset-0 bg-secondary/30 rounded-3xl rotate-3 scale-105 pointer-events-none border border-primary/10" />
              <img
                src="/images/mitra.jpeg"
                alt="Mitra Brinda Mukherjee"
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border border-primary/20 bg-background"
                loading="eager"
              />
              {/* Accents decorators around image */}
              <div className="absolute -bottom-6 -left-6 z-20 w-24 h-24 bg-background/50 backdrop-blur-md rounded-2xl border border-primary/10 flex items-center justify-center shadow-lg">
                 <div className="text-center">
                    <span className="block font-bold text-xl text-primary">2+</span>
                    <span className="block text-xs uppercase tracking-wider text-primary/60">Years Exp</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary/50 hover:text-primary transition-colors font-mono group/scroll"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-widest group-hover/scroll:opacity-100 transition-opacity uppercase">scroll down</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 mt-1" />
        </motion.span>
      </motion.a>
    </section>
  );
}
