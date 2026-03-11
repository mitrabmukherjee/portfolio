"use client";

import { motion } from "framer-motion";
import TypewriterText from "@/app/components/TypewriterText";
import type { Project } from "@/app/data/projects";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

interface CaseStudySectionProps {
  projects: Project[];
}

export default function CaseStudySection({ projects }: CaseStudySectionProps) {
  const withCaseStudy = projects.filter((p) => p.caseStudySteps && p.caseStudySteps.length > 0);
  if (withCaseStudy.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28 bg-tertiary/50 tech-grid-dense">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="tech-label text-primary font-semibold block mb-2">case studies</span>
          <h2 className="font-alice text-3xl md:text-4xl font-bold text-primary">
            What each project is about
          </h2>
          <p className="mt-3 text-slate-700 text-lg max-w-xl mx-auto">
            Scroll to see each project&apos;s story unfold.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {withCaseStudy.map((project) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px", amount: 0.2 }}
              variants={container}
              className="relative"
            >
              {/* Project title & category */}
              <motion.div variants={item} className="mb-8">
                {project.category && (
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-secondary block mb-2">
                    {project.category}
                  </span>
                )}
                <h3 className="font-alice text-2xl md:text-3xl font-bold text-primary">
                  {project.title}
                </h3>
              </motion.div>

              {/* Animated narrative steps */}
              <div className="space-y-6">
                {project.caseStudySteps!.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    variants={item}
                    className="flex gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm font-bold flex items-center justify-center"
                      aria-hidden
                    >
                      {stepIndex + 1}
                    </span>
                    <div className="pt-0.5">
                      <TypewriterText
                        text={step}
                        as="p"
                        className="text-slate-800 leading-relaxed"
                        duration={1.8 + step.length * 0.01}
                        delay={0.2}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              {project.tech.length > 0 && (
                <motion.div
                  variants={item}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
