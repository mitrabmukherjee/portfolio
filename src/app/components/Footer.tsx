import {
  Facebook,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/sue.loney.39",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/susan-loney-4b71a2269/",
    label: "Linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl w-full px-4 py-8 flex flex-col md:flex-row items-start justify-between gap-4 text-sm text-white">
        {/* First flex: Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              className="hover:text-secondary transition-colors p-2 border border-secondary rounded-full"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Second flex: Copyright Text */}
        <div className="flex items-center">
          <div>© {new Date().getFullYear()} Sue Loney.</div>
        </div>

        {/* Third flex: VideoPlus Image */}
        <div className="flex items-center">
          <Image
            src="/images/VideoPlus_Endorsed_Icon.svg"
            alt="VideoPlus Endorsed"
            width={100}
            height={100}
            className="h-auto w-auto max-h-40"
          />
        </div>
      </div>
    </footer>
  );
}
