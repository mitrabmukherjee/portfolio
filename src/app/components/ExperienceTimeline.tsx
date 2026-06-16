"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Research Intern & Exchange Alumni",
    company: "Texas A&M University",
    period: "May - July, 2025",
    location: "Texas, USA",
    description: "Conducted research in Applied Machine Learning as part of an international exchange program. Gained hands-on experience collaborating with faculty on AI-driven research projects.",
    color: "bg-blue-500",
  },
  {
    role: "Junior AI Engineer",
    company: "Steora Systems",
    period: "Since February 2025",
    location: "Kolkata, India",
    description: "Developing and optimizing AI models for production systems.",
    color: "bg-purple-500",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-suse text-primary mb-4">
            Career Timeline
          </h2>
          <p className="text-primary/70 max-w-xl mx-auto text-lg">
            My professional journey and experiences.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-6 h-6 rounded-full -left-11 md:-left-[54px] top-1 border-4 border-background ${exp.color} ring-2 ring-primary/20 shadow-lg`}
              />

              <div className="bg-secondary/10 hover:bg-secondary/20 transition-all border border-primary/10 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {exp.role}
                </h3>
                <div className="text-xl font-semibold text-primary/80 mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary/50" />
                  {exp.company}
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-primary/60 mb-4 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-primary/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
