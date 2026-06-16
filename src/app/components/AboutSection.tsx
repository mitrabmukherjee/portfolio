"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Cpu, Globe } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    label: "Specialisation",
    value: "AI & Machine Learning",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Exchange Alumni, Texas A&M",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Globe,
    label: "Open to",
    value: "Remote & Global roles",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background tech-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 block mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-alice font-bold text-primary mb-6 leading-tight">
              Building AI that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                matters.
              </span>
            </h2>
            <div className="space-y-4 text-primary/70 font-suse leading-relaxed mb-8">
              <p>
                I'm an AI-ML Developer focused on applying cutting-edge machine learning and deep learning to real-world problems — from automated malware detection to identifying synthetic media at scale.
              </p>
              <p>
                Currently working as a Junior AI Engineer at <span className="text-primary font-semibold">Steora Systems</span> in Kolkata, and a past Research Intern & Exchange Alumni at <span className="text-primary font-semibold">Texas A&M University</span>, where I collaborated with faculty on applied ML research.
              </p>
              <p>
                I care about building systems that are not just accurate, but interpretable, responsible, and deployable.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-semibold text-sm hover:opacity-80 transition-opacity group"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-2xl border border-primary/10 bg-secondary/5 hover:border-primary/25 hover:bg-secondary/10 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-1">
                  {label}
                </div>
                <div className="text-sm font-bold text-primary leading-snug">{value}</div>
              </motion.div>
            ))}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="col-span-2 p-5 rounded-2xl border border-primary/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-around"
            >
              {[
                { num: "2+", label: "Years experience" },
                { num: "2", label: "Major projects" },
                { num: "2", label: "Organisations" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-alice font-bold text-primary">{num}</div>
                  <div className="text-xs font-mono text-primary/50 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
