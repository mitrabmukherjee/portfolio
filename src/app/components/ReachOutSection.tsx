import { Phone, Mail, Clock, LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string;
}

function ContactCard({ icon: Icon, title, content, href }: ContactCardProps) {
  return (
    <a
      className="p-4 sm:p-6 bg-gradient-to-r from-[#3e1d6b] to-transparent hover:from-[#4a2a7a] hover:to-white/10 transition-all duration-300 shadow-lg mb-2"
      href={href}
    >
      <div className="flex flex-col">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4" />
        <div className="text-white text-xs sm:text-sm font-semibold mb-2 leading-tight">
          {title}
        </div>
        <div className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight break-words">
          {content}
        </div>
      </div>
    </a>
  );
}

export default function ReachOutSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "GIVE ME A CALL",
      content: "Phone: +82405-71283",
      href: "tel:+8240571283",
    },
    {
      icon: Mail,
      title: "SEND AN EMAIL",
      content: "mitrabrindasjd24@gmail.com",
      href: "mailto:mitrabrindasjd24@gmail.com",
    },
    {
      icon: Clock,
      title: "GET IN TOUCH",
      content: "Make a Quick Enquiry",
      href: "#contact",
    },
  ];

  return (
    <section id="reach-out" className="py-10 md:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl w-full px-8">
        <h2 className="text-3xl md:text-4xl mb-4 text-white text-center tracking-wide">
          Reach out today
        </h2>
        <p className="text-white mb-8 text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          For any additional questions, get in touch
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              icon={method.icon}
              title={method.title}
              content={method.content}
              href={method.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
