"use client";
import {
  Phone,
  Mail,
  Share2,
  Facebook,
  Youtube,
  Instagram,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import ReachOutSection from "@/app/components/ReachOutSection";
import { toast } from "sonner";

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

export default function ContactPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "",
    comments: "",
  });

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const response = await fetch("/content/contact-page.json");
      const data = await response.json();
      setContent(data);
      setLoading(false);
    };
    fetchContent();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          requirement: "",
          comments: "",
        });
      }
    } catch {
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!content || loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-secondary animate-spin" />
          <p className="text-lg text-gray-600 font-alice">Loading content...</p>
        </div>
      </div>
    );
  }

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
                {content.contactInfo.map((item: any, index: any) => {
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
                            {item.socialLinks.map(
                              (social: any, socialIndex: any) => {
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
                              }
                            )}
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Full Name*"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Phone Number*"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-black"
                      placeholder="Email*"
                    />
                  </div>

                  <div>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary text-black"
                    >
                      <option value="">Please Select Requirement</option>
                      <option value="transcript">Court Transcript</option>
                      <option value="captioning">Live Captioning</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
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
