"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import ReachOutSection from "@/app/components/ReachOutSection";
import MorphBlob from "@/app/components/MorphBlob";
import TypewriterText from "@/app/components/TypewriterText";
import FlyInCards from "@/app/components/FlyInCards";
import TiltCard from "@/app/components/TiltCard";
import CaseStudyModal from "@/app/components/CaseStudyModal";
import { projects, type Project } from "@/app/data/projects";

function ProjectCard({
  project,
  index,
  onCaseStudyClick,
}: {
  project: Project;
  index: number;
  onCaseStudyClick?: (project: Project) => void;
}) {
  const hasCaseStudy = project.caseStudySteps && project.caseStudySteps.length > 0;
  return (
    <TiltCard className="fly-in-card glass-card group relative h-full rounded-2xl p-6 md:p-8 overflow-hidden min-h-[280px] flex flex-col">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden
      />
      {project.category && (
        <span className="mb-3 inline-block text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
          {project.category}
        </span>
      )}
      <h2 className="font-alice text-2xl font-bold text-primary mb-2">
        {project.title}
      </h2>
      <div className="text-slate-800 mb-4 leading-relaxed flex-1">
        <TypewriterText
          text={project.description}
          as="p"
          className="text-slate-800"
          duration={2.8}
          delay={index * 0.5}
        />
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-primary/10 border border-primary/15 px-3 py-1 text-sm font-mono font-medium text-primary"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-auto">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-primary"
          >
            {project.hrefLabel ?? "View project"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        {hasCaseStudy && onCaseStudyClick && (
          <button
            type="button"
            onClick={() => onCaseStudyClick(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            <FileText className="w-4 h-4" />
            Case study
          </button>
        )}
      </div>
    </TiltCard>
  );
}

export default function ProjectsPage() {
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Espresso spacer so content is not hidden under fixed navbar */}
      <div className="bg-primary pt-24 md:pt-28" aria-hidden />
      {/* Page Header - full area is dark zone for navbar text */}
      <div className="navbar-dark-zone bg-primary py-10 md:py-14">
        <div className="mx-auto max-w-7xl w-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-alice text-4xl md:text-5xl font-normal text-white text-center"
          >
            Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-center"
          >
            <TypewriterText
              text="Selected work in AI, machine learning, and security—focused on detection, explainability, and real-world impact."
              as="p"
              className="text-white/90 text-lg md:text-xl font-medium"
              duration={3.2}
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16 md:py-20 tech-grid">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-32 top-40 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-20 top-1/4 text-primary/10">
            <MorphBlob width={100} height={100} fill="currentColor" duration={8} />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-4">
          <FlyInCards
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onCaseStudyClick={setCaseStudyProject}
              />
            ))}
          </FlyInCards>
        </div>
      </div>

      <CaseStudyModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />

      <ReachOutSection />
    </div>
  );
}
