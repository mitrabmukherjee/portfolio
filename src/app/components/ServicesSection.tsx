"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    icon: "🐍",
    level: 95,
    color: "from-yellow-400 to-amber-500",
    desc: "Primary language for all ML pipelines and research",
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    level: 90,
    color: "from-blue-400 to-cyan-500",
    desc: "Supervised, unsupervised, and reinforcement learning",
  },
  {
    name: "Deep Learning",
    icon: "🧠",
    level: 85,
    color: "from-purple-400 to-violet-500",
    desc: "CNNs, Transformers, GANs, and model fine-tuning",
  },
  {
    name: "AI / LLMs",
    icon: "✨",
    level: 88,
    color: "from-pink-400 to-rose-500",
    desc: "Prompt engineering, RAG systems, and LLM fine-tuning",
  },
  {
    name: "Data Science",
    icon: "📊",
    level: 87,
    color: "from-green-400 to-emerald-500",
    desc: "Analysis, visualization, and statistical modelling",
  },
  {
    name: "Computer Vision",
    icon: "👁️",
    level: 82,
    color: "from-orange-400 to-red-500",
    desc: "Object detection, segmentation, deepfake analysis",
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 block mb-3">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-alice font-bold text-primary mb-4">
            Core Stack
          </h2>
          <p className="text-primary/60 max-w-md mx-auto font-suse">
            Technologies and focus areas I work with day-to-day.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-primary/10 bg-secondary/5 hover:border-primary/25 hover:bg-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Skill icon + name */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl shadow-lg`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg leading-tight">{skill.name}</h3>
                  <span className="text-xs font-mono text-primary/40">{skill.level}% proficiency</span>
                </div>
              </div>

              <p className="text-sm text-primary/60 leading-relaxed mb-5">{skill.desc}</p>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
