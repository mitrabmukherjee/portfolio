"use client";
import { Phone, Mail, Share2, Facebook, Loader2, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import ReachOutSection from "@/app/components/ReachOutSection";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface ContactInfoItem {
  icon: string;
  title: string;
  content?: string;
  socialLinks?: Array<{
    icon: string;
    href: string;
    ariaLabel: string;
  }>;
}

interface ContactPageContent {
  header: {
    title: string;
  };
  sectionHeader: {
    title: string;
  };
  contactInfo: ContactInfoItem[];
}

export default function ContactPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [content, setContent] = useState<ContactPageContent | null>(null);
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
    e.preventDefault();

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not ready. Please try again.");
      return;
    }

    setLoading(true);
    try {
      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
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
      } else {
        toast.error(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
            backgroundImage: "url('/images/innerbg.avif')",
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
                                  : social.icon === "Linkedin"
                                  ? Linkedin
                                  : Facebook;

                              return (
                                <a
                                  key={socialIndex}
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
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
