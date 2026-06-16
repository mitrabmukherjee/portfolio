"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mitrabrindaa/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:mitrabrindasjd24@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-primary) / 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top accent line — gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <span className="font-alice text-2xl font-bold text-primary">
                Mitra Brinda Mukherjee
              </span>
            </Link>
            <p className="text-sm text-primary/60 leading-relaxed max-w-xs font-suse mb-6">
              AI-ML Developer focused on building intelligent systems — from malware detection to generative models. Currently at Steora Systems & Texas A&M.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 mb-5">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors font-suse"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact details */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 mb-5">
              Reach Out
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+918240571283"
                className="group flex items-center gap-3 text-sm text-primary/70 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                +91 82405 71283
              </a>
              <a
                href="mailto:mitrabrindasjd24@gmail.com"
                className="group flex items-center gap-3 text-sm text-primary/70 hover:text-primary transition-colors break-all"
              >
                <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                mitrabrindasjd24@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mitrabrindaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-primary/70 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
                linkedin.com/in/mitrabrindaa
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px w-full bg-primary/10 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary/40 font-mono">
            © {year} Mitra Brinda Mukherjee · All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-primary/40 font-mono">
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
