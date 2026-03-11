import Image from "next/image";
import Link from "next/link";
import { Facebook, LinkedinIcon, Twitter, Instagram } from "lucide-react";
import TypewriterText from "@/app/components/TypewriterText";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mitrabrindaa/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="navbar-dark-zone relative bg-primary text-white border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,237,172,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,237,172,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative mx-auto max-w-7xl w-full px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-12 md:gap-y-8">
          {/* Column 1: About & Copyright/Social */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-lg font-bold text-secondary font-alice">
              Mitra Brinda Mukherjee
            </h3>
            <div className="text-center md:text-left">
              <TypewriterText
                text="AI-ML Developer focusing on applied machine learning, deep learning, and data-driven solutions."
                as="p"
                className="text-sm text-white/80 leading-relaxed"
                duration={3}
                delay={0.5}
              />
            </div>
            <div className="text-xs text-white/70 font-mono tracking-wide">
              © {new Date().getFullYear()} · Mitra Brinda Mukherjee
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-sm font-semibold text-secondary font-mono uppercase tracking-wider">
                Follow
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-all duration-200 p-2.5 border border-white/30 rounded-full hover:border-secondary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-lg font-bold text-secondary font-mono uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-hover-underline text-sm hover:text-secondary transition-colors inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-lg font-bold text-secondary font-mono uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm">
              <a
                href="tel:+8240571283"
                className="link-hover-underline hover:text-secondary transition-colors inline-block"
              >
                Phone: +91 82405 71283
              </a>
              <a
                href="mailto:mitrabrindasjd24@gmail.com"
                className="link-hover-underline hover:text-secondary transition-colors break-all inline-block"
              >
                mitrabrindasjd24@gmail.com
              </a>
            </div>
          </div>

          {/* Column 4: Vertical line */}
          <div className="flex items-start justify-center md:justify-end pt-1">
            <div className="hidden md:block w-px h-28 bg-white/30" aria-hidden />
          </div>
        </div>
      </div>
    </footer>
  );
}
