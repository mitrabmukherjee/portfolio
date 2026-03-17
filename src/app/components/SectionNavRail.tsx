"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "services", label: "Skills" },
  { id: "get-in-touch", label: "Contact" },
  { id: "reach-out", label: "Reach out" },
];

export default function SectionNavRail() {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const intersecting = new Map<string, boolean>();
    sections.forEach((s) => intersecting.set(s.id, false));

    const updateActive = () => {
      const topmost = sections.find((s) => intersecting.get(s.id));
      if (topmost) setActiveId(topmost.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (id) intersecting.set(id, entry.isIntersecting);
        });
        updateActive();
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <nav
      className="fixed z-40 flex gap-3 lg:gap-5 text-xs text-primary/60
        bottom-20 right-4 lg:bottom-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2
        lg:flex-col"
      aria-label="Page sections"
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="group flex flex-col items-center justify-center gap-1 lg:gap-1.5 min-h-[44px] min-w-[44px] lg:min-h-0 lg:min-w-0"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <motion.span
              className={`block rounded-full border-2 shrink-0 ${
                isActive
                  ? "bg-secondary border-secondary scale-125"
                  : "border-primary/40 bg-white/60 group-hover:bg-secondary/80 group-hover:border-secondary"
              }`}
              style={{ width: 10, height: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <span
              className={`hidden lg:inline font-mono tracking-wide uppercase text-[10px] px-2 py-1 rounded-full transition-all duration-200 shadow-sm ${
                isActive
                  ? "opacity-100 translate-y-0 bg-secondary/20 text-primary"
                  : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 bg-white/80"
              }`}
            >
              {section.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
