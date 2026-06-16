"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavbarLink = {
  label: string;
  href: string;
};

type NavbarContent = {
  brand: string;
  links: NavbarLink[];
};

interface NavbarClientProps {
  content: NavbarContent;
}

export default function NavbarClient({ content }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const textClass = "text-primary";
  const hoverBgClass = "hover:bg-primary/10 hover:text-primary";
  const iconBarClass = "bg-primary";

  const links = content.links.map((link) => {
    if (link.href === "/order" || link.label.toLowerCase().includes("order")) {
      return {
        ...link,
        label: "Projects",
        href: "/projects",
      };
    }
    return link;
  });

  return (
    <header
      id="site-navbar"
      className="fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50 rounded-full bg-background/80 backdrop-blur-md border border-primary/15 shadow-lg"
    >
      <div className="mx-auto w-full py-3 flex items-center justify-between max-w-7xl px-4 md:px-6">
        <Link href="/" className={`flex items-center gap-3 group transition-colors duration-200 ${textClass}`}>
          <span className={`font-alice text-2xl md:text-4xl font-semibold tracking-tight pr-2 ${textClass}`}>
            Mitra Brinda Mukherjee
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2.5 rounded-lg font-mono font-semibold text-xs uppercase tracking-wider transition-colors duration-200 ${textClass} ${hoverBgClass}`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button - 44px min touch target */}
        <button
          className="md:hidden flex flex-col items-center justify-center min-w-[44px] min-h-[44px] rounded-lg hover:opacity-80 transition-opacity gap-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${iconBarClass} ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${iconBarClass} ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${iconBarClass} ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-secondary/20 backdrop-blur-md border-t border-primary/10 rounded-b-2xl px-4 py-4 space-y-1" aria-label="Mobile navigation">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary/70">Menu</span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-sm font-semibold text-primary hover:text-secondary underline"
            >
              Close
            </button>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 min-h-[44px] flex items-center rounded-xl text-primary font-semibold text-lg uppercase hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
