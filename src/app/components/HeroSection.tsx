"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrambleText from "@/app/components/ScrambleText";
import MorphBlob from "@/app/components/MorphBlob";
import TypewriterText from "@/app/components/TypewriterText";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = ["/images/mitra.jpeg"];
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isSingleSlide = slides.length === 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  const slideContent = (slide: string, index: number) => (
    <div
      key={index}
      className="w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <motion.div
        className="absolute left-0 right-0 w-full h-[120%] -top-[10%]"
        style={{ y: imageY }}
      >
        <motion.img
          src={slide}
          alt={isSingleSlide ? "Mitra Brinda Mukherjee" : `Slide ${index + 1}`}
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 6, ease: "linear" }}
          key={isSingleSlide ? slide : `${slide}-${activeIndex}`}
        />
      </motion.div>
    </div>
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "100dvh" }}
    >
      <div className="absolute inset-0">
        {isSingleSlide ? (
          slideContent(slides[0], 0)
        ) : (
          <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="h-full w-full"
            dynamicHeight={false}
            stopOnHover={false}
            useKeyboardArrows
            swipeable
            emulateTouch
            onChange={(index) => setActiveIndex(index as number)}
          >
            {slides.map((slide, index) => slideContent(slide, index))}
          </Carousel>
        )}
      </div>

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(62, 39, 35, 0.92) 0%, rgba(62, 39, 35, 0.4) 40%, transparent 70%)",
        }}
      />
      {/* Tech grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative morph blob */}
      <div className="absolute top-20 right-10 md:right-20 z-[1] pointer-events-none opacity-20">
        <MorphBlob width={140} height={140} fill="rgba(255,237,172,0.6)" duration={6} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-end pb-10 md:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              hidden: {},
            }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div className="lg:max-w-2xl">
              <motion.span
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="tech-label inline-block text-secondary/90 font-mono mb-3"
              >
                {"portfolio"}
              </motion.span>
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                <ScrambleText
                  text="Mitra Brinda Mukherjee"
                  as="h1"
                  className="font-alice text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-md"
                  delay={200}
                  scrambleDuration={1200}
                />
              </motion.div>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="mt-3 text-lg md:text-xl text-white/95 font-mono tracking-wide font-medium"
              >
                AI–ML Developer
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="mt-4 max-w-xl"
              >
                <TypewriterText
                  text="Building intelligent systems for automated malware analysis, deepfake detection, and real-world AI applications."
                  as="p"
                  className="text-base md:text-lg text-white/90 leading-relaxed"
                  duration={3.2}
                  delay={0.6}
                />
              </motion.div>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link
                href="/projects"
                className="cta-lift group inline-flex items-center gap-2 bg-white text-primary px-7 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white/20"
              >
                View projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors font-mono group/scroll"
          aria-label="Scroll to about"
        >
          <span className="text-xs tracking-widest group-hover/scroll:opacity-100 transition-opacity">&darr; scroll</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
