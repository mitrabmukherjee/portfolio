import Image from "next/image";
import {
  Phone,
  Mail,
  Share2,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { MessageCircle } from "lucide-react";
import ReachOutSection from "@/app/components/ReachOutSection";
import { getPublicJson } from "@/lib/publicJson";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.822 11.822 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export default async function ContactPage() {
  const content = await getPublicJson("/content/contact-page.json");
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary py-4 font-alice">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white text-center">
            {content.header.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16">
        {/* Background Image */}
        <div
          className="absolute block inset-0 bg-cover bg-bottom-left bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('/images/innerbg.jpg')",
            backgroundPosition: "left center",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full px-4">
          {/* Section Header */}
          <div className="bg-secondary text-white py-4 px-6 rounded-t-lg ">
            <h2 className="text-2xl font-bold text-center">
              {content.sectionHeader.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-tertiary">
            {/* Left Column - Contact Information */}
            <div className="p-8 bg-tertiary">
              <div className="space-y-8">
                {content.contactInfo.map((item, index) => {
                  const IconComponent =
                    item.icon === "Phone"
                      ? Phone
                      : item.icon === "Mail"
                      ? Mail
                      : item.icon === "Share2"
                      ? Share2
                      : Phone;

                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        {item.content && (
                          <p
                            className={`${
                              item.title === "Call Us"
                                ? "text-xl font-bold"
                                : "text-lg"
                            } text-black`}
                          >
                            {item.content}
                          </p>
                        )}
                        {item.socialLinks && (
                          <div className="flex gap-3">
                            {item.socialLinks.map((social, socialIndex) => {
                              const SocialIcon =
                                social.icon === "Facebook"
                                  ? Facebook
                                  : social.icon === "Youtube"
                                  ? Youtube
                                  : social.icon === "Instagram"
                                  ? Instagram
                                  : social.icon === "MessageCircle"
                                  ? WhatsAppIcon
                                  : Facebook;

                              return (
                                <a
                                  key={socialIndex}
                                  href={social.href}
                                  className="w-10 h-10 bg-transparent border-1 border-black hover:bg-gray-100 flex items-center justify-center text-black transition-colors duration-300"
                                  aria-label={social.ariaLabel}
                                >
                                  <SocialIcon className="w-5 h-5" />
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-tertiary p-8">
              <div className="p-6 bg-white">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Full Name*"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Phone Number*"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Email*"
                    />
                  </div>

                  <div>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black">
                      <option value="">Please Select Requirement</option>
                      <option value="transcript">Court Transcript</option>
                      <option value="captioning">Live Captioning</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Additional Comments"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded transition-colors duration-300"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachOutSection />
    </div>
  );
}
