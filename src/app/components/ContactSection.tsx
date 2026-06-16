"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MessageSquare, Terminal } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "GIVE ME A CALL",
      content: "+91 82405 71283",
      href: "tel:+918240571283",
      color: "from-green-500/20 to-emerald-500/5",
    },
    {
      icon: Mail,
      title: "SEND AN EMAIL",
      content: "mitrabrindasjd24@gmail.com",
      href: "mailto:mitrabrindasjd24@gmail.com",
      color: "from-blue-500/20 to-cyan-500/5",
    },
    {
      icon: MessageSquare,
      title: "CONTACT FORM",
      content: "Send a message",
      href: "/contact",
      color: "from-purple-500/20 to-pink-500/5",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden tech-grid">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-secondary/10 mb-6"
          >
            <Terminal className="w-4 h-4 text-primary/70" />
            <span className="text-sm font-mono tracking-wider uppercase text-primary/70">
              System.connect()
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-alice font-bold text-primary mb-6"
          >
            Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">future</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary/70 max-w-2xl mx-auto font-suse"
          >
            Whether you have a specific project in mind, want to discuss machine learning architectures, or just want to network, my inbox is always open.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`group relative flex flex-col p-8 rounded-3xl border border-primary/10 bg-gradient-to-br ${method.color} backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5`}
            >
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-background border border-primary/10 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xs font-mono font-bold tracking-widest text-primary/50 mb-2">
                  {method.title}
                </h3>
                <p className="text-lg font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-colors break-words">
                  {method.content}
                </p>
              </div>
              <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-500 transition-colors group"
          >
            Review my past projects first
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
