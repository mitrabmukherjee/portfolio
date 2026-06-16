"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, Shield, Eye, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/app/components/ContactSection";
import { projects, type Project } from "@/app/data/projects";

const categoryIcons: Record<string, React.ReactNode> = {
  "Security & ML": <Shield className="w-5 h-5" />,
  "Computer Vision": <Eye className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  "Security & ML": "from-orange-500/20 to-red-500/5 border-orange-500/20",
  "Computer Vision": "from-blue-500/20 to-cyan-500/5 border-blue-500/20",
};

function CaseStudyDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-background border-l border-primary/10 shadow-2xl overflow-y-auto"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  {project.category && (
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 block mb-2">
                      {project.category}
                    </span>
                  )}
                  <h2 className="text-3xl font-alice font-bold text-primary">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/15 hover:border-primary/40 hover:bg-primary/5 transition-all flex-shrink-0 ml-6"
                >
                  <X className="w-4 h-4 text-primary" />
                </button>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 border border-primary/15 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Case study steps */}
              <div className="flex-1">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 mb-6">
                  Case Study
                </h3>
                <div className="space-y-6">
                  {(project.caseStudySteps ?? [project.description]).map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-primary/80 leading-relaxed font-suse">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {project.href && (
                <div className="mt-10 pt-8 border-t border-primary/10">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-semibold text-sm hover:opacity-80 transition-opacity"
                  >
                    {project.hrefLabel ?? "View Project"}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  onCaseStudyClick,
}: {
  project: Project;
  index: number;
  onCaseStudyClick: (p: Project) => void;
}) {
  const hasCaseStudy = (project.caseStudySteps?.length ?? 0) > 0;
  const colorClass = project.category
    ? categoryColors[project.category] ?? "from-primary/10 to-transparent border-primary/10"
    : "from-primary/10 to-transparent border-primary/10";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col p-8 rounded-3xl border bg-gradient-to-br ${colorClass} backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5`}
    >
      {/* Category badge */}
      {project.category && (
        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-primary/60 border border-primary/15 bg-background/50">
            {categoryIcons[project.category]}
            {project.category}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="font-alice text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-primary/70 leading-relaxed mb-6 flex-1 font-suse">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-background/60 border border-primary/10 text-primary/80"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto">
        {hasCaseStudy && (
          <button
            onClick={() => onCaseStudyClick(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-blue-500 transition-colors group/btn"
          >
            <FileText className="w-4 h-4" />
            Case Study
            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/60 hover:text-primary transition-colors"
          >
            {project.hrefLabel ?? "View Project"}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 block mb-4">
              Selected Works
            </span>
            <h1 className="font-alice text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Research
              </span>
            </h1>
            <p className="text-lg text-primary/60 max-w-2xl font-suse">
              A curated selection of my work in AI, machine learning, and security — focused on detection, explainability, and real-world impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project grid */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onCaseStudyClick={setActiveProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Case study slide-in drawer */}
      <CaseStudyDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <ContactSection />
    </div>
  );
}
