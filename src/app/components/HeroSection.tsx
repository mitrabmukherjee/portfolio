"use client";

import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = ["/images/mitra.jpeg"];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "calc(100dvh - (var(--topbar-h,0px) + var(--navbar-h,0px)))",
      }}
      // Set CSS variables on the section so height updates responsively when bars change
      ref={(el) => {
        if (!el) return;
        const setSizes = () => {
          const topbar = document.getElementById("site-topbar");
          const navbar = document.getElementById("site-navbar");
          const topH = topbar?.offsetHeight ?? 0;
          const navH = navbar?.offsetHeight ?? 0;
          el.style.setProperty("--topbar-h", `${topH}px`);
          el.style.setProperty("--navbar-h", `${navH}px`);
        };
        setSizes();
        // Listen for resize to remain dynamic/responsive
        window.addEventListener("resize", setSizes);
        // Use a microtask to capture layout after hydration
        requestAnimationFrame(setSizes);
      }}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className="h-full w-full"
          dynamicHeight={false}
          stopOnHover={false}
          useKeyboardArrows={true}
          swipeable={true}
          emulateTouch={true}
          onChange={(index) => setActiveIndex(index as number)}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full overflow-hidden"
              style={{
                height:
                  "calc(100dvh - (var(--topbar-h,0px) + var(--navbar-h,0px)))",
              }}
            >
              <motion.img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                key={`${slide}-${activeIndex}`}
                onError={(e) => {
                  console.error(`Failed to load image: ${slide}`);
                  console.error(e);
                }}
                onLoad={() => {
                  console.log(`Successfully loaded image: ${slide}`);
                }}
              />
            </div>
          ))}
        </Carousel>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-transparent bg-opacity-40" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5">
        <div
          className="absolute bottom-0 left-0 right-0 h-[75%]"
          style={{
            background:
              "linear-gradient(to top, rgba(30, 58, 95, 0.95) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-end h-full pb-8 md:pb-16 lg:pb-32">
        <div className="w-full mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-around gap-8"
          >
            {/* Left side - Text content */}
            <div className="w-full lg:flex-1 lg:max-w-2xl text-left lg:text-left self-start lg:self-end">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-5xl text-white drop-shadow-lg font-bold"
              >
                Mitra Brinda Mukherjee
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-xl md:text-2xl text-white/90 uppercase tracking-wide"
              >
                AI-ML Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-4 text-base md:text-lg text-white max-w-xl normal-case"
              >
                Building intelligent systems for automated malware analysis, deepfake
                detection, and real-world AI applications in Python and deep learning.
              </motion.p>
            </div>

            {/* Right side - Button */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end self-center lg:self-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                {/* Pulse animation rings using CSS */}
                <div className="absolute inset-0 rounded-full border border-white pulse-ring-1" />
                <div className="absolute inset-0 rounded-full border border-white pulse-ring-2" />
                <div className="absolute inset-0 rounded-full border border-white pulse-ring-3" />

                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-white text-secondary px-8 py-4 rounded-full text-xl font-semibold hover:bg-secondary hover:text-white transition-colors shadow-lg inline-block z-10"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
