"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Clock, LucideIcon } from "lucide-react";
import TiltCard from "@/app/components/TiltCard";
import ScrambleText from "@/app/components/ScrambleText";
import TypewriterText from "@/app/components/TypewriterText";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ContactCard({ icon: Icon, title, content, href }: ContactCardProps) {
  const isInternal = href.startsWith("/");
  const linkClass =
    "group block p-6 sm:p-8 rounded-2xl bg-primary/95 hover:bg-primary border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full";
  const inner = (
    <div className="flex flex-col">
      <div className="mb-4 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white/15 group-hover:bg-secondary/30 transition-colors">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>
      <div className="text-secondary text-xs sm:text-sm font-mono font-semibold tracking-wider mb-2">
        {title}
      </div>
      <div className="text-white text-base sm:text-lg font-bold leading-snug break-words">
        {content}
      </div>
    </div>
  );
  return (
    <motion.div variants={cardVariants} transition={{ duration: 0.4 }} className="h-full">
      <TiltCard className="rounded-2xl overflow-hidden h-full" maxTilt={6}>
        {isInternal ? (
          <Link href={href} className={linkClass}>
            {inner}
          </Link>
        ) : (
          <a href={href} className={linkClass}>
            {inner}
          </a>
        )}
      </TiltCard>
    </motion.div>
  );
}

export default function ReachOutSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "GIVE ME A CALL",
      content: "Phone: +91 82405 71283",
      href: "tel:+91 8240571283",
    },
    {
      icon: Mail,
      title: "SEND AN EMAIL",
      content: "mitrabrindasjd24@gmail.com",
      href: "mailto:mitrabrindasjd24@gmail.com",
    },
    {
      icon: Clock,
      title: "SEND A MESSAGE",
      content: "Contact form",
      href: "/contact",
    },
  ];

  return (
    <section id="reach-out" className="navbar-dark-zone relative py-16 md:py-24 bg-primary tech-grid-light">
      <div className="relative mx-auto max-w-7xl w-full px-4 md:px-8">
        <span className="tech-label text-secondary font-semibold block text-center mb-2">reach_out</span>
        <h2 className="font-alice text-3xl md:text-4xl mb-3 text-white text-center tracking-wide">
          <ScrambleText text="Reach out today" as="span" delay={0} scrambleDuration={900} />
        </h2>
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <TypewriterText
            text="For any additional questions, get in touch"
            as="p"
            className="text-white/95 text-xl sm:text-2xl font-semibold"
            instant
          />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
            hidden: {},
          }}
        >
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              content={method.content}
              href={method.href}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
