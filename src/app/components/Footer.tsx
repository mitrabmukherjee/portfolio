import { Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
        <div>© {new Date().getFullYear()} Sue Loney.</div>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-secondary transition-colors p-2 border border-white rounded-full"
            href="#"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            className="hover:text-secondary transition-colors p-2 border border-white rounded-full"
            href="#"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            className="hover:text-secondary transition-colors p-2 border border-white rounded-full"
            href="#"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            className="hover:text-secondary transition-colors p-2 border border-white rounded-full"
            href="#"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
