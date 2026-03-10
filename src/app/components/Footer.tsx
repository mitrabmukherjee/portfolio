import Image from "next/image";
import Link from "next/link";
import { Facebook, LinkedinIcon, Twitter, Instagram } from "lucide-react";

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
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About & Copyright/Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-secondary">
            Mitra Brinda Mukherjee
            </h3>
            <p className="text-sm text-white/80 text-center md:text-left">
            AI-ML Developer focusing on applied machine learning, deep learning, and data-driven solutions.
            </p>
            <div className="text-xs text-white/70">
            © {new Date().getFullYear()} Mitra Brinda Mukherjee.
            </div>
            
            {/* Follow Us */}
            <div className="flex flex-col items-center md:items-start gap-3 mt-2">
              <h4 className="text-sm font-semibold text-secondary">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors p-2 border border-white/30 rounded-full hover:border-secondary hover:scale-110 transform duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-secondary">Quick Links</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-secondary">Contact</h3>
            <div className="flex flex-col items-center md:items-start gap-2 text-sm">
              <a 
                href="tel:+8240571283"
                className="hover:text-secondary transition-colors"
              >
                Phone: +91 82405 71283
              </a>
              <a 
                href="mailto:mitrabrindasjd24@gmail.com"
                className="hover:text-secondary transition-colors"
              >
                mitrabrindasjd24@gmail.com
              </a>
            </div>
          </div>

          {/* Column 4: VideoPlus with vertical line */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            {/* Vertical Line */}
            <div className="hidden md:block w-px h-32 bg-white/30"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
