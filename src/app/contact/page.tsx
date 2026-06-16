"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Linkedin, CheckCircle, AlertCircle, Terminal } from "lucide-react";
import Link from "next/link";
import { useReCaptcha } from "@/app/components/ReCaptchaProvider";
import { toast } from "sonner";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "",
    comments: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const executeRecaptcha = useReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha("contact_form")
        : "no-recaptcha-key-configured";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ fullName: "", phone: "", email: "", requirement: "", comments: "" });
        toast.success("Message sent! I'll get back to you soon.");
      } else {
        setStatus("error");
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-background border border-primary/20 text-primary placeholder:text-primary/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono text-sm";
  const labelClass = "block text-xs font-mono font-bold uppercase tracking-widest text-primary/50 mb-2";

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-secondary/10 mb-6">
            <Terminal className="w-4 h-4 text-primary/50" />
            <span className="text-xs font-mono tracking-wider uppercase text-primary/60">
              System.connect()
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-alice font-bold text-primary leading-tight mb-4">
            Let&apos;s work<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              together.
            </span>
          </h1>
          <p className="text-lg text-primary/60 max-w-xl font-suse">
            Fill out the form below and I&apos;ll get back to you within 24 hours. Or reach out directly through any of the channels on the right.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — wide column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-24 text-center gap-6 rounded-3xl border border-green-500/20 bg-green-500/5">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                  <p className="text-primary/60">Thank you for reaching out. I&apos;ll reply to you shortly.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-primary text-background text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Mitra Brinda Mukherjee"
                      value={form.fullName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className={labelClass}>Topic / Requirement</label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a topic...</option>
                    <option value="ai-ml-project">AI / ML Project</option>
                    <option value="research">Research Collaboration</option>
                    <option value="consulting">Consulting</option>
                    <option value="internship">Internship / Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comments" className={labelClass}>Message</label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    placeholder="Tell me about your project, question, or idea..."
                    value={form.comments}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-mono">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-background font-semibold text-base hover:opacity-90 disabled:opacity-50 transition-all group"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar — contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "mitrabrindasjd24@gmail.com",
                href: "mailto:mitrabrindasjd24@gmail.com",
                gradient: "from-blue-500/20 to-cyan-500/5",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 82405 71283",
                href: "tel:+918240571283",
                gradient: "from-green-500/20 to-emerald-500/5",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/mitrabrindaa",
                href: "https://www.linkedin.com/in/mitrabrindaa/",
                gradient: "from-purple-500/20 to-pink-500/5",
              },
            ].map(({ icon: Icon, label, value, href, gradient }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 bg-gradient-to-br ${gradient} transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5`}
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-0.5">{label}</div>
                  <div className="text-sm font-semibold text-primary truncate">{value}</div>
                </div>
              </a>
            ))}

            <div className="mt-4 p-6 rounded-2xl border border-primary/10 bg-secondary/5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-3">Response time</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-primary/80 font-semibold">Usually within 24 hours</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-primary/10 bg-secondary/5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-3">Based in</h3>
              <p className="text-sm text-primary/80 font-semibold">Kolkata, India 🇮🇳</p>
              <p className="text-xs text-primary/50 font-mono mt-1">Open to remote & global work</p>
            </div>

            <div className="pt-4 border-t border-primary/10">
              <Link href="/" className="text-sm text-primary/50 hover:text-primary font-mono transition-colors">
                ← Back to portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
