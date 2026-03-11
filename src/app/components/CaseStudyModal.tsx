"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";
import type { Project } from "@/app/data/projects";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const isOpen = project != null && project.caseStudySteps && project.caseStudySteps.length > 0;

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/10 bg-white shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-primary/10">
              <div>
                {project.category && (
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-secondary block mb-1">
                    {project.category}
                  </span>
                )}
                <h2 id="case-study-title" className="font-alice text-xl md:text-2xl font-bold text-primary">
                  {project.title} — Case study
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                {project.caseStudySteps!.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: stepIndex * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm font-bold flex items-center justify-center"
                      aria-hidden
                    >
                      {stepIndex + 1}
                    </span>
                    <div className="pt-0.5 min-w-0">
                      <TypewriterText
                        text={step}
                        as="p"
                        className="text-slate-800 leading-relaxed"
                        duration={1.6 + step.length * 0.008}
                        delay={0.1}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {project.tech.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (project.caseStudySteps?.length ?? 0) * 0.15 + 0.3 }}
                  className="mt-8 pt-6 border-t border-primary/10 flex flex-wrap gap-2"
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 border border-primary/15 px-3 py-1.5 text-sm font-mono font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
