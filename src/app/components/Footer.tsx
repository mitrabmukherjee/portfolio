import { Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: MessageCircle,
    href: "#",
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              className="hover:text-secondary transition-colors p-2 border border-secondary rounded-full"
              href={href}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} Sue Loney.</div>
      </div>
    </footer>
  );
}
