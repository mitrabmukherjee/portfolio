"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TiltCard from "@/app/components/TiltCard";

export default function ContactSection() {
  return (
    <section id="get-in-touch" className="relative bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,237,172,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,237,172,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-0">
          <TiltCard className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] overflow-hidden" maxTilt={5}>
            <div className="relative w-full h-full">
              <Image
                src="/images/slide1.jpg"
                alt="Get in touch"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 md:hidden"
                style={{
                  background:
                    "linear-gradient(to top, rgba(62, 39, 35, 0.3), transparent 50%)",
                }}
              />
            </div>
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 text-center md:text-left"
          >
            <span className="tech-label text-secondary/90 block mb-2">contact</span>
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-2 font-mono">
              Get in touch
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-8 font-alice">
              Mitra Brinda Mukherjee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="cta-lift group inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-colors shadow-lg"
              >
                View projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="cta-lift inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Contact me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
