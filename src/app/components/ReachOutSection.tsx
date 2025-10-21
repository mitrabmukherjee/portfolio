import { Phone, Mail, Clock } from "lucide-react";

export default function ReachOutSection() {
  return (
    <section id="reach-out" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl w-full px-8">
        <h2 className="text-3xl md:text-4xl mb-4 text-white text-center tracking-wide">
          Reach out today
        </h2>
        <p className="text-white mb-8 text-center text-4xl font-bold">
          For any additional questions, get in touch
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <a
            className="p-6 bg-gradient-to-r from-[#3e1d6b] to-transparent hover:from-[#4a2a7a] hover:to-white/10 transition-all duration-300 shadow-lg"
            href="tel:+18554432748"
          >
            <div className="flex flex-col">
              <Phone className="w-8 h-8 text-white mb-4" />
              <div className="text-white text-sm font-semibold mb-2">
                GIVE US A CALL
              </div>
              <div className="text-white text-lg font-bold">
                +1-855-443-2748
              </div>
            </div>
          </a>
          <a
            className="p-6 bg-gradient-to-r from-[#3e1d6b] to-transparent hover:from-[#4a2a7a] hover:to-white/10 transition-all duration-300 shadow-lg"
            href="mailto:awalker@actontario.ca"
          >
            <div className="flex flex-col">
              <Mail className="w-8 h-8 text-white mb-4" />
              <div className="text-white text-sm font-semibold mb-2">
                SEND AN EMAIL
              </div>
              <div className="text-white text-lg font-bold">
                awalker@actontario.ca
              </div>
            </div>
          </a>
          <a
            className="p-6 bg-gradient-to-r from-[#3e1d6b] to-transparent hover:from-[#4a2a7a] hover:to-white/10 transition-all duration-300 shadow-lg"
            href="#contact"
          >
            <div className="flex flex-col">
              <Clock className="w-8 h-8 text-white mb-4" />
              <div className="text-white text-sm font-semibold mb-2">
                GET IN TOUCH
              </div>
              <div className="text-white text-lg font-bold">
                Make a Quick Enquiry
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
